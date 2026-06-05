import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import TopBar from "../components/ui/layout/TopBar";
import DetailCard from "../components/cards/DetailCard";
import LeftArrow from "/src/assets/icons/navigation/arrowLeftBig-icon.svg";


const BASE_URL = import.meta.env.VITE_SUPABASE_URL;
const APIKEY = import.meta.env.VITE_SUPABASE_APIKEY;
const headers = { apikey: APIKEY, Authorization: `Bearer ${APIKEY}` };

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        const url = `${BASE_URL}post_users?id=eq.${id}&select=*,post_images(image)`;
        const response = await fetch(url, { headers });
        const data = await response.json();
        if (data[0]) setPost(data[0]);
      } catch (err) {
        console.log(err);
      }
    }
    async function fetchImages() {
    try {
      const url = `${BASE_URL}post_images?post_id=eq.${id}`;
      const response = await fetch(url, { headers });
      const data = await response.json();
      console.log("Images:", data);
    } catch (err) {
      console.log(err);
    }
  }
    if (id){
      fetchPost();
          fetchImages();
    } 
  }, [id]);

  if (!post) return null;

  const imageUrl = post.post_images?.[0]?.image ?? "";
  

  return (
    <div className="detail-page">
      <div className="detail-card-container">
        <TopBar
          title={post.title}
          showLeftIcon={true}
          showRightIcon={false}
          onLeftIconClick={() => navigate(-1)}
          onRightIconClick={() => {}}
          leftIcon={LeftArrow}
          rightIcon={""}
        />
        <DetailCard
          image={imageUrl}
          title={post.title}
          description={post.description}
          category={post.category}
          location={post.country}
        />
      </div>
    </div>
  );
}

export default DetailPage;