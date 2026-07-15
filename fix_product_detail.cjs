const fs = require('fs');
let detail = fs.readFileSync('src/components/ProductDetail.tsx', 'utf8');

detail = detail.replace(/import \{ PRODUCTS \} from "\.\.\/data";/, '');
detail = detail.replace(/const product = PRODUCTS\.find\(p => p\.id === id\);\n  const relatedProducts = PRODUCTS\.filter\(p => p\.id !== id\)\.slice\(0, 4\);/, 
`const [product, setProduct] = useState<any>(null);
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    fetch('/api/public/products')
      .then(res => res.json())
      .then(data => {
        const p = data.find((item: any) => item.id === id);
        setProduct(p);
        setRelatedProducts(data.filter((item: any) => item.id !== id).slice(0, 4));
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);`);

detail = detail.replace(/const allImages = \[product\.productImage, product\.lifestyleImage, \.\.\.\(product\.galleryImages \|\| \[\]\)\]\.filter\(Boolean\);/, 
`const allImages = product ? [product.productImage, product.lifestyleImage, ...(product.galleryImages || [])].filter(Boolean) : [];`);

detail = detail.replace(/const currentImage = allImages\[activeImageIdx\] \|\| product\.productImage;/,
`const currentImage = product ? (allImages[activeImageIdx] || product.productImage) : '';`);

// Find the return statement
detail = detail.replace(/if \(!product\) \{/, 
`if (loading) return <div className="pt-32 text-center text-ink/70">Loading...</div>;\n\n  if (!product) {`);

fs.writeFileSync('src/components/ProductDetail.tsx', detail);
