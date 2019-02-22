import request from 'request';
import { TriviaQuestion, TriviaCategory, TriviaDifficulty, TriviaEncode, TriviaType } from '../models/TriviaQuestion';

const getQuestions = (amount: number, 
                      category: TriviaCategory = TriviaCategory[''], 
                      difficulty: TriviaDifficulty = TriviaDifficulty[''], 
                      type: TriviaType = TriviaType[''], 
                      encode: TriviaEncode = TriviaEncode['base64']) => {
    // Check arguments
    let amountChecked = amount <= 50  ? amount : 50;    // Maximum 50 results

    /*let categoryChecked = triviaCategories.filter(cat => cat.name == category)[0];
    if(typeof(categoryChecked) != 'undefined')
        categoryChecked = categoryChecked['id']
                                          
    let difficultyChecked = triviaDifficulties.filter(dif => dif == difficulty)[0];
    let typeChecked = triviaTypes.filter(tp => tp == type)[0];
    let encodeChecked = triviaEncodes.filter(enc => enc == encode)[0];
*/
    let categoryChecked = TriviaCategory[category];
    let difficultyChecked = TriviaDifficulty[difficulty];
    let typeChecked = TriviaType[type];
    let encodeChecked = TriviaEncode[encode];
    // Options object for request call
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
                        let incorrect = (value as any[]).map((answer: string) => decodeBase64(answer));
                        question['answers'] = [...incorrect, question['correct_answer']];

                        // Remove incorrect answers from object
                        delete question['incorrect_answers']
                    } else {
                        // It is a string
                        question[key] = decodeBase64(value);
                    }
                })

                // Return the modified object
                return question;
            });

            // The questions have been parsed
            resolve(parsedQuestions);
        })
    });

    return promise
}

function decodeBase64(string: string) {
  return Buffer.from(string, 'base64').toString();
}

getQuestions(1).then(console.log)