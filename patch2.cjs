const fs = require('fs');

let fileContent = fs.readFileSync('server.ts', 'utf8');

// Replace fileURLToPath logic to work in both ESM and CJS
fileContent = fileContent.replace(
  'const __filename = fileURLToPath(import.meta.url);\nconst __dirname = path.dirname(__filename);',
  `// Get __dirname dynamically (works for both TSX in ESM mode and ESBuild in CJS mode)
const __filename = typeof __filename !== 'undefined' ? __filename : fileURLToPath(import.meta.url);
const __dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(__filename);`
);

fs.writeFileSync('server.ts', fileContent);
