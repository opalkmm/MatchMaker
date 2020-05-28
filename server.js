//Your server.js file should require the basic npm packages we've used in class: express and path.

//dependencies
var express = require('express');

//set up the express app
var app = express();
var PORT = 3000;

//Express data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//point the server to the route files, routes giving the servers 'maps' to respond to users

//route to serve html pages
require("./routing/htmlRoutes")(app);
require("./routing/apiRoutes")(app);

//listener, start server

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
})

