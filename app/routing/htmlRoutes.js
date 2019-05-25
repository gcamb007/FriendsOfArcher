var path = require("path");

module.exports = function (app) {

    app.get("/quiz", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/quiz.html"));
    });

    // Default route to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

};