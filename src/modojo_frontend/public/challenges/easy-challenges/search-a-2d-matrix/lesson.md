# Search a 2D Matrix
## Problem

Write an efficient algorithm that searches for a value in an `m x n` matrix. This matrix has the following properties:

* Integers in each row are sorted from left to right.

* The first integer of each row is greater than the last integer of the previous row.   

Function signature: `def search_matrix(matrix: List[List[int]], target: int) -> bool:`

## Example

```

Input:  matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
], target = 3

Output: true

```

## Constraints

* `m == matrix.length`

* `n == matrix[i].length`

* `1 <= m, n <= 100`


## Hints

* You can solve it by treating the matrix as a sorted list of `m * n` elements.

* You can solve it by using binary search.

* You can solve it by using binary search on the rows and then on the columns.