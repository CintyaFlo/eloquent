/*Use the reduce method in combination with the concat method to “flatten” 
an array of arrays into a single array that has all the elements of the o
riginal arrays.*/
let arrays = [[1, 2, 3], [4, 5], [6]];
/*The reduce method iterates over each sub-array and combines them into one single array.
'accumulator' starts as an empty array and 'currentArray' is each sub-array.
The concat method is used to concatenate the current array to the accumulator.*/

let combinedArrays = arrays.reduce((acumulator, currentArray) =>{
    return acumulator.concat(currentArray);
}, []);// Initial accumulator value is an empty array.

console.log(combinedArrays); 
// Outputs: [1, 2, 3, 4, 5, 6]

//NO DUPLICATE ELEMENTS
//Combine multiple arrays into one, while removing duplicate elements 

/*Similar to the previous reduce operation, but we add a step to remove duplicates.
The new Set is used to create a set of unique values from the concatenated array.
The spread operator (...) is then used to convert the set back into an array.*/

let arrays2 = [[1, 2, 3], [3, 4, 5], [6]];
let combinedNoDuplicate = arrays2.reduce((acumulator, currentArray) =>{
    return [...new Set (acumulator.concat(currentArray))];
}, []);// Initial accumulator value is an empty array.

console.log(combinedNoDuplicate);
// Outputs: [1, 2, 3, 4, 5, 6] without duplicates.

