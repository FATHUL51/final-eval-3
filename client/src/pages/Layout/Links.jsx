import { useState, useEffect } from "react";
import "./Links.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/navbar/Naavbar";
import lastlogo from "../../assets/components/Auto Layout Horizontal.png";
import Shop from "../../assets/logo/Shop";
import LAdd from "../../assets/logo/LAdd";
import IconFire from "../../assets/components/Exclude.png";
import axios from "axios";
import styleArray from "../../components/array of style/styleArray";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import "../toastify.css";
import Switch from "../../components/Switch/Switch";

function Links() {
  const [selectedTab, setSelectedTab] = useState("Link");
  const [links, setLinks] = useState([]);
  const [shops, setShops] = useState([]);
  const [buttonColor, setButtonColor] = useState("#000000");
  const [buttonTextColor, setButtonTextColor] = useState("#FFFFFF");
  const [selectedFont, setSelectedFont] = useState("Arial");
  const [frameStyle, setFrameStyle] = useState({});
  const [frameBgColor, setFrameBgColor] = useState("#ffffff");
  const [banner, setBanner] = useState("");
  const [modal, setModal] = useState(false);
  const [linktitle, setLinktitle] = useState("");
  const [linkurl, setLinkurl] = useState("");
  const [shoptitle, setShoptitle] = useState("");
  const [shopurl, setShopurl] = useState("");
  const [linkapplication, setLinkapplication] = useState("");
  const [shopapplication, setShopapplication] = useState("");
  const [userData, setUserData] = useState("");
  const [editingItem, setEditingItem] = useState(null);
  const [bio, setBio] = useState("");
  const [selectedLayout, setSelectedLayout] = useState("stack");

  const showSuccessToast = (message) => {
    Toastify({
      text: `<span class="toast-message">${message}</span><span class="toast-close">×</span>`,
      duration: 3000,
      close: false,
      gravity: "top",
      position: "center",
      className: "toastify success-toast",
      escapeMarkup: false,
    }).showToast();
  };

  const showErrorToast = (message) => {
    Toastify({
      text: `<span class="toast-message">${message}</span><span class="toast-close">×</span>`,
      duration: 3000,
      close: false,
      gravity: "top",
      position: "center",
      className: "toastify error-toast",
      escapeMarkup: false,
    }).showToast();
  };

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

    fetchAppearanceSettings();
    fetchuserDetails();
  }, []);

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
        setBanner(fetchedData.banner);
        setBio(fetchedData.bio);
      }
    } catch (error) {
      console.error("Error fetching links:", error);
    }
  };
  useEffect(() => {
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
  const handlesavelink = async (e) => {
    e.preventDefault();
    try {
      const url = editingItem
        ? `${
            import.meta.env.VITE_BACKEND_URL
          }/api/link/linkupdate/${editingItem}`
        : `${import.meta.env.VITE_BACKEND_URL}/api/link/linkcreate`;

      const method = editingItem ? "put" : "post";

      const res = await axios[method](
        url,
        {
          link: {
            linktitle,
            linkurl,
            application: linkapplication,
          },
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      if (res.status === 200) {
        setModal(false);
        fetchLinks();
        showSuccessToast(
          editingItem
            ? "Link updated successfully"
            : "Link created successfully"
        );
        setEditingItem(null);
      } else {
        throw new Error("Failed to save");
      }
    } catch (error) {
      showErrorToast("Error saving data");
    }
  };

  const handlesaveshop = async (e) => {
    e.preventDefault();
    console.log("Sending Update Request for Shop ID:", editingItem);

    try {
      const url = editingItem
        ? `${
            import.meta.env.VITE_BACKEND_URL
          }/api/link/linkupdate/${editingItem}`
        : `${import.meta.env.VITE_BACKEND_URL}/api/link/linkcreate`;

      const method = editingItem ? "put" : "post";

      const res = await axios[method](
        url,
        {
          shop: {
            shopname: shoptitle,
            shopurl,
            application: shopapplication,
          },
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      if (res.status === 200) {
        setModal(false);
        fetchLinks();
        showSuccessToast("Shop updated successfully");
        setEditingItem(null);
      } else {
        throw new Error("Failed to update shop");
      }
    } catch (error) {
      console.error("Error updating shop:", error);
      showErrorToast("Error updating shop");
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/link/delete/${id}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      if (res.status === 200) {
        fetchLinks();
        showSuccessToast("Deleted successfully");
      } else {
        showErrorToast("Failed to delete");
      }
    } catch (error) {
      console.error("Error deleting:", error);
      showErrorToast("Error deleting");
    }
  };
  const handleEdit = (item) => {
    setModal(true);
    console.log("Editing Item ID set in frontend:", item._id);

    if (selectedTab === "Link") {
      setLinktitle(item.linktitle);
      setLinkurl(item.linkurl);
      setLinkapplication(item.application);
      setEditingItem(item._id); // Ensure correct ID is set
    } else {
      setShoptitle(item.shopname);
      setShopurl(item.shopurl);
      setShopapplication(item.application);
      setEditingItem(item._id); // Ensure correct ID is set
    }
  };
  const handlesavebio = async () => {
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/link/updateBannerBio`,
        { bio, banner },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      if (res.status === 200) {
        fetchLinks();
        showSuccessToast("bio and banner updated successfully");
      } else {
        showErrorToast("Failed to update/create");
      }
    } catch (error) {
      console.error("Error deleting:", error);
      showErrorToast("Error deleting");
    }
  };

  return (
    <div className="container1">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="content-wrapper">
          <div
            className="frame-section"
            style={{ width: selectedLayout === "Carousel" ? "440px" : "auto" }}
          >
            <div className="frame" style={{ backgroundColor: frameBgColor }}>
              <div
                className="frame-username"
                style={{ backgroundColor: banner }}
              >
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
                      flexDirection:
                        selectedLayout === "Carousel" ? "row" : "column",
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
                            ...(["grid", "Carousel"].includes(
                              selectedLayout
                            ) && {
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
                              textAlign: ["grid", "Carousel"].includes(
                                selectedLayout
                              )
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
                      flexDirection:
                        selectedLayout === "Carousel" ? "row" : "column",
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
                            ...(["grid", "Carousel"].includes(
                              selectedLayout
                            ) && {
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
                              textAlign: ["grid", "Carousel"].includes(
                                selectedLayout
                              )
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
                  <button className="share">share</button>
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
                <h4>@{userData.username}</h4>
              </div>
              <div className="profile-bio">
                <label className="lable">Bio</label>
                <textarea
                  className="textofbio"
                  value={bio}
                  onChange={(e) => {
                    setBio(e.target.value);
                  }}
                  placeholder="bio"
                ></textarea>
              </div>
            </div>

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

              <button
                className="full-width"
                onClick={() => {
                  setModal(!modal);
                }}
              >
                + Add {selectedTab}
              </button>
              <div className="content">
                {selectedTab === "Link" && links.length > 0 && (
                  <ul>
                    {links.map((link, index) => (
                      <li key={index}>
                        {link.linktitle} - {link.linkurl} - {link.application}
                        <button
                          onClick={() => {
                            handleDelete(link._id);
                          }}
                        >
                          delete
                        </button>
                        <button onClick={() => handleEdit(link)}>Edit</button>
                      </li>
                    ))}
                  </ul>
                )}
                {selectedTab === "Shop" && shops.length > 0 && (
                  <ul>
                    {shops.map((shop, index) => (
                      <li key={index}>
                        {shop.shopname} - {shop.shopurl} - {shop.application}
                        <button
                          onClick={() => {
                            handleDelete(shop._id);
                          }}
                        >
                          delete
                        </button>
                        <button onClick={() => handleEdit(shop)}>Edit</button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            {modal && (
              <div className="modal-overlay" onClick={() => setModal(false)}>
                <div
                  className="modal-container"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Tab Buttons */}
                  <div className="modal-tabs">
                    <button
                      className={
                        selectedTab === "Link" ? "active-tab" : "add-link1"
                      }
                      onClick={() => setSelectedTab("Link")}
                    >
                      <LAdd />
                      Add Link
                    </button>
                    <button
                      className={
                        selectedTab === "Shop" ? "active-tab" : "add-shop1"
                      }
                      onClick={() => setSelectedTab("Shop")}
                    >
                      <Shop />
                      Add Shop
                    </button>
                  </div>

                  {/* Dynamic Content Based on Tab */}
                  {selectedTab === "Link" ? (
                    <div className="modal-container1">
                      <h4 style={{ margin: "0" }}>Enter URL</h4>
                      <input
                        type="text"
                        placeholder="Link title"
                        className="input-field1"
                        value={linktitle}
                        onChange={(e) => {
                          setLinktitle(e.target.value);
                        }}
                      />
                      <input
                        type="text"
                        placeholder="Link URL"
                        className="input-field1"
                        value={linkurl}
                        onChange={(e) => {
                          setLinkurl(e.target.value);
                        }}
                      />

                      <h3>Applications</h3>
                      <div className="app-icons">
                        <button
                          className="app-button"
                          onClick={() => {
                            setLinkapplication("Instagram");
                          }}
                        >
                          <img src="instagram.png" /> Instagram
                        </button>
                        <button
                          className="app-button"
                          onClick={() => {
                            setLinkapplication("Facebook");
                          }}
                        >
                          <img src="facebook.png" /> Facebook
                        </button>
                        <button
                          className="app-button"
                          onClick={() => {
                            setLinkapplication("YouTube");
                          }}
                        >
                          <img src="youtube.png" /> YouTube
                        </button>
                        <button
                          className="app-button"
                          onClick={() => {
                            setLinkapplication("Twitter");
                          }}
                        >
                          <img src="x.png" /> X
                        </button>
                        <button onClick={handlesavelink}>
                          {editingItem ? "Update" : "Save"}
                        </button>

                        <button onClick={handleDelete}>delete</button>
                      </div>
                    </div>
                  ) : (
                    <div className="modal-container1">
                      <h4 style={{ margin: "0" }}>Enter URL</h4>
                      <input
                        type="text"
                        placeholder="Shop title"
                        className="input-field1"
                        value={shoptitle}
                        onChange={(e) => {
                          setShoptitle(e.target.value);
                        }}
                      />
                      <input
                        type="text"
                        placeholder="Shop URL"
                        value={shopurl}
                        className="input-field1"
                        onChange={(e) => {
                          setShopurl(e.target.value);
                        }}
                      />
                      <h3>Applications</h3>
                      <div className="app-icons">
                        <button
                          className="app-button"
                          onClick={() => {
                            setShopapplication("Shopify");
                          }}
                        >
                          <img src="instagram.png" /> Shopify
                        </button>
                        <button
                          className="app-button"
                          onClick={() => {
                            setShopapplication("WooCommerce");
                          }}
                        >
                          <img src="facebook.png" /> WooCommerce
                        </button>
                        <button
                          className="app-button"
                          onClick={() => {
                            setShopapplication("BigCommerce");
                          }}
                        >
                          <img src="youtube.png" /> BigCommerce
                        </button>
                        <button
                          className="app-button"
                          onClick={() => {
                            setShopapplication("Magento");
                          }}
                        >
                          <img src="x.png" /> Magento
                        </button>
                        <button onClick={handlesaveshop}>
                          {editingItem ? "Update" : "Save"}
                        </button>

                        <button>delete</button>
                      </div>
                    </div>
                  )}

                  <button
                    className="close-button"
                    onClick={() => setModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}

            <label>Banner</label>
            <div className="banner-container">
              <div className="banner" style={{ backgroundColor: banner }}>
                <img
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt=""
                  className="frame-img"
                />
                <h4 style={{ color: buttonTextColor }}>@{userData.username}</h4>
                <h3 style={{ color: buttonTextColor }}>
                  <img
                    src={IconFire}
                    alt=""
                    style={{ width: "0.9rem", marginRight: "2px" }}
                  />{" "}
                  /{userData.username}
                </h3>
              </div>
              <label>Custom Background Color</label>
              <div className="color-options">
                <span
                  className="color dark"
                  style={{ backgroundColor: "#342b26" }}
                  onClick={() => {
                    setBanner("#342b26");
                  }}
                ></span>
                <span
                  className="color light"
                  style={{
                    backgroundColor: "white",
                    border: "1px solid black",
                  }}
                  onClick={() => {
                    setBanner("#ffffff");
                  }}
                ></span>
                <span
                  className="color black"
                  style={{ backgroundColor: "black" }}
                  onClick={() => {
                    setBanner("#000000");
                  }}
                ></span>
              </div>
              <div className="color-input">
                <span className="color black"></span>
                <input
                  type="text"
                  value={banner}
                  placeholder="#000000"
                  onChange={(e) => {
                    setBanner(e.target.value);
                  }}
                />
              </div>
            </div>
            <button className="save-btn" onClick={handlesavebio}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Links;
