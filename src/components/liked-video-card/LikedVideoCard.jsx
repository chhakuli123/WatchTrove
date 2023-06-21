import React, { useState } from "react";

import { useLikesContext } from "context";
import { CheckCircleIcon, DeleteIcon, MoreVertOutlinedIcon } from "asset";

const LikedVideoCard = ({ video }) => {
  const [tool, setTool] = useState(false);

  const { removeLikedVideo } = useLikesContext();
  const { _id, thumbnail, title, creatorImg, creator, description } = video;

  return (
    <div className="video-card" key={_id}>
      <img src={thumbnail} alt={title} className="video-thumbnail" />

      <div className="card-content">
        <div className="card-head">
          <img src={creatorImg} alt="" />
          <h2 className="card-title">{title}</h2>
        </div>

        <div
          className="tools liked-tools"
          style={tool ? { display: "flex" } : { display: "none" }}
        >
          <button
          className="delete-icon"
            onClick={() => removeLikedVideo(video._id)}
          >
            <DeleteIcon className="icons" />
          </button>
        </div>

        <button className="btn-popup" onClick={() => setTool(!tool)}>
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

export { LikedVideoCard };
