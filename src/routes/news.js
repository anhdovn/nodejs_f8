const NewsController = require('../app/controllers/NewsController');
const express = require('express');
const router = express.Router();


router.use('/:slug', NewsController.show);
router.use('/', NewsController.index);

module.exports = router; // Export router to use in another file. ( nodejs_blog/src/routes/index.js )