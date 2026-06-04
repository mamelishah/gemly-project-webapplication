import "./accountPosted.css"

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/ui/layout/TopBar";
import BottomNavigationBar from "../components/ui/layout/bottom-navigation-bar/BottomNavigationBar";
import SmallCard from "../components/cards/SmallCard";
import CategoryIcon from "../assets/icons/kategori/category-icon.svg";
import BrasilienImage from "../assets/images/countries/Brasilien/Brazil-main-image.png";
import LeftArrow from "../assets/icons/navigation/arrowLeftBig-icon.svg";

const BASE_URL = import.meta.env.VITE_SUPABASE_URL;
const APIKEY = import.meta.env.VITE_SUPABASE_APIKEY;

const headers = {
  apikey: APIKEY,
  "Content-Type": "application/json",
};

function AccountPosted() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<any[]>([]);

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    async function fetchPosts() {
      try {
        const url = `${BASE_URL}post_users?select=*,post_images(image)&user_id=eq.1`;
        const response = await fetch(url, { headers });
        const data = await response.json();
        console.log("Posts:", data);
        setPosts(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchPosts();
  }, []);


  const handleDelete = async (id: string) => {
  try {
    await fetch(`${BASE_URL}post_images?post_id=eq.${id}`, {
      method: "DELETE",
      headers,
    });
    await fetch(`${BASE_URL}post_users?id=eq.${id}`, {
      method: "DELETE",
      headers,
    });
    setPosts((prev) => prev.filter((post) => post.id !== id));
  } catch (err) {
    console.log(err);
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
              id={post.id}
              title={post.title}
              image={imageUrl}
              pinIcon={CategoryIcon}
              location={post.country}
              showBookmarkIcon = {false}
              onDelete={() => handleDelete(post.id)}
            />
          );
        })}
      </div>
      <BottomNavigationBar />
    </>
  );
}

export default AccountPosted;