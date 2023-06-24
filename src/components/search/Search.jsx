import React from "react";
import { useNavigate } from "react-router-dom";

import { useAuth, useData, useHistoryContext } from "context";
import { YoutubeSearchedForIcon } from "asset";
import "./search.css";

const Search = ({ searchQuery, setShowSearchResult, inputRef }) => {
  const navigate = useNavigate();

  const {
    state: { videos },
  } = useData();
  const { isAuth } = useAuth();
  const { addHistoryVideo } = useHistoryContext();

  const filteredVideos = [...videos]?.filter(
    (eachVideo) =>
      eachVideo.title.toLowerCase().includes(searchQuery.query.toLowerCase()) ||
      eachVideo.categoryName.toLowerCase().includes(searchQuery.query.toLowerCase())
  );

  const handleSingleVideo = (eachVideo) => {
    inputRef.current.value = "";
    navigate(`/watchpage/${eachVideo._id}`);
    if(isAuth){
      addHistoryVideo(eachVideo);
    }
    setShowSearchResult(false);
  };

  return (
    <div className="search-results">
      <div className="search-result-wrapper">
        {filteredVideos.length === 0 ? (
          <p className="search-message">
            Match not found😞.
          </p>
        ) : (
          filteredVideos?.map((eachVideo, i) => (
            <div
              className="searched-item"
              key={i}
              onClick={() => handleSingleVideo(eachVideo)}
            >
              <div className="searched-item-icon">
                <YoutubeSearchedForIcon />
              </div>
              <div className="searched-item-details">
                <img className="thumbnail" src={eachVideo.thumbnail} alt="thumbnail" />
                <p className="title">{eachVideo.title}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export { Search };
