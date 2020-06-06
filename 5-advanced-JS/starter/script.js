
/******************************** 
Function constructors for objects
********************************/
// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };

// var Person = function(name, yearOfBirth, job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.calculateAge = function(){
//     var date = new Date();
//     var currentYear = date.getFullYear();

//     console.log(currentYear - this.yearOfBirth);
// }

// Person.prototype.lastName = 'Smith';

// var john = new Person('John', 1990, 'teacher');

// var jane = new Person('Jane', 1969, 'designer');

// var mark = new Person('Mark', 1948, 'retired');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();


// console.log(john.lastName, jane.lastName, mark.lastName);


/******************************** 
Object.create
********************************/
// var personProto = {
//     calculateAge:  function(){
//         var date = new Date();
//         var currentYear = date.getFullYear();

//         console.log(currentYear - this.yearOfBirth);
//     }
// }

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';

// var jane = Object.create(personProto,
//     {
//         name: {value: 'Jane'},
//         yearOfBirth: {value: 1969},
//         job: {value: 'designer'}
//     });



/******************************** 
Primitives vs Objects
********************************/
// var a = 23;
// var b = a;
// a = 46;

// console.log(a);
// console.log(b);

// var obj1 = {
//     name: 'John',
//     age: 26
// };

// var obj2 = obj1;

// obj1.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);

// //Functions
// var age = 27;
// var obj = {
//     name: 'Trevor',
//     city: 'Seattle'
// };

// function change(a, b){
//     a = 30;
//     b.city = "San Francisco";
// }

// change(age, obj);

// console.log(age)
// console.log(obj.city);


/******************************** 
Passing functions as arguments
********************************/
// var years = [1990, 1965, 1937, 2005, 1998, 2003];

// function arrayCalc(arr, fn){
//     var arrRes = [];

//     for(i=0;i<arr.length;i++){
//         arrRes.push(fn(arr[i]));
//     }

//     return arrRes;
// }

// function calculateAge(el){
//     return 2020 - el;
// }

// function isFullAge(el){
//     return el >= 18;
// }

// function maxHeartRate(el){
//     if(el >= 18 && el <= 81){
//         return Math.round(206.9 - (0.67 * el));
//     }else{
//         return -1;
//     }
    
// }

// var ages = arrayCalc(years, calculateAge)
// console.log(ages)

// var fullAge = arrayCalc(ages, isFullAge)
// console.log(fullAge);

// var heartRates = arrayCalc(ages, maxHeartRate);
// console.log(heartRates);

/******************************** 
Functions returning functions
********************************/
// function interviewQuestion(job){
//     if(job === 'designer'){
//         return function (name){
//             console.log(name +  ', can you please explain what UX design is?');
//         }
//     } else if(job === 'teacher'){
//         return function(name){
//             console.log('What subject do you teach, ' + name + '?');
//         }
//     } else{
//         return function(name){
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');

// teacherQuestion('John');
// designerQuestion('John');

// interviewQuestion('landscaper')('Mark');

/*******************************************************
Immediately Invoked Function Expressions (Data privacy)
*******************************************************/
// function game(){
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }

// game();

// (function(){
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })();

// (function(goodLuck){
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(5);

/****************************************
Closures
****************************************/
// function retirement(retirementAge){
//     var a = ' years left until retirement.';

//     return function(yearOfBirth){
//         var age = 2020 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     }
// }

// var retirementUS = retirement(66);
// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);

// retirementUS(1996);
// retirementGermany(1996);
// retirementIceland(1996);


// function interviewQuestion(job){
//     return function(name){
//         if(job === 'designer'){
//             console.log(name +  ', can you please explain what UX design is?');

//         }else if(job === 'teacher'){
//             console.log('What subject do you teach, ' + name + '?');

//         }else{
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }

// var designerQuestion = interviewQuestion('designer');
// designerQuestion('John')


