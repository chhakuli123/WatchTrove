import React from "react";
import { useNavigate } from "react-router";

import { useLikesContext } from "context";
import { VideoCallOutlinedIcon } from "asset";
import { LikedVideoCard } from "components";
import "./likes.css";

const Likes = () => {
  const {
    state: { likedVideo },
  } = useLikesContext();
  const navigate = useNavigate();

  return (
    <>
      <div className="likes-container middle-content">
        <header className="likes-container-header">
          <h1 className="text-md">Liked Video ({likedVideo.length})</h1>
          {likedVideo?.length === 0 && (
            <>
              <h3>There is no Liked video. <br /> Please Explore and Add 😊</h3>
              <div className="hero-btn-container">
                <button
                  className="hero-btn-explore"
                  onClick={() => navigate("/explore")}
                >
                  <VideoCallOutlinedIcon style={{ fontSize: "2rem" }} />
                  Explore
                </button>
              </div>
            </>
          )}
        </header>
        <div className="video-container">
          {likedVideo?.map((eachVideo) => (
            <LikedVideoCard key={eachVideo?._id} video={eachVideo} />
          ))}
        </div>
      </div>
    </>
  );
};

export { Likes };
