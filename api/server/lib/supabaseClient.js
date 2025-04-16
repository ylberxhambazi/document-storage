import { createClient } from "@supabase/supabase-js";
import dotenv from 'dotenv';
dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY; // Use service role key for server-side

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
