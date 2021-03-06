//get with url "/api/friends"-> shows JSON of all possible friends
//post routes "/api/friends" to add incoming survey results and compatibility logic
const friendsData = require("../data/friends");

module.exports = function(app) {
  //Route to get the data from friends
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  //Route to post the data recieved from the user to friends
  app.post("/api/friends", function(req, res) {
       friendsData.push(req.body);
       res.json(true);
  });
};
