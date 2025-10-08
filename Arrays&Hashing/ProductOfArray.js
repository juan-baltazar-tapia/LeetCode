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
  const n = nums.length;
  const leftArray = new Array(n);
  const rightArray = new Array(n);
  const result = [];

  leftArray[0] = 1;
  rightArray[n-1] = 1;
 
  for (let i = 1; i < nums.length; i++) {
    leftArray[i] = leftArray[i-1] * nums[i-1];
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    rightArray[i] = rightArray[i+1] * nums[i+1];
  }
  for (let i = 0; i < nums.length; i++) {
    result.push(leftArray[i] * rightArray[i]);
  }
//   console.log(leftArray)
//   console.log(rightArray)

  return result;
};

//console.log(productExceptSelf([1, 2, 3, 4])); //[24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])); //[0,0,9,0,0]
