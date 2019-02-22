import express = require('express');
import https = require('https');

import { OpenTriviaHandler as Trivia } from './util/OpenTriviaHandler';
import { TriviaCategory } from './models/TriviaQuestion';

const app: express.Application = express();

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  Trivia.getQuestions(1,'Posslitics').then(questions => {
    console.log(questions);
    res.end(JSON.stringify(questions));
  }).catch(err => {
    console.log(err);
    res.end(err)
  })
});

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000/`);
});