import React from "react";
import { Link, NavLink } from "react-router-dom";

import {
  HomeOutlinedIcon,
  ExploreOutlinedIcon,
  FavoriteBorderOutlinedIcon,
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
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "sidebar-menu-item sidebar-active"
                  : "sidebar-menu-item"
              }
            >
              <HomeOutlinedIcon className="sidebar-menu-icon" />
              Home
            </NavLink>
          </li>
          <li className="sidebar-menu-item">
            <NavLink
              to="/explore"
              className={({ isActive }) =>
                isActive
                  ? "sidebar-menu-item sidebar-active"
                  : "sidebar-menu-item"
              }
            >
              <ExploreOutlinedIcon className="sidebar-menu-icon" />
              Explore
            </NavLink>
          </li>
          <li className="sidebar-menu-item">
            <NavLink
              to="likedvideos"
              className={({ isActive }) =>
                isActive
                  ? "sidebar-menu-item sidebar-active"
                  : "sidebar-menu-item"
              }
            >
              <FavoriteBorderOutlinedIcon className="sidebar-menu-icon" />
              Liked Videos
            </NavLink>
          </li>
          <li className="sidebar-menu-item">
            <NavLink
              to="/watchlater"
              className={({ isActive }) =>
                isActive
                  ? "sidebar-menu-item sidebar-active"
                  : "sidebar-menu-item"
              }
            >
              <WatchLaterOutlinedIcon className="sidebar-menu-icon" />
              Watch Later
            </NavLink>
          </li>
          <li className="sidebar-menu-item">
            <NavLink
              to="/playlist"
              className={({ isActive }) =>
                isActive
                  ? "sidebar-menu-item sidebar-active"
                  : "sidebar-menu-item"
              }
            >
              <PlaylistAddOutlinedIcon className="sidebar-menu-icon" />
              Playlist
            </NavLink>
          </li>
          <li className="sidebar-menu-item">
            <NavLink
              to="/history"
              className={({ isActive }) =>
                isActive
                  ? "sidebar-menu-item sidebar-active"
                  : "sidebar-menu-item"
              }
            >
              <HistoryOutlinedIcon className="sidebar-menu-icon" />
              History
            </NavLink>
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
          <Link to="/watchlater">
            <WatchLaterOutlinedIcon className="mobile-bottom-bar-icon" />
          </Link>
        </li>
        <li className="mobile-bottom-bar-item">
          <Link to="/playlist">
            <PlaylistAddOutlinedIcon className="mobile-bottom-bar-icon" />
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
