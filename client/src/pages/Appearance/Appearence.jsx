import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/navbar/Naavbar";
//import "./Appearence.css";

const Appearence = () => {
  return (
    <div className="container1">
      <div className="main-content">
        <Sidebar />
      </div>
      <Navbar />
    </div>
  );
};

export default Appearence;
