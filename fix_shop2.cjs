const fs = require('fs');

let shop = fs.readFileSync('src/components/Shop.tsx', 'utf8');

shop = shop.replace(/if \(loading\) return <div className="pt-32 text-center text-ink\/70">Loading\.\.\.<\/div>;\n  return \(/, 'return (');
shop = shop.replace(/return \(\n    <div className="pt-24/, `if (loading) return <div className="pt-32 text-center text-ink/70">Loading...</div>;\n\n  return (\n    <div className="pt-24`);

fs.writeFileSync('src/components/Shop.tsx', shop);
