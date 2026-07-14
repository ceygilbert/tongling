import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import { HomeEditor } from "./HomeEditor";
import { SolutionsEditor } from "./SolutionsEditor";
import { StoryEditor } from "./StoryEditor";
import { LogOut, Package, ListTree, Settings, Layers, Plus, Trash2, Edit2, Check, X, Eye, Image, RefreshCw } from "lucide-react";

const fetchApi = async (url: string, options: any = {}) => {
  const token = localStorage.getItem("admin-token");

  // Client-side simulation fallback when standard backend is offline/unreachable (e.g., on Hostinger)
  const getStoredList = (key: string, defaultList: any[]) => {
    const list = localStorage.getItem(key);
    if (!list) {
      localStorage.setItem(key, JSON.stringify(defaultList));
      return defaultList;
    }
    try {
      return JSON.parse(list);
    } catch (e) {
      return defaultList;
    }
  };

  const saveStoredList = (key: string, list: any[]) => {
    localStorage.setItem(key, JSON.stringify(list));
    window.dispatchEvent(new Event("storage"));
  };

  const defaultProducts = [
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
      availability: 'YES',
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
      availability: 'YES',
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
      availability: 'NO',
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
      availability: 'YES',
      composition: 'Linen Viscose',
      weaveHarvest: "Our pure linen flax fibers are harvested from cooperative agricultural farms of Normandy, Northern France. These delicate crops are organic-grade spun under stringent water-conserving wet conditions to maximize filament tensile strength.",
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
      availability: 'NO',
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
      availability: 'YES',
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
      availability: 'YES',
      composition: 'linen-cotton',
      weaveHarvest: "Our pure linen flax fibers are harvested from cooperative agricultural farms of Normandy, Northern France. These delicate crops are organic-grade spun under stringent water-conserving wet conditions to maximize filament tensile strength.",
      weaveHarvestOrigin: "Regional intellectual property — France",
      packagingDelivery: "Every fabric piece is hand-rolled around our custom lignin-free conservation cores and enclosed in luxury linen protective sleeves. Delivered globally via carbon-neutral white-glove couriers in pristine condition.",
      packagingDeliveryCourier: "Free tracked courier worldwide — Shipped within 24 hours"
    }
  ];

  const defaultCategories = [
    { id: "1", name: "SHIRTING" },
    { id: "2", name: "GARMENT" },
    { id: "3", name: "TEXTURE" },
    { id: "4", name: "SUIT" },
  ];

  const defaultProcesses = [
    { id: "1", name: "PIECE_DYED" },
    { id: "2", name: "YARN_DYED" },
    { id: "3", name: "SPECIAL_FINISH" },
    { id: "4", name: "PRINTING" },
  ];

  const defaultCompositions = [
    { id: "1", name: "Pure linen" },
    { id: "2", name: "Linen Tencel" },
    { id: "3", name: "Linen-wool" },
    { id: "4", name: "Linen Viscose" },
    { id: "5", name: "linen-cotton" },
  ];

  const runLocalSimulation = () => {
    const isGet = !options.method || options.method === "GET";
    const isPost = options.method === "POST";
    const isPut = options.method === "PUT";
    const isDelete = options.method === "DELETE";

    let resource = "";
    let id: string | null = null;

    if (url.includes("/api/admin/products")) {
      resource = "products";
      const parts = url.split("/api/admin/products/");
      if (parts.length > 1) id = parts[1];
    } else if (url.includes("/api/admin/categories")) {
      resource = "categories";
      const parts = url.split("/api/admin/categories/");
      if (parts.length > 1) id = parts[1];
    } else if (url.includes("/api/admin/processes")) {
      resource = "processes";
      const parts = url.split("/api/admin/processes/");
      if (parts.length > 1) id = parts[1];
    } else if (url.includes("/api/admin/compositions")) {
      resource = "compositions";
      const parts = url.split("/api/admin/compositions/");
      if (parts.length > 1) id = parts[1];
    }

    if (!resource) {
      throw new Error("Invalid API endpoint simulated: " + url);
    }

    const storageKey = `sincerity_${resource}`;
    const defaultList = 
      resource === "products" ? defaultProducts :
      resource === "categories" ? defaultCategories :
      resource === "processes" ? defaultProcesses : defaultCompositions;

    const list = getStoredList(storageKey, defaultList);

    if (isGet) {
      if (id) {
        const found = list.find((item: any) => item.id === id);
        if (!found) throw new Error("Not found");
        return found;
      }
      return list;
    }

    if (isPost) {
      const body = JSON.parse(options.body || "{}");
      const newItem = {
        ...body,
        id: String(Date.now()),
      };
      const updatedList = [...list, newItem];
      saveStoredList(storageKey, updatedList);
      return newItem;
    }

    if (isPut) {
      if (!id) throw new Error("ID required for PUT");
      const body = JSON.parse(options.body || "{}");
      const updatedList = list.map((item: any) => {
        if (item.id === id) {
          return { ...item, ...body };
        }
        return item;
      });
      saveStoredList(storageKey, updatedList);
      return body;
    }

    if (isDelete) {
      if (!id) throw new Error("ID required for DELETE");
      const updatedList = list.filter((item: any) => item.id !== id);
      saveStoredList(storageKey, updatedList);
      return { success: true };
    }
  };

  try {
    const headers = {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    };
    const res = await fetch(url, { ...options, headers });
    if (res.status === 401) {
      if (window.location.pathname !== "/login") {
        window.location.href = "/login";
      }
      throw new Error("Unauthorized");
    }
    const data = await res.json();

    // Sync client local cache if we modified products via real DB backend API
    if (options.method && options.method !== "GET" && url.includes("/api/admin/products")) {
      try {
        const prodRes = await fetch("/api/public/products");
        if (prodRes.ok) {
          const prods = await prodRes.json();
          if (Array.isArray(prods)) {
            localStorage.setItem("sincerity_products", JSON.stringify(prods));
            window.dispatchEvent(new Event("storage"));
          }
        }
      } catch (e) {
        console.warn("Could not sync client cache following real DB edit:", e);
      }
    }

    return data;
  } catch (err) {
    console.warn("Express backend API unreachable or returned 404. Performing local persistence operation instead for: " + url);
    return runLocalSimulation();
  }
};

