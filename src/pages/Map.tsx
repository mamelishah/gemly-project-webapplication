import React from "react";
import BottomNavigationBar from "../components/ui/layout/bottom-navigation-bar/BottomNavigationBar";
import PostTitleCard from "../components/ui/input/PostCards/PostTitleCard";
import PostDescriptionCard from "../components/ui/input/PostCards/PostDescriptionCard";

function Map() {
  return (
    <>
      <div>Map</div>
      <h1>Dette er en test for post-siden</h1>
      <PostTitleCard title="Skriv en passende titel" />
      <PostDescriptionCard description="Skriv en passende beskrivelse" />
      <BottomNavigationBar />
    </>
  );
}

export default Map;
