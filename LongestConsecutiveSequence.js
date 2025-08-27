// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.


/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    // sort array, check for longest consecutive sequence
    //.   have counter of largest
    // [1,2,3,4,100,200]
    // iterate through array (for loop i = 1), if curr = prev + 1, add one
    // if its not, reset back to 1
    if (nums.length === 1) return 1;
    
    let result = 0;
    let current = 1;
    let previous;

    nums.sort((a,b) => a - b);
    console.log(nums)
    // current = 3
    // previous = 2
    // [ 0, 1, 1, 2 ]
    //
    for (let i = 1; i < nums.length + 1; i++){
        if (nums[i] === nums[i - 1] + 1){
            current += 1
            previous = nums[i];
            //console.log(current)
        } else if (nums[i] === previous) {
            continue;
        }
        else {
            result = current > result ? current: result;
            current = 1;
        }
    }
    return result;
};

console.log(longestConsecutive([1,0,1,2]));