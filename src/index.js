const express = require('express');
const app = express();

//settings
app.set('port', 4000);

//Middlewar


//routes
app.get('/', (req, res) => {
    res.send("Hello world");
});

//Static Files


//Listening the server
app.listen(app.get('port'),() => {
   console.log('Server on port', app.get('port')); 
});