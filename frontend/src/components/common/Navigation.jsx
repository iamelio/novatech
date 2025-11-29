// components/common/Navigation.jsx
import React from 'react';
const Navigation = ({ currentPage, onPageChange }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'results', label: 'Test Results' },
    { id: 'appointments', label: 'Appointments' },
    { id: 'reports', label: 'Reports' },
    { id: 'profile', label: 'Profile' }
  ];
  return (
    <nav className="hidden md:flex items-center space-x-1 bg-white border-b border-gray-200 px-6">
      {navItems.map(item => (
        <button
          key={item.id}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            currentPage === item.id
              ? 'text-primary bg-blue-50'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
          onClick={() => onPageChange(item.id)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;