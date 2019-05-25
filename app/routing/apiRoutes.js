var friends = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        friends.push(req.body);
        res.json(true);
        //now get match
        var newScore = req.body.scores;
        var scoreMatch = 0;
        var scoreArray = [];

        for (var i = 0; i < friends.length; i++) {
            var scoreDif = 0;
            for (var j = 0; j < newScore.length; j++) {
                scoreDif += (Math.abs(parseInt(friends[i].scores[j] - parseInt(newScore[j]))));

            }
            scoreArray.push(scoreDif);
            console.log(scoreArray);
        }

        for (var i = 0; i < scoreArray.length; i++) {
            if (scoreArray[i] <= scoreArray[scoreMatch]) {
                scoreMatch = i;
            }
            var bff = friends[scoreMatch];
            response.json(bff);
        }
    });
}