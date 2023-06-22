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
import { useAuth, useLikesContext, useWatchLaterContext } from "context";
import "./videocard.css";

const VideoCard = ({ video }) => {
  const [showTools, setShowTools] = useState(false);
  const navigate = useNavigate();

  const { isAuth } = useAuth();
  const { state, saveLikedVideo } = useLikesContext();
  const { state: watchLaterState, addToWatchLater } = useWatchLaterContext();

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

  const likedHandler = () => {
    isAuth ? saveLikedVideo(video) : navigate("/login");
    setShowTools(false);
  };

  const watchLaterHandler = () => {
    isAuth ? addToWatchLater(video) : navigate("/login");
    setShowTools(false);
  };
  
  const handleToolClick = (e) => {
    e.stopPropagation();
    setShowTools(!showTools);
  };

  const isVideoLiked = state.likedVideo.some(
    (eachVideo) => eachVideo._id === _id
  );

  const isVideoWatchlater = watchLaterState?.watchLater?.some(
    (eachVideo) => eachVideo._id === _id
  );

  return (
    <div className="video-card" onClick={() => navigate(`/watchpage/${_id}`)}>
      <img src={thumbnail} alt={title} className="video-thumbnail" />
      <div className="card-content">
        <div className="card-head">
          <img src={creatorImg} alt="" />
          <h2 className="card-title">{title}</h2>
        </div>

        <div
          className="tools"
          style={{ display: showTools ? "flex" : "none" }}
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={likedHandler}>
            {isVideoLiked ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
          </button>
          <button onClick={watchLaterHandler}>
            {isVideoWatchlater ? (
              <WatchLaterIcon />
            ) : (
              <WatchLaterOutlinedIcon />
            )}
          </button>
          <button>
            <PlaylistAddOutlinedIcon />
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
    </div>
  );
};

export { VideoCard };
