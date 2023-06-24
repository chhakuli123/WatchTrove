import React from "react";
import { useNavigate } from "react-router-dom";

import { usePlaylistContext } from "context";
import { DeleteIcon } from "asset";

const PlayListCard = ({ eachPlaylist }) => {
  const { title, videos, _id } = eachPlaylist;
  const navigate = useNavigate();

  const { deletePlaylist } = usePlaylistContext();

  const playlistVideosHandler = () => {
    navigate(`/playlist/${_id}`);
  };

  return (
    <div className="shared-video-card">
        <img
          src={
            videos?.length === 0
              ? "https://res.cloudinary.com/dptfwcnro/image/upload/v1686893353/WatchTrove/rpv5nterhao2yjq4kat7.png"
              : videos.slice(-1)[0]?.thumbnail
          }
          onClick={() => playlistVideosHandler()}
          alt={title}
          className="video-thumbnail"
        />

        <div className="playlist-card-header">
          <h2>{title} ({videos.length})</h2>
          <span>
            <DeleteIcon
              className="playlist-delete"
              onClick={() => deletePlaylist(_id)}
            />
          </span>
        </div>
    </div>
  );
};

export { PlayListCard };
