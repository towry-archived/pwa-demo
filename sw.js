self.addEventListener('install', function (event) {
	console.log(self);
	console.log(caches);
	console.log(fetch, onactivate);
})
