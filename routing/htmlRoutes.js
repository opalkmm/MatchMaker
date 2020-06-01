// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.
//******************************************************* 
//npm tp get the file path for html pages
var path = require('path');

//routing

module.exports = function(app){
    //html get requests to the survey page
    app.get("/survey", function(req,res){
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

    //if no matching route, default to home 

    app.get("/", function(req,res){
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
};

