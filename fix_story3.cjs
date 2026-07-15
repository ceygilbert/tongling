const fs = require('fs');

let story = fs.readFileSync('src/components/BrandStory.tsx', 'utf8');

story = story.replace(/window\.addEventListener\("storage", handleStorage\);\n    if \(!content\) return <div className="pt-32 text-center text-ink\/70">Loading\.\.\.<\/div>;\n  return \(\) => window\.removeEventListener\("storage", handleStorage\);\n  \}, \[\]\);/,
`window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  if (!content) return <div className="pt-32 text-center text-ink/70">Loading...</div>;`);

fs.writeFileSync('src/components/BrandStory.tsx', story);
