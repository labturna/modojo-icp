# Maximum Subarray
## Problem

Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

Function Signature:

```motoko

public func maxSubArray(_ nums: [Int]) -> Int;

```

```plaintext

Input:

nums ([Int]): An integer array.

Output:

Int: The sum of the contiguous subarray with the largest sum.

```

## Examples:

- maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) returns 6

- maxSubArray([1]) returns 1

- maxSubArray([5,4,-1,7,8]) returns 23

## Constraints:

- 1 <= nums.length <= 10^5

- -10^4 <= nums[i] <= 10^4

## Hints:

- You can use a greedy approach to solve this problem.
