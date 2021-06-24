const staticCacheName="static-1";
const dynamicCacheName = 'dynamic-1';
const cacheSize=50;
const assets=["./",
  "manifest.json",
  "https://kit.fontawesome.com/a81368914c.js",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
  "css/base-style.css",
  "css/components-style.css",
  "css/home-layout.css",
  "css/welcome-layout.css",
  "index.html",
  "pages/fallback.html"];

  // cache size limit function
  function limitCacheSize(name, size){
    caches.open(name).then(cache => {
      cache.keys().then(keys => {
        if(keys.length > size){
          cache.delete(keys[0]).then(limitCacheSize(name, size));
        }
      });
    });
  };

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(staticCacheName).then(cache => {
      return cache.addAll(assets);
      console.log("cache creata");
    })
  );
});

self.addEventListener('activate', event => {
  console.log('Activating new service worker...');

  const cacheAllowlist = [staticCacheName,dynamicCacheName];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheAllowlist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", e => {
  if(e.request.url.indexOf('firestore.googleapis.com') === -1 && e.request.url.indexOf('google-analytics.com') === -1){
    e.respondWith(
      caches.match(e.request).then(response => {
        return response || fetch(e.request).then(response => {
          return caches.open(dynamicCacheName).then(cache => {
            cache.put(e.request.url, response.clone());
            limitCacheSize(dynamicCacheName, cacheSize);
            return response;
          })
        });
      }).catch(function(){
        if(e.request.url.indexOf('.html') > -1){
          return caches.match('pages/fallback.html');
        }
      })
    );
  }
});
