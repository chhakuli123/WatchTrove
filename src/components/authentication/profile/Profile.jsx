import React from "react";

import "./profile.css";
import { useAuth } from "context";

const Profile = () => {
  const {
    user: { firstName, lastName, email },
    isAuth,
    logoutHandler,
  } = useAuth();

  return (
    <div className="profile-page middle-content">
      <div className="profile-container">
        <h2 className="profile-heading">User Profile</h2>
        <div className="avatar-container">
          <img
            className="avatar-image"
            src="https://res.cloudinary.com/dptfwcnro/image/upload/v1685077996/E-comm%20ATTIREX/avtar/pngtree-beard-family-girl-playing-avatar-image_1138008_f8w31f.jpg"
            alt="Avatar"
          />
          {isAuth && <div className="status-dot" />}
        </div>

        <div className="profile-details">
          <h3>
            Full Name: {firstName} {lastName}
          </h3>
          <h3>Email: {email}</h3>
        </div>

        <div className="profile-actions">
          <button className="logout-btn" onClick={logoutHandler}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export { Profile };
