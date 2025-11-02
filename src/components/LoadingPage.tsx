import React, { useState, useEffect } from 'react';
import { preloadAssets } from '../utils/preloadAssets';

interface LoadingPageProps {
  onComplete?: () => void;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ onComplete }) => {
  const [zoomed, setZoomed] = useState(false);
  const [isWinking, setIsWinking] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let cancelled = false;
    let returnTimer: ReturnType<typeof setTimeout> | undefined;
    let zoomDelayTimer: ReturnType<typeof setTimeout> | undefined;
    let zoomTimer: ReturnType<typeof setTimeout> | undefined;

    (async () => {
      try {
        await preloadAssets({
          onProgress: (loaded, total) => {
            if (!cancelled) {
              setProgress((loaded / total) * 100);
            }
          }
        });
        
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
      } catch (e) {
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
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-6">
        <div className="w-40 h-40 flex items-center justify-center">
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
        
        <div className={`w-64 transition-opacity duration-300 ${zoomed ? 'opacity-0' : 'opacity-100'}`}>
          <div className="w-full bg-lime-200 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-lime-600 h-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-center text-lime-700 text-sm mt-2 font-medium">
            {Math.round(progress)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
