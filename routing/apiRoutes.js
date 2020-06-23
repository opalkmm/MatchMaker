//import the data from api/data/friends.js
var matchArray = require('../app/data/friends');



//routing

module.exports = function(app){
    //GET route with api/data/friends to display JSON of all possible matches
    app.get("/api/friends", function(req,res){
        res.json(matchArray);
    });

   
};
// A POST routes /api/friends. This will be used to handle incoming survey results. 
//submit data aka users' result to the server 
//This route will also be used to handle the compatibility logic.
app.post("/api/friends", function(req, res) {

//hold the result of the best match(object)
var bestMatch = {
    name:"",
    photo: "",
    matchDifference: Infinity
}

//take result from POST and pase it
var user = req.body;
var scores = user.scores;

//compare and find the best match by calculating the diff between each answer
var diff;

//loop through all the friends in the database from api/friends
for(var i =0; i<matchArray.length; i++){
var currentCandidate = matchArray[i]
var diff = 0;
console.log(currentCandidate.name)

// We then loop through all the scores of each candidate
for (var j = 0; j < currentCandidate.scores.length; j++) {
    var currentCandidateScore = currentCandidate.scores[j];
    //and the users' score to be compared to
    var currentUserScore = userScores[j];

    // We calculate the difference between the scores and sum them into the totalDifference
    diff += Math.abs(parseInt(currentUserScore) - parseInt(currentCandidateScore));
  }

  // If the sum of differences is less then the differences of the current "best match"
  if (diff <= bestMatch.matchDifference) {
    // Reset the bestMatch to be the new friend.
    bestMatch.name = currentCandidate.name;
    bestMatch.photo = currentCandidate.photo;
    bestMatch.matchDifference = diff;
  }
}

// Finally save the user's data to the database/ matchArray
matchArray.push(user);

// Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
res.json(bestMatch);

});
