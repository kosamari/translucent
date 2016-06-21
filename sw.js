var APP_PREFIX = 'translucent_'
var VERSION = 'version_01'
var CACHE_NAME = APP_PREFIX + VERSION
var URLS = [
  '/translucent/',
  '/translucent/index.html'
]

self.addEventListener('fetch', function (e) {
  console.log('fetch request : ' + e.request.url)
  var url = new URL(e.request.url)
  if (URLS.indexOf(url.pathname) === -1) {
    console.log('file is not cached : ' + e.request.url)
    return
  }
  console.log('responding with cache : ' + e.request.url)
  e.respondWith(caches.match(e.request))
})

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('installing cache : ' + CACHE_NAME)
      return cache.addAll(URLS)
    })
  )
})

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function(keyList) {
      var cacheWhitelist = keyList.filter(function (key) {
        return key.indexOf(APP_PREFIX)
      })
      cacheWhitelist.push(CACHE_NAME)
      return Promise.all(keyList.map(function (key, i) {
        if (cacheWhitelist.indexOf(key) === -1) {
          console.log('deleting cache : ' + keyList[i] )
          return caches.delete(keyList[i])
        }
      }))
    })
  )
})
