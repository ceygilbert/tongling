import "dotenv/config";
import mysql from "mysql2/promise";
import fs from "fs";
import path from "path";

export const inMemoryDB = {
  products: [
    {
      id: "1",
      title: "European Flax Linen",
      description: "Our premium 100% European Flax Linen is sourced from the finest fields in Europe. This fabric is celebrated for its exceptional breathability, natural strength, and a signature crisp texture that softens beautifully over time.",
      dimensions: "150 CM WIDTH",
      material: "100% EUROPEAN FLAX",
      technique: "PLAIN WEAVE",
      status: "CORE COLLECTION",
      lifestyleImage: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80",
      productImage: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1200&q=80",
      price: 28.50,
      category: 'SHIRTING',
      process: 'PIECE_DYED',
      availability: 'IN_STOCK',
      composition: 'Pure linen',
      weaveHarvest: "Our pure linen flax fibers are harvested from cooperative agricultural farms of Normandy, Northern France. These delicate crops are organic-grade spun under stringent water-conserving wet conditions to maximize filament tensile strength.",
      weaveHarvestOrigin: "Regional intellectual property — France",
      packagingDelivery: "Every fabric piece is hand-rolled around our custom lignin-free conservation cores and enclosed in luxury linen protective sleeves. Delivered globally via carbon-neutral white-glove couriers in pristine condition.",
      packagingDeliveryCourier: "Free tracked courier worldwide — Shipped within 24 hours"
    },
    {
      id: "2",
      title: "Linen–Tencel Blend",
      description: "A perfect marriage of nature and science. The strength of linen meets the silky drape of Tencel. This blend offers a luxurious sheen and a cooling touch, making it ideal for high-end fashion and summer drapery.",
      dimensions: "145 CM WIDTH",
      material: "LINEN / TENCEL",
      technique: "TWILL WEAVE",
      status: "SUSTAINABLE LINE",
      lifestyleImage: "https://images.unsplash.com/photo-1595853035070-59a39fe84de3?auto=format&fit=crop&w=1200&q=80",
      productImage: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=80",
      price: 32.00,
      category: 'GARMENT',
      process: 'YARN_DYED',
      availability: 'IN_STOCK',
      composition: 'Linen Tencel',
      weaveHarvest: "Our pure linen flax fibers are harvested from cooperative agricultural farms of Normandy, Northern France. These delicate crops are organic-grade spun under stringent water-conserving wet conditions to maximize filament tensile strength.",
      weaveHarvestOrigin: "Regional intellectual property — France",
      packagingDelivery: "Every fabric piece is hand-rolled around our custom lignin-free conservation cores and enclosed in luxury linen protective sleeves. Delivered globally via carbon-neutral white-glove couriers in pristine condition.",
      packagingDeliveryCourier: "Free tracked courier worldwide — Shipped within 24 hours"
    },
    {
      id: "3",
      title: "Jacquard Woven Linen",
      description: "Intricate patterns woven directly into the fabric. Our Jacquard series combines traditional craftsmanship with modern design, creating a rich, textured surface that adds depth and sophistication to any interior.",
      dimensions: "140 CM WIDTH",
      material: "LINEN BLEND",
      technique: "JACQUARD WEAVE",
      status: "ARTISAN SERIES",
      lifestyleImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      productImage: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80",
      price: 45.00,
      category: 'TEXTURE',
      process: 'SPECIAL_FINISH',
      availability: 'MAKE_TO_ORDER',
      composition: 'Linen-wool',
      weaveHarvest: "Our pure linen flax fibers are harvested from cooperative agricultural farms of Normandy, Northern France. These delicate crops are organic-grade spun under stringent water-conserving wet conditions to maximize filament tensile strength.",
      weaveHarvestOrigin: "Regional intellectual property — France",
      packagingDelivery: "Every fabric piece is hand-rolled around our custom lignin-free conservation cores and enclosed in luxury linen protective sleeves. Delivered globally via carbon-neutral white-glove couriers in pristine condition.",
      packagingDeliveryCourier: "Free tracked courier worldwide — Shipped within 24 hours"
    },
    {
      id: "4",
      title: "Eco Liva Viscose Blend",
      description: "Featuring Eco Liva Viscose, this blend provides a fluid, liquid-like drape and a soft hand-feel. It is a conscious choice for those seeking the natural look of linen with enhanced comfort and sustainability.",
      dimensions: "148 CM WIDTH",
      material: "LINEN / ECO VISCOSE",
      technique: "PLAIN WEAVE",
      status: "ECO-FRIENDLY",
      lifestyleImage: "https://images.unsplash.com/photo-1518131148949-020cf3d7948f?auto=format&fit=crop&w=1200&q=80",
      productImage: "https://images.unsplash.com/photo-1562582664-8a8803c031ca?auto=format&fit=crop&w=1200&q=80",
      price: 24.50,
      category: 'SHIRTING',
      process: 'PIECE_DYED',
      availability: 'IN_STOCK',
      composition: 'Linen Viscose',
      weaveHarvest: "Our pure linen flax fibers are harvested from cooperative agricultural farms of Normandy, Northern France. These delicate crops are organic-grade spun under stringent water-conserving wet conditions to maximize filament tensile strength strength.",
      weaveHarvestOrigin: "Regional intellectual property — France",
      packagingDelivery: "Every fabric piece is hand-rolled around our custom lignin-free conservation cores and enclosed in luxury linen protective sleeves. Delivered globally via carbon-neutral white-glove couriers in pristine condition.",
      packagingDeliveryCourier: "Free tracked courier worldwide — Shipped within 24 hours"
    },
    {
      id: "5",
      title: "YARN-DYED STRIPES",
      description: "Classic elegance through yarn-dyed precision. The colors are integrated into the fibers before weaving, resulting in vibrant, long-lasting patterns and a superior depth of color that piece-dyeing cannot match.",
      dimensions: "150 CM WIDTH",
      material: "100% LINEN",
      technique: "YARN-DYED",
      status: "PREMIUM FINISH",
      lifestyleImage: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=80",
      productImage: "https://images.unsplash.com/photo-1554188248-986adbb73be4?auto=format&fit=crop&w=1200&q=80",
      price: 35.00,
      category: 'SUIT',
      process: 'YARN_DYED',
      availability: 'MAKE_TO_ORDER',
      composition: 'Pure linen',
      weaveHarvest: "Our pure linen flax fibers are harvested from cooperative agricultural farms of Normandy, Northern France. These delicate crops are organic-grade spun under stringent water-conserving wet conditions to maximize filament tensile strength.",
      weaveHarvestOrigin: "Regional intellectual property — France",
      packagingDelivery: "Every fabric piece is hand-rolled around our custom lignin-free conservation cores and enclosed in luxury linen protective sleeves. Delivered globally via carbon-neutral white-glove couriers in pristine condition.",
      packagingDeliveryCourier: "Free tracked courier worldwide — Shipped within 24 hours"
    },
    {
      id: "6",
      title: "FUNCTIONAL LINEN",
      description: "Advanced textiles for modern living. This collection features specialized finishes including anti-wrinkle and anti-UV treatments, providing the timeless beauty of linen with the convenience of high-performance technology.",
      dimensions: "150 CM WIDTH",
      material: "LINEN / SPANDEX",
      technique: "FUNCTIONAL FINISH",
      status: "INNOVATION",
      lifestyleImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      productImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      price: 38.00,
      category: 'GARMENT',
      process: 'SPECIAL_FINISH',
      availability: 'IN_STOCK',
      composition: 'linen-cotton',
      weaveHarvest: "Our pure linen flax fibers are harvested from cooperative agricultural farms of Normandy, Northern France. These delicate crops are organic-grade spun under stringent water-conserving wet conditions to maximize filament tensile strength.",
      weaveHarvestOrigin: "Regional intellectual property — France",
      packagingDelivery: "Every fabric piece is hand-rolled around our custom lignin-free conservation cores and enclosed in luxury linen protective sleeves. Delivered globally via carbon-neutral white-glove couriers in pristine condition.",
      packagingDeliveryCourier: "Free tracked courier worldwide — Shipped within 24 hours"
    },
    {
      id: "7",
      title: "DIGITAL PRINTED LINEN",
      description: "Unleashing creative possibilities with high-definition digital printing. Our linen serves as a canvas for intricate designs and vibrant colors, perfect for statement fashion and bespoke home decor.",
      dimensions: "145 CM WIDTH",
      material: "LINEN / COTTON",
      technique: "DIGITAL PRINT",
      status: "CREATIVE LINE",
      lifestyleImage: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80",
      productImage: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1200&q=80",
      price: 42.00,
      category: 'TEXTURE',
      process: 'PRINTING',
      availability: 'IN_STOCK',
      composition: 'linen-cotton',
      weaveHarvest: "Our pure linen flax fibers are harvested from cooperative agricultural farms of Normandy, Northern France. These delicate crops are organic-grade spun under stringent water-conserving wet conditions to maximize filament tensile strength.",
      weaveHarvestOrigin: "Regional intellectual property — France",
      packagingDelivery: "Every fabric piece is hand-rolled around our custom lignin-free conservation cores and enclosed in luxury linen protective sleeves. Delivered globally via carbon-neutral white-glove couriers in pristine condition.",
      packagingDeliveryCourier: "Free tracked courier worldwide — Shipped within 24 hours"
    }
  ],
  categories: [
    { id: "1", name: "SHIRTING" },
    { id: "2", name: "GARMENT" },
    { id: "3", name: "TEXTURE" },
    { id: "4", name: "SUIT" },
  ],
  processes: [
    { id: "1", name: "PIECE_DYED" },
    { id: "2", name: "YARN_DYED" },
    { id: "3", name: "SPECIAL_FINISH" },
    { id: "4", name: "PRINTING" },
  ],
  compositions: [
    { id: "1", name: "Pure linen" },
    { id: "2", name: "Linen Tencel" },
    { id: "3", name: "Linen-wool" },
    { id: "4", name: "Linen Viscose" },
    { id: "5", name: "linen-cotton" },
  ]
};


