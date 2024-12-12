# Find All Duplicates in an Array
## Problem

Given an array `nums` of `n` integers where `n > 1`,  return an array `output` containing all the duplicates in the array.

Function signature: `def find_duplicates(nums: List[int]) -> List[int]:`

## Example

```

Input:  [4,3,2,7,8,2,3,1]

Output: [2,3]

```

## Constraints

* The duplicates must be returned in any order.

* It's guaranteed that the array contains duplicates.

* You must solve it without using extra space.

* You must solve it in O(n) time complexity.

## Hints

* You can solve it by using the array itself as a hash table.

* You can solve it by marking the elements as negative.
