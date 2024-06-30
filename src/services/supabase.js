import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://askqunovptntjnezssoq.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFza3F1bm92cHRudGpuZXpzc29xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcyNDQ1OTYsImV4cCI6MjAyMjgyMDU5Nn0.4pDbeYfmRdbu0_9dkSx9LrJ1dYuKqBPu9h1Vz81HrM4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
