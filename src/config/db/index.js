const mongoose = require('mongoose'); // Import mongoose library

async function connect() {
	try {
		await mongoose.connect('mongodb://localhost:27017/f8_blog', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('Connect successfully!!!');
	} catch (error) {
		console.log('Connect failure!!!');
	}
}

module.exports = { connect };
