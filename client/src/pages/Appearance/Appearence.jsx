import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/navbar/Naavbar";
import lastlogo from "../../assets/components/Auto Layout Horizontal.png";
import grid from "../../assets/components/Group 1171274800.png";
import Carousel from "../../assets/components/Group 1171274799.png";
import stack from "../../assets/components/Group 1171274801.png";
import "./Appearence.css";
import styleArray from "../../components/array of style/styleArray";

const Appearence = () => {
  const [selectedTab, setSelectedTab] = useState("Link");
  const [buttonColor, setButtonColor] = useState("#000000");
  const [buttonTextColor, setButtonTextColor] = useState("#FFFFFF");
  const [tempButtonColor, setTempButtonColor] = useState(buttonColor);
  const [tempButtonTextColor, setTempButtonTextColor] =
    useState(buttonTextColor);
  const [selected, setSelected] = useState("colopatlet3");
  const [frameStyle, setFrameStyle] = useState(styleArray["colopatlet3"]);
  const [selectedTheme, setSelectedTheme] = useState("Themecont1");
  const [frameBgColor, setFrameBgColor] = useState("#ffffff");

  // Button groups
  const buttonGroups = [
    { label: "Fill", buttons: ["colopatlet1", "colopatlet2", "colopatlet3"] },
    {
      label: "Outline",
      buttons: ["colopatlet4", "colopatlet5", "colopatlet6"],
    },
    {
      label: "Hard shadow",
      buttons: ["colopatlet7", "colopatlet8", "colopatlet9"],
    },
    {
      label: "Soft shadow",
      buttons: ["colopatlet10", "colopatlet11", "colopatlet12"],
    },
    {
      label: "Special",
      buttons: [
        "colopatlet13",
        "colopatlet14",
        "colopatlet15",
        "colopatlet16",
        "colopatlet17",
        "colopatlet18",
      ],
    },
  ];

  const handleButtonClick = (button) => {
    setSelected(button);
    let style = {
      ...styleArray[button],
      backgroundColor: handleButtonColorChange,
      color: handleButtonTextColorChange,
      fontFamily: handleFontChange,
    };
    if (
      button.includes("colopatlet1") ||
      button.includes("colopatlet2") ||
      button.includes("colopatlet3")
    ) {
      style.border = "2px solid " + buttonTextColor;
      style.borderRadius = button.includes("colopatlet3")
        ? "2rem"
        : button.includes("colopatlet2")
        ? "1rem"
        : "0rem";
    }
    if (
      button.includes("colopatlet4") ||
      button.includes("colopatlet5") ||
      button.includes("colopatlet6")
    ) {
      style.border = "2px solid " + buttonTextColor;
      style.borderRadius = button.includes("colopatlet6")
        ? "2rem"
        : button.includes("colopatlet5")
        ? "1rem"
        : "0rem";
    }

    if (
      button.includes("colopatlet7") ||
      button.includes("colopatlet8") ||
      button.includes("colopatlet9")
    ) {
      style.boxShadow = "6px 6px 0px rgba(0, 0, 0, 1)";
      style.borderRadius = button.includes("colopatlet9")
        ? "1rem"
        : button.includes("colopatlet8")
        ? "0.5rem"
        : "0rem";
    }
    if (
      button.includes("colopatlet10") ||
      button.includes("colopatlet11") ||
      button.includes("colopatlet12")
    ) {
      style.boxShadow = "6px 6px 0px rgba(0, 0, 0, 0.3)";
      style.borderRadius =
        button.includes("colopatlet12") || button.includes("colopatlet12")
          ? "2rem"
          : button.includes("colopatlet11")
          ? "1rem"
          : "0rem";
    }
    if (button.includes("colopatlet13") || button.includes("colopatlet14")) {
      style.clipPath =
        "polygon(0% 10%, 5% 0%, 10% 8%, 15% 2%, 20% 6%, 25% 0%, 30% 6%, 35% 2%, 40% 10%, 45% 4%, 50% 6%, 55% 2%, 60% 10%, 65% 0%, 70% 8%, 75% 2%, 80% 6%, 85% 0%, 90% 8%, 95% 2%, 100% 10%, 100% 90%, 95% 100%, 90% 92%, 85% 100%, 80% 94%, 75% 100%, 70% 92%, 65% 100%, 60% 94%, 55% 100%, 50% 92%, 45% 100%, 40% 94%, 35% 100%, 30% 92%, 25% 100%, 20% 94%, 15% 100%, 10% 92%, 5% 100%, 0% 90%)";
    }

    if (button.includes("colopatlet15")) {
      style.border = "1px solid black";
    }

    if (button.includes("colopatlet16")) {
      style.borderRadius = "2rem";
    }
    if (button.includes("colopatlet17")) {
      style.position = "relative";
      style.border = "2px solid black";
    }

    if (button.includes("colopatlet18")) {
      style.borderRadius = "2rem 0px 0px 2rem";
    }
    setFrameStyle(style);
  };

  const handleButtonColorChange = (e) => {
    setButtonColor(e.target.value);
    setTempButtonColor(e.target.value);
    setFrameStyle((prevStyle) => ({
      ...prevStyle,
      backgroundColor: e.target.value,
    }));
  };

  const handleButtonTextColorChange = (e) => {
    setButtonTextColor(e.target.value);
    setTempButtonTextColor(e.target.value);
    setFrameStyle((prevStyle) => ({ ...prevStyle, color: e.target.value }));
  };

  const handleButtonTextChange = (e) => {
    const newText = e.target.value;
    setTempButtonColor(newText);
    if (/^#([0-9A-F]{6})$/i.test(newText)) {
      setButtonColor(newText);
    }
  };

  const handleButtonFontTextChange = (e) => {
    const newText = e.target.value;
    setTempButtonTextColor(newText);
    if (/^#([0-9A-F]{6})$/i.test(newText)) {
      setButtonTextColor(newText);
    }
  };

  useEffect(() => {
    setFrameStyle((prevStyle) => ({
      ...prevStyle,
      backgroundColor: buttonColor,
      color: buttonTextColor,
    }));
  }, [buttonColor, buttonTextColor]);

  const handleFontChange = (e) => {
    setFrameStyle((prevStyle) => ({
      ...prevStyle,
      fontFamily: e.target.value,
    }));
  };
  const handleThemeChange = (themeClass) => {
    setSelectedTheme(themeClass);
    const themeElement = document.querySelector(`.${themeClass}`);
    if (themeElement) {
      const computedStyle = window.getComputedStyle(themeElement);
      setFrameBgColor(computedStyle.backgroundColor);
    }
  };
  return (
    <div className="container1">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="content-wrapper">
          <div className="frame-section" style={{ paddingTop: "2rem" }}>
            <div className="frame" style={{ backgroundColor: frameBgColor }}>
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
                    {[
                      "Latest YouTube Video",
                      "Latest Instagram Reel",
                      "Latest YouTube Video",
                      "Latest Instagram Reel",
                      "Latest YouTube Video",
                      "Latest Instagram Reel",
                    ].map((text, index) => (
                      <div
                        key={index}
                        className="frame-link"
                        style={frameStyle}
                      >
                        <span className="frame-icon"></span>
                        <span>{text}</span>
                      </div>
                    ))}
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
                <div className="buttons">
                  {buttonGroups.map((group, index) => (
                    <div
                      key={index}
                      className={`layout-buttons${
                        group.label === "Special" ? "12" : "1"
                      }`}
                    >
                      <p>{group.label}</p>
                      <div
                        className={
                          group.label === "Special"
                            ? "layout-buttons3"
                            : "layout-buttons2"
                        }
                      >
                        {group.buttons.map((button) => (
                          <button
                            key={button}
                            className={`${button} ${
                              selected === button ? "selected" : ""
                            }`}
                            onClick={() => handleButtonClick(button)}
                          >
                            {button.includes("colopatlet") ? "x" : ""}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="Button-color">
                  <p>Button color</p>
                  <div className="buttonconts1">
                    <input
                      className="inputofcolor"
                      type="color"
                      value={buttonColor}
                      onChange={handleButtonColorChange}
                    />
                    <div className="bucont">
                      <p className="butext">Button color</p>
                      <input
                        type="text"
                        className="buinp"
                        value={tempButtonColor}
                        onChange={handleButtonTextChange}
                        placeholder="#000000"
                      />
                    </div>
                  </div>
                </div>
                <div className="Button-color">
                  <p>Button font color</p>
                  <div className="buttonconts1">
                    <input
                      className="inputofcolor"
                      type="color"
                      value={buttonTextColor}
                      onChange={handleButtonTextColorChange}
                    />
                    <div className="bucont">
                      <p className="butext">Button font color</p>
                      <input
                        type="text"
                        className="buinp"
                        value={tempButtonTextColor}
                        onChange={handleButtonFontTextChange}
                        placeholder="#FFFFFF"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Fonts-style">
              <label>Fonts</label>
              <div className="fontcont">
                <h5 style={{ marginLeft: "0.8rem" }}>Font</h5>
                <div className="fontscontainer">
                  <div className="fonttext" style={{ buttonTextColor }}>
                    Aa
                  </div>
                  <select className="fontinput" onChange={handleFontChange}>
                    <option value="DM Sans">DM Sans</option>
                    <option value="Arial">Arial</option>
                    <option value="Poppins">Poppins</option>
                  </select>
                </div>
                <div className="fontcont1">
                  <h5
                    style={{
                      marginLeft: "1rem",
                      marginTop: "1rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Color
                  </h5>
                  <div className="fontscontainers">
                    {/* Color Picker */}
                    <input
                      className="inputofcolor"
                      type="color"
                      value={tempButtonTextColor}
                      onChange={handleButtonFontTextChange}
                    />
                    <div className="bucont">
                      <p className="butext">Font color</p>
                      {/* Text Input */}
                      <input
                        type="text"
                        className="buinp"
                        value={tempButtonTextColor}
                        onChange={handleButtonFontTextChange}
                        placeholder="#000000"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="Themes-cont">
              <label className="nameoflay">Themes</label>
              <div className="Themesdisplay">
                {[
                  "Air Snow",
                  "Air Grey",
                  "Air Smoke",
                  "Air Black",
                  "Mineral Blue",
                  "Mineral Green",
                  "Mineral Orange",
                ].map((themeName, index) => (
                  <div className="buttonoftheme" key={index}>
                    <button
                      className={`Themecont${index + 1} ${
                        selectedTheme === `Themecont${index + 1}`
                          ? "selected-theme"
                          : ""
                      }`}
                      onClick={() => handleThemeChange(`Themecont${index + 1}`)}
                    >
                      <span>&#9776;</span>
                    </button>
                    <span className="airg">{themeName}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="savestylecont">
              <button className="stylesave">save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appearence;
