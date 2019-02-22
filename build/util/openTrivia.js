"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = __importDefault(require("request"));
var TriviaQuestion_1 = require("../models/TriviaQuestion");
var getQuestions = function (amount, category, difficulty, type, encode) {
    if (category === void 0) { category = TriviaQuestion_1.TriviaCategory['']; }
    if (difficulty === void 0) { difficulty = TriviaQuestion_1.TriviaDifficulty['']; }
    if (type === void 0) { type = TriviaQuestion_1.TriviaType['']; }
    if (encode === void 0) { encode = TriviaQuestion_1.TriviaEncode['base64']; }
    // Check arguments
    var amountChecked = amount <= 50 ? amount : 50; // Maximum 50 results
    /*let categoryChecked = triviaCategories.filter(cat => cat.name == category)[0];
    if(typeof(categoryChecked) != 'undefined')
        categoryChecked = categoryChecked['id']
                                          
    let difficultyChecked = triviaDifficulties.filter(dif => dif == difficulty)[0];
    let typeChecked = triviaTypes.filter(tp => tp == type)[0];
    let encodeChecked = triviaEncodes.filter(enc => enc == encode)[0];
*/
    var categoryChecked = TriviaQuestion_1.TriviaCategory[category];
    var difficultyChecked = TriviaQuestion_1.TriviaDifficulty[difficulty];
    var typeChecked = TriviaQuestion_1.TriviaType[type];
    var encodeChecked = TriviaQuestion_1.TriviaEncode[encode];
    // Options object for request call
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
                        var incorrect = value.map(function (answer) { return decodeBase64(answer); });
                        question['answers'] = incorrect.concat([question['correct_answer']]);
                        // Remove incorrect answers from object
                        delete question['incorrect_answers'];
                    }
                    else {
                        // It is a string
                        question[key] = decodeBase64(value);
                    }
                });
                // Return the modified object
                return question;
            });
            // The questions have been parsed
            resolve(parsedQuestions);
        });
    });
    return promise;
};
function decodeBase64(string) {
    return Buffer.from(string, 'base64').toString();
}
getQuestions(1).then(console.log);
