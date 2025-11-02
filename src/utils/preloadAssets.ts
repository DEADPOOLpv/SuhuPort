// Utility to preload and cache assets listed in /asset-manifest.json

export type PreloadOptions = {
  cacheName?: string;
  onProgress?: (loaded: number, total: number, url?: string) => void;
  batchSize?: number;
  timeout?: number;
};

export async function preloadAssets(options: PreloadOptions = {}): Promise<void> {
  const cacheName = options.cacheName ?? 'suhuport-assets-v1';
  const batchSize = options.batchSize ?? 6; // Optimal for HTTP/2
  const timeout = options.timeout ?? 10000; // 10 second timeout per asset

  // Fetch the manifest from the public folder
  const manifestResp = await fetch('/asset-manifest.json');
  if (!manifestResp.ok) {
    throw new Error('Could not fetch asset manifest');
  }
  const urls: string[] = await manifestResp.json();

  const cache = await caches.open(cacheName);
  const total = urls.length;
  let loaded = 0;

  // Helper function to fetch with timeout
  const fetchWithTimeout = async (url: string): Promise<Response | null> => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const resp = await fetch(url, { 
        signal: controller.signal,
        cache: 'force-cache' // Leverage browser cache
      });
      clearTimeout(timeoutId);
      return resp;
    } catch (e) {
      clearTimeout(timeoutId);
      console.warn('Failed to fetch asset', url, e);
      return null;
    }
  };

  // Process a single asset
  const processAsset = async (url: string): Promise<void> => {
    try {
      const resp = await fetchWithTimeout(url);
      
      if (resp && (resp.ok || resp.type === 'opaque')) {
        try {
          await cache.put(url, resp.clone());
        } catch (e) {
          console.warn('Could not cache', url, e);
        }
      }
    } catch (e) {
      console.warn('Error processing asset', url, e);
    } finally {
      loaded += 1;
      options.onProgress?.(loaded, total, url);
    }
  };

  // Process assets in parallel batches
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    await Promise.all(batch.map(url => processAsset(url)));
  }
}

export async function isAssetCached(
  url: string, 
  cacheName = 'suhuport-assets-v1'
): Promise<boolean> {
  try {
    const cache = await caches.open(cacheName);
    const match = await cache.match(url);
    return !!match;
  } catch {
    return false;
  }
}

// New utility: Clear old cache versions
export async function clearOldCaches(currentCacheName = 'suhuport-assets-v1'): Promise<void> {
  const cacheNames = await caches.keys();
  await Promise.all(
    cacheNames
      .filter(name => name.startsWith('suhuport-assets-') && name !== currentCacheName)
      .map(name => caches.delete(name))
  );
}

// New utility: Check if all assets are cached
export async function areAllAssetsCached(
  cacheName = 'suhuport-assets-v1'
): Promise<boolean> {
  try {
    const manifestResp = await fetch('/asset-manifest.json');
    if (!manifestResp.ok) return false;
    
    const urls: string[] = await manifestResp.json();
    const cache = await caches.open(cacheName);
    
    const checks = await Promise.all(
      urls.map(url => cache.match(url))
    );
    
    return checks.every(match => !!match);
  } catch {
    return false;
  }
}
