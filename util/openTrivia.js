// CHANGE IN THE FUTURE
function TriviaQuestion(category,type,difficulty,question,answers,correct_answer) {
    this.category = category
    this.type = type
    this.difficulty = difficulty
    this.question = question
    this.answers = answers
    this.correct_answer = correct_answer
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

var triviaDifficulties = [
    'easy',
    'medium',
    'hard'
]

var triviaTypes = [
    'multiple',
    'boolean'
]

var triviaEncodes = [
    'url3986',
    'base64'
]
// STOP CHANGE

const request = require('request');

const getQuestions = (amount, category = '', difficulty = '', type = '', encode = 'base64') => {
    // Check arguments
    let amountChecked = amount <= 50  ? amount : 50;    // Maximum 50 results

    let categoryChecked = triviaCategories.filter(cat => cat.name == category)[0];
    if(typeof(categoryChecked) != 'undefined')
        categoryChecked = categoryChecked['id']
                                          
    let difficultyChecked = triviaDifficulties.filter(dif => dif == difficulty)[0];
    let typeChecked = triviaTypes.filter(tp => tp == type)[0];
    let encodeChecked = triviaEncodes.filter(enc => enc == encode)[0];

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
            parsedQuestions = questions.map((question) => {
                // For each question, we are going to modify its values
                Object.entries(question).map(([key,value]) => {
                    // We get key-value pairs, and now we change the 
                    if(typeof(value) != "string") {
                        // It is an array
                        let incorrect = value.map((answer) => decodeBase64(answer));
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

function decodeBase64(string) {
  return Buffer.from(string, 'base64').toString();
}

getQuestions(10,null,'easy').then(console.log)