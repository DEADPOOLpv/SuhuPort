import React, { useState } from 'react';

interface LoadingPageProps {
  onImageClick?: () => void;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ onImageClick }) => {
  const [zoomed, setZoomed] = useState(false);

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
          src="/assets/cat.svg"
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