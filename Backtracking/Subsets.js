// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// input empty? return empty set
// [1,2,3]
// start with empty set
// for every number, choose to include it or exclude it
// if you choose a number, move on to the next, then add to result
// if you exlude a number, move to next numer, dont add
// if one group is made backtrack by popping one number
var subsets = function (nums) {
  //index in nums, current subset
  function backtrack(startIndex, current) {
    //add current subset to result, ensures empty subset
 
    result.push([...current]); //push is an reference to the array, since the same current
    // continues to be modified, all references equal the same array, by the end of 
    //the execution the array will be empty.
    //fix push a copy of the array to result;
    //iterate through every number adding to current subset, and calling backtrack recursively
    for (let i = startIndex; i < nums.length; i++) {
      // skip duplicates
      if (i > 0 && nums[startIndex] === nums[startIndex - 1]) continue;
      //add currunet number to current subset, back track after that
      current.push(nums[i]);
      backtrack(i + 1, current);
      //back track step
      current.pop();
    }
  }
  const result = [];
  nums.sort((a, b) => a - b);
  backtrack(0, []);
  return result;
};
console.log(subsets([1, 2, 3])); //[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
