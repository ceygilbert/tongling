const fs = require('fs');

let story = fs.readFileSync('src/components/BrandStory.tsx', 'utf8');

const target = `    window.addEventListener("storage", handleStorage);
    if (!content) return <div className="pt-32 text-center text-ink/70">Loading...</div>;
  return () => window.removeEventListener("storage", handleStorage);
  }, []);`;

const replacement = `    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  if (!content) return <div className="pt-32 text-center text-ink/70">Loading...</div>;`;

story = story.replace(target, replacement);

fs.writeFileSync('src/components/BrandStory.tsx', story);
