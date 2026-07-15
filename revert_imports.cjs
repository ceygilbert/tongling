const fs = require('fs');

let server = fs.readFileSync('server.ts', 'utf8');
server = server.replace(/import \* as express from "express";\nconst app = express.default \? express.default\(\) : express\(\);/, 'import express from "express";');
server = server.replace(/import \* as path from "path";/, 'import path from "path";');
server = server.replace(/import \* as fs from "fs";/, 'import fs from "fs";');
server = server.replace(/import \* as multer from "multer";/, 'import multer from "multer";');
// add back `const app = express();` in startServer
server = server.replace(/async function startServer\(\) \{/, 'async function startServer() {\n  const app = express();');
fs.writeFileSync('server.ts', server);

let db = fs.readFileSync('server/db.ts', 'utf8');
db = db.replace(/import \* as fs from "fs";/, 'import fs from "fs";');
fs.writeFileSync('server/db.ts', db);
