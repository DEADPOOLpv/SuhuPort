import { useState, useEffect } from 'react';
import LoadingPage from './components/LoadingPage';
import HomePage from './components/HomePage';

export default function App() {
  const [showHomePage, setShowHomePage] = useState(false);

  useEffect(() => {
    const handleScalingFix = (): void => {
      const dpr: number = window.devicePixelRatio;
      
      // Reset scaling caused by Windows display scaling
      if (dpr > 1) {
        const scale: number = 1 / dpr;
        const htmlElement = document.documentElement;
        
        htmlElement.style.transform = `scale(${scale})`;
        htmlElement.style.transformOrigin = '0 0';
        htmlElement.style.width = `${100 * dpr}%`;
        htmlElement.style.height = `${100 * dpr}%`;
      }
    };

    // Apply fix on mount
    handleScalingFix();

    // Reapply if window is resized or DPI changes
    window.addEventListener('resize', handleScalingFix);
    
    return () => {
      window.removeEventListener('resize', handleScalingFix);
    };
  }, []);

  return showHomePage ? (
    <HomePage />
  ) : (
    <LoadingPage onComplete={() => setShowHomePage(true)} />
  );
}