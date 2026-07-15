const fs = require('fs');
let content = fs.readFileSync('server/db.ts', 'utf8');

content = content.replace(/const \{ data: catData, error: catErr \} = await supabase.from\('categories'\)\.select\('count', \{ count: 'exact', head: true \}\);\n    if \(!catErr && catData !== null && catData\.length === 0\) \{/g,
  `const { count: catCount, error: catErr } = await supabase.from('categories').select('*', { count: 'exact', head: true });
    if (!catErr && catCount === 0) {`);

content = content.replace(/const \{ data: procData, error: procErr \} = await supabase.from\('processes'\)\.select\('count', \{ count: 'exact', head: true \}\);\n    if \(!procErr && procData !== null && procData\.length === 0\) \{/g,
  `const { count: procCount, error: procErr } = await supabase.from('processes').select('*', { count: 'exact', head: true });
    if (!procErr && procCount === 0) {`);

content = content.replace(/const \{ data: compData, error: compErr \} = await supabase.from\('compositions'\)\.select\('count', \{ count: 'exact', head: true \}\);\n    if \(!compErr && compData !== null && compData\.length === 0\) \{/g,
  `const { count: compCount, error: compErr } = await supabase.from('compositions').select('*', { count: 'exact', head: true });
    if (!compErr && compCount === 0) {`);

content = content.replace(/const \{ data: prodData, error: prodErr \} = await supabase.from\('products'\)\.select\('count', \{ count: 'exact', head: true \}\);\n    if \(!prodErr && prodData !== null && prodData\.length === 0\) \{/g,
  `const { count: prodCount, error: prodErr } = await supabase.from('products').select('*', { count: 'exact', head: true });
    if (!prodErr && prodCount === 0) {`);

fs.writeFileSync('server/db.ts', content);
