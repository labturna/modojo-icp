# Find Peak Element
## Problem

A peak element is an element that is strictly greater than its neighbors.

Given an integer array `nums`, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that `nums[-1] = nums[n] = -∞`.

You must write an algorithm that runs in `O(log n)` time complexity.

Function signature: `def find_peak_element(nums: List[int]) -> int:`

## Example

```

Input:  [1,2,3,1]

Output: 2

```

## Constraints

* `1 <= nums.length <= 1000`

* `-2^31 <= nums[i] <= 2^31 - 1`

* `nums[i] != nums[i + 1]` for all valid `i`.

* It's guaranteed that `nums[i] != -∞` for all valid `i`.

* You must write an algorithm that runs in `O(log n)` time complexity.

## Hints

* You can solve it by using binary search.

* You can solve it by comparing the middle element with its neighbors.

