self.addEventListener("install", event => {
  console.log("SW Installed")
  event.waitUntil(
    caches.open("static-files")
    .then( cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/serviceWorkers/serviceWorkerChecker.js',
        '/assets/css/styles.css',
        '/assets/css/bulma.css'
      ])
    })
  )
  
})

self.addEventListener("activate", event => {
  console.log("SW Activated")
})

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(resp => {
        if (resp){
          return resp
        } else {
          return fetch(event.request)
        }
      })
  )
})