const DB_FILE = path.join(process.cwd(), 'db-fallback.json');

function loadFallbackDB() {
  if (fs.existsSync(DB_FILE)) {
    try {
      const data = fs.readFileSync(DB_FILE, 'utf8');
      const parsed = JSON.parse(data);
      if (parsed.products && parsed.categories) {
        Object.assign(inMemoryDB, parsed);
        console.log("Loaded fallback database from db-fallback.json");
      }
    } catch (err) {
      console.error("Error reading db-fallback.json", err);
    }
  } else {
    saveFallbackDB();
  }
}

function saveFallbackDB() {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(inMemoryDB, null, 2));
  } catch (err) {
    console.error("Error writing db-fallback.json", err);
  }
}

// Immediately load
loadFallbackDB();

const isCloudRun = !!(process.env.K_SERVICE || process.env.K_REVISION || process.env.CLOUD_RUN_JOB);

let dbHost = process.env.DB_HOST || "localhost";

// If we are running on Hostinger (not Cloud Run) and the DB_HOST is set to the external Hostinger IP,
// we should connect using 'localhost' instead because the web app and database reside on the same server.
if (!isCloudRun && (dbHost === "153.92.15.62" || dbHost === "153.92.15.63" || dbHost.startsWith("153.92."))) {
  console.log("Detecting Hostinger production environment. Overriding database host to localhost.");
  dbHost = "localhost";
}

