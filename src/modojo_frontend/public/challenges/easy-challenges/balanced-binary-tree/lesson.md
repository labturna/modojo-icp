# Balanced Binary Tree
## Problem

Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

Function Signature:

```motoko

public func isBalanced(root: TreeNode?) : Bool;

``` 

```plaintext

Input:

root (TreeNode?): The root of a binary tree.

Output:

Returns true if the binary tree is height-balanced, false otherwise.

```

## Examples:

- isBalanced([3,9,20,null,null,15,7]) returns true

- isBalanced([1,2,2,3,3,null,null,4,4]) returns false

- isBalanced([]) returns true

## Constraints:

- The number of nodes in the tree is in the range [0, 5000].

- -10^4 <= Node.val <= 10^4

[]: # (END)

## Hints:

- The key to solve this problem is to use a helper function to calculate the height of the tree.

- The height of a tree is the maximum depth of any node in the tree.

- The height of a tree can be calculated recursively.

- A tree is balanced if the height of the left and right subtrees of every node differ by no more than 1.

- You can use a helper function to calculate the height of the tree and check if the tree is balanced.

- You can use a helper function to calculate the height of the tree and check if the tree is balanced at the same time.