/****************************************
Bind, Call, Apply
****************************************/
// var john = {
//     name: 'John',
//     age: 26,
//     job: 'Teacher',
//     presentation: function(style, timeOfDay){
//         if (style === 'formal'){
//             console.log('Good ' + timeOfDay + ', Ladies and Gentleman! I\'m ' + this.name + ', I\'m a ' + this.job + ', and I\'m ' + this.age + ' years old.')
//         } else if(style === 'friendly'){
//             console.log('What\'s up! I\'m ' + this.name + ', I\'m a ' + this.job + ', and I\'m ' + this.age + ' years old. Have a good ' + timeOfDay + '!')
//         }
//     }
// }

// var emily = {
//     name: 'Emily',
//     age: 35,
//     job: 'Designer'
// }

// john.presentation('formal', 'morning');

// // Call allows us to set the this variable in the first argument
// john.presentation.call(emily, 'friendly', 'afternoon');

// // Apply is the same as call, it just accepts arguments as an array (although in this case, it will not work)
// // john.presentation.apply(emily, ['friendly', 'afternoon'])

// // Bind method is similar to call, but does not invoke the function immediately. Lets you store pre set parameters.
// var johnFriendly = john.presentation.bind(john, 'friendly');

// johnFriendly('morning');
// johnFriendly('night');

// var years = [1990, 1965, 1937, 2005, 1998, 2003];

// function arrayCalc(arr, fn){
//     var arrRes = [];

//     for(i=0;i<arr.length;i++){
//         arrRes.push(fn(arr[i]));
//     }

//     return arrRes;
// }

// function calculateAge(el){
//     return 2020 - el;
// }

// function isFullAge(age,el){
//     return el >= age;
// }

// var ages = arrayCalc(years, calculateAge)
// var fullJapan = arrayCalc(ages, isFullAge.bind(this,20));

// console.log(ages);
// console.log(fullJapan)

// Coding challenge 7
(function(){
    // Keep track of correct answers
    var correctCount = 0;

    // Question constructor
    var Question = function(question, answers, correctAnswer){
        this.question = question,
        this.answers = answers,
        this.correctAnswer = correctAnswer
    };

    // Method to print questions and prompt user answer
    Question.prototype.printQuestion = function(){
        // Output question
        console.log(this.question);
            
        // Output possible answers
        this.answers.forEach((answer, i) => {
            console.log(i + '. ' + answer);
        });
    
        // Return user answer
        return prompt(this.question);
    };

    // Method to check answer
    Question.prototype.checkAnswer = function(userAnswer){
        // Check if user wants to exit
        if(userAnswer.toLowerCase() == 'exit'){
            console.log('Program stopped');

        // Check if answer correct
        }else if(userAnswer == this.correctAnswer){
            correctCount++;
            console.clear();
            console.log('Correct! ' + correctCount + ' answers right so far.');
            invokePrintMethod();

        // Else answer incorrect
        }else{
            console.clear();
            console.log('Incorrect, try again.');
            this.printQuestion();
        }
    };
    
    // Create a few questions
    var question1 = new Question('Which of the following is a known chess opening?', ['Jerome Gambit','F File Attack','Childish Gambino'], 0);
    var question2 = new Question('What is the best voice chat platform?', ['Skype','Discord','Teamspeak'], 1);
    var question3 = new Question('What is the best photo editing software?', ['Paint', 'Photoshop', 'Editor X'], 1);
    
    // Add questions to array
    var questionArray = [question1, question2, question3];
    
    // Pick random item in an array
    function randomArrayItem(arr){
        var randomPosition = Math.floor(Math.random() * arr.length)
        return arr[randomPosition]
    }
    
    // Pick new random question each time
    function invokePrintMethod(){
        var randomQuestion = randomArrayItem(questionArray);
        var userAnswer = randomQuestion.printQuestion();
        if(userAnswer != null){
            randomQuestion.checkAnswer(userAnswer);
        }
    }

    invokePrintMethod();
})();