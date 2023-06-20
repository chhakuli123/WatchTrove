import React from "react";
import { useNavigate } from "react-router";

import { LoginIcon, LogoutIcon } from "asset";
import { useAuth } from "context";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuth, logoutHandler } = useAuth();

  return (
    <nav className="navbar-container">
      <div className="navbar-logo-container" onClick={() => navigate("/")}>
        <img
          className="navbar-logo-image"
          src="https://res.cloudinary.com/dptfwcnro/image/upload/v1686906358/WatchTrove/phj7thxbpn78dzanlnyp.png"
          alt="nav"
        />
        <h3 className="navbar-logo-text">WatchTrove</h3>
      </div>

      <div className="navbar-button-container">
        {isAuth ? (
          <button className="navbar-login-button" onClick={logoutHandler}>
            <LogoutIcon /> Logout
          </button>
        ) : (
          <button
            className="navbar-login-button"
            onClick={() => navigate("/login")}
          >
            <LoginIcon /> Login
          </button>
        )}
      </div>
    </nav>
  );
};

export { Navbar };
