import React from "react";
import { useNavigate } from "react-router";

import { VideoCallOutlinedIcon } from "asset";
import "./hero.css";

const Hero = () => {
  const navigate= useNavigate()
  
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-logo-container">
          <img
            src="https://res.cloudinary.com/dptfwcnro/image/upload/v1686906358/WatchTrove/phj7thxbpn78dzanlnyp.png"
            className="hero-logo-image"
            alt="nav"
          />
          <h1 className="hero-site-name">WatchTrove</h1>
        </div>

        <h2 className="hero-subtitle">Learn Healty Way Of Living</h2>

        <div className="hero-text-lg">
          Enhance your well-being with easy access to a range of knowledgeble content.
        </div>

        <div className="hero-btn-container">
          <button
            className="hero-btn-explore"
            onClick={() => navigate("/explore")}
          >
            <VideoCallOutlinedIcon style={{fontSize:"2rem"}}/>
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export { Hero };
