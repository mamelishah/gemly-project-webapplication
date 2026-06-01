import React from "react";
import BottomNavigationBar from "../components/ui/layout/bottom-navigation-bar/BottomNavigationBar";
import PostTitleCard from "../components/ui/input/PostCards/PostTitleCard";
import PostDescriptionCard from "../components/ui/input/PostCards/PostDescriptionCard";
import PostPictureCard from "../components/ui/input/PostCards/PostPictureCard";
import Brasilien from "../assets/images/countries/Brasilien/Brazil-main-image.png";
import PlusBigIcon from "../assets/icons/navigation/plusBig-icon.svg";
import PostCategoryCard from "../components/ui/input/PostCards/PostCategoryCard";
import CategoryIcon from "../assets/icons/kategori/category-icon.svg";
import ArrowRightIcon from "../assets/icons/navigation/arrowRightBig-icon.svg";
import MapLocation from "../assets/icons/card funktioner/mapLocation-icon.svg";

function Map() {
  return (
    <>
      <div>Map</div>
      <h1>Dette er en test for post-siden</h1>
      <PostPictureCard image={Brasilien} icon={PlusBigIcon} />
      <PostTitleCard title="Skriv en passende titel" />
      <PostDescriptionCard description="Skriv en passende beskrivelse" />
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
      <BottomNavigationBar />
    </>
  );
}

export default Map;
