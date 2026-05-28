// Paste Supabase config here
const SUPABASE_URL = "https://harskcruvaarfcdzqqyg.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_K80L6lADCCj8Isi7-aGz1Q_lkECznVF";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);