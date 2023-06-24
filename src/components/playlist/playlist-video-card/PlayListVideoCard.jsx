import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useAuth, useHistoryContext, usePlaylistContext } from "context";
import { CheckCircleIcon, DeleteIcon, MoreVertOutlinedIcon } from "asset";
import { useState } from "react";

const PlayListVideoCard = ({ video }) => {
  const [showTools, setShowTools] = useState(false);

  const { playlistId } = useParams();
  const navigate = useNavigate();

  const { isAuth } = useAuth();
  const { addHistoryVideo } = useHistoryContext();

  const {
    _id,
    thumbnail,
    title,
    creatorImg,
    creator,
    description,
    view,
  } = video;

  const { deleteParticularVideo } = usePlaylistContext();

  const singleVideoHandler = () => {
    navigate(`/watchpage/${_id}`);
    if(isAuth){
      addHistoryVideo(video);
    }
  };

  return (
    <div className="shared-video-card" key={_id}>
      <img
        src={thumbnail}
        alt={title}
        className="video-thumbnail"
        onClick={singleVideoHandler}
      />

      <div className="card-content">
        <div className="card-head">
          <img src={creatorImg} alt="" />
          <h2 className="card-title">{title}</h2>
        </div>

        <div
          className="tools liked-tools"
          style={{ display: showTools ? "flex" : "none" }}
        >
          <button
            className="tools-button"
            onClick={() => deleteParticularVideo(video._id, playlistId)}
          >
            <DeleteIcon className="icons" />
          </button>
        </div>

        <button className="btn-popup" onClick={() => setShowTools(!showTools)}>
          <MoreVertOutlinedIcon className="icons card-icon" />
        </button>
      </div>

      <p className="creator-title">
        {creator} <CheckCircleIcon className="icons" />
      </p>

      <p className="creator-timestamp">{view} views</p>

      <p className="video-description">{description}</p>
    </div>
  );
};

export { PlayListVideoCard };
