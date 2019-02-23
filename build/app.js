"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var OpenTriviaHandler_1 = require("./util/OpenTriviaHandler");
var app = express();
app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/json; charset=utf-8');
    OpenTriviaHandler_1.OpenTriviaHandler.getQuestions(2).then(function (questions) {
        console.log(questions);
        var mapped = questions.map(function (q) { return q.ToAppInventor(); });
        res.end(JSON.stringify(mapped));
    }).catch(function (err) {
        console.log(err);
        res.end(err);
    });
});
app.listen(3000, function () {
    console.log("Server running at http://localhost:3000/");
});
