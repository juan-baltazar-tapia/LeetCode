//

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//will it be empty?
// input: sorted array
// output: num index
// l           r
//have left and right pointer, find the mid index
// if curr > target, r = mid
// if curr < target, l = mid + 1
// else return index

var search = function (nums, target) {
  l = 0;
  r = nums.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    console.log('mid', mid)
    if (nums[mid] > target) {
      r = mid - 1;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};

console.log(search([5], 5)); // 5
console.log(search([-1, 0, 3, 5, 9, 12], 2)); // -1
