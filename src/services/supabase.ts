import { createClient } from '@supabase/supabase-js';

// It's recommended to store these in environment variables
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Supabase URL and/or anon key are not defined in .env file. Please add them.");
}

export const supabase = createClient(supabaseUrl!, supabaseAnonKey!);
