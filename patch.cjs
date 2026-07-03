const fs = require('fs');

let fileContent = fs.readFileSync('server/db.ts', 'utf8');

// Add fs and path imports if they don't exist
if (!fileContent.includes('import fs from "fs"')) {
    fileContent = fileContent.replace(
        'import mysql from "mysql2/promise";',
        'import mysql from "mysql2/promise";\nimport fs from "fs";\nimport path from "path";'
    );
}

// Add load/save logic for JSON fallback
const jsonLogic = `
const DB_FILE = path.join(process.cwd(), 'db-fallback.json');

function loadFallbackDB() {
  if (fs.existsSync(DB_FILE)) {
    try {
      const data = fs.readFileSync(DB_FILE, 'utf8');
      const parsed = JSON.parse(data);
      if (parsed.products && parsed.categories) {
        Object.assign(inMemoryDB, parsed);
        console.log("Loaded fallback database from db-fallback.json");
      }
    } catch (err) {
      console.error("Error reading db-fallback.json", err);
    }
  } else {
    saveFallbackDB();
  }
}

function saveFallbackDB() {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(inMemoryDB, null, 2));
  } catch (err) {
    console.error("Error writing db-fallback.json", err);
  }
}

// Immediately load
loadFallbackDB();
`;

// Insert the JSON logic right after inMemoryDB declaration
const inMemoryDBEnd = fileContent.indexOf('};', fileContent.indexOf('const isCloudRun'));
// Wait, isCloudRun is declared right after inMemoryDB
const insertPoint = fileContent.indexOf('const isCloudRun');

fileContent = fileContent.substring(0, insertPoint) + jsonLogic + '\n' + fileContent.substring(insertPoint);

// Now patch all the functions to call saveFallbackDB
// We need to inject saveFallbackDB() after inMemoryDB modifies

const modifiers = [
  'inMemoryDB.products[index] = { ...inMemoryDB.products[index], ...prod, id, showPrice: prod.showPrice !== false };',
  'const deleted = inMemoryDB.products.splice(index, 1);',
  'inMemoryDB.products.push(newItem);',
  
  'inMemoryDB.categories[index] = { ...inMemoryDB.categories[index], ...cat, id };',
  'const deleted = inMemoryDB.categories.splice(index, 1);',
  'inMemoryDB.categories.push(newItem);',
  
  'inMemoryDB.processes[index] = { ...inMemoryDB.processes[index], ...proc, id };',
  'const deleted = inMemoryDB.processes.splice(index, 1);',
  'inMemoryDB.processes.push(newItem);',
  
  'inMemoryDB.compositions[index] = { ...inMemoryDB.compositions[index], ...comp, id };',
  'const deleted = inMemoryDB.compositions.splice(index, 1);',
  'inMemoryDB.compositions.push(newItem);',
];

for (const mod of modifiers) {
  fileContent = fileContent.replace(mod, mod + '\n      saveFallbackDB();');
}

// One more place: dbService.createProduct: 
// const newItem = { id: Date.now().toString(), ...prod, showPrice: prod.showPrice !== false };
// inMemoryDB.products.push(newItem);

fileContent = fileContent.replace('inMemoryDB.products.push(newItem);', 'inMemoryDB.products.push(newItem);\n    saveFallbackDB();');

fs.writeFileSync('server/db.ts', fileContent);
