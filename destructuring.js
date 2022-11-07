/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays     -   output: 30 26 27
let ages = [30, 26, 27];

//  let john = ages[0];
//  let mary = ages[1];
//  let joe = ages[2];

let [john, mary, joe] = ages;
console.log(john, mary, joe);

// Destructuring arrays     -  output: 30 26 27

// Destructuring objects    -  output: 30 26 27
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
let { mike, jill, alicia } = jobs;
console.log(mike, jill, alicia);
// Destructuring objects    -  output: 30 26 27
// Destructuring objects    -  output: designer developer accountant

// Destructuring subsets    -  output: english french
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSeconraday] = languages;
console.log(johnNative, johnSeconraday);
// Destructuring subsets    -  output: english french

// Destructuring subsets    -  output: spanish german
let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);
// Destructuring subsets    -  output: spanish german

// Destructuring subsets    -  output: english german
let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japanese",
}
let { firstLanguage, thirdLanguage } = languages2;
console.log(firstLanguage, thirdLanguage);
// Destructuring subsets    -  output: english german

// Using rest parameter syntax  -  output: apple orange
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others);
// Using rest parameter syntax  -  output: apple orange

// Using rest parameter syntax  -  output: [ 'banana', 'peach', 'cherry' ]
// pizza
// pasta
// { sarah: 'vegetarian', andrea: 'steak' }
let favoriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak",
};
let { brian, anna, ...rest } = favoriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);
// Using rest parameter syntax  -  output: [ 'banana', 'peach', 'cherry' ]
// pizza
// pasta
// { sarah: 'vegetarian', andrea: 'steak' }


// Destructuring Challenge
/* You will create three variables using destructuring on an array returned from a function. The first and second variables will be the first two items in the array and the final one will be the remainder of items in the array. You will also create an arrow function, Which should return an array containing all the subjects for whichever students name is supplied when the function is called.
 
Declare a variable named: makeList using the keyword const
The variable makeList should be assigned an arrow function
The arrow function should take two parameters named: arr, student
The arrow function should use a return statement
The function should return an array of the subjects for the student whose name is passed into the function when called.
Using destructuring on the return value from calling the function and passing in the students array,  and the string John, create 3 variables named: first, second, rest using the keyword let
log out the values  first, second, and rest to view their values
Note the function should return the correct subjects when the names Emily, Adam, and Fran are used, and this will be tested. */

let students = [
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'John',
        subjects: ['art', 'cad', 'english', 'maths', 'science'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

const makeList = (arr, student) => {
    let list = [];
    for(let i of arr){
        if(i.name == student){
            return i.subjects;
        }
    }
};

let [first, second, ...rest1] = makeList(students, "John");
console.log(first)
console.log(second)
console.log(rest1)
// output: art cad [ 'english', 'math', 'science' ]
// output: it was changed rest to rest1 due to it was used before









