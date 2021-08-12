/* One of the many things PWAs offer is that your app can work offline using service workers and caching. 
A service worker is a script that your browser runs in the background, separate from a web page. 
It is a layer that will live in between the browser and the Internet. */

const VERSION = "v1";

//"self" is like "this", but for service workers
//This will be called when the browser installs the Service Workers
//the callback will receive an event
self.addEventListener("install", (event) => {
  //waits until the pre-cache is completed,
  //waits for the promise to be resolved or rejected before continuing executing the service worker
  event.waitUntil(precache());
});

//every time a request occurs, I want the Service Worker to to do something
self.addEventListener("fetch", (event) => {
  //extracting request
  const request = event.request;
  //we just want to do something with the requests that are get,
  //not post, delete, put etc (they bring data that we do not want to cache)
  if (request.method !== "GET") {
    return;
  }

  /* We're going to look in cache first, then we're going to go to the network and update the cache */

  //look for it in cache
  event.respondWith(cachedResponse(request));

  //actualize cache
  event.waitUntil(updateCache(request));
});

/* create a pre-cache: give it a list of resources, assets, that we want it to cache; 
eventually instead of having to go to the network, let's grab what's cached and return it to the browser.
 */
async function precache() {
  //open a specific cache (VERSION),
  //this gives us an instance of a cache (called v1, version one), returns a promise so await.
  const cache = await caches.open(VERSION);
  return cache.addAll([
    "/", //this one is important
    "/index.html",
    "/assets/index.js",
    "/assets/MediaPlayer.js",
    "/assets/plugins/AutoPlay.js",
    "/assets/plugins/AutoPause.js",
    "/assets/index.css",
    "/assets/BigBuckBunny.mp4",
  ]);
}

async function cachedResponse(request) {
  //open the cache
  const cache = await caches.open(VERSION);
  //check if in that cache we have the answer to the request
  const response = await cache.match(request);
  //if it is not in the cache it will return undefined and it it is undefined =>
  //fetch(request): We have to answer with what the network gives us otherwise we will never get that asset
  return response || fetch(request);
}

/* What if this is in production, we update our index.js and we have a cached copy. 
We would have a response so we would never have to go to the internet (Dangerous!). 
This could mean that the user is going to be left with an old copy. */
async function updateCache(request) {
  const cache = await caches.open(VERSION);
  //look for an updated copy
  const response = await fetch(request);
  //TypeError: Failed to execute ‘put’ on ‘Cache’ (status 206) =>
  //cache.put does not support partial requests (status code 206) => add a ternary operator which caches only the responses which status is 200.
  //otherwise return a simple promise
  return response.status === 200
    ? //add new content to the cache
      cache.put(request, response)
    : new Promise((resolve, reject) => resolve(":)"));
}
