self.addEventListener("install", event => {
  console.log("SW Installed")
  event.waitUntil(
    caches.open("react-ts-translator")
    .then( cache => {
      cache.addAll([
        '/',
        '/index.html',
        '/favicon.png',
        '/assets/css/bulma.css',
        '/assets/css/styles.css'
      ])
    })
  )
})

self.addEventListener("activate", () => {
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