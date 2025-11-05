// Simple service worker to serve cached assets from Cache Storage
const CACHE_PREFIX = 'suhuport-assets-';
const RUNTIME_CACHE = 'suhuport-assets-v1';

self.addEventListener('install', (event) => {
  // Activate worker immediately
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    // Claim clients so SW starts controlling pages right away
    await self.clients.claim();
    // Optionally clean old caches that match the prefix
    const keys = await caches.keys();
    await Promise.all(
      keys
        .filter(k => k.startsWith(CACHE_PREFIX) && k !== RUNTIME_CACHE)
        .map(k => caches.delete(k))
    );
  })());
});

// For each fetch, try cache first, then network; if network, cache the response
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith((async () => {
    const cache = await caches.open(RUNTIME_CACHE);

    // Try to match in cache
    const cached = await cache.match(event.request);
    if (cached) return cached;

    // Not in cache: fetch from network
    try {
      const response = await fetch(event.request);

      // Only cache successful responses with basic type or images/media
      if (response && response.ok) {
        // Clone and put into runtime cache (best-effort)
        try {
          await cache.put(event.request, response.clone());
        } catch (e) {
          // Some requests (cross-origin opaque) may throw on put; ignore
          // console.warn('SW cache put failed', e);
        }
      }

      return response;
    } catch (err) {
      // Network failed: return a fallback image for image requests if desired
      if (event.request.destination === 'image') {
        // Try to return a generic placeholder from cache if present
        const placeholder = await cache.match('/assets/comingsoon.png');
        if (placeholder) return placeholder;
      }
      throw err;
    }
  })());
});
