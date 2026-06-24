import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ShoppingBag, Plus, Minus } from "lucide-react";
import { CartItem } from "../types";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemove 
}) => {
  const total = items.reduce((sum, item) => sum + (item.showPrice !== false ? item.price * item.quantity : 0), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-ink/10 backdrop-blur-[2px] z-[60]"
          />
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full md:max-w-md bg-[#FBFBFA] z-[70] shadow-[-20px_0_60px_rgba(0,0,0,0.05)] flex flex-col border-l border-ink/10"
          >
            <header className="p-8 md:p-10 border-b border-ink/5 bg-[#FBFBFA] flex justify-between items-center">
              <div className="space-y-1">
                <h2 className="text-xl md:text-2xl font-serif font-bold tracking-tight text-ink">Archive Bag</h2>
                <p className="font-mono text-[9px] tracking-[0.3em] text-[#B2A490] font-bold">Unit container — {items.length} {items.length === 1 ? 'item' : 'items'}</p>
              </div>
              <button 
                onClick={onClose} 
                className="p-2.5 text-ink/60 hover:text-ink transition-colors border border-ink/10 hover:border-ink/30 rounded-[1px] bg-transparent"
                aria-label="Close cart"
              >
                <X size={16} strokeWidth={1.5} />
              </button>
            </header>

            <div className="flex-grow overflow-y-auto p-8 md:p-10">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <ShoppingBag size={48} className="text-[#B2A490]/40" strokeWidth={1} />
                  <div className="space-y-2">
                    <p className="font-mono text-[9px] tracking-[0.3em] text-[#B2A490] font-bold">Your storage is empty</p>
                    <p className="font-serif text-xs text-ink/50 max-w-xs leading-relaxed">No active textiles or fiber bolts recorded in your current archive segment.</p>
                  </div>
                  <button 
                    onClick={onClose}
                    className="border border-ink/15 px-8 py-3.5 font-mono font-bold text-[9px] tracking-widest hover:bg-ink hover:text-bg-base hover:border-ink transition-all rounded-[1px] bg-transparent"
                  >
                    Return to Gallery
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-8">
                  {items.map((item) => (
                    <motion.div layout key={item.id} className="grid grid-cols-12 gap-6 border-b border-ink/5 pb-8 last:border-0 group items-center">
                      <div className="col-span-3 aspect-[3/4] bg-[#FBFBFA] overflow-hidden border border-ink/5 rounded-[1px] shadow-sm">
                        <img src={item.productImage} alt={item.title} className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" referrerPolicy="no-referrer" />
                      </div>
                      <div className="col-span-9 flex flex-col justify-between py-1 h-full min-h-[96px]">
                        <div className="space-y-1">
                          <div className="flex justify-between items-start gap-4">
                            <h3 className="font-serif text-[16px] md:text-[17px] font-bold tracking-tight text-ink leading-tight group-hover:text-[#B2A490] transition-colors">{item.title}</h3>
                            <button onClick={() => onRemove(item.id)} className="text-ink/30 hover:text-red-500 transition-colors p-1" aria-label="Remove item">
                              <X size={14} />
                            </button>
                          </div>
                          <p className="font-mono text-[9px] text-[#B2A490] tracking-widest font-bold">{item.material}</p>
                        </div>
                        <div className="flex justify-between items-center mt-3">
                          {/* Sleek inline selector */}
                          <div className="flex items-center border border-ink/10 bg-white p-1 rounded-[1px]">
                            <button 
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              className="w-6 h-6 flex items-center justify-center text-ink/50 hover:text-ink transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={11} />
                            </button>
                            <span className="w-8 text-center font-mono text-[11px] font-bold text-ink">{item.quantity}</span>
                            <button 
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              className="w-6 h-6 flex items-center justify-center text-ink/50 hover:text-ink transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus size={11} />
                            </button>
                          </div>
                          <p className="font-mono text-xs md:text-sm font-bold text-ink">
                            {item.showPrice !== false ? `$${(item.price * item.quantity).toFixed(2)}` : "Price on inquiry"}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <footer className="p-8 md:p-10 border-t border-ink/10 bg-[#FAF9F5] space-y-6">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="font-mono text-[9px] tracking-[0.25em] text-[#B2A490] font-bold mb-1">Estimated Total</p>
                    <span className="text-2xl md:text-3xl font-mono text-ink font-light tracking-tight">
                      ${total.toFixed(2)}
                      {items.some(item => item.showPrice === false) && (
                        <span className="text-[10px] text-ink/40 block mt-1 normal-case tracking-normal font-sans font-normal">
                          *Excludes items with hidden prices
                        </span>
                      )}
                    </span>
                  </div>
                  <p className="font-mono text-[8px] text-ink/40 tracking-widest text-right leading-relaxed">
                    Excludes shipping & <br />international taxes
                  </p>
                </div>
                <button className="w-full bg-ink text-bg-base py-4 font-mono font-bold text-[10px] md:text-[11px] tracking-[0.3em] hover:bg-ink/90 active:scale-[0.99] transition-all border border-transparent shadow-[0_4px_12px_rgba(0,0,0,0.05)] text-center rounded-[1px]">
                  Proceed
                </button>
              </footer>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
