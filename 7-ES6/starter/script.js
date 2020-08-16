// Let and const

// ES5
// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name5);

// // var is function scoped
// function driversLicense5(passedTest){
//     if(passedTest){
//         console.log(firstName)
//         var firstName = 'John';
//         var yearOfBirth = 1990;
//     }

//     console.log(firstName + ' born in ' + yearOfBirth + ' is now officially allowed to drive a car!');
// }

// driversLicense5(true);

// ES6
// const name6 = 'Jane Smith';
// let age6 = 23;
// name6 = 'Jane Miller';
// console.log(name6);

// // const and let are block scoped
// function driversLicense6(passedTest){
//     console.log(firstName)
//     let firstName;
//     const yearOfBirth = 1990

//     if(passedTest){
//         firstName = 'John';
//     }

//     console.log(firstName + ' born in ' + yearOfBirth + ' is now officially allowed to drive a car!');
// }

// driversLicense6(true);

// let i = 23;
// for(let i = 0; i < 5; i++){
//     console.log(i);
// }

// console.log(i)

// var i = 23;
// for(var i = 0; i < 5; i++){
//     console.log(i);
// }

// console.log(i)




// Blocks and IIFEs
// {
//     const a = 1;
//     let b = 2;
// }



// ES6 strings
// let firstName = 'John';
// let lastName = 'Smith';
// const yearOfBirth = 1990;

// function calcAge(year){
//     return 2016 - year;
// }

// // ES5
// console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// // ES6
// console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith('J'));
// console.log(n.endsWith('h'));
// console.log(n.includes(' '));
// console.log(`${firstName} `.repeat(5));





// Arrow functions
// const years = [1990, 1965, 1982, 1937];

// // ES5
// var ages5 = years.map(function(current){
//     return 2020 - current;
// })
// console.log(ages5);

// // ES6
// let ages6 = years.map((current, index) => `${index}. ${2020 - current}`);
// console.log(ages6);

// ages6 = years.map((current, index) => {
//     const now = new Date().getFullYear();
//     const age = now - current;
//     return `${index}. ${age}`
// })
// console.log(ages6);






// Arrow functions 2: Lexical "this" keyword
// ES 5
// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function(){
//         var self = this;
//         document.querySelector('.green').addEventListener('click', function(){
//             var str = 'This is box number ' + self.position + ' and it is ' + self.color;
//             alert(str)
//         })
//     }
// }

// box5.clickMe();

// ES 6
// const box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function(){
//         document.querySelector('.green').addEventListener('click', () => {
//             var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//             alert(str)
//         })
//     }
// }

// box6.clickMe();

// const box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: () => {
//         document.querySelector('.green').addEventListener('click', () => {
//             var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//             alert(str)
//         })
//     }
// }

// box6.clickMe();

// ES5
// function Person(name){
//     this.name = name;
// }

// Person.prototype.myFriends5 = function(friends){
//     var arr = friends.map(function(el){
//         return this.name + ' is friends with ' + el;
//     }.bind(this));

//     console.log(arr);
// }

// var friends = ['Bob', 'Jane', 'Mark'];
// new Person('John').myFriends5(friends);


// ES6
// function Person(name){
//     this.name = name;
// }

// Person.prototype.myFriends6 = function(friends){
//     var arr = friends.map((el) => `${this.name} is friends with ${el}`);

//     console.log(arr);
// }

// var friends = ['Bob', 'Jane', 'Mark'];
// new Person('John').myFriends6(friends);



// Destructuring
// ES5
// var john = ['John', 26];
// var name = john[0];
// var age = john[1];

// ES6
// const [name, year] = ['John', 26];
// console.log(name);
// console.log(year);

// const obj = {
//     firstName: 'John',
//     lastName: 'Smith'
// };

// const {firstName, lastName} = obj;

// console.log(firstName);
// console.log(lastName);

// const {firstName: a, lastName: b} = obj;
// console.log(a);
// console.log(b);

// function calcAgeRetirement(year){
//     const age = new Date().getFullYear() - year;
//     return [age, 65 - age];
// }

// const [age2, retirement] = calcAgeRetirement(1990);
// console.log(age2);
// console.log(retirement);



// // Arrays
// const boxes = document.querySelectorAll('.box');

