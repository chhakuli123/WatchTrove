/* eslint-disable no-lone-blocks */
import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

import { useAuth } from "./authContext";
import { playlistReducer } from "reducer";

const PlayListContext = createContext();

const initialState = {
  playlists: [],
};

export const PlayListContextProvider = ({ children }) => {
  const { isAuth } = useAuth();

  const [state, playlistDispatch] = useReducer(playlistReducer, initialState);

  useEffect(() => {
    // eslint-disable-next-line no-lone-blocks
    if (isAuth) {
      (async () => {
        try {
          const {
            data: { playlists },
            status,
          } = await axios.get("/api/user/playlists", {
            headers: {
              authorization: isAuth,
            },
          });

          if (status === 200) {
            playlistDispatch({
              type: "GET_PLAYLISTS",
              payload: playlists,
            });
          }
        } catch (error) {
          toast.error(error);
        }
      })();
    } else {
      playlistDispatch({ type: "CREATE_PLAYLIST", payload: [] });
    }
  }, [isAuth]);

  const createPlaylist = async (name) => {
    const { playlist } = name;

    if (playlist === "") {
      toast.error("Input Field can not be empty.");
    } else {
      {
        try {
          const {
            status,
            data: { playlists },
          } = await axios.post(
            "/api/user/playlists",
            { playlist: { title: playlist } },
            {
              headers: {
                authorization: isAuth,
              },
            }
          );

          if (status === 201) {
            toast.success("Playlist Created!");
            playlistDispatch({ type: "CREATE_PLAYLIST", payload: playlists });
          }
        } catch (error) {
          toast.error(error);
        }
      }
    }
  };

  const addToPlayList = async (newData, video) => {
    const { _id } = newData;

    try {
      const {
        data: { playlist },
        status,
      } = await axios.post(
        `/api/user/playlists/${_id}`,
        { video },
        {
          headers: { authorization: isAuth },
        }
      );

      if (status === 201) {
        playlistDispatch({ type: "ADD_TO_PLAYLIST", payload: playlist });
        toast.success(`Video Added to Playlist ${playlist.title}`);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const deletePlaylist = async (playlistID) => {
    try {
      const {
        data: { playlists },
        status,
      } = await axios.delete(`/api/user/playlists/${playlistID}`, {
        headers: { authorization: isAuth },
      });

      if (status === 200) {
        toast.success("Playlist Deleted!");
        playlistDispatch({ type: "DELETE_PLAYLISTS", payload: playlists });
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const deleteParticularVideo = async (videoID, playlistID) => {
    try {
      const {
        data: { playlist },
        status,
      } = await axios.delete(`/api/user/playlists/${playlistID}/${videoID}`, {
        headers: { authorization: isAuth },
      });

      if (status === 200) {
        toast.success(`Video Deleted from ${playlist.title}`);
        playlistDispatch({
          type: "DELETE_PARTICULAR_VIDEO",
          payload: playlist,
        });
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <PlayListContext.Provider
      value={{
        state,
        playlistDispatch,
        createPlaylist,
        addToPlayList,
        deleteParticularVideo,
        deletePlaylist,
      }}
    >
      {children}
    </PlayListContext.Provider>
  );
};

export const usePlaylistContext = () => useContext(PlayListContext);
