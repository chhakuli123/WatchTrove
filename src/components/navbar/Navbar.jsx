import React from "react";
import { useNavigate } from "react-router";

import "./navbar.css";
import { LoginIcon } from "asset";

const Navbar = () => {
  const navigate = useNavigate();

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
        <button
          className="navbar-login-button"
          onClick={() => navigate("/login")}
        >
          <LoginIcon/> Login
        </button>
      </div>
    </nav>
  );
};

export { Navbar };
