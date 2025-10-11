import * as Tree from "./TreeNode.js";

const tree1 = Tree.createTree([1,2,3,4,5,6,7]);
console.log(Tree.treeToArray(tree1));

// DFS Preorder Traversal (Root -> Left -> Right) Fav - Used to create copy of a tree, visit nodes first
function preorder(root, result = []) {
  if (root === null) return result;
  
  result.push(root.val);        // Visit root
  preorder(root.left, result);  // Traverse left subtree
  preorder(root.right, result); // Traverse right subtree
  
  return result;
}

// DFS Inorder Traversal (Left -> Root -> Right) Left most at all time
function inorder(root, result = []) {
  if (root === null) return result;
  
  inorder(root.left, result);   // Traverse left subtree
  result.push(root.val);        // Visit root
  inorder(root.right, result);  // Traverse right subtree
  
  return result;
}

// DFS Postorder Traversal (Left -> Right -> Root) Used to delete tree from Leaf to Root.
function postorder(root, result = []) {
  if (root === null) return result;
  
  postorder(root.left, result);  // Traverse left subtree
  postorder(root.right, result); // Traverse right subtree
  result.push(root.val);         // Visit root
  
  return result;
}

// Example: Create a sample binary tree
//       1
//      / \
//     2   3
//    / \
//   4   5

const root = Tree.createTree([1,2,3,4,5])
// Test all traversals
console.log("Preorder (Root -> Left -> Right):");
console.log(preorder(root));  // [1, 2, 4, 5, 3]

console.log("\nInorder (Left -> Root -> Right):");
console.log(inorder(root));   // [4, 2, 5, 1, 3]

console.log("\nPostorder (Left -> Right -> Root):");
console.log(postorder(root)); // [4, 5, 2, 3, 1]
