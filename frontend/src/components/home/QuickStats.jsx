// components/home/QuickStats.jsx
import React from 'react';
const QuickStats = () => {
  const stats = [
    { 
      icon: 'ri-check-double-line', 
      value: '24', 
      label: 'Completed Tests',
      color: 'green'
    },
    { 
      icon: 'ri-calendar-check-line', 
      value: '3', 
      label: 'Upcoming Appointments',
      color: 'blue'
    },
    { 
      icon: 'ri-alert-line', 
      value: '2', 
      label: 'Pending Reviews',
      color: 'orange'
    },
    { 
      icon: 'ri-heart-pulse-line', 
      value: '98%', 
      label: 'Health Score',
      color: 'purple'
    }
  ];
  const colorClasses = {
    green: { bg: 'bg-green-100', text: 'text-green-600' },
    blue: { bg: 'bg-blue-100', text: 'text-primary' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-600' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600' }
  };
  return (
    <div className="grid grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className={`w-12 h-12 ${colorClasses[stat.color].bg} rounded-lg flex items-center justify-center mx-auto mb-3`}>
            <i className={`${stat.icon} ${colorClasses[stat.color].text} text-xl`}></i>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
          <p className="text-sm text-gray-600">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};
export default QuickStats;