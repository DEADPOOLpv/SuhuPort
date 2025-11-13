// src/components/MobileBlockedScreen.tsx
import React from 'react';

const MobileBlockedScreen: React.FC = () => {
  return (
    <div className="w-full h-full fixed inset-0 bg-lime-50 flex items-center justify-center p-6 overflow-hidden">
      <div className="max-w-md w-full text-center">
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-gradient-to-br from-lime-500 to-lime-700 rounded-full flex items-center justify-center shadow-2xl">
            <svg 
              className="w-12 h-12 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-lime-900 mb-4">
          Desktop View Required
        </h1>

        {/* Message */}
        <p className="text-lime-800 text-lg mb-6 leading-relaxed">
          This portfolio website is optimized for desktop and laptop screens to provide the best viewing experience.
        </p>

        {/* Info box */}
        <div className="bg-lime-100 border-2 border-lime-300 rounded-lg p-6 mb-8 shadow-md">
          <p className="text-lime-900 text-sm">
            Please access this website from a device with a screen width of at least{' '}
            <span className="font-bold text-lime-700">1024px</span> to view the full experience.
          </p>
        </div>

        {/* Decorative elements matching your loading page style */}
        <div className="flex justify-center gap-2">
          <div className="w-2 h-2 bg-lime-600 rounded-full animate-pulse"></div>
          <div 
            className="w-2 h-2 bg-lime-500 rounded-full animate-pulse" 
            style={{ animationDelay: '75ms' }}
          ></div>
          <div 
            className="w-2 h-2 bg-lime-600 rounded-full animate-pulse" 
            style={{ animationDelay: '150ms' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MobileBlockedScreen;