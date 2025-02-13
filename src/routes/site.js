const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');

router.get('/search', siteController.search);
router.get('/', siteController.index);

module.exports = router; // Export router to use in another file. ( nodejs_blog/src/routes/index.js )
