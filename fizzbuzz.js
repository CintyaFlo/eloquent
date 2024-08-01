/*for (let fizzbuzz = 0; fizzbuzz <= 30; fizzbuzz++) {
  if (fizzbuzz % 3 == 0 && fizzbuzz % 5 == 0) {
    console.log("FizzBuzz");
  } else if (fizzbuzz % 3 == 0) {
    console.log("Fizz");
  } else if (fizzbuzz % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(fizzbuzz);
  }
}
*/
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return (
        find(current + 5, `(${history} + 5)`) ??
        find(current * 3, `(${history} * 3)`)
      );
    }
  }
  return find(1, "1");
}

console.log(findSolution(24));