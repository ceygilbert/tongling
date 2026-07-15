const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  const { data, error } = await supabase.rpc('exec_sql', { query: `
    CREATE TABLE IF NOT EXISTS public.site_settings (
      id TEXT PRIMARY KEY,
      data JSONB NOT NULL
    );
  `});
  
  if (error) {
    console.error("RPC error (maybe exec_sql doesn't exist, which is normal on default supabase instances)", error);
  }
}
run();
