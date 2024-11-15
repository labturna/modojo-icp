# Same Tree
## Problem

Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

Function Signature:

```motoko

public func isSameTree(_ p: TreeNode?, _ q: TreeNode?) -> Bool;

```

```plaintext

Input:

p (TreeNode?): The root of a binary tree.

q (TreeNode?): The root of a binary tree.

Output:

Bool: Returns true if the trees are the same, false otherwise.

```

## Examples:

- isSameTree([1,2,3], [1,2,3]) returns true

- isSameTree([1,2], [1,null,2]) returns false

- isSameTree([1,2,1], [1,1,2]) returns false

## Constraints:

- The number of nodes in each tree is in the range [0, 100].

- -100 <= Node.val <= 100

## Hints:

- You can use a recursive approach to solve this problem in a single pass.
```
