if ("serviceWorker" in navigator){
  let serviceWorkerPath = "/serviceWorkers/serviceWorker.js"
  navigator.serviceWorker.register(serviceWorkerPath)
    .then(  () => console.log(`SW Registered `))
}
