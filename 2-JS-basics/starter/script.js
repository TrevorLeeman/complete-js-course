// // *********************
// // typeof operator
// // *********************
// var test='Hello';
// console.log(typeof test);



// // **************************
// // Coding challenge 1 (BMI)
// // **************************
// var massMark = 100; //kg
// var heightMark = 1.5 //m

// var massJohn = 90; //kg
// var heightJohn = 1.3 //m

// // BMI = m / h^2
// var bmiMark = massMark / Math.pow(heightMark,2);
// var bmiJohn = massJohn / Math.pow(heightJohn,2);

// var bmiComparison = bmiMark > bmiJohn;

// console.log(bmiComparison);




// // *********************
// // If / else statements
// // *********************
// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus == 'single'){
//     console.log('John is single');
// }else{
//     console.log('John is cuffed');
// }

// var massMark = 100; //kg
// var heightMark = 1.5 //m

// var massJohn = 90; //kg
// var heightJohn = 1.3 //m

// // BMI = m / h^2
// var bmiMark = massMark / Math.pow(heightMark,2);
// var bmiJohn = massJohn / Math.pow(heightJohn,2);

// if (bmiMark > bmiJohn){
//     console.log('Mark is a thick lad, at least compared to John')
// }else{
//     console.log('John is a bicc boi compared to Mark')
// }



// // *********************
// // Boolean logic
// // *********************
// var firstName = 'John';
// var age = 13;
// if (age < 13){
//     console.log(firstName + ' is a wee lad.')
// }else if (age >= 13 && age < 20){
//     console.log(firstName + ' is an anksty teen.')
// }else if (age >= 20 && age <= 30){
//     console.log(firstName + ' is a young man.')
// }else{
//     console.log(firstName + ' is an old geezer.')
// }



// // ***************************************
// // Ternary Operator and Switch Statements
// // ***************************************
// var firstName = 'John';
// var age = 21;
// var drink;

// drink = age >= 21 ? 'alcohols' : 'juice' 

// age >= 21 ? console.log(firstName + ' will have some ' + drink + ' because he\'s a bic boi')
//           : console.log(firstName + ' will have some ' + drink + ' because he\'s a little\'n')

// // Switch statement
// var job = 'teacher';

// switch (job) {
//     case 'teacher':
//         console.log('A ' + job + ' teaches people how to do things')
//         break
//     case 'driver':
//         console.log('A ' + job + ' moves things from point A to point B')
//         break
//     default:
//         console.log('A ' + job + ' does something else entirely')
// }

// switch (true) {
//     case age >= 21:
//         console.log(firstName + ' will have some ' + drink + ' because he\'s a bic boi')
//         break
//     case age < 21:
//         console.log(firstName + ' will have some ' + drink + ' because he\'s a little\'n')
//         break
//     default:
//         console.log(firstName + ' achieved an impossible age, well done!')
// }



// // ************************************************
// // Truthy and Falsy values and equality operators
// // ************************************************
// // Truthy values: NOT falsy values
// // Falsy values: undefined, null, 0 ', NaN

// var height;
// height = 23;

// if (height || height === 0) {
//     console.log('Variable is defined')
// }else {
//     console.log('Variable has NOT been defined')
// }

// // Equality operators
// if (height == '23') {
//     console.log('The == operator does type coercion')
// }



// // ************************************************
// // Coding challenge 2 (Compare basketball scores)
// // ************************************************
// var pointsJohn = [89,120,103,106,300];
// var pointsMike = [116,94,123,50,33];
// var pointsMary = [97, 134, 105,123,12];
// var averageJohn = 0;
// var averageMike = 0;
// var averageMary = 0;
// var i = 0

// function averagePoints(points){
//     var average = 0;
//     for (i = 0; i < points.length; i++){
//         average += (points[i]/points.length);
//     }
//     console.log(average)
//     return average;
// }

// averageJohn = averagePoints(pointsJohn);
// averageMike = averagePoints(pointsMike);
// averageMary = averagePoints(pointsMary);

// if (averageJohn > averageMike && averageMary){
//     console.log('John came out on top, with an average of ' + averageJohn +  ' points per game.')
// }else if (averageMike > averageJohn && averageMary){
//     console.log('Mike came out on top, with an average of ' + averageMike +  ' points per game.')
// }else if (averageMary > averageJohn && averageMike){
//     console.log('Mary came out on top, with an average of ' + averageMary +  ' points per game.')
// }else{
//     console.log('It\'s a tie!')
// }



// // *********************
// // Functions
// // *********************
// function calculateAge(birthYear){
//     return 2018 - birthYear;
// }

