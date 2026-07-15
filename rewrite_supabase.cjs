const fs = require('fs');

const content = `import "dotenv/config";
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import * as path from "path";

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
      description: "Combining the best of both worlds, this fabric blends the rustic texture of linen with the silky drape and eco-friendly properties of Tencel. Ideal for garments that require fluid movement and a soft touch.",
      dimensions: "145 CM WIDTH",
      material: "50% LINEN / 50% TENCEL",
      technique: "TWILL WEAVE",
      status: "SUSTAINABLE EDIT",
      lifestyleImage: "https://images.unsplash.com/photo-1505022610485-0249ba5b3675?auto=format&fit=crop&w=1200&q=80",
      productImage: "https://images.unsplash.com/photo-1596423735880-5a33c16a69bf?auto=format&fit=crop&w=1200&q=80",
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
      title: "Heavyweight Linen Canvas",
      description: "Built for durability and structure. This heavyweight canvas is perfect for upholstery, accessories, and structured outerwear. It features a rugged texture while maintaining the natural elegance of linen.",
      dimensions: "160 CM WIDTH",
      material: "100% LINEN",
      technique: "BASKET WEAVE",
      status: "ARTISAN CRAFT",
      lifestyleImage: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&w=1200&q=80",
      productImage: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&w=1200&q=80",
      price: 45.00,
      category: 'TEXTURE',
      process: 'PIECE_DYED',
      availability: 'MAKE_TO_ORDER',
      composition: 'Pure linen',
      weaveHarvest: "Our pure linen flax fibers are harvested from cooperative agricultural farms of Normandy, Northern France. These delicate crops are organic-grade spun under stringent water-conserving wet conditions to maximize filament tensile strength.",
      weaveHarvestOrigin: "Regional intellectual property — France",
      packagingDelivery: "Every fabric piece is hand-rolled around our custom lignin-free conservation cores and enclosed in luxury linen protective sleeves. Delivered globally via carbon-neutral white-glove couriers in pristine condition.",
      packagingDeliveryCourier: "Free tracked courier worldwide — Shipped within 24 hours"
    },
    {
      id: "4",
      title: "Linen Viscose Flow",
      description: "A fabric designed for motion. The addition of viscose to our premium linen creates a fabric with exceptional drape, a subtle sheen, and incredible softness. Perfect for summer dresses and relaxed tailoring.",
      dimensions: "140 CM WIDTH",
      material: "70% LINEN / 30% VISCOSE",
      technique: "SATIN WEAVE",
      status: "SUMMER ESSENTIAL",
      lifestyleImage: "https://images.unsplash.com/photo-1434389670869-c6e45f9fb0db?auto=format&fit=crop&w=1200&q=80",
      productImage: "https://images.unsplash.com/photo-1598808503746-f34c53b93f3e?auto=format&fit=crop&w=1200&q=80",
      price: 24.50,
      category: 'SHIRTING',
      process: 'PIECE_DYED',
      availability: 'IN_STOCK',
      composition: 'Linen Viscose',
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

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;

export const supabase = (supabaseUrl && supabaseKey) 
  ? createClient(supabaseUrl, supabaseKey) 
  : null;

export async function initializeDatabase() {
  if (!supabase) {
    console.log("Supabase connection not configured (SUPABASE_URL or KEY missing). Running on in-memory server database fallback.");
    return false;
  }
  
  console.log("Successfully connected to Supabase.");
  
  // Try to seed data if tables exist but are empty
  try {
    // Categories
    const { data: catData, error: catErr } = await supabase.from('categories').select('count', { count: 'exact', head: true });
    if (!catErr && catData !== null && catData.length === 0) {
      console.log("Seeding categories...");
      await supabase.from('categories').insert(inMemoryDB.categories.map(c => ({ name: c.name })));
    }

    // Processes
    const { data: procData, error: procErr } = await supabase.from('processes').select('count', { count: 'exact', head: true });
    if (!procErr && procData !== null && procData.length === 0) {
      console.log("Seeding processes...");
      await supabase.from('processes').insert(inMemoryDB.processes.map(p => ({ name: p.name })));
    }

    // Compositions
    const { data: compData, error: compErr } = await supabase.from('compositions').select('count', { count: 'exact', head: true });
    if (!compErr && compData !== null && compData.length === 0) {
      console.log("Seeding compositions...");
      await supabase.from('compositions').insert(inMemoryDB.compositions.map(c => ({ name: c.name })));
    }

    // Products
    const { data: prodData, error: prodErr } = await supabase.from('products').select('count', { count: 'exact', head: true });
    if (!prodErr && prodData !== null && prodData.length === 0) {
      console.log("Seeding products...");
      const mappedProducts = inMemoryDB.products.map(p => {
        const productData: any = { ...p };
        delete productData.id; // Let DB auto-increment
        productData.showPrice = true;
        if (productData.galleryImages && Array.isArray(productData.galleryImages)) {
          productData.galleryImages = JSON.stringify(productData.galleryImages);
        } else {
          productData.galleryImages = '[]';
        }
        return productData;
      });
      await supabase.from('products').insert(mappedProducts);
    }
  } catch (e) {
    console.warn("Could not seed tables. Please ensure they are created in your Supabase project.");
  }

  return true;
}

export const dbService = {
  // Products
  async getProducts() {
    if (supabase) {
      try {
        const { data, error } = await supabase.from('products').select('*').order('id', { ascending: false });
        if (error) throw error;
        return data.map((r: any) => ({
          ...r,
          id: String(r.id),
          price: Number(r.price),
          showPrice: r.showPrice !== false,
          galleryImages: typeof r.galleryImages === 'string' ? JSON.parse(r.galleryImages) : (r.galleryImages || [])
        }));
      } catch (err) {
        console.warn("Supabase query for products failed, using in-memory:", err);
      }
    }
    return inMemoryDB.products;
  },

  async getProduct(id: string) {
    if (supabase) {
      try {
        const { data, error } = await supabase.from('products').select('*').eq('id', id).single();
        if (error) throw error;
        if (data) {
          return {
            ...data,
            id: String(data.id),
            price: Number(data.price),
            showPrice: data.showPrice !== false,
            galleryImages: typeof data.galleryImages === 'string' ? JSON.parse(data.galleryImages) : (data.galleryImages || [])
          };
        }
      } catch (err) {
        console.warn("Supabase query for product failed, using in-memory:", err);
      }
    }
    return inMemoryDB.products.find((p: any) => p.id === id) || null;
  },

  async createProduct(prod: any) {
    if (supabase) {
      try {
        const productData = { ...prod, showPrice: prod.showPrice !== false };
        if (productData.galleryImages && Array.isArray(productData.galleryImages)) {
          productData.galleryImages = JSON.stringify(productData.galleryImages);
        } else {
          productData.galleryImages = '[]';
        }
        
        const { data, error } = await supabase.from('products').insert(productData).select().single();
        if (error) throw error;
        
        return { 
          ...data, 
          id: String(data.id),
          galleryImages: typeof data.galleryImages === 'string' ? JSON.parse(data.galleryImages) : []
        };
      } catch (err) {
        console.warn("Supabase insert product failed, using in-memory:", err);
      }
    }
    const newItem = { id: Date.now().toString(), ...prod, showPrice: prod.showPrice !== false };
    inMemoryDB.products.unshift(newItem);
    saveFallbackDB();
    return newItem;
  },

  async updateProduct(id: string, prod: any) {
    if (supabase) {
      try {
        const productData = { ...prod, showPrice: prod.showPrice !== false };
        if (productData.galleryImages && Array.isArray(productData.galleryImages)) {
          productData.galleryImages = JSON.stringify(productData.galleryImages);
        }
        
        const { data, error } = await supabase.from('products').update(productData).eq('id', id).select().single();
        if (error) throw error;
        
        return { 
          ...data, 
          id: String(data.id),
          galleryImages: typeof data.galleryImages === 'string' ? JSON.parse(data.galleryImages) : []
        };
      } catch (err) {
        console.warn("Supabase update product failed, using in-memory:", err);
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
    if (supabase) {
      try {
        const { error } = await supabase.from('products').delete().eq('id', id);
        if (error) throw error;
        return { success: true };
      } catch (err) {
        console.warn("Supabase delete product failed, using in-memory:", err);
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
    if (supabase) {
      try {
        const { data, error } = await supabase.from('categories').select('*').order('id', { ascending: true });
        if (error) throw error;
        return data.map((r: any) => ({ ...r, id: String(r.id) }));
      } catch (err) {
        console.warn("Supabase query for categories failed, using in-memory:", err);
      }
    }
    return inMemoryDB.categories;
  },

  async createCategory(cat: any) {
    if (supabase) {
      try {
        const { data, error } = await supabase.from('categories').insert({ name: cat.name }).select().single();
        if (error) throw error;
        return { id: String(data.id), name: data.name };
      } catch (err) {
        console.warn("Supabase insert category failed, using in-memory:", err);
      }
    }
    const newItem = { id: Date.now().toString(), ...cat };
    inMemoryDB.categories.push(newItem);
    saveFallbackDB();
    return newItem;
  },

  async updateCategory(id: string, cat: any) {
    if (supabase) {
      try {
        const { data, error } = await supabase.from('categories').update({ name: cat.name }).eq('id', id).select().single();
        if (error) throw error;
        return { id: String(data.id), name: data.name };
      } catch (err) {
        console.warn("Supabase update category failed, using in-memory:", err);
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
    if (supabase) {
      try {
        const { error } = await supabase.from('categories').delete().eq('id', id);
        if (error) throw error;
        return { success: true };
      } catch (err) {
        console.warn("Supabase delete category failed, using in-memory:", err);
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
    if (supabase) {
      try {
        const { data, error } = await supabase.from('processes').select('*').order('id', { ascending: true });
        if (error) throw error;
        return data.map((r: any) => ({ ...r, id: String(r.id) }));
      } catch (err) {
        console.warn("Supabase query for processes failed, using in-memory:", err);
      }
    }
    return inMemoryDB.processes;
  },

  async createProcess(proc: any) {
    if (supabase) {
      try {
        const { data, error } = await supabase.from('processes').insert({ name: proc.name }).select().single();
        if (error) throw error;
        return { id: String(data.id), name: data.name };
      } catch (err) {
        console.warn("Supabase insert process failed, using in-memory:", err);
      }
    }
    const newItem = { id: Date.now().toString(), ...proc };
    inMemoryDB.processes.push(newItem);
    saveFallbackDB();
    return newItem;
  },

  async updateProcess(id: string, proc: any) {
    if (supabase) {
      try {
        const { data, error } = await supabase.from('processes').update({ name: proc.name }).eq('id', id).select().single();
        if (error) throw error;
        return { id: String(data.id), name: data.name };
      } catch (err) {
        console.warn("Supabase update process failed, using in-memory:", err);
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
    if (supabase) {
      try {
        const { error } = await supabase.from('processes').delete().eq('id', id);
        if (error) throw error;
        return { success: true };
      } catch (err) {
        console.warn("Supabase delete process failed, using in-memory:", err);
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
    if (supabase) {
      try {
        const { data, error } = await supabase.from('compositions').select('*').order('id', { ascending: true });
        if (error) throw error;
        return data.map((r: any) => ({ ...r, id: String(r.id) }));
      } catch (err) {
        console.warn("Supabase query for compositions failed, using in-memory:", err);
      }
    }
    return inMemoryDB.compositions;
  },

  async createComposition(comp: any) {
    if (supabase) {
      try {
        const { data, error } = await supabase.from('compositions').insert({ name: comp.name }).select().single();
        if (error) throw error;
        return { id: String(data.id), name: data.name };
      } catch (err) {
        console.warn("Supabase insert composition failed, using in-memory:", err);
      }
    }
    const newItem = { id: Date.now().toString(), ...comp };
    inMemoryDB.compositions.push(newItem);
    saveFallbackDB();
    return newItem;
  },

  async updateComposition(id: string, comp: any) {
    if (supabase) {
      try {
        const { data, error } = await supabase.from('compositions').update({ name: comp.name }).eq('id', id).select().single();
        if (error) throw error;
        return { id: String(data.id), name: data.name };
      } catch (err) {
        console.warn("Supabase update composition failed, using in-memory:", err);
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
    if (supabase) {
      try {
        const { error } = await supabase.from('compositions').delete().eq('id', id);
        if (error) throw error;
        return { success: true };
      } catch (err) {
        console.warn("Supabase delete composition failed, using in-memory:", err);
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
    if (!supabase) {
      return {
        configured: false,
        connected: false,
        message: "No SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY configured in environment. The system is falling back to in-memory database storage.",
        config: {
          url: supabaseUrl ? "Configured" : "Missing",
          key: supabaseKey ? "Configured" : "Missing",
        }
      };
    }
    
    try {
      // Just do a lightweight query to check connection
      const { error } = await supabase.from('categories').select('id').limit(1);
      
      if (error) {
        throw error;
      }

      return {
        configured: true,
        connected: true,
        message: "Successfully connected to Supabase database!",
        config: {
          url: "Configured",
          key: "Configured",
        }
      };
    } catch (err: any) {
      return {
        configured: true,
        connected: false,
        message: err.message || String(err),
        error: err,
        config: {
          url: "Configured",
          key: "Configured",
        }
      };
    }
  }
};
`
fs.writeFileSync('server/db.ts', content);
