// Given n non-negative integers representing an elevation map where the width of each bar is 1,
//  compute how much water it can trap after raining.
//Input: height = [0,1,0,2,1,0,1,3,2,1,2,1] array
//                               
//Output: 6 number
//leftMax = height[0]
//rightMax = height[height.length - 1]
// [0,1,0,2,1,0,1,3,2,1,2,1] 
//    l                   r
// while (l < r)
//    update pointer with smallest max
//    if leftMax < rightMax:
//      l += 1
//      update leftMax
//      res += leftMax - heigtht if positive
//    else;
//       r -=1
//      update rightMax
//      res += rightMax - heigtht if positive


/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let leftMax = height[0];
  let rightMax = height[height.length - 1];
  let l = 0;
  let r = height.length - 1;
  let res = 0;

  while (l < r){
    if (leftMax < rightMax) {
      l += 1;
      leftMax = Math.max(leftMax, height[l]);
      res += leftMax - height[l] 
    } else {
      r -= 1;
      rightMax = Math.max(rightMax, height[r]);
      res += rightMax - height[r]
    }
  }
  return res;

}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
