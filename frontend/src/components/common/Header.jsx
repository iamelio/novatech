// components/common/Header.jsx
import React from 'react';
import UserProfile from './component/common/UserProfile';
const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-lg overflow-hidden">
              <img 
                src="https://static.readdy.ai/image/b7b15351df699132f4485d9b0c288e94/8bdfd2fadb4ffbf3ba38bd3a2760d205.png" 
                alt="Hospital Test Lab Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900 font-pacifico">
                MedLab Pro
              </h1>
              <p className="text-sm text-gray-600">Advanced Diagnostic Laboratory</p>
            </div>
          </div>
          <UserProfile />
        </div>
      </div>
    </header>
  );
};
export default Header;