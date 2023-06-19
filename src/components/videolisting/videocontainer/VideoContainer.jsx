import React from "react";
import { useData } from "context";

import { VideoCard } from "../videocard/VideoCard";
import "./videocontainer.css";

const VideoContainer = () => {
  const { state, dispatch } = useData();

  const handleCategoryClick = (categoryName) => {
    dispatch({ type: "CATEGORY", payload: { categoryName } });
  };

  function filteredVideos() {
    let filteredVideos = [];
    if (state.category === "All") filteredVideos = state.videos;
    else
      filteredVideos = state.videos.filter(
        (perVideo) => perVideo.categoryName === state.category
      );
    return filteredVideos;
  }

  return (
    <>
      <div className="video-categories">
        {state.categories.map((category) => (
          <span
            className={`category-btn ${
              category.categoryName === state.category
                ? "active-category"
                : ""
            }`}
            key={category._id}
            onClick={() => handleCategoryClick(category.categoryName)}
          >
            {category.categoryName}
          </span>
        ))}
      </div>

      <div className="video-container">
        {filteredVideos().map((video) => (
          <VideoCard video={video} key={video._id} />
        ))}
      </div>
    </>
  );
};

export { VideoContainer };
