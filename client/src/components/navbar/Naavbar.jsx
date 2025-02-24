import React from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.css";
import share from "../../assets/components/Vector-2.png"; // Ensure correct path

const Navbar = () => {
  const location = useLocation();

  const handleShare = () => {
    console.log("Share button clicked");
  };

  return (
    <div>
      <div className="navbar-container">
        {/* Header section with Greeting and Share button */}
        <div className="navbar-header">
          <h1 className="navbar-greeting">
            Hi, <span>Jenny Wilson!</span>
          </h1>
          <button className="navbar-share-btn" onClick={handleShare}>
            <img src={share} alt="" />
            <span>Share</span>
          </button>
        </div>

        <p className="navbar-subtext">
          Congratulations. You got a great response today.
        </p>
      </div>
    </div>
  );
};

export default Navbar;
