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

function Post() {
  return (
    <div className="post-container">
      <TopBar title="Tilføj opslag" showLeftIcon={true} showRightIcon={false} />
      <PostPictureCard icon={PlusBigIcon} />
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
      <div className="button-container">
        <PostButtonCard />
        <PostButtonCard />
      </div>
    </div>
  );
}

export default Post;
