/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
import * as TreeNode from "./TreeNode.js";
//return values of nodes correct?
// Time and space complexities?
// Level order traversal
//  [1,2,3,4,null,null,null,5]
// [ [1], [2,3], [4], [5]]
// return last value from every layer

var rightSideView = function (root) {
  if (root === null) return [];
  const queue = [root];
  const result = [];
  while (queue.length > 0) {
    const length = queue.length;
    const layer = [];

    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      layer.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(layer.pop());
  }
  return result;
};

const root = TreeNode.createTree([1, 2, 3, 4, null, null, null, 5]); //[1,3,4,5]
console.log(rightSideView(root));
