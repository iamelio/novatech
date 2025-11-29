import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const UserNavbar = ({ onLogout }) => {
  const username = localStorage.getItem("name");
  return (
    <nav className="user-navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/user/dashboard">
            <img src="/a-hospital-logo-for-a-test-lab-web.png" alt="Hospital Logo" className="hospital-logo" />
          </Link>
        </div>
        <div className="navbar-links">
          <Link to="/user/dashboard">Home</Link>
          <Link to="/user/appointment">Appointment</Link>
          <Link to="/user/appointments">My Appointments</Link>
          <Link to="/user/results">Test Result</Link>
          <Link to="/user/payment">Payment</Link>
          <Link to="/user/about">About Us</Link>
        </div>
        <div className="navbar-user">
          <span>Welcome, {username}</span>
          <button onClick={onLogout} className="logout-button">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
