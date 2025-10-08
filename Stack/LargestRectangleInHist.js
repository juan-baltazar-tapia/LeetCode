// Given an array of integers heights representing the histogram's bar
//  height where the width of each bar is 1, return the area of the largest rectangle in the histogram
// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Will input ever be empty? atleast one
// What is the range of the rect? Will there ever be an infinite rect?

/**
 * @param {number[]} heights
 * @return {number}
 */

// for every int, add to a stack (h, i)
// if curr int is less than the top, calculate area (min of both * distance), then pop, store start index
//    [2,1,5,6,2,3]
// maxA = 6
// (1,1),(5,2)

var largestRectangleArea = function (heights) {
  const stack = [];
  let maxA = 0;

  for (let i = 0; i < heights.length; i++) {
    // console.log('peek', stack[stack.length - 1][0])
    //console.log('stack', stack)
    let start = i;
    while (stack.length > 0 && heights[i] < stack[stack.length - 1][0]) {
      //calculate area
      const [height, index] = stack.pop();
      maxA = Math.max(maxA, height * (i - index));
      start = index;
    }
    stack.push([heights[i], start]);
   // console.log("stack", stack);
  }

  for (const [height, index] of stack) {
    maxA = Math.max(maxA, height * (heights.length - index));
  }

  return maxA;
};

//console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])); //10
console.log(largestRectangleArea([2, 4])); //2
