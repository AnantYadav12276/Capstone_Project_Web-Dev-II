import React from 'react';
import { useTheme } from './context/ThemeContext';

const Navbar = () => {
  const { currentTheme } = useTheme();

  return (
    <nav className="p-4 border-b transition-all duration-500 shadow-sm" 
         style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--primary)' }}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-black tracking-tighter" style={{ color: 'var(--primary)' }}>
          THEME<span className="opacity-50">MARKET</span>
        </h1>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium opacity-70">Current Mode:</span>
          <div className="px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-white"
               style={{ backgroundColor: 'var(--primary)' }}>
            {currentTheme}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;