const express = require('express');
const app = express();
const path = require('path');
const indexRoute = require('./routes/');

//settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine','ejs');

//Middlewar


//routes
app.use(indexRoute);

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

//Listening the server
app.listen(app.get('port'),() => {
   console.log('Server on port', app.get('port')); 
});