import React, { useState } from "react";

import { usePlaylistContext } from "context";
import { PlayListCard } from "components";
import { CloseIcon, PlaylistAddOutlinedIcon } from "asset";
import "./playlist.css";

const Playlist = () => {
  const [createPlaylistModal, setCreatePlaylistModal] = useState(false);
  const [playlistName, setPlaylistName] = useState({ playlist: "" });

  const {
    state: { playlists },
    createPlaylist,
  } = usePlaylistContext();

  const playlistHandler = () => {
    createPlaylist(playlistName);
    setCreatePlaylistModal(false);
  };

  return (
    <>
      <div className="shared-container middle-content">
        <header className="playlist-header">
          <h1 className="playlist-title">Playlist ({playlists?.length})</h1>

          <button
            className="playlist-add-button"
            onClick={() => setCreatePlaylistModal(true)}
          >
            <PlaylistAddOutlinedIcon className="playlist-add-icon" />
            Playlist
          </button>
        </header>

        {playlists?.length === 0 && (
          <p className="empty-playlist-message">
            There are no playlists created. 😊
          </p>
        )}

        <div className="shared-video-container">
          {playlists?.map((eachPlaylist) => (
            <PlayListCard eachPlaylist={eachPlaylist} key={eachPlaylist._id} />
          ))}
        </div>
      </div>

      {/* Modal for create playlist */}
      <div
        className={`create-playlist-modal ${
          createPlaylistModal ? "modal-visible" : "modal-hidden"
        }`}
      >
        <div className="modal-body">
          <div className="modal-header">
            <h4 className="modal-title">Create Playlist</h4>
            <CloseIcon
              className="modal-close-icon"
              onClick={() => setCreatePlaylistModal(false)}
            />
          </div>
          <div className="input-playlist-wrapper">
            <input
              type="text"
              className="playlist-name-input"
              placeholder="Enter playlist name"
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
            onClick={() => playlistHandler()}
          >
            <PlaylistAddOutlinedIcon className="playlist-add-icon" />
            Create New Playlist
          </button>
        </div>
      </div>
      {/* Modal for create playlist */}
    </>
  );
};

export { Playlist };
