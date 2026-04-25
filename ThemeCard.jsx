import React from 'react';
import { useTheme } from './context/ThemeContext';

const ThemeCard = ({ themeKey, themeData }) => {
  const { setTheme, currentTheme } = useTheme();
  const isActive = currentTheme === themeKey;

  return (
    <div 
      onClick={() => setTheme(themeKey)}
      className={`p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer hover:shadow-2xl ${isActive ? 'scale-105' : 'hover:-translate-y-1'}`}
      style={{ 
        backgroundColor: 'var(--card-bg)', 
        borderColor: isActive ? 'var(--primary)' : 'transparent',
        boxShadow: isActive ? `0 0 20px -5px var(--primary)` : ''
      }}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-bold">{themeData.name}</h3>
        {isActive && <span className="text-[10px] bg-green-500 text-white px-2 py-1 rounded-md">ACTIVE</span>}
      </div>

      <div className="flex gap-2 mb-6">
        <div className="w-8 h-8 rounded-full border border-gray-200" style={{ backgroundColor: themeData.colors.primary }}></div>
        <div className="w-8 h-8 rounded-full border border-gray-200" style={{ backgroundColor: themeData.colors.background }}></div>
      </div>

      <button 
        className="w-full py-2.5 rounded-xl font-bold text-sm transition-opacity hover:opacity-90 text-white"
        style={{ backgroundColor: themeData.colors.primary }}
      >
        {isActive ? 'Theme Applied' : 'Select Theme'}
      </button>
    </div>
  );
};

export default ThemeCard;