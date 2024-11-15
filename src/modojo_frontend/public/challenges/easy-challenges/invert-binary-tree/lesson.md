# Invert Binary Tree
## Problem

Given the root of a binary tree, invert the tree, and return its root.

Function Signature:

```motoko

public func invertTree(_ root: TreeNode?) : TreeNode?;
```

```plaintext

Input:

root (TreeNode?): The root of a binary tree.

Output:

TreeNode?: The root of the inverted binary tree.

```

## Examples:

- invertTree([4,2,7,1,3,6,9]) returns [4,7,2,9,6,3,1]

- invertTree([2,1,3]) returns [2,3,1]

- invertTree([]) returns []

## Constraints:

- The number of nodes in the tree is in the range [0, 100].

- -100 <= Node.val <= 100

- The depth of the tree will not exceed 100.

- The tree is guaranteed to be a binary tree.

## Hints:

- You can use a recursive approach to solve this problem.

- You can use a recursive approach to solve this problem in a single pass.
