const fs = require('fs');

let homeEditor = fs.readFileSync('src/components/HomeEditor.tsx', 'utf8');

homeEditor = homeEditor.replace(/const \[content, setContent\] = useState<any>\(null\);/, 
`const [content, setContent] = useState<any>(null);
  const [products, setProducts] = useState<any[]>([]);`);

homeEditor = homeEditor.replace(/fetch\('\/api\/public\/content\/\$\{pageId\}'\)/, `fetch('/api/public/content/home')`);
homeEditor = homeEditor.replace(/fetch\('\/api\/admin\/content\/\$\{pageId\}'\)/, `fetch('/api/admin/content/home')`);
homeEditor = homeEditor.replace(/sincerity_\$\{pageId\}_content/, `sincerity_home_content`);

homeEditor = homeEditor.replace(/\.then\(data => setContent\(data\)\)\n      \.catch\(err => console\.error\(err\)\);/, 
`.then(data => setContent(data))
      .catch(err => console.error(err));
      
    fetch('/api/public/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));`);

homeEditor = homeEditor.replace(/PRODUCTS/g, 'products');

fs.writeFileSync('src/components/HomeEditor.tsx', homeEditor);
