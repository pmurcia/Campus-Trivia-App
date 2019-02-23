"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = __importDefault(require("request"));
var TriviaQuestion_1 = require("../models/TriviaQuestion");
var shuffle = require('shuffle-array');
var OpenTriviaHandler = /** @class */ (function () {
    function OpenTriviaHandler() {
    }
    OpenTriviaHandler.getQuestions = function (amount, category, difficulty, type, encode) {
        if (category === void 0) { category = ''; }
        if (difficulty === void 0) { difficulty = ''; }
        if (type === void 0) { type = ''; }
        if (encode === void 0) { encode = 'base64'; }
        // Check arguments
        var amountChecked = amount <= 50 ? amount : 50; // Maximum 50 results
        var categoryChecked = Object.keys(TriviaQuestion_1.TriviaCategory).filter(function (k) { return isNaN(Number(k)); }).includes(category) ? Object.entries(TriviaQuestion_1.TriviaCategory).filter(function (_a) {
            var k = _a[0], v = _a[1];
            return k == category;
        })[0][1] : '';
        var difficultyChecked = Object.keys(TriviaQuestion_1.TriviaDifficulty).filter(function (k) { return isNaN(Number(k)); }).includes(difficulty) ? difficulty : '';
        var typeChecked = Object.keys(TriviaQuestion_1.TriviaType).filter(function (k) { return isNaN(Number(k)); }).includes(type) ? type : '';
        var encodeChecked = Object.keys(TriviaQuestion_1.TriviaEncode).filter(function (k) { return isNaN(Number(k)); }).includes(encode) ? encode : 'base64';
        // Setup the request options object
        var options = {
            url: 'https://opentdb.com/api.php',
            method: 'GET',
            qs: {
                'amount': amountChecked,
                'category': categoryChecked,
                'difficulty': difficultyChecked,
                'type': typeChecked,
                'encode': encodeChecked
            }
        };
        var promise = new Promise(function (resolve, reject) {
            var parsedQuestions = [];
            request_1.default(options, function (error, response, body) {
                //------- TODO Error Handling -------------------
                // Parse HTTP response
                var res = JSON.parse(body);
                var questions = res['results'];
                // Parse body data
                parsedQuestions = questions.map(function (question) {
                    // For each question, we are going to modify its values
                    Object.entries(question).map(function (_a) {
                        var key = _a[0], value = _a[1];
                        // We get key-value pairs, and now we change the 
                        if (typeof (value) != "string") {
                            // It is an array
                            var incorrect = value.map(function (answer) { return Util.decodeBase64(answer); });
                            var unshuffled = incorrect.concat([question['correct_answer']]);
                            question['answers'] = shuffle(unshuffled);
                            // Remove incorrect answers from object
                            delete question['incorrect_answers'];
                        }
                        else {
                            // It is a string
                            question[key] = Util.decodeBase64(value);
                        }
                    });
                    // Return the modified object
                    return new TriviaQuestion_1.TriviaQuestion(question['category'], question['type'], question['difficulty'], question['question'], question['correct_answer'], question['answers']);
                });
                // The questions have been parsed
                resolve(parsedQuestions);
            });
        });
        return promise;
    };
    return OpenTriviaHandler;
}());
exports.OpenTriviaHandler = OpenTriviaHandler;
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.decodeBase64 = function (string) {
        return Buffer.from(string, 'base64').toString();
    };
    return Util;
}());
