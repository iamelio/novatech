import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/navbar.jsx";
import "./Dashboard.css";

const AdminDashboard = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.name) setUsername(user.name);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div className="dashboard">
      <Navbar username={username} onLogout={handleLogout} />
      <header className="header-section">
        <h2>Welcome, Admin {username}</h2>
        <p>Manage users, upload reports, and monitor system activity.</p>
        <div className="header-buttons">
          <button className="primary-btn">Upload Report</button>
          <button className="secondary-btn">View All Users</button>
        </div>
      </header>

      <section className="stats-section">
        <div className="stat-card">
          <h3>120</h3>
          <p>Total Users</p>
        </div>
        <div className="stat-card">
          <h3>56</h3>
          <p>Reports Uploaded</p>
        </div>
        <div className="stat-card">
          <h3>8</h3>
          <p>Pending Approvals</p>
        </div>
        <div className="stat-card">
          <h3>3</h3>
          <p>Admins Active</p>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
