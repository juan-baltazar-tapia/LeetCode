// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.
import * as TreeNode from "./TreeNode.js";
/**
 * @param {TreeNode} root
 * @return {number}
 */
// Max between left subtree and right subtree
var diameterOfBinaryTree = function(root) {
    let result = 0;

    function dfs(node){
        if (node === null) return 0;

        const left = dfs(node.left);
        const right = dfs(node.right);
        //diamteter
        result = Math.max(result, left + right);
        //max height
        return 1 + Math.max(left, right)
    }

    dfs(root);
    return result;
    
};
console.log(diameterOfBinaryTree(TreeNode.createTree([1,2,3,4,5]))); //3
