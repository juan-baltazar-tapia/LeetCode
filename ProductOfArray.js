// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of
//  nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // 1 [-1,1,0,-3,3] 1
  // left to right
  // 1,-1,-1,0,0
  // right to left
  // 24,12,4,1
  const leftArray = [];
  const rightArray = [];
  const result = [];
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    const previous = nums[i - 1] !== undefined ? nums[i - 1] : 1;
    leftArray.push(product * previous);
    product *= previous;
  }
  product = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    const upfront = nums[i + 1] !== undefined ? nums[i + 1] : 1;
    rightArray.unshift(product * upfront);
    product *= upfront;
  }
  for (let i = 0; i < nums.length; i++) {
    result.push(leftArray[i] * rightArray[i]);
  }

  return result;
};

//console.log(productExceptSelf([1, 2, 3, 4])); //[24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])); //[0,0,9,0,0]
