//import the data from api/data/friends.js
var matchArray = require('../app/data/friends');

// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.


//routing

module.exports = function(app){
    //GET route with api/data/friends to display JSON of all possible matches
    app.get("/api/friends", function(req,res){
        res.json(matchArray);
    });

    //if no matching route, default to home 
//     app.get("*", function(req,res){
//         res.sendFile(path.join(__dirname, "./home.html"));
//     });
};
