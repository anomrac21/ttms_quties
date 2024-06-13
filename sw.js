console.log("Service Worker Loaded...");

// Name of the Cache.
const preCacheName = `static`;
const preCache = [
  '/', 
  '/manifest.json', 
  '/index.html',
  '/style.css',
  '/ttm_style.css',
  '/sw.js',
  '/src/app.js',
  '/src/script.js',
  '/images/bg.webp',
  '/images/favicon144.webp',
  '/images/favicon152.webp',
  '/images/favicon16.webp',
  '/images/favicon192.webp',
  '/images/favicon196.webp',
  '/images/favicon512.webp',
  '/images/food1.webp',
  '/images/food2.webp',
  '/images/food3.webp',
  '/images/food4.webp',
  '/images/food5.webp',
  '/images/food6.webp',
  '/images/food7.webp',
  '/images/icon-breakfast.webp',
  '/images/icon-trailblazers.webp',
  '/images/icon-burger.webp',
  '/images/icon-eggs.webp',
  '/images/icon-list.webp',
  '/images/icon-pancakes.webp',
  '/images/icon-pasta.webp',
  '/images/icon-waffles.webp',
  '/images/Logo.webp',
  '/images/richscreenshot1.webp',
  '/images/richscreenshot2.webp',
  '/sound/analog.mp3',
  '/sound/click.mp3'
  ];



// Cache all the selected items once application is installed.
self.addEventListener("install", e => {
    console.log("SERVICE WORKER has been Installed.");
    e.waitUntil(
        caches.open(preCacheName).then(async (cache) => {
            console.log("Caching started.", preCache);
            // //DEBUG CODE FOR CACHE
            // let ok;
            // try {
            //   ok = await cache.addAll(preCache);
            // } catch (err) {
            //   console.error('sw: cache.addAll');
            //   for (let i of preCache) {
            //     try {
            //       ok = await cache.add(i);
            //     } catch (err) {
            //       console.warn('sw: cache.add',i);
            //     }
            //   }
            // }
            return cache.addAll(preCache);
        })
    );
});

self.addEventListener("activate", e => {
    console.log("SERVICE WORKER has been Activated.");
    e.waitUntil(
        caches.open(preCacheName).then(async (cache) => {
            console.log("Caching started.", preCache);
            return cache.addAll(preCache);
        })
    );
});

// Whenever a resource is requested, return if its cached else fetch the resourcefrom server.
self.addEventListener("fetch", e => {
     console.log("SERVICE WORKER Fetch Event.", e);
     e.respondWith(
         caches.match(e.request).then((response) => {
             if (response) {
                 return response;
             }
             return fetch(e.request);
         })
     );
});

// self.addEventListener("push", e => {
//   // const data = e.data.json();
//    console.log("Push Recieved...");
//   // self.registration.showNotification(data.title, {
//   //   body: "Notified by Traversy Media!",
//   //   icon: "http://image.ibb.co/frYOFd/tmlogo.png"
//   // });
// });

// //IMPORTANT INCRIPTION FUNCTION TO BE CALLED
// //WHEN REGISTERING PUSH
// function urlBase64ToUint8Array(base64String) {
//   const padding = "=".repeat((4 - base64String.length % 4) % 4);
//   const base64 = (base64String + padding)
//     .replace(/\-/g, "+")
//     .replace(/_/g, "/");

//   const rawData = window.atob(base64);
//   const outputArray = new Uint8Array(rawData.length);

//   for (let i = 0; i < rawData.length; ++i) {
//     outputArray[i] = rawData.charCodeAt(i);
//   }
//   return outputArray;
// }
// //END !!!IMPORTANT FUNTION