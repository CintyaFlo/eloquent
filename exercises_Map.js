// MAP FUNCTION DEFINITION
/* The map function creates a new array with the results of calling a provided 
function on every element in the original array. The callback function passed 
as an argument is applied to each element, and the value returned by this 
function becomes the new value in the new array. The original array is not modified. */

//EXERCISES
//Exercise 1: Square the Numbers
//Write a function that, given an array of numbers, returns a new 
//array with the squares of each number.

const number= [2, 4, 6, 8]; //  Expected result: [4, 16, 36, 64]

function square (array){
    return array.map(num =>num*num);

}
console.log(square(number));
console.log(number); //THE ORIGINAL ARRAY IS NOT MODIFIED.

//Exercise 2: Convert Strings to Uppercase
//Given an array of strings, create a function that returns a new array with 
//all strings in uppercase.

const words = ['hello', 'world', 'javascript'];// Expected result: ['HELLO', 'WORLD', 'JAVASCRIPT']

function toUpperCase (array){
    return array.map(word => word.toUpperCase());
}

console.log(toUpperCase(words));

//Exercise 3: Extract Properties from Objects
//Given an array of objects, each representing a person with name and age 
//properties, write a function that returns a new array containing only 
//the names of the people.

const people = [
    { name: 'Mario', age: 25 },
    { name: 'Luigi', age: 30 },
    { name: 'Anna', age: 28 }
];// Expected result: ['Mario', 'Luigi', 'Anna']
function extractProperty (array){
    return array.map(object => object.name);
};

console.log(extractProperty(people));

//Exercise 4: Add a Constant to Each Number
//Write a function that takes an array of numbers and a constant k as an 
//argument and returns a new array where each number is increased by k.

const numbers = [1, 2, 3, 4];
const k = 5;
// Expected result: [6, 7, 8, 9]
function addConst (array, n){
    return array.map((number => number+n))
}
 console.log(addConst(numbers, k));

// Exercise 5: Convert Temperatures from Celsius to Fahrenheit
// Given an array of temperatures in Celsius, write a function that 
// returns a new array with the temperatures converted to Fahrenheit.

const celsius = [0, 20, 30, 100];
// Expected result: [32, 68, 86, 212]

function convertTemp(array){
    return array.map(number=> (number * 9/5)+32);
}
console.log(convertTemp(celsius));