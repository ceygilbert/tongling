import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { BRANDS, getStoredStoryContent } from "../data";

export const BrandStory: React.FC = () => {
  const [content, setContent] = React.useState(getStoredStoryContent());
  React.useEffect(() => {
    const handleStorage = () => setContent(getStoredStoryContent());
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);
  return (

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
          <source src={content.hero.videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-ink/20" />
      </motion.div>
      
      <div className="relative z-10 text-center px-4">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-mono text-[10px] md:text-[12px] tracking-[0.6em] text-bg-base/60 block mb-6"
        >
          {content.hero.subtitle}
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-[12vw] font-serif text-bg-base leading-[0.8] tracking-[-0.04em] font-black"
        >
          {content.hero.titleLine1} <br />{content.hero.titleLine2}
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
            <span className="font-mono text-[10px] tracking-[0.4em] text-collision font-bold">{content.chapter1.label}</span>
            <h2 className="text-5xl md:text-7xl font-serif tracking-tight text-ink font-black">{content.chapter1.titleLine1} <br />{content.chapter1.titleLine2}</h2>
          </div>
          <div className="space-y-8 border-l border-ink/10 pl-8">
            <p className="font-serif text-xl md:text-2xl leading-relaxed text-ink/80">
              {content.chapter1.desc1}
            </p>
            <p className="font-mono text-[12px] md:text-[14px] leading-relaxed tracking-[0.1em] text-ink/50 max-w-md">
              {content.chapter1.desc2}
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
              src={content.chapter1.imageUrl} 
              alt="Tongling Workshop" 
              className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-12 -right-12 hidden md:block w-48 h-48 border border-ink/5 p-4 bg-bg-base/80 backdrop-blur-sm">
            <div className="w-full h-full border border-ink/10 flex items-center justify-center text-center p-4">
              <span className="font-serif text-xs tracking-widest text-ink/40 leading-relaxed">{content.chapter1.imageBadge.split("\n").map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}</span>
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
                src={content.chapter2.imageUrl} 
                alt="Production Detail" 
                className="w-full h-full object-cover grayscale brightness-75"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
          <div className="md:col-span-2 space-y-16">
            <div className="max-w-2xl">
              <span className="font-mono text-[10px] tracking-[0.4em] text-ink/30 block mb-6">{content.chapter1.label}I</span>
              <h2 className="text-4xl md:text-6xl font-serif text-ink leading-none mb-12 font-black">{content.chapter2.titleLine1} <br />{content.chapter2.titleLine2}</h2>
              <p className="font-mono text-[13px] md:text-[15px] leading-loose tracking-[0.1em] text-ink/70 font-bold">
                {content.chapter2.desc}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-ink/5 pt-12">
               <div>
                 <h4 className="font-mono text-[10px] font-bold tracking-widest mb-4">{content.chapter2.point1Title}</h4>
                 <p className="font-mono text-[11px] text-ink/40 leading-relaxed">{content.chapter2.point1Desc}</p>
               </div>
               <div>
                 <h4 className="font-mono text-[10px] font-bold tracking-widest mb-4">{content.chapter2.point2Title}</h4>
                 <p className="font-mono text-[11px] text-ink/40 leading-relaxed">{content.chapter2.point2Desc}</p>
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
              src={content.chapter3.imageUrl} 
              alt="Lab Research" 
              className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-all duration-[2s]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
             <span className="font-mono text-[10px] tracking-[0.6em] text-bg-base/40 mb-8 block font-bold">{content.chapter1.label}II</span>
             <h2 className="text-5xl md:text-[8vw] font-serif text-bg-base tracking-tight leading-none pointer-events-none font-black">
               {content.chapter3.titleLine1} <br />{content.chapter3.titleLine2}
             </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <h3 className="text-3xl font-serif text-ink mb-8 font-black">{content.chapter3.header}</h3>
          </div>
          <div className="md:col-span-8">
            <p className="font-mono text-[14px] md:text-[18px] leading-relaxed text-ink/80 mb-12 font-bold">
              {content.chapter3.desc}
            </p>
            <div className="h-px bg-ink/10 w-full mb-12"></div>
            <div className="flex flex-wrap gap-x-20 gap-y-8">
              <div className="space-y-2">
                <span className="block font-mono text-[10px] text-ink/30 tracking-widest border-b border-ink/5 pb-1 font-bold">{content.chapter3.stat1Label}</span>
                <span className="text-3xl font-serif text-ink font-bold">{content.chapter3.stat1Value}</span>
              </div>
              <div className="space-y-2">
                <span className="block font-mono text-[10px] text-ink/30 tracking-widest border-b border-ink/5 pb-1 font-bold">{content.chapter3.stat2Label}</span>
                <span className="text-3xl font-serif text-ink font-bold">{content.chapter3.stat2Value}</span>
              </div>
              <div className="space-y-2">
                <span className="block font-mono text-[10px] text-ink/30 tracking-widest border-b border-ink/5 pb-1 font-bold">{content.chapter3.stat3Label}</span>
                <span className="text-3xl font-serif text-ink font-bold">{content.chapter3.stat3Value}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {content.chapter3.stat3Label} Marquee Section */}
      <section className="py-16 md:py-20 border-t border-ink/5 -mx-4 md:-mx-12 overflow-hidden bg-[#f9f8f4]">
        <div className="px-4 md:px-12 mb-12 flex justify-between items-end">
          <div>
            <span className="font-mono text-[10px] tracking-[0.4em] text-ink/30 block mb-2 font-bold">Global Trust</span>
            <h3 className="text-2xl font-serif text-ink font-black">Selected {content.chapter3.stat3Label}</h3>
          </div>
          <p className="hidden md:block font-mono text-[10px] text-ink/40 tracking-widest font-bold">Established Relations Since 2005</p>
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
                  <span className="font-serif font-bold text-xl text-ink">{brand.name}</span>
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
          <img src={content.finalQuote.imageUrl} alt="Detail" className="w-24 h-24 rounded-full object-cover mx-auto mb-16 grayscale" referrerPolicy="no-referrer" />
          <p className="text-2xl md:text-4xl font-serif text-ink/65 leading-relaxed max-w-4xl mx-auto mb-12">
            {content.finalQuote.quote}
          </p>
          <div className="w-12 h-[1px] bg-collision mx-auto mb-6"></div>
          <span className="font-mono text-[10px] tracking-[0.4em] text-ink font-bold">{content.finalQuote.author}</span>
        </motion.div>
      </section>
    </div>
  </div>
);
};

export default BrandStory;
