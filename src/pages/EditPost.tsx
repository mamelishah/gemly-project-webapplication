import React from 'react'
import { useNavigate } from "react-router";
import { useState } from "react";
import TopBar from '../components/ui/layout/TopBar';
import PostCategoryCard from '../components/ui/input/PostCards/PostCategoryCard';
import cancelIcon from "../assets/icons/navigation/cancelBig-icon.svg";
import PostDescriptionCard from '../components/ui/input/PostCards/PostDescriptionCard';
import PostPictureCard from '../components/ui/input/PostCards/PostPictureCard';
import PlusBigIcon from "../assets/icons/navigation/PlusBig-icon.svg";
import MapLocation from "../assets/icons/card funktioner/MapLocation-icon.svg";
import ArrowRightIcon from "../assets/icons/navigation/arrowRightSmall-icon.svg";
import CategoryIcon from "../assets/icons/kategori/category-icon.svg";
import PostTitleCard from '../components/ui/input/PostCards/PostTitleCard';
import PostButtonCard from '../components/ui/input/PostCards/PostButtonCard';
import KunstIcon from "/src/assets/icons/kategori/art-icon-filled.svg";
import CafeIcon from "/src/assets/icons/kategori/cafe-icon-filled.svg";
import OutdoorIcon from "/src/assets/icons/kategori/outdoor-icon-filled.svg";
import ShoppingIcon from "/src/assets/icons/kategori/shop-icon-filled.svg";
import UnderholdningIcon from "/src/assets/icons/kategori/entertainment-icon-filled.svg";
import "./Post.css";

function EditPost() {
  const [titleText, setTitleText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");
  const [country, setCountry] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [images, setImages] = useState<File[]>([]);
  const [showPopup, setShowPopup] = useState(false); 
  const navigate = useNavigate();

  const CATEGORIES = [
    { name: "Kunst", code: "kunst", icon: KunstIcon },
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

const handleSubmit = () => {
  console.log("Opslag opdateret!");
  console.log({ titleText, descriptionText, country, category });
  navigate("/explore");
};

  return (
    <div className="post-container">
      <TopBar
        title="Rediger opslag"
        showLeftIcon={true}
        showRightIcon={false}
        onLeftIconClick={() => {
          navigate("/explore");
        }}
        onRightIconClick={() => {}}
        leftIcon={cancelIcon}
        rightIcon=""
      />
      <div className="post-elements">
        <PostPictureCard
          icon={PlusBigIcon}
          onImagesSelect={(files) => setImages((prev) => [...prev, ...files])}
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
          <PostButtonCard
            title="Annulér"
            classNameButton="kladder-button-post"
          />
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

export default EditPost