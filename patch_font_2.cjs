const fs = require('fs');
let file = fs.readFileSync('src/components/ProductDetail.tsx', 'utf8');

// The first patch already changed title to font-serif, and the keys to font-mono.
// Let's check remaining font-sans.
file = file.replace(/font-sans text-sm/g, 'font-mono text-xs md:text-sm tracking-widest font-bold');
file = file.replace(/font-sans text-xs/g, 'font-mono text-xs tracking-widest font-bold');
file = file.replace(/<span className="font-mono text-xs md:text-sm tracking-widest font-bold text-ink\/70">/g, '<span className="font-mono text-xs md:text-sm tracking-widest font-bold text-ink/70 uppercase">');
file = file.replace(/<span className="font-mono text-xs md:text-sm tracking-widest font-bold text-ink w-1\/2">/g, '<span className="font-mono text-xs md:text-[13px] tracking-wider text-ink font-bold w-1/2">');
file = file.replace(/className="pb-3 text-sm text-ink\/70 font-sans"/g, 'className="pb-3 text-sm text-ink/70 font-serif"');

fs.writeFileSync('src/components/ProductDetail.tsx', file);
