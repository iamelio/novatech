import React, { useState, useEffect } from "react";
import UserNavbar from "../components/navbar/UserNavbar.jsx";
import "../styles/UserDashboard.css";
import Home from "./Home.jsx";

const UserDashboard = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("name");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    window.location.href = "/login";
  };

  return (
    <div className="dashboard-container">
      <UserNavbar username={username} onLogout={handleLogout} />
      <main className="dashboard-main">
        <h2>Welcome, {username}!</h2>
        <Home />
      </main>
    </div>
  );
};

export default UserDashboard;
