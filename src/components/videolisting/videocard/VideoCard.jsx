import React, { useState } from "react";
import { useNavigate } from "react-router";

import {
  PlaylistAddOutlinedIcon,
  WatchLaterOutlinedIcon,
  MoreVertOutlinedIcon,
  CheckCircleIcon,
  FiberManualRecordIcon,
  ThumbUpAltIcon,
  ThumbUpOffAltIcon,
} from "asset";
import { calculateYearsAgo } from "utils";
import { useAuth, useLikesContext } from "context";
import "./videocard.css";

const VideoCard = ({ video }) => {
  const [tool, setTool] = useState(false);
  const { state } = useLikesContext();
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  const {
    thumbnail,
    creatorImg,
    title,
    description,
    creator,
    view,
    timeStamp,
  } = video;

  const yearsAgo = calculateYearsAgo(timeStamp);

  // Like handler
  const { saveLikedVideo } = useLikesContext();

  const likedHandler = () => {
    // Sending liked video object to likes context
    isAuth ? saveLikedVideo(video) : navigate("/login");
    setTool(false);
  };

  const handleToolClick = (e) => {
    e.stopPropagation();
    setTool(!tool);
  };

  const handleIconClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="video-card">
      <img src={thumbnail} alt={title} className="video-thumbnail" />
      <div className="card-content">
        <div className="card-head">
          <img src={creatorImg} alt="" />
          <h2 className="card-title">{title}</h2>
        </div>

        <div
          className="tools"
          style={tool ? { display: "flex" } : { display: "none" }}
          onClick={handleIconClick}
        >
          <button onClick={() => likedHandler(video)}>
            {state.likedVideo.find(
              (eachVideo) => eachVideo._id === video._id
            ) ? (
              <ThumbUpAltIcon />
            ) : (
              <ThumbUpOffAltIcon />
            )}
          </button>
          <button>
            <WatchLaterOutlinedIcon />
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
