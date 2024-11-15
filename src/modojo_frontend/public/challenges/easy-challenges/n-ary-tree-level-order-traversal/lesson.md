# N-ary Tree Level Order Traversal
## Problem

Given an n-ary tree, return the level order traversal of its nodes' values.

N-ary Tree is a tree in which each node has no more than n children. There is no restriction on how many children each node has.

Function Signature:

```motoko

public func levelOrder(_ root: Node?) -> [[Int]];
```

```plaintext

Input:

root (Node?): The root of an n-ary tree.

Output:

[[Int]]: A list of lists of integers representing the level order traversal of the n-ary tree.

```

## Examples:

- levelOrder([1,null,3,2,4,null,5,6]) returns [[1],[3,2,4],[5,6]]

- levelOrder([1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]) returns [[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]

- levelOrder([]) returns []

## Constraints:

- The number of nodes in the tree is in the range [0, 10^4].

- 0 <= Node.val <= 10^4

## Hints:

- You can use a recursive approach to solve this problem.

- You can use a recursive approach to solve this problem in a single pass.


