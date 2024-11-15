# Unique Paths II
## Problem

A robot is located at the top-left corner of a `m x n` grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

Now consider if some obstacles are added to the grids. How many unique paths would there be?

An obstacle and empty space are marked as `1` and `0` respectively in the grid.

Function Signature:

```motoko

public func uniquePathsWithObstacles(_ obstacleGrid: [[Int]]) -> Int;

```

```plaintext

Input:

obstacleGrid (Array of Array of Int): A grid of integers where 1 represents an obstacle and 0 represents an empty space.

Output:

Int: Returns the number of unique paths from the top-left corner to the bottom-right corner of the grid.

```

## Examples

### Example 1:

```motoko

uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]) // 2

```

### Example 2:

```motoko

uniquePathsWithObstacles([[0,1],[0,0]]) // 1

```

### Example 3:

```motoko

uniquePathsWithObstacles([[0,0],[1,1],[0,0]]) // 0

```

## Constraints:

- 1 <= m, n <= 100

- obstacleGrid[i][j] is 0 or 1.

- obstacleGrid[0][0] == 0

## Hints

- The number of unique paths to reach the top-left corner of the grid is 1.
