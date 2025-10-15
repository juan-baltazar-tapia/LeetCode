// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
/**
 * @param {number} n
 * @return {string[]}
 */
// 3
// start with empty array
// choose to add open par,
// two options, add open, or close par, close if open
// (((
//
var generateParenthesis = function (n) {
  const result = [];

  function backtrack(current, open, close) {
    if (open === n && close === n) {
      result.push(current);
      return;
    }
    // Add opening parenthesis if we haven't reached the limit
    if (open < n) {
      backtrack(current + "(", open + 1, close);
    }

    // Add closing parenthesis if it's valid (can't have more closing than opening)
    if (close < open) {
      backtrack(current + ")", open, close + 1);
    }
  }
  backtrack('', 0, 0);
  return result;
};
console.log(generateParenthesis(3)); //["((()))","(()())","(())()","()(())","()()()"]
