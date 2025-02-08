const express = require('express'); // import express
const morgan = require('morgan'); // import morgan ( morgan is a module that helps log the request to the console )
const routes = require('./routes');
const exphbs = require('express-handlebars'); // import express-handlebars ( it is a module that helps render the view )
const path = require('path'); // import path ( path is a module that helps work with file and directory paths )

// define express app
const app = express();
const port = 3000;

// use express to serve static files
app.use(express.static('public'));

// use morgan to log the request to the console
app.use(morgan('combined'));

// use express-handlebars to render the view
const engine = exphbs.engine;
			app.engine('.hbs', engine({ extname: '.hbs' }));
				app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'app/views'));

// define routes
routes(app);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
