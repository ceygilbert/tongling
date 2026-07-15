const fs = require('fs');

let content = fs.readFileSync('server/db.ts', 'utf8');

// Insert the methods for page content in dbService
const methods = `
  // Page Content
  async getPageContent(page: string) {
    if (supabase) {
      try {
        const { data, error } = await supabase.from('site_settings').select('data').eq('id', page).single();
        if (error) {
          if (error.code === 'PGRST116') {
            // Row not found, fall back to memory
          } else {
             console.warn("Supabase query for page content failed:", error);
          }
        } else if (data) {
          return data.data;
        }
      } catch (err) {
        console.warn("Supabase query for page content failed:", err);
      }
    }
    return (inMemoryDB as any)[page + 'Content'] || null;
  },

  async updatePageContent(page: string, contentData: any) {
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('site_settings')
          .upsert({ id: page, data: contentData })
          .select()
          .single();
          
        if (error) throw error;
        return data.data;
      } catch (err) {
        console.warn("Supabase upsert page content failed:", err);
      }
    }
    
    (inMemoryDB as any)[page + 'Content'] = contentData;
    saveFallbackDB();
    return contentData;
  },
`;

content = content.replace(/export const dbService = {/, "export const dbService = {\n" + methods);

fs.writeFileSync('server/db.ts', content);
