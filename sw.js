self.addEventListener('install', function (event) {
	event.waitUntil(
		caches.open('v1').then(function (cache) {
			return cache.addAll([
				'/',
				'/offline.html',
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
	console.log('activate');
})

self.addEventListener('fetch', function (event) {
	console.log('fetch....');
	// event.respondWith(new Response("hello world"));

	// https://googlechrome.github.io/samples/service-worker/custom-offline-page/
	if (
		event.request.mode === 'navigate' ||
		(event.request.method === 'GET' &&
		event.request.headers.get('accept').includes('text/html'))
	) {
		event.respondWith(
			fetch(event.request).catch(error => {
				console.log('Fetch failed', error);
				return caches.match('/offline.html');
			})
		)
	}
})


self.addEventListener('message', function (event) {
	console.log(event);
})
