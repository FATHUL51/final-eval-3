import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/navbar/Naavbar";
import lastlogo from "../../assets/components/Auto Layout Horizontal.png";
import grid from "../../assets/components/Group 1171274800.png";
import Carousel from "../../assets/components/Group 1171274799.png";
import stack from "../../assets/components/Group 1171274801.png";
import "./Appearence.css";

const Appearence = () => {
  const [selectedTab, setSelectedTab] = useState("Link");

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
            <div className="layout">
              <label className="nameoflay">Layout</label>
              <div className="layout-buttons">
                <button className="layoutbtn">
                  <img className="layoutimg" src={stack} />
                  Stack
                </button>
                <button className="layoutbtn">
                  <img className="layoutimg" src={grid} />
                  Grid
                </button>
                <button className="layoutbtn">
                  <img className="layoutimg" src={Carousel} />
                  Carousel
                </button>
              </div>
            </div>
            <div className="buttonbg">
              <p className="nameoflay1">Buttons</p>
              <div className="buttons">
                <div className="layout-buttons1">
                  <p>Fill</p>
                  <div className="layout-buttons2">
                    <button className="colopatlet1">x</button>
                    <button className="colopatlet2">x</button>
                    <button className="colopatlet3">x</button>
                  </div>
                </div>
                <div className="layout-buttons1">
                  <p>Outline</p>
                  <div className="layout-buttons2">
                    <button className="colopatlet4"></button>
                    <button className="colopatlet5"></button>
                    <button className="colopatlet6"></button>
                  </div>
                </div>
                <div className="layout-buttons1">
                  <p>Hard shadow</p>
                  <div className="layout-buttons2">
                    <button className="colopatlet7">x</button>
                    <button className="colopatlet8">x</button>
                    <button className="colopatlet9">x</button>
                  </div>
                </div>
                <div className="layout-buttons1">
                  <p>Soft shadow</p>
                  <div className="layout-buttons2">
                    <button className="colopatlet10">x</button>
                    <button className="colopatlet11">x</button>
                    <button className="colopatlet12">x</button>
                  </div>
                </div>
                <div className="layout-buttons12">
                  <p>Special</p>
                  <div className="layout-buttons3">
                    <button className="colopatlet13">x</button>
                    <button className="colopatlet14">x</button>
                    <button className="colopatlet15">x</button>
                    <button className="colopatlet16">x</button>
                    <button className="colopatlet17">x</button>
                    <button className="colopatlet18">x</button>
                  </div>
                </div>
                <div className="6">
                  <div className="1">x</div>
                  <div className="1">x</div>
                </div>
              </div>
            </div>
            <div className="Fonts-style">
              <label>Fonts</label>
              <div className="fontcont">
                <div className="1">x</div>
                <div className="1">x</div>
              </div>
            </div>
            <div
              className="4
          Themes-cont"
            >
              <div className="Themesdisplay">
                <button className="!">x</button>
                <button className="!">x</button>
                <button className="!">x</button>
                <button className="!">x</button>
                <button className="!">x</button>
                <button className="!">x</button>
                <button className="!">x</button>
              </div>
            </div>
            <button className="stylesave">save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appearence;
