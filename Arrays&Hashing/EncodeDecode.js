// Design an algorithm to encode a list of strings to a single string.
// The encoded string is then decoded back to the original list of strings.

// Please implement encode and decode
class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    const result = [];
    //insert words length before every word
    for (const word of strs) {
      const length = word.length.toString();
      result.push(length + "#" + word);
    }
    return result.join("");
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    //seperate every word based on number before it
    const result = [];
    let i = 0;

    while (i < str.length) {
      let j = i;
      while (str[j] !== '#'){
        j++;
      }
      let length = parseInt( str.substring(i,j));
      i = j + 1
      j = i + length
      result.push(str.substring(i,j));
      i = j;
    }

    return result;
  }
}

const solution = new Solution();

const encoded = solution.encode(["we", "say", ":", "yes", "!@#$%^&*()"]);
console.log(encoded);
const decoded = solution.decode(encoded);
console.log(decoded);
