function range(start, end) {
  let array = [];
  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  console.log(array);
  return array;
}

function rangeStep(start, end, step) {
  let array = [];
  if (step > 0) {
    for (let i = start; i <= end; i = i + step) {
      array.push(i);
    }
  } else {
    for (let i = start; i >= end; i = i + step) {
      array.push(i);
    }
  }
  console.log(array);
  return array;
}
rangeStep(10, 2, -2);

function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  console.log("total:", total);
}

sum(range(3, 8));

function sumFor(numbers) {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  console.log("total:", total);
}

sumFor(range(2, 2));
