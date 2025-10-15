// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const result = [];
  const candidatesSorted = candidates.sort((a, b) => a - b);

   function dfs(curr, i, sum) {
    if (sum === target){
        result.push([...curr]);
        return;
    }
    if (sum > target || i >= candidatesSorted.length) return;

    curr.push(candidatesSorted[i])
    dfs(curr, i + 1, sum + candidatesSorted[i]); //i + 1 since you cant use the same number at same index
    curr.pop() // backtrack

    //skip curr candidate and duplicates
    while ((i + 1) < candidatesSorted.length && candidatesSorted[i] === candidatesSorted[i + 1]){
        i += 1;
    }
    dfs(curr, i + 1, sum)
   
  }
  dfs([], 0, 0);
  return result;
};
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)); //[
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]
