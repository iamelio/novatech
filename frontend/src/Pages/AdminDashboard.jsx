import React from "react";
import AdminNavbar from "../components/navbar/AdminNavbar.jsx"; // Changed to AdminNavbar
import "../styles/AdminDashboard.css"; // Import the new CSS
import womanImage from "../woman.jpeg"; // Import the image

const AdminDashboard = () => {
  const username = localStorage.getItem("name");

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    window.location.href = "/login";
  };

  return (
    <div className="admin-dashboard-container"> {/* Changed class */}
      <AdminNavbar onLogout={handleLogout} />
      <main
        className="admin-dashboard-main"
        style={{ backgroundImage: `url(${womanImage})` }}
      >
        <div className="admin-dashboard-header-text"> {/* New wrapper for header text */}
          <h1>Welcome, {username}</h1>
          <p>Manage users, upload reports, and monitor system activity.</p>
        </div>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="stats-grid"> {/* Changed class */}
              <div className="stat-card"> {/* Changed class */}
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-gray-400 icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A5.975 5.975 0 0112 13a5.975 5.975 0 013 5.197M15 21a6 6 0 00-9-5.197" />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="label">Total Users</dt> {/* Changed class */}
                        <dd className="value">120</dd> {/* Changed class */}
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              <div className="stat-card"> {/* Changed class */}
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-gray-400 icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="label">Reports Uploaded</dt> {/* Changed class */}
                        <dd className="value">56</dd> {/* Changed class */}
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              <div className="stat-card"> {/* Changed class */}
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-gray-400 icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="label">Pending Approvals</dt> {/* Changed class */}
                        <dd className="value">8</dd> {/* Changed class */}
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              <div className="stat-card"> {/* Changed class */}
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-gray-400 icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="label">Admins Active</dt> {/* Changed class */}
                        <dd className="value">3</dd> {/* Changed class */}
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
