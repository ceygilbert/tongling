import { Product } from "./types";

const DEFAULT_PRODUCTS: Product[] = [
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
];

const getStoredProducts = (): Product[] => {
  if (typeof window === "undefined") return DEFAULT_PRODUCTS;
  const local = localStorage.getItem("sincerity_products");
  if (local) {
    try {
      return JSON.parse(local);
    } catch (e) {
      return DEFAULT_PRODUCTS;
    }
  }
  // Initialize with DEFAULT_PRODUCTS on first clean run
  try {
    localStorage.setItem("sincerity_products", JSON.stringify(DEFAULT_PRODUCTS));
  } catch(e) {}
  return DEFAULT_PRODUCTS;
};

export const PRODUCTS = new Proxy([], {
  get(target, prop) {
    const list = getStoredProducts();
    const val = (list as any)[prop];
    if (typeof val === "function") {
      return val.bind(list);
    }
    return val;
  },
  getOwnPropertyDescriptor(target, prop) {
    const list = getStoredProducts();
    return Reflect.getOwnPropertyDescriptor(list, prop);
  },
  ownKeys(target) {
    const list = getStoredProducts();
    return Reflect.ownKeys(list);
  },
  has(target, prop) {
    const list = getStoredProducts();
    return Reflect.has(list, prop);
  }
}) as unknown as Product[];

export const LOGO_URL = "https://hxfftpvzumcvtnzbpegb.supabase.co/storage/v1/object/public/generals/tongling_logo.png";

export const BRANDS = [
  { name: 'LC WAIKIKI', logoUrl: 'https://hxfftpvzumcvtnzbpegb.supabase.co/storage/v1/object/public/thirdparty/lc_waikiki_logo.svg' },
  { name: 'SUSSAN', logoUrl: 'https://hxfftpvzumcvtnzbpegb.supabase.co/storage/v1/object/public/thirdparty/sussan_logo.svg' },
  { name: 'SPORTSGIRL', logoUrl: 'https://hxfftpvzumcvtnzbpegb.supabase.co/storage/v1/object/public/thirdparty/sportsgirl_logo.svg' },
  { name: 'TARGET', logoUrl: 'https://hxfftpvzumcvtnzbpegb.supabase.co/storage/v1/object/public/thirdparty/target_logo.svg' },
  { name: 'ZARA', logoUrl: 'https://hxfftpvzumcvtnzbpegb.supabase.co/storage/v1/object/public/thirdparty/Zara_logo.svg' }, 
  { name: 'COSTCO', logoUrl: 'https://hxfftpvzumcvtnzbpegb.supabase.co/storage/v1/object/public/thirdparty/costco_logo.jpeg' }, 
  { name: 'NEXT', logoUrl: 'https://hxfftpvzumcvtnzbpegb.supabase.co/storage/v1/object/public/thirdparty/next_logo.svg' }, 
  { name: 'INDITEX', logoUrl: 'https://hxfftpvzumcvtnzbpegb.supabase.co/storage/v1/object/public/thirdparty/inditex_logo.svg' }, 
  { name: 'UNTUCKIT', logoUrl: 'https://hxfftpvzumcvtnzbpegb.supabase.co/storage/v1/object/public/thirdparty/untuckit_logo.png' }, 
  { name: 'MUJI', logoUrl: 'https://hxfftpvzumcvtnzbpegb.supabase.co/storage/v1/object/public/thirdparty/muji_logo.svg' }, 
  { name: 'SUBURBIA', logoUrl: 'https://hxfftpvzumcvtnzbpegb.supabase.co/storage/v1/object/public/thirdparty/suburbia_logo.svg' }, 
  { name: 'SAINSBURY\'S', logoUrl: 'https://hxfftpvzumcvtnzbpegb.supabase.co/storage/v1/object/public/thirdparty/sainsbury_logo.png' }, 
  { name: 'YD.', logoUrl: 'https://hxfftpvzumcvtnzbpegb.supabase.co/storage/v1/object/public/thirdparty/mo_co_logo.png' }
];
