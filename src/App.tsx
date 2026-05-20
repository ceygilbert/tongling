/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Instagram, Mail, ArrowRight, ArrowLeft, History, Users, Globe, Award, ShoppingBag, X, Plus, Minus, Menu, Heart } from "lucide-react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useParams } from "react-router-dom";
import { Product } from "./types";

const PRODUCTS: Product[] = [
  {
    id: "1",
    title: "EUROPEAN FLAX LINEN",
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
    composition: 'Pure linen'
  },
  {
    id: "2",
    title: "LINEN–TENCEL BLEND",
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
    composition: 'Linen Tencel'
  },
  {
    id: "3",
    title: "JACQUARD WOVEN LINEN",
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
    composition: 'Linen-wool'
  },
  {
    id: "4",
    title: "ECO LIVA VISCOSE BLEND",
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
    composition: 'Linen Viscose'
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
    composition: 'Pure linen'
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
    composition: 'linen-cotton'
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
    composition: 'linen-cotton'
  },
];

const LOGO_URL = "https://hxfftpvzumcvtnzbpegb.supabase.co/storage/v1/object/public/generals/tongling_logo.png";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

interface CartItem extends Product {
  quantity: number;
}

const Header: React.FC<{ cartCount: number; onOpenCart: () => void }> = ({ cartCount, onOpenCart }) => {
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
          <nav className="hidden md:flex gap-10 text-[10px] font-bold tracking-[0.2em] uppercase font-mono">
            <Link to="/shop" className="hover:opacity-100 opacity-60 transition-all hover:tracking-[0.3em]">SHOP</Link>
            <Link to="/collections" className="hover:opacity-100 opacity-60 transition-all hover:tracking-[0.3em]">COLLECTIONS</Link>
            <Link to="/brand-story" className="hover:opacity-100 opacity-60 transition-all hover:tracking-[0.3em]">STORY</Link>
          </nav>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 text-center">
          <Link to="/" className="group">
            <img 
              src={LOGO_URL} 
              alt="TONGLING SINCERITY" 
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
            <p className="text-[9px] font-bold tracking-widest uppercase text-ink/40 font-mono italic">SINCE 1998</p>
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
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-xl font-black tracking-tighter uppercase">MENU</h2>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:rotate-90 transition-transform duration-300">
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>
              <nav className="flex flex-col p-6 gap-8">
                <Link to="/" className="text-2xl font-black tracking-tighter uppercase hover:pl-2 transition-all">HOME</Link>
                <Link to="/shop" className="text-2xl font-black tracking-tighter uppercase hover:pl-2 transition-all">SHOP</Link>
                <Link to="/collections" className="text-2xl font-black tracking-tighter uppercase hover:pl-2 transition-all">COLLECTIONS</Link>
                <Link to="/brand-story" className="text-2xl font-black tracking-tighter uppercase hover:pl-2 transition-all">BRAND STORY</Link>
              </nav>
              <div className="mt-auto p-6 border-t border-gray-100">
                <img 
                  src={LOGO_URL} 
                  alt="TONGLING SINCERITY" 
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

const Hero: React.FC = () => (
  <section className="pt-24 min-h-[92vh] flex flex-col justify-between px-4 md:px-12 relative bg-bg-base border-b border-ink/10">
    {/* Clean, high-end backdrop */}
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[70vw] h-[40vh] bg-[#f4ebd9]/30 rounded-full blur-3xl -z-0 pointer-events-none" />

    <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pt-16 pb-12 items-center my-auto">
      {/* Editorial Text Column */}
      <div className="lg:col-span-7 space-y-16">
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-4 text-[10px] md:text-[11px] font-mono uppercase tracking-[0.55em] text-ink/50"
          >
            <span>TONGLING SINCERITY LINEN</span>
            <span className="w-1.5 h-1.5 rounded-full bg-ink/30" />
            <span className="italic font-bold">EST. 1998</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-[7vw] font-serif font-black leading-[0.9] tracking-[-0.05em] uppercase italic text-ink"
          >
            The Art Of <br />
            <span className="font-mono not-italic text-collision md:ml-16 tracking-tight">CRAFTED</span> <br />
            <span className="md:ml-32">TEXTURES</span>
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="max-w-xl md:ml-24 relative pl-8 border-l border-ink/10 space-y-8"
        >
          <p className="font-serif text-lg md:text-xl lg:text-2xl leading-relaxed text-ink/75 italic">
            "A quiet dialogue between raw organic flax and decades of technical precision. We compose linen textiles that resonate with silent luxury and natural expression."
          </p>
          <div className="flex flex-wrap gap-8 items-center pt-4">
            <Link 
              to="/shop" 
              className="px-10 py-5 bg-ink text-bg-base font-mono text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-ink/90 transition-all shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              CHOOSE FABRIC
            </Link>
            <Link 
              to="/brand-story" 
              className="group font-mono text-[11px] font-bold uppercase tracking-widest flex items-center gap-3 py-3"
            >
              <span>THE BRAND JOURNEY</span>
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Hero Exhibition Column */}
      <div className="lg:col-span-5 relative flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-lg aspect-[4/5] overflow-hidden shadow-[30px_30px_70px_rgba(0,0,0,0.08)] bg-gray-50 border border-ink/5"
        >
          {/* Main cover image */}
          <img 
            src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=80" 
            alt="Premium Linen" 
            className="w-full h-full object-cover grayscale brightness-[0.92] hover:scale-105 duration-[3s] transition-transform ease-out"
            referrerPolicy="no-referrer"
          />
          {/* Premium editorial label */}
          <div className="absolute bottom-6 left-6 right-6 bg-bg-base/90 backdrop-blur-md p-6 border border-ink/10 flex justify-between items-end">
            <div className="space-y-1">
              <span className="font-mono text-[9px] uppercase tracking-widest text-ink/40 block">PRODUCT ARCHIVE NO. 01</span>
              <h3 className="font-serif text-lg font-bold uppercase italic tracking-tight text-ink">European Flax Fine</h3>
            </div>
            <span className="font-mono text-[11px] tracking-wider text-collision font-bold text-ink">100% PURE</span>
          </div>
        </motion.div>

        {/* Small floating detail block */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="absolute -left-12 bottom-12 hidden xl:flex flex-col items-center bg-[#FAF9F6] p-6 border border-ink/5 shadow-xl rotate-[-3deg] w-48"
        >
          <span className="font-serif italic text-2xl font-black text-ink mb-1">01/07</span>
          <span className="font-mono text-[8px] tracking-[0.3em] uppercase text-ink/40 text-center leading-normal">CRAFT ARCHIVE COLLECTIONS</span>
        </motion.div>
      </div>
    </div>

    {/* Elegant Footer Details of Hero Section */}
    <div className="border-t border-ink/10 py-8 flex flex-wrap gap-8 justify-between items-center text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em] text-ink/40">
      <div className="flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-emerald-700/60 animate-pulse" />
        <span>CERTIFIED NORMANDY FLAX</span>
      </div>
      <div>LOOM CAPACITY: 280,000 M / MONTH</div>
      <div className="hidden md:block">ISO 9001 & OEKO-TEX COMPLIANCE</div>
    </div>
  </section>
);

const ProductSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % PRODUCTS.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);
  };

  const product = PRODUCTS[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    })
  };

  return (
    <section className="px-4 md:px-12 mb-32 md:mb-64 overflow-hidden relative min-h-[80vh] flex items-center">
      <div className="w-full relative z-10">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 100, damping: 20 },
              opacity: { duration: 0.4 }
            }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 items-center"
          >
            <div className="lg:col-span-1 hidden lg:block">
               <motion.span 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 0.1 }}
                 className="text-[12vw] font-serif italic font-black leading-none uppercase select-none -rotate-90 origin-center absolute left-[-8vw] top-1/2"
               >
                 {product.status.split(' ')[0]}
               </motion.span>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="aspect-[3/4] md:aspect-square overflow-hidden bg-gray-100 transform -rotate-1 shadow-2xl">
                <img 
                  src={product.lifestyleImage} 
                  alt={product.title} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-collision flex items-center justify-center text-bg-base font-serif italic text-4xl select-none rotate-12 hidden md:flex shadow-2xl">
                {String(currentIndex + 1).padStart(2, '0')}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-12 relative">
               <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="w-12 h-px bg-collision" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-collision italic font-bold">{product.status}</span>
                  </div>
                  <h4 className="text-5xl md:text-[7vw] font-serif italic font-black tracking-[-0.07em] leading-[0.8] uppercase text-ink">
                    {product.title.split(' ')[0]} <br />
                    <span className="md:ml-20 font-mono not-italic text-collision">{product.title.split(' ').slice(1).join(' ')}</span>
                  </h4>
               </div>

               <div className="max-w-md ml-4 md:ml-12 border-l border-ink/20 pl-8 space-y-8">
                  <p className="font-mono text-[12px] md:text-[14px] leading-relaxed uppercase tracking-tight text-ink/60 italic">
                    {product.description}
                  </p>
                  <div className="grid grid-cols-2 gap-8 font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-ink/40">
                     <div>
                        <p className="font-bold text-ink mb-1">SPEC</p>
                        <p>{product.dimensions}</p>
                     </div>
                     <div>
                        <p className="font-bold text-ink mb-1">MATERIAL</p>
                        <p>{product.material}</p>
                     </div>
                  </div>
                  <Link 
                    to={`/product/${product.id}`}
                    className="inline-flex items-center gap-6 font-serif italic text-2xl uppercase tracking-tighter hover:text-collision transition-colors mt-8"
                  >
                    <span>VIEW ARCHIVE</span>
                    <ArrowRight size={20} />
                  </Link>
               </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-0 right-0 flex border-t border-l border-ink group">
          <button 
            onClick={prevSlide}
            className="p-8 hover:bg-ink hover:text-bg-base transition-all border-r border-ink"
          >
            <ChevronLeft size={24} strokeWidth={1} />
          </button>
          <button 
            onClick={nextSlide}
            className="p-8 hover:bg-ink hover:text-bg-base transition-all"
          >
            <ChevronRight size={24} strokeWidth={1} />
          </button>
        </div>
      </div>
    </section>
  );
};

