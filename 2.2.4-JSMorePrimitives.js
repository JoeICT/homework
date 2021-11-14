// create five variables and assign them values
x = (5 > 3)
let y = 6;
let s = "This is a string";
let J = null;
let Joe =

// each variable should reference a different primitive data type
// ! REMEMBER: you should never DELIBERATELY assign "undefined" to a variable

// print the type of each variable in this order:
// string, number, boolean, undefined, null

console.log (typeof s);
console.log (typeof y);
console.log (typeof x);
console.log  (J);
console.log (typeof Joe);

// create a variable that references a template literal
// inside the template literal, use two variables

let m = 7
let r = 5
console.log (`my fav num is ${m * r} and its also my age`);

// reassign the value of the variable that references "null"

J = 7 * 5;

// print the value and its type
console.log (J);
console.log (typeof J);

// print a variable that causes a ReferenceError

// console.log (J *N)

// alter the previous line to no longer cause a ReferenceError
console.log (J * m)
