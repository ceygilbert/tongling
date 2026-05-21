import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";
import { LOGO_URL } from "../data";

export const Footer: React.FC = () => (
  <footer className="px-4 md:px-12 py-24 md:py-32 border-t border-ink/10 bg-bg-base overflow-hidden relative">
    <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-24 md:gap-12 items-start h-full">
      <div className="md:col-span-4 space-y-12">
        <div className="group">
          <img 
            src={LOGO_URL} 
            alt="Tongling Sincerity" 
            className="h-12 md:h-16 w-auto object-contain mb-4 opacity-80 group-hover:opacity-100 transition-opacity"
            referrerPolicy="no-referrer"
          />
        </div>
        <p className="font-mono text-[12px] leading-relaxed tracking-tight text-ink/60 max-w-xs">
          Weaving tradition with modernity since 1998. Crafting the finest linen textiles with unwavering sincerity.
        </p>
        <div className="flex gap-8">
          <Instagram size={20} strokeWidth={1} className="hover:opacity-40 cursor-pointer transition-opacity" />
          <Mail size={20} strokeWidth={1} className="hover:opacity-40 cursor-pointer transition-opacity" />
        </div>
      </div>
      
      <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 md:gap-8">
        <div className="space-y-6">
          <h5 className="font-mono text-[10px] font-bold tracking-[0.3em] text-ink/30 border-b border-ink/10 pb-2">Archive</h5>
          <nav className="flex flex-col gap-4 font-mono text-[11px] md:text-[12px] tracking-tight">
            <Link to="/collections" className="hover:underline underline-offset-4">Pure Linen</Link>
            <Link to="/collections" className="hover:underline underline-offset-4">Blended</Link>
            <Link to="/collections" className="hover:underline underline-offset-4">Printed</Link>
            <Link to="/collections" className="hover:underline underline-offset-4">Striped</Link>
          </nav>
        </div>
        
        <div className="space-y-6">
          <h5 className="font-mono text-[10px] font-bold tracking-[0.3em] text-ink/30 border-b border-ink/10 pb-2">Explore</h5>
          <nav className="flex flex-col gap-4 font-mono text-[11px] md:text-[12px] tracking-tight">
            <Link to="/shop" className="hover:underline underline-offset-4">Shop All</Link>
            <Link to="/brand-story" className="hover:underline underline-offset-4">Our Story</Link>
            <a href="#" className="hover:underline underline-offset-4">Shipping</a>
            <a href="#" className="hover:underline underline-offset-4">Returns</a>
          </nav>
        </div>
        
        <div className="space-y-8">
          <h5 className="font-mono text-[10px] font-bold tracking-[0.3em] text-ink/30 border-b border-ink/10 pb-2">Join Us</h5>
          <div className="border-b border-ink">
            <input 
              type="email" 
              placeholder="Email address" 
              className="w-full bg-transparent font-mono text-[11px] py-4 focus:outline-none"
            />
          </div>
          <p className="font-mono text-[9px] tracking-widest text-ink/40 leading-relaxed">
            © 2026 Tongling Sincerity. <br />
            Crafted between Shanghai & Sydney.
          </p>
        </div>
      </div>
    </div>
  </footer>
);
