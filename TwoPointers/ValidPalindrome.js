// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  //     Two pointer technique.
  // And a left and right pointer on opposite sides of the string.
  // Move pointers until they reach a alphanumeric character
  // Rember the edge case while moving them, make sure l < r
  // Compare them, return false if they are not equal
  let l = 0;
  let r = s.length;
  const alphanumericRegex = /[a-zA-Z0-9]/;

  while (l < r) {
    while (l < r && !alphanumericRegex.test(s.charAt(l))) {
      l += 1;
    }
    while (l < r && !alphanumericRegex.test(s.charAt(r))) {
      r -= 1;
    }
    if (s.charAt(l).toLowerCase() !== s.charAt(r).toLocaleLowerCase()) {
      return false;
    }
    l += 1;
    r -= 1;
  }

  return true;
};
