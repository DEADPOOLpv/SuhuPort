import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Register service worker early so cached assets can be served to normal browser requests
if ('serviceWorker' in navigator) {
  // Register after window load to avoid blocking rendering
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(() => {
      // Registration succeeded
    }).catch((err) => {
      console.warn('Service worker registration failed', err);
    });
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
