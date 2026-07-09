const fs = require('fs');

let file = fs.readFileSync('src/components/ProductDetail.tsx', 'utf8');

// Replace Specifications title
file = file.replace(
  '<h2 className="font-sans text-xl md:text-2xl font-normal text-ink mb-6">Specifications</h2>',
  '<h2 className="font-serif text-3xl md:text-4xl font-black tracking-tighter text-ink mb-8">Specifications</h2>'
);

// Replace font-sans in specs table
file = file.replace(/font-sans text-sm/g, 'font-mono text-xs md:text-sm tracking-widest font-bold');
file = file.replace(/font-sans text-xs/g, 'font-mono text-xs tracking-widest font-bold');
file = file.replace(/<span className="font-mono text-xs md:text-sm tracking-widest font-bold text-ink\/70">/g, '<span className="font-mono text-xs md:text-sm tracking-widest font-bold text-ink/70 uppercase">');
// Note: wait, it's easier to just use string replace for the whole block or regex.
fs.writeFileSync('src/components/ProductDetail.tsx', file);
