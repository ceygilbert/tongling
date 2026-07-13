import { Product } from "./types";

const DEFAULT_PRODUCTS: Product[] = [
  {
    id: "1",
    title: "European Flax Linen",
    description: "Our European Flax® linen is woven from long flax fibres grown in Western Europe. Naturally breathable, durable and biodegradable, it offers a crisp handle that gradually softens with wear and washing while maintaining its distinctive character.",
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
    title: "Special Weaves",
    description: "Our special weave collection explores a variety of decorative constructions and surface techniques, including dobbies, jacquards, embroidery and topdyed fabrics. Combined with optional functional finishes, these fabrics offer greater texture, dimension and design flexibility for apparel and home textiles.",
    dimensions: "140 CM WIDTH",
    material: "LINEN BLEND",
    technique: "JACQUARD WEAVE",
    status: "ARTISAN SERIES",
    lifestyleImage: "Specialweave.jpg?auto=format&fit=crop&w=1200&q=80",
    productImage: "Specialweave.jpg?auto=format&fit=crop&w=1200&q=80",
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
    title: "YARN-DYED FABRICS",
    description: "Create depth and structure with yarn-dyed linen. From chambrays, stripes and checks to custom developments, our yarn-dyed collections offer lasting colour definition and distinctive woven character. Choose from our pattern library or develop exclusive designs with our team.",
    dimensions: "150 CM WIDTH",
    material: "100% LINEN",
    technique: "YARN-DYED",
    status: "PREMIUM FINISH",
    lifestyleImage: "Yarndyed.jpg?auto=format&fit=crop&w=1200&q=80",
    productImage: "Yarndyed.jpg?auto=format&fit=crop&w=1200&q=80",
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
    title: "DIGITAL PRINTED",
    description: "High-definition digital printing enables detailed patterns, precise colour reproduction and flexible production. Suitable for both apparel and home textiles, our collection can be selected from existing designs or developed as bespoke prints.",
    dimensions: "145 CM WIDTH",
    material: "LINEN / COTTON",
    technique: "DIGITAL PRINT",
    status: "CREATIVE LINE",
    lifestyleImage: "digital.jpg?auto=format&fit=crop&w=1200&q=80",
    productImage: "digital.jpg?auto=format&fit=crop&w=1200&q=80",
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

export const PRODUCTS = DEFAULT_PRODUCTS;

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

export const DEFAULT_HOME_CONTENT: import('./types').HomeContent = {
  hero: {
    titleLine1: "The Art Of",
    titleLine2: "Crafted",
    titleLine3: "Textures",
    description: "\"Tongling Sincerity Linen Group offers a vertically integrated linen supply chain, covering yarn spinning, weaving, dyeing, printing, and finishing. Every yarn we use is fully traceable, ensuring transparency, quality assurance and responsibility across all stages of production.\"",
    image: "HeroSectionTL.jpg?auto=format&fit=crop&w=1200&q=80"
  },
  philosophy: {
    quote: "\"One thread at a time. It’s a craft we’ve been learning, refining, and passing down for generations. Specializing in linen and linen-blend fabric production for over 30 years, our team has spent a lifetime growing in the same craft.\"",
    team: [
      { name: "Aunt Sun", role: "Linen storage management for 33 years" },
      { name: "Aunt Cui", role: "Linen production manager for 28 years" },
      { name: "Uncle Lu", role: "Linen Production Coordinator for 28 years" },
      { name: "Peter Hu", role: "Founded and led our team over 30 years" }
    ]
  },
  mainCollection: {
    productIds: ["1", "2", "3", "4", "5", "6", "7"]
  },
  sustainability: {
    subtitle: "Ecological Standard",
    titleLine1: "Culture as",
    titleLine2: "Nature",
    description: "Each thread reflects the intelligence of nature. Our commitment to linen begins in the field. Flax is naturally resilient, requires minimal irrigation and generates virtually no waste, with every part of the plant finding a purpose. These qualities are the reason we continue to build our collections around this remarkable fibre.",
    features: [
      "European Flax® Certified",
      "Closed-Loop Recycled Selvedges",
      "OEKO-TEX® Standard 100 Compliant",
      "Responsibly Harvested In France"
    ],
    image1: "Natural.png?auto=format&fit=crop&w=1200&q=80",
    image1Caption: "Organic Flax Fields",
    image2: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=1200&q=80",
    image2Caption: "Raw Harvest No. 04"
  }
};

export const getStoredHomeContent = (): import('./types').HomeContent => {
  if (typeof window === "undefined") return DEFAULT_HOME_CONTENT;
  const local = localStorage.getItem("sincerity_home_content");
  if (local) {
    try {
      return JSON.parse(local);
    } catch (e) {
      return DEFAULT_HOME_CONTENT;
    }
  }
  return DEFAULT_HOME_CONTENT;
};

export const DEFAULT_SOLUTIONS_CONTENT: import('./types').SolutionsContent = {
  colorFeatures: [
    { num: "01", name: "Laboratory colour matching", desc: "Precision custom lab dips matched under multiple calibrated standard light sources." },
    { num: "02", name: "Instrumental colour measurement", desc: "Spectrophotometric shade analysis to monitor chromatic accuracy down to absolute delta values." },
    { num: "03", name: "Digital recipe generation", desc: "Automated colorant formulation balancing color performance with eco-sustainable input parameters." },
    { num: "04", name: "Computer-controlled dye dosing", desc: "Precise computerized dosing ensures consistent distribution across small and large dye batches." }
  ],
  supportingServices: [
    { name: "Complimentary Lab Dips", note: "Standard 3-5 days turnaround" },
    { name: "Handloom & Strike-Offs", note: "Bespoke structural pre-runs" },
    { name: "Digital Print Sampling", note: "Rapid physical print prototypes" },
    { name: "Technical Consultation", note: "Direct access to yarn engineers" }
  ],
  finishingTechniques: [
    { name: "Basic Wash", desc: "Provides a relaxed natural appearance while improving softness and reducing residual shrinkage. Perfect for everyday home essentials." },
    { name: "Sand Wash", desc: "A premium finishing treatment that creates a smoother micro-shaved surface and significantly softer hand feel, delivering a relaxed and luxurious appearance." },
    { name: "Enzyme Wash", desc: "Uses bio-organic agents to gently refine the fabric surface, improving drapery, glide, softness, and skin comfort while preserving core physical durability." },
    { name: "Low-Tension Rope Processing", desc: "Designed specifically for waffle, weave-pucker, and dobby textures, helping preserve the natural three-dimensional structure and surface depth." }
  ],
  applications: [
    "Bedding", "Cushion Covers", "Table Linen", "Curtains", "Decorative Textiles", "Hospitality & Hotel Programs"
  ],
  yarnSpecs: [
    "Precision wet-spun pure flax fibers",
    "Suitable for high-speed industrial weaving & knitting",
    "High tensile strength with minimal natural yarn slubs",
    "Available for custom sampling up to container quantity"
  ],
  pfdSpecs: [
    "Controlled pre-treatment for supreme affinity and absorbency",
    "Perfect base for piece dyeing, garment dyeing & digital printing",
    "Clean structural alignment protecting selvedges",
    "Continuous stock-supported qualities for rapid launch"
  ],
  capabilities: [
    { title: "Piece Dyeing", desc: "Flexible colour development with excellent shade consistency and high colorfastness over large bulk volumes.", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80" },
    { title: "Yarn Dyeing", desc: "Rich complex colour depth and sophisticated premium woven designs for checks, stripes, and customized jaquards.", img: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80" },
    { title: "Digital Printing", desc: "Advanced high-definition digital inkjet technology enabling unlimited color gradients and short development cycles.", img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80" },
    { title: "Placement Printing", desc: "Extremely precise motif and pattern alignment designed specifically for structured apparel patterns and home panels.", img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80" },
    { title: "Embroidery", desc: "Decorative custom structural embroidery elements combining traditional artisan techniques with technical precision.", img: "https://images.unsplash.com/photo-1554188248-986adbb73be4?auto=format&fit=crop&w=800&q=80" },
    { title: "Dobby Weaving", desc: "Beautifully textured, geometric and decorative structures that give linen fabrics deep visual and structural character.", img: "https://images.unsplash.com/photo-1501183007986-d0d080b147f9?auto=format&fit=crop&w=800&q=80" }
  ],
  bespokeSolutions: [
    "Bespoke Constructions",
    "Custom Colours",
    "Specialty Finishes",
    "Sustainable Solutions"
  ],
  heritage: {
    titleLine1: "The Heritage Of Flax",
    title: "OUR HERITAGE",
    desc1: "Founded in Tongling, China, Sincerity Linen has spent more than 30 years dedicated to the manufacturing of linen textiles. Throughout this time, we have remained focused on one material — flax.",
    desc2: "By combining carefully sourced European raw materials, experienced craftsmanship and continuous investment in production technology, we continue to serve customers around the world with premium linen fabrics designed for modern applications. From yarn to finished fabric, every stage is guided by a commitment to quality, consistency and long-term partnership."
  }
};

export const getStoredSolutionsContent = (): import('./types').SolutionsContent => {
  if (typeof window === "undefined") return DEFAULT_SOLUTIONS_CONTENT;
  const local = localStorage.getItem("sincerity_solutions_content");
  if (local) {
    try {
      return JSON.parse(local);
    } catch (e) {
      return DEFAULT_SOLUTIONS_CONTENT;
    }
  }
  return DEFAULT_SOLUTIONS_CONTENT;
};

export const DEFAULT_STORY_CONTENT: import('./types').StoryContent = {
  hero: {
    subtitle: "Maison De Textile — Est. 2005",
    titleLine1: "The Living",
    titleLine2: "Fabric",
    videoUrl: "https://joqedqcltiyvzgenbmsu.supabase.co/storage/v1/object/public/TongLing/linen_brandstory.mp4"
  },
  chapter1: {
    label: "Chapter I",
    titleLine1: "A Legacy of",
    titleLine2: "Sincerity",
    desc1: "Founded in 2005, Tongling Sincerity Linen Group was built upon a singular philosophy: that the most extraordinary textiles are born from an honest dialogue between human hands and nature's raw fiber.",
    desc2: "What began as a specialized dyeing house in Tongling has evolved into a global benchmark for luxury linen production, serving as a silent architect behind the world's most prestigious fashion houses.",
    imageUrl: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=1200&q=80",
    imageBadge: "Crafted with \nUncompromising \nStandard"
  },
  chapter2: {
    label: "Chapter II",
    titleLine1: "The Sensitivity",
    titleLine2: "of Touch",
    desc: "Linen is a living organism. It breathes, reacts to humidity, and holds the memory of the hands that guide it. Our master weavers spend decades mastering the tension required to transform flax into a fabric that feels cooling to the skin and weightless to the spirit.",
    imageUrl: "https://images.unsplash.com/photo-15822a5aee158?auto=format&fit=crop&w=800&q=80",
    point1Title: "Vertical Control",
    point1Desc: "Total yarn traceability. We oversee every stage from spinning to the final finish.",
    point2Title: "Artisanal Scale",
    point2Desc: "Production volume balanced with meticulous individual inspection protocols."
  },
  chapter3: {
    label: "Chapter III",
    titleLine1: "Quiet",
    titleLine2: "Innovation",
    imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=2000&q=80",
    header: "R&D Laboratory",
    desc: "Beyond the loom, our laboratory focuses on the molecular future of linen. Through proprietary technical developments, we have enhanced the natural properties of flax—increasing wrinkle resistance while maintaining breathability.",
    stat1Label: "Efficiency",
    stat1Value: "98.4%",
    stat2Label: "Sustainability",
    stat2Value: "Zero Waste",
    stat3Label: "Partners",
    stat3Value: "Global Reach"
  },
  finalQuote: {
    imageUrl: "https://images.unsplash.com/photo-1558051815-0f18e64e6280?auto=format&fit=crop&w=400&q=80",
    quote: "\"We do not merely sell fabric; we provide the catalyst for creation. Every bolt that leaves our facility carries the legacy of Tongling and the future of sustainable luxury.\"",
    author: "Authenticity Guaranteed"
  }
};

export const getStoredStoryContent = (): import('./types').StoryContent => {
  if (typeof window === "undefined") return DEFAULT_STORY_CONTENT;
  const local = localStorage.getItem("sincerity_story_content");
  if (local) {
    try {
      return JSON.parse(local);
    } catch (e) {
      return DEFAULT_STORY_CONTENT;
    }
  }
  return DEFAULT_STORY_CONTENT;
};
