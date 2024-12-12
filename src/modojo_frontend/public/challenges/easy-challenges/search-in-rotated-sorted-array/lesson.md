# Search in Rotated Sorted Array
## Problem

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  `[0,1,2,4,5,6,7]` might become  `[4,5,6,7,0,1,2]`).

You are given a target value to search. If found in the array return its index, otherwise return `-1`.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of `O(log n)`.

Function signature: `def search(nums: List[int], target: int) -> int:`

## Example

```

Input:  [4,5,6,7,0,1,2], 0

Output: 4

```

## Constraints

* The array may contain duplicates.

* The array may contain negative numbers.

* The array may contain positive numbers.

* The array may contain zeros.

## Hints

* The array is sorted in ascending order.

* The array is rotated at some pivot.

