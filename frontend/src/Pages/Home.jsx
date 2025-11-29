import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/UserDashboard.css';

const Home = () => {
  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(/woman.jpeg)` }}
    >
      <div className="home-header-text">
        <h1>Welcome to our Hospital</h1>
        <p>Your health is our priority. We provide the best medical services.</p>
        <div className="home-buttons">
          <Link to="/user/appointment" className="appointment-button">
            Make an Appointment
          </Link>
          <Link to="/user/doctors" className="doctors-button">
            Meet the Doctors
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

