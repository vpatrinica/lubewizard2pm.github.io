import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="text-center mt-2 mb-2">
      <div className="bg-black/55 backdrop-blur-sm px-4 py-3 rounded-lg inline-block border border-slate-700/70 shadow-xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-amber-400 tracking-tight leading-tight">LubeWizard2 BOM Cost Analysis</h1>
        <p className="text-sm sm:text-base mt-2 text-slate-300 max-w-2xl mx-auto leading-snug">
          Interactive cost breakdown for the LubeWizard2, an advanced lubrication management system for heavy machinery.
        </p>
      </div>
    </div>
  );
};

export default Hero;
