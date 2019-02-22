"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TriviaCategory;
(function (TriviaCategory) {
    TriviaCategory[TriviaCategory["General Knowledge"] = 9] = "General Knowledge";
    TriviaCategory[TriviaCategory["Entertainment: Books"] = 10] = "Entertainment: Books";
    TriviaCategory[TriviaCategory["Entertainment: Film"] = 11] = "Entertainment: Film";
    TriviaCategory[TriviaCategory["Entertainment: Music"] = 12] = "Entertainment: Music";
    TriviaCategory[TriviaCategory["Entertainment: Musicals & Theatres"] = 13] = "Entertainment: Musicals & Theatres";
    TriviaCategory[TriviaCategory["Entertainment: Television"] = 14] = "Entertainment: Television";
    TriviaCategory[TriviaCategory["Entertainment: Video Games"] = 15] = "Entertainment: Video Games";
    TriviaCategory[TriviaCategory["Entertainment: Board Games"] = 16] = "Entertainment: Board Games";
    TriviaCategory[TriviaCategory["Science & Nature"] = 17] = "Science & Nature";
    TriviaCategory[TriviaCategory["Science: Computers"] = 18] = "Science: Computers";
    TriviaCategory[TriviaCategory["Science: Mathematics"] = 19] = "Science: Mathematics";
    TriviaCategory[TriviaCategory["Mythology"] = 20] = "Mythology";
    TriviaCategory[TriviaCategory["Sports"] = 21] = "Sports";
    TriviaCategory[TriviaCategory["Geography"] = 22] = "Geography";
    TriviaCategory[TriviaCategory["History"] = 23] = "History";
    TriviaCategory[TriviaCategory["Politics"] = 24] = "Politics";
    TriviaCategory[TriviaCategory["Art"] = 25] = "Art";
    TriviaCategory[TriviaCategory["Celebrities"] = 26] = "Celebrities";
    TriviaCategory[TriviaCategory["Animals"] = 27] = "Animals";
    TriviaCategory[TriviaCategory["Vehicles"] = 28] = "Vehicles";
    TriviaCategory[TriviaCategory["Entertainment: Comics"] = 29] = "Entertainment: Comics";
    TriviaCategory[TriviaCategory["Science: Gadgets"] = 30] = "Science: Gadgets";
    TriviaCategory[TriviaCategory["Entertainment: Japanese Anime & Manga"] = 31] = "Entertainment: Japanese Anime & Manga";
    TriviaCategory[TriviaCategory["Entertainment: Cartoon & Animations"] = 32] = "Entertainment: Cartoon & Animations";
    TriviaCategory[""] = "";
})(TriviaCategory || (TriviaCategory = {}));
exports.TriviaCategory = TriviaCategory;
var TriviaDifficulty;
(function (TriviaDifficulty) {
    TriviaDifficulty[TriviaDifficulty["easy"] = 0] = "easy";
    TriviaDifficulty[TriviaDifficulty["medium"] = 1] = "medium";
    TriviaDifficulty[TriviaDifficulty["hard"] = 2] = "hard";
    TriviaDifficulty[TriviaDifficulty[""] = 3] = "";
})(TriviaDifficulty || (TriviaDifficulty = {}));
exports.TriviaDifficulty = TriviaDifficulty;
var TriviaType;
(function (TriviaType) {
    TriviaType[TriviaType["multiple"] = 0] = "multiple";
    TriviaType[TriviaType["boolean"] = 1] = "boolean";
    TriviaType[TriviaType[""] = 2] = "";
})(TriviaType || (TriviaType = {}));
exports.TriviaType = TriviaType;
var TriviaEncode;
(function (TriviaEncode) {
    TriviaEncode[TriviaEncode["url3986"] = 0] = "url3986";
    TriviaEncode[TriviaEncode["base64"] = 1] = "base64";
    TriviaEncode[TriviaEncode[""] = 2] = "";
})(TriviaEncode || (TriviaEncode = {}));
exports.TriviaEncode = TriviaEncode;
var triviaCategories = [
    {
        "id": 9,
        "name": "General Knowledge"
    },
    {
        "id": 10,
        "name": "Entertainment: Books"
    },
    {
        "id": 11,
        "name": "Entertainment: Film"
    },
    {
        "id": 12,
        "name": "Entertainment: Music"
    },
    {
        "id": 13,
        "name": "Entertainment: Musicals & Theatres"
    },
    {
        "id": 14,
        "name": "Entertainment: Television"
    },
    {
        "id": 15,
        "name": "Entertainment: Video Games"
    },
    {
        "id": 16,
        "name": "Entertainment: Board Games"
    },
    {
        "id": 17,
        "name": "Science & Nature"
    },
    {
        "id": 18,
        "name": "Science: Computers"
    },
    {
        "id": 19,
        "name": "Science: Mathematics"
    },
    {
        "id": 20,
        "name": "Mythology"
    },
    {
        "id": 21,
        "name": "Sports"
    },
    {
        "id": 22,
        "name": "Geography"
    },
    {
        "id": 23,
        "name": "History"
    },
    {
        "id": 24,
        "name": "Politics"
    },
    {
        "id": 25,
        "name": "Art"
    },
    {
        "id": 26,
        "name": "Celebrities"
    },
    {
        "id": 27,
        "name": "Animals"
    },
    {
        "id": 28,
        "name": "Vehicles"
    },
    {
        "id": 29,
        "name": "Entertainment: Comics"
    },
    {
        "id": 30,
        "name": "Science: Gadgets"
    },
    {
        "id": 31,
        "name": "Entertainment: Japanese Anime & Manga"
    },
    {
        "id": 32,
        "name": "Entertainment: Cartoon & Animations"
    }
];
var TriviaQuestion = /** @class */ (function () {
    function TriviaQuestion(category, type, difficulty, question, correct_answer, answers) {
    }
    return TriviaQuestion;
}());
exports.TriviaQuestion = TriviaQuestion;
console.log(TriviaCategory["Entertainment: Board Games"]);
