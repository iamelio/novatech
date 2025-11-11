import React from "react";
import "./navbar.css";

const Navbar = ({ username, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="navbar-logo">Dashboard</h2>
      </div>
      <ul className="navbar-right">
        <li>Home</li>
        <li>Profile ({username})</li>
        <li>Settings</li>
        <li onClick={onLogout} className="logout">Logout</li>
      </ul>
    </nav>
  );
};

export default Navbar;
