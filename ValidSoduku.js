// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // Input: Array, array of rows
  // Output: boolean
  // validate each row with a set
  //.       for const row of board
  for (const row of board) {
    const set = new Set();
    for (const item of row) {
      if (item !== ".") {
        if (set.has(item)) {
          return false;
        }
        set.add(item);
      }
    }
    console.log(`Row: ${Array.from(set.values())}`);
  }
  // validate each column with a set
  //         for loop using let col = 0;
  //            for loop let row = 0
  //                 [row][col]
  //          00, 10, 20, 30,
  //          01, 11, 21, 31
  //
  //console.log(board.length);
  for (let i = 0; i < board.length; i++) {
    const set = new Set();
    for (let j = 0; j < board.length; j++) {
      const item = board[j][i];
     // console.log(item);
      if (item !== ".") {
        if (set.has(item)) {
          return false;
        }
        set.add(item);
      }
    }
    console.log(`Column: ${Array.from(set.values())}`);
    // validate each 3x3 with a set
    // 00, 01, 02.  03, 04, 05.  06, 07, 08. // i + 3
    // 10, 11, 12
    // 20, 21, 22
    //  j + 3
    // 30, 31, 32
    // 40
    // 50
    // j + 3
    //    for loop using let i = 0; i < 3;
    //            for loop let j = 0
    //                 set = {}
    //                 for loop k = 0
    //                       for loop m = 0
    //                            set.add( [3i + k][3j + m])
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const set = new Set();
      for (let k = 0; k < 3; k++) {
        for (let m = 0; m < 3; m++) {
          const item = board[3 * i + k][3 * j + m];
          if (item !== ".") {
            if (set.has(item)) {
              return false;
            }
            set.add(item);
          }
        }
      }
      console.log(`3x3: ${Array.from(set.values())}`);
    }
  }
  //00 01 02
  //10 11 12
  //                             0 0 0 0
  //                             0 0 0 1
  //                             0 0 0 2

  //                             0 0 1 0
  //                             0 0 1 1
  //                             0 0 1 2
  //                             0 0 1 3
  return true;
};

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const board2 = [
  [".", ".", "4", ".", ".", ".", "6", "3", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  ["5", ".", ".", ".", ".", ".", ".", "9", "."],
  [".", ".", ".", "5", "6", ".", ".", ".", "."],
  ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
  [".", ".", ".", "7", ".", ".", ".", ".", "."],
  [".", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
];
console.log(isValidSudoku(board2));
