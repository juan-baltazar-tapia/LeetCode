/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
import * as TreeNode from "./TreeNode.js";

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// will the input ever be empty?
// what are the time and space constraints?
// for every node, smaller nodes are on the left
// larger are on the right
// 2, 8
// if p and q are < curr node
// move to the left
// else if p and q are > curr node
// move to the right
// else return node
//if there is a split, the node is the LCA
var lowestCommonAncestor = function (root, p, q) {
  let curr = root;

  while (curr) {
    if (p.val > curr.val && q.val > curr.val) {
      curr = curr.right;
    } else if (p.val < curr.val && q.val < curr.val) {
      curr = curr.left;
    } else {
      return curr.val;
    }
  }
};
//Time: O(logn)

let tree = TreeNode.createTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
console.log(lowestCommonAncestor(tree, 2, 8));
