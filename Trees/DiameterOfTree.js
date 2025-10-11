// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.

/**
 * @param {TreeNode} root
 * @return {number}
 */
// Max between left subtree and right subtree
var diameterOfBinaryTree = function(root) {
    if (root === null) return 0;


    diameterOfBinaryTree(root.left);
    diameterOfBinaryTree(root.right);
    
};

