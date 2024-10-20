# Three Sum Closest

## Problem 

Given an integer array `nums` and an integer `target`, return the sum of the three integers in `nums` that are closest to `target`.

You may assume that each input would have exactly one solution.

Function Signature:

```motoko
func threeSumClosest(nums: [Int], target: Int) : Int;
```

```plaintext
Input:

nums ([Int]): An array of integers.

target (Int): The target sum.

Output:

Returns the sum of the three integers that are closest to the target.

Constraints:

3 <= nums.length <= 10^3

-10^3 <= nums[i] <= 10^3

-10^3 <= target <= 10^3
```

## Examples:
```plaintext
- threeSumClosest([-1,2,1,-4], 1) returns 2

- threeSumClosest([0,0,0], 1) returns 0

- threeSumClosest([1,1,1,0], 100) returns 2
```

