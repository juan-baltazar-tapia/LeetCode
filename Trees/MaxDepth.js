// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
import * as TreeNode from "./TreeNode.js";
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
 * @return {number}
 */
//recursion
var maxDepth = function(root) {
    if (root === null) return 0;
   //console.log('val',root.val)

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right)); 
};

const tree = TreeNode.createTree([3,9,20,null,null,15,7]); //3
console.log(maxDepth(tree));
console.log(maxDepth(TreeNode.createTree([1,null,2])));
