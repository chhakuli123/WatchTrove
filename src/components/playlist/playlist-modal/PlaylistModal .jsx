import React, { useState } from "react";

import { CloseIcon, PlaylistAddOutlinedIcon } from "asset";
import { usePlaylistContext } from "context";

const PlaylistModal = ({ video, setCreatePlaylistModal, playlists }) => {
  const [playlistName, setPlaylistName] = useState({ playlist: "" });

  const { createPlaylist, addToPlayList } = usePlaylistContext();

  const playlistHandlers = () => {
    createPlaylist(playlistName);
  };

  return (
    <div
      className="playlist-modal-container"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="create-playlist-wrapper">
        <div className="modal-header">
          <h4 className="modal-title">PlayList</h4>
          <CloseIcon
            onClick={() => setCreatePlaylistModal(false)}
            className="modal-close-icon"
          />
        </div>

        <div className="lists-playlist">
          {playlists?.map((data, i) => {
            return data.videos.find(
              (eachVideo) => eachVideo._id === video._id
            ) ? (
              <button key={data._id} className="created-playlist">
                <PlaylistAddOutlinedIcon className="icons tools-icon icon-circle-plus" />
                {data.title}
              </button>
            ) : (
              <button
                key={data._id}
                className="created-playlist"
                onClick={() => addToPlayList(data, video)}
              >
                <PlaylistAddOutlinedIcon className="icons tools-icon icon-circle-plus" />
                {data.title}
              </button>
            );
          })}
        </div>

        <div className="input-playlist-wrapper">
          <input
            type="text"
            className="playlist-name-input"
            placeholder="Enter playlist Name"
            onChange={(event) =>
              setPlaylistName((prev) => ({
                ...prev,
                playlist: event.target.value,
              }))
            }
          />
        </div>

        <button
          className="playlist-create-button"
          onClick={() => playlistHandlers()}
        >
          <PlaylistAddOutlinedIcon className="playlist-add-icon" />
          Create New Playlist
        </button>
      </div>
    </div>
  );
};

export { PlaylistModal };
