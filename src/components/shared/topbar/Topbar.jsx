import React, { useState,useCallback,useRef } from "react";
import { useNavigate } from "react-router-dom";
import debounce from "lodash.debounce";

import {
  LightModeOutlinedIcon,
  PersonOutlineOutlinedIcon,
  SearchIcon,
} from "asset";
import { Search } from "components";
import "./topbar.css";

const Topbar = () => {
  const [searchQuery, setSearchQuery] = useState({ query: "" });
  const [showSearchResult, setShowSearchResult] = useState(false);
  const navigate = useNavigate();
  
  const SearchInputHandler = (event) => {
      if (/^\s/.test(event.target.value)) {
        setShowSearchResult(false);
        return;
      } else {
        if (event.target.value.length > 0) {
          setShowSearchResult(true);
          setSearchQuery((prev) => ({ ...prev, query: event.target.value }));
        } else {
          setShowSearchResult(false);
        }
      }
    };
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedChangeHandler = useCallback(
      debounce(SearchInputHandler, 500),
      []
    );
  
    const inputRef = useRef()
  return (
    <div className="topbar-container">
      <nav className="topbar">
        <div className="topbar-left">
          <div className="topbar-logo-container" onClick={() => navigate("/")}>
            <img
              className="topbar-logo-image"
              src="https://res.cloudinary.com/dptfwcnro/image/upload/v1686906358/WatchTrove/phj7thxbpn78dzanlnyp.png"
              alt="nav"
            />
            <h3 className="topbar-logo-text">WatchTrove</h3>
          </div>
        </div>
        <div className="topbar-center">
          <div className="topbar-search">
            <input ref={inputRef} type="text" placeholder="Search for videos"   onChange={debouncedChangeHandler}  />
            <SearchIcon className="search-icon" />
             {showSearchResult && (
              <Search
                searchQuery={searchQuery}
                setShowSearchResult={setShowSearchResult}
                inputRef = {inputRef}
              />
            )}
          </div>
        </div>
        <div className="topbar-right">
          <div className="topbar-icons">
            <LightModeOutlinedIcon />
            <PersonOutlineOutlinedIcon onClick={() => navigate("/profile")}/>
          </div>
        </div>
      </nav>
    </div>
  );
};

export { Topbar };
