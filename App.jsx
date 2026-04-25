import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './Navbar';
import ThemeGrid from './ThemeGrid';
import './styles/index.css';

function App() {
  return (
    <ThemeProvider>
      {/* Main Wrapper: Yeh div background color handle karta hai */}
      <div 
        className="min-h-screen transition-colors duration-500 ease-in-out" 
        style={{ 
          backgroundColor: 'var(--bg-app)', 
          color: 'var(--text-main)',
          fontFamily: 'sans-serif' 
        }}
      >
        {/* Navigation Bar */}
        <Navbar />
        
        <main className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <header className="text-center mb-16">
              <h1 
                className="text-5xl font-black mb-4 tracking-tight"
                style={{ color: 'var(--primary)' }}
              >
                UI Theme Marketplace
              </h1>
              <p className="text-lg opacity-70 max-w-2xl mx-auto">
                Select any theme card below to instantly preview the design system across the entire application.
              </p>
            </header>

            {/* Grid of Theme Cards */}
            <ThemeGrid />
          </div>
        </main>

        <footer className="py-10 text-center opacity-40 text-sm border-t mt-20" style={{ borderColor: 'var(--card-bg)' }}>
          Capstone Project © 2026
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;