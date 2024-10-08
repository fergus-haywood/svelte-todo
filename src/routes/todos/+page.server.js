import { supabase } from "$lib/supabase";

export async function load({ params }) {
  const { data } = await supabase.from("todos").select();

  return { 
    todos: data
  }
}


