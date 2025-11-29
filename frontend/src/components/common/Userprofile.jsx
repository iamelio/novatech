// components/common/UserProfile.jsx
import React from 'react';
const UserProfile = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="flex items-center space-x-2 text-sm text-secondary">
        <div className="w-3 h-3 bg-secondary rounded-full"></div>
        <span>Online</span>
      </div>
      <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
        <i className="ri-user-line text-primary"></i>
      </div>
      <div className="text-sm">
        <p className="font-medium text-gray-900">Michael Anderson</p>
        <p className="text-gray-600">Patient</p>
      </div>
    </div>
  );
};
export default UserProfile;