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
