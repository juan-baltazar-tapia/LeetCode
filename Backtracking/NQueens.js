//
/**
 * @param {number} n
 * @return {string[][]}
 */
// Go row for row, placing one queen on every row,
// Keep track of cols so they don't everlap
// Aswell as
// posDiag: row + col = constant
//  negDiag: row - col = constant
// Backtrack when its full

var solveNQueens = function (n) {
  const col = new Set();
  const posDiag = new Set();
  const negDiag = new Set();
  const result = [];
  const board = Array.from({ length: n }, () => Array(n).fill("."));

  function dfs(r) {
    if (r === n) {
      result.push(board.map((row) => row.join("")));
      return;
    }
    for (let c = 0; c < n; c++) {
      if (col.has(c) || posDiag.has(c + r) || negDiag.has(c - r)) {
        continue;
      }
      col.add(c);
      posDiag.add(c + r);
      negDiag.add(c - r);
      board[r][c] = "Q";
      dfs(r + 1);
      //backtrack
      col.delete(c);
      posDiag.delete(c + r);
      negDiag.delete(c - r);
      board[r][c] = ".";
    }
  }
  dfs(0);
  return result;
};
//Input: n = 4
//Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// Input: n = 1
// Output: [["Q"]]
console.log(solveNQueens(4));
