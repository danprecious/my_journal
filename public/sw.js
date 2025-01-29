

self.addEventListener('install', (event) => {
    console.log("Service worker is installing")
    self.skipWaiting();
})

self.addEventListener('activate', (event) => {
    console.log('Service worker activating')
}) 

self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-data') {
        console.log()
    }
})