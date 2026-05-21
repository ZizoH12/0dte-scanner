const CACHE = '0dte-v2';
const SHELL = ['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = e.request.url;
  // Always go to network for live data + AI calls
  if (url.includes('googleapis.com') || url.includes('yahoo.com') ||
      url.includes('corsproxy.io') || url.includes('allorigins.win') ||
      url.includes('fonts.googleapis.com') || url.includes('fonts.gstatic.com')) {
    e.respondWith(fetch(e.request).catch(() => new Response('', {status: 503})));
    return;
  }
  // App shell: cache first
  e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request)));
});
