function routes(app) {
	app.use('/news', require('./news'));
	app.use('/', require('./site'));
}

module.exports = routes; // Export routes to use in another file. ( nodejs_blog/src/app.js )
