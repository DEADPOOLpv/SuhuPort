import React, { useState, useEffect } from 'react';
import { preloadAssets } from '../utils/preloadAssets';

interface LoadingPageProps {
  onComplete?: () => void;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ onComplete }) => {
  const [zoomed, setZoomed] = useState(false);
  const [isWinking, setIsWinking] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let returnTimer: ReturnType<typeof setTimeout> | undefined;
    let zoomDelayTimer: ReturnType<typeof setTimeout> | undefined;
    let zoomTimer: ReturnType<typeof setTimeout> | undefined;

    (async () => {
      try {
        await preloadAssets({});

        if (cancelled) return;

        setIsWinking(true);

        // After wink duration, return to normal, wait a bit, then zoom and finally call onComplete
        returnTimer = setTimeout(() => {
          setIsWinking(false);

          zoomDelayTimer = setTimeout(() => {
            setZoomed(true);

            zoomTimer = setTimeout(() => {
              if (onComplete) onComplete();
            }, 700); // matches zoom transition duration
          }, 300); // delay after wink before zoom
        }, 400); // wink duration
      } catch (e) {
        // If preload fails, still attempt the visual flow and continue
        console.warn('Preload failed', e);
        if (cancelled) return;

        setIsWinking(true);
        returnTimer = setTimeout(() => {
          setIsWinking(false);

          zoomDelayTimer = setTimeout(() => {
            setZoomed(true);

            zoomTimer = setTimeout(() => {
              if (onComplete) onComplete();
            }, 700);
          }, 300);
        }, 400);
      }
    })();

    return () => {
      cancelled = true;
      if (returnTimer) clearTimeout(returnTimer);
      if (zoomDelayTimer) clearTimeout(zoomDelayTimer);
      if (zoomTimer) clearTimeout(zoomTimer);
    };
  }, [onComplete]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-lime-50 relative overflow-hidden" aria-busy={isWinking ? 'true' : 'false'}>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 flex items-center justify-center">
          <img
            src={isWinking ? '/assets/catWink.svg' : '/assets/cat.svg'}
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