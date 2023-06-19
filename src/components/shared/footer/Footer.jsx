import React from "react";
import { Link } from "react-router-dom";

import { GitHubIcon, LinkedInIcon, TwitterIcon, InstagramIcon } from "asset";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-social-icons">
            <Link to="https://github.com/chhakuli123" target="_blank">
              <GitHubIcon />
            </Link>
            <Link
              to="https://www.linkedin.com/in/chhakuli-zingare-322986234/"
              target="_blank"
            >
              <LinkedInIcon />
            </Link>
            <Link to="https://twitter.com/ChhakuliZingare" target="_blank">
              <TwitterIcon />
            </Link>
            <Link
              to="https://www.instagram.com/chhakuli_zingare/"
              target="_blank"
            >
              <InstagramIcon />
            </Link>
          </div>

          <p>&copy; 2023 WatchTrove. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
