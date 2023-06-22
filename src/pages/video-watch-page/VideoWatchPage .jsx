import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  useAuth,
  useData,
  useLikesContext,
  useWatchLaterContext,
} from "context";
import { VideoCard } from "components";
import {
  CheckCircleIcon,
  PlaylistAddOutlinedIcon,
  ThumbUpAltIcon,
  ThumbUpOffAltIcon,
  WatchLaterIcon,
  WatchLaterOutlinedIcon,
} from "asset";
import "./videowatchpage.css";

const VideoWatchPage = () => {
  const { videoId } = useParams();
  const navigate = useNavigate();

  const { state } = useData();
  const { isAuth } = useAuth();
  const { state: likesState, saveLikedVideo } = useLikesContext();
  const { state: watchLaterState, addToWatchLater } = useWatchLaterContext();

  const selectedVideo = state.videos.find((video) => video._id === videoId);

  if (!selectedVideo) {
    return null;
  }

  const {
    creatorImg,
    title,
    description,
    creator,
    view,
    timeStamp,
    categoryName,
  } = selectedVideo;

  // Filter related videos by the selected video's category
  const relatedVideos = state.videos.filter(
    (video) => video.categoryName === categoryName && video._id !== videoId
  );

  const isVideoLiked = likesState.likedVideo?.find(
    (eachVideo) => eachVideo._id === selectedVideo._id
  );

  const isVideoWatchlater = watchLaterState?.watchLater?.some(
    (eachVideo) => eachVideo._id === selectedVideo._id
  );

  const handleLikeClick = () => {
    isAuth ? saveLikedVideo(selectedVideo) : navigate("/login");
  };

  const handleWatchLaterClick = () => {
    isAuth ? addToWatchLater(selectedVideo) : navigate("/login");
  };
  return (
    <div className="watch-page middle-content">
      <div className="watch-page-video-container">
        <iframe
          className="video-frame"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="watch-page-video-details">
          <h2 className="watch-page-video-title">{title}</h2>
          <div className="watch-page-creator-details">
            <img
              src={creatorImg}
              alt="Creator"
              className="watch-page-creator-img"
            />
            <span className="creator-title">
              {creator} <CheckCircleIcon className="icons" />
            </span>
          </div>
          <p className="watch-page-video-description">{description}</p>
          <div className="watch-page-video-stats">
            <span className="watch-page-view-count">{view} views</span>
            <span className="watch-page-timestamp">{timeStamp}</span>
          </div>
          {/* Like, History, and Playlist buttons */}
          <div className="watch-page-icons">
            <button
              className="watch-page-icon-button"
              onClick={handleLikeClick}
            >
              {isVideoLiked ? (
                <>
                  <ThumbUpAltIcon /> Unlike
                </>
              ) : (
                <>
                  <ThumbUpOffAltIcon /> Like
                </>
              )}
            </button>
            <button
              className="watch-page-icon-button"
              onClick={handleWatchLaterClick}
            >
              {isVideoWatchlater ? (
                <WatchLaterIcon />
              ) : (
                <WatchLaterOutlinedIcon />
              )}
              Watch Later
            </button>
            <button className="watch-page-icon-button">
              <PlaylistAddOutlinedIcon /> Save
            </button>
          </div>
        </div>
      </div>
      <div className="watch-page-related-video-container">
        <h2 className="related-videos-heading">Related Videos</h2>
        <div className="related-videos-container">
          {relatedVideos.map((video) => (
            <VideoCard video={video} key={video._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { VideoWatchPage };
