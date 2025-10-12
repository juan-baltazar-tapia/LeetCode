// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
 // console.log("nodees p q", p.val, q.val);
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;

  //console.log('nodees p q', p.val, q.val)
  return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right));
};
let p = TreeNode.createTree([1, 2, 3]);
let q = TreeNode.createTree([1, 2, 3]);
let m = TreeNode.createTree();
let n = TreeNode.createTree();
console.log(isSameTree(p, q)); //true
