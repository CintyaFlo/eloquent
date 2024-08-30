// Exercise 1: Filter and Map User Emails

/*Given an array of user objects, each with name and email properties, perform the following 
operations:
1-Filter out users who do not have a domain of 'example.com' in their email.
2-Map the filtered result to a new array that includes only the email addresses.*/
const users = [
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@sample.com' },
    { name: 'Charlie', email: 'charlie@example.com' },
    { name: 'David', email: 'david@example.com' }
];

// Using inline functions for filter and map
let relevantList = users
    // Filter users whose email contains "@example.com"
    .filter(item => item.email.includes("@example.com"))
    // Map the filtered users to an array of their email addresses
    .map(item => item.email);

console.log(relevantList); // Expected result: ['alice@example.com', 'charlie@example.com', 'david@example.com']

// Named function to filter users with "@example.com" in their email
const withExampleDomains = (item) => item.email.includes("@example.com");

// Named function to map users to their email addresses
const toEmailStrings = (item) => item.email;

// Apply the filter and map functions
let sameRelevantList = users
    // Filter users using the named function
    .filter(withExampleDomains)
    // Map the filtered users to their email addresses using the named function
    .map(toEmailStrings);

console.log(sameRelevantList);
// Expected result: ['alice@example.com', 'charlie@example.com', 'david@example.com']

//Exercise 2: Filter and Map Product Prices

/*Given an array of product objects, each with name, price, and category properties,
 perform the following operations:

1-Filter out products that are not in the 'Electronics' category.
2-Map the filtered result to a new array where each price is converted 
o a string with a $ sign and rounded to two decimal places.*/

const products = [
    { name: 'Laptop', price: 899.99, category: 'Electronics' },
    { name: 'Shoes', price: 50.00, category: 'Clothing' },
    { name: 'Smartphone', price: 699.95, category: 'Electronics' },
    { name: 'Jacket', price: 120.00, category: 'Clothing' }
];

const onlyElectronics= (item) => item.category === "Electronics";
const toPrice = (item) => "$"+ item.price; //STRING+NUMBER = STRING

let eletronicPrices= products
    .filter(onlyElectronics)
    .map(toPrice)
// Expected result: ['$899.99', '$699.95']
console.log(eletronicPrices);

//Exercise 3: Filter and Map Students' Scores
/*
Given an array of student objects, each with name and score properties, 
perform the following operations:

1-Filter out students who scored less than 70.
2-Map the filtered result to a new array where each score is increased by 5 points.*/
const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 65 },
    { name: 'Charlie', score: 90 },
    { name: 'David', score: 55 }
];
//inline solution
let bestStudents = students
    .filter(item => item.score >=70)
    .map (item =>item.score + 5);
console.log(bestStudents);//  result: [90, 95]

// Apply the filter and map functions

// Function to filter students who scored 70 or above
const isTopScorer = (student) => student.score >= 70;

// Function to add a bonus of 5 points to the student's score
const applyBonus = (student) => student.score + 5;

// Filter the top-scoring students and then apply the bonus to their scores
let topScorersWithBonus = students
    .filter(isTopScorer)
    .map(applyBonus);

/* MORE READABLE
"To get the top-scoring students and add the bonus score, I filter for the 
top scorers using isTopScorer and then map over these students with applyBonus 
to apply the bonus."*/

console.log(topScorersWithBonus);//  result: [90, 95]

//Exercise 4: Filter and Map Employee Names
/*
Given an array of employee objects, each with name, position, and salary properties, 
perform the following operations:

1-Filter out employees who have a salary of less than $50,000.
2-Map the filtered result to a new array that includes only the names of these employees.
Expected result: ['Jane', 'Mike']*/

const employees = [
    { name: 'John', position: 'Developer', salary: 48000 },
    { name: 'Jane', position: 'Designer', salary: 55000 },
    { name: 'Mike', position: 'Manager', salary: 60000 },
    { name: 'Anna', position: 'Intern', salary: 45000 }
];

let isTopSalary = (item) => item.salary >=50000;
let nameOfEmployess = (item)=> item.name;

let namesOfTopSalaries = employees
    .filter(isTopSalary)
    .map(nameOfEmployess);

console.log(namesOfTopSalaries);//result: ['Jane', 'Mike']

//Exercise 5: Filter and Map Order Quantities
/*
Given an array of order objects, each with item, quantity, and price properties, 
perform the following operations:

1-Filter out orders where the quantity is less than 10.
2-Map the filtered result to a new array where each quantity is multiplied by 2.*/
// Expected result: [30, 24]

const orders = [
    { item: 'Laptop', quantity: 5, price: 899.99 },
    { item: 'Mouse', quantity: 15, price: 25.50 },
    { item: 'Keyboard', quantity: 8, price: 45.00 },
    { item: 'Monitor', quantity: 12, price: 199.99 }
];

let isMoreThan10 = (item) => item.quantity>=10;
let multplyby2 = (item) => item.quantity *2;

let doubleOrder= orders
    .filter(isMoreThan10)
    .map(multplyby2);

console.log(doubleOrder);// result: [30, 24]





