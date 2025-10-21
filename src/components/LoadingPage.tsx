import React, { useState, useEffect } from 'react';

interface LoadingPageProps {
  onComplete?: () => void;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ onComplete }) => {
  const [zoomed, setZoomed] = useState(false);
  const [isWinking, setIsWinking] = useState(false);
  

  useEffect(() => {
    let returnTimer: ReturnType<typeof setTimeout>;
    let zoomDelayTimer: ReturnType<typeof setTimeout>;
    let zoomTimer: ReturnType<typeof setTimeout>;

    const winkTimer = setTimeout(() => {
      setIsWinking(true);

      returnTimer = setTimeout(() => {
        setIsWinking(false);

        zoomDelayTimer = setTimeout(() => {
          setZoomed(true);

          zoomTimer = setTimeout(() => {
            if (onComplete) onComplete(); // <-- notify parent to load HomePage
          }, 700); // matches zoom transition
        }, 300); // delay after wink before zoom (adjust as needed)
      }, 400); // wink duration
    }, 800);

    return () => {
      clearTimeout(winkTimer);
      clearTimeout(returnTimer);
      clearTimeout(zoomDelayTimer);
      clearTimeout(zoomTimer);
    };
  }, [onComplete]);

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