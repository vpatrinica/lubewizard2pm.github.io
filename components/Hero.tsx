import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="text-center mt-0.5 mb-2">
      <div className="bg-black/50 backdrop-blur-xs px-3 py-2 rounded-md inline-block border border-slate-700/60 shadow-lg">
        <h1 className="text-xl sm:text-2xl font-semibold text-amber-400 tracking-tight leading-snug">LubeWizard2 BOM Cost Analysis</h1>
        <p className="text-xs sm:text-sm mt-1.5 text-slate-300 max-w-xl mx-auto leading-snug">
          Interactive cost breakdown for the LubeWizard2, an advanced lubrication management system for heavy machinery.
        </p>
      </div>
    </div>
  );
};

export default Hero;
