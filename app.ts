import express = require('express');
import https = require('https');

import { OpenTriviaHandler as Trivia } from './util/OpenTriviaHandler';
import { TriviaCategory } from './models/TriviaQuestion';

const app: express.Application = express();

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/json; charset=utf-8');
  Trivia.getQuestions(1,"Entertainment: Japanese Anime & Manga").then(questions => {
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