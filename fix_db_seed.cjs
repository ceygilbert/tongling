const fs = require('fs');

let content = fs.readFileSync('server/db.ts', 'utf8');

content = content.replace(/import fs from "fs";/, `import fs from "fs";
import { DEFAULT_HOME_CONTENT, DEFAULT_SOLUTIONS_CONTENT, DEFAULT_STORY_CONTENT } from "../src/data.js";`);

content = content.replace(/export const inMemoryDB = \{/, `export const inMemoryDB: any = {
  homeContent: DEFAULT_HOME_CONTENT,
  solutionsContent: DEFAULT_SOLUTIONS_CONTENT,
  storyContent: DEFAULT_STORY_CONTENT,`);
  
// also, when seeding supabase, seed site_settings
const siteSettingsSeed = `
    // Site settings
    const { data: settingsData, error: settingsErr } = await supabase.from('site_settings').select('id');
    if (!settingsErr && settingsData !== null) {
      if (!settingsData.find(s => s.id === 'home')) {
        await supabase.from('site_settings').insert({ id: 'home', data: DEFAULT_HOME_CONTENT });
      }
      if (!settingsData.find(s => s.id === 'solutions')) {
        await supabase.from('site_settings').insert({ id: 'solutions', data: DEFAULT_SOLUTIONS_CONTENT });
      }
      if (!settingsData.find(s => s.id === 'story')) {
        await supabase.from('site_settings').insert({ id: 'story', data: DEFAULT_STORY_CONTENT });
      }
    }
`;

content = content.replace(/const mappedProducts = inMemoryDB.products.map\(p => \{/, siteSettingsSeed + "\n      const mappedProducts = inMemoryDB.products.map(p => {");

fs.writeFileSync('server/db.ts', content);
