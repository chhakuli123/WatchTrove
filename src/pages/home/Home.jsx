import React from "react";

import { Hero, Navbar } from "components";
import "./home.css";

const Home = () => {
  return (
    <div className="landing-page-container">
      <img
        src="https://res.cloudinary.com/dptfwcnro/image/upload/v1686893353/WatchTrove/rpv5nterhao2yjq4kat7.png"
        alt="landing"
        className="landing-page-image"
      />
      <div className="landing-container">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export { Home };
