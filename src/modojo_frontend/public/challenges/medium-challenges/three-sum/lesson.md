# 3Sum

## Problem

Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

Notice that the solution set must not contain duplicate triplets.

Function Signature:

```motoko
func threeSum(nums: [Int]) : [[Int]];
```

```plaintext
Input:

nums ([Int]): An array of integers.

Output:

Returns a list of all unique triplets that sum up to zero.

Constraints:

0 <= nums.length <= 3000

-10^5 <= nums[i] <= 10^5
```

## Examples:
```plaintext	
- threeSum([-1,0,1,2,-1,-4]) returns [[-1,-1,2],[-1,0,1]]

- threeSum([]) returns []

- threeSum([0]) returns []
```