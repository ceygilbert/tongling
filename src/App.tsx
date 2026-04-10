/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Instagram, Mail, ArrowRight, History, Users, Globe, Award, ShoppingBag, X, Plus, Minus, Menu } from "lucide-react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
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
  },
  {
    id: "6",
    title: "FUNCTIONAL LINEN",
    description: "Advanced textiles for modern living. This collection features specialized finishes including anti-wrinkle and anti-UV treatments, providing the timeless beauty of linen with the convenience of high-performance technology.",
    dimensions: "150 CM WIDTH",
    material: "LINEN / SPANDEX",
    technique: "FUNCTIONAL FINISH",
    status: "INNOVATION",
    lifestyleImage: "https://images.unsplash.com/photo-1554188248-986adbb73be4?auto=format&fit=crop&w=1200&q=80",
    productImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    price: 38.00,
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
  },
];

const LOGO_URL = "https://hxfftpvzumcvtnzbpegb.supabase.co/storage/v1/object/public/generals/tongling_official_logo.webp";

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
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm px-4 md:px-6 py-4 flex justify-between items-center border-b border-gray-100">
        <div className="flex items-center gap-4 md:w-1/3">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 -ml-2 hover:opacity-50 transition-opacity"
            aria-label="Open Menu"
          >
            <Menu size={20} strokeWidth={1.5} />
          </button>
          <nav className="hidden md:flex gap-6 text-[11px] font-bold tracking-tighter uppercase">
            <Link to="/shop" className="hover:opacity-50 transition-opacity">SHOP</Link>
            <Link to="/collections" className="hover:opacity-50 transition-opacity">COLLECTIONS</Link>
            <Link to="/brand-story" className="hover:opacity-50 transition-opacity">BRAND STORY</Link>
          </nav>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <Link to="/">
            <img src={LOGO_URL} alt="Tongling Sincerity Logo" className="h-8 md:h-12 w-auto object-contain" referrerPolicy="no-referrer" />
          </Link>
        </div>

        <div className="flex items-center justify-end gap-2 md:gap-4 md:w-1/3">
          <button 
            onClick={onOpenCart}
            className="relative p-2 hover:opacity-50 transition-opacity"
            aria-label="Open Cart"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-black text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
          <div className="hidden md:flex flex-col items-end">
            <p className="text-[9px] font-bold tracking-widest uppercase text-gray-400">EST. 1998</p>
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
                <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-gray-400 mb-4">TONGLING SINCERITY</p>
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
  <section className="pt-24 md:pt-32 px-4 md:px-6 mb-16 md:mb-24">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 h-auto md:h-[70vh]"
    >
      <div className="relative overflow-hidden group aspect-[4/5] md:aspect-auto">
        <img 
          src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80" 
          alt="Linen Lifestyle 1" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="relative overflow-hidden group aspect-[4/5] md:aspect-auto">
        <img 
          src="https://images.unsplash.com/photo-1595853035070-59a39fe84de3?auto=format&fit=crop&w=1200&q=80" 
          alt="Linen Lifestyle 2" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tighter uppercase leading-none">TONGLING</h2>
            <p className="text-[9px] md:text-[10px] font-bold text-white tracking-[0.3em] uppercase mt-2">Sincerity Linen</p>
          </motion.div>
        </div>
      </div>
      <div className="relative overflow-hidden group aspect-[4/5] md:aspect-auto">
        <img 
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80" 
          alt="Linen Lifestyle 3" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>
    </motion.div>
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mt-8 md:mt-12 text-center max-w-2xl mx-auto"
    >
      <h3 className="text-xl md:text-2xl font-bold tracking-tighter mb-4 uppercase">'THE ART OF SINCERITY'</h3>
      <p className="font-mono text-[10px] md:text-[12px] leading-relaxed uppercase tracking-tight px-4">
        WEAVING TRADITION WITH MODERNITY. OUR LINEN TEXTILES ARE CRAFTED WITH UNWAVERING SINCERITY, ENSURING EVERY THREAD TELLS A STORY OF QUALITY, DURABILITY, AND NATURAL ELEGANCE.
      </p>
    </motion.div>
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
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="px-4 md:px-6 mb-16 md:mb-32 overflow-hidden">
      <div className="relative min-h-screen md:min-h-[80vh] flex items-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-12 md:py-0"
          >
            {/* Lifestyle Image */}
            <div className="lg:col-span-5 relative group order-2 lg:order-1">
              <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                <img 
                  src={product.lifestyleImage} 
                  alt={`${product.title} Lifestyle`} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Product Image */}
            <div className="lg:col-span-3 order-3 lg:order-2">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="aspect-[3/4] bg-white flex items-center justify-center p-6 md:p-8 border border-gray-100"
              >
                <img 
                  src={product.productImage} 
                  alt={`${product.title} Product`} 
                  className="max-w-full max-h-full object-contain drop-shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            {/* Text Details */}
            <div className="lg:col-span-4 flex flex-col gap-6 md:gap-8 order-1 lg:order-3">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="max-w-md"
              >
                <h4 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4 md:mb-6 uppercase">'{product.title}'</h4>
                <p className="font-mono text-[11px] md:text-[13px] leading-relaxed mb-6 md:mb-8 text-gray-600">
                  {product.description}
                </p>
                
                <div className="font-mono text-[12px] md:text-[14px] font-bold uppercase tracking-tighter space-y-2 border-l-2 border-black pl-4">
                  <p>{product.dimensions}</p>
                  <p>{product.material}</p>
                  <p>{product.technique}</p>
                </div>

                <div className="mt-8 md:mt-12 flex items-center gap-4">
                  <span className="font-mono text-[14px] md:text-[16px] font-bold uppercase tracking-tighter bg-black text-white px-4 py-2">
                    {product.status}
                  </span>
                  <button className="flex items-center gap-2 font-bold text-[11px] md:text-[12px] uppercase tracking-widest hover:gap-4 transition-all">
                    ENQUIRE <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="absolute bottom-4 md:bottom-0 right-0 flex gap-2 md:gap-4 z-20">
          <button 
            onClick={prevSlide}
            className="p-3 md:p-4 bg-white border border-black hover:bg-black hover:text-white transition-colors"
          >
            <ChevronLeft size={20} md:size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="p-3 md:p-4 bg-white border border-black hover:bg-black hover:text-white transition-colors"
          >
            <ChevronRight size={20} md:size={24} />
          </button>
        </div>

        {/* Slide Counter */}
        <div className="absolute top-4 md:top-0 right-0 font-mono text-[10px] md:text-[12px] font-bold">
          {String(currentIndex + 1).padStart(2, '0')} / {String(PRODUCTS.length).padStart(2, '0')}
        </div>
      </div>
    </section>
  );
};

