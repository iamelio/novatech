import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/navbar.jsx";
import "./Dashboard.css";

const UserDashboard = () => {
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
        <h2>Welcome, {username}</h2>
        <p>Your trusted partner for scheduling and tracking appointments.</p>
        <div className="header-buttons">
          <button className="primary-btn">View Appointments</button>
          <button className="secondary-btn">Book New</button>
        </div>
      </header>

      <section className="stats-section">
        <div className="stat-card">
          <h3>4</h3>
          <p>Upcoming Appointments</p>
        </div>
        <div className="stat-card">
          <h3>2</h3>
          <p>Completed</p>
        </div>
        <div className="stat-card">
          <h3>1</h3>
          <p>Pending</p>
        </div>
        <div className="stat-card">
          <h3>96%</h3>
          <p>Health Score</p>
        </div>
      </section>

      <section className="recent-section">
        <div className="recent-card">
          <h4>Upcoming Appointments</h4>
          <ul>
            <li>Consultation - Nov 14, 2025</li>
            <li>Follow-up - Nov 20, 2025</li>
          </ul>
        </div>
        <div className="recent-card">
          <h4>Health Insights</h4>
          <p>Your stats have improved by <strong>13%</strong> this month. Keep it up!</p>
        </div>
      </section>
    </div>
  );
};

export default UserDashboard;
