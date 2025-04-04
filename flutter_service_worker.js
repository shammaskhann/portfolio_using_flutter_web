'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ab3898a80417a0c932345e3f0fb45763",
"assets/AssetManifest.bin.json": "f97f773e4fe00d6e5ebb3f337ad23eba",
"assets/AssetManifest.json": "37bfa123a65a8836ff9fc36f0afffb25",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/photos/black-white.png": "09f508749324fa6bccbd8c6b37393f44",
"assets/assets/photos/colored.png": "0ca8dc289e02b3cc3888e75c70cdcdfe",
"assets/assets/photos/colored2.png": "b00935ba2eb13122f4d4a033b9ee90ca",
"assets/assets/photos/mobile.png": "b120f64374bd95ba87e2c14ee5cf9f43",
"assets/assets/projects/appIcon.png": "6f975e23863ade4d7e4367a5a568e67d",
"assets/assets/projects/aqareicon.png": "1b0e0bc9ad2f3d6f03195b301686d64c",
"assets/assets/projects/BigCart%2520Logo.png": "e8e81d8a8b682859ff0a15ae5a219336",
"assets/assets/projects/c++.svg": "9ba8e9c14bc61e4dfc59e51b5780c04c",
"assets/assets/projects/carfixicon.png": "8ef5de82732d6dc6177d14602958ad84",
"assets/assets/projects/Convologo.png": "da83b99f060cc368915bd5fe0596a84b",
"assets/assets/projects/dart.svg": "20d7b82998ddc6f73a4310bf58e609df",
"assets/assets/projects/firebase.svg": "1da8d950e3f30a69d7c957c26238e1de",
"assets/assets/projects/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/projects/flutter.svg": "5c3a6308a335872a831a9f836f0e236c",
"assets/assets/projects/fr12.png": "183374bfa78f6b3b2c454c4649df1463",
"assets/assets/projects/Frame%252010.png": "465e1a5d151543f84215ed007e6e4794",
"assets/assets/projects/Frame%252011.png": "71f0b41596641ac25531805c6b852825",
"assets/assets/projects/Frame%252012.png": "7f1f0340c37a7489b6ceef8c7b15e889",
"assets/assets/projects/Frame%252013.jpeg": "4339005fb8c6bde483ea2c3da02ce62e",
"assets/assets/projects/Frame%252014.jpeg": "7abf4f7201849aa5df2dfd8a78e5e2de",
"assets/assets/projects/Frame%25207.png": "8784f40f05f8a4664e3a4dbb1bd7e1df",
"assets/assets/projects/Frame%25208.png": "5bb04e12fcfe419b3e6e328656668f14",
"assets/assets/projects/Frame%25209.png": "7c3f7e90371c03eac5414c26fc47cc38",
"assets/assets/projects/Gigi.png": "40cb921000ac9e69d7ba289a1400bcce",
"assets/assets/projects/java.svg": "64f6e32092e90b8a7fb090d3d003ccb1",
"assets/assets/projects/javascript.svg": "8ee02715beb101d7d505a9473bfb2754",
"assets/assets/projects/mainIcon.png": "1d8951f68969db1418dbfca6b778b929",
"assets/assets/projects/mongodb.svg": "409452f1b3c56ada4efdcfbd39ff1142",
"assets/assets/projects/nodejs.svg": "e4ddbe1a57d161bfb593c7e2ba40d345",
"assets/assets/services/app.png": "941e96370b9141fdf05b172bfa811396",
"assets/assets/services/backend.png": "3634d98d70ecd0a95ccd357e6d9891a6",
"assets/assets/services/htmlcss.png": "0f73229c99c3d57e2b8d688393ebcb28",
"assets/assets/services/open.png": "4a5996597d32b06d91183f0860c29aab",
"assets/assets/services/open_b.png": "b65517dd1a07922b014409bb8dcb1e81",
"assets/assets/work/cui.png": "b5608c4d79345ca955f990a24a454554",
"assets/assets/work/dsc.png": "bd954ceeeb42b91899ebe1c3b0d79850",
"assets/assets/work/flutterIsl.png": "aaaeddae163a2e71636d9d494e16f2db",
"assets/assets/work/st.png": "0957bd1682c5a518247a1844656c0f7e",
"assets/FontManifest.json": "6d7bf0d7c489d6724ff0c728629cbd1b",
"assets/fonts/agustina/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/fonts/MaterialIcons-Regular.otf": "8553fdd0018ee6d8f1145694b6eda7a2",
"assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/NOTICES": "3d021ad254b46e344a409462fd53cc8c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "bbc3a2d2265f7ff6bef4ba339a0ba4c9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "dbf0a93d2b23d99b7af4b1a6ab94e122",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "4bc7849a5c7774cfa18e4bc2ef82404a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "136d810bfa0681858088599939c3091b",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "2a285e92d3f03aa4dbf6aef2e47c0494",
"icons/Icon-192.png": "96bb2535d5f13080b02dd9874c84f1c4",
"icons/Icon-512.png": "5b9b80736cb823e709eb5297cee6765f",
"index.html": "63bd787a1136c4065a8f832912194fdf",
"/": "63bd787a1136c4065a8f832912194fdf",
"main.dart.js": "0551f19b5cf9adedad9658a03f11c80e",
"manifest.json": "c3180ce8e42eaad37d4c9507dd87dbe3",
"version.json": "a29e8b22a08aa0274b027931eec216c4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
