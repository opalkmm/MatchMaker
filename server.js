//Your server.js file should require the basic npm packages we've used in class: express and path.

//dependencies
//to JSON format 
var bodyParser = require('body-parser');

//set up the express app
var express = require('express');
var app = express();
//localhost or host site port
var PORT = process.env.PORT || 3000;

//data parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//point the server to the route files, routes giving the servers 'maps' to respond to users
//route to serve html pages
require("./routing/htmlRoutes.js")(app);
require("./routing/apiRoutes.js")(app);



//listener, start server

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
})

