import React from "react";
import { Routes, Route } from "react-router-dom";
import UserProtectedWrapper from "./pages/UserProtectedWrapper"; // Corrected path
import Dashboard from "./pages/Dashborad";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Home from "./pages/Home";
import UserPreference from "./pages/UserPrefence/UserPreference";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/home"
          element={
            <UserProtectedWrapper>
              <Home />
            </UserProtectedWrapper>
          }
        />
        <Route
          path="/userpreference"
          element={
            <UserProtectedWrapper>
              <UserPreference />
            </UserProtectedWrapper>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
