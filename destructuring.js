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










