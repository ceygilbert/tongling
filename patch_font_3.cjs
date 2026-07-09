const fs = require('fs');
let file = fs.readFileSync('src/components/ProductDetail.tsx', 'utf8');

file = file.replace(/font-sans/g, 'font-serif');

fs.writeFileSync('src/components/ProductDetail.tsx', file);
