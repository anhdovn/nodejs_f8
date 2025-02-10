const mongoose = require('mongoose'); // Import mongoose library
const Schema = mongoose.Schema; // Define Schema method

// Schema
const NewsSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('News', NewsSchema); // Export model with name Blog
