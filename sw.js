let staticCacheName = 'restaurant-app-cache';
let urlsToCache = [
    './',
    './index.html',
    './restaurant.html',
    './css/styles.css',
    './js/main.js',
    './js/restaurant_info.js',
    './js/dbhelper.js',
    './js/serviceworker-registration.js',
    './data/restaurants.json',
    './img/1.jpg',
    './img/2.jpg',
    './img/3.jpg',
    './img/4.jpg',
    './img/5.jpg',
    './img/6.jpg',
    './img/7.jpg',
    './img/8.jpg',
    './img/9.jpg',
    './img/10.jpg',
    './favicon.ico',
];


/*Install service worker*/
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(staticCacheName).then(function (cache) {
            return cache.addAll(urlsToCache);
        })
    );
});


/*Activate service worker*/
self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.filter(function (cacheName) {
                    return cacheName.startsWith('restaurant-') &&
                        cacheName != staticCacheName;
                }).map(function (cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});