import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export const Collections: React.FC = () => {
  const archives = [
    { title: "Piece Dyed", count: "01", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80" },
    { title: "Yarn Dyed", count: "02", img: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=80" },
    { title: "Printed", count: "03", img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80" },
    { title: "Artisan", count: "04", img: "https://images.unsplash.com/photo-1554188248-986adbb73be4?auto=format&fit=crop&w=1200&q=80" }
  ];

  return (
    <div className="pt-24 md:pt-32 pb-32 px-4 md:px-12 relative bg-bg-base min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 pt-12 border-b border-ink/5 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-serif tracking-tight text-ink mb-4 font-black">Collection</h2>
              <p className="font-mono text-[10px] md:text-[12px] tracking-[0.2em] text-ink/60 leading-relaxed max-w-lg font-bold">
                A curated selection of our most significant fabric developments, spanning three decades of weaving excellence.
              </p>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-mono tracking-[0.3em] text-ink/30 font-bold">
              <span>Series No. 01</span>
              <span className="w-8 h-[1px] bg-ink/10"></span>
              <span>2024</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16 items-start">
          {archives.map((item, i) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`group ${i % 2 === 1 ? 'mt-12 md:mt-0' : ''} ${i % 3 === 1 ? 'md:mt-24 lg:mt-0' : i % 3 === 2 ? 'md:mt-12 lg:mt-0' : ''} ${i % 4 === 1 ? 'lg:mt-20' : i % 4 === 2 ? 'lg:mt-8' : i % 4 === 3 ? 'lg:mt-32' : ''}`}
            >
              <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden mb-6 transform group-hover:-rotate-0.5 transition-transform duration-700 bg-bg-white shadow-sm"
                   style={{ 
                     clipPath: "polygon(0% 0%, 100% 0%, 100% 98%, 98.75% 100%, 97.5% 98%, 96.25% 100%, 95% 98%, 93.75% 100%, 92.5% 98%, 91.25% 100%, 90% 98%, 88.75% 100%, 87.5% 98%, 86.25% 100%, 85% 98%, 83.75% 100%, 82.5% 98%, 81.25% 100%, 80% 98%, 78.75% 100%, 77.5% 98%, 76.25% 100%, 75% 98%, 73.75% 100%, 72.5% 98%, 71.25% 100%, 70% 98%, 68.75% 100%, 67.5% 98%, 66.25% 100%, 65% 98%, 63.75% 100%, 62.5% 98%, 61.25% 100%, 60% 98%, 58.75% 100%, 57.5% 98%, 56.25% 100%, 55% 98%, 53.75% 100%, 52.5% 98%, 51.25% 100%, 50% 98%, 48.75% 100%, 47.5% 98%, 46.25% 100%, 45% 98%, 43.75% 100%, 42.5% 98%, 41.25% 100%, 40% 98%, 38.75% 100%, 37.5% 98%, 36.25% 100%, 35% 98%, 33.75% 100%, 32.5% 98%, 31.25% 100%, 30% 98%, 28.75% 100%, 27.5% 98%, 26.25% 100%, 25% 100%, 23.75% 100%, 22.5% 98%, 21.25% 100%, 20% 98%, 18.75% 100%, 17.5% 98%, 16.25% 100%, 15% 98%, 13.75% 100%, 12.5% 98%, 11.25% 100%, 10% 98%, 8.75% 100%, 7.5% 98%, 6.25% 100%, 5% 98%, 3.75% 100%, 2.5% 98%, 1.25% 100%, 0% 98%)"
                   }}>
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-ink/90 text-bg-base font-mono text-[9px] px-2 py-1 tracking-widest font-black">{item.count}</div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-serif tracking-tight text-ink group-hover:underline underline-offset-4 decoration-1 font-black">{item.title}</h3>
                <Link to="/shop" className="inline-flex items-center gap-2 group/link">
                  <span className="font-mono text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-ink/40 group-hover/link:text-collision transition-colors">Explore Series</span>
                  <div className="w-4 h-[1px] bg-ink/20 group-hover/link:w-8 group-hover/link:bg-collision transition-all"></div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Collections;
