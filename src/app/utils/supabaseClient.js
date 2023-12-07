'use client'
import { useAuth } from '@clerk/clerk-react';
import { createClient } from "@supabase/supabase-js";
 
export const supabaseClient = async (supabaseAccessToken) => {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY, {
      global: { headers: { Authorization: `Bearer ${supabaseAccessToken}` } },
    });
    // set Supabase JWT on the client object,
    // so it is sent up with all Supabase requests
    return supabase;
  };
  
export function App() {
  const { getToken } = useAuth();
 
  const fetchData = async () => {
    // TODO #1: Replace with your JWT template name
    const supabaseAccessToken = await getToken({ template: 'supabase' });
 
    const supabase = await supabaseClient(supabaseAccessToken);
    
    // TODO #2: Replace with your database table name
    
    const { data, error } = await supabase.from('User').select();
  };
 
  return (
    <div className="app">
      <button onClick={fetchData}>Fetch data</button>
    </div>
  );
}