// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);

  function dfs(curr, i) {
    // means you've gone through all elements in the array
    if (i === nums.length) {
        result.push([...curr]);
        return;
    };
    //choice to include curr element
    curr.push(nums[i]);
    //continue on to next element
    dfs(curr, i + 1);
    curr.pop(); //backtrack

    //skip duplicate values
    while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
      i++;
    }
    //choose not to include element
    dfs(curr, i + 1);
  }
  dfs([], 0);
  return result;
};
console.log(subsetsWithDup([1, 2, 2])); // [[],[1],[1,2],[1,2,2],[2],[2,2]]
