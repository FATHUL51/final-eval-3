import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import "./Navbar.css";
import share from "../../assets/components/Vector-2.png"; // Ensure correct path

const Navbar = () => {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
  });
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token"); // Get token from local storage
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/user/profile`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUserData({
          firstname: response.data.data.firstname,
          lastname: response.data.data.lastname,
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);
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
            Hi, <span>{`${userData.firstname}  ${userData.lastname}`}!</span>
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
