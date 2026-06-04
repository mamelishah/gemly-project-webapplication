
import { useNavigate, useParams } from "react-router";
import { useState, useEffect } from "react";
import TopBar from '../components/ui/layout/TopBar';
import PostCategoryCard from '../components/ui/input/PostCards/PostCategoryCard';
import PostDescriptionCard from '../components/ui/input/PostCards/PostDescriptionCard';
import PostPictureCard from '../components/ui/input/PostCards/PostPictureCard';
import PostTitleCard from '../components/ui/input/PostCards/PostTitleCard';
import PostButtonCard from '../components/ui/input/PostCards/PostButtonCard';
import cancelIcon from "../assets/icons/navigation/cancelBig-icon.svg";
import PlusBigIcon from "../assets/icons/navigation/PlusBig-icon.svg";
import MapLocation from "../assets/icons/card funktioner/MapLocation-icon.svg";
import ArrowRightIcon from "../assets/icons/navigation/arrowRightSmall-icon.svg";
import CategoryIcon from "../assets/icons/kategori/category-icon.svg";
import KunstIcon from "/src/assets/icons/kategori/art-icon-filled.svg";
import CafeIcon from "/src/assets/icons/kategori/cafe-icon-filled.svg";
import OutdoorIcon from "/src/assets/icons/kategori/outdoor-icon-filled.svg";
import ShoppingIcon from "/src/assets/icons/kategori/shop-icon-filled.svg";
import UnderholdningIcon from "/src/assets/icons/kategori/entertainment-icon-filled.svg";
import "./Post.css";

const BASE_URL = import.meta.env.VITE_SUPABASE_URL;
const APIKEY = import.meta.env.VITE_SUPABASE_APIKEY;
const headers = {
  apikey: APIKEY,
  Authorization: `Bearer ${APIKEY}`,
  "Content-Type": "application/json",
};

function EditPost() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [existingImages, setExistingImages] = useState<string[]>([]);


  const [titleText, setTitleText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");
  const [country, setCountry] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [images, setImages] = useState<File[]>([]);

  const CATEGORIES = [
    { name: "Kunst", code: "kunst",  },
    { name: "Outdoor", code: "outdoor", icon: OutdoorIcon },
    { name: "Caféer og Restauranter", code: "cafeer", icon: CafeIcon },
    { name: "Underholdning", code: "underholdning", icon: UnderholdningIcon },
    { name: "Shopping", code: "shopping", icon: ShoppingIcon },
  ];

  const COUNTRIES_DATA = [
    { name: "Belgien", code: "be" },
    { name: "Danmark", code: "dk" },
    { name: "Finland", code: "fi" },
    { name: "Frankrig", code: "fr" },
    { name: "Grækenland", code: "gr" },
    { name: "Holland", code: "nl" },
    { name: "Irland", code: "ie" },
    { name: "Italien", code: "it" },
    { name: "Norge", code: "no" },
    { name: "Polen", code: "pl" },
    { name: "Portugal", code: "pt" },
    { name: "Spanien", code: "es" },
    { name: "Sverige", code: "se" },
    { name: "Tyskland", code: "de" },
    { name: "Østrig", code: "at" },
  ];

 useEffect(() => {
  async function fetchPost() {
    try {
      const url = `${BASE_URL}post_users?id=eq.${id}&select=*,post_images(image)`;
      const response = await fetch(url, { headers });
      const data = await response.json();
      if (data[0]) {
        const post = data[0];
        setTitleText(post.title ?? "");
        setDescriptionText(post.description ?? "");
        setCountry(post.country ?? null);
        setCategory(post.category ?? null);
        setExistingImages(post.post_images?.map((img: any) => img.image) ?? []); 
      }
    } catch (err) {
      console.log(err);
    }
  }
  if (id) fetchPost();
}, [id]);

  const handleSubmit = async () => {
    try {
      await fetch(`${BASE_URL}post_users?id=eq.${id}`, {
        method: "PATCH",
        headers,
        body: JSON.stringify({
          title: titleText,
          description: descriptionText,
          country: country,
          category: category,
        }),
      });
      navigate(-1);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="post-container">
      <TopBar
        title="Rediger opslag"
        showLeftIcon={true}
        showRightIcon={false}
        onLeftIconClick={() => navigate(-1)}
        onRightIconClick={() => {}}
        leftIcon={cancelIcon}
        rightIcon=""
      />
      <div className="post-elements">
        <PostPictureCard
  icon={PlusBigIcon}
  onImagesSelect={(files) => setImages((prev) => [...prev, ...files])}
  existingImages={existingImages} // ← tilføj
/>
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
          categoryIcon={MapLocation}
          title="Tilføj lokation"
          icon={ArrowRightIcon}
          options={COUNTRIES_DATA}
          onSelect={setCountry}
        />
        <PostCategoryCard
          categoryIcon={CategoryIcon}
          title="Tilføj Kategori"
          icon={ArrowRightIcon}
          options={CATEGORIES}
          onSelect={setCategory}
        />
        <div className="button-container">
          <PostButtonCard title="Annulér" classNameButton="kladder-button-post" />
          <PostButtonCard
            title="Opdater"
            classNameButton="post-button-post"
            onClickMethod={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default EditPost;