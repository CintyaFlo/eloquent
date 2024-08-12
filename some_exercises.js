// Imagine you have a shopping list as an array of objects
let shopping = [
  {
    product: "Tshirt",
    price: 10,
  },
  {
    product: "socks",
    price: 8,
  },
  {
    product: "plates",
    price: 20,
  },
];

// Function to calculate the total price of the shopping list
function calculateTotalprice(shoppingArray) {
  let total = 0;
  // Iterate over each item in the shopping list
  for (let item of shoppingArray) {
    // Add the price of each item to the total
    total += item.price;
  }
  return total; // Return the total price
}

console.log(calculateTotalprice(shopping)); // Display the total price of the shopping list

// Function to create a list of purchased products
function listOfProducts(shoppingArray) {
  let list = [];
  // Iterate over each item in the shopping list
  for (let item of shoppingArray) {
    // Add the product name to the list
    list.push(item.product);
  }
  return list; // Return the list of products
}

console.log(listOfProducts(shopping)); // Display the list of purchased products

// Simulate an order in a restaurant
let order = {
  people: 3, // Number of people who ate at the restaurant
  items: [
    {
      foodOrdered: "Soup",
      quantity: 1,
      price: 10,
    },
    {
      foodOrdered: "Burger",
      quantity: 3,
      price: 8,
    },
    {
      foodOrdered: "Icecream",
      quantity: 1,
      price: 5,
    },
  ],
};

// Function to calculate the total cost of the restaurant order
function calculateOrder(order) {
  let total = 0;
  // Iterate over each item in the order
  for (let item of order.items) {
    // Calculate the total cost of each item by multiplying the price by the quantity
    total += item.price * item.quantity;
  }
  return total; // Return the total cost of the order
}

console.log(calculateOrder(order)); // Display the total cost of the order

// Function to calculate how much each person should pay for the order
function eachPersonpay(price, numberOfPeople) {
  // Divide the total price by the number of people
  let each = price / numberOfPeople;
  return each; // Return the amount each person should pay
}

console.log(eachPersonpay(calculateOrder(order), 3)); // Display how much each person should pay

/* Function to calculate the total price of the order and how much each person should pay.
 * I modified the order variable to be an object with two properties:
 * people, which indicates the number of people, and items, an array containing the order details.
 */
function OrderAndPrice(order) {
  let total = 0;
  // Iterate over each item in the order
  for (let item of order.items) {
    // Calculate the total cost of each item
    total += item.price * item.quantity;
  }

  // Divide the total cost by the number of people to get the cost per person
  let costPerPerson = total / order.people;

  // Return an object with the total and the cost per person
  return {
    total,
    costPerPerson,
  };
}

console.log(OrderAndPrice(order)); // Display the total and the cost per person
