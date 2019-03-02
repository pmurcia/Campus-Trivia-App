"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
//import https = require('https');
var OpenTriviaDB_1 = require("./util/OpenTriviaDB");
//import { TriviaCategory, TriviaQuestion } from './models/TriviaQuestion';
var PORT = process.env.PORT || '5000';
var app = express();
console.log(PORT);
app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/json; charset=utf-8');
    OpenTriviaDB_1.OpenTriviaDB.getQuestions(5).then(function (questions) {
        console.log(questions);
        var mapped = questions.map(function (q) { return q.toAppInventor(); });
        res.end(JSON.stringify(mapped));
    }).catch(function (err) {
        console.log(err);
        res.end(err);
    });
});
app.listen(PORT, function () {
    return console.log('Example app listening on port ${PORT}!');
});
