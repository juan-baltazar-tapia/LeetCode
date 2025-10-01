// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
//will it ever be empty? No
// search for row with integer could be in it
// find middle index, search first element,
// if element < mid, move left
// if element > mid, move right
// perform binary search on row, return true or false

//input: 2d array
//output: boolean
var searchMatrix = function (matrix, target) {
  let l = 0;
  let r = matrix.length - 1;
  let mid;

  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    console.log("row", matrix[mid], target);
    if (matrix[mid][0] > target) {
      r = mid - 1;
    } else if (matrix[mid][0] < target) {
      l = mid + 1;
    } else {
      break;
    }
  }
  // always end up one row above, so must move down
  if (matrix[mid][0] > target && mid > 0) {
    mid -= 1;
  }

  //perform binary search
  console.log("mid", matrix[mid]);
  return binarySearch(matrix[mid], target);
};

function binarySearch(array, target) {
  let l = 0;
  let r = array.length - 1;
  let mid;
  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    console.log(array[mid], target);
    if (array[mid] > target) {
      r = mid - 1;
    } else if (array[mid] < target) {
      l = mid + 1;
    } else {
      return true;
    }
  }
  return false;
}

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 50],
    ],
    11
  )
); //true
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 50],
    ],
    13
  )
); //false
