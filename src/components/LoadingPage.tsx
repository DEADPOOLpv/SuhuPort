import React, { useState, useEffect } from 'react';

interface LoadingPageProps {
  onImageClick?: () => void;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ onImageClick }) => {
  const [zoomed, setZoomed] = useState(false);
  const [isWinking, setIsWinking] = useState(false);

  // Wink animation on page load
  useEffect(() => {
    const winkTimer = setTimeout(() => {
      setIsWinking(true);
      
      // Return to normal cat after 400ms
      const returnTimer = setTimeout(() => {
        setIsWinking(false);
      }, 400);

      return () => clearTimeout(returnTimer);
    }, 800); // Start winking 800ms after page load

    return () => clearTimeout(winkTimer);
  }, []);

  const handleClick = () => {
    setZoomed(true);
    setTimeout(() => {
      if (onImageClick) onImageClick();
    }, 700); // Duration matches transition
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-lime-50 relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-32 flex items-center justify-center">
        <img
          src={isWinking ? "/assets/catWink.svg" : "/assets/cat.svg"}
          alt="Cat"
          className={`w-full h-full object-contain cursor-pointer transition-all duration-700 ease-in-out
            ${zoomed
              ? 'z-50'
              : ''
            }`}
          style={{
            ...(zoomed
              ? {
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  // Stronger zoom and more left shift to center the left eye
                  transform: 'translate(2000%, -50%) scale(90)',
                  width: 'auto',
                  height: '80vh',
                }
              : {
                  transform: 'translate(0, 0) scale(1)',
                }),
          }}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default LoadingPage;