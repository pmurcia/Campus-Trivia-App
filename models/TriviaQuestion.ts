enum TriviaCategory {
    "General Knowledge" = 9,
    "Entertainment: Books" = 10,
    "Entertainment: Film" = 11,
    "Entertainment: Music" = 12,
    "Entertainment: Musicals & Theatres" = 13,
    "Entertainment: Television" = 14,
    "Entertainment: Video Games" = 15,
    "Entertainment: Board Games" = 16,
    "Science & Nature" = 17,
    "Science: Computers" = 18,
    "Science: Mathematics" = 19,
    "Mythology" = 20,
    "Sports" = 21,
    "Geography" = 22,
    "History" = 23,
    "Politics" = 24,
    "Art" = 25,
    "Celebrities" = 26,
    "Animals" = 27,
    "Vehicles" = 28,
    "Entertainment: Comics" = 29,
    "Science: Gadgets" = 30,
    "Entertainment: Japanese Anime & Manga" = 31,
    "Entertainment: Cartoon & Animations" = 32,
    "" = ""
}

enum TriviaDifficulty {
    'easy',
    'medium',
    'hard',
    ''
}

enum TriviaType {
    'multiple',
    'boolean',
    ''
}

enum TriviaEncode {
    'url3986',
    'base64',
    ''
}

const triviaCategories = [
    {
        "id":9,
        "name":"General Knowledge"
    },
    {
        "id":10,
        "name":"Entertainment: Books"
    },
    {
        "id":11,
        "name":"Entertainment: Film"
    },
    {
        "id":12,
        "name":"Entertainment: Music"
    },
    {
        "id":13,
        "name":"Entertainment: Musicals & Theatres"
    },
    {
        "id":14,
        "name":"Entertainment: Television"
    },
    {
        "id":15,
        "name":"Entertainment: Video Games"
    },
    {
        "id":16,
        "name":"Entertainment: Board Games"
    },
    {
        "id":17,
        "name":"Science & Nature"
    },
    {
        "id":18,
        "name":"Science: Computers"
    },
    {
        "id":19,
        "name":"Science: Mathematics"
    },
    {
        "id":20,
        "name":"Mythology"
    },
    {
        "id":21,
        "name":"Sports"
    },
    {
        "id":22,
        "name":"Geography"
    },
    {
        "id":23,
        "name":"History"
    },
    {
        "id":24,
        "name":"Politics"
    },
    {
        "id":25,
        "name":"Art"
    },
    {
        "id":26,
        "name":"Celebrities"
    },
    {
        "id":27,
        "name":"Animals"
    },
    {
        "id":28,
        "name":"Vehicles"
    },
    {
        "id":29,
        "name":"Entertainment: Comics"
    },
    {
        "id":30,
        "name":"Science: Gadgets"
    },
    {
        "id":31,
        "name":"Entertainment: Japanese Anime & Manga"
    },
    {
        "id":32,
        "name":"Entertainment: Cartoon & Animations"
    }
]

class TriviaQuestion {
    constructor(category: TriviaCategory,
                type: TriviaType,
                difficulty: TriviaDifficulty,
                question: string,
                correct_answer: string,
                answers: string[]) {

    }
}

console.log(TriviaCategory["Entertainment: Board Games"]);

export { TriviaQuestion, TriviaCategory, TriviaDifficulty, TriviaEncode, TriviaType };