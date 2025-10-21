import React, { useState, useEffect } from 'react';

interface LoadingPageProps {
  onImageClick?: () => void;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ onImageClick }) => {
  const [zoomed, setZoomed] = useState(false);
  const [isWinking, setIsWinking] = useState(false);

  // Automatically: wink -> wait 300ms -> zoom -> notify parent (load HomePage)
  useEffect(() => {
    let returnTimer: ReturnType<typeof setTimeout>;
    let zoomDelayTimer: ReturnType<typeof setTimeout>;
    let zoomTimer: ReturnType<typeof setTimeout>;

    const winkTimer = setTimeout(() => {
      setIsWinking(true);

      returnTimer = setTimeout(() => {
        setIsWinking(false);

        // Wait 300ms after wink before starting zoom
        zoomDelayTimer = setTimeout(() => {
          setZoomed(true);

          // After zoom transition, call parent callback to load HomePage
          zoomTimer = setTimeout(() => {
            if (onImageClick) onImageClick();
          }, 700); // matches transition duration
        }, 400); // 300ms delay before zoom starts
      }, 400); // wink duration
    }, 800); // start wink after page load

    return () => {
      clearTimeout(winkTimer);
      clearTimeout(returnTimer);
      clearTimeout(zoomDelayTimer);
      clearTimeout(zoomTimer);
    };
  }, [onImageClick]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-lime-50 relative overflow-hidden" aria-busy={isWinking ? 'true' : 'false'}>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-32 flex items-center justify-center">
        <img
          src={isWinking ? "/assets/catWink.svg" : "/assets/cat.svg"}
          alt="Cat"
          className={`w-full h-full object-contain transition-all duration-700 ease-in-out ${zoomed ? 'z-50' : ''}`}
          style={
            zoomed
              ? {
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(2000%, -50%) scale(90)',
                  width: 'auto',
                  height: '80vh',
                }
              : { transform: 'translate(0, 0) scale(1)' }
          }
        />
      </div>
    </div>
  );
};

export default LoadingPage;