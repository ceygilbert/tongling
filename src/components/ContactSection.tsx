import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitted(true);
  };

  return (
    <section className="px-4 md:px-12 py-20 md:py-28 bg-[#121212] text-[#FAF9F6] relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none -z-0" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10 items-start">
        {/* Left: Branding & Info */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-6">
            <span className="font-mono text-[10px] tracking-[0.4em] text-[#B2A490] font-bold block">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[3.2vw] font-formal font-bold uppercase leading-[1.25] tracking-[0.08em] md:tracking-[0.1em]">
              Global<br />
              <span className="not-italic text-white/30">Inquiries</span>
            </h2>
            <p className="font-serif text-lg leading-relaxed text-[#FAF9F6]/60 max-w-sm">
              We welcome direct partner correspondence. Whether discussing bulk fabrics, custom weave developments, or private showroom visits, our team responds with care.
            </p>
          </div>

          <div className="space-y-6 pt-10 border-t border-white/10 font-mono text-[11px] tracking-wider text-[#FAF9F6]/75">
            <div className="space-y-2">
              <span className="text-[#B2A490] text-[9px] block">General & Wholesale</span>
              <a href="mailto:info@tonglingsinceritylinen.com" className="font-serif text-lg md:text-xl hover:text-[#B2A490] transition-colors block lowercase truncate">
                info@tonglingsinceritylinen.com
              </a>
            </div>
            <div className="space-y-2">
              <span className="text-[#B2A490] text-[9px] block">Head Office Address</span>
              <p className="font-serif text-[13px] text-[#FAF9F6]/60 leading-relaxed normal-case">
                Sincerity Linen AU <br />
                Sincerity Linen China｜15/F, B7 Block, Beidou Star City, Tongguan District, Tongling City, Anhui Province, China 244000
              </p>
            </div>
          </div>
        </div>

        {/* Right: Clean, Ultra-Minimal Form */}
        <div className="lg:col-span-7">
          <div className="w-full bg-[#1C1C1C] border border-white/5 p-8 md:p-12 shadow-2xl rounded-[2px] min-h-[460px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  <div className="border-b border-white/10 pb-4">
                    <h3 className="font-serif text-xl font-bold tracking-tight text-[#FAF9F6]">Contact Form</h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Name */}
                    <div className={`space-y-2 border-b transition-colors duration-300 pb-2 ${isFocused === "name" ? "border-[#B2A490]" : "border-white/10"}`}>
                      <label className="font-mono text-[9px] tracking-[0.2em] text-[#FAF9F6]/40 block font-bold">
                        Your Name
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        onFocus={() => setIsFocused("name")}
                        onBlur={() => setIsFocused(null)}
                        placeholder="John Doe"
                        className="w-full bg-transparent border-none focus:outline-none font-serif text-lg text-[#FAF9F6] placeholder-white/30"
                      />
                    </div>

                    {/* Email */}
                    <div className={`space-y-2 border-b transition-colors duration-300 pb-2 ${isFocused === "email" ? "border-[#B2A490]" : "border-white/10"}`}>
                      <label className="font-mono text-[9px] tracking-[0.2em] text-[#FAF9F6]/40 block font-bold">
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        onFocus={() => setIsFocused("email")}
                        onBlur={() => setIsFocused(null)}
                        placeholder="john@example.com"
                        className="w-full bg-transparent border-none focus:outline-none font-serif text-lg text-[#FAF9F6] placeholder-white/30"
                      />
                    </div>

                    {/* Message */}
                    <div className={`space-y-2 border-b transition-colors duration-300 pb-2 ${isFocused === "message" ? "border-[#B2A490]" : "border-white/10"}`}>
                      <label className="font-mono text-[9px] tracking-[0.2em] text-[#FAF9F6]/40 block font-bold">
                        Your Message
                      </label>
                      <textarea 
                        rows={2} 
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        onFocus={() => setIsFocused("message")}
                        onBlur={() => setIsFocused(null)}
                        placeholder="How can we help you?"
                        className="w-full bg-transparent border-none focus:outline-none font-serif text-base text-[#FAF9F6] placeholder-white/30 resize-none leading-relaxed"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-4 bg-[#FAF9F6] text-ink font-mono font-bold text-[11px] tracking-[0.3em] hover:bg-[#FAF9F6]/90 active:scale-[0.99] transition-all border border-transparent text-center shadow"
                    >
                      Send Message
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="submitted"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center space-y-6 py-8"
                >
                  <div className="w-12 h-12 rounded-full bg-[#B2A490]/10 border border-[#B2A490]/20 flex items-center justify-center mx-auto mb-2">
                    <span className="font-serif text-lg text-[#B2A490] font-bold">s</span>
                  </div>
                  
                  <div className="space-y-2">
                    <span className="font-mono text-[9px] tracking-[0.3em] text-[#B2A490] font-bold">Thank You</span>
                    <h3 className="font-serif text-2xl text-[#FAF9F6] font-bold">Message Received</h3>
                  </div>

                  <p className="font-serif text-base text-[#FAF9F6]/75 leading-relaxed max-w-sm mx-auto">
                    "Thank you, <span className="text-[#FAF9F6] font-semibold">{formData.name}</span>. We have received your inquiry. A representative from our team will email you at <span className="text-white font-medium">{formData.email}</span> within 24 hours."
                  </p>

                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="mt-6 px-6 py-2.5 border border-white/10 text-white/50 font-mono text-[9px] tracking-widest hover:border-white/30 hover:text-white transition-all bg-transparent"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
