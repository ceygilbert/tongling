import React from "react";

export const SustainabilitySection: React.FC = () => (
  <section className="px-4 md:px-12 py-16 md:py-24 bg-[#F1EDE4] relative overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
        <div className="lg:col-span-7 order-2 lg:order-1">
           <div className="grid grid-cols-2 gap-8">
             <div className="aspect-[3/4] bg-gray-200 overflow-hidden shadow-2xl border border-ink/5 group relative">
               <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80" alt="Nature" className="w-full h-full object-cover grayscale brightness-95 group-hover:scale-105 duration-[2s] transition-all" referrerPolicy="no-referrer" />
               <div className="absolute bottom-4 left-4 bg-bg-base/90 p-3 text-[8px] font-mono tracking-widest">
                 Organic Flax Fields
               </div>
             </div>
             <div className="aspect-[3/4] bg-gray-200 mt-12 md:mt-24 overflow-hidden shadow-2xl border border-ink/5 group relative">
               <img src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=1200&q=80" alt="Flax" className="w-full h-full object-cover grayscale brightness-95 group-hover:scale-105 duration-[2s] transition-all" referrerPolicy="no-referrer" />
               <div className="absolute bottom-4 left-4 bg-bg-base/90 p-3 text-[8px] font-mono tracking-widest">
                 Raw Harvest No. 04
               </div>
             </div>
           </div>
        </div>
        <div className="lg:col-span-5 space-y-12 order-1 lg:order-2">
           <div className="space-y-4">
             <span className="font-mono text-[10px] font-black tracking-widest text-[#B2A490]">Ecological Standard</span>
             <h2 className="text-5xl md:text-7xl font-serif font-black tracking-[-0.05em] leading-[0.95] text-ink">
               Nature <br /><span className="font-mono not-italic text-collision md:ml-12 text-5xl md:text-6xl">Practice</span>
             </h2>
           </div>
           <p className="font-mono text-[12px] md:text-[14px] leading-relaxed tracking-tight text-ink/60 border-l-2 border-ink pl-8">
             Our pledge to earth runs companion to our search for pristine fiber. Through European Flax certifications and a waste-free loop of reprocessed leftover yarn, we seek minimal burden on the living land.
           </p>
           <ul className="space-y-6 pt-8 border-t border-ink/10">
             {['European Flax® Certified', 'Closed-Loop Recycled Selvedges', 'OEKO-TEX® Standard 100 Compliant', 'Responsibly Harvested In France'].map((item) => (
               <li key={item} className="font-mono text-[9px] md:text-[11px] tracking-[0.25em] flex items-center gap-4 text-ink/80">
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
