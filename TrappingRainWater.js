// Given n non-negative integers representing an elevation map where the width of each bar is 1,
//  compute how much water it can trap after raining.
//Input: height = [0,1,0,2,1,0,1,3,2,1,2,1] array
//                               l
//Output: 6 number
//
//Make two arrays, leftMax, rightMax, 
//leftMax, left to right, check max height on left hand
// [ 0, 0, 1, 1, 2, 2, 2, etc]
//rightMax, right to left, check max height on right hand
// for every number, min(leftMax and rightMax) - currNumber
// if number is negative, ignore, else add to sum

// [0,1,0,2,1]
// result = 1
// leftMAx = [ 0, 0, 1, 1,  2]
// rightMax = [ 2, 2, 2, 2, 0]
// 
// initialize leftMax, rightMzx to size height, result
// for loop
//    currMax = 0
//.   if [i - 1] > currMax, update currMax
//     leftMax.push( currMax )

// for loop in reverse
//.   currMAx = 0
//    if (i + 1) > currMax, update curfMax
//        rightMax[i] = ( currMax )

// for loop
//.   sum =  min(l, r) - curr i 
//    final_sum = sum > 0 ? sum : 0
//    result += final_sum;
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
// initialize leftMax, rightMzx to size height, result
  const leftMax = [];
  const rightMax = [];
  let result = 0;
// for loop
//    currMax = 0
//.   if [i - 1] > currMax, update currMax
//    leftMax.push( currMax )
  let currMax = 0;
  for (let i = 0; i < height.length; i++){
    //console.log(height[i])
    if (height[i - 1] > currMax){
      currMax = height[i - 1];
    }
    leftMax.push(currMax);

  }
  //console.log(leftMax)

// for loop in reverse
//.   currMAx = 0
//    if (i + 1) > currMax, update curfMax
//    rightMax.unshift = ( currMax )
  currMax = 0;
  for (let i = height.length - 1; i >= 0; i--){
      if (height[i + 1] > currMax){
      currMax = height[i + 1];
    }
    rightMax.unshift(currMax);
  }

// for loop
//.   sum =  min(l, r) - curr i 
//    final_sum = sum > 0 ? sum : 0
//    result += final_sum;
  for ( let i = 0; i < height.length; i++){
    const sum = Math.min(leftMax[i], rightMax[i]) - height[i];
    
    // 1, 1 , 2, 1 , 1
    const final_sum = sum > 0 ? sum : 0;
    //console.log(final_sum)
    result += final_sum;
  }
  return result;
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
