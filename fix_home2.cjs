const fs = require('fs');

let home = fs.readFileSync('src/components/Home.tsx', 'utf8');

home = home.replace(/if \(!content\) return <div className="pt-32 text-center text-ink\/70">Loading\.\.\.<\/div>;\n  return \(\) => window.removeEventListener\("storage", handleStorage\);\n  \}, \[\]\);/,
`return () => window.removeEventListener("storage", handleStorage);
  }, []);

  if (!content) return <div className="pt-32 text-center text-ink/70">Loading...</div>;`);

fs.writeFileSync('src/components/Home.tsx', home);
