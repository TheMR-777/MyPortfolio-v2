import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Research from './components/Research';
import TechStack from './components/TechStack';
import Footer from './components/Footer';
import CyberpunkOverlay from './components/CyberpunkOverlay';

const App: React.FC = () => {
  const [cyberpunkMode, setCyberpunkMode] = useState(false);
  const [keySequence, setKeySequence] = useState<string[]>([]);
  
  // Konami Code Sequence for Matrix mode
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  
  // 2077 Code Sequence
  const cyberpunkCode = ['2', '0', '7', '7'];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newSequence = [...keySequence, e.key];
      if (newSequence.length > 10) newSequence.shift();
      setKeySequence(newSequence);

      // Check for 2077
      const lastFour = newSequence.slice(-4);
      if (lastFour.join('') === '2077') {
        setCyberpunkMode(prev => !prev);
        // Toggle the class on body for global CSS overrides
        if (!document.body.classList.contains('cyberpunk-mode')) {
          document.body.classList.add('cyberpunk-mode');
        } else {
          document.body.classList.remove('cyberpunk-mode');
        }
      }

      // Check for Konami (existing easter egg)
      const lastTen = newSequence.slice(-10);
      if (JSON.stringify(lastTen) === JSON.stringify(konamiCode)) {
        alert("Matrix Mode Activated! (Console unlocked)");
        console.log("Welcome to the Matrix, Neo.");
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [keySequence]);

  return (
    <div className={`min-h-screen bg-background text-gray-200 selection:bg-success selection:text-black font-sans ${cyberpunkMode ? 'overflow-x-hidden' : ''}`}>
      {cyberpunkMode && <CyberpunkOverlay />}
      
      <Navigation />
      
      <main>
        <Hero />
        <Philosophy />
        <Experience />
        <Projects />
        <Research />
        <TechStack />
      </main>

      <Footer />
    </div>
  );
};

export default App;