/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Instagram, Mail, ArrowRight, ArrowLeft, History, Users, Globe, Award, ShoppingBag, X, Plus, Minus, Menu } from "lucide-react";
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
  <section className="pt-32 md:pt-48 px-4 md:px-12 mb-32 md:mb-48 relative overflow-hidden bg-bg-base">
    {/* Floating background element */}
    <div className="absolute top-1/4 -right-24 w-[600px] h-[600px] bg-ink/5 rounded-full blur-3xl -z-0 pointer-events-none" />
    
    <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-start md:items-end">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="md:col-span-8 relative"
      >
        <div className="absolute -top-24 -left-12 md:-top-48 md:-left-32 z-0 opacity-10">
          <h2 className="text-[25vw] font-serif italic text-collision leading-none select-none font-black">Archive</h2>
        </div>
        
        <div className="relative z-10">
          <div className="mb-8 overflow-hidden">
            <motion.p 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-mono text-[9px] md:text-[11px] uppercase tracking-[0.5em] text-ink/40 italic"
            >
              TONGLING SINCERITY LINEN GROUP — EST. 1998
            </motion.p>
          </div>
          
          <h1 className="text-6xl md:text-[10vw] font-serif font-black leading-[0.8] tracking-[-0.07em] uppercase italic flex flex-col">
            <span className="relative">WEAVING</span>
            <span className="md:ml-24 font-mono not-italic text-collision translate-y-4 md:translate-y-8 flex items-baseline">
              SINCERITY
              <span className="text-[10px] md:text-[14px] tracking-widest ml-4 opacity-40 font-bold">● ARCHIVE 01</span>
            </span>
          </h1>
          
          <div className="mt-24 md:mt-48 max-w-lg md:ml-32 relative">
            <div className="absolute top-0 left-0 w-px h-full bg-ink/20" />
            <div className="pl-12 space-y-12">
              <p className="font-mono text-[13px] md:text-[16px] leading-relaxed uppercase tracking-tight text-ink/80 italic">
                A RADICAL APPROACH TO TEXTILE ARCHIVING. WE COMBINE THIRTY YEARS OF TECHNICAL EXPERTISE WITH A CONTEMPORARY VISION FOR THE FUTURE OF LINEN.
              </p>
              <div className="flex gap-12">
                <Link to="/shop" className="group relative font-serif italic text-3xl uppercase tracking-tighter">
                  <span className="relative z-10 group-hover:text-collision transition-colors">GO SHOP</span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-ink transform scale-x-100 group-hover:scale-x-0 transition-transform origin-left" />
                </Link>
                <Link to="/collections" className="group relative font-mono text-[12px] font-bold uppercase tracking-widest flex items-center gap-4">
                  VIEW INDEX
                  <ArrowRight size={16} className="group-hover:translate-x-3 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="md:col-span-4 relative mt-24 md:mt-0"
      >
        <div className="aspect-[2/3] overflow-hidden overlap-image transform skew-y-3 rotate-6 shadow-[40px_40px_80px_rgba(0,0,0,0.1)]">
          <img 
            src="https://images.unsplash.com/photo-1595853035070-59a39fe84de3?auto=format&fit=crop&w=1200&q=80" 
            alt="Linen Texture" 
            className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-16 -left-16 w-48 md:w-64 aspect-square overflow-hidden transform rotate-[-12deg] shadow-2xl z-20 border-[12px] border-bg-base">
          <img 
            src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80" 
            alt="Process" 
            className="w-full h-full object-cover grayscale brightness-110"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>
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

