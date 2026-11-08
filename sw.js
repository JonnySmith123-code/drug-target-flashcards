// Offline support: cache the whole app. Bump VERSION whenever you edit any file
// so phones pick up the new content.
const VERSION = "v5";
const CACHE = `drug-targets-${VERSION}`;
const ASSETS = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "css/styles.css",
  "js/data/concepts.js",
  "js/data/pathways.js",
  "js/data/pathways-2.js",
  "js/data/targets.js",
  "js/data/targets-cv-metab-eye.js",
  "js/data/targets-resp-gi-immuno.js",
  "js/data/targets-onc-haem.js",
  "js/data/targets-neuro-repro-bone.js",
  "js/data/targets-infectious.js",
  "js/data/diseases-1.js",
  "js/data/diseases-2.js",
  "js/data/brands-1.js",
  "js/data/brands-2.js",
  "js/data/brands-3.js",
  "js/data/brands-4.js",
  "js/data/diagrams.js",
  "js/data/diagrams-2.js",
  "js/diagram.js",
  "js/bodymap.js",
  "js/srs.js",
  "js/app.js",
  "icons/apple-touch-icon.png",
  "icons/icon-192.png",
  "icons/icon-512.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Network first (so updates arrive when online), falling back to cache offline.
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy));
        return res;
      })
      .catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
