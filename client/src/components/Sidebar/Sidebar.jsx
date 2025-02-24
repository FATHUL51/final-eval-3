import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import Logo from "../../assets/components/Group 1000000866.svg";
import "remixicon/fonts/remixicon.css";
import Linkimage from "../../assets/logo/Linkimage";
import Apperanceimage from "../../assets/logo/Apperance";
import Analiticsimage from "../../assets/logo/Analitics";
import Settingsimage from "../../assets/logo/Settingss";

const Sidebar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const handleCloseModal = (e) => {
    if (!e.target.closest(".profile-section")) {
      setShowModal(false);
    }
  };

  return (
    <div className="sidebar" onClick={handleCloseModal}>
      <img src={Logo} className="sidebar-logo " />

      <NavLink
        to="/links"
        className={({ isActive }) =>
          isActive ? "menu-item active" : "menu-item"
        }
      >
        <Linkimage />
        <label>Links</label>
      </NavLink>

      <NavLink
        to="/appearance"
        className={({ isActive }) =>
          isActive ? "menu-item active" : "menu-item"
        }
      >
        <Apperanceimage />
        <label>Appearance</label>
      </NavLink>

      <NavLink
        to="/analytics"
        className={({ isActive }) =>
          isActive ? "menu-item active" : "menu-item"
        }
      >
        <Analiticsimage />

        <label>Analytics</label>
      </NavLink>

      <NavLink
        to="/settings"
        className={({ isActive }) =>
          isActive ? "menu-item active" : "menu-item"
        }
      >
        <Settingsimage />
        <label>Settings</label>
      </NavLink>

      {/* User Profile Section */}
      <div className="profile-section" onClick={handleModalToggle}>
        {/* <img src={userAvatar} alt="User" className="user-avatar" /> */}
        <h4 className="username">Jenny Wilson</h4>
      </div>

      {/* Sign-Out Modal */}
      {showModal && (
        <div className="modal">
          <button className="signout-button">
            {/* <img src={iconSignOut} alt="Sign Out" className="signout-icon" /> */}
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
