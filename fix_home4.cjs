const fs = require('fs');

let home = fs.readFileSync('src/components/Home.tsx', 'utf8');

const target = `    window.addEventListener("storage", handleStorage);
    if (!content) return <div className="pt-32 text-center text-ink/70">Loading...</div>;
  return () => window.removeEventListener("storage", handleStorage);
  }, []);`;

const replacement = `    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  if (!content) return <div className="pt-32 text-center text-ink/70">Loading...</div>;`;

home = home.replace(target, replacement);

fs.writeFileSync('src/components/Home.tsx', home);
