const fs = require('fs');
let fileContent = fs.readFileSync('server.ts', 'utf8');

fileContent = fileContent.replace(
  "typeof _filename !== 'undefined' ? _filename : fileURLToPath(import.meta.url)",
  "typeof __filename !== 'undefined' ? __filename : fileURLToPath(import.meta.url)"
);

fileContent = fileContent.replace(
  "typeof _dirname !== 'undefined' ? _dirname : path.dirname(_filename)",
  "typeof __dirname !== 'undefined' ? __dirname : path.dirname(_filename)"
);

fs.writeFileSync('server.ts', fileContent);
