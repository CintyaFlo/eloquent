/*This function computes the dominant writing direction in a string of text.
It determines whether the text is primarily written left-to-right (ltr),
right-to-left (rtl), or top-to-bottom (ttb), based on the majority of the
characters' associated writing direction.*/

function dominantDirectionHard(text) {
    return countBy(
      text
        // Step 1: Split the text into words
        .split(' ')
        // Step 2: Map each word to its script, identifying its direction
        .map((word, idx) => characterScript(word.codePointAt(idx)))
        // Step 3: Filter out any null values (words with no recognized script)
        .filter(item => item !== null),
      // Step 4: Group the scripts by their direction property
      (a) => a.direction
    )
      // Step 5: Reduce the array of directions to find the most frequent one
      .reduce((item1, item2) => item1.count > item2.count ? item1 : item2)
      // Step 6: Return the name of the dominant writing direction
      .name;
  }
  
  // Example usage of the dominantDirectionHard function
  console.log(dominantDirectionHard("Hello!"));
  // → ltr (left-to-right)
  
  console.log(dominantDirectionHard("Hey, مساء الخير"));
  // → rtl (right-to-left)

/*The original implementation (commented out) is more concise but harder to
read. The second implementation below is more readable, with each step
broken down into separate variables.
*/

// The main function to determine the dominant direction in the text
function dominantDirection(text) {
  // Step 1: Split the text into words
  const textSplittedInWords = text.split(' ');

  // Step 2: Map each word to its corresponding script, identifying its direction
  const scriptsOfWords = textSplittedInWords.map((word, idx) => characterScript(word.codePointAt(idx)));

  // Step 3: Filter out any words that do not have a recognized script (null values)
  const filteredScriptsOfWords = scriptsOfWords.filter(item => item !== null);

  // Step 4: Count how many words are associated with each writing direction (ltr, rtl, etc.)
  const countedByType = countBy(filteredScriptsOfWords, (a) => a.direction);

  // Step 5: Find the writing direction with the highest count
  const highestCountType = countedByType.reduce(
    (item1, item2) => item1.count > item2.count ? item1 : item2
  );

  // Step 6: Return the name of the dominant writing direction
  return highestCountType.name;
}

// Example usage of the dominantDirection function
console.log(dominantDirection("Hello!"));
// → ltr (left-to-right)

console.log(dominantDirection("Hey, مساء الخير"));
// → rtl (right-to-left)