// ES5
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(current){
//     current.style.backgroundColor = 'dodgerblue';
// })

// ES6
// const boxesArr6 = Array.from(boxes);
// boxesArr6.forEach(current => current.style.backgroundColor = 'dodgerblue');

// ES5 (contine / break)
// for(var i=0; i<boxesArr5.length; i++){
//     if(boxesArr5[i].className === 'box blue'){
//         continue;
//     }
    
//     boxesArr5[i].textContent = 'I changed to Blue';
// }

// ES6 for/of
// for(const current of boxesArr6){
//     if(current.className.includes('blue')){
//         continue;
//     }

//     current.textContent = 'I changed to blue!';
// }

// ES5
// var ages = [12, 17, 8 , 21, 14, 11];

// var full = ages.map(function(current){
//     return current >= 18;
// })

// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);

// ES6
// console.log(ages.findIndex(current => current >= 18));
// console.log(ages.find(current => current >= 18));



// Spread operator
// function addFourAges(a, b , c, d){
//     return a + b + c + d;
// }

// var sum1 = addFourAges(18, 30, 12, 21);
// console.log(sum1);

// // ES5
// var ages = [18, 30, 12, 21];
// var sum2 = addFourAges.apply(null, ages);
// console.log(sum2);

// // ES6
// const sum3 = addFourAges(...ages);
// console.log(sum3);

// const familySmith = ['John', 'Jane', 'Mark'];
// const familyMiller = ['Mary', 'Bob', 'Ann'];

// const bigFamily = [...familySmith, ...familyMiller, 'Cool Kid'];
// console.log(bigFamily);

// const heading = document.querySelector('h1');
// const boxes = document.querySelectorAll('.box');

// const all = [heading, ...boxes];
// all.forEach((curr) => curr.style.color = 'purple');



// Rest parameters (pass in any number of params)
// ES5
// function isFullAge5(){
//     var argsArr = Array.prototype.slice.call(arguments);

//     argsArr.forEach(function(cur){
//         console.log(2016 - cur >= 18)
//     })
// }

// isFullAge5(1990, 1999, 1965);
// isFullAge5(1990, 1999, 1965, 2016, 1987);

// ES6
// function isFullAge6(...years){
//     years.forEach(cur => console.log(2016 - cur >= 18));
// }

// isFullAge6(1990, 1999, 1965);
// isFullAge6(1990, 1999, 1965, 2016, 1987);


// Rest parameters
// ES5
// function isFullAge5(limit){
//     var argsArr = Array.prototype.slice.call(arguments, 1);

//     argsArr.forEach(function(cur){
//         console.log(2016 - cur >= limit)
//     })
// }

// isFullAge5(18, 1990, 1999, 1965);
// isFullAge5(40, 1990, 1999, 1965, 2016, 1987);

// // ES6
// function isFullAge6(limit, ...years){
//     years.forEach(cur => console.log(2016 - cur >= limit));
// }

// isFullAge6(20, 1990, 1999, 1965);
// isFullAge6(50, 1990, 1999, 1965, 2016, 1987);


// Default parameters

// ES5
// function SmithPerson(firstName, yearOfBirth, lastName, nationality){
//     if(lastName == undefined){
//         lastName = 'Smith';
//     }else if(nationality == undefined){
//         nationality = 'American';
//     }

//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }

// ES6
// function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American'){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }

// var john = new SmithPerson('John', 1990);
// var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish')

// console.log(john);
// console.log(emily);


// Maps
// const question = new Map();
// question.set('question', 'What is the official name of the latest major JavaScript version?');
// question.set(1, 'ES5');
// question.set(2, 'ES6');
// question.set(3, 'ES2015');
// question.set(4, 'ES7');
// question.set('correct', 3);
// question.set(true, 'Correct answer :)');
// question.set(false, 'Wrong, please try again!');

// console.log(question.get('question'));
// console.log(question.size);

// if(question.has(4)){
//     question.delete(4);
// }

// console.log(question);
// // question.forEach((value, key) => console.log(`This is key: ${key} and this is value: ${value}`));

// for(let [key, value] of question.entries()){
//     if(typeof(key) == 'number'){
//         console.log(`Answer ${key}: ${value}`)
//     }
// }

// const ans = parseInt(prompt('Write the correct answer'));

// console.log(question.get(ans === question.get('correct')))

// question.clear();


// Classes
// // ES5
// var Person5 = function(name, yearOfBirth, job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person5.prototype.calculateAge = function(){
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
// }

// var john5 = new Person5('John', 1990, 'Teacher');

// // ES6
// class Person6 {
//     constructor (name, yearOfBirth, job){
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }

//     calculateAge(){
//         let age = new Date().getFullYear() - this.yearOfBirth;
//         console.log(age);
//     }

//     static greeting(){
//         console.log('Hey there')
//     }
// }

// const john6 = new Person6('John', 1990, 'Teacher')


