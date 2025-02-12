const New = require('../models/News'); // Import News model

// Define NewsController
class NewsController {
	// [GET] /news
	index(req, res) {
		async function getNews() {
			try {
				const news = await New.find({});
				res.json(news);
			} catch (error) {
				res.status(400).json({ error: 'ERROR!!!' });
			}
		}
		getNews();
	}

	// [GET] /news/:slug
	show(req, res) {
		res.send('NEWS DETAIL');
	}
}

module.exports = new NewsController(); // Export NewsController to use in another file. ( nodejs_blog/src/routes/news.js )
