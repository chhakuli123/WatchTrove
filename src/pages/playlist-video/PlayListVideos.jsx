import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { usePlaylistContext } from "context";
import { PlayListVideoCard } from "components";
import { VideoCallOutlinedIcon } from "asset";

const PlaylistVideos = () => {
  const { playlistId } = useParams();
  const navigate = useNavigate();
  const {
    state: { playlists },
  } = usePlaylistContext();

  const isPlaylistVideo = playlists?.find(
    (eachPlaylist) => eachPlaylist._id === playlistId
  );
  const getAllVideo = isPlaylistVideo?.videos;

  return (
    <div className="playlist-viideo-container shared-container  middle-content">
      <header className="playlist-header">
        <h1 className="playlist-title">
          {isPlaylistVideo?.title} ({getAllVideo?.length})
        </h1>
        <button
          className="playlist-add-button"
          onClick={() => navigate("/explore")}
        >
          <VideoCallOutlinedIcon className="playlist-add-icon" />
          Explore
        </button>
      </header>

      {getAllVideo?.length === 0 && (
        <p className="empty-playlist-message">No Video Here,Please Add. 😊</p>
      )}

      <div className="shared-video-container">
        {getAllVideo?.map((eachVideo) => (
          <PlayListVideoCard key={eachVideo._id} video={eachVideo} />
        ))}
      </div>
    </div>
  );
};

export { PlaylistVideos };
