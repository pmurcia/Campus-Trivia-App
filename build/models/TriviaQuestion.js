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
})(TriviaCategory || (TriviaCategory = {}));
exports.TriviaCategory = TriviaCategory;
var TriviaDifficulty;
(function (TriviaDifficulty) {
    TriviaDifficulty[TriviaDifficulty["easy"] = 0] = "easy";
    TriviaDifficulty[TriviaDifficulty["medium"] = 1] = "medium";
    TriviaDifficulty[TriviaDifficulty["hard"] = 2] = "hard";
})(TriviaDifficulty || (TriviaDifficulty = {}));
exports.TriviaDifficulty = TriviaDifficulty;
var TriviaType;
(function (TriviaType) {
    TriviaType[TriviaType["multiple"] = 0] = "multiple";
    TriviaType[TriviaType["boolean"] = 1] = "boolean";
})(TriviaType || (TriviaType = {}));
exports.TriviaType = TriviaType;
var TriviaEncode;
(function (TriviaEncode) {
    TriviaEncode[TriviaEncode["url3986"] = 0] = "url3986";
    TriviaEncode[TriviaEncode["base64"] = 1] = "base64";
})(TriviaEncode || (TriviaEncode = {}));
exports.TriviaEncode = TriviaEncode;
var TriviaQuestion = /** @class */ (function () {
    function TriviaQuestion(category, type, difficulty, question, correct_answer, answers) {
        this.category = category;
        this.type = type;
        this.difficulty = difficulty;
        this.question = question;
        this.correct_answer = correct_answer;
        this.answers = answers;
    }
    TriviaQuestion.prototype.ToAppInventor = function () {
        return Object.entries(this);
    };
    return TriviaQuestion;
}());
exports.TriviaQuestion = TriviaQuestion;
