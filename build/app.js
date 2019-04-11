"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var TriviaController_1 = require("./controllers/TriviaController");
// Initialization variables
var PORT = process.env.PORT || '5000';
var app = express();
// Routers
var triviaRouter = TriviaController_1.TriviaController.router;
app.get('/trivia', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/json; charset=utf-8');
    var amount = Number(req.query['amount']);
    TriviaController_1.TriviaController.getQuestions(amount).then(function (questions) {
        res.end(questions);
    }).catch(function (err) {
        res.end(err);
    });
});
app.listen(PORT, function () {
    return console.log('Example app listening on port ' + PORT);
});
