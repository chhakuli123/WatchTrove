import React, { useState } from "react";

import {
  FavoriteBorderOutlinedIcon,
  PlaylistAddOutlinedIcon,
  WatchLaterOutlinedIcon,
  MoreVertOutlinedIcon,
  CheckCircleIcon,
  FiberManualRecordIcon,
} from "asset";
import { calculateYearsAgo } from "utils";
import "./videocard.css";

const VideoCard = ({ video }) => {
  const [tool, setTool] = useState(false);

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

  return (
    <>
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
          >
            <button>
              <FavoriteBorderOutlinedIcon />
            </button>
            <button>
              <WatchLaterOutlinedIcon />
            </button>

            <button>
              <PlaylistAddOutlinedIcon />
            </button>
          </div>

          <button className="btn-popup" onClick={() => setTool(!tool)}>
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
    </>
  );
};

export { VideoCard };
