const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');

router.use('/search', siteController.search);
router.use('/', siteController.index);

module.exports = router; // Export router to use in another file. ( nodejs_blog/src/routes/index.js )
