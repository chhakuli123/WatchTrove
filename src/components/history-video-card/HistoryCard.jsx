import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useHistoryContext } from "context";
import { CheckCircleIcon, DeleteIcon, MoreVertOutlinedIcon } from "asset";

const HistoryCard = ({ video }) => {
  const [showTools, setShowTools] = useState(false);
  const navigate = useNavigate();
  const { deleteHistory } = useHistoryContext();

  const { _id, thumbnail, creatorImg, title, description, creator } = video;

  const handleToolClick = (e) => {
    e.stopPropagation();
    setShowTools(!showTools);
  };

  const handleRemoveHistorydVideo = (e) => {
    e.stopPropagation();
    deleteHistory(_id);
  };

  return (
    <div className="shared-video-card" key={_id} onClick={()=> navigate(`/watchpage/${_id}`)}>
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
          <button className="tools-button" onClick={handleRemoveHistorydVideo}>
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

export { HistoryCard };
