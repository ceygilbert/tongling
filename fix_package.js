const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
delete pkg.dependencies['node-domexception'];
delete pkg.overrides;
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
