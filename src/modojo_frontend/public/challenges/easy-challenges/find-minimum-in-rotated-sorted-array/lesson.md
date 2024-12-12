# Find Minimum in Rotated Sorted Array
## Problem

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., `[0,1,2,4,5,6,7]` might become `[4,5,6,7,0,1,2]`).

Find the minimum element.

You may assume no duplicate exists in the array.

Function signature: `def find_min(nums: List[int]) -> int:`

## Example

```

Input:  [3,4,5,1,2]

Output: 1

```

## Constraints

* The array may contain duplicates.

* The array may contain negative numbers.

* The array may be empty.


## Hints

* The minimum element is the only element whose previous element is greater than it.

* If there is no previous element, then there is no rotation.
