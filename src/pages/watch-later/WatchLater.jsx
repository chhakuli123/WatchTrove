import React from "react";
import { useNavigate } from "react-router";

import { useWatchLaterContext } from "context";
import { VideoCallOutlinedIcon } from "asset";
import { WatchLaterCard } from "components";

const WatchLater = () => {
  const { state } = useWatchLaterContext();
  const navigate = useNavigate();

  return (
    <div className="watch-later-container shared-container middle-content">
      <header className="watch-later-header playlist-header">
        <h1 className="watch-later-title playlist-title">
          WatchLater Video ({state?.watchLater?.length})
        </h1>

        <button
          className="clear-history-btn playlist-add-button"
          onClick={() => navigate("/explore")}
        >
          <VideoCallOutlinedIcon className="icons playlist-add-icon" />
          Explore
        </button>
      </header>

      {state?.watchLater?.length === 0 && (
        <p className="empty-playlist-message">
          There is no WatchLater video, Please Explore and Add 😊
        </p>
      )}

      <div className="shared-video-container">
        {state?.watchLater?.map((eachVideo) => (
          <WatchLaterCard key={eachVideo?._id} video={eachVideo} />
        ))}
      </div>
    </div>
  );
};

export { WatchLater };
