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
    "Entertainment: Cartoon & Animations" = 32
}

enum TriviaDifficulty {
    'easy',
    'medium',
    'hard'
}

enum TriviaType {
    'multiple',
    'boolean'
}

enum TriviaEncode {
    'url3986',
    'base64'
}

class TriviaQuestion {
    constructor(public category: TriviaCategory,
                public type: TriviaType,
                public difficulty: TriviaDifficulty,
                public question: string,
                public correct_answer: string,
                public answers: string[]) {}

    public toAppInventor() {
        return Object.values(this);
    }
}

export { TriviaQuestion, TriviaCategory, TriviaDifficulty, TriviaEncode, TriviaType };