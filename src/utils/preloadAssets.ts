// Utility to preload and cache assets listed in /asset-manifest.json
export type PreloadOptions = {
  cacheName?: string;
  onProgress?: (loaded: number, total: number, url?: string) => void;
};

export async function preloadAssets(options: PreloadOptions = {}): Promise<void> {
  const cacheName = options.cacheName ?? 'suhuport-assets-v1';

  // Fetch the manifest from the public folder
  const manifestResp = await fetch('/asset-manifest.json');
  if (!manifestResp.ok) {
    throw new Error('Could not fetch asset manifest');
  }
  const urls: string[] = await manifestResp.json();

  const cache = await caches.open(cacheName);

  const total = urls.length;
  let loaded = 0;

  for (const url of urls) {
    try {
      // Use simple fetch; these are same-origin static assets so CORS shouldn't be an issue
      const resp = await fetch(url);
      // If fetch failed or returned opaque, still put it in cache where possible
      if (resp && (resp.ok || resp.type === 'opaque')) {
        try {
          await cache.put(url, resp.clone());
        } catch (e) {
          // Some responses can't be cached (e.g., opaque with certain headers). Skip but continue.
          console.warn('Could not cache', url, e);
        }
      }
    } catch (e) {
      // fetch error; continue
      console.warn('Failed to fetch asset', url, e);
    }

    loaded += 1;
    options.onProgress?.(loaded, total, url);
  }
}

export async function isAssetCached(url: string, cacheName = 'suhuport-assets-v1'): Promise<boolean> {
  try {
    const cache = await caches.open(cacheName);
    const match = await cache.match(url);
    return !!match;
  } catch {
    return false;
  }
}
