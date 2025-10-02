// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

// Return the minimum integer k such that she can eat all the bananas within h hours.

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
//input: array of int, h
//output: int (min)
//givewn h, find the min, such that
// will input ever be empy. No
// 3,6,7,11,  h= 8
// 3,6,9, 6

// [30,11,23,4,20], h = 6
// 4,11,20,23,47. Lenght 5, 7
// Sort array
// Find max, array k = [1 ... max]
// Use binary search to test k values
// To test,
// while l <= r
// Iterate through array, sum += Math.ceil(int / k)
// if sum > h, move right 
// else move left and update currAnser
// 3,6,7,11


// Sort the array, Go to index (h - length) form the back
var minEatingSpeed = function (piles, h) {
    piles.sort((a, b) => a - b);
    let minK = piles[piles.length - 1];
    console.log(piles)
    
    const k = [];
    for (let i = 1; i <= minK; i++) {
        k.push(i)
    }
    console.log("k",k)

    let l = 0;
    let r = k.length - 1;
    while (l <= r) {
      
        let midIndex= Math.floor((l + r) / 2);
        let midValue = k[midIndex];
        const result = testMinEatingSpeed(piles, midValue);
        if (result > h) {
            l = midIndex + 1;
        } else {
            minK = Math.min(minK, midValue)
            r = midIndex - 1;
        }
    }
    return minK;

};

function testMinEatingSpeed(piles, k) {
    let sum = 0;
    for (const num of piles){ 
        sum += Math.ceil(num / k)
    }
console.log("piles", piles, "k", k, "sum", sum)
    return sum;  
}

//console.log(minEatingSpeed([3, 6, 7, 11], 8)) //4
console.log(minEatingSpeed([30,11,23,4,20], 6)) //23