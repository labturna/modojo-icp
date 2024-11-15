# Minimum Path Sum
## Problem

Given a `m x n` grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path. You can only move either down or right at any point in time.

Function Signature:

```motoko

public func minPathSum(_ grid: [[Int]]) -> Int;

```

```plaintext

Input:

grid (Array of Array of Int): A 2D grid filled with non-negative numbers.

Output:

Int: Returns the minimum sum of all numbers along the path from top left to bottom right.

```

## Examples

### Example 1:

```motoko

minPathSum([[1,3,1],[1,5,1],[4,2,1]]) // 7

```

### Example 2:

```motoko

minPathSum([[1,2,3],[4,5,6]]) // 12

```

### Example 3:

```motoko

minPathSum([[1,2,3],[4,5,6],[7,8,9]]) // 21

```

### Example 4:

```motoko

minPathSum([[1,2,3],[4,5,6],[7,8,9],[10,11,12]]) // 33

```

## Constraints:

- m == grid.length

- n == grid[i].length

- 1 <= m, n <= 200

## Hints

- You can start from the top left and keep track of the minimum sum so far.

- You can also start from the bottom right and keep track of the minimum sum so far.

- You can also use dynamic programming to solve this problem.

- You can also use a 1D array to store the minimum sum so far.

