
const URL = import.meta.env.VITE_SUPABASE_URL || "";
const KEY = import.meta.env.VITE_SUPABASE_APIKEY || "";
const BASE_URL = URL.replace("/rest/v1/", "").replace("/rest/v1", "");

interface CreatePostData {
  title: string;
  description: string;
  category: string | null;
  country: string | null;
  images: File[];
}

export async function createPost(data: CreatePostData): Promise<boolean> {

  // Henter postet fra tablen post_users
  const postResponse = await fetch(`${URL}/post_users`, {
    method: "POST",
    headers: { "Content-Type": "application/json", apikey: KEY, Prefer: "return=representation" },
    body: JSON.stringify({
      title: data.title.trim(),
      description: data.description.trim(),
      category: data.category,
      country: data.country,
      user_id: 1,
    }),
  });

  // Returnere false, hvis postet ikke kan oprettes
  if (!postResponse.ok) return false;

  // Henter id'et fra opslaget
  const createdPosts = await postResponse.json();
  const newPostId = createdPosts[0]?.id;


  // Tjekker om opslaget har et id og om brugeren har postet et billede
  if (newPostId && data.images.length > 0) {
    // Looper igennem billederne og tildele hvert billede en filnavn med tilhørende dato på billedet
    for (const file of data.images) {
      const fileName = `${Date.now()}_${file.name}`;

      // Oploader billedet til vores storage på supabase
      const storageResponse = await fetch(`${BASE_URL}/storage/v1/object/post-images/${fileName}`, {
        method: "POST",
        headers: { apikey: KEY, Authorization: `Bearer ${KEY}`, "Content-Type": file.type },
        body: file,
      });

      // Hvis alt er OK, så upload billedet til post_images
      if (storageResponse.ok) {
        await fetch(`${URL}/post_images`, {
          method: "POST",
          headers: { "Content-Type": "application/json", apikey: KEY },
          body: JSON.stringify({
            post_id: newPostId,
            image: `${BASE_URL}/storage/v1/object/public/post-images/${fileName}`,
          }),
        });
      }
    }
  }
  // returnere true, hvis alt er i orden
  return true;
}