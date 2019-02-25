import express = require('express');
import https = require('https');

import { OpenTriviaDB } from './util/OpenTriviaDB';
import { TriviaCategory, TriviaQuestion } from './models/TriviaQuestion';

const PORT = process.env.PORT || '5000';
const app: express.Application = express();

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/json; charset=utf-8');
  OpenTriviaDB.getQuestions(5).then((questions) => {
    console.log(questions);
    let mapped = questions.map(q => q.toAppInventor())
    res.end(JSON.stringify(mapped));
  }).catch(err => {
    console.log(err);
    res.end(err)
  })
});

app.listen(PORT, () => 
  console.log('Example app listening on port ${PORT}!')
);