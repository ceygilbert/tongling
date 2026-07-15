const fs = require('fs');

let sol = fs.readFileSync('src/components/Solutions.tsx', 'utf8');

sol = sol.replace(/const \[content, setContent\] = React\.useState\(getStoredSolutionsContent\(\)\);/, 
`const [content, setContent] = React.useState<import("../types").SolutionsContent | null>(null);

  React.useEffect(() => {
    fetch('/api/public/content/solutions')
      .then(res => res.json())
      .then(data => setContent(data))
      .catch(err => {
        console.error(err);
        setContent(getStoredSolutionsContent());
      });
  }, []);`);
  
sol = sol.replace(/const \{ colorFeatures/, `if (!content) return <div className="pt-32 text-center text-ink/70">Loading...</div>;\n\n  const { colorFeatures`);

fs.writeFileSync('src/components/Solutions.tsx', sol);
