// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

// Evaluate the expression. Return an integer that represents the value of the expression.

// Note that:

// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// There will not be any division by zero.
// The input represents a valid arithmetic expression in a reverse polish notation.
// The answer and all the intermediate calculations can be represented in a 32-bit integer.
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  console.log(tokens);

  for (const token of tokens) {
    switch (token) {
      case "+":
        const b1 = stack.pop();
        const a1 = stack.pop();
        stack.push(a1 + b1);
        break;

      case "-":
        const b2 = stack.pop();
        const a2 = stack.pop();
        stack.push(a2 - b2);
        break;

      case "*":
        const b3 = stack.pop();
        const a3 = stack.pop();
        stack.push(a3 * b3);
        break;

      case "/":
        const b4 = stack.pop();
        const a4 = stack.pop();
        stack.push(Math.trunc(a4 / b4));
        break;

      default:
        // If it's not an operator, it's a number
        stack.push(parseInt(token));
        break;
    }
  }

  return stack[0];
};

// Example usage:
console.log(evalRPN(["2", "1", "+", "3", "*"])); // Output: 9 (equivalent to (2 + 1) * 3)
console.log(evalRPN(["4", "13", "5", "/", "+"])); // Output: 6 (equivalent to 4 + (13 / 5))
console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
); // Output: 22
