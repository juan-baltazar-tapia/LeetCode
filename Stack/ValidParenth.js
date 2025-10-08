// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // make stack
  // have map with closing parenthesis as keys
  // if closing parenthesis found, pop from stack (make sure its non empty) and make sure it is the corresponding opening bracket
  const stack = [];
  const array = s.split("");
  const map = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);
  for (const char of array) {
    if (map.has(char)) {
      if (stack.pop() !== map.get(char)) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
};

console.log(isValid("(]"))
