import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="mb-8">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        LubeWizard2 BOM Cost Analysis
      </h1>
      <p className="mt-2 text-lg text-slate-400">
        Interactive cost breakdown for the LubeWizard2, an advanced lubrication management system for heavy machinery.
      </p>
    </header>
  );
};

export default Header;