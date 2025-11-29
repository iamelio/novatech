import React, { useState, useEffect } from "react";
import axios from "axios";
import UserNavbar from "../components/navbar/UserNavbar";

const UserAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:3001/api/appointments", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setAppointments(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchAppointments();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <UserNavbar />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">My Appointments</h1>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
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
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {appointments.map((app) => (
                <tr key={app._id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(app.date).toLocaleDateString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.reason}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        app.status === "Accepted"
                          ? "bg-green-100 text-green-800"
                          : app.status === "Declined"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {app.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserAppointments;
