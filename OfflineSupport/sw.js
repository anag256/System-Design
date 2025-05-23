
const CACHE_NAME="demo/v2"
self.addEventListener("install",e=>{
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache=>{
            cache.addAll([
                "./index.html",
                "./style.css",
                "./photo.jpeg",
                "./script.js"
            ])
        })
    )
})

self.addEventListener("activate",e=>{
// clean up useless cache
e.waitUntil(
    caches.keys().then(keyList=>{
        return Promise.all(
            keyList.map(key=>{
                if(key!== CACHE_NAME){
                   return caches.delete(key);
                }
            })
        )
    })
)
})
//since service worker can intercept request, it is is allowed only on https and not on http to avoid man-in-middle attack.
self.addEventListener("fetch",e=>{
    //offline experience
    //1. fetch from netork, update my cache. 2. cache as a fallback
    e.respondWith(
        fetch(e.request)
            .then(res=>{
                //update my cache
                console.log("returning from network")
                const cloneData=res.clone();
                caches.open(CACHE_NAME).then(cache=>{
                    cache.put(e.request,cloneData)
                })
                return res;
            })
            .catch(()=>{
                console.log("returning from cache",e.request)
                return caches.match(e.request).then(file=>file)
            })
    )
})