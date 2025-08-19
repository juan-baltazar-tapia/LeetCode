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
      const symbolIndex = str.slice(i).indexOf("#") + i;
      //console.log(symbolIndex);
      const length = Number(str.slice(i, symbolIndex));
      //console.log("length", length);
      const numIndex = length > 9 ? length.toString().length + 1 : 2;

      result.push(str.slice(i + numIndex, length + i + numIndex));
      i += length + numIndex;
    }

    return result;
  }
}

const solution = new Solution();

const encoded = solution.encode(["we", "say", ":", "yes", "!@#$%^&*()"]);
console.log(encoded);
const decoded = solution.decode(encoded);
console.log(decoded);
