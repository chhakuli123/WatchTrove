import React from "react";
import { Link } from "react-router-dom";

import {
  HomeOutlinedIcon,
  ExploreOutlinedIcon,
  FavoriteBorderOutlinedIcon,
  FileUploadOutlinedIcon,
  HistoryOutlinedIcon,
  PlaylistAddOutlinedIcon,
  WatchLaterOutlinedIcon,
} from "asset";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* Desktop Sidebar */}
      <div className="desktop-sidebar ">
        <ul className="sidebar-menu">
          <li className="sidebar-menu-item">
            <Link to="/">
              <HomeOutlinedIcon className="sidebar-menu-icon" />
              Home
            </Link>
          </li>
          <li className="sidebar-menu-item">
            <Link to="/explore">
              <ExploreOutlinedIcon className="sidebar-menu-icon" />
              Explore
            </Link>
          </li>
          <li className="sidebar-menu-item">
            <Link to="/likedvideos">
              <FavoriteBorderOutlinedIcon className="sidebar-menu-icon" />
              Liked Videos
            </Link>
          </li>
          <li className="sidebar-menu-item">
            <Link to="/watch-later">
              <WatchLaterOutlinedIcon className="sidebar-menu-icon" />
              Watch Later
            </Link>
          </li>
          <li className="sidebar-menu-item">
            <Link to="/playlist">
              <PlaylistAddOutlinedIcon className="sidebar-menu-icon" />
              Playlist
            </Link>
          </li>
          <li className="sidebar-menu-item">
            <Link to="/upload-video">
              <FileUploadOutlinedIcon className="sidebar-menu-icon" />
              Upload Video
            </Link>
          </li>
          <li className="sidebar-menu-item">
            <Link to="/history">
              <HistoryOutlinedIcon className="sidebar-menu-icon" />
              History
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Bottom Bar */}
      <ul className="mobile-bottom-bar">
        <li className="mobile-bottom-bar-item">
          <Link to="/">
            <HomeOutlinedIcon className="mobile-bottom-bar-icon" />
          </Link>
        </li>
        <li className="mobile-bottom-bar-item">
          <Link to="/explore">
            <ExploreOutlinedIcon className="mobile-bottom-bar-icon" />
          </Link>
        </li>
        <li className="mobile-bottom-bar-item">
          <Link to="/likedvideos">
            <FavoriteBorderOutlinedIcon className="mobile-bottom-bar-icon" />
          </Link>
        </li>
        <li className="mobile-bottom-bar-item">
          <Link to="/watch-later">
            <WatchLaterOutlinedIcon className="mobile-bottom-bar-icon" />
          </Link>
        </li>
        <li className="mobile-bottom-bar-item">
          <Link to="/playlist">
            <FileUploadOutlinedIcon className="mobile-bottom-bar-icon" />
          </Link>
        </li>
        <li className="mobile-bottom-bar-item">
          <Link to="/history">
            <HistoryOutlinedIcon className="mobile-bottom-bar-icon" />
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export { Sidebar };
