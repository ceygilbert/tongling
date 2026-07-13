import React, { useState, useEffect } from "react";
import { getStoredHomeContent } from "../data";

export const SustainabilitySection: React.FC = () => {
  const [content, setContent] = useState(getStoredHomeContent());
  
  useEffect(() => {
    const handleStorage = () => setContent(getStoredHomeContent());
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
  <section className="px-4 md:px-12 py-16 md:py-24 bg-[#F1EDE4] relative overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
        <div className="lg:col-span-7 order-2 lg:order-1">
           <div className="grid grid-cols-2 gap-8">
             <div className="aspect-[3/4] bg-gray-200 overflow-hidden shadow-2xl border border-ink/5 group relative">
               <img src={content.sustainability?.image1} alt="Nature" className="w-full h-full object-cover grayscale brightness-95 group-hover:scale-105 duration-[2s] transition-all" referrerPolicy="no-referrer" />
               <div className="absolute bottom-4 left-4 bg-bg-base/90 p-3 text-[8px] font-mono tracking-widest">
                 {content.sustainability?.image1Caption}
               </div>
             </div>
             <div className="aspect-[3/4] bg-gray-200 mt-12 md:mt-24 overflow-hidden shadow-2xl border border-ink/5 group relative">
               <img src={content.sustainability?.image2} alt="Flax" className="w-full h-full object-cover grayscale brightness-95 group-hover:scale-105 duration-[2s] transition-all" referrerPolicy="no-referrer" />
               <div className="absolute bottom-4 left-4 bg-bg-base/90 p-3 text-[8px] font-mono tracking-widest">
                 {content.sustainability?.image2Caption}
               </div>
             </div>
           </div>
        </div>
        <div className="lg:col-span-5 space-y-12 order-1 lg:order-2">
           <div className="space-y-4">
             <span className="font-mono text-[10px] font-black tracking-widest text-[#B2A490]">{content.sustainability?.subtitle}</span>
             <h2 className="text-3xl sm:text-4xl md:text-[3.2vw] font-formal font-bold leading-[1.25] tracking-[0.08em] md:tracking-[0.1em] text-ink">
               {content.sustainability?.titleLine1}<br /><span className="not-italic text-collision md:ml-12">{content.sustainability?.titleLine2}</span>
             </h2>
           </div>
           <p className="font-mono text-[12px] md:text-[14px] leading-relaxed tracking-tight text-ink/60 border-l-2 border-ink pl-8">
             {content.sustainability?.description}
           </p>
           <ul className="space-y-6 pt-8 border-t border-ink/10">
             {(content.sustainability?.features || []).map((item, index) => (
               <li key={index} className="font-mono text-[9px] md:text-[11px] tracking-[0.25em] flex items-center gap-4 text-ink/80">
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
};
