const fs = require('fs');

let server = fs.readFileSync('server.ts', 'utf8');
server = server.replace(/import express from "express";/, 'import * as express from "express";\nconst app = express.default ? express.default() : express();');
server = server.replace(/import path from "path";/, 'import * as path from "path";');
server = server.replace(/import fs from "fs";/, 'import * as fs from "fs";');
server = server.replace(/import multer from "multer";/, 'import * as multer from "multer";');
// replace `const app = express();`
server = server.replace(/const app = express\(\);/, '');

fs.writeFileSync('server.ts', server);

let db = fs.readFileSync('server/db.ts', 'utf8');
db = db.replace(/import fs from "fs";/, 'import * as fs from "fs";');
fs.writeFileSync('server/db.ts', db);
