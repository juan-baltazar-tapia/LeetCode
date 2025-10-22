// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
//is bored guarneted board?
// case insentive?
// Brute Force
// For every tile on board, perform dfs
// dfs(r, c, i) row, col, index of string
//.   base case: if index == len(word)
//           return true
//   base case: out of bounds, (r,c) in set, or curr position is not the letter
//          return false
//.  add r,c to set
//.  res = dfs(all directions)
//.   backtrack, remove rc from set
// iterate through entire board, if res is every true, return true
// end: return false
var exist = function (board, word) {
  const ROW = board.length;
  const COL = board[0].length;
  let path = new Set();

  function dfs(r, c, i) {
    //base
    //console.log("dfs", "row", r, "col", c, "i", i);
    if (word.length === i) return true;
    if (
      r >= ROW ||
      c >= COL ||
      r < 0 ||
      c < 0 ||
      path.has(`${r}${c}`) ||
      board[r][c] !== word.charAt(i)
    )
      return false;

    path.add(`${r}${c}`);
    res =
      dfs(r + 1, c, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r, c - 1, i + 1);
    path.delete(`${r}${c}`);
    return res;
  }

  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      // console.log("row", i, "col", j);
      if (dfs(i, j, 0) === true) return true;
    }
  }
  return false;
};

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
);
console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "SEE"
  )
);

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCB"
  )
);
