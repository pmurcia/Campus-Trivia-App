import { OpenTriviaDB } from '../util/OpenTriviaDB';
import express = require('express');

class TriviaController {
    public static router: express.Router = express.Router()

    public static async getQuestions(amount: number) {
        console.log(isNaN(amount))
        const questions = await OpenTriviaDB.getQuestions(amount)
        return JSON.stringify(questions.map(q => q.toAppInventor()))
    }


}

export { TriviaController }