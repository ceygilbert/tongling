const fs = require('fs');

let home = fs.readFileSync('src/components/Home.tsx', 'utf8');

// Replace synchronous fetching with async fetch
home = home.replace(/const \[content, setContent\] = useState\(getStoredHomeContent\(\)\);/, 
`const [content, setContent] = useState<import("../types").HomeContent | null>(null);

  useEffect(() => {
    fetch('/api/public/content/home')
      .then(res => res.json())
      .then(data => setContent(data))
      .catch(err => {
        console.error(err);
        setContent(getStoredHomeContent()); // fallback
      });
  }, []);`);
  
// Replace `useEffect(() => { const handleStorage = () => ...` with an empty block or just let it be, but wait, `if (!content) return <div>Loading...</div>;` needs to be added.
home = home.replace(/return \(/, `if (!content) return <div className="pt-32 text-center text-ink/70">Loading...</div>;\n\n  return (`);

fs.writeFileSync('src/components/Home.tsx', home);
