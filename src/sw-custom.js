/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
if ("function" === typeof importScripts) {
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

  // Global workbox
  if (workbox) {
    console.log("Workbox is loaded");

    // Disable logging
    workbox.setConfig({ debug: false });
    
    self.addEventListener('message', event => {
      if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
      }
    })

    // Manual injection point for manifest files.
    // All assets under build/ and 5MB sizes are precached.
    workbox.precaching.precacheAndRoute([]);

    // js caching
    workbox.routing.registerRoute(
      /\.js$/,
      new workbox.strategies.NetworkFirst({
        cacheName: 'js',
      })
    );

    // css cacing
    workbox.routing.registerRoute(
      /\.css$/,
      new workbox.strategies.NetworkFirst({
        cacheName: 'css',
      })
    );

    // Font caching
    workbox.routing.registerRoute(
      new RegExp("https://fonts.(?:.googlepis|gstatic).com/(.*)"),
      new workbox.strategies.NetworkFirst({
        cacheName: 'fonts',
      })
    );

    // image caching
    workbox.routing.registerRoute(
      /\.(?:png|gif|jpg|jpeg|svg)$/,
      new workbox.strategies.NetworkFirst({
        cacheName: 'images',
      })
    );

  } else {
    console.error("Workbox could not be loaded. No offline support");
  }
}
  