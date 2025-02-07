function routes(app) {
    app.use('/news', require('./news'));
}

module.exports = routes; // Export routes to use in another file. ( nodejs_blog/src/app.js )