const hasDbConfig = !!process.env.DB_HOST;

const poolConfig = {
  host: dbHost,
  port: parseInt(process.env.DB_PORT || "3306", 10),
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE || process.env.DB_NAME || "sincerity_db",
  connectionLimit: 10,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
};

let pool: mysql.Pool | null = null;

if (hasDbConfig) {
  try {
    pool = mysql.createPool(poolConfig);
    console.log("Initialized MySQL/MariaDB connection pool for host:", poolConfig.host);
  } catch (error) {
    console.warn("Could not create MySQL pool:", error);
  }
}

export async function initializeDatabase() {
  if (!pool) {
    console.log("MySQL/MariaDB connection not configured (DB_HOST missing). Running on in-memory server database fallback.");
    return false;
  }
  try {
    const connection = await pool.getConnection();
    console.log("Successfully connected to MySQL/MariaDB database. Verifying schemas...");

    // Create categories table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS categories (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL UNIQUE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);

    // Create processes table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS processes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL UNIQUE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);

    // Create compositions table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS compositions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL UNIQUE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);

    // Create products table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        dimensions VARCHAR(255),
        material VARCHAR(255),
        technique VARCHAR(255),
        status VARCHAR(255),
        lifestyleImage TEXT,
        productImage TEXT,
        price DECIMAL(10, 2),
        showPrice TINYINT(1) DEFAULT 1,
        category VARCHAR(255),
        process VARCHAR(255),
        availability VARCHAR(255),
        composition VARCHAR(255),
        weaveHarvest TEXT,
        weaveHarvestOrigin VARCHAR(255),
        packagingDelivery TEXT,
        packagingDeliveryCourier VARCHAR(255)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);

    // Dynamic schema upgrade to add 'showPrice' if the table already exists but lacks it
    try {
      const [columns]: any = await connection.query("SHOW COLUMNS FROM products LIKE 'showPrice'");
      if (columns.length === 0) {
        console.log("Adding 'showPrice' column to products table...");
        await connection.query("ALTER TABLE products ADD COLUMN showPrice TINYINT(1) DEFAULT 1 AFTER price");
      }
    } catch (colErr) {
      console.warn("Could not check/add 'showPrice' column:", colErr);
    }

    // Check categories and seed
    const [catRows]: any = await connection.query("SELECT COUNT(*) as count FROM categories");
    if (catRows[0].count === 0) {
      console.log("Seeding default categories...");
      for (const cat of inMemoryDB.categories) {
        await connection.query("INSERT IGNORE INTO categories (name) VALUES (?)", [cat.name]);
      }
    }

    // Check processes and seed
    const [procRows]: any = await connection.query("SELECT COUNT(*) as count FROM processes");
    if (procRows[0].count === 0) {
      console.log("Seeding default processes...");
      for (const proc of inMemoryDB.processes) {
        await connection.query("INSERT IGNORE INTO processes (name) VALUES (?)", [proc.name]);
      }
    }

    // Check compositions and seed
    const [compRows]: any = await connection.query("SELECT COUNT(*) as count FROM compositions");
    if (compRows[0].count === 0) {
      console.log("Seeding default compositions...");
      for (const comp of inMemoryDB.compositions) {
        await connection.query("INSERT IGNORE INTO compositions (name) VALUES (?)", [comp.name]);
      }
    }

    // Check products and seed
    const [prodRows]: any = await connection.query("SELECT COUNT(*) as count FROM products");
    if (prodRows[0].count === 0) {
      console.log("Seeding default products...");
      for (const prod of inMemoryDB.products) {
        await connection.query(`
          INSERT INTO products (
            title, description, dimensions, material, technique, status,
            lifestyleImage, productImage, price, showPrice, category, process, availability, composition,
            weaveHarvest, weaveHarvestOrigin, packagingDelivery, packagingDeliveryCourier
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `, [
          prod.title, prod.description, prod.dimensions, prod.material, prod.technique, prod.status,
          prod.lifestyleImage, prod.productImage, prod.price, 1, prod.category, prod.process, prod.availability, prod.composition,
          prod.weaveHarvest, prod.weaveHarvestOrigin, prod.packagingDelivery, prod.packagingDeliveryCourier
        ]);
      }
    }

    connection.release();
    console.log("Database initialized successfully!");
    return true;
  } catch (error) {
    console.error("Database connection/migration failed:", error);
    return false;
  }
}