// Classes and subclasses
// ES5
// var Person5 = function(name, yearOfBirth, job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person5.prototype.calculateAge = function(){
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
// }

// var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals){
//     Person5.call(this, name, yearOfBirth, job);
//     this.olympicGames = olympicGames;
//     this.medals = medals;
// }

// Athlete5.prototype = Object.create(Person5.prototype);

// Athlete5.prototype.wonMedal = function(){
//     this.medals++;
//     console.log(this.medals);
// }

// var johnAthlete5 = new Athlete5('John', 1990, 'Swimmer', 3, 10);

// johnAthlete5.calculateAge();
// johnAthlete5.wonMedal();

// // ES6
// class Person6 {
//     constructor (name, yearOfBirth, job){
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }

//     calculateAge(){
//         let age = new Date().getFullYear() - this.yearOfBirth;
//         console.log(age);
//     }
// }

// class Athlete6 extends Person6{
//     constructor (name, yearOfBirth, job, olympicGames, medals){
//         super(name, yearOfBirth, job);
//         this.olympicGames = olympicGames;
//         this.medals = medals;
//     }

//     wonMedal(){
//         this.medals++;
//         console.log(this.medals);
//     }
// }

// const johnAthlete6 = new Athlete6('John', 1990, 'Swimmer', 3, 10);
// johnAthlete6.wonMedal();
// johnAthlete6.calculateAge();


// Coding Challenege 8

class City{
    constructor(name, parks, streets){
        this.name = name;
        this.parks = parks;
        this.streets = streets;
        this.averageParkAge = this.calcAverageParkAge();
        this.totalStreetLength = this.calcTotalStreetLength();
        this.averageStreetLength = (this.totalStreetLength / this.streets.length);
        this.oneThousandTrees = this.getParksWith1kTrees();
    }

    calcAverageParkAge(){
        let totalParkAge = this.parks.reduce((accum, curr) => (accum + curr.age), 0);
        return (totalParkAge / this.parks.length);
    }

    calcTotalStreetLength(){
        let totalStreetLength = this.streets.reduce((accum, curr) => (accum + curr.length), 0);
        return totalStreetLength;
    }

    getParksWith1kTrees(){
        return this.parks.filter((curr) => curr.numTrees >= 1000);
    }

    printReport(){
        // Parks report
        console.log(`---${this.name.toUpperCase()} PARKS REPORT---`);

        // Tree density of each park
        this.parks.forEach((curr) => {
            console.log(`The ${curr.name} park has a tree density of ${curr.density} trees/acre`);
        });
        // Average age of each park
        console.log(`The average age of each park is ${this.averageParkAge} years`);

        // Names of the parks with over 1k trees
        this.oneThousandTrees.forEach((curr) => {
            console.log(`${curr.name} park has more than 1000 trees`);
        })

        // Street report
        console.log(`---${this.name.toUpperCase()} STREET REPORT---`);

        // Total and average length of all streets
        console.log(`Total length of all streets in ${this.name}: ${this.totalStreetLength} miles`);
        console.log(`Average length of all streets in ${this.name}: ${this.averageStreetLength} miles`);

        // Size classification of all streets
        this.streets.forEach((curr) => {
            let size = '';
            if(curr.length < 1)
                size = 'tiny';
            else if(curr.length >=1 && curr.length < 2)
                size = 'small';
            else if(curr.length >=2 && curr.length < 3)
                size = 'normal';
            else if(curr.length >= 3 && curr.length < 4)
                size = 'big';
            else if(curr.length >= 4)
                size = 'huge';
            else
                size = 'normal';

            console.log(`${curr.name} is classified as a ${size} street`)
        });
    }
}

class Park{
    constructor(name, buildYear, numTrees, area){
        this.name = name;
        this.buildYear = buildYear;
        this.numTrees = numTrees;
        this.area = area;
        this.age = new Date().getFullYear() - this.buildYear;
        this.density = (this.numTrees / this.area);
    }
}

class Street{
    constructor(name, buildYear, length){
        this.name = name;
        this.buildYear = buildYear;
        this.length = length;
    }
}

const parks = [
    new Park('Evergreen', 1970, 1000, 10),
    new Park('Pine', 1985, 1010, 15),
    new Park('Mahogany', 1920, 520, 5)
]

const streets = [
    new Street('Ave A', 1890, 2),
    new Street('Ave B', 1900, 1.5),
    new Street('Ave C', 1920, 2.5),
    new Street('Ave D', 1940, 4)
]

const snohomish = new City('Snohomish', parks, streets);

snohomish.printReport();