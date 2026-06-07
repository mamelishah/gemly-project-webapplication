import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import TopBar from "../components/ui/layout/TopBar";
import DetailCard from "../components/cards/DetailCard";
import LeftArrow from "/src/assets/icons/navigation/arrowLeftBig-icon.svg";

import {getPostById, getImagesByPostId} from "../services/getOnePost"
import PostModal from "../components/ui/layout/modals/PostModal";


function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<any>(null);
   const [showPopup, setShowPopup] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

useEffect(() => {
    if (!id) return;

    async function loadPost() {
      try {
        const data = await getPostById(id!);
        if (data) setPost(data);

        const images = await getImagesByPostId(id!);
        console.log("Images:", images);
      } catch (err) {
        setIsSuccess(false)
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2500);

      }
    }

    loadPost();
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
           {showPopup && (
        <PostModal
          isSuccesfull={isSuccess}
          message="Kunne ikke hente opslaget"
        />
      )}
    </div>
  );
}

export default DetailPage;