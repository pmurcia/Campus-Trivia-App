"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Done\n");
});
app.listen(3000, function () {
    console.log("Server running at http://localhost:3000/");
});