const BRANDS = [
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

const BrandStory: React.FC = () => (
  <div className="bg-bg-base overflow-x-hidden">
    {/* Luxury Hero Section */}
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden border-b border-ink/5">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0"
      >
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover grayscale brightness-75 contrast-125"
        >
          <source src="https://joqedqcltiyvzgenbmsu.supabase.co/storage/v1/object/public/TongLing/linen_brandstory.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-ink/20" />
      </motion.div>
      
      <div className="relative z-10 text-center px-4">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-mono text-[10px] md:text-[12px] uppercase tracking-[0.6em] text-bg-base/60 block mb-6"
        >
          MAISON DE TEXTILE — EST. 2005
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-[12vw] font-serif italic text-bg-base leading-[0.8] tracking-[-0.04em] uppercase"
        >
          The Living <br />Fabric
        </motion.h1>
      </div>
    </section>

    <div className="max-w-7xl mx-auto px-4 md:px-12">
      {/* Chapter 1: Heritage */}
      <section className="py-20 md:py-24 flex flex-col lg:flex-row items-center gap-16 md:gap-32">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="lg:w-1/2 space-y-12"
        >
          <div className="space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-collision font-bold italic">CHAPTER I</span>
            <h2 className="text-5xl md:text-7xl font-serif italic uppercase tracking-tight text-ink">A Legacy of <br />Sincerity</h2>
          </div>
          <div className="space-y-8 border-l border-ink/10 pl-8">
            <p className="font-serif text-xl md:text-2xl leading-relaxed text-ink/80 italic">
              Founded in 2005, Tongling Sincerity Linen Group was built upon a singular philosophy: that the most extraordinary textiles are born from an honest dialogue between human hands and nature's raw fiber.
            </p>
            <p className="font-mono text-[12px] md:text-[14px] leading-relaxed uppercase tracking-[0.1em] text-ink/50 max-w-md">
              What began as a specialized dyeing house in Tongling has evolved into a global benchmark for luxury linen production, serving as a silent architect behind the world's most prestigious fashion houses.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="lg:w-1/2 relative"
        >
          <div className="aspect-[4/5] overflow-hidden bg-gray-50 shadow-2xl skew-x-1" 
               style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 95%, 0% 100%)" }}>
            <img 
              src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=1200&q=80" 
              alt="Tongling Workshop" 
              className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-12 -right-12 hidden md:block w-48 h-48 border border-ink/5 p-4 bg-bg-base/80 backdrop-blur-sm">
            <div className="w-full h-full border border-ink/10 flex items-center justify-center text-center p-4">
              <span className="font-serif italic text-xs uppercase tracking-widest text-ink/40 leading-relaxed">Crafted with <br />Uncompromising <br />Standard</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Chapter 2: The Philosophy of Touch (Immersive Row) */}
      <section className="py-16 border-y border-ink/5 my-16 md:my-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
          <div className="md:col-span-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="aspect-square bg-gray-100 mb-8 overflow-hidden"
              style={{ clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)" }}
            >
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                alt="Production Detail" 
                className="w-full h-full object-cover grayscale brightness-75"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
          <div className="md:col-span-2 space-y-16">
            <div className="max-w-2xl">
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-ink/30 block mb-6">CHAPTER II</span>
              <h2 className="text-4xl md:text-6xl font-serif italic uppercase text-ink leading-none mb-12">The Sensitivity <br />of Touch</h2>
              <p className="font-mono text-[13px] md:text-[15px] leading-loose uppercase tracking-[0.1em] text-ink/70">
                Linen is a living organism. It breathes, reacts to humidity, and holds the memory of the hands that guide it. Our master weavers spend decades mastering the tension required to transform flax into a fabric that feels cooling to the skin and weightless to the spirit.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-ink/5 pt-12">
               <div>
                 <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest mb-4">Vertical Control</h4>
                 <p className="font-mono text-[11px] text-ink/40 uppercase leading-relaxed">Total yarn traceability. We oversee every stage from spinning to the final finish.</p>
               </div>
               <div>
                 <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest mb-4">Artisanal Scale</h4>
                 <p className="font-mono text-[11px] text-ink/40 uppercase leading-relaxed">Production volume balanced with meticulous individual inspection protocols.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: Innovation (Full Width Visual) */}
      <section className="py-16 md:py-24">
        <div className="relative mb-16 md:mb-24 h-[60vh] md:h-[80vh] overflow-hidden group">
          <motion.div 
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full"
          >
            <img 
              src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=2000&q=80" 
              alt="Lab Research" 
              className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-all duration-[2s]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
             <span className="font-mono text-[10px] uppercase tracking-[0.6em] text-bg-base/40 mb-8 block font-bold">CHAPTER III</span>
             <h2 className="text-5xl md:text-[8vw] font-serif italic uppercase text-bg-base tracking-tight leading-none pointer-events-none">
               Quiet <br />Innovation
             </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <h3 className="text-3xl font-serif italic text-ink uppercase mb-8">R&D Laboratory</h3>
          </div>
          <div className="md:col-span-8">
            <p className="font-mono text-[14px] md:text-[18px] leading-relaxed uppercase italic text-ink/80 mb-12">
              Beyond the loom, our laboratory focuses on the molecular future of linen. Through proprietary technical developments, we have enhanced the natural properties of flax—increasing wrinkle resistance while maintaining breathability.
            </p>
            <div className="h-px bg-ink/10 w-full mb-12"></div>
            <div className="flex flex-wrap gap-x-20 gap-y-8">
              <div className="space-y-2">
                <span className="block font-mono text-[10px] text-ink/30 uppercase tracking-widest">Efficiency</span>
                <span className="text-3xl font-serif italic text-ink">98.4%</span>
              </div>
              <div className="space-y-2">
                <span className="block font-mono text-[10px] text-ink/30 uppercase tracking-widest">Sustainability</span>
                <span className="text-3xl font-serif italic text-ink">Zero Waste</span>
              </div>
              <div className="space-y-2">
                <span className="block font-mono text-[10px] text-ink/30 uppercase tracking-widest">Partners</span>
                <span className="text-3xl font-serif italic text-ink">Global Reach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Marquee Section */}
      <section className="py-16 md:py-20 border-t border-ink/5 -mx-4 md:-mx-12 overflow-hidden bg-[#f9f8f4]">
        <div className="px-4 md:px-12 mb-12 flex justify-between items-end">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-ink/30 block mb-2 font-bold">GLOBAL TRUST</span>
            <h3 className="text-2xl font-serif italic text-ink uppercase">Selected Partners</h3>
          </div>
          <p className="hidden md:block font-mono text-[10px] text-ink/40 uppercase tracking-widest">ESTABLISHED RELATIONS SINCE 2005</p>
        </div>
        
        <div className="relative flex">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-24 items-center whitespace-nowrap"
          >
            {[...BRANDS, ...BRANDS].map((brand, i) => (
              <div key={`${brand.name}-${i}`} className="flex-shrink-0 flex items-center justify-center grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                {brand.logoUrl ? (
                  <img src={brand.logoUrl} alt={brand.name} className="h-6 md:h-8 w-auto object-contain" referrerPolicy="no-referrer" />
                ) : (
                  <span className="font-serif italic font-bold text-xl text-ink">{brand.name}</span>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final Quote Section */}
      <section className="py-24 md:py-32 text-center border-t border-ink/5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img src="https://images.unsplash.com/photo-1558051815-0f18e64e6280?auto=format&fit=crop&w=400&q=80" alt="Detail" className="w-24 h-24 rounded-full object-cover mx-auto mb-16 grayscale" referrerPolicy="no-referrer" />
          <p className="text-2xl md:text-4xl font-serif italic text-ink/60 leading-relaxed max-w-4xl mx-auto mb-12">
            "We do not merely sell fabric; we provide the catalyst for creation. Every bolt that leaves our facility carries the legacy of Tongling and the future of sustainable luxury."
          </p>
          <div className="w-12 h-[1px] bg-collision mx-auto mb-6"></div>
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-ink">AUTHENTICITY GUARANTEED</span>
        </motion.div>
      </section>
    </div>
  </div>
);

const ProductDetail: React.FC<{ onAddToCart: (product: Product) => void }> = ({ onAddToCart }) => {
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
      <div className="pt-48 pb-48 text-center font-mono uppercase italic text-ink/40 tracking-widest">
        Product not found
      </div>
    );
  }

  const currentImage = activeImageTab === "detail" ? product.productImage : product.lifestyleImage;
  const currentCaption = activeImageTab === "detail"
    ? "TECHNICAL SHOT — PURE FILAMENT DENSITY & WEFT RESOLUTION"
    : "ATMOSPHERIC IN SITU — NATURAL DRAPE, COLOR SATURATION & WEAVE RESPONSE";

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
            className="font-mono text-[9px] md:text-[10px] font-bold uppercase tracking-[0.45em] text-ink/40 hover:text-ink transition-colors flex items-center gap-2 group"
          >
            <ArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform" /> 
            BACK TO ARCHIVE RANGE
          </Link>
          <div className="hidden sm:flex items-center gap-4 font-mono text-[9px] tracking-widest text-ink/40 uppercase">
            <span>INDEX / APPAREL SYSTEM</span>
            <span>—</span>
            <span>SPECIFICATION CODE TL-{product.id}0A</span>
          </div>
        </div>

        {/* Hero Section: Gallery & Details Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32 items-start">
          
          {/* Gallery Block */}
          <div className="lg:col-span-7 space-y-8">
            {/* Main Stage */}
            <div className="relative aspect-[3/4] bg-white overflow-hidden border border-ink/5 shadow-sm group">
              <div className="absolute top-4 left-4 z-10 bg-[#FBFBFA]/90 border border-ink/5 px-2.5 py-1 text-[8px] font-mono uppercase tracking-[0.2em] italic text-ink/75">
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
              <span className="font-mono text-[8px] md:text-[9px] tracking-[0.2em] text-[#B2A490] uppercase font-bold leading-none">
                {currentCaption}
              </span>

              {/* Toggle controls */}
              <div className="flex gap-2.5">
                <button
                  onClick={() => setActiveImageTab("detail")}
                  className={`px-4 py-2 text-[9px] font-mono tracking-widest uppercase border transition-all duration-300 rounded-[1px] ${
                    activeImageTab === "detail"
                      ? "bg-ink text-bg-base border-ink"
                      : "bg-transparent border-ink/10 text-ink/40 hover:border-ink/35 hover:text-ink"
                  }`}
                >
                  01 / FILAMENT DETAILED
                </button>
                <button
                  onClick={() => setActiveImageTab("lifestyle")}
                  className={`px-4 py-2 text-[9px] font-mono tracking-widest uppercase border transition-all duration-300 rounded-[1px] ${
                    activeImageTab === "lifestyle"
                      ? "bg-ink text-bg-base border-ink"
                      : "bg-transparent border-ink/10 text-ink/40 hover:border-ink/35 hover:text-ink"
                  }`}
                >
                  02 / IN SITU COUPLING
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
                <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-[#B2A490] font-black">
                  {product.status} — SINCERITY ATELIER
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black italic tracking-tighter leading-tight uppercase text-ink">
                {product.title}
              </h1>

              <div className="flex items-baseline justify-between border-b border-ink/10 pb-6 pt-2">
                <p className="text-2xl md:text-3xl font-mono text-ink tracking-tight font-light">
                  ${product.price.toFixed(2)} <span className="font-serif text-[13px] text-ink/40 italic">/ yard</span>
                </p>
                <span className="font-mono text-[9px] text-[#B2A490] uppercase tracking-widest border border-[#B2A490]/25 px-2.5 py-1 rounded-[1px] font-bold">
                  {product.availability === 'IN_STOCK' ? "Immediate dispatch" : "Bespoke craft-to-order"}
                </span>
              </div>
            </div>

            {/* Editorial Description */}
            <p className="font-serif text-base italic leading-relaxed text-ink/75 py-2 border-l border-[#B2A490] pl-6">
              "{product.description}"
            </p>

            {/* Configurator Box */}
            <div className="bg-[#FAF9F5] border border-ink/5 p-6 md:p-8 space-y-6 rounded-[2px] shadow-[0_4px_24px_rgba(0,0,0,0.01)]">
              {/* Order Quantity */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-[10px] font-mono tracking-widest uppercase text-ink/50">
                  <span>SELECT BOLT YARDAGE</span>
                  <span>Calculated Total: ${(product.price * quantity).toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between border border-ink/10 bg-white p-3.5 rounded-[1px]">
                  <span className="font-mono text-[11px] text-ink/60 italic uppercase font-medium">Desired Length</span>
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-1 hover:text-[#B2A490] transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={13} />
                    </button>
                    <span className="font-mono text-[13px] font-bold min-w-8 text-center">{quantity} Yards</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-1 hover:text-[#B2A490] transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus size={13} />
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
                  <span className="font-mono text-[10px] uppercase tracking-widest font-bold text-ink block group-hover:text-[#B2A490] transition-colors">
                    Request Complimentary Swatch Card
                  </span>
                  <p className="font-serif text-[11px] text-ink/50 italic leading-normal">
                    Add an authentic 10x10 cm texture swatch sample to inspect exact hand-weave density, weight, and color dye matching in your private atelier before we deliver your final custom bolt.
                  </p>
                </div>
              </label>

              {/* CTA row */}
              <div className="flex gap-3 pt-2">
                <button 
                  onClick={handleAddToBag}
                  className="flex-grow bg-ink text-bg-base py-5 px-6 font-mono font-bold text-[11px] uppercase tracking-[0.35em] hover:bg-ink/90 active:scale-[0.99] transition-all relative overflow-hidden group shadow border border-transparent"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <ShoppingBag size={14} /> 
                    ADD TO CART
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
              <div className="flex justify-between border-b border-ink/5 pb-2 font-mono text-[9px] tracking-widest uppercase">
                <button 
                  onClick={() => setActiveTab("specs")} 
                  className={`pb-2 transition-all relative ${activeTab === "specs" ? "font-bold text-ink" : "text-ink/40 hover:text-ink"}`}
                >
                  01 / MATERIAL SPECS
                  {activeTab === "specs" && <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#B2A490]" />}
                </button>
                <button 
                  onClick={() => setActiveTab("origin")} 
                  className={`pb-2 transition-all relative ${activeTab === "origin" ? "font-bold text-ink" : "text-ink/40 hover:text-ink"}`}
                >
                  02 / WEAVE & HARVEST
                  {activeTab === "origin" && <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#B2A490]" />}
                </button>
                <button 
                  onClick={() => setActiveTab("shipping")} 
                  className={`pb-2 transition-all relative ${activeTab === "shipping" ? "font-bold text-ink" : "text-ink/40 hover:text-ink"}`}
                >
                  03 / PACKAGING & DELIVERY
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
                      className="space-y-4 font-mono text-[11px] uppercase tracking-widest text-ink/70 italic"
                    >
                      <div className="flex justify-between items-center border-b border-ink/5 pb-2.5">
                        <span>FIBER TYPE</span>
                        <span className="text-ink font-bold not-italic">{product.material}</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-ink/5 pb-2.5">
                        <span>BOLT USABLE WIDTH</span>
                        <span className="text-ink font-bold not-italic">{product.dimensions}</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-ink/5 pb-2.5">
                        <span>FINISHING TECHNIQUE</span>
                        <span className="text-ink font-bold not-italic">{product.technique}</span>
                      </div>
                      <div className="flex justify-between items-center pb-1">
                        <span>ATELIER WEFT CODE</span>
                        <span className="text-ink font-bold not-italic">TL-{product.category}-{product.process}</span>
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
                      className="space-y-3 font-serif text-[12px] italic text-ink/60 leading-relaxed"
                    >
                      <p>
                        Our pure linen flax fibers are harvested from cooperative agricultural farms of Normandy, Northern France. These delicate crops are organic-grade spun under stringent water-conserving wet conditions to maximize filament tensile strength.
                      </p>
                      <p className="font-mono text-[9px] uppercase tracking-wider text-[#B2A490] font-bold">
                        ORIGIN DIRECTORY: REGIONAL INTELLECTUAL PROPERTY — FRANCE
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
                      className="space-y-3 font-serif text-[12px] italic text-ink/60 leading-relaxed"
                    >
                      <p>
                        Every fabric piece is hand-rolled around our custom lignin-free conservation cores and enclosed in luxury linen protective sleeves. Delivered globally via carbon-neutral white-glove couriers in pristine condition.
                      </p>
                      <p className="font-mono text-[9px] uppercase tracking-wider text-[#B2A490] font-bold">
                        FREE TRACKED COURIER WORLDWIDE — SHIPPED WITHIN 24 HOURS
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
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#B2A490] font-extrabold block">Atelier Consultation desk</span>
                <p className="font-serif text-[11px] text-ink/65 italic leading-snug">
                  Unsure about appropriate drape, weight, or custom weaving bolts for your interior project? Speak directly to our master weavers at <a href="mailto:info@sinceritylinen.com" className="underline hover:text-[#B2A490] font-sans not-italic font-medium">info@sinceritylinen.com</a>.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Related Products Section */}
        <section className="pt-16 border-t border-ink/10">
          <header className="mb-16 flex justify-between items-end border-b border-ink/5 pb-6">
            <h2 className="text-3xl md:text-4xl font-serif font-black italic tracking-tighter uppercase">
              COMPLEMENTARY <br /><span className="font-mono not-italic text-[#B2A490] text-xl md:text-2xl font-bold tracking-widest">TEXTILES</span>
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
                  <h4 className="font-serif italic text-xl uppercase tracking-tighter text-ink leading-tight group-hover:text-[#B2A490] transition-colors">
                    {item.title}
                  </h4>
                  <p className="font-mono text-[10px] md:text-[11px] font-bold tracking-tight text-ink/45">
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

const AboutSection: React.FC = () => (
  <section className="px-4 md:px-12 py-16 md:py-24 bg-[#FAF9F5] border-t border-b border-ink/5 relative overflow-hidden">
    <div className="absolute top-0 right-0 p-12 mix-blend-difference pointer-events-none">
      <p className="font-mono text-[10px] md:text-[12px] tracking-[0.6em] vertical-text opacity-40 uppercase italic">HERITAGE — VISION — SINCERITY</p>
    </div>
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-center">
      <div className="md:col-span-1 hidden md:block">
        <p className="vertical-text text-ink/20 font-mono text-[10px] tracking-[0.5em] whitespace-nowrap">FOUNDED IN 1998 — SHANGHAI</p>
      </div>
      <div className="md:col-span-11 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 1 }}
           viewport={{ once: true }}
           className="space-y-12"
        >
          <div className="space-y-4">
            <span className="font-mono text-[10px] tracking-widest text-[#B2A490] font-black uppercase">ANNALS & RECORD</span>
            <h2 className="text-5xl md:text-7xl font-serif font-black italic tracking-[-0.05em] leading-[0.95] uppercase text-ink">
              ABOUT <br /><span className="font-mono not-italic text-collision md:ml-12 text-5xl md:text-6xl">SINCERITY</span>
            </h2>
          </div>
          <p className="font-mono text-[14px] md:text-[16px] leading-relaxed uppercase tracking-tight text-ink/70 italic border-l-2 border-ink pl-8">
            Starting as a highly specialized small-scale dye house in Tongling, Sincerity Linen Group has matured into a premier global landmark for sustainable linen luxury. The name, "Sincerity" reflects our transparent relationship with natural textile materials and human makers.
          </p>
          <Link to="/brand-story" className="inline-flex items-center gap-4 bg-ink text-bg-base px-8 py-4 font-mono text-[10px] font-bold tracking-[0.2em] hover:bg-ink/80 transition-all uppercase shadow-lg">
            <span>EXPLORE OUR JOURNEY</span>
            <ArrowRight size={14} />
          </Link>
        </motion.div>
        
        <div className="relative">
          <div className="aspect-[4/5] bg-gray-200 overflow-hidden shadow-2xl border border-ink/5 relative group">
             <img 
               src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=1200&q=80" 
               alt="Craftsmanship" 
               className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-105 duration-1000 transition-transform"
               referrerPolicy="no-referrer"
             />
             <div className="absolute top-4 left-4 bg-bg-base/95 backdrop-blur-sm px-4 py-2 text-[9px] font-mono uppercase tracking-[0.15em] border border-ink/5">
               TONGLING ARCHIVES / WEAVER L09
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SustainabilitySection: React.FC = () => (
  <section className="px-4 md:px-12 py-16 md:py-24 bg-[#F1EDE4] relative overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
        <div className="lg:col-span-7 order-2 lg:order-1">
           <div className="grid grid-cols-2 gap-8">
             <div className="aspect-[3/4] bg-gray-200 overflow-hidden shadow-2xl border border-ink/5 group relative">
               <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80" alt="Nature" className="w-full h-full object-cover grayscale brightness-95 group-hover:scale-105 duration-[2s] transition-all" referrerPolicy="no-referrer" />
               <div className="absolute bottom-4 left-4 bg-bg-base/90 p-3 text-[8px] font-mono tracking-widest uppercase">
                 ORGANIC FLAX FIELDS
               </div>
             </div>
             <div className="aspect-[3/4] bg-gray-200 mt-12 md:mt-24 overflow-hidden shadow-2xl border border-ink/5 group relative">
               <img src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=1200&q=80" alt="Flax" className="w-full h-full object-cover grayscale brightness-95 group-hover:scale-105 duration-[2s] transition-all" referrerPolicy="no-referrer" />
               <div className="absolute bottom-4 left-4 bg-bg-base/90 p-3 text-[8px] font-mono tracking-widest uppercase">
                 RAW HARVEST No. 04
               </div>
             </div>
           </div>
        </div>
        <div className="lg:col-span-5 space-y-12 order-1 lg:order-2">
           <div className="space-y-4">
             <span className="font-mono text-[10px] font-black uppercase tracking-widest text-[#B2A490]">ECOLOGICAL STANDARD</span>
             <h2 className="text-5xl md:text-7xl font-serif font-black italic tracking-[-0.05em] leading-[0.95] uppercase text-ink">
               NATURE <br /><span className="font-mono not-italic text-collision md:ml-12 text-5xl md:text-6xl">PRACTICE</span>
             </h2>
           </div>
           <p className="font-mono text-[12px] md:text-[14px] leading-relaxed uppercase tracking-tight text-ink/60 italic border-l-2 border-ink pl-8">
             Our pledge to earth runs companion to our search for pristine fiber. Through European Flax certifications and a waste-free loop of reprocessed leftover yarn, we seek minimal burden on the living land.
           </p>
           <ul className="space-y-6 pt-8 border-t border-ink/10">
             {['EUROPEAN FLAX® CERTIFIED', 'CLOSED-LOOP RECYCLED SELVEDGES', 'OEKO-TEX® STANDARD 100 COMPLIANT', 'RESPONSIBLY HARVESTED IN FRANCE'].map((item) => (
               <li key={item} className="font-mono text-[9px] md:text-[11px] tracking-[0.25em] uppercase italic flex items-center gap-4 text-ink/80">
                 <div className="w-4 h-[1px] bg-collision" />
                 {item}
               </li>
             ))}
           </ul>
        </div>
      </div>
    </div>
  </section>
);

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitted(true);
  };

  return (
    <section className="px-4 md:px-12 py-20 md:py-28 bg-[#121212] text-[#FAF9F6] relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none -z-0" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10 items-start">
        {/* Left: Branding & Info */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-6">
            <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-[#B2A490] font-bold block">
              GET IN TOUCH
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-black italic tracking-tighter leading-none uppercase">
              GLOBAL<br />
              <span className="font-mono not-italic text-white/30 text-3.5xl md:text-5xl">INQUIRIES</span>
            </h2>
            <p className="font-serif text-lg leading-relaxed text-[#FAF9F6]/60 max-w-sm italic">
              We welcome direct partner correspondence. Whether discussing bulk fabrics, custom weave developments, or private showroom visits, our team responds with care.
            </p>
          </div>

          <div className="space-y-6 pt-10 border-t border-white/10 font-mono text-[11px] uppercase tracking-wider text-[#FAF9F6]/75">
            <div className="space-y-2">
              <span className="text-[#B2A490] text-[9px] block">GENERAL & WHOLESALE</span>
              <a href="mailto:info@sinceritylinen.com" className="font-serif text-xl italic hover:text-[#B2A490] transition-colors block lowercase">
                info@sinceritylinen.com
              </a>
            </div>
            <div className="space-y-2">
              <span className="text-[#B2A490] text-[9px] block">SHANGHAI SHOWROOM</span>
              <a href="tel:+86212345678" className="font-serif text-xl italic hover:text-[#B2A490] transition-colors block">
                +86 (21) 2345 6788
              </a>
            </div>
            <div className="space-y-2">
              <span className="text-[#B2A490] text-[9px] block">HEAD OFFICE ADDRESS</span>
              <p className="font-serif text-[13px] italic text-[#FAF9F6]/60 leading-relaxed normal-case">
                Tongling Sincerity Linen Group, Tongling Economic Development Zone, Anhui, China
              </p>
            </div>
          </div>
        </div>

        {/* Right: Clean, Ultra-Minimal Form */}
        <div className="lg:col-span-7">
          <div className="w-full bg-[#1C1C1C] border border-white/5 p-8 md:p-12 shadow-2xl rounded-[2px] min-h-[460px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  <div className="border-b border-white/10 pb-4">
                    <h3 className="font-serif text-xl font-bold uppercase italic tracking-tight text-[#FAF9F6]">Contact Form</h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Name */}
                    <div className={`space-y-2 border-b transition-colors duration-300 pb-2 ${isFocused === "name" ? "border-[#B2A490]" : "border-white/10"}`}>
                      <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#FAF9F6]/40 block font-bold">
                        Your Name
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        onFocus={() => setIsFocused("name")}
                        onBlur={() => setIsFocused(null)}
                        placeholder="John Doe"
                        className="w-full bg-transparent border-none focus:outline-none font-serif italic text-lg text-[#FAF9F6] placeholder-white/10 placeholder:italic"
                      />
                    </div>

                    {/* Email */}
                    <div className={`space-y-2 border-b transition-colors duration-300 pb-2 ${isFocused === "email" ? "border-[#B2A490]" : "border-white/10"}`}>
                      <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#FAF9F6]/40 block font-bold">
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        onFocus={() => setIsFocused("email")}
                        onBlur={() => setIsFocused(null)}
                        placeholder="john@example.com"
                        className="w-full bg-transparent border-none focus:outline-none font-serif italic text-lg text-[#FAF9F6] placeholder-white/10 placeholder:italic"
                      />
                    </div>

                    {/* Message */}
                    <div className={`space-y-2 border-b transition-colors duration-300 pb-2 ${isFocused === "message" ? "border-[#B2A490]" : "border-white/10"}`}>
                      <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#FAF9F6]/40 block font-bold">
                        Your Message
                      </label>
                      <textarea 
                        rows={2} 
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        onFocus={() => setIsFocused("message")}
                        onBlur={() => setIsFocused(null)}
                        placeholder="How can we help you?"
                        className="w-full bg-transparent border-none focus:outline-none font-serif italic text-base text-[#FAF9F6] placeholder-white/10 placeholder:italic resize-none leading-relaxed"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-4 bg-[#FAF9F6] text-ink font-mono font-bold text-[11px] uppercase tracking-[0.3em] hover:bg-[#FAF9F6]/90 active:scale-[0.99] transition-all border border-transparent text-center shadow"
                    >
                      Send Message
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="submitted"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center space-y-6 py-8"
                >
                  <div className="w-12 h-12 rounded-full bg-[#B2A490]/10 border border-[#B2A490]/20 flex items-center justify-center mx-auto mb-2">
                    <span className="font-serif italic text-lg text-[#B2A490] font-bold">s</span>
                  </div>
                  
                  <div className="space-y-2">
                    <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#B2A490] font-bold">THANK YOU</span>
                    <h3 className="font-serif text-2xl italic text-[#FAF9F6] font-bold uppercase">MESSAGE RECEIVED</h3>
                  </div>

                  <p className="font-serif text-base text-[#FAF9F6]/75 leading-relaxed max-w-sm mx-auto italic">
                    "Thank you, <span className="text-[#FAF9F6] font-semibold not-italic">{formData.name}</span>. We have received your inquiry. A representative from our team will email you at <span className="text-white font-medium not-italic">{formData.email}</span> within 24 hours."
                  </p>

                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="mt-6 px-6 py-2.5 border border-white/10 text-white/50 font-mono text-[9px] uppercase tracking-widest hover:border-white/30 hover:text-white transition-all bg-transparent"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const InteractiveChain: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "YARN SPINNING",
      detail: "FINELY COMBED SELECTION",
      desc: "Sourced exclusively from the premier wet-spun linen mills of Northern France and Belgium, our yarns are carefully sorted to ensure maximum tensile strength, minimal impurities, and a clean, uniform thread density perfect for high-speed looms.",
      image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "WEAVING TECHNIQUES",
      detail: "HIGH-TENSION PRECISION",
      desc: "Our state-of-the-art rapier looms operate under custom-monitored humidity and temperature coordinates. We weave both premium plain-weave fabrics and complex yarn-dyed stripes with perfectly tailored selvedges.",
      image: "https://images.unsplash.com/photo-1558051815-0f18e64e6280?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "DYEING & PRINTING",
      detail: "ECO-CERTIFIED KITCHEN",
      desc: "Using low-liquor ratio dyeing technologies and premium Swiss dye formulas, we achieve multi-layered, deep color depths and complex printed patterns while strictly protecting the raw fiber's breathability and durability.",
      image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "PREMIUM FINISHING",
      detail: "SIGNATURE SOFT TOUCH",
      desc: "The defining stage. From natural local stone washing to bio-enzyme relaxed-crimp treatments and delicate anti-wrinkle press finishes, we transform the hand-feel into a fluid drape and textured comfort.",
      image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <section className="px-4 md:px-12 py-16 md:py-24 border-b border-ink/10 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        <div className="lg:col-span-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="h-[1px] w-12 bg-collision" />
            <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.5em] text-ink/40 italic font-bold">THE IN-HOUSE LOOM INITIATIVE</span>
          </div>
          <h2 className="text-4xl md:text-[6vw] font-serif font-black italic tracking-[-0.05em] leading-[0.95] uppercase text-ink mb-12">
            PRODUCTION <br />
            <span className="font-mono not-italic text-collision md:ml-24">CHAIN EXPERIENCE</span>
          </h2>
        </div>

        {/* Interactive Steps List */}
        <div className="lg:col-span-6 space-y-8">
          <p className="font-serif text-lg md:text-xl leading-relaxed text-ink/80 italic border-l-2 border-ink pl-8 mb-12">
            We deliver an entirely vertical, high-control supply chain spanning initial fiber combing to bespoke textile finishing, guaranteeing uncompromised authenticity.
          </p>

          <div className="space-y-4">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.title}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-6 md:p-8 border-b border-ink/10 flex flex-col gap-3 transition-all ${
                    isActive ? "bg-bg-base shadow-lg pl-8 border-l-2 border-l-ink" : "hover:bg-bg-base/30 hover:pl-4"
                  }`}
                >
                  <div className="flex justify-between items-center w-full">
                    <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-bold text-ink/40">
                      PHASE {String(idx + 1).padStart(2, '0')}
                    </span>
                    {isActive && (
                      <span className="font-mono text-[9px] bg-ink text-bg-base px-2 py-0.5 uppercase tracking-wider italic font-bold">
                        ACTIVE VIEW
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif italic text-2xl uppercase tracking-tight text-ink font-bold">
                    {step.title}
                  </h3>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-sm font-mono text-ink/65 uppercase tracking-wide leading-relaxed pt-2 space-y-2 border-t border-ink/5 mt-2"
                    >
                      <span className="text-collision font-bold block text-[10px] tracking-widest">
                        {step.detail}
                      </span>
                      <p className="text-[11px] md:text-[12px] leading-relaxed select-text font-normal normal-case italic">
                        {step.desc}
                      </p>
                    </motion.div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Large Dynamic Visual */}
        <div className="lg:col-span-6">
          <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] bg-gray-100 overflow-hidden shadow-2xl border border-ink/5">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeStep}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.8 }}
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                className="w-full h-full object-cover grayscale brightness-95"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
            <div className="absolute top-4 right-4 bg-bg-base/95 backdrop-blur-sm px-4 py-2 border border-ink/5 text-[9px] font-mono uppercase tracking-[0.2em] italic font-bold">
              TONGLING LABS No. 0{activeStep + 1}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home: React.FC = () => (
  <main className="bg-bg-base overflow-x-hidden pt-20">
    <Hero />

    <section className="py-12 md:py-20 max-w-5xl mx-auto px-4 text-center">
      <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#B2A490] block mb-6 font-bold">THE SINCERITY PHILOSOPHY</span>
      <h2 className="text-3xl md:text-[3.2vw] font-serif font-light italic leading-relaxed text-ink/85">
        "We believe luxury is a whisper, not a shout. True elegance resides in the organic irregularity of pure flax, the trace of human skill, and the quiet dignity of a fabric made to endure."
      </h2>
      <div className="w-12 h-px bg-collision mx-auto mt-12 mb-6" />
      <span className="font-mono text-[9px] uppercase tracking-widest text-ink/40">AN INTRODUCTORY NOTE BY THE MASTER WEAVER</span>
    </section>

    <InteractiveChain />

    <AboutSection />

    <section className="py-16 md:py-24">
      <div className="px-4 md:px-12 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-ink pb-8 gap-8">
         <h2 className="text-4xl md:text-7xl font-serif font-black italic tracking-tighter uppercase leading-none">MAIN <br /><span className="ml-12 md:ml-32">COLLECTION</span></h2>
         <p className="font-mono text-[10px] md:text-[12px] uppercase tracking-[0.4em] text-ink/40 mb-2 italic">EUROPEAN LINEN — BLENDS — PRINTS — SINCE 1998</p>
      </div>
      <ProductSlider />
    </section>

    <SustainabilitySection />
    
    <ContactSection />
  </main>
);

const Footer: React.FC = () => (
  <footer className="px-4 md:px-12 py-24 md:py-32 border-t border-ink/10 bg-bg-base overflow-hidden relative">
    <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-24 md:gap-12 items-start h-full">
      <div className="md:col-span-4 space-y-12">
        <div className="group">
          <img 
            src={LOGO_URL} 
            alt="TONGLING SINCERITY" 
            className="h-12 md:h-16 w-auto object-contain mb-4 opacity-80 group-hover:opacity-100 transition-opacity"
            referrerPolicy="no-referrer"
          />
        </div>
        <p className="font-mono text-[12px] uppercase leading-relaxed tracking-tight italic text-ink/60 max-w-xs">
          WEAVING TRADITION WITH MODERNITY SINCE 1998. CRAFTING THE FINEST LINEN TEXTILES WITH UNWAVERING SINCERITY.
        </p>
        <div className="flex gap-8">
          <Instagram size={20} strokeWidth={1} className="hover:opacity-40 cursor-pointer transition-opacity" />
          <Mail size={20} strokeWidth={1} className="hover:opacity-40 cursor-pointer transition-opacity" />
        </div>
      </div>
      
      <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 md:gap-8">
        <div className="space-y-6">
          <h5 className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-ink/30 border-b border-ink/10 pb-2">ARCHIVE</h5>
          <nav className="flex flex-col gap-4 font-mono text-[11px] md:text-[12px] uppercase tracking-tight italic">
            <Link to="/collections" className="hover:underline underline-offset-4">PURE LINEN</Link>
            <Link to="/collections" className="hover:underline underline-offset-4">BLENDED</Link>
            <Link to="/collections" className="hover:underline underline-offset-4">PRINTED</Link>
            <Link to="/collections" className="hover:underline underline-offset-4">STRIPED</Link>
          </nav>
        </div>
        
        <div className="space-y-6">
          <h5 className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-ink/30 border-b border-ink/10 pb-2">EXPLORE</h5>
          <nav className="flex flex-col gap-4 font-mono text-[11px] md:text-[12px] uppercase tracking-tight italic">
            <Link to="/shop" className="hover:underline underline-offset-4">SHOP ALL</Link>
            <Link to="/brand-story" className="hover:underline underline-offset-4">OUR STORY</Link>
            <a href="#" className="hover:underline underline-offset-4">SHIPPING</a>
            <a href="#" className="hover:underline underline-offset-4">RETURNS</a>
          </nav>
        </div>
        
        <div className="space-y-8">
          <h5 className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-ink/30 border-b border-ink/10 pb-2">JOIN US</h5>
          <div className="border-b border-ink">
            <input 
              type="email" 
              placeholder="EMAIL ADDRESS" 
              className="w-full bg-transparent font-mono text-[11px] py-4 focus:outline-none italic"
            />
          </div>
          <p className="font-mono text-[9px] uppercase tracking-widest text-ink/40 leading-relaxed italic">
            © 2026 TONGLING SINCERITY. <br />
            CRAFTED BETWEEN SHANGHAI & SYDNEY.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

const Collections: React.FC = () => {
  const archives = [
    { title: "PIECE DYED", count: "01", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80" },
    { title: "YARN DYED", count: "02", img: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=80" },
    { title: "PRINTED", count: "03", img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80" },
    { title: "ARTISAN", count: "04", img: "https://images.unsplash.com/photo-1554188248-986adbb73be4?auto=format&fit=crop&w=1200&q=80" }
  ];

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
              <h2 className="text-4xl md:text-6xl font-serif italic tracking-tight uppercase text-ink mb-4">Collection</h2>
              <p className="font-mono text-[10px] md:text-[12px] uppercase tracking-[0.2em] text-ink/60 leading-relaxed max-w-lg">
                A curated selection of our most significant fabric developments, spanning three decades of weaving excellence.
              </p>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.3em] text-ink/30 italic">
              <span>SERIES No. 01</span>
              <span className="w-8 h-[1px] bg-ink/10"></span>
              <span>2024</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16 items-start">
          {archives.map((item, i) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`group ${i % 2 === 1 ? 'mt-12 md:mt-0' : ''} ${i % 3 === 1 ? 'md:mt-24 lg:mt-0' : i % 3 === 2 ? 'md:mt-12 lg:mt-0' : ''} ${i % 4 === 1 ? 'lg:mt-20' : i % 4 === 2 ? 'lg:mt-8' : i % 4 === 3 ? 'lg:mt-32' : ''}`}
            >
              <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden mb-6 transform group-hover:-rotate-0.5 transition-transform duration-700 bg-bg-white shadow-sm"
                   style={{ 
                     clipPath: "polygon(0% 0%, 100% 0%, 100% 98%, 98.75% 100%, 97.5% 98%, 96.25% 100%, 95% 98%, 93.75% 100%, 92.5% 98%, 91.25% 100%, 90% 98%, 88.75% 100%, 87.5% 98%, 86.25% 100%, 85% 98%, 83.75% 100%, 82.5% 98%, 81.25% 100%, 80% 98%, 78.75% 100%, 77.5% 98%, 76.25% 100%, 75% 98%, 73.75% 100%, 72.5% 98%, 71.25% 100%, 70% 98%, 68.75% 100%, 67.5% 98%, 66.25% 100%, 65% 98%, 63.75% 100%, 62.5% 98%, 61.25% 100%, 60% 98%, 58.75% 100%, 57.5% 98%, 56.25% 100%, 55% 98%, 53.75% 100%, 52.5% 98%, 51.25% 100%, 50% 98%, 48.75% 100%, 47.5% 98%, 46.25% 100%, 45% 98%, 43.75% 100%, 42.5% 98%, 41.25% 100%, 40% 98%, 38.75% 100%, 37.5% 98%, 36.25% 100%, 35% 98%, 33.75% 100%, 32.5% 98%, 31.25% 100%, 30% 98%, 28.75% 100%, 27.5% 98%, 26.25% 100%, 25% 98%, 23.75% 100%, 22.5% 98%, 21.25% 100%, 20% 98%, 18.75% 100%, 17.5% 98%, 16.25% 100%, 15% 98%, 13.75% 100%, 12.5% 98%, 11.25% 100%, 10% 98%, 8.75% 100%, 7.5% 98%, 6.25% 100%, 5% 98%, 3.75% 100%, 2.5% 98%, 1.25% 100%, 0% 98%)"
                   }}>
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-ink/90 text-bg-base font-mono text-[9px] px-2 py-1 uppercase tracking-widest italic">{item.count}</div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-serif italic uppercase tracking-tight text-ink group-hover:underline underline-offset-4 decoration-1">{item.title}</h3>
                <Link to="/shop" className="inline-flex items-center gap-2 group/link">
                  <span className="font-mono text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-ink/40 group-hover/link:text-collision transition-colors">EXPLORE SERIES</span>
                  <div className="w-4 h-[1px] bg-ink/20 group-hover/link:w-8 group-hover/link:bg-collision transition-all"></div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CartDrawer: React.FC<{ 
  isOpen: boolean; 
  onClose: () => void; 
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}> = ({ isOpen, onClose, items, onUpdateQuantity, onRemove }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
                <h2 className="text-xl md:text-2xl font-serif font-bold uppercase tracking-tight text-ink">ARCHIVE BAG</h2>
                <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#B2A490] font-bold">UNIT CONTAINER — {items.length} {items.length === 1 ? 'ITEM' : 'ITEMS'}</p>
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
                    <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#B2A490] font-bold">YOUR STORAGE IS EMPTY</p>
                    <p className="font-serif text-xs italic text-ink/50 max-w-xs leading-relaxed">No active textiles or fiber bolts recorded in your current archive segment.</p>
                  </div>
                  <button 
                    onClick={onClose}
                    className="border border-ink/15 px-8 py-3.5 font-mono font-bold text-[9px] uppercase tracking-widest hover:bg-ink hover:text-bg-base hover:border-ink transition-all rounded-[1px] bg-transparent"
                  >
                    RETURN TO GALLERY
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
                            <h3 className="font-serif italic text-[16px] md:text-[17px] font-bold uppercase tracking-tight text-ink leading-tight group-hover:text-[#B2A490] transition-colors">{item.title}</h3>
                            <button onClick={() => onRemove(item.id)} className="text-ink/30 hover:text-red-500 transition-colors p-1" aria-label="Remove item">
                              <X size={14} />
                            </button>
                          </div>
                          <p className="font-mono text-[9px] text-[#B2A490] uppercase tracking-widest font-bold">{item.material}</p>
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
                          <p className="font-mono text-xs md:text-sm font-bold text-ink">${(item.price * item.quantity).toFixed(2)}</p>
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
                    <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#B2A490] font-bold mb-1">ESTIMATED TOTAL</p>
                    <span className="text-2xl md:text-3xl font-mono text-ink font-light tracking-tight">${total.toFixed(2)}</span>
                  </div>
                  <p className="font-mono text-[8px] text-ink/40 uppercase tracking-widest text-right leading-relaxed">
                    EXCLUDES SHIPPING & <br />INTERNATIONAL TAXES
                  </p>
                </div>
                <button className="w-full bg-ink text-bg-base py-4 font-mono font-bold text-[10px] md:text-[11px] uppercase tracking-[0.3em] hover:bg-ink/90 active:scale-[0.99] transition-all border border-transparent shadow-[0_4px_12px_rgba(0,0,0,0.05)] text-center rounded-[1px]">
                  PROCEED
                </button>
              </footer>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Shop: React.FC<{ onAddToCart: (product: Product) => void }> = ({ onAddToCart }) => {
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
              <h2 className="text-4xl md:text-6xl font-serif italic tracking-tight uppercase text-ink mb-4">Shop All</h2>
              <p className="font-mono text-[10px] md:text-[12px] uppercase tracking-[0.2em] text-ink/60 leading-relaxed max-w-lg">
                Archival fabrics & textile developments from the Collision technical laboratory.
              </p>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.3em] text-ink/30 italic">
              <span>SERIES No. 01</span>
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
                <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-ink italic">FILTERS</h4>
                {(activeFilters.category !== "ALL" || activeFilters.process !== "ALL" || activeFilters.availability !== "ALL" || activeFilters.composition !== "ALL") && (
                  <button 
                    onClick={() => setActiveFilters({ category: "ALL", process: "ALL", availability: "ALL", composition: "ALL" })}
                    className="font-mono text-[9px] uppercase tracking-widest text-collision underline underline-offset-4 font-bold"
                  >
                    RESET
                  </button>
                )}
              </div>

              {(Object.keys(filterConfig) as Array<keyof typeof filterConfig>).map((key) => (
                <div key={key} className="space-y-4">
                  <h5 className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-ink border-b border-ink/5 pb-2 italic">{key}</h5>
                  <div className="flex flex-col gap-2.5">
                    {filterConfig[key].map((val) => (
                      <button
                        key={val}
                        onClick={() => updateFilter(key, val)}
                        className={`font-mono text-[10px] uppercase tracking-widest text-left transition-all hover:pl-2 ${
                          activeFilters[key] === val ? "text-collision font-bold" : "text-ink hover:text-collision"
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
              <p className="font-mono text-[10px] uppercase tracking-widest text-ink/40 italic">SHOWING {filteredProducts.length} ARTICLES</p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="py-24 text-center bg-bg-white border border-dashed border-ink/10">
                <p className="font-mono text-[12px] uppercase tracking-[0.5em] text-ink/20 italic">No articles match your specific archive query.</p>
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
                        className="absolute bottom-0 left-0 w-full bg-ink/90 backdrop-blur-sm text-bg-base py-4 font-mono font-bold text-[9px] uppercase tracking-[0.2em] md:translate-y-full group-hover:translate-y-0 transition-transform duration-500 italic"
                      >
                        QUICK ADD — ${product.price.toFixed(2)}
                      </button>
                    </div>
                    <div className="flex justify-between items-end gap-2">
                       <Link to={`/product/${product.id}`} className="flex-grow space-y-1">
                        <h3 className="font-sans font-medium text-lg md:text-xl tracking-tight text-ink uppercase">{product.title.split(' ')[0]}</h3>
                        <p className="font-sans text-[11px] md:text-[13px] text-ink/60">{product.composition}</p>
                        <p className="font-sans text-[10px] md:text-[12px] text-ink/30 uppercase tracking-widest">{product.category === 'TEXTURE' ? 'JAMES DUNLOP' : 'MOKUM'}</p>
                      </Link>
                      <div className="flex flex-col items-end gap-4">
                        <button className="p-2 rounded-full border border-ink/5 hover:bg-ink/5 transition-colors group/heart">
                          <Heart size={16} strokeWidth={1} className="text-ink/20 group-hover/heart:text-collision transition-colors" />
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

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen font-sans selection:bg-black selection:text-white">
        <Header cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />
        
        <CartDrawer 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
          items={cartItems}
          onUpdateQuantity={updateQuantity}
          onRemove={removeFromCart}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brand-story" element={<BrandStory />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetail onAddToCart={addToCart} />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
