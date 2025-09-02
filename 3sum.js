// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k,
// and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// In other words, find three different numbers such that, added equal to zero, not all equal indices
// input: [ ] array of number
// output: [ [actual number1, actual number2, 3], [4,5,6] ] array of array

// questions:
// does the order matter?, will there be atleast one solution? if there isn't return null?
// are there memory constraint?
// if there isn't use set with two poitners
// if there is use n^2 solution, three pointers
/**
 * @param { number[]} nums
 * @return { number[][]}
 */
// result = [ [0,1,-1],  ]
// [-4,-1,-1,-1,1,2,3,4,5,6]
//.     i  l              r
// iterate through array, on every iteration check its a new number
// perform twoSum, for A
// if l + r is big, decrement r
// if l + r is smaller, increment l
// else add A + l + r to result
// update l pointer until its a new number

// for i
//   if i = i - 1
//       continue
//   l = 0, r = length - 1
//   while (l < r)
//      currSum = l + r
//      if sum > i and l < r
//         r -= 1
//.     if sum < i and l < r
//         l += 1
//      else add to result update left
//           l += 1
//.      while num[l]  == num[l - 1]
//           l + 1
//

var threeSum = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      currSum = nums[l] + nums[r] + nums[i];

      if (currSum > 0 && l < r) {
        r -= 1;
      } else if (currSum < 0 && l < r) {
        l += 1;
      } else {
        result.push([nums[l], nums[r], nums[i]]);
        l += 1;
        while (nums[l] === nums[l - 1]) {
          l += 1;
        }
      }
    }
  }

  return result;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
//  [[-1,-1,2],[-1,0,1]]
