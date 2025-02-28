import { useState, useEffect } from "react";
import axios from "axios";
import styleArray from "../array of style/styleArray";
import lastlogo from "../../assets/components/Auto Layout Horizontal.png";

const Frame = () => {
  const [selectedTab, setSelectedTab] = useState("Link");
  const [links, setLinks] = useState([]);
  const [shops, setShops] = useState([]);
  const [buttonColor, setButtonColor] = useState("#000000");
  const [buttonTextColor, setButtonTextColor] = useState("#FFFFFF");
  const [selectedFont, setSelectedFont] = useState("Arial");
  const [frameStyle, setFrameStyle] = useState({});
  const [frameBgColor, setFrameBgColor] = useState("#ffffff");
  const [banner, setBanner] = useState("");
  const [userData, setUserData] = useState("");
  const [selectedLayout, setSelectedLayout] = useState("stack");

  useEffect(() => {
    const fetchAppearanceSettings = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/appearance`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (response.status === 200 && response.data.appearance) {
          const { layout, button, button_text, font, fontcolor, themes } =
            response.data.appearance;

          setButtonColor(button_text || "#000000");
          setButtonTextColor(fontcolor || "#FFFFFF");
          setSelectedFont(font || "Arial");
          setSelectedLayout(layout);

          // Update styles
          let newFrameStyle = {
            ...(styleArray[button] || {}),
            backgroundColor: button_text,
            color: fontcolor,
            fontFamily: font,
          };

          // Apply border and shadow based on button style
          if (
            button.includes("colopatlet1") ||
            button.includes("colopatlet2") ||
            button.includes("colopatlet3")
          ) {
            newFrameStyle.border = "2px solid " + fontcolor;
            newFrameStyle.borderRadius = button.includes("colopatlet3")
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
            newFrameStyle.border = "2px solid " + buttonTextColor;
            newFrameStyle.backgroundColor = "transparent";
            newFrameStyle.borderRadius = button.includes("colopatlet6")
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
            newFrameStyle.boxShadow = "6px 6px 0px rgba(0, 0, 0, 1)";
            newFrameStyle.borderRadius = button.includes("colopatlet9")
              ? "2rem"
              : button.includes("colopatlet8")
              ? "1rem"
              : "0rem";
          }
          if (
            button.includes("colopatlet10") ||
            button.includes("colopatlet11") ||
            button.includes("colopatlet12")
          ) {
            newFrameStyle.boxShadow = "6px 6px 0px rgba(0, 0, 0, 0.3)";
            newFrameStyle.borderRadius =
              button.includes("colopatlet12") || button.includes("colopatlet12")
                ? "2rem"
                : button.includes("colopatlet11")
                ? "1rem"
                : "0rem";
          }
          if (
            button.includes("colopatlet13") ||
            button.includes("colopatlet14")
          ) {
            newFrameStyle.clipPath =
              "polygon(0% 10%, 5% 0%, 10% 8%, 15% 2%, 20% 6%, 25% 0%, 30% 6%, 35% 2%, 40% 10%, 45% 4%, 50% 6%, 55% 2%, 60% 10%, 65% 0%, 70% 8%, 75% 2%, 80% 6%, 85% 0%, 90% 8%, 95% 2%, 100% 10%, 100% 90%, 95% 100%, 90% 92%, 85% 100%, 80% 94%, 75% 100%, 70% 92%, 65% 100%, 60% 94%, 55% 100%, 50% 92%, 45% 100%, 40% 94%, 35% 100%, 30% 92%, 25% 100%, 20% 94%, 15% 100%, 10% 92%, 5% 100%, 0% 90%)";
          }

          if (button.includes("colopatlet15")) {
            newFrameStyle.border = "1px solid black";
          }

          if (button.includes("colopatlet16")) {
            newFrameStyle.borderRadius = "2rem";
          }
          if (button.includes("colopatlet17")) {
            newFrameStyle.position = "relative";
            newFrameStyle.border = "2px solid black";
          }

          if (button.includes("colopatlet18")) {
            newFrameStyle.borderRadius = "2rem 0px 0px 2rem";
          }

          setFrameStyle(newFrameStyle);
          setFrameBgColor(themes);
        }
      } catch (error) {
        console.error("Error fetching appearance settings:", error);
      }
    };

    const fetchuserDetails = async () => {
      try {
        const token = localStorage.getItem("token"); // Get token from local storage
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/user/profile`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUserData(response.data.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    const fetchLinks = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/link/linkdetails`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (response.status === 200 && response.data.data) {
          const fetchedData = response.data.data;
          setLinks(fetchedData.link || []);
          setShops(fetchedData.shop || []);
        }
      } catch (error) {
        console.error("Error fetching links:", error);
      }
    };

    fetchAppearanceSettings();
    fetchuserDetails();
    fetchLinks();
  }, []);

  const handleRedirect = async (linkId) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/link/redirect/${linkId}`
      );
      window.location.href = response.data.redirectUrl;
    } catch (error) {
      console.error("Error redirecting:", error);
    }
  };
  return (
    <div
      className="frame-section"
      style={{
        width: selectedLayout === "Carousel" ? "440px" : "50%",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="frame" style={{ backgroundColor: frameBgColor }}>
        <div className="frame-username" style={{ backgroundColor: banner }}>
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Avatar"
            className="frame-img"
          />
          <h2 style={{ color: buttonTextColor }}>@{userData.username}</h2>
        </div>

        <div className="frame-buttons">
          {["Link", "Shop"].map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${selectedTab === tab ? "active" : ""}`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="content1">
          {selectedTab === "Link" ? (
            <div
              className="frame-links"
              style={{
                display: selectedLayout === "grid" ? "grid" : "flex",
                gridTemplateColumns:
                  selectedLayout === "grid" ? "1fr 1fr" : "unset",
                flexDirection: selectedLayout === "Carousel" ? "row" : "column",
                height: selectedLayout === "Carousel" ? "100%" : "",
                width: selectedLayout === "Carousel" ? "50rem" : "",
              }}
            >
              {links.length > 0 ? (
                links.map((link) => (
                  <div
                    key={link._id}
                    className="frame-link"
                    style={{
                      ...frameStyle,
                      ...(["grid", "Carousel"].includes(selectedLayout) && {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height:
                          selectedLayout === "grid"
                            ? "8rem"
                            : selectedLayout === "Carousel"
                            ? "100%"
                            : "",
                        width: "100%",
                        flexDirection: "column",
                      }),
                    }}
                  >
                    <span className="frame-icon"></span>
                    <span
                      style={{
                        textAlign: ["grid", "Carousel"].includes(selectedLayout)
                          ? "center"
                          : "left",
                      }}
                    >
                      {link.linktitle}
                    </span>
                  </div>
                ))
              ) : (
                <p>No links available</p>
              )}
            </div>
          ) : (
            <div
              className="frame-links"
              style={{
                display: selectedLayout === "grid" ? "grid" : "flex",
                gridTemplateColumns:
                  selectedLayout === "grid" ? "1fr 1fr" : "unset",
                flexDirection: selectedLayout === "Carousel" ? "row" : "column",
                height: selectedLayout === "Carousel" ? "100%" : "",
                width: selectedLayout === "Carousel" ? "35rem" : "",
              }}
            >
              {shops.length > 0 ? (
                shops.map((shop) => (
                  <div
                    key={shop._id}
                    className="frame-link"
                    onClick={() => window.open(shop.shopurl, "_blank")}
                    style={{
                      ...frameStyle,
                      ...(["grid", "Carousel"].includes(selectedLayout) && {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height:
                          selectedLayout === "grid"
                            ? "8rem"
                            : selectedLayout === "Carousel"
                            ? "100%"
                            : "",
                        width: "100%",
                        flexDirection: "column",
                      }),
                    }}
                  >
                    <span className="frame-icon"></span>
                    <span
                      style={{
                        textAlign: ["grid", "Carousel"].includes(selectedLayout)
                          ? "center"
                          : "left",
                      }}
                    >
                      {shop.shopname}
                    </span>
                  </div>
                ))
              ) : (
                <p>No shops available</p>
              )}
            </div>
          )}
        </div>

        <button className="get-connected">Get Connected</button>
        <div className="last-logo">
          <img src={lastlogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Frame;
