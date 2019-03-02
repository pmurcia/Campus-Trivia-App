import express = require('express');
import { TriviaController } from './controllers/TriviaController'

// Initialization variables
const PORT = process.env.PORT || '5000'
const app: express.Application = express()

// Routers
const triviaRouter = TriviaController.router

app.get('/trivia', (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/json; charset=utf-8')
    let amount = Number(req.query['amount'])

    TriviaController.getQuestions(amount).then((questions) => {
        res.end(questions)
    }).catch((err) => {
        res.end(err)
    })
});

app.listen(PORT, () => 
    console.log('Example app listening on port ${PORT}!')
);