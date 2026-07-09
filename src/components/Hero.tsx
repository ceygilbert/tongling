import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export const Hero: React.FC = () => (
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
            className="flex items-center gap-4 text-[10px] md:text-[11px] font-mono tracking-[0.55em] text-ink/50"
          >
            <span>Tongling Sincerity Linen</span>
            <span className="w-1.5 h-1.5 rounded-full bg-ink/30" />
            <span className="font-bold">Est. 2005</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-[5.5vw] font-formal font-bold uppercase leading-[1.2] tracking-[0.08em] md:tracking-[0.1em] text-ink"
          >
            The Art Of <br />
            <span className="text-collision md:ml-16">Crafted</span> <br />
            <span className="md:ml-32">Textures</span>
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="max-w-xl md:ml-24 relative pl-8 border-l border-ink/10 space-y-8"
        >
          <p className="font-serif text-lg md:text-xl lg:text-2xl leading-relaxed text-ink/75">
            "Tongling Sincerity Linen Group offers a vertically integrated linen supply chain, covering yarn spinning, weaving, dyeing, printing, and finishing. Every yarn we use is fully traceable, ensuring transparency, quality assurance and responsibility across all stages of production."
          </p>
          <div className="flex flex-wrap gap-8 items-center pt-4">
            <Link 
              to="/shop" 
              className="px-10 py-5 bg-ink text-bg-base font-mono text-sm font-bold tracking-[0.3em] hover:bg-ink/90 transition-all shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              Choose Fabric
            </Link>
            <Link 
              to="/brand-story" 
              className="group font-mono text-sm font-bold tracking-widest flex items-center gap-3 py-3"
            >
              <span>The Brand Journey</span>
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
            src="HeroSectionTL.jpg?auto=format&fit=crop&w=1200&q=80" 
            alt="Premium Linen" 
            className="w-full h-full object-cover brightness-[0.92] hover:scale-105 duration-[3s] transition-transform ease-out"
            referrerPolicy="no-referrer"
          />
        </motion.div>


      </div>
    </div>

    {/* Elegant Footer Details of Hero Section */}
    <div className="border-t border-ink/10 py-8 flex flex-wrap gap-8 justify-between items-center text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-ink/40">
      <div className="flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-emerald-700/60 animate-pulse" />
        <span>Masters of LINEN™ Certification</span>
      </div>
      <div>OEKO-TEX® STANDARD 100</div>
      <div className="hidden md:block">GOTS certificated </div>
    </div>
  </section>
);
