import React from "react";
import { Hero } from "./Hero";
import { ProductSlider } from "./ProductSlider";
import { InteractiveChain } from "./InteractiveChain";
import { AboutSection } from "./AboutSection";
import { SustainabilitySection } from "./SustainabilitySection";
import { ContactSection } from "./ContactSection";

export const Home: React.FC = () => (
  <main className="bg-bg-base overflow-x-hidden pt-20">
    <Hero />

    <section className="py-12 md:py-20 max-w-5xl mx-auto px-4 text-center">
      <span className="font-mono text-[10px] tracking-[0.4em] text-[#B2A490] block mb-6 font-bold">The Sincerity Philosophy</span>
      <h2 className="text-3xl md:text-[3.2vw] font-serif font-light leading-relaxed text-ink/85">
        "We believe luxury is a whisper, not a shout. True elegance resides in the organic irregularity of pure flax, the trace of human skill, and the quiet dignity of a fabric made to endure."
      </h2>
      <div className="w-12 h-px bg-collision mx-auto mt-12 mb-6" />
      <span className="font-mono text-[9px] tracking-widest text-ink/40">An Introductory Note By The Master Weaver</span>
    </section>

    <InteractiveChain />

    <AboutSection />

    <section className="pt-6 pb-16 md:pt-10 md:pb-24 animate-fade-in">
      <div className="px-4 md:px-12 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-[#121212] pb-4 gap-6">
          <h2 className="text-3xl sm:text-4xl md:text-[3.2vw] font-formal font-bold uppercase leading-[1.25] tracking-[0.08em] md:tracking-[0.1em] text-ink">
            Main <br /><span className="ml-8 md:ml-16">Collection</span>
          </h2>
         <p className="font-mono text-[9px] md:text-[11px] tracking-[0.35em] text-[#121212]/40 mb-1">European Linen — Blends — Prints — Since 1998</p>
      </div>
      <ProductSlider />
    </section>

    <SustainabilitySection />
    
    <ContactSection />
  </main>
);
