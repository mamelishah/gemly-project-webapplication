import "./accountPosted.css";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/ui/layout/TopBar";
import BottomNavigationBar from "../components/ui/layout/bottom-navigation-bar/BottomNavigationBar";
import SmallCard from "../components/cards/SmallCard";
import CategoryIcon from "../assets/icons/kategori/category-icon.svg";
import BrasilienImage from "../assets/images/countries/Brasilien/Brazil-main-image.png";
import LeftArrow from "../assets/icons/navigation/arrowLeftBig-icon.svg";

import PostModal from "../components/ui/layout/modals/PostModal";

import { DeletePost } from "../services/DeletePost";
import { GetAllPostFromCurrentUser } from "../services/GetAllPostFromCurrentUser";

function AccountPosted() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<any[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleBack = () => {
    navigate(-1);
  };

  async function fetchPosts() {
      try {
        const data = await GetAllPostFromCurrentUser();
        setPosts(data);
      } catch (err) {
        setIsSuccess(false);
        setShowPopup(true)
        setTimeout(() => setShowPopup(false), 2500);
      }
    }

    useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await DeletePost(id);
      await fetchPosts();
      setPosts((prev) => prev.filter((post) => post.id !== id));
      setIsSuccess(true)
      setShowPopup(true)
      setTimeout(() => setShowPopup(false), 2500);
    } catch (err) {
      setShowPopup(true)
      console.log(err);
      setTimeout(() => setShowPopup(false), 2500);
       
    }
  };

  return (
    <>
      <TopBar
        title="Dine opslag"
        showLeftIcon={true}
        showRightIcon={false}
        onLeftIconClick={handleBack}
        onRightIconClick={() => {}}
        leftIcon={LeftArrow}
        rightIcon={""}
      />
      <div className="account-posted-content">
        {posts.map((post) => {
          const imageUrl = post.post_images?.[0]?.image ?? BrasilienImage;
          return (
            <SmallCard
              key={post.id}
              id={post.id}
              title={post.title}
              image={imageUrl}
              pinIcon={CategoryIcon}
              location={post.country}
              showBookmarkIcon={false}
              onDelete={() => handleDelete(post.id)}
            />
          );
        })}
      </div>
      {showPopup && (
        <PostModal
          isSuccesfull={isSuccess}
          message={
            isSuccess ? "Opslag slettet!" : "Der skete en fejl, prøv igen"
          }
        />
      )}
      <BottomNavigationBar />
    </>
  );
}

export default AccountPosted;
