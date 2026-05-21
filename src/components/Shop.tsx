import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Heart } from "lucide-react";
import { Product } from "../types";
import { PRODUCTS } from "../data";

interface ShopProps {
  onAddToCart: (product: Product) => void;
}

export const Shop: React.FC<ShopProps> = ({ onAddToCart }) => {
  const [activeFilters, setActiveFilters] = useState({
    category: "ALL",
    process: "ALL",
    availability: "ALL",
    composition: "ALL",
  });

  const filterConfig = {
    category: ["ALL", "SHIRTING", "GARMENT", "SUIT", "TEXTURE"],
    process: ["ALL", "PIECE_DYED", "YARN_DYED", "PRINTING", "SPECIAL_FINISH"],
    availability: ["ALL", "IN_STOCK", "MAKE_TO_ORDER"],
    composition: ["ALL", "Pure linen", "linen-cotton", "Linen-silk", "Linen-wool", "Linen Tencel", "Linen Viscose", "Hemp&Ramie"],
  };

  const filterLabels: Record<string, string> = {
    ALL: "All",
    SHIRTING: "Lightweight shirting & dressing",
    GARMENT: "Everyday Garment",
    SUIT: "Tailoring suit",
    TEXTURE: "Distinctive texture",
    PIECE_DYED: "Piece dyed",
    YARN_DYED: "Yarn dyed",
    PRINTING: "Printing",
    SPECIAL_FINISH: "Special finish",
    IN_STOCK: "In stock",
    MAKE_TO_ORDER: "Make to Order",
  };

  const filteredProducts = PRODUCTS.filter(p => {
    return (activeFilters.category === "ALL" || p.category === activeFilters.category) &&
           (activeFilters.process === "ALL" || p.process === activeFilters.process) &&
           (activeFilters.availability === "ALL" || p.availability === activeFilters.availability) &&
           (activeFilters.composition === "ALL" || p.composition === activeFilters.composition);
  });

  const updateFilter = (key: keyof typeof activeFilters, value: string) => {
    setActiveFilters(prev => ({ ...prev, [key]: value }));
  };

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="pt-24 md:pt-32 pb-32 px-4 md:px-12 relative bg-bg-base min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 pt-12 border-b border-ink/5 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-serif tracking-tight text-ink mb-4 font-black">Shop All</h2>
              <p className="font-mono text-[10px] md:text-[12px] tracking-[0.2em] text-ink/60 leading-relaxed max-w-lg font-bold">
                Archival fabrics & textile developments from the Collision technical laboratory.
              </p>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-mono tracking-[0.3em] text-ink/30 font-bold">
              <span>Series No. 01</span>
              <span className="w-8 h-[1px] bg-ink/10"></span>
              <span>2024</span>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
          {/* Sticky Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-40 space-y-12">
              <div className="flex justify-between items-end pb-4 border-b border-ink/10">
                <h4 className="font-mono text-[10px] font-bold tracking-[0.3em] text-ink">Filters</h4>
                {(activeFilters.category !== "ALL" || activeFilters.process !== "ALL" || activeFilters.availability !== "ALL" || activeFilters.composition !== "ALL") && (
                  <button 
                    onClick={() => setActiveFilters({ category: "ALL", process: "ALL", availability: "ALL", composition: "ALL" })}
                    className="font-mono text-[9px] tracking-widest text-[#B2A490] underline underline-offset-4 font-bold"
                  >
                    Reset
                  </button>
                )}
              </div>

              {(Object.keys(filterConfig) as Array<keyof typeof filterConfig>).map((key) => (
                <div key={key} className="space-y-4">
                  <h5 className="font-mono text-[10px] font-bold tracking-[0.3em] text-ink border-b border-ink/5 pb-2">{capitalizeFirstLetter(key)}</h5>
                  <div className="flex flex-col gap-2.5">
                    {filterConfig[key].map((val) => (
                      <button
                        key={val}
                        onClick={() => updateFilter(key, val)}
                        className={`font-mono text-[10px] tracking-widest text-left transition-all hover:pl-2 ${
                          activeFilters[key] === val ? "text-[#B2A490] font-bold" : "text-ink hover:text-[#B2A490]"
                        }`}
                      >
                        {filterLabels[val] || val}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-12 border-b border-ink/10 pb-4">
              <p className="font-mono text-[10px] tracking-widest text-ink/40 font-bold">Showing {filteredProducts.length} articles</p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="py-24 text-center bg-bg-white border border-dashed border-ink/10">
                <p className="font-mono text-[12px] tracking-[0.5em] text-ink/20 font-bold">No articles match your specific archive query.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-16">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="group w-full max-w-[240px] mx-auto"
                  >
                    <div className="relative aspect-square bg-gray-50 overflow-hidden mb-4 transform group-hover:-rotate-0.5 transition-transform duration-700 bg-bg-white shadow-sm"
                         style={{ 
                           clipPath: "polygon(0% 0%, 100% 0%, 100% 98%, 98.75% 100%, 97.5% 98%, 96.25% 100%, 95% 98%, 93.75% 100%, 92.5% 98%, 91.25% 100%, 90% 98%, 88.75% 100%, 87.5% 98%, 86.25% 100%, 85% 98%, 83.75% 100%, 82.5% 98%, 81.25% 100%, 80% 98%, 78.75% 100%, 77.5% 98%, 76.25% 100%, 75% 98%, 73.75% 100%, 72.5% 98%, 71.25% 100%, 70% 98%, 68.75% 100%, 67.5% 98%, 66.25% 100%, 65% 98%, 63.75% 100%, 62.5% 98%, 61.25% 100%, 60% 98%, 58.75% 100%, 57.5% 98%, 56.25% 100%, 55% 98%, 53.75% 100%, 52.5% 98%, 51.25% 100%, 50% 98%, 48.75% 100%, 47.5% 98%, 46.25% 100%, 45% 98%, 43.75% 100%, 42.5% 98%, 41.25% 100%, 40% 98%, 38.75% 100%, 37.5% 98%, 36.25% 100%, 35% 98%, 33.75% 100%, 32.5% 98%, 31.25% 100%, 30% 98%, 28.75% 100%, 27.5% 98%, 26.25% 100%, 25% 98%, 23.75% 100%, 22.5% 98%, 21.25% 100%, 20% 98%, 18.75% 100%, 17.5% 98%, 16.25% 100%, 15% 98%, 13.75% 100%, 12.5% 98%, 11.25% 100%, 10% 98%, 8.75% 100%, 7.5% 98%, 6.25% 100%, 5% 98%, 3.75% 100%, 2.5% 98%, 1.25% 100%, 0% 98%)"
                         }}>
                      <Link to={`/product/${product.id}`}>
                        <img 
                          src={product.productImage} 
                          alt={product.title} 
                          className="w-full h-full object-cover grayscale brightness-105 group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                      </Link>
                      <button 
                        onClick={() => onAddToCart(product)}
                        className="absolute bottom-0 left-0 w-full bg-ink/90 backdrop-blur-sm text-bg-base py-4 font-mono font-bold text-[9px] tracking-[0.2em] md:translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                      >
                        Quick Add — ${product.price.toFixed(2)}
                      </button>
                    </div>
                    <div className="flex justify-between items-end gap-2">
                       <Link to={`/product/${product.id}`} className="flex-grow space-y-1">
                        <h3 className="font-sans font-medium text-lg md:text-xl tracking-tight text-ink">{product.title.split(' ')[0]}</h3>
                        <p className="font-sans text-[11px] md:text-[13px] text-ink/60">{product.composition}</p>
                        <p className="font-sans text-[10px] md:text-[12px] text-ink/30 tracking-widest font-bold">{product.category === 'TEXTURE' ? 'James Dunlop' : 'Mokum'}</p>
                      </Link>
                      <div className="flex flex-col items-end gap-4">
                        <button className="p-2 rounded-full border border-ink/5 hover:bg-ink/5 transition-colors group/heart" aria-label="Add to wishlist">
                          <Heart size={16} strokeWidth={1} className="text-ink/20 group-hover/heart:text-red-500 transition-colors" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Shop;
