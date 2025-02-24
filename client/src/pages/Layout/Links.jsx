import React, { useState } from "react";
import "./Links.css";
import Sidebar from "../../components//Sidebar/Sidebar";
import Navbar from "../../components/navbar/Naavbar";
import lastlogo from "../../assets/components/Auto Layout Horizontal.png";
import Shop from "../../assets/logo/Shop";
import LAdd from "../../assets/logo/LAdd";
import IconFire from "../../assets/components/Exclude.png";

function Links() {
  const [selectedTab, setSelectedTab] = useState("Link");
  const [links, setLinks] = useState([]);
  const [shops, setShops] = useState([]);

  const handleAddItem = () => {
    if (selectedTab === "Link") {
      setLinks([...links, `New Link ${links.length + 1}`]);
    } else {
      setShops([...shops, `New Shop ${shops.length + 1}`]);
    }
  };
  return (
    <div className="container1">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="content-wrapper">
          <div className="frame-section" style={{ paddingTop: "2rem" }}>
            <div className="frame">
              <div className="frame-username">
                <img
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt=""
                  className="frame-img"
                />
                <h2>@islam_51</h2>
              </div>
              <div className="frame-buttons">
                <button
                  className={`tab-btn ${
                    selectedTab === "Link" ? "active" : ""
                  }`}
                  onClick={() => setSelectedTab("Link")}
                >
                  Link
                </button>
                <button
                  className={`tab-btn ${
                    selectedTab === "Shop" ? "active" : ""
                  }`}
                  onClick={() => setSelectedTab("Shop")}
                >
                  Shop
                </button>
              </div>
              <div className="content1">
                {selectedTab === "Link" ? (
                  <div className="frame-links">
                    <div className="frame-link">
                      <span className="frame-icon"></span>
                      <span>Latest YouTube Video</span>
                    </div>
                    <div className="frame-link">
                      <span className="frame-icon"></span>
                      <span>Latest Instagram Reel</span>
                    </div>
                    <div className="frame-link">
                      <span className="frame-icon"></span>
                      <span>Latest YouTube Video</span>
                    </div>
                    <div className="frame-link">
                      <span className="frame-icon"></span>
                      <span>Latest Instagram Reel</span>
                    </div>
                    <div className="frame-link">
                      <span className="frame-icon"></span>
                      <span>Latest YouTube Video</span>
                    </div>
                    <div className="frame-link">
                      <span className="frame-icon"></span>
                      <span>Latest Instagram Reel</span>
                    </div>
                  </div>
                ) : (
                  <p>Showing Shop Content</p>
                )}
              </div>

              <button className="get-connected">Get Connected</button>

              <div className="last-logo">
                <img src={lastlogo} alt="" />
              </div>
            </div>
          </div>

          <div className="profile-container">
            <label className="pcf">Profile</label>
            <div className="profile-box">
              <div className="profile-top">
                <div className="profile-imgs">
                  <img
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    alt=""
                    className="profile-img"
                  />
                </div>
                <div className="profile-buttons">
                  <label className="custom-file-upload">
                    <input type="file" />
                    Pick an image
                  </label>
                  <button className="remove">Remove</button>
                </div>
              </div>
              <div className="profile-input">
                <label className="lable">Profile Title</label>
                <h4>@islam_51</h4>
              </div>
              <div className="profile-bio">
                <label className="lable">Bio</label>
                <textarea className="textofbio" defaultValue="Bio"></textarea>
              </div>
            </div>

            {/* Links Section */}
            <div className="add-link-container">
              <div className="add-link">
                <button
                  className={`add-btn ${
                    selectedTab === "Link" ? "active" : ""
                  }`}
                  onClick={() => setSelectedTab("Link")}
                >
                  <LAdd />
                  Add Link
                </button>
                <button
                  className={`shop-btn ${
                    selectedTab === "Shop" ? "active" : ""
                  }`}
                  onClick={() => setSelectedTab("Shop")}
                >
                  <Shop />
                  Add Shop
                </button>
              </div>

              {/* Dynamic Add Button */}
              <button className="full-width" onClick={handleAddItem}>
                + Add {selectedTab}
              </button>
              <div className="content">
                {selectedTab === "Link" && links.length > 0 && (
                  <ul>
                    {links.map((link, index) => (
                      <li key={index}>{link}</li>
                    ))}
                  </ul>
                )}
                {selectedTab === "Shop" && shops.length > 0 && (
                  <ul>
                    {shops.map((shop, index) => (
                      <li key={index}>{shop}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Banner Section */}
            <label>Banner</label>
            <div className="banner-container">
              <div className="banner">
                <img
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt=""
                  className="frame-img"
                />
                <h4>@islam_51</h4>
                <h3>
                  <img
                    src={IconFire}
                    alt=""
                    style={{ width: "0.9rem", marginRight: "2px" }}
                  />{" "}
                  /islam_51
                </h3>
              </div>
              <label>Custom Background Color</label>
              <div className="color-options">
                <span className="color dark"></span>
                <span className="color light"></span>
                <span className="color black"></span>
              </div>
              <div className="color-input">
                <span className="color black"></span>
                <input type="text" placeholder="#000000" />
              </div>
            </div>
            <button className="save-btn">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Links;
