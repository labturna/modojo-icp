# Remove Duplicates from Sorted Array
## Problem

Given an integer array `nums`, remove the duplicates in-place such that each element appears only once and returns the new length.

Do not allocate extra space for another array; you must do this by modifying the input array in-place with O(1) extra memory.

Function Signature:

```motoko

public func removeDuplicates(_ nums: [Int]) -> Int;

```

```plaintext

Input:

nums ([Int]): An integer array.

Output:

Int: The new length of the array after removing the duplicates.

```

## Examples:

- removeDuplicates([1,1,2]) returns 2

- removeDuplicates([0,0,1,1,1,2,2,3,3,4]) returns 5

- removeDuplicates([1,2,3]) returns 3

## Constraints:

- 0 <= nums.length <= 3 * 10^4

- -10^4 <= nums[i] <= 10^4

- nums is sorted in non-decreasing order.

## Hints:

- You can use a two-pointer approach to solve this problem.