// function yearsUntilRetirement(year, firstName){
//     var age = calculateAge(year);
//     var retirement = 65 - age;

//     if (retirement > 0){
//         console.log(firstName + ' retires in ' + retirement + ' years.');
//     }else{
//         console.log(firstName + ' is already retired!');
//     }
    
// }

// yearsUntilRetirement(1990, 'John');



// // ******************************************
// // Function Statements and Expressions
// // ******************************************
// // Function declarations load before any code is executed, while Function expressions load only when the interpreter reaches that line of code.
// // Example EXPRESSION:
// alert(foo()); // ERROR! foo wasn't loaded yet
// var foo = function() { return 5; }
// // Example STATEMENT:
// alert(foo()); // Alerts 5. Declarations are loaded before any code can run.
// function foo() { return 5; }

// // Function declaration
// function whatDoYouDos(job, firstName){
//     switch(job){
//         case 'teacher':
//             return firstName + ' teaches kids stuff.'
//         case 'driver':
//             return firstName + ' drives a cab in Seattle.'
//             break
//         case 'designer':
//             return firstName + ' designs beautiful websites.'
//             break
//         default:
//             return firstName + ' works as a/an ' + job + ' for a living.'
//     }
// }

// console.log(whatDoYouDos('driver', 'Mohammed'))
// console.log(whatDoYouDos('electrician', 'Joe'))

// // Function expression
// var whatDoYouDo = function(job, firstName){
//     switch(job){
//         case 'teacher':
//             return firstName + ' teaches kids stuff.'
//         case 'driver':
//             return firstName + ' drives a cab in Seattle.'
//             break
//         case 'designer':
//             return firstName + ' designs beautiful websites.'
//             break
//         default:
//             return firstName + ' does something else.'
//     }
// }

// console.log(whatDoYouDo('teacher', 'John'))
// console.log(whatDoYouDo('designer', 'Jane'))





// // *********************
// // Arrays
// // *********************
// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990,1969,1948);

// console.log(names)
// console.log(names.length)

// // Mutate array data
// names[1] = 'Ben'
// names[5] = 'Joe;'
// names[names.length] = 'Mary'
// console.log(names);

// // Different data types
// var john = ['John', 'Smith', 1990, 'teacher', false];

// // Add to end of array
// john.push('blue')
// // Add to beginning of array
// john.unshift('Mr.')
// console.log(john)

// // Remove from end of array
// john.pop()
// john.pop()
// //Remove from beginning of array
// john.shift()
// console.log(john)

// // Find position of parameter in array
// var positionInArray = john.indexOf(1990)
// var ifNotInArray = john.indexOf(1980)
// console.log(positionInArray)
// //Returns -1 if parameter not found
// console.log(ifNotInArray)

// // Using indexOf with ternary operator
// var isDesigner = john.indexOf('designer') == -1 ? 'John is NOT a designer.' : 'John IS a designer.';
// console.log(isDesigner);
// var isDesigner = john.indexOf('teacher') == -1 ? 'John is NOT a teacher.' : 'John IS a teacher.';
// console.log(isDesigner);



// // ************************************************
// // Coding challenge 3 (Tip calc w/ arrays)
// // ************************************************
// var bills = [124, 48, 268] //$
// var tips;
// var totals;

// function tipCalc(billArray){

//     let i = 0;
//     let tips = [];

//     for (i; i < billArray.length; i++){
//         if (billArray[i] < 50){
//             tips.push(+(billArray[i] * .2).toFixed(2))
//         }
//         else if (billArray[i] >= 50 && billArray[i] <= 200){
//             tips.push(+(billArray[i] * .15).toFixed(2))
//         }
//         else{
//             tips.push(+(billArray[i] * .1).toFixed(2))
//         }
//     }

//     return tips
// }

// function totalCalc(billArray, tipArray){
//     var i = 0;
//     let totals = [];

//     for (i; i < billArray.length; i++){
//         totals[i] = billArray[i] + tipArray[i]
//     }

//     return totals
// }

// tips = tipCalc(bills)
// totals = totalCalc(bills, tips)

// console.log(bills)
// console.log(tips)
// console.log(totals)



// // ************************************************
// // Objects and properties
// // ************************************************
// // Object literal syntax
// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false
// }

// console.log(john.firstName);
// console.log(john['lastName']);
// var x = 'birthYear';
// console.log(john[x]);

// john.job = 'designer';
// john['isMarried'] = true;

// console.log(john)

// // New Object syntax
// var jane = new Object();
// jane.firstName = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';

// console.log(jane)



