var CACHE_NAME = 'translucent_v0'

var PORT = location.port ? ':' + location.port : ''
var ROOT_URL = location.protocol + '//' + location.hostname + PORT + '/translucent'

var FILES = [
  ROOT_URL + '/index.html'
]

var FILE_HASH_TABLE = {}
FILES.forEach(function (filepath) { FILE_HASH_TABLE[filepath] = true })

self.addEventListener('fetch', function (e) {
  if (!FILE_HASH_TABLE[e.request.url]) {
    return
  }
  console.log('sending file from cache : ' + e.request.url)
  e.respondWith(caches.match(e.request, {cacheName: CACHE_NAME}))
})

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return Promise.all(FILES.map(function (url) {
        return fetch(new Request(url)).then(function (response) {
          if (response.ok) {
            console.log('adding to cache : ' + response.url)
            return cache.put(response.url, response)
          }
          return Promise.reject('Invalid response.  URL:' + response.url +' Status: ' + response.status)
        })
      }))
    })
  )
})

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      var promises = []
      keys.forEach(function (cacheName) {
        if (cacheName !== CACHE_NAME) {
          console.log('deleting cache : ' + cacheName)
          promises.push(caches.delete(cacheName))
        }
      })
      return Promise.all(promises)
    })
  )
})
