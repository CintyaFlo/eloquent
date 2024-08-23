// The function 'loop' mimics a for-loop behavior using a higher-order function.
function loop(value, testFunction, updateFunction, bodyFunction) {
    // We start the for loop with an empty initialization and no condition, 
    // since the condition is handled by the testFunction.
    
    for (; testFunction(value); value = updateFunction(value)) {
      bodyFunction(value); // Execute the bodyFunction with the current value.
    }
  }
  
  // Test the 'loop' function: start at 3, continue while n > 0, decrement n, and log n.
  loop(3, n => n > 0, n => n - 1, console.log);
  // → 3
  // → 2
  // → 1
  
  //WHILE LOOP
  
  // The function 'loop2' does the same as 'loop', but uses a while-loop.
  function loop2(value, testFunction, updateFunction, bodyFunction) {
    // The loop runs while testFunction(value) returns true.
    while (testFunction(value)) {  // Continue looping while the test function is true
      bodyFunction(value);         // Execute the body function with the current value
      value = updateFunction(value);  // Update the value for the next iteration
    }
  }
  
  // Test the 'loop2' function with the same parameters: start at 3, decrement until 0, and log n.
  loop2(3, n => n > 0, n => n - 1, console.log);
    // → 3
    // → 2
    // → 1