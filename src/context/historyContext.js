import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

import { useAuth } from "./authContext";
import { historyReducer } from "reducer";

const initialState = {
  watchedVideo: [],
};

const HistoryContext = createContext();

export const HistoryContextProvider = ({ children }) => {
  const { isAuth } = useAuth();
  const [state, historyDispatch] = useReducer(historyReducer, initialState);
  const { watchedVideo } = state;

  useEffect(() => {
    // eslint-disable-next-line no-lone-blocks
    if (isAuth) {
      (async () => {
        try {
          const {
            data: { history },
            status,
          } = await axios.get("/api/user/history", {
            headers: {
              authorization: isAuth,
            },
          });

          if (status === 200) {
            historyDispatch({ type: "HISTORY_SAVED", payload: history });
          }
        } catch (error) {
          console.log(error.message);
        }
      })();
    } else {
      historyDispatch({ type: "HISTORY_SAVED", payload: [] });
    }
  }, [isAuth]);

  const addHistoryVideo = async (video) => {
    if (watchedVideo.find((eachVideo) => eachVideo._id === video._id)) {
      deleteHistory(video.id);
    } else {
      try {
        const {
          status,
          data: { history },
        } = await axios.post(
          "/api/user/history",
          { video },
          {
            headers: {
              authorization: isAuth,
            },
          }
        );

        if (status === 201) {
          historyDispatch({ type: "HISTORY_SAVED", payload: history });
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const clearHistory = async () => {
    if (isAuth) {
      try {
        const {
          status,
          data: { history },
        } = await axios.delete("/api/user/history/all", {
          headers: {
            authorization: isAuth,
          },
        });

        if (status === 200) {
          toast.success("All History Cleared!");
          historyDispatch({ type: "CLEAR_HISTORY", payload: history });
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const deleteHistory = async (videoId) => {
    try {
      const {
        data: { history },
        status,
      } = await axios.delete(`/api/user/history/${videoId}`, {
        headers: { authorization: isAuth },
      });

      if (status === 200) {
        toast.success("Video Removed From History!");

        historyDispatch({ type: "DELETE_HISTORY", payload: history });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <HistoryContext.Provider
      value={{
        state,
        historyDispatch,
        addHistoryVideo,
        clearHistory,
        deleteHistory,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistoryContext = () => useContext(HistoryContext);
