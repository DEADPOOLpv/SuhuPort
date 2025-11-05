import React, { useState, useEffect } from 'react';
import { preloadAssets, areAllAssetsCached, clearOldCaches } from '../utils/preloadAssets';
import catUrl from '../assets/cat.svg';
import catWinkUrl from '../assets/catWink.svg';

interface LoadingPageProps {
  onComplete?: () => void;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ onComplete }) => {
  const [zoomed, setZoomed] = useState(false);
  const [isWinking, setIsWinking] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Programmatically preload the Vite-built (fingerprinted) mascot assets so the
    // browser starts fetching them as soon as this component mounts.
    const addPreload = (href: string) => {
      try {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = href;
        document.head.appendChild(link);
      } catch {
        // ignore
      }
    };

    addPreload(catUrl);
    addPreload(catWinkUrl);

    let cancelled = false;
    let returnTimer: ReturnType<typeof setTimeout> | undefined;
    let zoomDelayTimer: ReturnType<typeof setTimeout> | undefined;
    let zoomTimer: ReturnType<typeof setTimeout> | undefined;

    const startAnimation = () => {
      if (cancelled) return;
      setIsWinking(true);
      
      returnTimer = setTimeout(() => {
        if (cancelled) return;
        setIsWinking(false);
        zoomDelayTimer = setTimeout(() => {
          if (cancelled) return;
          setZoomed(true);
          zoomTimer = setTimeout(() => {
            if (cancelled) return;
            if (onComplete) onComplete();
          }, 700);
        }, 300);
      }, 400);
    };

    (async () => {
      try {
        // Check if assets are already cached
        const alreadyCached = await areAllAssetsCached();
        
        if (alreadyCached) {
          // Skip preloading, set progress to 100% immediately
          if (!cancelled) {
            setProgress(100);
            // Shorter delay before animation when cached
            setTimeout(() => startAnimation(), 200);
          }
          return;
        }

        // Preload assets with progress tracking
        await preloadAssets({
          batchSize: 8, // Increased for better parallelism
          timeout: 15000, // 15 second timeout
          onProgress: (loaded, total) => {
            if (!cancelled) {
              setProgress((loaded / total) * 100);
            }
          }
        });
        
        // Clean up old cache versions
        await clearOldCaches();
        
        // Start animation sequence
        startAnimation();
      } catch (e) {
        console.warn('Preload failed', e);
        // Still proceed with animation even if preload fails
        startAnimation();
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
    <div 
      className="flex items-center justify-center min-h-screen bg-lime-50 relative overflow-hidden" 
      aria-busy={progress < 100 ? 'true' : 'false'}
      aria-live="polite"
      aria-label={`Loading assets: ${Math.round(progress)}%`}
    >
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-6">
        <div className="w-40 h-40 flex items-center justify-center">
          <img
            src={isWinking ? catWinkUrl : catUrl}
            alt="Loading mascot"
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
          <div className="w-full bg-lime-200 rounded-full h-2 overflow-hidden shadow-inner">
            <div 
              className="bg-lime-600 h-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
              role="progressbar"
              aria-valuenow={Math.round(progress)}
              aria-valuemin={0}
              aria-valuemax={100}
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
