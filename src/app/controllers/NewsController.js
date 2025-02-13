const New = require('../models/News'); // Import News model

// Define NewsController
class NewsController {
	// [GET] /news
	index(req, res, next) {
		New.find({})
			.then((news) => {
				res.render('news', { news });
			})
			.catch(next);
	}

	// [GET] /news/:slug
	show(req, res) {
		res.send('NEWS DETAIL');
	}
}

module.exports = new NewsController(); // Export NewsController to use in another file. ( nodejs_blog/src/routes/news.js )
