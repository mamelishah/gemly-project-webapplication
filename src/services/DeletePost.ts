const URL = import.meta.env.VITE_SUPABASE_URL;
const KEY = import.meta.env.VITE_SUPABASE_APIKEY;
const headers = {
  apikey: KEY,
  "Content-Type": "application/json",
};

export async function DeletePost(id: string) {
  await fetch(`${URL}post_images?post_id=eq.${id}`, {
    method: "DELETE",
    headers,
  });
  await fetch(`${URL}post_users?id=eq.${id}`, {
    method: "DELETE",
    headers,
  });
}