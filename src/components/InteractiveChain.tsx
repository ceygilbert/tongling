import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export const InteractiveChain: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Yarn Spinning",
      detail: "Finely Combed Selection",
      desc: "Sourced exclusively from the premier wet-spun linen mills of Northern France and Belgium, our yarns are carefully sorted to ensure maximum tensile strength, minimal impurities, and a clean, uniform thread density perfect for high-speed looms.",
      image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Weaving Techniques",
      detail: "High-Tension Precision",
      desc: "Our state-of-the-art rapier looms operate under custom-monitored humidity and temperature coordinates. We weave both premium plain-weave fabrics and complex yarn-dyed stripes with perfectly tailored selvedges.",
      image: "https://images.unsplash.com/photo-1558051815-0f18e64e6280?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Dyeing & Printing",
      detail: "Eco-Certified Kitchen",
      desc: "Using low-liquor ratio dyeing technologies and premium Swiss dye formulas, we achieve multi-layered, deep color depths and complex printed patterns while strictly protecting the raw fiber's breathability and durability.",
      image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Premium Finishing",
      detail: "Signature Soft Touch",
      desc: "The defining stage. From natural local stone washing to bio-enzyme relaxed-crimp treatments and delicate anti-wrinkle press finishes, we transform the hand-feel into a fluid drape and textured comfort.",
      image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <section className="px-4 md:px-12 py-16 md:py-24 border-b border-ink/10 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="md:col-span-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="h-[1px] w-12 bg-collision" />
              <span className="font-mono text-[10px] md:text-[11px] tracking-[0.5em] text-ink/40 font-bold">The In-House Loom Initiative</span>
            </div>
          <h2 className="text-4xl md:text-5xl font-ivar font-black tracking-[-0.05em] leading-[0.95] text-ink mb-2">
            Production
          </h2>
        </div>

        {/* Interactive Steps List */}
        <div className="lg:col-span-6 space-y-8 -mt-8 sm:-mt-10 lg:-mt-12">
          <p className="font-serif text-lg md:text-xl leading-relaxed text-ink/80 border-l-2 border-ink pl-8 mb-8">
            We deliver an entirely vertical, high-control supply chain spanning initial fiber combing to bespoke textile finishing, guaranteeing uncompromised authenticity.
          </p>

          <div className="space-y-4">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.title}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-6 md:p-8 border-b border-ink/10 flex flex-col gap-3 transition-all ${
                    isActive ? "bg-bg-base shadow-lg pl-8 border-l-2 border-l-ink" : "hover:bg-bg-base/30 hover:pl-4"
                  }`}
                >
                  <div className="flex justify-between items-center w-full">
                    <span className="font-mono text-[10px] md:text-[11px] tracking-[0.3em] font-bold text-ink/40">
                      Phase {String(idx + 1).padStart(2, '0')}
                    </span>
                    {isActive && (
                      <span className="font-mono text-[9px] bg-ink text-bg-base px-2 py-0.5 tracking-wider font-bold">
                        Active View
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-2xl tracking-tight text-ink font-bold">
                    {step.title}
                  </h3>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-sm font-mono text-ink/65 tracking-wide leading-relaxed pt-2 space-y-2 border-t border-ink/5 mt-2"
                    >
                      <span className="text-collision font-bold block text-[10px] tracking-widest">
                        {step.detail}
                      </span>
                      <p className="text-[11px] md:text-[12px] leading-relaxed select-text font-normal normal-case">
                        {step.desc}
                      </p>
                    </motion.div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Large Dynamic Visual */}
        <div className="lg:col-span-6">
          <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] bg-gray-100 overflow-hidden shadow-2xl border border-ink/5">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeStep}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.8 }}
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                className="w-full h-full object-cover grayscale brightness-95"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
            <div className="absolute top-4 right-4 bg-bg-base/95 backdrop-blur-sm px-4 py-2 border border-ink/5 text-[9px] font-mono tracking-[0.2em] font-bold">
              Tongling Labs No. 0{activeStep + 1}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
