
// Topics
// premium lock icon
// Companies
// Hint
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // input: array of columns(number)
    // output: number (area)
    // Questions: will the input be empty?
    // whats the min number? will there be a zero?
    // will the input be of length 1?\

    
    // maxArea: 1;
    // maxNumberIndex: num:8 index:0
    // currArea: 1
    // [1,8,6,2,5,4,8,3,7]
    //    l r 
    // 
    // for l = 0
    //   for r = l + 1;
    //        find area: min(height(l), height(r)) * r - l
    //         update area: 
    let left = 0;
    let right = height.length - 1;
    let distance = height.length - 1;
    let maxArea = 0;
    while (left < right){
        let currArea = Math.min(height[left], height[right]) * distance;
        maxArea = Math.max(maxArea, currArea);
        if (height[left] < height[right]){
            left += 1;
        } else {
            right -= 1;
        }
        distance -= 1;
    }
    return maxArea;
    
};

console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
