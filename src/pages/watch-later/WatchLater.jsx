import React from "react";
import { useNavigate } from "react-router";

import { useWatchLaterContext } from "context";
import { VideoCallOutlinedIcon } from "asset";
import { WatchLaterCard } from "components/watch-later-card/WatchLaterCard";

const WatchLater = () => {
  const {
    state
  } = useWatchLaterContext();
  const navigate = useNavigate();

  return (
    
      <div className="watch-later-container likes-container middle-content">
        <header className="watch-later-header likes-container-header">
          <h1 className="text-md">WatchLater Video ({state.watchLater.length})</h1>
          {state.watchLater?.length === 0 && (
            <>
              <h3>There is no WatchLater video. <br />
              Please Explore and Add 😊</h3>
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
          {state.watchLater?.map((eachVideo) => (
            <WatchLaterCard key={eachVideo?._id} video={eachVideo} />
          ))}
        </div>
      </div>
    
  );
};

export { WatchLater };