// // ************************************************
// // Objects and methods
// // ************************************************
// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function(){
//         this.age =  2018 - this.birthYear;
//     }
// }

// john.calcAge();
// console.log(john)



// // ************************************************
// // Coding challenge 4 (BMI calc w/ objects)
// // ************************************************
// function person(firstName, lastName, mass, height) {
//     this.firstName = firstName,
//     this.lastName = lastName,
//     this.fullName = this.firstName + ' ' + this.lastName,
//     this.mass = mass, //kg
//     this.height = height, //m
//     this.bmi = (this.mass / (Math.pow(this.height, 2)))
// }

// var john = new person('John', 'Appleseed', 200, 1.7)
// var mark = new person('Mark', 'Markerson', 170, 1.6)

// console.log(john)
// console.log(mark)

// if (john.bmi > mark.bmi){
//     console.log(john.fullName + '\'s BMI is ' + john.bmi + ', ' + (john.bmi - mark.bmi) + ' higher than ' + mark.firstName + '\'s BMI.')
// }
// else if (mark.bmi > john.bmi){
//     console.log(mark.fullName + '\'s BMI is ' + mark.bmi + ', ' + (mark.bmi - john.bmi) + ' higher than ' + john.firstName + '\'s BMI.')
// }
// else{
//     console.log('The BMIs are equal!')
// }



// // ************************************************
// // Loops and iteration
// // ************************************************
// for (var i = 1; i <= 10; i+=2){
//     console.log(i)
// }

// var john = ['John', 'Smith', 1990, 'teacher', false];

// for (let i = 0; i < john.length; i++) {
//     console.log(john[i]);
// }

// var i= 0;
// while (i < john.length){
//     console.log(john[i]);
//     i++;
// }

// // continue and break statements
// for (let i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') continue;
//     console.log(john[i]);
// }

// for (let i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') break;
//     console.log(john[i]);
// }

// for (let i = (john.length -1); i >= 0; i--) {
//     console.log(john[i]);
// }



// // *****************************************************
// // Coding challenge 5 (Tip calc w/ objects and arrays)
// // *****************************************************
var amountsJohn = function(bills) {
    this.bills = bills,
    this.tips = [],
    this.totals = [],
    this.tipCalc = function(){
        for(let i = 0; i < this.bills.length; i++){
            if (this.bills[i] < 50){
                this.tips.push(+(this.bills[i] * .2).toFixed(2))
            }
            else if (this.bills[i] >= 50 && this.bills[i] <= 200){
                this.tips.push(+(this.bills[i] * .15).toFixed(2))
            }
            else{
                this.tips.push(+(this.bills[i] * .10).toFixed(2))
            }
        }
    }
    this.totalCalc = function(){
        for(let i = 0; i < this.tips.length; i++){
            this.totals.push(this.bills[i] +  this.tips[i])
        }
    }
}

var amountsMark = function(bills) {
    this.bills = bills,
    this.tips = [],
    this.totals = [],
    this.tipCalc = function(){
        for(let i = 0; i < this.bills.length; i++){
            if (this.bills[i] < 100){
                this.tips.push(+(this.bills[i] * .2).toFixed(2))
            }
            else if (this.bills[i] >= 100 && this.bills[i] <= 300){
                this.tips.push(+(this.bills[i] * .10).toFixed(2))
            }
            else{
                this.tips.push(+(this.bills[i] * .25).toFixed(2))
            }
        }
    }
    this.totalCalc = function(){
        for(let i = 0; i < this.tips.length; i++){
            this.totals.push(this.bills[i] +  this.tips[i])
        }
    }
}

var johnBills = [124, 48, 268, 180, 42];
var markBills = [77, 375, 110, 45];

var johnAmounts = new amountsJohn(johnBills);
var markAmounts = new amountsMark(markBills);

johnAmounts.tipCalc();
johnAmounts.totalCalc();

markAmounts.tipCalc();
markAmounts.totalCalc();

console.log(johnAmounts);
console.log(markAmounts);

function averageTip(tips){
    var total = 0;
    var average = 0;
    for (let i = 0; i < tips.length; i++) {
        total += tips[i];
    }
    average = (total / tips.length);
    return +average.toFixed(2);
}

var johnAverageTip = averageTip(johnAmounts.tips);
var markAverageTip = averageTip(markAmounts.tips);

if (johnAverageTip > markAverageTip){
    console.log('John tipped more than mark on average ($' + johnAverageTip + ').')
}else if(markAverageTip > johnAverageTip){
    console.log('Mark tipped more than John on average ($' + markAverageTip + ').')
}else{
    console.log('John and Mark tipped the same amount on average.')
}

