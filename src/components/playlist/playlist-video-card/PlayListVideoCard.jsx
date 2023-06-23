import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import { usePlaylistContext } from "context";
import { CheckCircleIcon, DeleteIcon } from "asset";

const PlayListVideoCard = ({ video }) => {
  const { playlistId } = useParams();
  const navigate = useNavigate();

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

  return (
    <div className="video-card" key={_id}>
      <img
        src={thumbnail}
        alt={title}
        className="video-thumbnail"
        onClick={() => navigate(`/watchpage/${_id}`)}
      />

      <div className="card-content">
        <div className="card-head">
          <img src={creatorImg} alt="creator-img" />
          <h2 className="card-title">{title}</h2>
        </div>

        <button
          className="btn-popup"
          onClick={() => deleteParticularVideo(video._id, playlistId)}
        >
          <DeleteIcon className="icons card-icon" />
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