const BaseCrud = ({ resourceName, columns, title }: { resourceName: string, columns: any[], title: string }) => {
  const [items, setItems] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<any>({});
  const [isAdding, setIsAdding] = useState(false);

  const loadData = async () => {
    try {
      const data = await fetchApi(`/api/admin/${resourceName}`);
      setItems(data);
    } catch(e) {}
  };

  useEffect(() => {
    loadData();
  }, [resourceName]);

  const handleDelete = async (id: string) => {
    if(!window.confirm(`Delete this item?`)) return;
    try {
      await fetchApi(`/api/admin/${resourceName}/${id}`, { method: "DELETE" });
      loadData();
    } catch(e) {}
  };

  const handleSave = async () => {
    try {
      if (isAdding) {
        await fetchApi(`/api/admin/${resourceName}`, {
          method: "POST",
          body: JSON.stringify(editForm),
        });
      } else if (editingId) {
        await fetchApi(`/api/admin/${resourceName}/${editingId}`, {
          method: "PUT",
          body: JSON.stringify(editForm),
        });
      }
      setIsAdding(false);
      setEditingId(null);
      setEditForm({});
      loadData();
    } catch(e) {}
  };

  const startEdit = (item: any) => {
    setIsAdding(false);
    setEditingId(item.id);
    setEditForm(item);
  };

  const startAdd = () => {
    setEditingId(null);
    setIsAdding(true);
    setEditForm({});
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-formal font-bold tracking-wider uppercase text-ink">{title}</h2>
        <button onClick={startAdd} className="flex items-center gap-2 bg-ink text-bg-base px-4 py-2 text-xs font-mono tracking-widest font-bold uppercase transition-colors hover:bg-collision">
          <Plus className="w-4 h-4" /> Add New
        </button>
      </div>

      <div className="bg-white border border-ink/10 overflow-x-auto">
        <table className="w-full text-left text-sm font-sans text-ink">
          <thead className="bg-[#FAF9F6] border-b border-ink/10 font-mono text-[10px] tracking-widest uppercase text-[#B2A490]">
            <tr>
              {columns.map(c => <th key={c.key} className="p-4">{c.label}</th>)}
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink/5">
            {isAdding && (
               <tr>
                 {columns.map(c => (
                    <td key={c.key} className="p-3">
                       <input 
                         type="text" 
                         className="w-full border border-ink/20 p-2 text-xs"
                         value={editForm[c.key] || ""}
                         onChange={e => setEditForm({ ...editForm, [c.key]: e.target.value })}
                       />
                    </td>
                 ))}
                 <td className="p-3 text-right">
                    <button onClick={handleSave} className="text-[#B2A490] hover:text-ink mr-2 p-1"><Check className="w-4 h-4"/></button>
                    <button onClick={() => setIsAdding(false)} className="text-red-400 hover:text-red-600 p-1"><X className="w-4 h-4"/></button>
                 </td>
               </tr>
            )}
            {items.map(item => {
              const isEditing = editingId === item.id;
              return (
                <tr key={item.id} className="hover:bg-ink/5 transition-colors group">
                  {columns.map(c => (
                    <td key={c.key} className="p-4 max-w-[200px] truncate">
                      {isEditing ? (
                        <input 
                          type="text" 
                          className="w-full border border-ink/20 p-1 text-xs"
                          value={editForm[c.key] || ""}
                          onChange={e => setEditForm({ ...editForm, [c.key]: e.target.value })}
                        />
                      ) : (
                        item[c.key]
                      )}
                    </td>
                  ))}
                  <td className="p-4 text-right flex justify-end gap-2">
                    {isEditing ? (
                      <>
                        <button onClick={handleSave} className="text-[#B2A490] hover:text-ink"><Check className="w-4 h-4"/></button>
                        <button onClick={() => setEditingId(null)} className="text-red-400 hover:text-red-600"><X className="w-4 h-4"/></button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => startEdit(item)} className="text-ink/65 hover:text-ink"><Edit2 className="w-4 h-4"/></button>
                        <button onClick={() => handleDelete(item.id)} className="text-red-400 hover:text-red-600"><Trash2 className="w-4 h-4"/></button>
                      </>
                    )}
                  </td>
                </tr>
              );
            })}
            {items.length === 0 && !isAdding && (
               <tr>
                 <td colSpan={columns.length + 1} className="p-8 text-center text-ink/40 font-mono text-xs uppercase tracking-widest">
                   No data found
                 </td>
               </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const ProductCrud = () => {
  const [items, setItems] = useState<any[]>([]);
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);
  const [processes, setProcesses] = useState<{ id: string; name: string }[]>([]);
  const [compositions, setCompositions] = useState<{ id: string; name: string }[]>([]);

  const [isUploadingProduct, setIsUploadingProduct] = useState(false);
  const [isUploadingLifestyle, setIsUploadingLifestyle] = useState(false);
  const [isUploadingGallery, setIsUploadingGallery] = useState(false);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, field: "productImage" | "lifestyleImage" | "galleryImages") => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (field === "productImage") {
      setIsUploadingProduct(true);
    } else {
      setIsUploadingLifestyle(true);
    }

    try {
      const token = localStorage.getItem("admin-token");
      const formData = new FormData();
      formData.append("image", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Upload failed on server");
      }

      const data = await res.json();
      if (data.url) {
        setFormState((prev: any) => ({ ...prev, [field]: data.url }));
      }
    } catch (err) {
      console.warn("Express backend file upload offline/unreachable. Encoding locally as Base64 data URL fallback instead.");
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setFormState((prev: any) => ({ ...prev, [field]: reader.result }));
        }
      };
      reader.readAsDataURL(file);
    } finally {
      if (field === "productImage") {
        setIsUploadingProduct(false);
      } else {
        setIsUploadingLifestyle(false);
      }
    }
  };

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formState, setFormState] = useState<any>({
    title: "",
    price: 0,
    showPrice: true,
    description: "",
    dimensions: "",
    material: "",
    technique: "",
    status: "",
    lifestyleImage: "",
    productImage: "",
    category: "",
    process: "",
    composition: "",
    availability: "YES",
    weaveHarvest: "",
    weaveHarvestOrigin: "",
    packagingDelivery: "",
    packagingDeliveryCourier: "",
  });

  const loadData = async () => {
    try {
      const data = await fetchApi("/api/admin/products");
      setItems(data);
      
      const cats = await fetchApi("/api/admin/categories");
      setCategories(cats);
      
      const procs = await fetchApi("/api/admin/processes");
      setProcesses(procs);

      const comps = await fetchApi("/api/admin/compositions");
      setCompositions(comps);
    } catch (e) {}
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this product?")) return;
    try {
      await fetchApi(`/api/admin/products/${id}`, { method: "DELETE" });
      loadData();
    } catch (e) {}
  };

  const handleEdit = (product: any) => {
    setEditingId(product.id);
    setFormState({
      title: product.title || "",
      price: product.price || 0,
      showPrice: product.showPrice === undefined ? true : !!product.showPrice,
      description: product.description || "",
      dimensions: product.dimensions || "",
      material: product.material || "",
      technique: product.technique || "",
      status: product.status || "",
      lifestyleImage: product.lifestyleImage || "",
      productImage: product.productImage || "",
      category: product.category || "",
      process: product.process || "",
      composition: product.composition || "",
      availability: product.availability || "YES",
      weaveHarvest: product.weaveHarvest || "",
      weaveHarvestOrigin: product.weaveHarvestOrigin || "",
      packagingDelivery: product.packagingDelivery || "",
      packagingDeliveryCourier: product.packagingDeliveryCourier || "",
    });
    setIsFormOpen(true);
  };

  const handleAdd = () => {
    setEditingId(null);
    setFormState({
      title: "",
      price: 0,
      showPrice: true,
      description: "",
      dimensions: "150 CM WIDTH",
      material: "100% EUROPEAN FLAX",
      technique: "PLAIN WEAVE",
      status: "CORE COLLECTION",
      lifestyleImage: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80",
      productImage: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1200&q=80",
      category: categories[0]?.name || "SHIRTING",
      process: processes[0]?.name || "PIECE_DYED",
      composition: compositions[0]?.name || "Pure linen",
      availability: "YES",
      weaveHarvest: "Our pure linen flax fibers are harvested from cooperative agricultural farms of Normandy, Northern France. These delicate crops are organic-grade spun under stringent water-conserving wet conditions to maximize filament tensile strength.",
      weaveHarvestOrigin: "Regional intellectual property — France",
      packagingDelivery: "Every fabric piece is hand-rolled around our custom lignin-free conservation cores and enclosed in luxury linen protective sleeves. Delivered globally via carbon-neutral white-glove couriers in pristine condition.",
      packagingDeliveryCourier: "Free tracked courier worldwide — Shipped within 24 hours",
    });
    setIsFormOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = {
        ...formState,
        price: parseFloat(formState.price) || 0
      };

      if (editingId) {
        await fetchApi(`/api/admin/products/${editingId}`, {
          method: "PUT",
          body: JSON.stringify(payload),
        });
      } else {
        await fetchApi("/api/admin/products", {
          method: "POST",
          body: JSON.stringify(payload),
        });
      }
      setIsFormOpen(false);
      loadData();
    } catch (e) {}
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-formal font-bold tracking-wider uppercase text-ink">Products Directory</h2>
          <p className="font-mono text-[10px] text-[#B2A490] tracking-wider uppercase mt-1">Full specification control panel</p>
        </div>
        <button onClick={handleAdd} className="flex items-center gap-2 bg-ink text-bg-base px-5 py-3 text-xs font-mono tracking-widest font-black uppercase transition-colors hover:bg-collision">
          <Plus className="w-4 h-4" /> Create Product
        </button>
      </div>

      {/* Main Table */}
      <div className="bg-white border border-ink/10 overflow-x-auto">
        <table className="w-full text-left text-sm font-sans text-ink">
          <thead className="bg-[#FAF9F6] border-b border-ink/10 font-mono text-[10px] tracking-widest uppercase text-[#B2A490]">
            <tr>
              <th className="p-4">SKU No.</th>
              <th className="p-4">Price</th>
              <th className="p-4">Details & Specs</th>
              <th className="p-4">Classification</th>
              <th className="p-4">Availability</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink/5">
            {items.map(product => (
              <tr key={product.id} className="hover:bg-ink/5 transition-colors group">
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-50 border border-ink/10 overflow-hidden flex-shrink-0">
                      <img src={product.productImage} className="w-full h-full object-cover grayscale group-hover:grayscale-0 duration-500" alt="" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-ink text-sm uppercase tracking-wide">{product.title}</h4>
                      <p className="font-mono text-[10px] text-ink/40 tracking-wider">CODE: TL-{product.id}0A</p>
                    </div>
                  </div>
                </td>
                <td className="p-4 font-mono text-xs text-ink/80">
                  <div className="font-bold text-sm">${parseFloat(product.price).toFixed(2)}</div>
                  <div className="text-[9px] mt-1 uppercase tracking-wider">
                    {product.showPrice !== false ? (
                      <span className="text-[#B2A490] font-black">● Visible</span>
                    ) : (
                      <span className="text-red-500/80 font-black">○ Hidden</span>
                    )}
                  </div>
                </td>
                <td className="p-4 space-y-0.5 text-xs">
                  <p className="font-sans text-ink"><strong className="font-mono uppercase text-[9px] text-ink/40">Composition:</strong> {product.composition}</p>
                  <p className="font-sans text-ink/75"><strong className="font-mono uppercase text-[9px] text-ink/40">Technique:</strong> {product.technique}</p>
                  <p className="font-sans text-ink/75"><strong className="font-mono uppercase text-[9px] text-ink/40">Dimensions:</strong> {product.dimensions}</p>
                </td>
                <td className="p-4 text-xs font-mono space-y-0.5">
                  <p className="text-ink"><span className="text-[#B2A490]">CAT:</span> {product.category}</p>
                  <p className="text-ink/65"><span className="text-[#B2A490]">PROC:</span> {product.process}</p>
                </td>
                <td className="p-4">
                  <span className={`inline-block font-mono text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded-sm ${
                    product.availability === 'YES' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}>
                    {product.availability === 'YES' ? 'Yes' : 'No'}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button onClick={() => handleEdit(product)} className="p-2 border border-ink/10 hover:border-ink hover:bg-ink hover:text-bg-base transition-all rounded-sm" title="Edit Properties">
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    <button onClick={() => handleDelete(product.id)} className="p-2 border border-red-100 hover:border-red-400 hover:bg-red-50 text-red-500 transition-all rounded-sm" title="Delete Product">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {items.length === 0 && (
              <tr>
                <td colSpan={6} className="p-16 text-center text-ink/30 font-mono text-xs uppercase tracking-widest">
                  No products in directory
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Editor Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-ink/50 backdrop-blur-sm z-50 flex justify-center items-center p-4 overflow-y-auto">
          <div className="bg-[#FAF9F6] border border-ink/15 shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto flex flex-col">
            <div className="p-6 border-b border-ink/10 flex justify-between items-center bg-white">
              <div>
                <h3 className="text-xl font-formal font-bold tracking-wider uppercase text-ink">
                  {editingId ? "Edit Product Specifications" : "Create New Product Standard"}
                </h3>
                <p className="font-mono text-[9px] text-[#B2A490] tracking-widest uppercase mt-0.5">Master Weave Specifications Manager</p>
              </div>
              <button onClick={() => setIsFormOpen(false)} className="p-2 text-ink/50 hover:text-ink hover:bg-ink/5 transition-colors rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="p-6 md:p-8 space-y-8 flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Column One: Basic Attributes */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-widest text-[#B2A490] font-black block">SKU No.</label>
                    <input 
                      type="text" 
                      required
                      className="w-full border border-ink/20 p-2.5 bg-white font-sans text-sm outline-none focus:border-ink transition-colors"
                      value={formState.title}
                      onChange={e => setFormState({ ...formState, title: e.target.value })}
                      placeholder="e.g. TL-SL-1001"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2 hidden">
                      <label className="font-mono text-[10px] uppercase tracking-widest text-[#B2A490] font-black block">Price</label>
                      <input 
                        type="number" 
                        step="0.01"
                        required
                        className="w-full border border-ink/20 p-2.5 bg-white font-sans text-sm outline-none focus:border-ink transition-colors"
                        value={formState.price}
                        onChange={e => setFormState({ ...formState, price: e.target.value })}
                        placeholder="e.g. 28.50"
                      />
                      <div className="flex items-center gap-2 pt-1">
                        <input 
                          type="checkbox"
                          id="showPrice"
                          checked={formState.showPrice !== false}
                          onChange={e => setFormState({ ...formState, showPrice: e.target.checked })}
                          className="w-3.5 h-3.5 accent-ink border border-ink/20 focus:ring-0 cursor-pointer"
                        />
                        <label htmlFor="showPrice" className="font-mono text-[9px] uppercase tracking-wider text-ink/75 select-none cursor-pointer">
                          Show Price on Storefront
                        </label>
                      </div>
                    </div>
                    <div className="space-y-2 col-span-2">
                      <label className="font-mono text-[10px] uppercase tracking-widest text-[#B2A490] font-black block">Greige Availability</label>
                      <select 
                        className="w-full border border-ink/20 p-2.5 bg-white font-sans text-sm outline-none focus:border-ink transition-colors"
                        value={formState.availability}
                        onChange={e => setFormState({ ...formState, availability: e.target.value })}
                      >
                        <option value="YES">Yes</option>
                        <option value="NO">No</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] uppercase tracking-widest text-[#B2A490] font-black block">Application</label>
                      <select 
                        className="w-full border border-ink/20 p-2.5 bg-white font-sans text-sm outline-none focus:border-ink transition-colors"
                        value={formState.category}
                        onChange={e => setFormState({ ...formState, category: e.target.value })}
                      >
                        {categories.map(cat => (
                          <option key={cat.id} value={cat.name}>{cat.name}</option>
                        ))}
                        {categories.length === 0 && (
                          <>
                            <option value="SHIRTING">SHIRTING</option>
                            <option value="GARMENT">GARMENT</option>
                            <option value="SUIT">SUIT</option>
                            <option value="TEXTURE">TEXTURE</option>
                          </>
                        )}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="font-mono text-[10px] uppercase tracking-widest text-[#B2A490] font-black block">Finishes</label>
                      <select 
                        className="w-full border border-ink/20 p-2.5 bg-white font-sans text-sm outline-none focus:border-ink transition-colors"
                        value={formState.process}
                        onChange={e => setFormState({ ...formState, process: e.target.value })}
                      >
                        {processes.map(proc => (
                          <option key={proc.id} value={proc.name}>{proc.name}</option>
                        ))}
                        {processes.length === 0 && (
                          <>
                            <option value="PIECE_DYED">PIECE_DYED</option>
                            <option value="YARN_DYED">YARN_DYED</option>
                            <option value="PRINTING">PRINTING</option>
                            <option value="SPECIAL_FINISH">SPECIAL_FINISH</option>
                          </>
                        )}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-widest text-[#B2A490] font-black block">Description</label>
                    <textarea 
                      rows={5}
                      className="w-full border border-ink/20 p-2.5 bg-white font-sans text-sm outline-none focus:border-ink transition-colors resize-none"
                      value={formState.description}
                      onChange={e => setFormState({ ...formState, description: e.target.value })}
                      placeholder="Faux composition parameters, tactile feel descriptors, origin description, and optimal applications..."
                    />
                  </div>
                </div>

                {/* Column Two: Specifications & Media */}
                <div className="space-y-6">
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] uppercase tracking-widest text-[#B2A490] font-black block">Composition</label>
                      <select 
                        className="w-full border border-ink/20 p-2.5 bg-white font-sans text-sm outline-none focus:border-ink transition-colors"
                        value={formState.composition}
                        onChange={e => setFormState({ ...formState, composition: e.target.value })}
                      >
                        {compositions.map(comp => (
                          <option key={comp.id} value={comp.name}>{comp.name}</option>
                        ))}
                        {compositions.length === 0 && (
                          <>
                            <option value="Pure linen">Pure linen</option>
                            <option value="Linen Tencel">Linen Tencel</option>
                            <option value="Linen-wool">Linen-wool</option>
                            <option value="Linen Viscose">Linen Viscose</option>
                            <option value="linen-cotton">linen-cotton</option>
                          </>
                        )}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="font-mono text-[10px] uppercase tracking-widest text-[#B2A490] font-black block">Cuttable Width (cm)</label>
                      <input 
                        type="text" 
                        className="w-full border border-ink/20 p-2.5 bg-white font-sans text-sm outline-none focus:border-ink transition-colors"
                        value={formState.dimensions}
                        onChange={e => setFormState({ ...formState, dimensions: e.target.value })}
                        placeholder="e.g. 150 CM WIDTH"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] uppercase tracking-widest text-[#B2A490] font-black block">Weaving</label>
                      <input 
                        type="text" 
                        className="w-full border border-ink/20 p-2.5 bg-white font-sans text-sm outline-none focus:border-ink transition-colors"
                        value={formState.technique}
                        onChange={e => setFormState({ ...formState, technique: e.target.value })}
                        placeholder="e.g. PLAIN WEAVE"
                      />
                    </div>

                    <div className="space-y-2 hidden">
                      <label className="font-mono text-[10px] uppercase tracking-widest text-[#B2A490] font-black block">Fiber/Material Detail</label>
                      <input 
                        type="text" 
                        className="w-full border border-ink/20 p-2.5 bg-white font-sans text-sm outline-none focus:border-ink transition-colors"
                        value={formState.material}
                        onChange={e => setFormState({ ...formState, material: e.target.value })}
                        placeholder="e.g. 100% EUROPEAN FLAX"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-widest text-[#B2A490] font-black block">Weight (GSM)</label>
                    <input 
                      type="text" 
                      className="w-full border border-ink/20 p-2.5 bg-white font-sans text-sm outline-none focus:border-ink transition-colors"
                      value={formState.status}
                      onChange={e => setFormState({ ...formState, status: e.target.value })}
                      placeholder="e.g. CORE COLLECTION"
                    />
                  </div>

                  {/* Media Section */}
                  <div className="border border-ink/10 p-4 bg-white space-y-4">
                    <span className="font-mono text-[10px] font-black text-ink uppercase tracking-wider block">Image Upload</span>
                    
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <span className="font-mono text-[8px] text-[#B2A490] uppercase tracking-widest block font-bold">Product Asset Image</span>
                        <div className="flex gap-2">
                          
                          <label className="cursor-pointer font-mono text-[9px] bg-ink text-white hover:bg-ink/80 px-3 py-2 uppercase tracking-wider flex items-center justify-center transition-colors">
                            {isUploadingProduct ? "Uploading..." : "Upload Image"}
                            <input 
                              type="file" 
                              accept="image/*" 
                              className="hidden" 
                              onChange={e => handleImageUpload(e, "productImage")}
                              disabled={isUploadingProduct}
                            />
                          </label>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <span className="font-mono text-[8px] text-[#B2A490] uppercase tracking-widest block font-bold">Gallery Images (Max 10)</span>
                        <div className="flex gap-2">
                          
                          <label className="cursor-pointer font-mono text-[9px] bg-ink text-white hover:bg-ink/80 px-3 py-2 uppercase tracking-wider flex items-center justify-center transition-colors">
                            {isUploadingGallery ? "Uploading..." : "Upload Image"}
                            <input 
                              type="file" 
                              accept="image/*" 
                              className="hidden"
                              onChange={e => handleImageUpload(e, "galleryImages")}
                              disabled={isUploadingGallery || (formState.galleryImages || []).length >= 10}
                            />
                          </label>
                        </div>
                        <div className="grid grid-cols-5 gap-2 pt-2">
                          {(formState.galleryImages || []).map((imgUrl: string, idx: number) => (
                            <div key={idx} className="relative group h-16 border border-ink/5 bg-[#FBF9F5] overflow-hidden">
                              <img src={imgUrl} className="w-full h-full object-cover" alt="" />
                              <button
                                type="button"
                                className="absolute inset-0 bg-red-500/80 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"
                                onClick={() => {
                                  const newGallery = [...(formState.galleryImages || [])];
                                  newGallery.splice(idx, 1);
                                  setFormState(prev => ({ ...prev, galleryImages: newGallery }));
                                }}
                              >
                                <span className="font-mono text-[10px] font-bold uppercase">Del</span>
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <span className="font-mono text-[8px] text-[#B2A490] uppercase tracking-widest block font-bold">Lifestyle Atmospheric Image</span>
                        <div className="flex gap-2">
                          
                          <label className="cursor-pointer font-mono text-[9px] bg-ink text-white hover:bg-ink/80 px-3 py-2 uppercase tracking-wider flex items-center justify-center transition-colors">
                            {isUploadingLifestyle ? "Uploading..." : "Upload Image"}
                            <input 
                              type="file" 
                              accept="image/*" 
                              className="hidden" 
                              onChange={e => handleImageUpload(e, "lifestyleImage")}
                              disabled={isUploadingLifestyle}
                            />
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-1">
                      <div className="space-y-1">
                        <span className="font-mono text-[8px] text-ink/40 uppercase block">Product Shot</span>
                        <div className="h-20 border border-ink/5 bg-[#FBF9F5] overflow-hidden">
                          {formState.productImage ? (
                            <img src={formState.productImage} className="w-full h-full object-cover" alt="" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-ink/20"><Image className="w-4 h-4"/></div>
                          )}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <span className="font-mono text-[8px] text-ink/40 uppercase block">Lifestyle Shot</span>
                        <div className="h-20 border border-ink/5 bg-[#FBF9F5] overflow-hidden">
                          {formState.lifestyleImage ? (
                            <img src={formState.lifestyleImage} className="w-full h-full object-cover" alt="" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-ink/20"><Image className="w-4 h-4"/></div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Advanced Editorial Section */}
              <div className="border-t border-ink/10 pt-6 space-y-6">
                <h4 className="font-mono text-xs font-black uppercase tracking-widest text-[#B2A490]">Advanced Product Editorial Specs</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Traceability */}
                  <div className="border border-ink/10 p-5 bg-white space-y-4 rounded-sm">
                    <span className="font-mono text-[10px] font-black uppercase tracking-wider text-ink block">02 / Traceability</span>
                    
                    <div className="space-y-4">
                      <div className="space-y-1.5">
                        <label className="font-mono text-[8px] uppercase tracking-widest text-[#B2A490] font-bold block">Traceability Description</label>
                        <textarea 
                          rows={4}
                          className="w-full border border-ink/20 p-2.5 bg-white font-sans text-xs outline-none focus:border-ink resize-none text-ink"
                          value={formState.weaveHarvest}
                          onChange={e => setFormState({ ...formState, weaveHarvest: e.target.value })}
                          placeholder="Our pure linen flax fibers are harvested from cooperative agricultural farms..."
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="font-mono text-[8px] uppercase tracking-widest text-[#B2A490] font-bold block">Origin Directory / Tag</label>
                        <input 
                          type="text" 
                          className="w-full border border-ink/20 p-2.5 bg-white font-sans text-xs outline-none focus:border-ink text-ink"
                          value={formState.weaveHarvestOrigin}
                          onChange={e => setFormState({ ...formState, weaveHarvestOrigin: e.target.value })}
                          placeholder="Regional intellectual property — France"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Sample Inquiry & Delivery Options */}
                  <div className="border border-ink/10 p-5 bg-white space-y-4 rounded-sm">
                    <span className="font-mono text-[10px] font-black uppercase tracking-wider text-ink block">03 / Sample Inquiry & Delivery Options</span>
                    
                    <div className="space-y-4">
                      <div className="space-y-1.5">
                        <label className="font-mono text-[8px] uppercase tracking-widest text-[#B2A490] font-bold block">Sample Inquiry & Delivery Description</label>
                        <textarea 
                          rows={4}
                          className="w-full border border-ink/20 p-2.5 bg-white font-sans text-xs outline-none focus:border-ink resize-none text-ink"
                          value={formState.packagingDelivery}
                          onChange={e => setFormState({ ...formState, packagingDelivery: e.target.value })}
                          placeholder="Every fabric piece is hand-rolled around our custom lignin-free conservation cores..."
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="font-mono text-[8px] uppercase tracking-widest text-[#B2A490] font-bold block">Courier Status Indicator</label>
                        <input 
                          type="text" 
                          className="w-full border border-ink/20 p-2.5 bg-white font-sans text-xs outline-none focus:border-ink text-ink"
                          value={formState.packagingDeliveryCourier}
                          onChange={e => setFormState({ ...formState, packagingDeliveryCourier: e.target.value })}
                          placeholder="Free tracked courier worldwide — Shipped within 24 hours"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-ink/10 flex justify-end gap-3 bg-white -mx-8 -mb-8 p-6">
                <button 
                  type="button" 
                  onClick={() => setIsFormOpen(false)}
                  className="px-5 py-3 border border-ink/25 text-ink font-mono text-[10px] tracking-widest uppercase font-bold hover:bg-ink/5"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-ink text-bg-base font-mono text-[10px] tracking-widest uppercase font-black hover:bg-collision transition-colors"
                >
                  Save Standard
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const DbStatusWidget: React.FC = () => {
  const [status, setStatus] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const fetchStatus = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/db-status");
      if (res.ok) {
        const contentType = res.headers.get("content-type") || "";
        const text = await res.text();
        
        if (contentType.includes("text/html") || text.trim().startsWith("<")) {
          setStatus({
            connected: false,
            configured: false,
            isHtmlResponse: true,
            message: "Static host detected. The API request returned index.html instead of a backend JSON response, which means the backend Node.js server is not running."
          });
          return;
        }

        try {
          const data = JSON.parse(text);
          setStatus(data);
        } catch (parseErr) {
          setStatus({
            connected: false,
            configured: false,
            message: "Failed to parse API status JSON response: " + text.substring(0, 80) + "..."
          });
        }
      } else {
        const text = await res.text().catch(() => "");
        setStatus({ 
          connected: false, 
          configured: false, 
          message: `HTTP ${res.status}: ${text || "Could not fetch DB status from backend server."}` 
        });
      }
    } catch (err: any) {
      console.error("DB Status check failed:", err);
      setStatus({ 
        connected: false, 
        configured: false, 
        message: `Network/CORS/Parsing Error: ${err.message || String(err)}` 
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
    const interval = setInterval(fetchStatus, 25000);
    return () => clearInterval(interval);
  }, []);

  if (!status) {
    return (
      <div className="p-4 border-t border-ink/10 font-mono text-[10px] text-ink/45 tracking-wider">
        Loading connection health...
      </div>
    );
  }

  return (
    <div className="p-4 border-t border-ink/10 font-mono text-[10px] space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-[#B2A490] uppercase tracking-widest font-black text-[9px]">Database Connection</span>
        <button 
          onClick={fetchStatus} 
          disabled={loading} 
          className={`hover:text-ink text-ink/50 transition-colors ${loading ? "animate-spin" : ""}`}
          title="Refresh status"
        >
          <RefreshCw size={10} />
        </button>
      </div>

      <div className="p-2 border border-ink/5 bg-[#FBF9F5] rounded-[1px] space-y-1.5">
        <div className="flex items-center gap-1.5 font-bold">
          {status.connected ? (
            <>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-emerald-700 uppercase">Hostinger Online</span>
            </>
          ) : (
            <>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              <span className="text-amber-600 uppercase">Memory Fallback</span>
            </>
          )}
        </div>

        {status.config && (
          <div className="text-[9px] text-ink/65 space-y-0.5 border-t border-ink/5 pt-1.5">
            <p><span className="text-ink/40 font-bold">Host:</span> {status.config.host}</p>
            <p><span className="text-ink/40 font-bold">DB:</span> {status.config.database}</p>
            <p><span className="text-ink/40 font-bold">User:</span> {status.config.user}</p>
          </div>
        )}

        {!status.connected && (
          <div className="text-[9px] bg-red-50 text-red-700/90 border border-red-200/40 p-1.5 leading-normal mt-1 rounded-[1px] space-y-1">
            <span className="font-bold">Error Info:</span>
            <div className="font-mono text-[8px] break-all max-h-20 overflow-y-auto mt-0.5 bg-white p-1 border border-red-100">
              {status.message}
            </div>
            {status.isHtmlResponse && (
              <div className="mt-1.5 font-sans text-[9px] leading-normal text-amber-700 font-medium space-y-1.5 border-t border-amber-200/40 pt-1.5">
                <p>💡 <span className="font-bold">Backend Not Detected - Local Storage Mode Active:</span></p>
                <p>Your application is hosted statically (e.g. Hostinger public_html) and the Node.js backend is not running.</p>
                <p>Don't worry — the app will continue to function normally using local storage in your browser. All data operations are safely handled locally.</p>
              </div>
            )}

            {status.error?.code === "ETIMEDOUT" && (
              <div className="mt-1.5 font-sans text-[9px] leading-normal text-red-800 font-medium">
                💡 <span className="font-bold">Important:</span> Hostinger blocks remote connections by default. 
                Go to <span className="font-bold">Hostinger Panel → Databases → Remote MySQL</span>, 
                add IP/host <span className="font-bold font-mono bg-red-100 p-0.5 select-all text-red-600">%</span> (allows any host), 
                and click Save.
              </div>
            )}
            {status.error?.code === "ER_ACCESS_DENIED_ERROR" && (
              <div className="mt-1.5 font-sans text-[9px] leading-normal text-red-800 font-medium">
                💡 <span className="font-bold">Important:</span> Double check your database user and password credentials inside your environment setup.
              </div>
            )}
            {status.error?.code === "ENOTFOUND" && (
              <div className="mt-1.5 font-sans text-[9px] leading-normal text-red-800 font-medium">
                💡 <span className="font-bold">Important:</span> Check that your host address matches the Hostinger MySQL database host (starts with <span className="font-mono font-bold">sql...</span>).
              </div>
            )}
            {!status.error && status.configured && !status.isHtmlResponse && (
              <div className="mt-1.5 font-sans text-[9px] leading-normal text-red-800 font-medium">
                💡 <span className="font-bold">Important:</span> Check that your Hostinger database permits remote MySQL requests from external hosts or whitelist the wildcard <span className="font-mono font-bold">%</span> host.
              </div>
            )}
          </div>
        )}

        {status.connected && (
          <p className="text-[8px] text-emerald-700/80 leading-normal">
            ✓ Your catalog, categories, and custom assets are connected directly to your Hostinger database.
          </p>
        )}
      </div>
    </div>
  );
};

export const AdminPanel: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!localStorage.getItem("admin-token")) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("admin-token");
    navigate("/login");
  };

  const navItems = [
    { name: "Products", path: "/admin", icon: Package },
    { name: "Home Page", path: "/admin/home", icon: Edit2 },
    { name: "Solutions Page", path: "/admin/solutions", icon: Layers },
    { name: "Story Page", path: "/admin/story", icon: Layers },
    { name: "Categories", path: "/admin/categories", icon: ListTree },
    { name: "Processes", path: "/admin/processes", icon: Settings },
    { name: "Compositions", path: "/admin/compositions", icon: Layers },
  ];

  return (
    <div className="min-h-screen bg-bg-base flex flex-col md:flex-row text-ink">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-r border-ink/10 flex flex-col min-h-screen">
        <div className="p-6 border-b border-ink/10">
          <h1 className="text-xl font-formal font-bold tracking-widest uppercase text-ink">Admin</h1>
          <p className="font-mono text-[9px] text-[#B2A490] tracking-widest uppercase mt-1">Sincerity Linen</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path || (item.path !== "/admin" && location.pathname.startsWith(item.path));
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 text-sm font-mono tracking-wider uppercase transition-colors ${
                  isActive ? "bg-ink/5 text-ink font-bold" : "text-ink/60 hover:bg-ink/5 hover:text-ink"
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.name}
              </Link>
            )
          })}
        </nav>
        
        <DbStatusWidget />

        <div className="p-4 border-t border-ink/10">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 text-sm font-mono tracking-wider uppercase text-red-500 hover:bg-red-50 transition-colors text-left font-bold"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<ProductCrud />} />
            <Route path="/home" element={<HomeEditor />} />
            <Route path="/solutions" element={<SolutionsEditor />} />
            <Route path="/story" element={<StoryEditor />} />
            <Route path="/categories" element={
              <BaseCrud 
                title="Categories"
                resourceName="categories" 
                columns={[
                  { key: "id", label: "ID" },
                  { key: "name", label: "Category Name" }
                ]} 
              />
            } />
            <Route path="/processes" element={
              <BaseCrud 
                title="Processes"
                resourceName="processes" 
                columns={[
                  { key: "id", label: "ID" },
                  { key: "name", label: "Process Name" }
                ]} 
              />
            } />
            <Route path="/compositions" element={
              <BaseCrud 
                title="Compositions"
                resourceName="compositions" 
                columns={[
                  { key: "id", label: "ID" },
                  { key: "name", label: "Composition Name" }
                ]} 
              />
            } />
          </Routes>
        </div>
      </main>
    </div>
  );
};

