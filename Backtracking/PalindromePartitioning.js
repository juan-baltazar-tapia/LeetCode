// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.
/**
 * @param {string} s
 * @return {string[][]}
 */
//brute force
// find every substring and determine if it is a palindrome

var partition = function (s) {
  const result = [];
  let part = [];

  function dfs(i) {
    if (i >= s.length) {
      result.push([...part]);
      return;
    }
    for (let j = i; j < s.length; j++) {
      if (isPalindrome(s, i, j)) {

        part.push(s.slice(i, j + 1));

        dfs(j + 1);
        part.pop();
      }
    }
  }
  dfs(0);
  return result;
};
function isPalindrome(s, l, r) {
  while (l < r) {
    if (s[l] !== s[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}

console.log(partition("aab")); //[["a","a","b"],["aa","b"]]
console.log(partition("aaba")); //[["a","a","b","a"], [] ]
