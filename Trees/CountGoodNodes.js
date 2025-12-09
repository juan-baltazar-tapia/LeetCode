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
// Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

// Return the number of good nodes in the binary tree.


import * as TreeNode from "./TreeNode.js";
//will never be empty
//use DFS to traverse tree, and keep track of maximum
// if the curr node is max, add to result
//preorder dfs
var goodNodes = function(root) {
    let result = 0;
    function dfs(root, max){
        if (!root) return;
        if (root.val >= max){
            result += 1;
            max = root.val
        }
        dfs(root.left, max)
        dfs(root.right, max)
    }
    dfs(root, Number.NEGATIVE_INFINITY);
    return result;
};

const root = TreeNode.createTree([3,1,4,3,null,1,5]);
console.log(goodNodes(root)) //4
const root1 = TreeNode.createTree([3,3,null,4,2]);
console.log(goodNodes(root1))