import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ShoppingBag, Instagram, Mail } from "lucide-react";
import { LOGO_URL } from "../data";

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-bg-base/90 backdrop-blur-sm px-4 md:px-12 py-6 flex justify-between items-center border-b border-ink/10">
        <div className="flex items-center gap-8 md:w-1/3">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 -ml-2 hover:opacity-50 transition-opacity"
            aria-label="Open Menu"
          >
            <Menu size={24} strokeWidth={1} />
          </button>
          <nav className="hidden md:flex gap-10 text-xs md:text-sm font-medium tracking-wider font-ivar">
            <Link to="/shop" className="hover:opacity-100 opacity-60 transition-all hover:tracking-[0.15em]">Shop</Link>
            <Link to="/collections" className="hover:opacity-100 opacity-60 transition-all hover:tracking-[0.15em]">Collections</Link>
            <Link to="/brand-story" className="hover:opacity-100 opacity-60 transition-all hover:tracking-[0.15em]">Story</Link>
          </nav>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 text-center">
          <Link to="/" className="group">
            <img 
              src={LOGO_URL} 
              alt="Tongling Sincerity" 
              className="h-8 md:h-12 w-auto object-contain mx-auto group-hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
            />
          </Link>
        </div>

        <div className="flex items-center justify-end gap-6 md:w-1/3">
          <button 
            onClick={onOpenCart}
            className="relative p-2 hover:opacity-50 transition-opacity"
            aria-label="Open Cart"
          >
            <ShoppingBag size={22} strokeWidth={1} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-ink text-bg-base text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold font-mono">
                {cartCount}
              </span>
            )}
          </button>
          <div className="hidden md:flex flex-col items-end border-l border-ink/20 pl-6 h-10 justify-center">
            <p className="text-xs font-medium tracking-widest text-ink/40 font-ivar">Since 1998</p>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-full max-w-[280px] bg-white z-[70] shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-gray-100 flex justify-between items-center font-ivar">
                <h2 className="text-xl font-bold tracking-tight">Menu</h2>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:rotate-90 transition-transform duration-300">
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>
              <nav className="flex flex-col p-6 gap-8 font-ivar">
                <Link to="/" className="text-2xl font-bold tracking-tight hover:pl-2 transition-all">Home</Link>
                <Link to="/shop" className="text-2xl font-bold tracking-tight hover:pl-2 transition-all">Shop</Link>
                <Link to="/collections" className="text-2xl font-bold tracking-tight hover:pl-2 transition-all">Collections</Link>
                <Link to="/brand-story" className="text-2xl font-bold tracking-tight hover:pl-2 transition-all">Brand Story</Link>
              </nav>
              <div className="mt-auto p-6 border-t border-gray-100">
                <img 
                  src={LOGO_URL} 
                  alt="Tongling Sincerity" 
                  className="h-8 w-auto object-contain mb-4 opacity-40 grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="flex gap-4">
                  <Instagram size={18} strokeWidth={1.5} className="text-gray-400" />
                  <Mail size={18} strokeWidth={1.5} className="text-gray-400" />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
