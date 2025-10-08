// Given the root of a binary tree, invert the tree, and return its root.
/**
 * Definition for a binary tree node.
 * }
 */
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// Will the tree every be empty? Yes return null
// Will the tree always be balanced? No
// Solve using BFS
// Using a queue, for every node push left node and right node into queue
// if nodes.left.left and nodes.rigth.right is empty, swap them
// edge case if empty
// queue = [root]
// while (queue.length > 0)
//     node = shift
//     swap children
//     if children are non empty add to queue
//     return queue
// BFS
var invertTreeBFS = function (root) {
  if (root === null) return null;

  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();

    const temp = node.left;
    node.left = node.right;
    node.right = temp;

    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
  }
  return root;
};
// Reccursion
var invertTree = function (root) {
  if (root === null) return null;

  const temp = root.left;
  root.left = root.right;
  root.right = temp;
  invertTree(root.left);
  invertTree(root.right);
  return root
};

// Helper function to create a tree from array (level-order)
function createTree(arr) {
  if (!arr || arr.length === 0 || arr[0] === null) return null;

  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (queue.length > 0 && i < arr.length) {
    const node = queue.shift();

    if (i < arr.length && arr[i] !== null) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }

  return root;
}

// Helper function to convert tree to array (level-order) for comparison
function treeToArray(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();

    if (node === null) {
      result.push(null);
    } else {
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    }
  }

  // Remove trailing nulls
  while (result.length > 0 && result[result.length - 1] === null) {
    result.pop();
  }

  return result;
}

// Test Cases
console.log("Test Case 1: Standard tree");
const tree1 = createTree([4, 2, 7, 1, 3, 6, 9]);
const inverted1 = invertTree(tree1);
console.log("Input: [4,2,7,1,3,6,9]");
console.log("Output:", treeToArray(inverted1));
console.log("Expected: [4,7,2,9,6,3,1]");
console.log();

console.log("Test Case 2: Small tree");
const tree2 = createTree([2, 1, 3]);
const inverted2 = invertTree(tree2);
console.log("Input: [2,1,3]");
console.log("Output:", treeToArray(inverted2));
console.log("Expected: [2,3,1]");
console.log();

console.log("Test Case 3: Empty tree");
const tree3 = createTree([]);
const inverted3 = invertTree(tree3);
console.log("Input: []");
console.log("Output:", treeToArray(inverted3));
console.log("Expected: []");
console.log();