export const dbService = {
  // Products
  async getProducts() {
    if (pool) {
      try {
        const [rows]: any = await pool.query("SELECT * FROM products ORDER BY id DESC");
        return rows.map((r: any) => ({
          ...r,
          id: String(r.id),
          price: Number(r.price),
          showPrice: r.showPrice !== 0 // convert tinyint/number to boolean
        }));
      } catch (err) {
        console.warn("MySQL query for products failed, using in-memory:", err);
      }
    }
    return inMemoryDB.products;
  },

  async createProduct(prod: any) {
    if (pool) {
      try {
        const [result]: any = await pool.query(`
          INSERT INTO products (
            title, description, dimensions, material, technique, status,
            lifestyleImage, productImage, price, showPrice, category, process, availability, composition,
            weaveHarvest, weaveHarvestOrigin, packagingDelivery, packagingDeliveryCourier
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `, [
          prod.title || "", prod.description || "", prod.dimensions || "", prod.material || "",
          prod.technique || "", prod.status || "", prod.lifestyleImage || "", prod.productImage || "",
          prod.price || 0, prod.showPrice !== false ? 1 : 0, prod.category || "", prod.process || "", prod.availability || "IN_STOCK", prod.composition || "",
          prod.weaveHarvest || "", prod.weaveHarvestOrigin || "", prod.packagingDelivery || "", prod.packagingDeliveryCourier || ""
        ]);
        const newId = String(result.insertId);
        return { ...prod, id: newId, showPrice: prod.showPrice !== false };
      } catch (err) {
        console.warn("MySQL insert product failed, using in-memory:", err);
      }
    }
    const newItem = { id: Date.now().toString(), ...prod, showPrice: prod.showPrice !== false };
    inMemoryDB.products.push(newItem);
    saveFallbackDB();
      saveFallbackDB();
    return newItem;
  },

  async updateProduct(id: string, prod: any) {
    if (pool) {
      try {
        await pool.query(`
          UPDATE products SET
            title = ?, description = ?, dimensions = ?, material = ?, technique = ?, status = ?,
            lifestyleImage = ?, productImage = ?, price = ?, showPrice = ?, category = ?, process = ?, availability = ?, composition = ?,
            weaveHarvest = ?, weaveHarvestOrigin = ?, packagingDelivery = ?, packagingDeliveryCourier = ?
          WHERE id = ?
        `, [
          prod.title || "", prod.description || "", prod.dimensions || "", prod.material || "",
          prod.technique || "", prod.status || "", prod.lifestyleImage || "", prod.productImage || "",
          prod.price || 0, prod.showPrice !== false ? 1 : 0, prod.category || "", prod.process || "", prod.availability || "IN_STOCK", prod.composition || "",
          prod.weaveHarvest || "", prod.weaveHarvestOrigin || "", prod.packagingDelivery || "", prod.packagingDeliveryCourier || "",
          id
        ]);
        return { ...prod, id, showPrice: prod.showPrice !== false };
      } catch (err) {
        console.warn("MySQL update product failed, using in-memory:", err);
      }
    }
    const index = inMemoryDB.products.findIndex((item: any) => item.id === id);
    if (index !== -1) {
      inMemoryDB.products[index] = { ...inMemoryDB.products[index], ...prod, id, showPrice: prod.showPrice !== false };
      saveFallbackDB();
      return inMemoryDB.products[index];
    }
    return null;
  },

  async deleteProduct(id: string) {
    if (pool) {
      try {
        await pool.query("DELETE FROM products WHERE id = ?", [id]);
        return { success: true };
      } catch (err) {
        console.warn("MySQL delete product failed, using in-memory:", err);
      }
    }
    const index = inMemoryDB.products.findIndex((item: any) => item.id === id);
    if (index !== -1) {
      const deleted = inMemoryDB.products.splice(index, 1);
      saveFallbackDB();
      return deleted[0];
    }
    return null;
  },

  // Categories
  async getCategories() {
    if (pool) {
      try {
        const [rows]: any = await pool.query("SELECT * FROM categories ORDER BY id ASC");
        return rows.map((r: any) => ({ ...r, id: String(r.id) }));
      } catch (err) {
        console.warn("MySQL query for categories failed, using in-memory:", err);
      }
    }
    return inMemoryDB.categories;
  },

  async createCategory(cat: any) {
    if (pool) {
      try {
        const [result]: any = await pool.query("INSERT INTO categories (name) VALUES (?)", [cat.name]);
        return { id: String(result.insertId), name: cat.name };
      } catch (err) {
        console.warn("MySQL insert category failed, using in-memory:", err);
      }
    }
    const newItem = { id: Date.now().toString(), ...cat };
    inMemoryDB.categories.push(newItem);
      saveFallbackDB();
    return newItem;
  },

  async updateCategory(id: string, cat: any) {
    if (pool) {
      try {
        await pool.query("UPDATE categories SET name = ? WHERE id = ?", [cat.name, id]);
        return { id, name: cat.name };
      } catch (err) {
        console.warn("MySQL update category failed, using in-memory:", err);
      }
    }
    const index = inMemoryDB.categories.findIndex((item: any) => item.id === id);
    if (index !== -1) {
      inMemoryDB.categories[index] = { ...inMemoryDB.categories[index], ...cat, id };
      saveFallbackDB();
      return inMemoryDB.categories[index];
    }
    return null;
  },

  async deleteCategory(id: string) {
    if (pool) {
      try {
        await pool.query("DELETE FROM categories WHERE id = ?", [id]);
        return { success: true };
      } catch (err) {
        console.warn("MySQL delete category failed, using in-memory:", err);
      }
    }
    const index = inMemoryDB.categories.findIndex((item: any) => item.id === id);
    if (index !== -1) {
      const deleted = inMemoryDB.categories.splice(index, 1);
      saveFallbackDB();
      return deleted[0];
    }
    return null;
  },

  // Processes
  async getProcesses() {
    if (pool) {
      try {
        const [rows]: any = await pool.query("SELECT * FROM processes ORDER BY id ASC");
        return rows.map((r: any) => ({ ...r, id: String(r.id) }));
      } catch (err) {
        console.warn("MySQL query for processes failed, using in-memory:", err);
      }
    }
    return inMemoryDB.processes;
  },

  async createProcess(proc: any) {
    if (pool) {
      try {
        const [result]: any = await pool.query("INSERT INTO processes (name) VALUES (?)", [proc.name]);
        return { id: String(result.insertId), name: proc.name };
      } catch (err) {
        console.warn("MySQL insert process failed, using in-memory:", err);
      }
    }
    const newItem = { id: Date.now().toString(), ...proc };
    inMemoryDB.processes.push(newItem);
      saveFallbackDB();
    return newItem;
  },

  async updateProcess(id: string, proc: any) {
    if (pool) {
      try {
        await pool.query("UPDATE processes SET name = ? WHERE id = ?", [proc.name, id]);
        return { id, name: proc.name };
      } catch (err) {
        console.warn("MySQL update process failed, using in-memory:", err);
      }
    }
    const index = inMemoryDB.processes.findIndex((item: any) => item.id === id);
    if (index !== -1) {
      inMemoryDB.processes[index] = { ...inMemoryDB.processes[index], ...proc, id };
      saveFallbackDB();
      return inMemoryDB.processes[index];
    }
    return null;
  },

  async deleteProcess(id: string) {
    if (pool) {
      try {
        await pool.query("DELETE FROM processes WHERE id = ?", [id]);
        return { success: true };
      } catch (err) {
        console.warn("MySQL delete process failed, using in-memory:", err);
      }
    }
    const index = inMemoryDB.processes.findIndex((item: any) => item.id === id);
    if (index !== -1) {
      const deleted = inMemoryDB.processes.splice(index, 1);
      saveFallbackDB();
      return deleted[0];
    }
    return null;
  },

  // Compositions
  async getCompositions() {
    if (pool) {
      try {
        const [rows]: any = await pool.query("SELECT * FROM compositions ORDER BY id ASC");
        return rows.map((r: any) => ({ ...r, id: String(r.id) }));
      } catch (err) {
        console.warn("MySQL query for compositions failed, using in-memory:", err);
      }
    }
    return inMemoryDB.compositions;
  },

  async createComposition(comp: any) {
    if (pool) {
      try {
        const [result]: any = await pool.query("INSERT INTO compositions (name) VALUES (?)", [comp.name]);
        return { id: String(result.insertId), name: comp.name };
      } catch (err) {
        console.warn("MySQL insert composition failed, using in-memory:", err);
      }
    }
    const newItem = { id: Date.now().toString(), ...comp };
    inMemoryDB.compositions.push(newItem);
      saveFallbackDB();
    return newItem;
  },

  async updateComposition(id: string, comp: any) {
    if (pool) {
      try {
        await pool.query("UPDATE compositions SET name = ? WHERE id = ?", [comp.name, id]);
        return { id, name: comp.name };
      } catch (err) {
        console.warn("MySQL update composition failed, using in-memory:", err);
      }
    }
    const index = inMemoryDB.compositions.findIndex((item: any) => item.id === id);
    if (index !== -1) {
      inMemoryDB.compositions[index] = { ...inMemoryDB.compositions[index], ...comp, id };
      saveFallbackDB();
      return inMemoryDB.compositions[index];
    }
    return null;
  },

  async deleteComposition(id: string) {
    if (pool) {
      try {
        await pool.query("DELETE FROM compositions WHERE id = ?", [id]);
        return { success: true };
      } catch (err) {
        console.warn("MySQL delete composition failed, using in-memory:", err);
      }
    }
    const index = inMemoryDB.compositions.findIndex((item: any) => item.id === id);
    if (index !== -1) {
      const deleted = inMemoryDB.compositions.splice(index, 1);
      saveFallbackDB();
      return deleted[0];
    }
    return null;
  },

  async checkConnection() {
    if (!pool) {
      return {
        configured: false,
        connected: false,
        message: "No DB_HOST configured in environment. The system is falling back to in-memory database storage.",
        config: {
          host: poolConfig.host,
          port: poolConfig.port,
          user: poolConfig.user,
          database: poolConfig.database,
        }
      };
    }
    try {
      const conn = await pool.getConnection();
      conn.release();
      return {
        configured: true,
        connected: true,
        message: "Successfully connected to MySQL/MariaDB database!",
        config: {
          host: poolConfig.host,
          port: poolConfig.port,
          user: poolConfig.user,
          database: poolConfig.database,
        }
      };
    } catch (err: any) {
      return {
        configured: true,
        connected: false,
        message: err.message || String(err),
        error: {
          code: err.code,
          errno: err.errno,
          sqlState: err.sqlState,
          fatal: err.fatal
        },
        config: {
          host: poolConfig.host,
          port: poolConfig.port,
          user: poolConfig.user,
          database: poolConfig.database,
        }
      };
    }
  }
};
