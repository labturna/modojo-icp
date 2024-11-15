# Binary Tree Level Order Traversal
## Problem

Given the `root` of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Function Signature:

```motoko
public func levelOrder(_ root: TreeNode?) : [[Int]];
```

```plaintext
Input:

root (TreeNode): The root of a binary tree.

Output:

Returns the level order traversal of its nodes' values.
```

## Examples:

- levelOrder([3,9,20,null,null,15,7]) returns [[3],[9,20],[15,7]]

- levelOrder([1]) returns [[1]]

- levelOrder([]) returns []

## Constraints:

- The number of nodes in the tree is in the range [0, 2000].

- -1000 <= Node.val <= 1000

## Hints:

- You can use a queue to store the nodes of the tree.

- You can use a queue to store the nodes of the tree in a level order traversal.

- You can use a queue to store the nodes of the tree in a level order traversal and a list to store the values of the nodes.
