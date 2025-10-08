// There are n cars at given miles away from the starting mile 0, traveling to reach the mile target.

// You are given two integer arrays position and speed, both of length n, where position[i] is the starting mile of the ith car and speed[i] is the speed of the ith car in miles per hour.

// A car cannot pass another car, but it can catch up and then travel next to it at the speed of the slower car.

// A car fleet is a single car or a group of cars driving next to each other. The speed of the car fleet is the minimum speed of any car in the fleet.

// If a car catches up to a car fleet at the mile target, it will still be considered as part of the car fleet.

// Return the number of car fleets that will arrive at the destination.

/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */

//input: Array [int] position
// Array [int] speed
// target
//output: int

//make new array of pairs (position, speed)
// sort in order
// Use decreasing monotonic stack to track when earlier cars catch up to later cars.
// for each car find the amount of time it takes to get to target, if time < timeOFLater cars, they become a fleet
// use stack to keep track of fleets

//Input: target = 12, 
// position = [10,8,0,5,3], 
// speed = [2,4,1,1,3]
// sorted : (0,1),(3,3),(5,1),(8,4),(10,2)
//            12   2.25.  7.    1.    1
// stack = [12,7,1]
//  for every pair in sorted
//.      find time to get to target
//       if stack.peek() < currTime
//              pop
//       add time to target
// return stack.length          

var carFleet = function(target, position, speed) {
    const pairs = position.map((p, i) => [p, speed[i]]);
    //console.log(pairs)
    pairs.sort((a,b) => a[0] - b[0])
    console.log(pairs)
    const stack = [];
    for (const pair of pairs){
        currTime = (target - pair[0]) / pair[1];
        console.log('currTime', currTime)
        while (stack.length > 0 && stack[stack.length - 1] <= currTime){
            stack.pop();
        }
        stack.push(currTime)
    }
    console.log('stack', stack)
    return stack.length;
};
console.log(carFleet(10,[0,4,2], [2,1,3]));
