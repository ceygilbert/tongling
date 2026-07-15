const fs = require('fs');

let story = fs.readFileSync('src/components/BrandStory.tsx', 'utf8');

story = story.replace(/if \(!content\) return <div className="pt-32 text-center text-ink\/70">Loading\.\.\.<\/div>;\n  return \(\) => window.removeEventListener\("storage", handleStorage\);\n  \}, \[\]\);/, 
`return () => window.removeEventListener("storage", handleStorage);
  }, []);

  if (!content) return <div className="pt-32 text-center text-ink/70">Loading...</div>;`);

fs.writeFileSync('src/components/BrandStory.tsx', story);
