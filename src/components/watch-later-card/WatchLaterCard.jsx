import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useWatchLaterContext } from "context";
import { CheckCircleIcon, DeleteIcon, MoreVertOutlinedIcon } from "asset";

const WatchLaterCard = ({ video }) => {
  const [showTools, setShowTools] = useState(false);
  const navigate = useNavigate();
  const { removeWatchLater } = useWatchLaterContext();

  const { _id, thumbnail, title, creatorImg, creator, description } = video;

  const handleToolClick = (e) => {
    e.stopPropagation();
    setShowTools(!showTools);
  };

  const handleRemoveLikedVideo = (e) => {
    e.stopPropagation();
    removeWatchLater(video._id);
  };

  console.log("Rendering WatchLaterCard:", video);

  return (
    <div className="video-card" key={_id} onClick={() => navigate(`/watchpage/${_id}`)}>
      <img src={thumbnail} alt={title} className="video-thumbnail" />

      <div className="card-content">
        <div className="card-head">
          <img src={creatorImg} alt="" />
          <h2 className="card-title">{title}</h2>
        </div>

        <div
          className="tools liked-tools"
          style={{ display: showTools ? "flex" : "none" }}
        >
          <button className="delete-icon" onClick={handleRemoveLikedVideo}>
            <DeleteIcon className="icons" />
          </button>
        </div>

        <button className="btn-popup" onClick={handleToolClick}>
          <MoreVertOutlinedIcon className="icons card-icon" />
        </button>
      </div>

      <p className="creator-title">
        {creator} <CheckCircleIcon className="icons" />
      </p>

      <p className="video-description">{description}</p>
    </div>
  );
};

export { WatchLaterCard };
