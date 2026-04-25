import React from 'react';
import ThemeCard from './ThemeCard';
import { THEMES } from './data/themes';

const ThemeGrid = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.keys(THEMES).map((key) => (
          <ThemeCard 
            key={key} 
            themeKey={key} 
            themeData={THEMES[key]} 
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeGrid;