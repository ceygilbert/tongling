import "dotenv/config";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl!, supabaseKey!);

async function check() {
  const { data, error, count } = await supabase.from('products').select('*', { count: 'exact' });
  console.log('PRODUCTS ROWS count:', count);
  console.log('PRODUCTS ROWS error:', error);
  console.log('PRODUCTS ROWS data sample:', data ? data.slice(0, 2) : null);
}
check();
