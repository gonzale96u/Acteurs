const cacheName ="static";
self.addEventListener('install', function(event) {
      event.waitUntil(
        caches.open(cacheName).then(function(cache) {
          return cache.addAll(
          [
            'index.html',
            'cinema128x128.png',
            'cinema144x144.png',
            'manifest.json',
            'worker.js'
          ]
        );
      })
    );
}); 

self.addEventListener('fetch', function(event) {
        event.respondWith(
          caches.match(event.request)
            .then(function(response) {
        // Cache hit - return response
            if (response) {
              return response;
        }
        return fetch(event.request)
          .then(function(response){
            return caches.open(cacheName)
            .then(function(cache){
              cache.put(event.request, response.clone());
              return response;
            });
          });
      }
    )
  );
}); 
