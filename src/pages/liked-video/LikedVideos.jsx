import React from "react";
import { useNavigate } from "react-router";

import { useLikesContext } from "context";
import { VideoCallOutlinedIcon } from "asset";
import { LikedVideoCard } from "components";

const LikedVideos = () => {
  const {
    state: { likedVideo },
  } = useLikesContext();
  const navigate = useNavigate();

  return (
    <>
      <div className="likes-container shared-container middle-content">
        <header className="likes-container-header playlist-header">
          <h1 className="likes-title playlist-title">
            Liked Video ({likedVideo.length})
          </h1>

          <button
            className="clear-history-btn playlist-add-button"
            onClick={() => navigate("/explore")}
          >
            <VideoCallOutlinedIcon className="icons playlist-add-icon" />
            Explore
          </button>
        </header>

        {likedVideo?.length === 0 && (
          <p className="empty-playlist-message">
            There is no Liked video,Please Explore and Add 😊
          </p>
        )}

        <div className="shared-video-container">
          {likedVideo?.map((eachVideo) => (
            <LikedVideoCard key={eachVideo?._id} video={eachVideo} />
          ))}
        </div>
      </div>
    </>
  );
};

export { LikedVideos };
