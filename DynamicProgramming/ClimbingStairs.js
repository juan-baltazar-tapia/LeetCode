// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n) {
    const memo = {};
    
    function dfs(remaining) {
        // Base cases
        if (remaining === 0) return 1; // Found one valid way
        if (remaining < 0) return 0;   // Overshot, invalid path
        
        // Check memo
        if (memo[remaining] !== undefined) {
            return memo[remaining];
        }
        
        // Decision tree: try both choices
        // Choose 1 step
        const ways1 = dfs(remaining - 1);
        
        // Choose 2 steps
        const ways2 = dfs(remaining - 2);
        
        // Total ways = sum of both choices
        memo[remaining] = ways1 + ways2;
        return memo[remaining];
    }
    
    return dfs(n);
};

// Test cases
console.log(climbStairs(2)); // 2 (1+1, 2)
console.log(climbStairs(3)); // 3 (1+1+1, 1+2, 2+1)
console.log(climbStairs(5)); // 8