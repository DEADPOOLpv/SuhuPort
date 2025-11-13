import { useState, useEffect } from 'react';
import LoadingPage from './components/LoadingPage';
import HomePage from './components/HomePage';
import MobileBlockedScreen from './components/MobileBlockedScreen';

export default function App() {
  const [showHomePage, setShowHomePage] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkDevice = (): void => {
      // Use visualViewport if available (more accurate for scaled displays)
      const viewportWidth = window.visualViewport 
        ? window.visualViewport.width 
        : window.innerWidth;
      
      // Check if screen width is less than 1024px
      setIsMobile(viewportWidth < 1024);
    };

    // Check immediately
    checkDevice();

    // Add resize listener
    window.addEventListener('resize', checkDevice);
    
    // Also listen to visualViewport resize if available
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', checkDevice);
    }

    return () => {
      window.removeEventListener('resize', checkDevice);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', checkDevice);
      }
    };
  }, []);

  // Show nothing while checking device (prevents flash)
  if (isMobile === null) {
    return null;
  }

  // If mobile detected, skip loading and show blocked screen
  if (isMobile) {
    return <MobileBlockedScreen />;
  }

  // Desktop flow: show loading then homepage
  return showHomePage ? (
    <HomePage />
  ) : (
    <LoadingPage onComplete={() => setShowHomePage(true)} />
  );
}