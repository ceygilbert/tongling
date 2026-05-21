import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export const AboutSection: React.FC = () => (
  <section className="px-4 md:px-12 py-16 md:py-24 bg-[#FAF9F5] border-t border-b border-ink/5 relative overflow-hidden">
    <div className="absolute top-0 right-0 p-12 mix-blend-difference pointer-events-none">
      <p className="font-mono text-[10px] md:text-[12px] tracking-[0.6em] vertical-text opacity-40">Heritage — Vision — Sincerity</p>
    </div>
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-center">
      <div className="md:col-span-1 hidden md:block">
        <p className="vertical-text text-ink/20 font-mono text-[10px] tracking-[0.5em] whitespace-nowrap">Founded in 1998 — Shanghai</p>
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
            <span className="font-mono text-[10px] tracking-widest text-[#B2A490] font-black">Annals & Record</span>
            <h2 className="text-5xl md:text-7xl font-serif font-black tracking-[-0.05em] leading-[0.95] text-ink">
              About <br /><span className="font-mono not-italic text-collision md:ml-12 text-5xl md:text-6xl">Sincerity</span>
            </h2>
          </div>
          <p className="font-mono text-[14px] md:text-[16px] leading-relaxed tracking-tight text-ink/70 border-l-2 border-ink pl-8">
            Starting as a highly specialized small-scale dye house in Tongling, Sincerity Linen Group has matured into a premier global landmark for sustainable linen luxury. The name, "Sincerity" reflects our transparent relationship with natural textile materials and human makers.
          </p>
          <Link to="/brand-story" className="inline-flex items-center gap-4 bg-ink text-bg-base px-8 py-4 font-mono text-[10px] font-bold tracking-[0.2em] hover:bg-ink/80 transition-all shadow-lg">
            <span>Explore Our Journey</span>
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
             <div className="absolute top-4 left-4 bg-bg-base/95 backdrop-blur-sm px-4 py-2 text-[9px] font-mono tracking-[0.15em] border border-ink/5">
               Tongling Archives / Weaver L09
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
