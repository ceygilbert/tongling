const fs = require('fs');

let slider = fs.readFileSync('src/components/ProductSlider.tsx', 'utf8');

slider = slider.replace(/const \[content, setContent\] = useState\(getStoredHomeContent\(\)\);/,
`const [content, setContent] = useState<any>(null);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/public/content/home')
      .then(res => res.json())
      .then(data => setContent(data))
      .catch(err => console.error(err));
      
    fetch('/api/public/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);`);

slider = slider.replace(/const featuredProducts = PRODUCTS\.filter/, `const featuredProducts = products.filter`);
slider = slider.replace(/const displayProducts = featuredProducts\.length > 0 \? featuredProducts : PRODUCTS\.slice\(0, 3\);/, `const displayProducts = featuredProducts.length > 0 ? featuredProducts : products.slice(0, 3);`);
slider = slider.replace(/useEffect\(\(\) => \{\n    const handleStorage = \(\) => setContent\(getStoredHomeContent\(\)\);\n    window.addEventListener\("storage", handleStorage\);\n    return \(\) => window.removeEventListener\("storage", handleStorage\);\n  \}, \[\]\);/, '');

slider = slider.replace(/return \(/, `if (!content || products.length === 0) return <div className="text-center py-20">Loading...</div>;\n\n  return (`);

fs.writeFileSync('src/components/ProductSlider.tsx', slider);
