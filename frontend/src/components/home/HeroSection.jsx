// components/home/HeroSection.jsx
import React from 'react';
const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary to-blue-700 rounded-2xl p-8 mb-8 text-white overflow-hidden">
      <div 
        className="absolute top-0 left-0 right-0 bottom-0 opacity-15"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20medical%20laboratory%20with%20advanced%20testing%20equipment%2C%20clean%20white%20background%2C%20professional%20healthcare%20environment%2C%20bright%20lighting%2C%20medical%20professionals%20in%20lab%20coats%20working%20with%20precision%20instruments%2C%20sophisticated%20diagnostic%20machines%2C%20sterile%20laboratory%20setting&width=1200&height=400&seq=hero1&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-3xl font-bold mb-4">Welcome to MedLab Pro</h1>
        <p className="text-xl text-blue-100 mb-6">
          Your trusted partner in advanced diagnostic testing and personalized healthcare solutions
        </p>
        <div className="flex items-center space-x-4">
          <button className="px-6 py-3 bg-white text-primary font-semibold rounded-button hover:bg-primary hover:text-white transition-colors">
            View Recent Results
          </button>
          <button className="px-6 py-3 border border-white text-white font-semibold rounded-button hover:bg-white hover:text-primary transition-colors">
            Schedule Test
          </button>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;