let board = "";

for (x = 1; x <= 8; x++) {
  for (y = 1; y <= 8; y++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else board += "#";
  }
  board += "\n";
}
console.log(board);
