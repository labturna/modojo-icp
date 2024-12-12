# Search in Rotated Sorted Array II
## Problem

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., `[0,0,1,2,2,5,6]` might become `[2,5,6,0,0,1,2]`).

You are given a target value to search. If found in the array return `True`, otherwise return `False`.

Function signature: `def search(nums: List[int], target: int) -> bool:`

## Example

```

Input:  [2,5,6,0,0,1,2], 0

Output: True

```

## Constraints

* The array may contain duplicates.

* You must solve it in O(log n) time complexity.

## Hints

* The problem is similar to the previous one, but with duplicates.

* You can solve it by comparing the middle element with the left and right elements.

* If the middle element is the same as the left element, you can't determine which side is sorted.
