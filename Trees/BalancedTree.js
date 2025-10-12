// 
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
 * @return {boolean}
 */
//dfs //
var isBalanced = function(root) {
    let result = true;
    function dfs(node){
        if (node === null){
            return 0;
        }
        const left = dfs(node.left)
        const right = dfs(node.right);
        console.log('left', left, 'right',)
        if (Math.abs(left - right) >= 2) {
            result = false;
        }
        return 1 + Math.max(left, right);
    }
    dfs(root);
    return result;
};

console.log(isBalanced(TreeNode.createTree([1,2,2,3,3,null,null,4,4])));
