import React, { createContext, useContext, useState, useEffect } from 'react';
import { THEMES } from '../data/themes';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('modern');

  useEffect(() => {
    const theme = THEMES[currentTheme];
    const root = document.documentElement;
    
    // Yeh variables index.css aur components mein use ho rahe hain
    root.style.setProperty('--primary', theme.colors.primary);
    root.style.setProperty('--bg-app', theme.colors.background);
    root.style.setProperty('--card-bg', theme.colors.card);
    root.style.setProperty('--text-main', theme.colors.text);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme: setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);