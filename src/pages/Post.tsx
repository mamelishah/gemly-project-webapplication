import PostTitleCard from "../components/ui/input/PostCards/PostTitleCard";
import PostDescriptionCard from "../components/ui/input/PostCards/PostDescriptionCard";
import PostPictureCard from "../components/ui/input/PostCards/PostPictureCard";
import PlusBigIcon from "../assets/icons/navigation/plusBig-icon.svg";
import PostCategoryCard from "../components/ui/input/PostCards/PostCategoryCard";
import CategoryIcon from "../assets/icons/kategori/category-icon.svg";
import ArrowRightIcon from "../assets/icons/navigation/arrowRightBig-icon.svg";
import MapLocation from "../assets/icons/card funktioner/mapLocation-icon.svg";
import TopBar from "../components/ui/layout/TopBar";
import PostButtonCard from "../components/ui/input/PostCards/PostButtonCard";
import "./Post.css";
import { useNavigate } from "react-router";

import React, { useState } from "react";
const URL = import.meta.env.VITE_SUPABASE_URL;

function Post() {
  const [titleText, setTitleText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");
  const navigate = useNavigate();

  async function handleSubmit() {
    await fetch(`${URL}/post_users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: import.meta.env.VITE_SUPABASE_APIKEY,
        // Authorization: `${import.meta.env.VITE_SUPABASE_APIKEY}`,
      },
      body: JSON.stringify({
        title: titleText.trim(),
        description: descriptionText.trim(),
      }),
    });

    navigate("/");
  }

  return (
    <div className="post-container">
      <TopBar title="Tilføj opslag" showLeftIcon={true} showRightIcon={false} />
      <PostPictureCard icon={PlusBigIcon} />
      <PostTitleCard
        title="Skriv en passende titel"
        text={titleText}
        setText={setTitleText}
      />
      <PostDescriptionCard
        description="Skriv en passende beskrivelse"
        text={descriptionText}
        setText={setDescriptionText}
      />
      <PostCategoryCard
        categoryIcon={CategoryIcon}
        title="Tilføj Kategori"
        icon={ArrowRightIcon}
      />
      <PostCategoryCard
        categoryIcon={MapLocation}
        title="Tilføj lokation"
        icon={ArrowRightIcon}
      />
      <div className="button-container">
        <PostButtonCard
          title="Kladder"
          classNameButton="kladder-button-post"
          onClickMethod={() => alert("Gemt til kladder!")}
        />
        <PostButtonCard
          title="Slå op"
          classNameButton="post-button-post"
          onClickMethod={handleSubmit}
        />
      </div>
    </div>
  );
}

export default Post;
