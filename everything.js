// Version with loop
function everyLoop(array, test) {
  // Iterate over each element in the array
  for (let element of array) {
    // If any element does not satisfy the condition, return false immediately
    if (!test(element)) {
      return false;
    }
  }
  // If all elements satisfy the condition, return true
  return true;
}

// Version with some
function everySome(array, test) {
  // Return the opposite of the result from some
  // some returns true if any element does not satisfy the condition
  // So we negate that result to simulate the behavior of every
  return !array.some(element => !test(element));
}

// Testing the functions
console.log(everyLoop([1, 3, 5], n => n < 10));   // → true
console.log(everyLoop([2, 4, 16], n => n < 10));  // → false
console.log(everyLoop([], n => n < 10));           // → true

console.log(everySome([1, 3, 5], n => n < 10));   // → true
console.log(everySome([2, 4, 16], n => n < 10));  // → false
console.log(everySome([], n => n < 10));           // → true
