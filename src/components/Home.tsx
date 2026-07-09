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
      <span className="font-mono text-[10px] tracking-[0.4em] text-[#B2A490] block mb-6 font-bold uppercase">The Sincerity Philosophy</span>
      
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-2xl md:text-[2.2vw] font-serif font-light leading-relaxed text-ink/85">
          "One thread at a time. It’s a craft we’ve been learning, refining, and passing down for generations. Specializing in linen and linen-blend fabric production for over 30 years, our team has spent a lifetime growing in the same craft."
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 max-w-4xl mx-auto">
          <div className="space-y-2 text-center">
            <span className="font-mono text-xs md:text-[13px] tracking-widest text-ink font-bold block uppercase">Aunt Sun</span>
            <span className="font-serif text-xs md:text-sm text-ink/70 block leading-tight">Linen storage management for 33 years</span>
          </div>
          <div className="space-y-2 text-center">
            <span className="font-mono text-xs md:text-[13px] tracking-widest text-ink font-bold block uppercase">Aunt Cui</span>
            <span className="font-serif text-xs md:text-sm text-ink/70 block leading-tight">Linen production manager for 28 years</span>
          </div>
          <div className="space-y-2 text-center">
            <span className="font-mono text-xs md:text-[13px] tracking-widest text-ink font-bold block uppercase">Uncle Lu</span>
            <span className="font-serif text-xs md:text-sm text-ink/70 block leading-tight">Linen Production Coordinator for 28 years</span>
          </div>
          <div className="space-y-2 text-center">
            <span className="font-mono text-xs md:text-[13px] tracking-widest text-ink font-bold block uppercase">Peter Hu</span>
            <span className="font-serif text-xs md:text-sm text-ink/70 block leading-tight">Founded and led our team over 30 years</span>
          </div>
        </div>
      </div>

      <div className="w-12 h-px bg-collision mx-auto mt-16 mb-6" />
      <img src="/HeroSectionTL2.png" alt="An Introductory Note" className="mx-auto max-w-full h-auto max-h-[400px]" referrerPolicy="no-referrer" />
    </section>

    <InteractiveChain />

    <AboutSection />

    <section className="pt-6 pb-16 md:pt-10 md:pb-24 animate-fade-in">
      <div className="px-4 md:px-12 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-[#121212] pb-4 gap-6">
          <h2 className="text-3xl sm:text-4xl md:text-[3.2vw] font-formal font-bold uppercase leading-[1.25] tracking-[0.08em] md:tracking-[0.1em] text-ink">
            Main <br /><span className="ml-8 md:ml-16">Collection</span>
          </h2>
      </div>
      <ProductSlider />
    </section>

    <SustainabilitySection />
    
    <ContactSection />
  </main>
);
