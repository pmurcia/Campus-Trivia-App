import { TriviaCategory, TriviaDifficulty, TriviaType } from "./TriviaQuestion";

class TriviaAPIOptions {
    constructor(amount: number, 
        category: TriviaCategory, 
        difficulty: TriviaDifficulty, 
        type: TriviaType) {}
}

export { TriviaAPIOptions };