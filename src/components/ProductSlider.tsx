import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { PRODUCTS } from "../data";

export const ProductSlider: React.FC = () => {
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
            <div className="lg:col-span-1 hidden lg:block" />

            <div className="lg:col-span-6 relative">
              <div className="aspect-[3/4] md:aspect-square overflow-hidden bg-gray-100 transform -rotate-1 shadow-2xl">
                <img 
                  src={product.lifestyleImage} 
                  alt={product.title} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-collision flex items-center justify-center text-bg-base font-serif text-4xl select-none rotate-12 hidden md:flex shadow-2xl">
                {String(currentIndex + 1).padStart(2, '0')}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-12 relative">
               <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="w-12 h-px bg-collision" />
                    <span className="font-mono text-[10px] tracking-[0.5em] text-collision font-bold">{product.status}</span>
                  </div>
                  <h4 className="text-2xl sm:text-3xl md:text-[3vw] font-formal font-bold uppercase leading-[1.25] tracking-[0.08em] md:tracking-[0.1em] text-ink">
                    {product.title.split(' ')[0]} <br />
                    <span className="md:ml-20 not-italic text-collision">{product.title.split(' ').slice(1).join(' ')}</span>
                  </h4>
               </div>

                <div className="max-w-md ml-4 md:ml-12 border-l border-ink/20 pl-8 space-y-8">
                  <p className="font-mono text-[12px] md:text-[14px] leading-relaxed tracking-tight text-ink/60">
                    {product.description}
                  </p>
                  <div className="grid grid-cols-2 gap-8 font-mono text-[10px] md:text-[11px] tracking-widest text-ink/40">
                  </div>
                  <Link 
                    to={`/product/${product.id}`}
                    className="inline-flex items-center gap-6 font-serif text-2xl tracking-tighter hover:text-collision transition-colors mt-8"
                  >
                    <span>View</span>
                    <ArrowRight size={20} />
                  </Link>
               </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-0 right-0 flex border-t border-l border-ink">
          <button 
            onClick={prevSlide}
            className="w-10 h-10 md:w-12 md:h-12 hover:bg-ink hover:text-bg-base transition-all border-r border-ink flex items-center justify-center"
            aria-label="Previous slide"
          >
            <ChevronLeft size={14} strokeWidth={1.5} />
          </button>
          <button 
            onClick={nextSlide}
            className="w-10 h-10 md:w-12 md:h-12 hover:bg-ink hover:text-bg-base transition-all flex items-center justify-center"
            aria-label="Next slide"
          >
            <ChevronRight size={14} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
};
