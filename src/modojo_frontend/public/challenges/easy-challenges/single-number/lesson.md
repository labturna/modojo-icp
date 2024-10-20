# Single Number

## Problem:


Given a non-empty array of integers, every element appears twice except for one. Find that single one.

You must implement the function `singleNumber` to solve this problem.

Function Signature:

```motoko
func singleNumber(nums: [Int]) : Int;
``` 

```plaintext
Input:

nums ([Int]): An array of integers.

Output:

Returns the single number that appears only once.

Constraints:

1 <= nums.length <= 3 * 10^4

-3 * 10^4 <= nums[i] <= 3 * 10^4

Each element in the array appears twice except for one element which appears only once.
```

## Examples:

- singleNumber([2,2,1]) returns 1

- singleNumber([4,1,2,1,2]) returns 4

- singleNumber([1]) returns 1

```

