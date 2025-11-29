import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Create Supabase client

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types for TypeScript

export interface QuizResult {
  id?: number;
  full_name: string;
  topic: string;
  score: number;
  total_questions: number;
  passed: boolean;
  created_at?: string;
}
