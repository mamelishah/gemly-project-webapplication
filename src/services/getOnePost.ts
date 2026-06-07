const URL = import.meta.env.VITE_SUPABASE_URL;
const KEY = import.meta.env.VITE_SUPABASE_APIKEY;
const headers = { apikey: KEY, Authorization: `Bearer ${KEY}` };

export async function getPostById(id: string) {
  const url = `${URL}post_users?id=eq.${id}&select=*,post_images(image)`;
  const response = await fetch(url, { headers });
  const data = await response.json();
  return data[0] ?? null;
}

export async function getImagesByPostId(id: string) {
  const url = `${URL}post_images?post_id=eq.${id}`;
  const response = await fetch(url, { headers });
  return await response.json();
}