# Find Minimum in Rotated Sorted Array II
## Problem

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  `[0,1,2,4,5,6,7]` might become  `[4,5,6,7,0,1,2]`).

Find the minimum element.

The array may contain duplicates.

Function signature: `def find_min(nums: List[int]) -> int:`

## Example

```

Input:  [2,2,2,0,1]

Output: 0

```

## Constraints

* The array may contain duplicates.

* The array may contain negative numbers.

* The array may contain positive numbers.

* The array may contain zeros.

## Hints

* The minimum element is the only element whose previous element is greater than it.

* If there is no previous element, then there is no rotation.

