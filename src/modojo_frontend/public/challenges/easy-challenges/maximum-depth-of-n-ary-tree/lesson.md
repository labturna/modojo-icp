# Maximum Depth of N-ary Tree
## Problem

Given a n-ary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

An n-ary tree is a rooted tree in which each node has no more than n children. There is no restriction on how many children each node has.

Function Signature:

```motoko

public func maxDepth(_ root: Node?) -> Int;

```

```plaintext

Input:

root (Node?): The root of an n-ary tree.

Output:

Int: The maximum depth of the n-ary tree.

```

## Examples:

- maxDepth([1,null,3,2,4,null,5,6]) returns 3

- maxDepth([1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]) returns 5

- maxDepth([]) returns 0

## Constraints:

- The number of nodes in the tree is in the range [0, 10^4].

- 0 <= Node.val <= 10^4

## Hints:

- You can use a recursive approach to solve this problem.