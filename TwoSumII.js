// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such
// that they add up to a specific target number. Let these two numbers be numbers[index1] and
//  numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.
//input: array [ ], target
//output: [index1, index2] 1-indexed

//guaranteed solution, use constant extra space
// [ 1, 4 ,5 ,6, 7]. target = 9
//      l  r
//
// left and right pointer at both ends
// check their sum:
// while (l < r)
// if sum < target
//    increment l
// else if sum > target
//     increment r
// else: return [l + 1, r + 1]

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let l = 0;
  let r = numbers.length - 1;
  while (l < r) {
    const sum = numbers[l] + numbers[r];
    if (sum < target) {
      l += 1;
    } else if (sum > target) {
      r -= 1;
    } else {
      return [l + 1, r + 1];
    }
  }
  return -1;
};

console.log(twoSum([ 1, 4 ,5 ,6, 7], 9));
