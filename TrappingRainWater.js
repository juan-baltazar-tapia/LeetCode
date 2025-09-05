// Given n non-negative integers representing an elevation map where the width of each bar is 1,
//  compute how much water it can trap after raining.
//Input: height = [0,1,0,2,1,0,1,3,2,1,2,1] array
//                               l
//Output: 6 number
// Will the input array be empty?
// n might be 1
// numbers will never be negative

//[0,1,0,2,1,0,1,3,2,1,2,1]
// first find non zero value
//
//
// set l to first non zero value
// set r = l + 1, add r[i] to set
//[0,1,0,2,1,0,1,3,2,1,2,1]
//.               l        r
// (1: index)
//while r val < l val and r in bounds
//   if r is in set: find water between two sides (helper function)
//.  else add r to set
// move left to right pointer
// distance(r - l - 1) * min(l and r)

// helper function (set(l),r index)
//    l = array[l]
//.   r = array[l] + 1
// while (r inbounds of r)
//   sum += height difference unless negative
// return sum

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (height.length === 1) return 0;

  const previousNumbers = new Map();
  let l = 0;
  let trappedWater = 0;

  while (height[l] === 0) {
    l += 1;
  }
  let r = l + 1;
  previousNumbers.set(height[r], r);

  while (height[r] < height[l] && r < height.length) {
    //   if r is in mpa: find water between two sides (helper function)
    //.  else add r to map
    // move left to right pointer
    // distance(r - l - 1) * min(l and r)
    if (previousNumbers.has(height[r])) {
        //console.log(previousNumbers.get(height[r]))
      trappedWater += findTrappedWater(l, previousNumbers.get(height[r]));
    } else {
        previousNumbers.set(height[r], r)
    }
    //potential edge case
    trappedWater += (r - l - 1) * Math.min(height[l], height[r]);
    l = r;
    r = l + 1;
    previousNumbers.set(height[r], r);
  }

  return trappedWater;
};

function findTrappedWater(leftBound, rightBound) {
  // helper function (set(l),r index)
  //    l = array[l]
  //.   r = array[l] + 1
  // while (r inbounds of r)
  //   sum += height difference unless negative
  // return sum
  currRight = leftBound + 1
  currLeft = leftBound;
  let sum = 0;

  while (currRight < rightBound) {
    currSum = height[currLeft] - height[currRight];
    console.log(currSum)
    if (currSum > 0) sum += currSum;
  }

  return sum;
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
