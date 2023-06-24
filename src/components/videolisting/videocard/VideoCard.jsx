import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  PlaylistAddOutlinedIcon,
  WatchLaterOutlinedIcon,
  MoreVertOutlinedIcon,
  CheckCircleIcon,
  FiberManualRecordIcon,
  ThumbUpAltIcon,
  ThumbUpOffAltIcon,
  WatchLaterIcon,
} from "asset";
import { calculateYearsAgo } from "utils";
import {
  useAuth,
  useHistoryContext,
  useLikesContext,
  usePlaylistContext,
  useWatchLaterContext,
} from "context";
import "./videocard.css";
import { PlaylistModal } from "components";

const VideoCard = ({ video }) => {
  const [showTools, setShowTools] = useState(false);
  const navigate = useNavigate();

  const { isAuth } = useAuth();
  const { state, saveLikedVideo } = useLikesContext();
  const { state: watchLaterState, addToWatchLater } = useWatchLaterContext();
  const { addHistoryVideo } = useHistoryContext();

  const {
    _id,
    thumbnail,
    creatorImg,
    title,
    description,
    creator,
    view,
    timeStamp,
  } = video;
  const yearsAgo = calculateYearsAgo(timeStamp);

  // --------------------Playlist Handler-------------------------------------
  const [createPlaylistModal, setCreatePlaylistModal] = useState(false);
  const { state: { playlists } } = usePlaylistContext();

  const modalHandler = (event) => {
    event.stopPropagation();
    isAuth ? setCreatePlaylistModal(true) : navigate("/login")
    setShowTools(false);
  };

  // --------------------liked Handler-------------------------------------
  const likedHandler = () => {
    isAuth ? saveLikedVideo(video) : navigate("/login");
    setShowTools(false);
  };

  const isVideoLiked = state.likedVideo.some(
    (eachVideo) => eachVideo._id === _id
  );

  // --------------------watchLater Handler -------------------------------------
  const watchLaterHandler = () => {
    isAuth ? addToWatchLater(video) : navigate("/login");
    setShowTools(false);
  };

  const isVideoWatchlater =  watchLaterState && watchLaterState?.watchLater?.some(
    (eachVideo) => eachVideo._id === _id
  );

  const handleToolClick = (e) => {
    e.stopPropagation();
    setShowTools(!showTools);
  };
  
  const singleVideoHandler = () => {
    navigate(`/watchpage/${_id}`);
    if(isAuth){
      addHistoryVideo(video);
    }
  };

  return (
    <div className="video-card" onClick={singleVideoHandler}>
      <img src={thumbnail} alt={title} className="video-thumbnail" />
      <div className="card-content">
        <div className="card-head">
          <img src={creatorImg} alt="creator-img" />
          <h2 className="card-title">{title}</h2>
        </div>

        <div
          className="tools"
          style={{ display: showTools ? "flex" : "none" }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="tools-button" onClick={likedHandler}>
            {isVideoLiked ? <ThumbUpAltIcon className="icons"  /> : <ThumbUpOffAltIcon className="icons"  />}
          </button>

          <button  className="tools-button" onClick={watchLaterHandler}>
            {isVideoWatchlater ? (
              <WatchLaterIcon className="icons"  />
            ) : (
              <WatchLaterOutlinedIcon className="icons" />
            )}
          </button>

        
          <button className="tools-button" onClick={(event) => modalHandler(event)}>
            <PlaylistAddOutlinedIcon className="icons"  />
          </button>
        
        </div>

        <button className="btn-popup" onClick={handleToolClick}>
          <MoreVertOutlinedIcon className="icons card-icon" />
        </button>

        <p className="creator-title">
          {creator} <CheckCircleIcon className="icons" />
        </p>

        <p className="creator-timestamp">
          {view} views <FiberManualRecordIcon className="icons" />
          {yearsAgo}
        </p>

        <p className="video-description">{description}</p>
      </div>

      {/*  Playlist modal*/}
      {createPlaylistModal && (
        <PlaylistModal
          video={video}
          setCreatePlaylistModal={setCreatePlaylistModal}
          playlists={playlists}
        />
      )}
    </div>
  );
};

export { VideoCard };
