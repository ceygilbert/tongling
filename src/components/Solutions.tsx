import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { getStoredSolutionsContent } from "../data";
import { ArrowRight, Sparkles, Wind, Palette, Layers, Globe, Sliders, Check } from "lucide-react";

export const Solutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("apparel");

  const [content, setContent] = React.useState(getStoredSolutionsContent());
  React.useEffect(() => {
    const handleStorage = () => setContent(getStoredSolutionsContent());
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const { colorFeatures, supportingServices, finishingTechniques, applications, yarnSpecs, pfdSpecs, capabilities, bespokeSolutions, heritage } = content;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div id="solutions-root" className="pt-24 md:pt-[120px] pb-32 px-4 md:px-12 relative bg-bg-base min-h-screen text-ink selection:bg-collision selection:text-bg-base">
      <div className="max-w-7xl mx-auto">
        
        {/* HERO SECTION / Header INTRO */}
        <div className="pt-8 md:pt-16 pb-16 border-b border-ink/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-6">
              <span className="font-mono text-[10px] md:text-[11px] tracking-[0.4em] text-[#B2A490] font-black uppercase block">
                Since 2005 — Tongling Quality
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-[4vw] font-formal font-bold uppercase leading-[1.1] tracking-[0.06em] text-ink">
                From European Flax <br />
                <span className="text-collision">To Finished Fabric</span>
              </h1>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="flex items-center gap-4 text-[10px] font-mono tracking-[0.3em] text-ink/30 font-bold uppercase">
                <span>Series No. 02</span>
                <span className="w-12 h-[1px] bg-ink/10"></span>
                <span>Established 30Y</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-12 md:mt-20 pt-8 border-t border-ink/5">
            <div className="md:col-span-2 space-y-6">
              <p className="font-serif text-lg md:text-xl lg:text-2xl text-ink leading-relaxed">
                For over 30 years, Tongling Sincerity Linen has specialised in the manufacturing and development of premium linen fabrics.
              </p>
              <p className="font-sans text-[14px] md:text-[15px] leading-relaxed text-ink/70">
                Using carefully selected flax sourced from Northern France and Belgium, we control every stage of production — from yarn preparation and weaving through to dyeing, finishing and fabric development. Our experience spans apparel, home textiles, hospitality and custom fabric programs, supplying customers worldwide with both finished fabrics and ready to use materials.
              </p>
            </div>
            <div className="flex flex-col justify-between p-6 bg-white/40 border border-ink/5 rounded-sm backdrop-blur-sm">
              <p className="font-mono text-xs text-ink/60 leading-relaxed italic">
                "Today, we continue to combine traditional linen expertise with modern manufacturing technology to create fabrics that deliver consistency, performance and timeless natural beauty."
              </p>
              <div className="mt-6 pt-4 border-t border-ink/5">
                <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-[#B2A490] uppercase block">Tongling Weaver Consensus</span>
              </div>
            </div>
          </div>
        </div>

        {/* SUB NAVIGATION TAB BAR */}
        <div className="sticky top-[72px] z-20 bg-bg-base/95 backdrop-blur-md py-4 border-b border-ink/10 my-4 flex items-center overflow-x-auto no-scrollbar scroll-smooth">
          <div className="flex gap-4 sm:gap-6 pr-4 whitespace-nowrap">
            {["apparel", "home-textiles", "yarn-pfd", "capabilities", "heritage"].map((tab) => (
              <button
                key={tab}
                id={`tab-btn-${tab}`}
                onClick={() => {
                  setActiveTab(tab);
                  scrollToSection(tab);
                }}
                className={`font-mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase font-bold px-3 py-1.5 transition-all rounded-sm ${
                  activeTab === tab 
                    ? "bg-ink text-bg-base" 
                    : "text-ink/50 hover:text-ink hover:bg-ink/5"
                }`}
              >
                {tab.replace("-", " & ")}
              </button>
            ))}
          </div>
        </div>

        {/* APPAREL SECTION */}
        <section id="apparel" className="py-20 md:py-28 border-b border-ink/10 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Header Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-[10px] tracking-widest text-[#B2A490] font-black uppercase block">Chapter I</span>
                <h2 className="text-3xl md:text-5xl font-formal font-bold uppercase tracking-[0.06em] text-ink">
                  Apparel <br />
                  <span className="text-collision normal-case font-serif italic text-3xl md:text-4xl block mt-2">Made for Fashion</span>
                </h2>
              </div>
              <p className="font-serif text-lg leading-relaxed text-ink/80 pt-4">
                Linen behaves differently depending on how it is worn, washed and constructed. For this reason, every fabric is developed according to its final application.
              </p>
              <p className="font-sans text-sm leading-relaxed text-ink/60 pl-4 border-l-2 border-collision">
                From lightweight shirting and dresses to structured jackets and workwear, we carefully adjust yarn count, weave construction, dyeing methods and finishing techniques to achieve the desired balance of drape, texture, softness and shrinkage control.
              </p>

              {/* Development services */}
              <div className="pt-8 space-y-4">
                <h4 className="font-mono text-[10px] tracking-[0.3em] font-black text-ink uppercase">Supporting Product Development</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {supportingServices.map((service, index) => (
                    <div id={`apparel-service-${index}`} key={service.name} className="p-4 bg-white/60 border border-ink/5 rounded-sm hover:border-[#B2A490] transition-colors">
                      <span className="font-mono text-[9px] text-[#B2A490] font-bold block mb-1">0{index+1} / DESIGN TOOL</span>
                      <p className="font-sans font-medium text-xs text-ink uppercase tracking-wider">{service.name}</p>
                      <p className="font-mono text-[9px] text-ink/40 mt-1">{service.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* COLOR EXPERTISE COL */}
            <div className="lg:col-span-7 bg-[#1A1A1A] text-[#FAF9F6] p-8 md:p-12 rounded-sm space-y-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-collision/10 rounded-full blur-[120px] pointer-events-none"></div>
              
              <div className="space-y-4 relative z-10">
                <span className="font-mono text-[10px] tracking-[0.4em] text-collision font-black uppercase">Color Expertise</span>
                <h3 className="text-2xl md:text-3xl font-formal font-bold uppercase tracking-wider">Precision Shade Crafting</h3>
                <p className="font-serif text-sm md:text-base text-white/70 max-w-xl leading-relaxed">
                  Colour is one of the most important elements in fabric development. While optical white and natural flax remain timeless classics, custom colour development has become one of our core strengths.
                </p>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                {colorFeatures.map((feat) => (
                  <div id={`feat-${feat.num}`} key={feat.num} className="border-t border-white/10 pt-4 space-y-1">
                    <span className="font-mono text-xs text-collision font-bold block">{feat.num}</span>
                    <h5 className="font-sans font-black text-xs uppercase tracking-wider text-[#FAF9F6]">{feat.name}</h5>
                    <p className="font-mono text-[10px] leading-relaxed text-white/50">{feat.desc}</p>
                  </div>
                ))}
              </div>

              {/* Airflow tech segment */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-sm space-y-4 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-collision/25 rounded-full">
                    <Wind className="w-4 h-4 text-collision" />
                  </div>
                  <h4 className="font-serif text-[15px] font-bold">Advanced Airflow Dyeing Technology</h4>
                </div>
                <p className="font-mono text-[11px] leading-relaxed text-white/60">
                  To further improve colour consistency, we utilise temperature and humidity control systems throughout production, reducing variation and ensuring repeatability from laboratory development to bulk production. Advanced airflow dyeing technology allows fabric to circulate freely while atomised dye liquor is evenly distributed throughout the material, delivering excellent colour penetration and superior levelness.
                </p>
              </div>
            </div>

          </div>
        </section>


        {/* HOUSEHOLD & HOME TEXTILES SECTION */}
        <section id="home-textiles" className="py-20 md:py-28 border-b border-ink/10 scroll-mt-24">
          <div className="space-y-12">
            
            {/* Split layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-gray-100 border border-ink/5">
                  <img 
                    src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80" 
                    alt="Fine Linen Bedding Home Textiles" 
                    className="w-full h-full object-cover grayscale brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 font-mono text-[10px] tracking-[0.3em] text-white uppercase font-black">
                    Cozy Weft — Living Collection Image
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
                <span className="font-mono text-[10px] tracking-widest text-[#B2A490] font-black uppercase block">Chapter II</span>
                <h2 className="text-3xl md:text-5xl font-formal font-bold uppercase tracking-[0.06em] text-ink">
                  Household <br />
                  <span className="text-collision normal-case font-serif italic text-3xl md:text-4xl block mt-2">& Home Textiles</span>
                </h2>
                <div className="space-y-4">
                  <h3 className="font-mono text-[11px] tracking-[0.3em] font-black text-ink uppercase">Crafted for Comfort</h3>
                  <p className="font-serif text-lg leading-relaxed text-ink/80">
                    In home textiles, colour is only part of the story. Touch, softness and comfort are equally important.
                  </p>
                  <p className="font-sans text-sm leading-relaxed text-ink/60">
                    Our finishing expertise allows us to create linen fabrics with exceptional softness while preserving the natural character and breathability of flax. We offer a wide range of finishing techniques designed specifically for bedding, decorative textiles and hospitality applications.
                  </p>
                </div>
              </div>
            </div>

            {/* Techniques Grid */}
            <div className="pt-8">
              <div className="mb-8 border-b border-ink/10 pb-4">
                <h4 className="font-mono text-[11px] tracking-[0.3em] text-[#B2A490] font-black uppercase">Washing & Finishing Techniques</h4>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {finishingTechniques.map((tech, i) => (
                  <div id={`tech-card-${i}`} key={tech.name} className="p-6 bg-white/40 border border-ink/10 rounded-sm hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <span className="font-mono text-[9px] text-collision font-black">METHOD 0{i+1}</span>
                      <h5 className="font-sans font-black text-sm uppercase tracking-wider text-ink">{tech.name}</h5>
                      <p className="font-mono text-[11px] leading-relaxed text-ink/70">{tech.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Chips Grid */}
            <div className="p-8 bg-white/50 border border-ink/5 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-1 max-w-md">
                <span className="font-mono text-[9px] text-[#B2A490] font-black uppercase">Standard Applications</span>
                <h4 className="font-serif font-black text-lg text-ink">Aura of Sincerity in Every Room</h4>
                <p className="font-mono text-[10px] leading-relaxed text-ink/50">Combining premium comfort, industrial durability and timeless organic aesthetics.</p>
              </div>
              <div className="flex flex-wrap gap-2 max-w-2xl">
                {applications.map((app) => (
                  <span key={app} className="px-3.5 py-1.5 bg-ink text-bg-base font-mono text-[10px] tracking-wider uppercase rounded-full">
                    {app}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>


        {/* YARN & PFD SOLUTIONS */}
        <section id="yarn-pfd" className="py-20 md:py-28 border-b border-ink/10 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-4 space-y-6">
              <span className="font-mono text-[10px] tracking-widest text-[#B2A490] font-black uppercase block">Chapter III</span>
              <h2 className="text-3xl md:text-5xl font-formal font-bold uppercase tracking-[0.06em] text-ink">
                Yarn & <br />
                <span className="text-collision normal-case font-serif italic text-3xl md:text-4xl block mt-2">PFD Solutions</span>
              </h2>
              <div className="space-y-4">
                <h3 className="font-mono text-[11px] tracking-[0.3em] font-black text-ink/80 uppercase">Direct From Our Mill</h3>
                <p className="font-serif text-base leading-relaxed text-ink/70">
                  In addition to finished fabrics, we also manufacture and supply premium linen yarns and PFD (Prepared For Dyeing) fabrics for customers who require greater flexibility in their own local dyeing, printing and finishing programs.
                </p>
              </div>

              <div className="p-5 bg-collision/5 border border-collision/15 rounded-sm">
                <h5 className="font-sans font-bold text-xs text-collision uppercase tracking-wider mb-2">RUNNING QUALITIES SUPPORT</h5>
                <p className="font-mono text-[11px] leading-relaxed text-ink/75">
                  Selected constructions are available as stock supported running qualities, allowing shorter lead times and faster bespoke product dev timelines for fast-pacing luxury houses.
                </p>
              </div>
            </div>

            {/* TWO LARGE PANES ON RIGHT */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Yarn Pane */}
              <div className="bg-white border border-ink/10 rounded-sm p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-ink/5 pb-4">
                    <span className="font-mono text-[10px] font-bold text-[#B2A490] uppercase tracking-widest">Type A</span>
                    <span className="font-mono text-xs text-ink/30">01 / YARNS</span>
                  </div>
                  <h4 className="text-2xl font-formal font-bold uppercase text-ink">Natural Linen Yarns</h4>
                  <p className="font-mono text-xs leading-relaxed text-ink/65">
                    Produced exclusively using premium high-grade European flax fibres, our pure yarns offer industrial weavers and knitters absolute thickness stability.
                  </p>
                  
                  <div className="pt-4 space-y-3">
                    <span className="font-mono text-[10px] text-ink/40 tracking-wider block uppercase">Perfect For Weaving & Knitting</span>
                    <ul className="space-y-2">
                      {yarnSpecs.map((spec, index) => (
                        <li id={`yarn-spec-${index}`} key={spec} className="flex items-start gap-2.5 font-mono text-[10px] text-ink/85">
                          <Check className="w-3 h-3 text-[#B2A490] shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 pt-4 border-t border-ink/5">
                  <span className="font-mono text-[10px] font-bold tracking-[0.15em] text-[#B2A490] uppercase">Available for weave samples</span>
                </div>
              </div>

              {/* PFD Pane */}
              <div className="bg-white border border-ink/10 rounded-sm p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-ink/5 pb-4">
                    <span className="font-mono text-[10px] font-bold text-[#B2A490] uppercase tracking-widest">Type B</span>
                    <span className="font-mono text-xs text-ink/30">02 / INTERMEDIATE</span>
                  </div>
                  <h4 className="text-2xl font-formal font-bold uppercase text-ink">PFD Fabrics</h4>
                  <p className="font-mono text-xs leading-relaxed text-ink/65">
                    Prepared For Dyeing (PFD) fabrics developed specifically to react flawlessly with dye elements, minimizing pre-wash efforts on customer end.
                  </p>
                  
                  <div className="pt-4 space-y-3">
                    <span className="font-mono text-[10px] text-ink/40 tracking-wider block uppercase font-bold">Applications & Processes</span>
                    <ul className="space-y-2">
                      {pfdSpecs.map((spec, index) => (
                        <li id={`pfd-spec-${index}`} key={spec} className="flex items-start gap-2.5 font-mono text-[10px] text-ink/85">
                          <Check className="w-3 h-3 text-[#B2A490] shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-ink/5">
                  <span className="font-mono text-[10px] font-bold tracking-[0.15em] text-[#B2A490] uppercase">Uniform Dyeing Readiness guaranteed</span>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* MANUFACTURING CAPABILITIES (Weaving, Dyeing, Printing) */}
        <section id="capabilities" className="py-20 md:py-28 border-b border-ink/10 scroll-mt-24">
          <div className="space-y-12">
            
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="font-mono text-[10px] tracking-[0.4em] text-[#B2A490] font-black uppercase">Chapter IV</span>
              <h2 className="text-3xl md:text-5xl font-formal font-bold uppercase tracking-[0.06em] text-ink">
                Manufacturing Capabilities
              </h2>
              <p className="font-mono text-xs md:text-sm tracking-tight text-ink/50 leading-relaxed uppercase font-bold">
                From Yarn to Finished Fabric — Dedicated Tech Line
              </p>
              <div className="w-12 h-px bg-collision mx-auto"></div>
            </div>

            {/* Grid of details */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((cap, idx) => (
                <div id={`cap-item-${idx}`} key={cap.title} className="bg-white border border-ink/10 rounded-sm overflow-hidden group flex flex-col justify-between h-full">
                  <div>
                    {/* Visual box */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                      <img 
                        src={cap.img} 
                        alt={cap.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 duration-700 transition-all"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4 bg-ink/90 text-bg-base font-mono text-[10px] px-2.5 py-1 tracking-widest font-black">
                        0{idx+1}
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-6 md:p-8 space-y-3">
                      <h4 className="text-xl font-formal font-bold uppercase text-ink tracking-wider">{cap.title}</h4>
                      <p className="font-mono text-[11px] leading-relaxed text-ink/65">{cap.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* bottom banner: custom development */}
            <div className="p-8 md:p-12 bg-white border border-ink/15 rounded-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-collision/5 to-transparent pointer-events-none"></div>
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-3">
                  <span className="font-mono text-[10px] text-collision font-black tracking-widest block uppercase">Bespoke Mill Work</span>
                  <h3 className="text-2xl font-formal font-bold uppercase tracking-wider text-ink">Custom Fabric Development</h3>
                  <p className="font-sans text-xs leading-relaxed text-ink/60">
                    We work closely with fashion houses, hospitality programs, and high-end distributors worldwide on bespoke compositions to custom-dye/weave specifications.
                  </p>
                </div>
                <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {bespokeSolutions.map((sol, index) => (
                    <div id={`bespoke-sol-${index}`} key={sol} className="p-4 bg-bg-base/60 border border-ink/5 rounded-sm text-center">
                      <span className="font-mono text-xs text-collision font-black block mb-1">✓</span>
                      <p className="font-mono text-[10px] uppercase font-bold text-ink leading-tight tracking-[0.05em]">{sol}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* {heritage.title} SECTION */}
        <section id="heritage" className="py-20 md:py-32 scroll-mt-24 text-center space-y-10 relative overflow-hidden bg-[#1A1A1A] text-bg-base rounded-sm px-6 md:px-12">
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/40 pointer-events-none"></div>
          
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <span className="font-mono text-[11px] tracking-[0.5em] text-collision uppercase font-bold">{heritage.titleLine1}</span>
            <h2 className="text-3xl md:text-5xl font-formal font-bold uppercase tracking-widest leading-normal">
              {heritage.title}
            </h2>
            <div className="w-16 h-px bg-collision mx-auto my-4"></div>
            
            <p className="font-serif text-lg leading-relaxed text-bg-base/80">
              {heritage.desc1}
            </p>
            <p className="font-mono text-xs leading-relaxed text-bg-base/60 max-w-xl mx-auto pt-2">
              {heritage.desc2}
            </p>

            <div className="pt-8">
              <Link to="/contact" className="inline-flex items-center gap-3 bg-bg-base text-ink font-mono text-[10px] md:text-[11px] tracking-[0.25em] font-black uppercase px-8 py-4 hover:bg-collision hover:text-bg-base rounded-sm transition-all shadow-md group">
                Connect Showroom
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Solutions;
