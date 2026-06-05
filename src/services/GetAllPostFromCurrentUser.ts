const URL = import.meta.env.VITE_SUPABASE_URL;
const KEY = import.meta.env.VITE_SUPABASE_APIKEY;
const headers = {
  apikey: KEY,
  "Content-Type": "application/json",
};

export async function GetAllPostFromCurrentUser() {
  const url = `${URL}post_users?select=*,post_images(image)&user_id=eq.1`;
  const response = await fetch(url, { headers });
  return await response.json(); 
}