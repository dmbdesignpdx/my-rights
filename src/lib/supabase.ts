import { type Database } from "@/types/supabase.d";
import { createClient } from "@supabase/supabase-js";


export const supabase = createClient<Database>(
  import.meta.env.SUPABASE_URL,
  import.meta.env.SUPABASE_KEY,
);
