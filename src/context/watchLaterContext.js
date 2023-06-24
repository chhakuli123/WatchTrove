import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

import { useAuth } from "./authContext";
import { watchLaterReducer } from "reducer";

const WatchLaterContext = createContext();

const initialState = {
  watchLater: [],
};

export const WatchLaterContextProvider = ({ children }) => {
  const { isAuth } = useAuth();

  const [state, watchLaterDispatch] = useReducer(
    watchLaterReducer,
    initialState
  );
  const { watchLater } = state;

  useEffect(() => {
    // eslint-disable-next-line no-lone-blocks
    {
      isAuth &&
        (async () => {
          try {
            const {
              data: { watchLater },
              status,
            } = await axios.get("/api/user/watchLater", {
              headers: {
                authorization: isAuth,
              },
            });

            if (status === 200) {
              watchLaterDispatch({
                type: "GET_WATCHLATER_VIDEO",
                payload: watchLater,
              });
            }
          } catch (error) {
            console.error("Post Error:", error);
          }
        })();
    }
  }, [isAuth]);

  const addToWatchLater = async (video) => {
    const existingVideo =
      watchLater &&
      watchLater?.find((eachVideo) => eachVideo._id === video._id);

    if (existingVideo) {
      try {
        const {
          status,
          data: { watchLater },
        } = await axios.delete(`/api/user/watchLater/${existingVideo._id}`, {
          headers: {
            authorization: isAuth,
          },
        });

        if (status === 200) {
          toast.success("Removed From Watch Later!");
          watchLaterDispatch({
            type: "REMOVE_WATCHLATER_VIDEO",
            payload: watchLater,
          });
        }
      } catch (error) {
        console.log(error.message);
      }
    } else {
      try {
        const {
          status,
          data: { watchLater },
        } = await axios.post(
          "/api/user/watchLater",
          { video },
          {
            headers: {
              authorization: isAuth,
            },
          }
        );

        if (status === 201) {
          toast.success("Added To Watch Later!");
          watchLaterDispatch({
            type: "SAVED_WATCHLATER_VIDEO",
            payload: watchLater,
          });
        }
      } catch (error) {
        console.error("Post Error:", error);
      }
    }
  };

  const removeWatchLater = async (videoId) => {
    if (watchLater.find((eachVideo) => eachVideo._id === videoId)) {
      try {
        const {
          status,
          data: { watchLater },
        } = await axios.delete(`/api/user/watchLater/${videoId}`, {
          headers: {
            authorization: isAuth,
          },
        });

        if (status === 200) {
          toast.success("Removed From Watch Later!");
          watchLaterDispatch({
            type: "REMOVE_WATCHLATER_VIDEO",
            payload: watchLater,
          });
        }
      } catch (error) {
        console.error("Post Error:", error);
      }
    }
  };

  return (
    <WatchLaterContext.Provider
      value={{ state, watchLaterDispatch, addToWatchLater, removeWatchLater }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
};

export const useWatchLaterContext = () => useContext(WatchLaterContext);
