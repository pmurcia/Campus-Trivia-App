import request from 'request';
import { TriviaQuestion, TriviaCategory, TriviaDifficulty, TriviaEncode, TriviaType } from '../models/TriviaQuestion';

const shuffle = require('shuffle-array');

class OpenTriviaDB {
    public static getQuestions = (amount: number, 
                    category: string = '', 
                    difficulty: string = '', 
                    type: string = '', 
                    encode: string = 'base64') => {
        // Check arguments
        let amountChecked = amount <= 50  ? amount : 50;    // Maximum 50 results
        let categoryChecked = Object.keys(TriviaCategory).filter(k => isNaN(Number(k))).includes(category) ? Object.entries(TriviaCategory).filter(([k,v]) => k == category)[0][1] : '';
        let difficultyChecked = Object.keys(TriviaDifficulty).filter(k => isNaN(Number(k))).includes(difficulty) ? difficulty : '';
        let typeChecked = Object.keys(TriviaType).filter(k => isNaN(Number(k))).includes(type) ? type : '';
        let encodeChecked = Object.keys(TriviaEncode).filter(k => isNaN(Number(k))).includes(encode) ? encode : 'base64';
        
        // Setup the request options object
        const options = {
            url: 'https://opentdb.com/api.php',
            method: 'GET',
            qs: {
                'amount': amountChecked,
                'category': categoryChecked,
                'difficulty': difficultyChecked,
                'type': typeChecked,
                'encode': encodeChecked
            }
        }

        let promise = new Promise((resolve,reject) => {
            let parsedQuestions = [];
            request(options, function (error, response, body) {
                //------- TODO Error Handling -------------------
                
                // Parse HTTP response
                let res = JSON.parse(body);
                let questions = res['results'];
                
                // Parse body data
                parsedQuestions = questions.map((question: any) => {
                    // For each question, we are going to modify its values
                    Object.entries(question).map(([key,value]) => {
                        // We get key-value pairs, and now we change the 
                        if(typeof(value) != "string") {
                            // It is an array
                            let incorrect = (value as any[]).map((answer: string) => Util.decodeBase64(answer));
                            let unshuffled = [...incorrect, question['correct_answer']];
                            question['answers'] = shuffle(unshuffled);

                            // Remove incorrect answers from object
                            delete question['incorrect_answers']
                        } else {
                            // It is a string
                            question[key] = Util.decodeBase64(value);
                        }
                    })

                    // Return the modified object
                    return new TriviaQuestion(question['category'],
                                              question['type'],
                                              question['difficulty'],
                                              question['question'],
                                              question['correct_answer'],
                                              question['answers']);
                });

                // The questions have been parsed
                resolve(parsedQuestions);
            })
        });

        return promise as Promise<TriviaQuestion[]>
    }
}

class Util {
    public static decodeBase64 = (string: string) => {
        return Buffer.from(string, 'base64').toString();
    }
}

export { OpenTriviaDB }