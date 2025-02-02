import { createClient, QueryData } from "@supabase/supabase-js";

const supabaseUrl = "https://wdjngykhxfiehtordswh.supabase.co";
// TODO: this is not secure!! dont do this in production
// best practices: https://docs.expo.dev/eas/hosting/environment-variables/
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indkam5neWtoeGZpZWh0b3Jkc3doIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0NDU5NjEsImV4cCI6MjA1NDAyMTk2MX0.DGU1av13OsDScyoGvsDxbLIipgHxI0cjeqPh4zKAZgs";
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET(request: Request) {
  const namesQuery = supabase.from("test").select(`
    id,
    name
  `);

  const { data, error } = await namesQuery;
  if (error) throw error;
  const namesData: QueryData<typeof namesQuery> = data;
  return Response.json({ hello: "world", data: namesData });
}
