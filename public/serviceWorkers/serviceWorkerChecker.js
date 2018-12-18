if ("serviceWorker" in navigator){
  let serviceWorkerPath = "/service-worker.js"
  navigator.serviceWorker.register(serviceWorkerPath)
    .then(  () => console.log(`SW Registered `))
    .catch(err => console.error(`SW Install Error ${err}`))
}
