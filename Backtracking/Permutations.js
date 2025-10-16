// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//iterative solution
// for every number, insert in all positions into current permutation list
// [1,2,3]
//.              [1]
//           /           \
//.   [1,2]                 [2,1]
//.[3,1,2],[1,3,2],[1,2,3]
// perms = []
// for every number
//   create new_perms arr
//     for every pair in perms
//         copy = pair.copy
//         new_pair = copy.insert(i, num)
//         push to new_perms
//  perms = new_perms

var permute = function (nums) {
  let perms = [[]];
  for (const num of nums) {
    let new_perms = [];
    for (const p of perms) {
      for (i = 0; i <= p.length; i++) {
        let copy = [...p];
        //insert at i, n times, element
        copy.splice(i, 0, num);
        new_perms.push(copy);
      }
    }
    perms = new_perms;
  }
  return perms;
};
//backtracking
// choose one number, iterate through entire nums, choosing which number can be pushed to current perm
// add perm to result when length is == nums
// result = []
// uesd = array of false booleans
// dfs(curr, used)
// Base: if curr size is the same as size of nums, add to result and return
// Iterate through nums
//  If its valed (not false)
//  Push to curr
//  Turn false into true
//  dfs(curr, used)
//  turn true into false
//  pop from curr

var permute2 = function (nums) {
  const result = [];
  let used = new Array(nums.length).fill(false);
  function dfs(curr, used) {
    if (curr.length === nums.length) {
      result.push([...curr]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!used[i]) {
        curr.push(nums[i]);
        used[i] = true;
        dfs(curr, used);
        curr.pop();
        used[i] = false;
      }
    }
  }
  dfs([], used);
  return result;
};
console.log(permute2([1, 2, 3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
