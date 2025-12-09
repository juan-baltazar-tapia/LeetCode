/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
//Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
//will it be empty?
//What are the time and space constraints?
//Do I return the nodes, or the values?

import * as TreeNode from "./TreeNode.js";

var levelOrder = function (root) {
  if (root === null) return [];
  const queue = [root];
  const result = [];
  // [root]
  // pop
  // [left, right]
  //
  while (queue.length > 0) {
    let length = queue.length;
    let temp = [];
    while (length > 0) {
      const node = queue.shift();
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
      temp.push(node.val);
      length--;
    }
    result.push(temp);
  }
  return result;
};

const root = TreeNode.createTree([3, 9, 20, null, null, 15, 7]);
console.log(levelOrder(root)); //[[3],[9,20],[15,7]]
