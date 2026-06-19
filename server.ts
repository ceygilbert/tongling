import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { inMemoryDB } from "./server/db.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Admin login route
  app.post("/api/admin/login", (req, res) => {
    const { email, password } = req.body;
    if (email === "admin@admin.com" && password === "Admin1234!$") {
      res.json({ token: "admin-token-1234" });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  });

  // Basic auth middleware mock
  const authMiddleware = (req: any, res: any, next: any) => {
    const auth = req.headers.authorization;
    if (auth === "Bearer admin-token-1234") {
      next();
    } else {
      res.status(401).json({ error: "Unauthorized" });
    }
  };

  const getCrudRoutes = (resourceName: "products" | "categories" | "processes" | "compositions") => {
    app.get(`/api/admin/${resourceName}`, authMiddleware, (req, res) => {
      res.json(inMemoryDB[resourceName]);
    });
    
    app.post(`/api/admin/${resourceName}`, authMiddleware, (req, res) => {
      const newItem = { id: Date.now().toString(), ...req.body };
      inMemoryDB[resourceName].push(newItem);
      res.json(newItem);
    });

    app.put(`/api/admin/${resourceName}/:id`, authMiddleware, (req, res) => {
      const index = inMemoryDB[resourceName].findIndex((item: any) => item.id === req.params.id);
      if (index !== -1) {
        inMemoryDB[resourceName][index] = { ...inMemoryDB[resourceName][index], ...req.body };
        res.json(inMemoryDB[resourceName][index]);
      } else {
        res.status(404).json({ error: "Not found" });
      }
    });

    app.delete(`/api/admin/${resourceName}/:id`, authMiddleware, (req, res) => {
      const index = inMemoryDB[resourceName].findIndex((item: any) => item.id === req.params.id);
      if (index !== -1) {
        const deleted = inMemoryDB[resourceName].splice(index, 1);
        res.json(deleted[0]);
      } else {
        res.status(404).json({ error: "Not found" });
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
