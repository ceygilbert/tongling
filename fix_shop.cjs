const fs = require('fs');

let shop = fs.readFileSync('src/components/Shop.tsx', 'utf8');

shop = shop.replace(/const filteredProducts = products\.filter\(p => \{\n    if \(loading\) return <div className="pt-32 text-center text-ink\/70">Loading\.\.\.<\/div>;\n\n  return \(activeFilters/, 
`const filteredProducts = products.filter(p => {
  return (activeFilters`);

fs.writeFileSync('src/components/Shop.tsx', shop);
