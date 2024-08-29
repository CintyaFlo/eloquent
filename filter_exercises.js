// FILTER DEFINITION
/*The filter function creates a new array with all elements that pass a test defined by a provided function. 
It calls the function for each element in the original array and includes only those elements for which 
the function returns true. The original array remains unchanged.*/

// Exercise 1: Filter by Age
// Given an array of people objects, each with name and age properties, write a function 
// that returns a new array containing only the people who are 18 years old or older.

const people = [
    { name: 'Alice', age: 17 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 30 },
    { name: 'David', age: 15 }
];

function filterByAge(array){
    return array.filter(object => object.age>=18);
}

console.log(filterByAge(people));
// Expected result: [{ name: 'Bob', age: 22 }, { name: 'Charlie', age: 30 }]

// Exercise 2: Filter by Status

// Given an array of task objects, each with task and completed properties, 
// create a new array containing only the tasks that are not completed.

const tasks = [
    { task: 'Do the dishes', completed: true },
    { task: 'Buy groceries', completed: false },
    { task: 'Clean the house', completed: false },
    { task: 'Prepare dinner', completed: true }
];

let completeTask = tasks.filter(item=> !item.completed);
console.log(completeTask);
// Expected result: [{ task: 'Buy groceries', completed: false }, { task: 'Clean the house', completed: false }]

// Exercise 3: Filter by Category
// Given an array of product objects, each with name and category properties, create a 
// new array containing only the products in a specific category (e.g., 'Electronics').
const products = [
    { name: 'Laptop', category: 'Electronics' },
    { name: 'Shoes', category: 'Clothing' },
    { name: 'Phone', category: 'Electronics' },
    { name: 'Jacket', category: 'Clothing' }
];
const categoryToFilter = "Electronics";

let eletronicCategory = products.filter(item => item.category === categoryToFilter);
console.log(eletronicCategory);
// Expected result: [{ name: 'Laptop', category: 'Electronics' }, { name: 'Phone', category: 'Electronics' }]

// Exercise 4: Filter by Price Range

// Given an array of item objects, each with name and price properties, create a new array containing 
// only the items whose price is within a specified range (e.g., between $20 and $50).

const items = [
    { name: 'Item A', price: 15 },
    { name: 'Item B', price: 25 },
    { name: 'Item C', price: 35 },
    { name: 'Item D', price: 55 }
];
const minPrice = 20;
const maxPrice = 50;
let priceRange = items.filter(item => item.price >= minPrice && item.price<= maxPrice);
console.log(priceRange);

// Expected result: [{ name: 'Item B', price: 25 }, { name: 'Item C', price: 35 }]

// Exercise 5: Filter by Rating

// Given an array of movie objects, each with title and rating properties, 
// create a new array containing only the movies with a rating of 4 or higher.

const movies = [
    { title: 'Movie A', rating: 3.5 },
    { title: 'Movie B', rating: 4.2 },
    { title: 'Movie C', rating: 5.0 },
    { title: 'Movie D', rating: 3.8 }
];

let bestMovies = movies.filter(item => item.rating>= 4);
console.log(bestMovies);

// Expected result: [{ title: 'Movie B', rating: 4.2 }, { title: 'Movie C', rating: 5.0 }]




