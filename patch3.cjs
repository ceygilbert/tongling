const fs = require('fs');
let fileContent = fs.readFileSync('server.ts', 'utf8');

fileContent = fileContent.replace(
  "const __filename = typeof __filename !== 'undefined' ? __filename : fileURLToPath(import.meta.url);\nconst __dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(__filename);",
  `const _filename = typeof __filename !== 'undefined' ? __filename : fileURLToPath(import.meta.url);\nconst _dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(_filename);`
);

// We must also replace the occurrences of __dirname and __filename in server.ts
// where I probably didn't even use __filename or __dirname. 
// Wait, I didn't see __dirname used anywhere in server.ts... wait, yes, distPath!

fileContent = fileContent.replace(/__dirname/g, '_dirname');
fileContent = fileContent.replace(/__filename/g, '_filename');

fs.writeFileSync('server.ts', fileContent);
