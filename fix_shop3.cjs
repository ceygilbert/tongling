const fs = require('fs');

let shop = fs.readFileSync('src/components/Shop.tsx', 'utf8');

shop = shop.replace(/if \(loading\) return <div className="pt-32 text-center text-ink\/70">Loading\.\.\.<\/div>;\n  return \(activeFilters/, 'return (activeFilters');

fs.writeFileSync('src/components/Shop.tsx', shop);
