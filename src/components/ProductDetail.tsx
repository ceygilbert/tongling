import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Minus, Plus, ShoppingBag, Heart, Globe } from "lucide-react";
import { Product } from "../types";
import { PRODUCTS } from "../data";

interface ProductDetailProps {
  onAddToCart: (product: Product) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ onAddToCart }) => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);
  const relatedProducts = PRODUCTS.filter(p => p.id !== id).slice(0, 4);

  // High-fidelity luxury state
  const [activeImageTab, setActiveImageTab] = useState<"detail" | "lifestyle">("detail");
  const [quantity, setQuantity] = useState(1);
  const [includeSwatch, setIncludeSwatch] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState<"specs" | "origin" | "shipping">("specs");

  if (!product) {
    return (
      <div className="pt-48 pb-48 text-center font-mono text-ink/40 tracking-widest font-bold">
        Product not found
      </div>
    );
  }

  const currentImage = activeImageTab === "detail" ? product.productImage : product.lifestyleImage;
  const currentCaption = activeImageTab === "detail"
    ? "Technical shot — Pure filament density & weft resolution"
    : "Atmospheric in situ — Natural drape, color saturation & weave response";

  const handleAddToBag = () => {
    onAddToCart(product);
  };

  return (
    <div className="pt-28 md:pt-40 pb-32 bg-[#FBFBFA] text-ink selection:bg-ink selection:text-bg-base">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 md:px-12"
      >
        {/* Navigation Breadcrumb */}
        <div className="mb-12 md:mb-16 flex items-center justify-between border-b border-ink/5 pb-6">
          <Link 
            to="/shop" 
            className="font-mono text-xs md:text-sm font-bold tracking-[0.45em] text-ink/40 hover:text-ink transition-colors flex items-center gap-2 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
            Back to archive range
          </Link>
          <div className="hidden sm:flex items-center gap-4 font-mono text-xs md:text-sm tracking-widest text-ink/40 font-bold">
            <span>Index / Apparel System</span>
            <span>—</span>
            <span>Specification code TL-{product.id}0A</span>
          </div>
        </div>

        {/* Hero Section: Gallery & Details Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32 items-start">
          
          {/* Gallery Block */}
          <div className="lg:col-span-7 space-y-8">
            {/* Main Stage */}
            <div className="relative aspect-[3/4] bg-white overflow-hidden border border-ink/5 shadow-sm group">
              <div className="absolute top-4 left-4 z-10 bg-[#FBFBFA]/90 border border-ink/5 px-2.5 py-1 text-[8px] font-mono tracking-[0.2em] text-ink/75 font-bold">
                perspective {activeImageTab === "detail" ? "01" : "02"}
              </div>
              
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeImageTab}
                  src={currentImage} 
                  alt={product.title} 
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full h-full object-cover grayscale brightness-95 group-hover:brightness-100 transition-all duration-1000 ease-out"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>

              {/* Decorative Frame */}
              <div className="absolute inset-0 border border-white/10 pointer-events-none" />
            </div>

            {/* Captions and Toggle Row */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-2">
              <span className="font-mono text-[8px] md:text-[9px] tracking-[0.2em] text-[#B2A490] font-bold leading-none">
                {currentCaption}
              </span>

              {/* Toggle controls */}
              <div className="flex gap-2.5">
                <button
                  onClick={() => setActiveImageTab("detail")}
                  className={`px-4 py-2 text-[9px] font-mono tracking-widest border transition-all duration-300 rounded-[1px] ${
                    activeImageTab === "detail"
                      ? "bg-ink text-bg-base border-ink"
                      : "bg-transparent border-ink/10 text-ink/40 hover:border-ink/35 hover:text-ink"
                  }`}
                >
                  01 / Filament Detailed
                </button>
                <button
                  onClick={() => setActiveImageTab("lifestyle")}
                  className={`px-4 py-2 text-[9px] font-mono tracking-widest border transition-all duration-300 rounded-[1px] ${
                    activeImageTab === "lifestyle"
                      ? "bg-ink text-bg-base border-ink"
                      : "bg-transparent border-ink/10 text-ink/40 hover:border-ink/35 hover:text-ink"
                  }`}
                >
                  02 / In Situ Coupling
                </button>
              </div>
            </div>
          </div>

          {/* Details / Action Block */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-10">
            {/* Collection Identity */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B2A490] animate-pulse" />
                <span className="font-mono text-xs md:text-[13px] tracking-[0.4em] text-[#B2A490] font-black">
                  {product.status} — Sincerity Atelier
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black tracking-tighter leading-tight text-ink">
                {product.title}
              </h1>

              <div className="flex items-baseline justify-between border-b border-ink/10 pb-6 pt-2">
                <p className="text-3xl md:text-4xl font-mono text-ink tracking-tight font-light">
                  ${product.price.toFixed(2)} <span className="font-serif text-[15px] text-ink/40">/ yard</span>
                </p>
                <span className="font-mono text-xs md:text-[13px] tracking-widest border border-[#B2A490]/25 px-2.5 py-1 rounded-[1px] font-bold">
                  {product.availability === 'IN_STOCK' ? "Immediate dispatch" : "Bespoke craft-to-order"}
                </span>
              </div>
            </div>

            {/* Editorial Description */}
            <p className="font-serif text-lg md:text-xl leading-relaxed text-ink/75 py-2 border-l border-[#B2A490] pl-6">
              "{product.description}"
            </p>

            {/* Configurator Box */}
            <div className="bg-[#FAF9F5] border border-ink/5 p-6 md:p-8 space-y-6 rounded-[2px] shadow-[0_4px_24px_rgba(0,0,0,0.01)]">
              {/* Order Quantity */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs md:text-[13px] font-mono tracking-widest text-ink/50 font-bold">
                  <span>Select Bolt Yardage</span>
                  <span>Calculated Total: ${(product.price * quantity).toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between border border-ink/10 bg-white p-3.5 rounded-[1px]">
                  <span className="font-mono text-xs md:text-sm text-ink/60 font-medium">Desired Length</span>
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-1 hover:text-[#B2A490] transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="font-mono text-sm md:text-base font-bold min-w-8 text-center">{quantity} Yards</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-1 hover:text-[#B2A490] transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Sample Swatch Check */}
              <label className="flex items-start gap-4 p-4 mb-2 bg-white border border-ink/5 select-none cursor-pointer hover:bg-[#FAF9F5]/40 transition-all duration-300 rounded-[1px] group">
                <input 
                  type="checkbox" 
                  checked={includeSwatch} 
                  onChange={(e) => setIncludeSwatch(e.target.checked)}
                  className="mt-1 accent-ink h-3.5 w-3.5 cursor-pointer rounded-[2px] transition-all"
                />
                <div className="space-y-1">
                  <span className="font-mono text-xs md:text-[13px] tracking-widest font-bold text-ink block group-hover:text-[#B2A490] transition-colors">
                    Request Complimentary Swatch Card
                  </span>
                  <p className="font-serif text-xs md:text-sm text-ink/50 leading-normal">
                    Add an authentic 10x10 cm texture swatch sample to inspect exact hand-weave density, weight, and color dye matching in your private atelier before we deliver your final custom bolt.
                  </p>
                </div>
              </label>

              {/* CTA row */}
              <div className="flex gap-3 pt-2">
                <button 
                  onClick={handleAddToBag}
                  className="flex-grow bg-ink text-bg-base py-5 px-6 font-mono font-bold text-xs md:text-sm tracking-[0.35em] hover:bg-ink/90 active:scale-[0.99] transition-all relative overflow-hidden group shadow border border-transparent"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <ShoppingBag size={14} /> 
                    Add to Cart
                  </span>
                </button>
                
                <button 
                  onClick={() => setWishlisted(!wishlisted)}
                  className={`px-5 border transition-all duration-300 rounded-[1px] ${
                    wishlisted 
                      ? "bg-red-50/40 border-red-200 text-red-500" 
                      : "border-ink/10 text-ink/40 hover:border-ink/35 hover:text-ink bg-transparent"
                  }`}
                  aria-label="Save to Wishlist"
                >
                  <Heart size={15} fill={wishlisted ? "currentColor" : "none"} className={wishlisted ? "scale-105" : ""} />
                </button>
              </div>
            </div>

            {/* Editorial Accordion */}
            <div className="border-t border-ink/10 pt-4 space-y-4">
              {/* Tab Selector */}
              <div className="flex justify-between border-b border-ink/5 pb-2 font-mono text-xs md:text-[13px] tracking-widest">
                <button 
                  onClick={() => setActiveTab("specs")} 
                  className={`pb-2 transition-all relative ${activeTab === "specs" ? "font-bold text-ink" : "text-ink/40 hover:text-ink"}`}
                >
                  01 / Material Specs
                  {activeTab === "specs" && <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#B2A490]" />}
                </button>
                <button 
                  onClick={() => setActiveTab("origin")} 
                  className={`pb-2 transition-all relative ${activeTab === "origin" ? "font-bold text-ink" : "text-ink/40 hover:text-ink"}`}
                >
                  02 / Weave & Harvest
                  {activeTab === "origin" && <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#B2A490]" />}
                </button>
                <button 
                  onClick={() => setActiveTab("shipping")} 
                  className={`pb-2 transition-all relative ${activeTab === "shipping" ? "font-bold text-ink" : "text-ink/40 hover:text-ink"}`}
                >
                  03 / Packaging & Delivery
                  {activeTab === "shipping" && <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#B2A490]" />}
                </button>
              </div>

              {/* Tab Content Box */}
              <div className="min-h-[140px] pt-4">
                <AnimatePresence mode="wait">
                  {activeTab === "specs" && (
                    <motion.div 
                      key="specs"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4 font-mono text-[13px] md:text-sm tracking-widest text-[#1A1A1A]/70 font-bold"
                    >
                      <div className="flex justify-between items-center border-b border-ink/5 pb-2.5">
                        <span>Fiber Type</span>
                        <span className="text-ink font-extrabold">{product.material}</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-ink/5 pb-2.5">
                        <span>Bolt Usable Width</span>
                        <span className="text-ink font-extrabold">{product.dimensions}</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-ink/5 pb-2.5">
                        <span>Finishing Technique</span>
                        <span className="text-ink font-extrabold">{product.technique}</span>
                      </div>
                      <div className="flex justify-between items-center pb-1">
                        <span>Atelier Weft Code</span>
                        <span className="text-ink font-extrabold">TL-{product.category}-{product.process}</span>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "origin" && (
                    <motion.div 
                      key="origin"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3 font-serif text-sm md:text-base text-ink/70 leading-relaxed"
                    >
                      <p>
                        Our pure linen flax fibers are harvested from cooperative agricultural farms of Normandy, Northern France. These delicate crops are organic-grade spun under stringent water-conserving wet conditions to maximize filament tensile strength.
                      </p>
                      <p className="font-mono text-xs md:text-[13px] tracking-wider text-[#B2A490] font-bold">
                        Origin directory: Regional intellectual property — France
                      </p>
                    </motion.div>
                  )}

                  {activeTab === "shipping" && (
                    <motion.div 
                      key="shipping"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3 font-serif text-sm md:text-base text-ink/70 leading-relaxed"
                    >
                      <p>
                        Every fabric piece is hand-rolled around our custom lignin-free conservation cores and enclosed in luxury linen protective sleeves. Delivered globally via carbon-neutral white-glove couriers in pristine condition.
                      </p>
                      <p className="font-mono text-xs md:text-[13px] tracking-wider text-[#B2A490] font-bold">
                        Free tracked courier worldwide — Shipped within 24 hours
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Direct Line to the Atelier */}
            <div className="border border-[#B2A490]/25 bg-[#B2A490]/5 p-5 flex items-start gap-4 rounded-[1px]">
              <div className="p-2.5 bg-white border border-[#B2A490]/15 rounded-full flex-shrink-0">
                <Globe size={15} className="text-[#B2A490]" />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-xs md:text-[13px] tracking-[0.2em] text-[#B2A490] font-extrabold block">Atelier Consultation desk</span>
                <p className="font-serif text-xs md:text-sm text-ink/65 leading-snug">
                  Unsure about appropriate drape, weight, or custom weaving bolts for your interior project? Speak directly to our master weavers at <a href="mailto:info@sinceritylinen.com" className="underline hover:text-[#B2A490] font-sans font-medium">info@sinceritylinen.com</a>.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Related Products Section */}
        <section className="pt-16 border-t border-ink/10">
          <header className="mb-16 flex justify-between items-end border-b border-ink/5 pb-6">
            <h2 className="text-3xl md:text-4xl font-serif font-black tracking-tighter">
              Complementary <br /><span className="font-mono not-italic text-[#B2A490] text-2xl md:text-3xl font-bold tracking-widest">Textiles</span>
            </h2>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
            {relatedProducts.map((item) => (
              <Link key={item.id} to={`/product/${item.id}`} className="group space-y-4">
                <div className="aspect-[3/4] bg-white overflow-hidden border border-ink/5 relative rounded-[1px] shadow-sm transform group-hover:scale-[1.01] transition-transform duration-500 h-[380px]">
                  <img 
                    src={item.productImage} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale brightness-[0.93] group-hover:grayscale-0 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 border border-white/5 group-hover:border-white/10 pointer-events-none transition-colors" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-2xl tracking-tighter text-ink leading-tight group-hover:text-[#B2A490] transition-colors font-black">
                    {item.title}
                  </h4>
                  <p className="font-mono text-xs md:text-sm font-bold tracking-tight text-ink/45">
                    ${item.price.toFixed(2)} / Yard
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
};
export default ProductDetail;
