import React, { useState, useEffect } from "react";
import API from "../api";
import AdminNavbar from "../components/navbar/AdminNavbar";
import "../styles/AdminAppointments.css";

const AdminAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await API.get("/appointments/all");
        setAppointments(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchAppointments();
  }, []);

  const handleStatusUpdate = async (id, status) => {
    try {
      await API.put(`/appointments/${id}`, { status });
      setAppointments(
        appointments.map((app) => (app._id === id ? { ...app, status } : app))
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="upload-container">
      <AdminNavbar />
      <main className="upload-main">
        <div className="upload-card">
          <h1 className="upload-title">Manage Appointments</h1>
          <div className="overflow-x-auto"> {/* Added for responsive table */}
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Reason
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {appointments.map((app) => (
                  <tr key={app._id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{app.userId.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(app.date).toLocaleDateString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.time}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.reason}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.status}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      {app.status === "Pending" && (
                        <>
                          <button
                            onClick={() => handleStatusUpdate(app._id, "Accepted")}
                            className="text-indigo-600 hover:text-indigo-900 mr-4"
                          >
                            Accept
                          </button>
                          <button
                            onClick={() => handleStatusUpdate(app._id, "Declined")}
                            className="text-red-600 hover:text-red-900"
                          >
                            Decline
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminAppointments;
