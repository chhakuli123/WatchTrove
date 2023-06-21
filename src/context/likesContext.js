import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

import { useAuth } from "./authContext";
import { likesReducer } from "reducer";

const initialState = {
  likedVideo: [],
};

const LikesContext = createContext();

export const LikesContextProvider = ({ children }) => {
  const { isAuth } = useAuth();

  const [state, likesDispatch] = useReducer(likesReducer, initialState);

  const { likedVideo } = state;

  useEffect(() => {
    if (isAuth) {
      (async () => {
        try {
          const {
            data: { likes },
            status,
          } = await axios.get("/api/user/likes", {
            headers: {
              authorization: isAuth,
            },
          });

          if (status === 200) {
            likesDispatch({ type: "GET_LIKED_VIDEO", payload: likes });
          }
        } catch (error) {
          toast.error(error);
        }
      })();
    } else {
      likesDispatch({ type: "GET_LIKED_VIDEO", payload: [] });
    }
  }, [isAuth]);

  const saveLikedVideo = async (video) => {
    if (likedVideo.find((eachVideo) => eachVideo._id === video._id)) {
      try {
        const {
          status,
          data: { likes },
        } = await axios.delete(`/api/user/likes/${video._id}`, {
          headers: {
            authorization: isAuth,
          },
        });

        if (status === 200) {
          toast.success("Video Unliked!");
          likesDispatch({ type: "REMOVE_LIKED_VIDEO", payload: likes });
        }
      } catch (error) {
        toast.error(error);
      }
    } else {
      try {
        const {
          status,
          data: { likes },
        } = await axios.post(
          "/api/user/likes",
          { video },
          {
            headers: {
              authorization: isAuth,
            },
          }
        );

        if (status === 201) {
          toast.success("Video Liked!");
          likesDispatch({ type: "SAVED_LIKED_VIDEO", payload: likes });
        }
      } catch (error) {
        toast.error(error);
      }
    }
  };

  const removeLikedVideo = async (videoId) => {
    if (likedVideo.find((eachVideo) => eachVideo._id === videoId)) {
      try {
        const {
          status,
          data: { likes },
        } = await axios.delete(`/api/user/likes/${videoId}`, {
          headers: {
            authorization: isAuth,
          },
        });

        if (status === 200) {
          toast.success("Liked Video Removed!");
          likesDispatch({ type: "REMOVE_LIKED_VIDEO", payload: likes });
        }
      } catch (error) {
        toast.error(...error);
      }
    }
  };

  return (
    <LikesContext.Provider value={{ state, saveLikedVideo, removeLikedVideo }}>
      {children}
    </LikesContext.Provider>
  );
};

export const useLikesContext = () => useContext(LikesContext);
