import React from "react";
import { useNavigate } from "react-router-dom";

import {
  LightModeOutlinedIcon,
  PersonOutlineOutlinedIcon,
  SearchIcon,
} from "asset";
import "./topbar.css";

const Topbar = () => {
  const navigate = useNavigate();
  
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
            <input type="text" placeholder="Search for videos" />
            <SearchIcon className="search-icon" />
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
