const mongoose = require('mongoose'); // Import mongoose library
const Schema = mongoose.Schema; // Define Schema method

// Schema
const NewsSchema = new Schema({
	title: {
		type: String,
	},
	content: {
		type: String,
	},
});

module.exports = mongoose.model('New', NewsSchema); // Export model with name Blog
