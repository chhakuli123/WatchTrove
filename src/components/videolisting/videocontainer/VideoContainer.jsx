import React from "react";

import { useData } from "context";
import { VideoCard } from "../videocard/VideoCard";
import "./videocontainer.css"

const VideoContainer = () => {
  const { state } = useData();

  return (
    <>
      <div className="video-categories">
        {state.categories.map((category) => (
          <span
            className={`category-btn ${
              category.categoryName === state.category
                ? "active-category"
                : null
            }`}
            key={category._id}
          >
            {category.categoryName}
          </span>
        ))}
      </div>

      <div className="video-container">
        {state.videos.map((video) => (
          <VideoCard video={video} key={video._id}></VideoCard>
        ))}
      </div>
  </>
  );
};

export { VideoContainer };
