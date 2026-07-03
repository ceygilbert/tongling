import "dotenv/config";
import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import multer from "multer";
import { dbService, initializeDatabase } from "./server/db.js";

// Get _dirname dynamically (works for both TSX in ESM mode and ESBuild in CJS mode)
const _filename = typeof __filename !== 'undefined' ? __filename : fileURLToPath(import.meta.url);
const _dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(_filename);

async function startServer() {
  const app = express();
  
  // Use port 3000 inside the AI Studio container.
  // In other environments (like Hostinger), bind to process.env.PORT if available.
  let PORT = 3000;
  if (process.env.PORT) {
    const isCloudRun = !!(process.env.K_SERVICE || process.env.K_REVISION || process.env.CLOUD_RUN_JOB);
    if (!isCloudRun) {
      PORT = parseInt(process.env.PORT, 10);
    }
  }

  app.use(express.json());

  // Ensure uploads directory exists on host
  const uploadsDir = path.join(process.cwd(), "uploads");
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }

  // Serve uploads directory as static route
  app.use("/uploads", express.static(uploadsDir));

  // Initialize database schemas and seed default values if DB is configured
  await initializeDatabase();

  // Admin login route
  app.post("/api/admin/login", (req, res) => {
    const { email, password } = req.body;
    if (email === "info@tonglingsinceritylinen.com" && password === "AdmTL13572469!$") {
      res.json({ token: "admin-token-1234" });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  });

  // Basic auth middleware
  const authMiddleware = (req: any, res: any, next: any) => {
    const auth = req.headers.authorization;
    if (auth === "Bearer admin-token-1234") {
      next();
    } else {
      res.status(401).json({ error: "Unauthorized" });
    }
  };

  // Configure multer storage engine
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadsDir);
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const ext = path.extname(file.originalname).toLowerCase();
      cb(null, "image-" + uniqueSuffix + ext);
    }
  });

  const upload = multer({
    storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // Max 10MB
    fileFilter: (req, file, cb) => {
      const allowedTypes = /jpeg|jpg|png|gif|webp/;
      const ext = allowedTypes.test(path.extname(file.originalname).toLowerCase());
      const mime = allowedTypes.test(file.mimetype);
      if (ext && mime) {
        cb(null, true);
      } else {
        cb(new Error("Only image files (jpeg, jpg, png, gif, webp) are permitted."));
      }
    }
  });

  // File upload route
  app.post("/api/admin/upload", authMiddleware, upload.single("image"), (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }
      const fileUrl = `/uploads/${req.file.filename}`;
      res.json({ url: fileUrl });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  // DB diagnostic route
  app.get("/api/admin/db-status", async (req, res) => {
    try {
      const status = await dbService.checkConnection();
      res.json(status);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  // Public read endpoints for dynamic content delivery
  app.get("/api/public/products", async (req, res) => {
    try {
      const data = await dbService.getProducts();
      res.json(data);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  app.get("/api/public/categories", async (req, res) => {
    try {
      const data = await dbService.getCategories();
      res.json(data);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  app.get("/api/public/processes", async (req, res) => {
    try {
      const data = await dbService.getProcesses();
      res.json(data);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  app.get("/api/public/compositions", async (req, res) => {
    try {
      const data = await dbService.getCompositions();
      res.json(data);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  const getCrudRoutes = (resourceName: "products" | "categories" | "processes" | "compositions") => {
    const getFn = 
      resourceName === "products" ? dbService.getProducts :
      resourceName === "categories" ? dbService.getCategories :
      resourceName === "processes" ? dbService.getProcesses :
      dbService.getCompositions;

    const createFn =
      resourceName === "products" ? dbService.createProduct :
      resourceName === "categories" ? dbService.createCategory :
      resourceName === "processes" ? dbService.createProcess :
      dbService.createComposition;

    const updateFn =
      resourceName === "products" ? dbService.updateProduct :
      resourceName === "categories" ? dbService.updateCategory :
      resourceName === "processes" ? dbService.updateProcess :
      dbService.updateComposition;

    const deleteFn =
      resourceName === "products" ? dbService.deleteProduct :
      resourceName === "categories" ? dbService.deleteCategory :
      resourceName === "processes" ? dbService.deleteProcess :
      dbService.deleteComposition;

    app.get(`/api/admin/${resourceName}`, authMiddleware, async (req, res) => {
      try {
        const data = await getFn();
        res.json(data);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    });
    
    app.post(`/api/admin/${resourceName}`, authMiddleware, async (req, res) => {
      try {
        const newItem = await createFn(req.body);
        res.json(newItem);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    });

    app.put(`/api/admin/${resourceName}/:id`, authMiddleware, async (req, res) => {
      try {
        const updated = await updateFn(req.params.id, req.body);
        if (updated) {
          res.json(updated);
        } else {
          res.status(404).json({ error: "Not found" });
        }
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    });

    app.delete(`/api/admin/${resourceName}/:id`, authMiddleware, async (req, res) => {
      try {
        const deleted = await deleteFn(req.params.id);
        if (deleted) {
          res.json(deleted);
        } else {
          res.status(404).json({ error: "Not found" });
        }
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    });
  };

  getCrudRoutes("products");
  getCrudRoutes("categories");
  getCrudRoutes("processes");
  getCrudRoutes("compositions");

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
