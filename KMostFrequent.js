// Given an integer array nums and an integer k, return the k most frequent elements. You may return the
//  answer in any order.
// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  //make a map and add 1 for every number
  // sort by values, get top k values
  const result = [];

  const map = new Map();
  for (const number of nums) {
    if (!map.has(number)) {
      map.set(number, 1);
    } else {
      map.set(number, map.get(number) + 1);
    }
  }

  const sortedNums = [...map.entries()].sort((a, b) => b[1] - a[1]);

  for (let index = 0; index < k; index++) {
    result.push(sortedNums[index][0]);
  }
  
  return result;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], (k = 2))); // [1,2]
