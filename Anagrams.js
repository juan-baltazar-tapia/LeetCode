// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // sort each word, ant->nat, ant ->tan
  //dictionary {
  //key: sorted word, value, word, return all values
  const words = new Map();
  for (const word of strs) {
    const sortedWord = word.split("").sort().join("");
    if (!words.has(sortedWord)) {
      words.set(sortedWord, [word]);
    } else {
      words.get(sortedWord).push(word);
    }
  }
  return [...words.values()];
  //}
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [["bat"],["nat","tan"],["ate","eat","tea"]]
