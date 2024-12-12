# Move Zeroes
## Problem

Given an array `nums`, write a function to move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

Function Signature: `def moveZeroes(nums: List[int]) -> None:`

## Input

* `nums` an array of integers.

## Output

* None

## Example

`moveZeroes([0,1,0,3,12])` returns `[1,3,12,0,0]`

## Note

1. You must do this in-place without making a copy of the array.

2. Minimize the total number of operations.

## Hints

1. Two Pointers

2. Keep track of the position of the last non-zero element

3. Do not worry about maintaining the order of other elements.