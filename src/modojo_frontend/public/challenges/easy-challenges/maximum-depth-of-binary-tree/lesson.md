# Maximum Depth of Binary Tree
## Problem

Given the `root` of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Function Signature:

```motoko

public func maxDepth(_ root: TreeNode?) -> Int;

```

```plaintext

Input:

root (TreeNode?): The root of a binary tree.

Output:

Int: The maximum depth of the binary tree.

```

## Examples:

- maxDepth([3,9,20,null,null,15,7]) returns 3

- maxDepth([1,null,2]) returns 2

- maxDepth([]) returns 0

## Constraints:

- The number of nodes in the tree is in the range [0, 10^4].

- -100 <= Node.val <= 100

## Hints:

- You can use a recursive approach to solve this problem.

- You can use a recursive approach to solve this problem in a single pass.