const BrandStory: React.FC = () => (
  <div className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6">
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-5xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start mb-24 md:mb-32">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9] mb-6 md:mb-8">
            EXPERTISE AND <br />AGILITY IN ACTION
          </h2>
          <p className="font-mono text-[12px] md:text-[14px] leading-relaxed uppercase tracking-tight text-gray-600 mb-8">
            Founded in 2005 as a dyeing and printing manufacturer, Tongling Sincerity Linen Group has grown into a trusted long-term partner for global brands. Our team has extensive experience in both production and trade, allowing us to quickly address technical challenges and R&D to meet the evolving needs of the fashion industry.
          </p>
          <div className="aspect-square bg-gray-100 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=1200&q=80" 
              alt="Artisan at work" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="lg:pt-24"
        >
          <div className="aspect-[3/4] bg-gray-100 overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&w=1200&q=80" 
              alt="Linen texture" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <h3 className="text-xl md:text-2xl font-bold tracking-tighter uppercase mb-4">A SENSITIVITY OF TOUCH</h3>
          <p className="font-mono text-[10px] md:text-[12px] leading-relaxed uppercase tracking-tight text-gray-500">
            The process of working with linen is full of unpredictable moments. It depends not only on machinery, but on human instinct—judgment, timing, and the sensitivity of touch. That’s why every step is a unique discovery.
          </p>
        </motion.div>
      </div>

      {/* Vertically Integrated Production Section */}
      <section className="mb-24 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tighter uppercase mb-6">VERTICALLY INTEGRATED PRODUCTION</h3>
            <p className="font-mono text-[11px] md:text-[13px] leading-relaxed uppercase tracking-tight text-gray-600 mb-8">
              We deliver a fully integrated linen supply chain—from yarn spinning through to weaving, dyeing, printing, and finishing. This oversight ensures cost efficiency, shorter delivery timelines, and exceptional quality across all stages.
            </p>
            <div className="space-y-4">
              {['YARN SPINNING', 'WEAVING', 'DYEING & PRINTING', 'FINISHING'].map((step) => (
                <div key={step} className="flex items-center gap-4 border-b border-gray-100 pb-2">
                  <div className="w-2 h-2 bg-black" />
                  <span className="font-mono text-[10px] md:text-[12px] font-bold uppercase tracking-widest">{step}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="aspect-[16/9] bg-gray-100 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1558051815-0f18e64e6280?auto=format&fit=crop&w=1200&q=80" 
                alt="Production facility" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Redesigned Team Section - Single Large Image */}
      <section className="mb-24 md:mb-32">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b border-black pb-4 gap-4">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase">THE CUSTODIANS</h2>
          <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-gray-400">GENERATIONS OF SINCERITY</p>
        </div>

        <div className="relative group overflow-hidden mb-8 md:mb-12">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="aspect-[16/9] md:aspect-[21/9] bg-gray-100"
          >
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80" 
              alt="Tongling Sincerity Team" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-4 md:p-8">
            <p className="text-white font-mono text-[8px] md:text-[10px] uppercase tracking-[0.2em]">Our Sales & Production Team — Shanghai & Sydney, 2025</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8">
            <p className="font-mono text-[14px] md:text-[16px] leading-relaxed uppercase tracking-tight text-gray-800">
              Specializing in linen and linen-blend fabric production for over 30 years, our team has spent a lifetime growing in the same craft. Led by Peter Hu, the collective wisdom of Aunt Sun (33 years), Aunt Cui (28 years), and Uncle Lu (28 years) forms the backbone of our sincerity.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col justify-end">
            <div className="border-l-2 border-black pl-4 md:pl-6">
              <p className="font-bold text-[10px] md:text-[11px] uppercase tracking-widest mb-2">COLLECTIVE EXPERIENCE</p>
              <p className="text-3xl md:text-4xl font-black tracking-tighter uppercase">120+ YEARS</p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-100 pt-16 md:pt-24 mb-24 md:mb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          <div className="flex flex-col gap-4">
            <History className="text-gray-300" size={32} md:size={40} strokeWidth={1} />
            <h4 className="font-bold text-lg md:text-xl tracking-tighter">30+ YEARS</h4>
            <p className="font-mono text-[9px] md:text-[10px] uppercase text-gray-500">Specializing in linen and linen-blend fabric production for over three decades.</p>
          </div>
          <div className="flex flex-col gap-4">
            <Users className="text-gray-300" size={32} md:size={40} strokeWidth={1} />
            <h4 className="font-bold text-lg md:text-xl tracking-tighter">OUR TEAM</h4>
            <p className="font-mono text-[9px] md:text-[10px] uppercase text-gray-500">Aunt Sun (33y), Aunt Cui (28y), Uncle Lu (28y) — generations of craft.</p>
          </div>
          <div className="flex flex-col gap-4">
            <Globe className="text-gray-300" size={32} md:size={40} strokeWidth={1} />
            <h4 className="font-bold text-lg md:text-xl tracking-tighter">GLOBAL REACH</h4>
            <p className="font-mono text-[9px] md:text-[10px] uppercase text-gray-500">Providing efficient, eco-friendly solutions to leading clothing brands worldwide.</p>
          </div>
          <div className="flex flex-col gap-4">
            <Award className="text-gray-300" size={32} md:size={40} strokeWidth={1} />
            <h4 className="font-bold text-lg md:text-xl tracking-tighter">TRUSTED</h4>
            <p className="font-mono text-[9px] md:text-[10px] uppercase text-gray-500">Nearly ten brands partnering with us for over 15 years.</p>
          </div>
        </div>
      </div>

      <div className="text-center max-w-3xl mx-auto mb-24 md:mb-32">
        <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-6 md:mb-8">CULTURE AS NATURE</h2>
        <p className="font-mono text-[12px] md:text-[14px] leading-relaxed uppercase tracking-tight px-4 mb-8">
          Each thread weaves the artistry of nature. Using responsibly sourced linen and advanced eco-friendly techniques, we create fabrics that are as kind to the planet as they are to your designs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left border-t border-black pt-8">
          <div>
            <h4 className="font-bold text-[12px] uppercase tracking-widest mb-4">TRACEABILITY</h4>
            <p className="font-mono text-[10px] uppercase text-gray-500">Every yarn we use is fully traceable, ensuring transparency and responsibility across all stages of production.</p>
          </div>
          <div>
            <h4 className="font-bold text-[12px] uppercase tracking-widest mb-4">CIRCULARITY</h4>
            <p className="font-mono text-[10px] uppercase text-gray-500">Residual linen fibres are recycled for secondary applications, including eco-friendly paper, extending the lifecycle of flax.</p>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
);

const Home: React.FC = () => (
  <main>
    <Hero />
    <ProductSlider />
    <section className="px-6 py-24 text-center border-t border-gray-100">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        <h3 className="text-2xl font-bold tracking-tighter mb-6 uppercase">'OUR HERITAGE'</h3>
        <p className="font-mono text-[12px] leading-relaxed uppercase tracking-tight">
          SINCE 1998, TONGLING SINCERITY HAS BEEN AT THE FOREFRONT OF LINEN TEXTILE INNOVATION. OUR COMMITMENT TO SINCERITY MEANS WE SOURCE THE FINEST FLAX AND EMPLOY ARTISANAL WEAVING TECHNIQUES TO CREATE TEXTILES THAT ARE NOT ONLY BEAUTIFUL BUT ALSO SUSTAINABLE AND TIMELESS. FROM OUR LOOMS TO YOUR HOME, WE BRING THE NATURAL COMFORT OF LINEN TO EVERY CORNER OF THE WORLD.
        </p>
      </motion.div>
    </section>
  </main>
);

const Footer: React.FC = () => (
  <footer className="px-4 md:px-6 py-12 border-t border-gray-100">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start md:items-end">
      <div className="md:col-span-4 order-2 md:order-1">
        <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-tighter text-gray-400">
          © 2026 TONGLING SINCERITY — ALL RIGHTS RESERVED.
        </p>
      </div>
      
      <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 order-1 md:order-2">
        <div className="flex flex-col gap-2">
          <h5 className="font-mono text-[9px] md:text-[10px] font-bold uppercase tracking-tighter text-gray-400">SUPPORT</h5>
          <nav className="flex flex-col gap-1 font-mono text-[10px] md:text-[11px] uppercase tracking-tighter">
            <a href="#" className="hover:underline">SHIPPING</a>
            <a href="#" className="hover:underline">RETURNS</a>
          </nav>
        </div>
        
        <div className="flex flex-col gap-2">
          <h5 className="font-mono text-[9px] md:text-[10px] font-bold uppercase tracking-tighter text-gray-400">COMPANY</h5>
          <nav className="flex flex-col gap-1 font-mono text-[10px] md:text-[11px] uppercase tracking-tighter">
            <Link to="/collections" className="hover:underline">COLLECTIONS</Link>
            <Link to="/brand-story" className="hover:underline">ABOUT</Link>
            <a href="#" className="hover:underline">TERMS OF SERVICE</a>
            <a href="#" className="hover:underline">PRIVACY POLICY</a>
          </nav>
        </div>
        
        <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
          <h5 className="font-mono text-[9px] md:text-[10px] font-bold uppercase tracking-tighter text-gray-400">SUBSCRIBE TO</h5>
          <nav className="flex flex-col gap-1 font-mono text-[10px] md:text-[11px] uppercase tracking-tighter">
            <a href="#" className="hover:underline">NEWSLETTER</a>
            <a href="#" className="hover:underline">INSTAGRAM</a>
            <a href="#" className="hover:underline text-gray-300">PINTEREST</a>
          </nav>
        </div>
      </div>
    </div>
  </footer>
);

const Collections: React.FC = () => (
  <div className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6">
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto"
    >
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4 md:mb-6">COLLECTIONS</h2>
        <p className="font-mono text-[10px] md:text-[12px] uppercase tracking-[0.3em] text-gray-400">Sustainable • Natural • Sincere</p>
      </div>

      {/* Apparel Fabrics Section */}
      <section className="mb-24 md:mb-32">
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tighter uppercase">APPAREL FABRICS</h3>
          <div className="h-[1px] flex-grow bg-gray-100" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "PIECE DYED", desc: "Woven first, dyed later. Offering maximum flexibility in color selection and quick response to fashion trends.", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80" },
            { title: "YARN DYED", desc: "Dyeing yarns before weaving for rich, long-lasting colors and intricate patterns like stripes and chambrays.", img: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=80" },
            { title: "PRINTED", desc: "Versatile designs from screen to high-resolution digital printing with minimal environmental impact.", img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80" },
            { title: "SPECIAL FINISHES", desc: "Dobby, Embroidery, Jacquard, and Functional finishes like Anti-Wrinkle and Anti-UV.", img: "https://images.unsplash.com/photo-1554188248-986adbb73be4?auto=format&fit=crop&w=1200&q=80" }
          ].map((item, i) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-50 mb-4">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              </div>
              <h4 className="font-bold text-[13px] md:text-[14px] uppercase tracking-tighter mb-2">{item.title}</h4>
              <p className="font-mono text-[9px] md:text-[10px] uppercase text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Home Textiles Section */}
      <section className="mb-24 md:mb-32">
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <div className="h-[1px] flex-grow bg-gray-100" />
          <h3 className="text-2xl md:text-3xl font-bold tracking-tighter uppercase">HOME TEXTILES</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="aspect-[16/9] overflow-hidden bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80" 
                alt="Home Linen" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="lg:col-span-5">
            <h4 className="text-xl md:text-2xl font-bold tracking-tighter uppercase mb-4 md:mb-6">BRING NATURE HOME</h4>
            <p className="font-mono text-[11px] md:text-[12px] leading-relaxed uppercase tracking-tight text-gray-600 mb-6 md:mb-8">
              We empower brands to create authentic linen home collections. From bedding to kitchen essentials, our textiles transform everyday spaces into elevated experiences.
            </p>
            <div className="grid grid-cols-2 gap-4 font-mono text-[9px] md:text-[10px] uppercase font-bold">
              <div className="border-l-2 border-black pl-3 md:pl-4 py-2">BEDDING & CURTAINS</div>
              <div className="border-l-2 border-black pl-3 md:pl-4 py-2">TABLE & KITCHEN</div>
              <div className="border-l-2 border-black pl-3 md:pl-4 py-2">BATH & DECOR</div>
              <div className="border-l-2 border-black pl-3 md:pl-4 py-2">CUSTOM STORAGE</div>
            </div>
          </div>
        </div>
      </section>

      {/* Material Innovation Section */}
      <section className="mb-24 md:mb-32 bg-black text-white p-8 md:p-24">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-8 md:mb-12">MATERIAL INNOVATION</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-left">
            <div>
              <h4 className="font-bold text-[12px] md:text-[14px] uppercase tracking-widest mb-4 md:mb-6 border-b border-white/20 pb-2">CORE COMPOSITIONS</h4>
              <ul className="font-mono text-[10px] md:text-[11px] uppercase space-y-3 text-gray-400">
                <li>• 100% European Flax Linen</li>
                <li>• Linen–Cotton Blend</li>
                <li>• Linen–Viscose (Eco Liva)</li>
                <li>• Linen–Tencel Blend</li>
                <li>• Linen–Spandex Fabric</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[12px] md:text-[14px] uppercase tracking-widest mb-4 md:mb-6 border-b border-white/20 pb-2">NATURAL FIBERS</h4>
              <ul className="font-mono text-[10px] md:text-[11px] uppercase space-y-3 text-gray-400">
                <li>• Ramie Fabric</li>
                <li>• Hemp Fabric</li>
                <li>• Organic Linen</li>
                <li>• Heavyweight Artisan Weave</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  </div>
);

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
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
          />
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-2xl font-black tracking-tighter uppercase">YOUR BAG</h2>
              <button onClick={onClose} className="hover:rotate-90 transition-transform duration-300">
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <ShoppingBag size={48} className="text-gray-100 mb-4" strokeWidth={1} />
                  <p className="font-mono text-[10px] uppercase tracking-widest text-gray-400">Your bag is empty</p>
                  <button 
                    onClick={onClose}
                    className="mt-6 border-b border-black font-bold text-[11px] uppercase tracking-widest"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-8">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-24 aspect-[3/4] bg-gray-50 overflow-hidden">
                        <img src={item.productImage} alt={item.title} className="w-full h-full object-cover grayscale" />
                      </div>
                      <div className="flex-grow flex flex-col justify-between">
                        <div>
                          <h3 className="font-bold text-[12px] uppercase tracking-tighter">{item.title}</h3>
                          <p className="font-mono text-[10px] text-gray-400 uppercase">{item.material}</p>
                        </div>
                        <div className="flex justify-between items-end">
                          <div className="flex items-center border border-gray-100">
                            <button 
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              className="p-1 hover:bg-gray-50"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="px-3 font-mono text-[11px]">{item.quantity}</span>
                            <button 
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              className="p-1 hover:bg-gray-50"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <p className="font-mono text-[12px] font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-gray-50/50">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-gray-400">Subtotal</span>
                  <span className="text-2xl font-black tracking-tighter">${total.toFixed(2)}</span>
                </div>
                <button className="w-full bg-black text-white py-4 font-bold text-[12px] uppercase tracking-[0.2em] hover:bg-gray-900 transition-colors">
                  Checkout
                </button>
                <p className="mt-4 text-center font-mono text-[8px] text-gray-400 uppercase tracking-widest">
                  Shipping & taxes calculated at checkout
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Shop: React.FC<{ onAddToCart: (product: Product) => void }> = ({ onAddToCart }) => {
  const [filter, setFilter] = useState("ALL");
  const categories = ["ALL", "CORE COLLECTION", "SUSTAINABLE LINE", "ARTISAN SERIES", "ECO-FRIENDLY", "INNOVATION"];

  const filteredProducts = filter === "ALL" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.status === filter);

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 md:gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-2">SHOP</h2>
            <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-gray-400">Premium Linen Textiles by the Yard</p>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`font-mono text-[8px] md:text-[9px] uppercase tracking-widest px-3 md:px-4 py-2 border transition-all duration-300 ${
                  filter === cat ? "bg-black text-white border-black" : "border-gray-100 hover:border-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 md:gap-x-8 gap-y-12 md:gap-y-16">
          {filteredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group"
            >
              <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden mb-4 md:mb-6">
                <img 
                  src={product.productImage} 
                  alt={product.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 md:top-4 md:left-4">
                  <span className="bg-white px-2 py-1 font-mono text-[7px] md:text-[8px] uppercase tracking-widest font-bold border border-gray-100">
                    {product.status}
                  </span>
                </div>
                <button 
                  onClick={() => onAddToCart(product)}
                  className="absolute bottom-0 left-0 w-full bg-black text-white py-3 md:py-4 font-bold text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                >
                  Add to Bag — ${product.price.toFixed(2)}
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-[12px] md:text-[14px] uppercase tracking-tighter mb-1">{product.title}</h3>
                  <p className="font-mono text-[9px] md:text-[10px] text-gray-400 uppercase tracking-tight">{product.material}</p>
                </div>
                <p className="font-mono text-[11px] md:text-[12px] font-black tracking-tighter">${product.price.toFixed(2)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
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
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
