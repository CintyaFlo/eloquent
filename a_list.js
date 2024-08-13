function arrayToList(arr) {
  let list = {}; // Initialize an empty object to hold the list
  let target = list; // Start with a reference to the head of the list

  // Loop through each element in the array
  for (let i = 0; i < arr.length; i++) {
    target.value = arr[i]; // Set the current array element as the value of the list node

    // If we're at the last element, set rest to null to mark the end of the list
    if (i === arr.length - 1) {
      target.rest = null;
    } else {
      target.rest = {}; // Otherwise, create an empty object for the next node
    }

    // Move to the next node in the list
    target = target.rest;
  }

  return list; // Return the fully constructed list
}

console.log(arrayToList([1, 2, 3])); // Test the function with an example array

//Alternative Method: Backward Construction

function arrayToList2(arr) {
  let list = null; // Start with an empty list (null)

  // Loop through the array backwards
  for (let i = arr.length - 1; i >= 0; i--) {
    // Create a new node for each array element
    list = {
      value: arr[i],
      rest: list, // The current list becomes the rest of the new node
    };
  }

  return list; // Return the fully constructed list
}

console.log(arrayToList2([1, 2, 3]));
