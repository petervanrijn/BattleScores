import { createClient } from "@supabase/supabase-js";
import { Database } from "@/types/supabase.ts";
const supabaseUrl = process.env.REACT_APP_SUPEBASE_URL;
const supabaseKey = process.env.REACT_APP_SUPEBASE_KEY;
const supabase = createClient<Database>(supabaseUrl as string, supabaseKey as string);

export default supabase;
