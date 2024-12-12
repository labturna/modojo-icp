# Subarray Sum Equals K
## Problem

Given an array of integers `nums` and an integer `k`, return the total number of continuous subarrays whose sum equals to `k`.

Function signature: `def subarray_sum(nums: List[int], k: int) -> int:`

## Example

```

Input:  nums = [1,1,1], k = 2

Output: 2

```

## Constraints

* The length of the array is in range `[1, 2 * 10^4]`.

* The range of the integer values is in `[-1000, 1000]`.

* The range of `k` is in `[-10^7, 10^7]`.

## Hints

* You can solve it by calculating the sum of all the subarrays and then checking if the sum is equal to `k`.

* You can solve it by calculating the sum of all the subarrays and then checking if the sum is equal to `k` in O(n^2) time complexity.
