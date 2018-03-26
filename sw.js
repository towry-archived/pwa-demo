self.addEventListener('install', function (event) {
	event.waitUntil(
		caches.open('v1').then(function (cache) {
			return cache.addAll([
				'/',
				'/index.css',
				'/index.html',
				'/about.html',
				'/subfolder2/',
				'/subfolder2/index.html',
			])
		})
	)
})

self.addEventListener('activate', function () {
	console.log('activate...');
})

self.addEventListener('fetch', function (event) {
	console.log('fetch....');
	// event.respondWith(new Response("hello world"));
})


self.addEventListener('message', function (event) {
	console.log(event);
})
