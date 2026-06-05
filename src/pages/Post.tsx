import { useNavigate } from "react-router";
import { useState } from "react";
import Lottie from "lottie-react"; 
import TopBar from "../components/ui/layout/TopBar";
import PostTitleCard from "../components/ui/input/PostCards/PostTitleCard";
import PostDescriptionCard from "../components/ui/input/PostCards/PostDescriptionCard";
import PostPictureCard from "../components/ui/input/PostCards/PostPictureCard";
import PostCategoryCard from "../components/ui/input/PostCards/PostCategoryCard";
import PostButtonCard from "../components/ui/input/PostCards/PostButtonCard";
import "./Post.css";

import PostModal from "../components/ui/layout/modals/PostModal"


import PlusBigIcon from "../assets/icons/navigation/plusBig-icon.svg";
import CategoryIcon from "../assets/icons/kategori/category-icon.svg";
import ArrowRightIcon from "../assets/icons/navigation/arrowRightBig-icon.svg";
import MapLocation from "../assets/icons/card funktioner/mapLocation-icon.svg";
import KunstIcon from "/src/assets/icons/kategori/art-icon-filled.svg";
import CafeIcon from "/src/assets/icons/kategori/cafe-icon-filled.svg";
import OutdoorIcon from "/src/assets/icons/kategori/outdoor-icon-filled.svg";
import ShoppingIcon from "/src/assets/icons/kategori/shop-icon-filled.svg";
import UnderholdningIcon from "/src/assets/icons/kategori/entertainment-icon-filled.svg";
import cancelIcon from "/src/assets/icons/navigation/cancelBig-icon.svg";
 


const URL = import.meta.env.VITE_SUPABASE_URL || "";
const KEY = import.meta.env.VITE_SUPABASE_APIKEY || "";
const BASE_URL = URL.replace("/rest/v1/", "").replace("/rest/v1", "");

const CATEGORIES = [
  { name: "Kunst", code: "kunst", icon: KunstIcon },
  { name: "Outdoor", code: "outdoor", icon: OutdoorIcon },
  { name: "Caféer og Restauranter", code: "cafeer", icon: CafeIcon },
  { name: "Underholdning", code: "underholdning", icon: UnderholdningIcon },
  { name: "Shopping", code: "shopping", icon: ShoppingIcon },
];

const COUNTRIES_DATA = [
  { name: "Belgien", code: "be" }, { name: "Danmark", code: "dk" }, { name: "Finland", code: "fi" },
  { name: "Frankrig", code: "fr" }, { name: "Grækenland", code: "gr" }, { name: "Holland", code: "nl" },
  { name: "Irland", code: "ie" }, { name: "Italien", code: "it" }, { name: "Norge", code: "no" },
  { name: "Polen", code: "pl" }, { name: "Portugal", code: "pt" }, { name: "Spanien", code: "es" },
  { name: "Sverige", code: "se" }, { name: "Tyskland", code: "de" }, { name: "Østrig", code: "at" }
];

const LottiePlayer = (Lottie as any).default || Lottie;

function Post() {
  const [titleText, setTitleText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");
  const [country, setCountry] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [images, setImages] = useState<File[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit() {
    try {
      const postResponse = await fetch(`${URL}/post_users`, {
        method: "POST",
        headers: { "Content-Type": "application/json", apikey: KEY, Prefer: "return=representation" },
        body: JSON.stringify({ title: titleText.trim(), description: descriptionText.trim(), category, country, user_id: 1}),
      });

      if (!postResponse.ok) return;
      const createdPosts = await postResponse.json();
      const newPostId = createdPosts[0]?.id;

      if (newPostId && images.length > 0) {
        for (const file of images) {
          const fileName = `${Date.now()}_${file.name}`;

          const storageResponse = await fetch(`${BASE_URL}/storage/v1/object/post-images/${fileName}`, {
            method: "POST",
            headers: { apikey: KEY, Authorization: `Bearer ${KEY}`, "Content-Type": file.type },
            body: file,
          });

          if (storageResponse.ok) {
            await fetch(`${URL}/post_images`, {
              method: "POST",
              headers: { "Content-Type": "application/json", apikey: KEY },
              body: JSON.stringify({ post_id: newPostId, image: `${BASE_URL}/storage/v1/object/public/post-images/${fileName}` }),
            });
          }
        }
      }

      setShowPopup(true);
      setIsSuccess(true);
      setTimeout(() => {
        navigate("/explore");
      }, 2500);

    } catch (error) {
      setIsSuccess(false);
      setShowPopup(true);
    }
  }

  return (
    <div className="post-container">
      <TopBar   title= "Tilføj opslag"
  showLeftIcon = {true}
  showRightIcon = {false}
  onLeftIconClick = {() => {navigate("/explore");}}
  onRightIconClick = {() => {}} 
  leftIcon = {cancelIcon}
  rightIcon = ""
       />
      <div className="post-elements">
        <PostPictureCard icon={PlusBigIcon} onImagesSelect={(files) => setImages((prev) => [...prev, ...files])} />
      <PostTitleCard title="Skriv en passende titel" text={titleText} setText={setTitleText} />
      <PostDescriptionCard description="Skriv en passende beskrivelse" text={descriptionText} setText={setDescriptionText} />
      <PostCategoryCard categoryIcon={MapLocation} title="Tilføj lokation" icon={ArrowRightIcon} options={COUNTRIES_DATA} onSelect={setCountry} />
      <PostCategoryCard categoryIcon={CategoryIcon} title="Tilføj Kategori" icon={ArrowRightIcon} options={CATEGORIES} onSelect={setCategory} />
      
      <div className="button-container">
        <PostButtonCard title="Kladder" classNameButton="kladder-button-post" onClickMethod={() => alert("Gemt!")} />
        <PostButtonCard title="Slå op" classNameButton="post-button-post" onClickMethod={handleSubmit} />
      </div>

{showPopup && (
  <PostModal
    isSuccesfull={isSuccess}
    message={isSuccess ? "Opslag oprettet!" : "Der skete en fejl, prøv igen"}
  />
)}      </div>
    </div>
  );
}

export default Post;