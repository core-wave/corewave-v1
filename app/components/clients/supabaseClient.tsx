import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sfafpujmnlaldgtrflyv.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmYWZwdWptbmxhbGRndHJmbHl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU5NTkxMzgsImV4cCI6MjAyMTUzNTEzOH0.aijbd7BspsTtqGMSgkzMoYJSwwanF1uGUnfb_pNlEi0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);