// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const phoneMap = new Map([
    ["2", "abc"],
    ["3", "def"],
    ["4", "ghi"],
    ["5", "jkl"],
    ["6", "mno"],
    ["7", "pqrs"],
    ["8", "tuv"],
    ["9", "wxyz"],
  ]);

  const result = [];
  function dfs(current, position) {
    if (current.length === digits.length) {
      result.push([...current].join(''));
      return;
    }

    const letters = phoneMap.get(digits.charAt(position));

    for (let j = 0; j < letters.length; j++) {
      current.push(letters[j]);
      dfs(current, position + 1);
      current.pop();
    }
  }
  dfs([], 0);
  return result;
};

console.log(letterCombinations("23")); //["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations("2")); //["a","b","c"]
