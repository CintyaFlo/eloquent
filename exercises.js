const character = "#"; // The character used to build the pyramid.
const count = 8; // Number of rows in the pyramid.
const rows = []; // Array to store each row of the pyramid.

// Function to generate a row of the pyramid.
function padRow(rowNumber, rowCount) {
  // Create a row by adding spaces, then the pyramid characters, and then spaces again.
  return " ".repeat(rowCount - rowNumber) +         // Spaces before the pyramid characters.
         character.repeat(2 * rowNumber - 1) +     // Pyramid characters (increasing odd numbers).
         " ".repeat(rowCount - rowNumber);         // Spaces after the pyramid characters.
}

// Loop to generate each row of the pyramid.
for (let i = 1; i <= count; i++) {
    rows.push(padRow(i, count)); // Add the generated row to the rows array.
}
  
// Join all rows with a newline character and print the pyramid.
console.log(rows.join("\n"));