const BrandStory: React.FC = () => (
  <div className="pt-32 md:pt-48 pb-32 px-4 md:px-12 bg-bg-base overflow-x-hidden">
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto"
    >
      {/* Intro Header */}
      <section className="mb-48">
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-7xl font-serif italic text-ink leading-tight tracking-tight mb-12 max-w-5xl"
        >
          "Linen Reimagined: <br />
          <span className="font-mono not-italic text-collision ml-12 md:ml-32">Where Sustainability Meets Refined Elegance"</span>
        </motion.h1>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-48">
        <div className="md:col-span-1 hidden md:block">
          <p className="vertical-text text-ink/20 font-mono text-[10px] tracking-[0.5em] whitespace-nowrap">FOUNDED IN 2005 — TONGLING SINCERITY</p>
        </div>

        <div className="md:col-span-11 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-12 -left-6 z-0 pointer-events-none">
              <span className="font-serif italic text-9xl text-ink/5 select-none font-black">01</span>
            </div>
            <div className="relative z-10 text-balance">
              <h2 className="text-4xl md:text-7xl font-serif font-black italic leading-[0.9] tracking-[-0.05em] uppercase mb-16 text-ink">
                ABOUT <br />
                <span className="ml-12 font-mono not-italic text-collision">US</span>
              </h2>
              <div className="space-y-8 mb-12 border-l-2 border-collision pl-8">
                <p className="font-mono text-[14px] md:text-[16px] leading-relaxed uppercase tracking-tight text-ink/70 italic">
                  Founded in 2005 as a dyeing and printing manufacturer, Tongling Sincerity Linen Group has grown from a dedicated production facility into a trusted long-term partner for global brands.
                </p>
                <p className="font-mono text-[12px] md:text-[14px] leading-relaxed uppercase tracking-tight text-ink/50 italic">
                  Committed to sustainability, we develop innovative eco-friendly processing techniques. Surplus and residual linen fibres are carefully collected and recycled for secondary applications, extending the lifecycle of flax beyond textiles.
                </p>
              </div>
              <div className="aspect-[4/3] bg-gray-100 overflow-hidden overlap-image transform rotate-1 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=1200&q=80" 
                  alt="Tongling Facility" 
                  className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:pt-64 relative"
          >
            <div className="absolute top-12 -right-6 z-0 pointer-events-none">
              <span className="font-serif italic text-9xl text-ink/5 select-none font-black">02</span>
            </div>
            <div className="relative z-10 text-balance">
              <div className="aspect-[3/4] bg-gray-100 overflow-hidden overlap-image transform -rotate-2 mb-16 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&w=1200&q=80" 
                  alt="Sensitivity of Material" 
                  className="w-full h-full object-cover grayscale brightness-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-3xl md:text-5xl font-serif italic font-black tracking-[-0.03em] uppercase mb-8 leading-none">
                SENSITIVITY <br />
                <span className="font-mono not-italic text-collision ml-12">OF TOUCH</span>
              </h3>
              <p className="font-mono text-[12px] md:text-[14px] leading-relaxed uppercase tracking-tight text-ink/60 max-w-sm italic">
                Working with linen is a dialogue between human instinct and natural fiber—a delicate management of tension, moisture, and time that only decades of practice can perfect.
              </p>
            </div>
          </motion.section>
        </div>
      </div>
    
      {/* Production & R&D Dual Grid */}
      <section className="mb-64 border-t border-ink/10 pt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="aspect-[4/5] bg-gray-100 overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80" 
                alt="Production" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 grayscale brightness-75"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="font-serif italic text-3xl uppercase tracking-tighter text-ink mb-6">Vertically Integrated Production Chain</h3>
              <p className="font-mono text-[14px] leading-relaxed uppercase tracking-tight text-ink/70 italic">
                From spinning to weaving and dyeing, we oversee every step of production to ensure cost efficiency, shorter delivery timelines, and exceptional quality.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-12 md:mt-48"
          >
            <div className="aspect-[4/5] bg-[#F4D03F] overflow-hidden shadow-2xl relative">
               <img 
                src="https://images.unsplash.com/photo-1542332213-91590de449df?auto=format&fit=crop&w=1200&q=80" 
                alt="R&D" 
                className="w-full h-full object-cover mix-blend-multiply opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F4D03F]/40 to-transparent" />
            </div>
            <div>
              <h3 className="font-serif italic text-3xl uppercase tracking-tighter text-ink mb-6">Research and Development Excellence</h3>
              <p className="font-mono text-[14px] leading-relaxed uppercase tracking-tight text-ink/70 italic">
                We continuously explore new ways to R&D, enhancing the functionality and versatility of linen fabrics to meet diverse market demands.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Vertically Integrated Production Section (Detailed) */}
        <section className="mb-64 border-b border-ink/10 pb-32 md:pb-48 bg-ink/[0.02] -mx-4 md:-mx-12 px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:col-span-12"
            >
              <h2 className="text-5xl md:text-8xl font-serif font-black italic tracking-[-0.05em] leading-none uppercase mb-16">
                VERTICAL <br />
                <span className="font-mono not-italic text-collision ml-12 md:ml-32">INTEGRATION</span>
              </h2>
            </motion.div>
            <div className="lg:col-span-5 space-y-12">
              <p className="font-mono text-[14px] md:text-[16px] leading-relaxed uppercase tracking-tight text-ink border-l-2 border-collision pl-8 italic">
                Tongling Sincerity Linen Group delivers a fully vertically integrated linen supply chain, from yarn spinning through to weaving, dyeing, printing, and finishing. Full yarn traceability underpins our commitment to transparency, quality assurance, and responsible manufacturing at every stage.
              </p>
              <div className="grid grid-cols-1 gap-4 pt-12">
                {['SPINNING', 'WEAVING', 'DYEING', 'PRINTING', 'FINISHING'].map((step, i) => (
                  <motion.div 
                    key={step} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between border-b border-ink/5 pb-4 group"
                  >
                    <span className="font-mono text-[11px] md:text-[13px] font-bold uppercase tracking-[0.4em] group-hover:text-collision transition-all italic">{step}</span>
                    <div className="h-px grow mx-8 bg-ink/10 group-hover:bg-collision/20 transition-all duration-700" />
                    <span className="text-ink/20 group-hover:text-ink transition-colors font-serif italic text-xs uppercase tracking-widest">TRACEABLE</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="lg:col-span-7"
            >
              <div className="aspect-[16/9] bg-gray-100 overflow-hidden transform rotate-1 overlap-image shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1558051815-0f18e64e6280?auto=format&fit=crop&w=1200&q=80" 
                  alt="Integrated Production Flow" 
                  className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </section>

      {/* International Branding Supplier Section */}
      <section className="mb-64 border-t border-ink/10 pt-32 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-7xl font-serif italic font-black uppercase tracking-tight text-ink mb-8">International Branding Supplier</h2>
          <p className="max-w-2xl mx-auto font-mono text-[12px] md:text-[14px] uppercase tracking-tight text-ink/50 leading-relaxed italic">
            Trusted by global brands, we deliver premium fabrics that reflect your brand’s values, ensuring consistency, reliability, and sophistication.
          </p>
        </motion.div>
        
        <div className="bg-[#f2f1ed] py-24 px-8 md:px-24">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16 md:gap-24 items-center grayscale opacity-70 hover:opacity-100 transition-all duration-500">
             {[
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
             ].map((brand) => (
                <div key={brand.name} className="flex items-center justify-center p-4">
                  {brand.logoUrl ? (
                    <img 
                      src={brand.logoUrl} 
                      alt={brand.name} 
                      className="max-h-8 md:max-h-12 w-auto object-contain"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <span className="text-xl font-black font-sans tracking-tight text-ink/80 hover:text-ink transition-colors select-none">
                      {brand.name}
                    </span>
                  )}
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-64 relative">
        <div className="absolute top-0 right-0 pointer-events-none -translate-y-32 z-0 opacity-[0.03]">
          <span className="text-[30vw] font-serif italic text-ink select-none font-black leading-none uppercase">Archive</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end mb-24 relative z-10">
          <div className="md:col-span-8">
            <h2 className="text-5xl md:text-8xl font-serif font-black italic tracking-[-0.05em] uppercase leading-none mb-12">THE <br /><span className="font-mono not-italic text-collision ml-12 md:ml-32">ARCHIVISTS</span></h2>
            <p className="font-mono text-[16px] md:text-[20px] leading-relaxed uppercase tracking-tight text-ink italic border-b border-collision/20 pb-8 max-w-3xl">
              FOUNDED BY PETER HU AND SUSTAINED BY THE ARTISANAL WISDOM OF AUNT SUN (33YRS), AUNT CUI (28YRS), AND UNCLE LU (28YRS).
            </p>
          </div>
          <div className="md:col-span-4 border-l-2 border-collision pl-8 mb-4">
             <p className="font-mono text-[10px] md:text-[12px] uppercase tracking-[0.4em] text-ink/40 mb-2 italic">COLLECTIVE EXPERIENCE</p>
             <p className="text-6xl md:text-[6vw] font-serif italic font-black text-ink leading-none">120<span className="text-xl not-italic font-mono text-collision">+ YEARS</span></p>
          </div>
        </div>

        <div className="relative group overflow-hidden mb-24 aspect-[21/9] shadow-2xl">
          <div className="w-full h-full bg-gray-100 grayscale hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105">
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80" 
              alt="The Sincerity Team" 
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors" />
        </div>
      </section>

      {/* Culture as Nature Section */}
      <section className="pb-32 md:pb-64 border-t border-ink/10 pt-32 relative overflow-hidden flex flex-col items-center text-center">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-6xl md:text-[100px] font-serif italic font-black uppercase tracking-[-0.05em] leading-tight text-ink mb-16"
        >
          CULTURE <br />
          <span className="font-mono not-italic text-collision">AS NATURE</span>
        </motion.h2>

        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="relative w-full max-w-md aspect-square mb-24 grayscale brightness-110 hover:grayscale-0 transition-all duration-1000 rotate-3 p-4"
        >
          <div className="w-full h-full rounded-full overflow-hidden border-8 border-ink shadow-2xl shadow-collision/20">
            <img 
              src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1200&q=80" 
              alt="Linen Texture" 
              className="w-full h-full object-cover scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        <div className="max-w-3xl space-y-12">
          <p className="font-mono text-[16px] md:text-[22px] leading-relaxed uppercase tracking-tight text-ink italic">
             Each thread weaves the artistry of nature. <br />
             Using responsibly sourced linen and advanced eco-friendly techniques, we create fabrics that are as kind to the planet as they are to your designs. Join us in weaving a more sustainable future.
          </p>
          <Link to="/shop" className="inline-block border-b border-collision text-collision font-mono text-sm tracking-[0.3em] uppercase italic hover:tracking-[0.5em] transition-all pb-2">
            More
          </Link>
        </div>
      </section>
    </motion.div>
  </div>
);

const ProductDetail: React.FC<{ onAddToCart: (product: Product) => void }> = ({ onAddToCart }) => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);
  const relatedProducts = PRODUCTS.filter(p => p.id !== id).slice(0, 4);

  if (!product) return <div className="pt-32 text-center font-mono uppercase italic">Product not found</div>;

  return (
    <div className="pt-32 md:pt-48 pb-32 px-4 md:px-12 bg-bg-base">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        <div className="mb-24 flex items-center gap-6">
          <Link to="/shop" className="font-mono text-[10px] md:text-[12px] font-bold uppercase tracking-[0.4em] text-ink/40 hover:text-ink transition-colors flex items-center gap-2 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> BACK TO ARCHIVE
          </Link>
          <div className="h-px flex-grow bg-ink/10" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 mb-48">
          {/* Images Section */}
          <div className="lg:col-span-1 hidden lg:block">
            <p className="vertical-text text-ink/20 font-mono text-[10px] tracking-[0.5em] whitespace-nowrap uppercase italic">
              SERIE: {product.status} — MATERIAL: {product.material}
            </p>
          </div>
          <div className="lg:col-span-6 space-y-12 md:space-y-24">
            <div className="aspect-[4/5] bg-gray-100 overflow-hidden overlap-image transform -rotate-1 grayscale brightness-105 hover:grayscale-0 transition-all duration-1000">
              <img 
                src={product.productImage} 
                alt={product.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="aspect-[16/9] bg-gray-100 overflow-hidden overlap-image transform rotate-1 grayscale brightness-95 hover:grayscale-0 transition-all duration-1000">
              <img 
                src={product.lifestyleImage} 
                alt={`${product.title} lifestyle`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Info Section */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
            <div className="max-w-md">
              <div className="mb-12">
                <p className="font-serif italic text-lg text-ink/40 mb-6">{product.status}</p>
                <h1 className="text-5xl md:text-8xl font-serif font-black italic tracking-[-0.05em] uppercase leading-[0.8] mb-12">
                  {product.title}
                </h1>
                <p className="text-3xl md:text-4xl font-mono font-black tracking-[-0.05em] mb-12 flex items-baseline gap-4">
                  ${product.price.toFixed(2)} <span className="font-mono text-[12px] md:text-[14px] text-ink/30 italic uppercase tracking-widest font-normal">/ Yard</span>
                </p>
                <div className="h-px bg-ink mb-12" />
                <p className="font-mono text-[12px] md:text-[15px] leading-relaxed uppercase tracking-tight text-ink/60 mb-16 italic">
                  {product.description}
                </p>
                
                <button 
                  onClick={() => onAddToCart(product)}
                  className="w-full bg-ink text-bg-base py-8 font-mono font-bold text-[11px] md:text-[13px] uppercase tracking-[0.4em] hover:bg-ink/90 transition-all mb-20 relative overflow-hidden group shadow-2xl"
                >
                  <span className="relative z-10">ADD TO ARCHIVE BAG</span>
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>

                {/* Specs */}
                <div className="space-y-8 border-t border-ink/10 pt-12 font-mono text-[11px] md:text-[13px] uppercase tracking-widest italic text-ink/70">
                  <div className="flex justify-between items-center border-b border-ink/5 pb-4">
                    <span>MATERIAL COMPOSITION</span>
                    <span className="text-ink font-bold not-italic">{product.material}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-ink/5 pb-4">
                    <span>USABLE WIDTH</span>
                    <span className="text-ink font-bold not-italic">{product.dimensions}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-ink/5 pb-4">
                    <span>FINISHING TECHNIQUE</span>
                    <span className="text-ink font-bold not-italic">{product.technique}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section>
          <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12 border-b border-ink pb-12">
            <h2 className="text-4xl md:text-6xl font-serif font-black italic tracking-[-0.05em] leading-none uppercase">
              COMPLEMENTARY <br /><span className="font-mono not-italic text-collision ml-12">TEXTILES</span>
            </h2>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24">
            {relatedProducts.map((item) => (
              <Link key={item.id} to={`/product/${item.id}`} className="group">
                <div className="aspect-[3/4] bg-gray-50 overflow-hidden mb-8 transform group-hover:-rotate-2 transition-transform duration-700 h-[400px]">
                  <img 
                    src={item.productImage} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale brightness-105 group-hover:grayscale-0 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="font-serif italic text-2xl uppercase tracking-tighter mb-2 group-hover:underline underline-offset-4">{item.title}</h4>
                <p className="font-mono text-[10px] md:text-[12px] font-bold tracking-tight text-ink/40">${item.price.toFixed(2)}</p>
              </Link>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
};

const AboutSection: React.FC = () => (
  <section className="px-4 md:px-12 py-32 md:py-48 bg-[#FFF0F5] relative overflow-hidden">
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
           className="space-y-12"
        >
          <h2 className="text-5xl md:text-7xl font-serif font-black italic tracking-[-0.05em] leading-none uppercase text-ink">
            ABOUT <br /><span className="font-mono not-italic text-collision ml-12">SINCERITY</span>
          </h2>
          <p className="font-mono text-[14px] md:text-[18px] leading-relaxed uppercase tracking-tight text-ink/70 italic border-l-2 border-ink pl-8">
            Starting as a specialized dyeing and printing factory, Tongling Sincerity Linen Group has evolved into a global leader in linen textiles. Our name is our promise—a sincere approach to craftsmanship, from the flax fields to the final finished fabric.
          </p>
          <Link to="/brand-story" className="inline-block font-mono text-[11px] md:text-[13px] font-bold underline underline-offset-8 hover:tracking-[0.2em] transition-all uppercase">
            EXPLORE OUR JOURNEY
          </Link>
        </motion.div>
        <div className="relative">
          <div className="aspect-[4/5] bg-gray-200 overlap-image transform rotate-1 overflow-hidden shadow-xl">
             <img 
               src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=1200&q=80" 
               alt="Craftsmanship" 
               className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
               referrerPolicy="no-referrer"
             />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SustainabilitySection: React.FC = () => (
  <section className="px-4 md:px-12 py-32 md:py-48 bg-[#F0FFF0] relative overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
        <div className="lg:col-span-7 order-2 lg:order-1">
           <div className="grid grid-cols-2 gap-8">
             <div className="aspect-[3/4] bg-gray-200 overlap-image transform -rotate-2 overflow-hidden shadow-2xl">
               <img src="https://images.unsplash.com/photo-1542601906970-36f967ad6f73?auto=format&fit=crop&w=1200&q=80" alt="Nature" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
             </div>
             <div className="aspect-[3/4] bg-gray-200 overlap-image transform rotate-3 mt-12 md:mt-24 overflow-hidden shadow-2xl">
               <img src="https://images.unsplash.com/photo-1595853035070-59a39fe84de3?auto=format&fit=crop&w=1200&q=80" alt="Flax" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
             </div>
           </div>
        </div>
        <div className="lg:col-span-5 space-y-12 order-1 lg:order-2">
           <h2 className="text-5xl md:text-7xl font-serif font-black italic tracking-[-0.05em] leading-none uppercase text-ink">
             NATURE <br /><span className="font-mono not-italic text-collision ml-12">PRECTICE</span>
           </h2>
           <p className="font-mono text-[12px] md:text-[14px] leading-relaxed uppercase tracking-tight text-ink/60 italic border-l-2 border-ink pl-8">
             Our commitment to the environment is as deep as our passion for linen. From European Flax certification to closed-loop recycling of residual fibers, we ensure that our artistry leaves a minimal footprint on the planet.
           </p>
           <ul className="space-y-4 pt-8">
             {['EUROPEAN FLAX CERTIFIED', 'CLOSED-LOOP RECYCLING', 'OEKO-TEX STANDARD 100', 'RESPONSIBLE SOURCING'].map((item) => (
               <li key={item} className="font-mono text-[10px] md:text-[12px] tracking-[0.3em] uppercase italic flex items-center gap-4 text-ink/80">
                 <div className="w-4 h-px bg-collision" />
                 {item}
               </li>
             ))}
           </ul>
        </div>
      </div>
    </div>
  </section>
);

const ContactSection: React.FC = () => (
  <section className="px-4 md:px-12 py-32 md:py-48 bg-ink text-bg-base relative overflow-hidden">
    <div className="absolute top-0 left-1/4 w-px h-full bg-bg-base/10 hidden md:block" />
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 relative z-10">
      <div className="lg:col-span-5">
        <h2 className="text-6xl md:text-8xl font-serif font-black italic tracking-[-0.05em] leading-none uppercase mb-12">
          GLOBAL <br /><span className="font-mono not-italic text-collision ml-12">CONTACT</span>
        </h2>
        <div className="space-y-8 font-mono text-[14px] uppercase tracking-tight italic">
          <p className="text-bg-base/60">FOR WHOLESALE ENQUIRIES, CUSTOM FABRICATION OR GENERAL INFORMATION.</p>
          <div className="space-y-4 text-2xl md:text-3xl font-serif border-t border-bg-base/10 pt-8">
            <a href="mailto:info@sinceritylinen.com" className="block hover:text-collision transition-colors">INFO@SINCERITYLINEN.COM</a>
            <a href="tel:+86212345678" className="block hover:text-collision transition-colors">+86 (21) 2345 678</a>
          </div>
        </div>
      </div>
      <div className="lg:col-span-7">
        <form className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4 border-b border-bg-base/20 pb-4">
              <label className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-40">NAME / IDENTITY</label>
              <input type="text" className="w-full bg-transparent border-none focus:outline-none font-serif italic text-xl" />
            </div>
            <div className="space-y-4 border-b border-bg-base/20 pb-4">
              <label className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-40">EMAIL / COORDINATE</label>
              <input type="email" className="w-full bg-transparent border-none focus:outline-none font-serif italic text-xl" />
            </div>
          </div>
          <div className="space-y-4 border-b border-bg-base/20 pb-4">
            <label className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-40">MESSAGE / ENQUIRY</label>
            <textarea rows={1} className="w-full bg-transparent border-none focus:outline-none font-serif italic text-xl resize-none" />
          </div>
          <button className="w-full md:w-auto px-16 py-6 border border-bg-base font-mono font-bold text-[12px] uppercase tracking-[0.5em] hover:bg-bg-base hover:text-ink transition-all italic">
            SEND ARCHIVE REQUEST
          </button>
        </form>
      </div>
    </div>
  </section>
);

const Home: React.FC = () => (
  <main className="bg-bg-base overflow-x-hidden pt-20">
    <Hero />
    
    <section className="py-24 border-y border-ink flex overflow-hidden select-none">
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-24 items-center pr-24"
      >
        {[...Array(6)].map((_, i) => (
          <span key={i} className="text-6xl md:text-8xl font-serif font-black italic uppercase tracking-tighter text-ink opacity-20">VERTICAL INTEGRATION — IN-HOUSE R&D — SINCE 1998 —</span>
        ))}
      </motion.div>
    </section>

    {/* Production Chain Section */}
    <section className="px-4 md:px-12 py-32 md:py-64 border-b border-ink/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
        <div className="lg:col-span-12 mb-12">
            <h2 className="text-4xl md:text-[9vw] font-serif font-black italic tracking-[-0.05em] leading-none uppercase text-ink">PRODUCTION <br /><span className="font-mono not-italic text-collision ml-12">CHAIN</span></h2>
        </div>
        <div className="lg:col-span-5 space-y-12">
          <p className="font-mono text-[14px] md:text-[18px] leading-relaxed uppercase tracking-tight text-ink border-l-2 border-ink pl-8 italic">
            WE DELIVER A FULLY INTEGRATED LINEN SUPPLY CHAIN—FROM YARN SPINNING THROUGH TO WEAVING, DYEING, PRINTING, AND FINISHING. 
          </p>
          <div className="font-mono text-[12px] tracking-[0.2em] uppercase text-ink/60 space-y-4 border-t border-ink/10 pt-12">
             <p className="font-bold text-ink mb-4">IN-HOUSE R&D ABILITY</p>
             <p>Our dedicated R&D facility focuses on technical innovation, creating proprietary finishes and textures that remain exclusive to our archive.</p>
          </div>
          <div className="space-y-6 pt-12">
            {['YARN SPINNING', 'WEAVING', 'DYEING & PRINTING', 'FINISHING'].map((step, i) => (
               <div key={step} className="flex items-center justify-between border-b border-ink/10 pb-4 hover:pl-4 transition-all group">
                  <span className="font-mono text-[10px] md:text-[12px] font-bold uppercase tracking-[0.4em] italic group-hover:text-collision transition-colors">{step}</span>
                  <span className="text-ink/10 group-hover:text-ink text-[10px] font-mono italic">IN-HOUSE</span>
               </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7">
           <div className="aspect-[16/9] bg-gray-100 transform rotate-1 overflow-hidden overlap-image shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1558051815-0f18e64e6280?auto=format&fit=crop&w=1200&q=80" 
                alt="Production" 
                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
           </div>
        </div>
      </div>
    </section>

    <AboutSection />

    <section className="py-32 md:py-48">
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
    <div className="absolute -bottom-24 -right-12 select-none pointer-events-none opacity-5">
      <h2 className="text-[30vw] font-serif font-black italic leading-none whitespace-nowrap uppercase">SINCERITY</h2>
    </div>
    
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
    <div className="pt-32 md:pt-48 pb-32 px-4 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <header className="mb-32 md:mb-64 flex flex-col md:flex-row justify-between items-end gap-12 border-b border-ink pb-12">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-[10vw] font-serif font-black italic tracking-[-0.05em] leading-none uppercase"
          >
            THE <br /><span className="font-mono not-italic text-collision ml-12 md:ml-24">ARCHIVE</span>
          </motion.h2>
          <div className="md:w-1/3">
            <p className="font-mono text-[10px] md:text-[12px] uppercase tracking-widest leading-relaxed italic opacity-60">
              A curated selection of our most significant fabric developments, spanning three decades of weaving excellence.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-48 items-start">
          {archives.map((item, i) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`relative ${i % 2 === 1 ? 'md:mt-48' : ''}`}
            >
              <div className="aspect-[4/5] overflow-hidden overlap-image grayscale brightness-105 group relative">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-all" />
              </div>
              <div className="mt-12 flex items-start gap-8">
                <span className="font-serif italic text-4xl text-ink/20">{item.count}</span>
                <div>
                  <h3 className="text-3xl md:text-5xl font-serif italic mb-4 uppercase tracking-[-0.02em]">{item.title}</h3>
                  <div className="h-0.5 w-12 bg-ink mb-6" />
                  <Link to="/shop" className="font-mono text-[10px] md:text-[12px] font-bold tracking-[0.3em] uppercase underline underline-offset-8">VIEW SERIE</Link>
                </div>
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
            className="fixed top-0 right-0 h-full w-full md:max-w-xl bg-bg-base z-[70] shadow-[-20px_0_60px_rgba(0,0,0,0.1)] flex flex-col border-l border-ink/10"
          >
            <header className="p-8 md:p-12 border-b border-ink/10 flex justify-between items-center">
              <div>
                <h2 className="text-4xl font-serif font-black italic tracking-tighter uppercase mb-1">ARCHIVE BAG</h2>
                <p className="font-mono text-[10px] tracking-[0.4em] text-ink/30 italic">STORAGE UNIT — {items.length} ITEMS</p>
              </div>
              <button onClick={onClose} className="p-4 hover:bg-ink hover:text-bg-base transition-colors border border-ink">
                <X size={20} strokeWidth={1} />
              </button>
            </header>

            <div className="flex-grow overflow-y-auto p-8 md:p-12 space-y-12">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-8">
                  <ShoppingBag size={64} className="text-ink/10" strokeWidth={0.5} />
                  <p className="font-mono text-[11px] uppercase tracking-[0.5em] text-ink/30 italic">YOUR STORAGE IS EMPTY</p>
                  <button 
                    onClick={onClose}
                    className="border border-ink px-12 py-4 font-mono font-bold text-[11px] uppercase tracking-widest hover:bg-ink hover:text-bg-base transition-all"
                  >
                    RETURN TO GALLERY
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-12">
                  {items.map((item) => (
                    <motion.div layout key={item.id} className="grid grid-cols-12 gap-8 border-b border-ink/5 pb-12 last:border-0 group">
                      <div className="col-span-4 aspect-[3/4] bg-gray-50 overflow-hidden overlap-image transform skew-y-1">
                        <img src={item.productImage} alt={item.title} className="w-full h-full object-cover grayscale brightness-105 group-hover:grayscale-0 transition-all duration-700" />
                      </div>
                      <div className="col-span-8 flex flex-col justify-between py-2">
                        <div className="space-y-2">
                          <div className="flex justify-between items-start gap-4">
                            <h3 className="font-serif italic text-2xl uppercase tracking-tighter leading-none group-hover:underline underline-offset-4">{item.title}</h3>
                            <button onClick={() => onRemove(item.id)} className="opacity-20 hover:opacity-100 transition-opacity">
                              <X size={16} />
                            </button>
                          </div>
                          <p className="font-mono text-[10px] text-ink/40 uppercase tracking-widest italic">{item.material}</p>
                        </div>
                        <div className="flex justify-between items-end">
                          <div className="flex items-center border border-ink">
                            <button 
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              className="p-3 hover:bg-ink hover:text-bg-base transition-colors"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="px-6 font-mono text-[12px] font-bold border-x border-ink h-full flex items-center">{item.quantity}</span>
                            <button 
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              className="p-3 hover:bg-ink hover:text-bg-base transition-colors"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <p className="font-mono text-[16px] font-black">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <footer className="p-8 md:p-12 border-t border-ink bg-ink text-bg-base">
                <div className="flex justify-between items-end mb-12">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-bg-base/40 mb-2 italic">ESTIMATED TOTAL</p>
                    <span className="text-5xl font-serif font-black italic tracking-tighter leading-none">${total.toFixed(2)}</span>
                  </div>
                  <p className="font-mono text-[9px] text-bg-base/40 uppercase tracking-widest italic text-right">
                    EXCLUDES SHIPPING & <br />INTERNATIONAL TAXES
                  </p>
                </div>
                <button className="w-full bg-bg-base text-ink py-8 font-mono font-bold text-[13px] uppercase tracking-[0.5em] hover:bg-white transition-all shadow-xl italic">
                  PROCEED TO LOGISTICS
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
    <div className="pt-32 md:pt-48 pb-32 px-4 md:px-12 relative bg-bg-base min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-24 md:mb-32 gap-12 border-b border-ink/10 pb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-6xl md:text-[8vw] font-serif font-black italic tracking-[-0.05em] leading-none uppercase">SHOP <br /><span className="font-mono not-italic text-collision ml-12">ONLINE</span></h2>
            <p className="font-mono text-[10px] md:text-[12px] uppercase tracking-[0.4em] text-ink/40 mt-6 italic">ARCHIVAL FABRICS & TECHNICAL DEVELOPMENTS</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-12">
            {(Object.keys(filterConfig) as Array<keyof typeof filterConfig>).map((key) => (
              <div key={key} className="space-y-4">
                <h5 className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-ink/30 border-b border-ink/5 pb-2 italic">{key}</h5>
                <div className="flex flex-col gap-2">
                  {filterConfig[key].map((val) => (
                    <button
                      key={val}
                      onClick={() => updateFilter(key, val)}
                      className={`font-mono text-[10px] uppercase tracking-widest text-left transition-all hover:pl-2 ${
                        activeFilters[key] === val ? "text-collision font-bold" : "text-ink/50 hover:text-ink"
                      }`}
                    >
                      {filterLabels[val] || val}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mb-12">
          <p className="font-mono text-[10px] uppercase tracking-widest text-ink/40 italic">SHOWING {filteredProducts.length} ARTICLES</p>
          {(activeFilters.category !== "ALL" || activeFilters.process !== "ALL" || activeFilters.availability !== "ALL" || activeFilters.composition !== "ALL") && (
            <button 
              onClick={() => setActiveFilters({ category: "ALL", process: "ALL", availability: "ALL", composition: "ALL" })}
              className="font-mono text-[10px] uppercase tracking-widest text-collision underline underline-offset-4"
            >
              CLEAR ALL
            </button>
          )}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="py-24 text-center">
            <p className="font-mono text-[12px] uppercase tracking-[0.5em] text-ink/20 italic">No articles match your specific archive query.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 md:gap-x-20 gap-y-32">
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`group ${i % 3 === 1 ? 'md:mt-32' : i % 3 === 2 ? 'md:mt-64' : ''}`}
              >
                <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden mb-12 transform group-hover:-rotate-1 transition-transform duration-700 bg-bg-white shadow-sm">
                  <Link to={`/product/${product.id}`}>
                    <img 
                      src={product.productImage} 
                      alt={product.title} 
                      className="w-full h-full object-cover grayscale brightness-105 group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </Link>
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <span className="bg-bg-base/80 backdrop-blur-sm self-start px-3 py-1 font-mono text-[8px] uppercase tracking-[0.3em] font-bold text-ink italic shadow-sm">
                      {product.availability === 'MAKE_TO_ORDER' ? 'PRE-ORDER' : 'IN STOCK'}
                    </span>
                    <span className="bg-collision/10 backdrop-blur-sm self-start px-3 py-1 font-mono text-[8px] uppercase tracking-[0.3em] font-bold text-collision italic shadow-sm">
                      {product.process?.replace('_', ' ')}
                    </span>
                  </div>
                  <button 
                    onClick={() => onAddToCart(product)}
                    className="absolute bottom-0 left-0 w-full bg-ink text-bg-base py-6 font-mono font-bold text-[10px] md:text-[11px] uppercase tracking-[0.3em] md:translate-y-full group-hover:translate-y-0 transition-transform duration-500 italic"
                  >
                    ADD TO BAG — ${product.price.toFixed(2)}
                  </button>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <Link to={`/product/${product.id}`} className="flex-grow">
                    <h3 className="font-serif italic text-2xl md:text-3xl uppercase tracking-tight mb-2 group-hover:underline underline-offset-4 decoration-1">{product.title}</h3>
                    <div className="flex flex-wrap gap-2">
                       <p className="font-mono text-[10px] text-ink/40 uppercase tracking-widest italic">{product.composition}</p>
                       <span className="text-ink/20">•</span>
                       <p className="font-mono text-[10px] text-ink/40 uppercase tracking-widest italic">{filterLabels[product.category || ''] || product.category}</p>
                    </div>
                  </Link>
                  <p className="font-mono text-[16px] font-black tracking-tighter leading-none">${product.price.toFixed(2)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
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
