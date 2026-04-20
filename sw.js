// Minimal offline-friendly service worker for the static export.
// Strategy:
//   - HTML pages: network-first, fall back to cached version
//   - Static assets (_next/, fonts, svgs): cache-first, with background refresh

const CACHE = "phuut-thai-v1";
const HTML_FALLBACK = "/";

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      try {
        await cache.addAll(["/", "/thai/", "/reverse/", "/manifest.json", "/icon.svg"]);
      } catch {}
      self.skipWaiting();
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
      self.clients.claim();
    })()
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  const isHTML = req.headers.get("accept")?.includes("text/html");

  if (isHTML) {
    event.respondWith(
      (async () => {
        try {
          const fresh = await fetch(req);
          const cache = await caches.open(CACHE);
          cache.put(req, fresh.clone());
          return fresh;
        } catch {
          const cache = await caches.open(CACHE);
          const cached = await cache.match(req);
          if (cached) return cached;
          return cache.match(HTML_FALLBACK) || new Response("Offline", { status: 503 });
        }
      })()
    );
    return;
  }

  // Static assets: cache-first with revalidation
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE);
      const cached = await cache.match(req);
      const fetchPromise = fetch(req)
        .then((res) => {
          if (res && res.ok) cache.put(req, res.clone());
          return res;
        })
        .catch(() => cached);
      return cached || fetchPromise;
    })()
  );
});
