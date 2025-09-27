// Given an array of integers temperatures represents the daily temperatures,
//  return an array answer such that answer[i] is the number of days you have to
// wait after the ith day to get a warmer temperature. If there is no future day for which this is
// possible, keep answer[i] == 0 instead.

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
//input array of ints
//output array of int
// [73,74,75,71,69,72,76,73])
// [ 1 1 0 0 0 0 0 0 0 0 0]
// [2, 75]
// [3, 75]
// [4, 71]
// [5, 69]
// [6, 72]
// 0 1 2 3 4 5 6 7
// 1 1 3 2 1 0 0 0
//stack = {temp, index}
//make empty array with all zeroes
// 76  5
// 73. 7
// while current temp is bigger than stack.peek()
//         pop element from stack
//         element index = (curr index - that index)
// else
//       add to stack

var dailyTemperatures = function (temperatures) {
  const stack = [];
  const result = Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    const currTemp = temperatures[i];

    while (currTemp > stack[stack.length - 1]?.[0]) {
      const [temp, index] = stack.pop();
      result[index] = i - index;
    }

    stack.push([currTemp, i]);
  }
  return result;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); //[1,1,4,2,1,1,0,0]
// const stack = [[1,2], [2,3]]
// console.log(stack[1][0])
// stack.pop();
// console.log(stack[0][0])
// stack.pop();
// console.log(stack[0]?.[0])
