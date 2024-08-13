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

//RECURSIVE METHOD

function arrayToListrec(arr) {
  // Check if the array has no elements
  if (arr.length === 0) {
    return null; // Return null to indicate the end of the list
  } else {
    // Recursive case: Create a list node
    // Create an object to represent the current node in the list
    let list = {
      value: arr[0], // Set the value of the current node to the first element of the array
      rest: arrayToListrec(arr.slice(1)), // Recursively create the rest of the list with the remaining elements of the array
    };
    return list; // Return the current node object, which contains the value and the rest of the list
  }
}

// Test the function with an example array
console.log(arrayToListrec([1, 2, 3]));

let listObj = {
  value: 4,
  rest: {
    value: 1,
    rest: {
      value: 0,
      rest: null,
    },
  },
};

function listToArray(list) {
  let arr = [];
  while (list !== null) {
    arr.push(list.value);
    list = list.rest;
  }
  return arr;
}
console.log(listToArray(listObj));

function prepend(element, list) {
  let newList = {
    value: element,
    rest: list,
  };
  return newList;
}
console.log(prepend(3, listObj));

function nth(list, number) {
  return listToArray(list)[number];
}

console.log(nth(listObj, 2));
