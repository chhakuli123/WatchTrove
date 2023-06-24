import React from "react";

import { useHistoryContext } from "context";
import { DeleteIcon } from "asset";
import { HistoryCard } from "components";

const History = () => {
  const {
    state: { watchedVideo },
    clearHistory,
  } = useHistoryContext();

  return (
    <div className="history-container shared-container middle-content">
      <header className="history-container-header playlist-header">
        <h2 className="history-title playlist-title">
          History ({watchedVideo?.length})
        </h2>

        <button
          className="clear-history-btn playlist-add-button"
          onClick={() => clearHistory()}
        >
          <DeleteIcon className="icons playlist-add-icon" /> Clear
        </button>
      </header>

      {watchedVideo?.length === 0 && (
        <p className="empty-playlist-message">
          History is cleared. Please watch 😊
        </p>
      )}

      <div className="shared-video-container">
        {[...watchedVideo].reverse()?.map((eachVideo) => (
          <HistoryCard key={eachVideo._id} video={eachVideo} />
        ))}
      </div>
    </div>
  );
};

export { History };
