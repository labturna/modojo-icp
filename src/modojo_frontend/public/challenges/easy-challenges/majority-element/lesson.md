# Majority Element
## Problem

Given an array of integers, write a function to find the majority element.

The majority element is the element that appears more than `n / 2` times, where `n` is the length of the array.

You may assume that the majority element always exists in the array.

Function Signature:

```motoko
func majorityElement(nums: [Int]) : Int;
``` 

```plaintext
Input:

nums ([Int]): An array of integers.
Output:

Returns the majority element.

Constraints:

1 <= nums.length <= 10^5

-10^9 <= nums[i] <= 10^9
```


## Examples:

- majorityElement([3,2,3]) returns 3

- majorityElement([2,2,1,1,1,2,2]) returns 2

- majorityElement([1]) returns 1

- majorityElement([1,2,3,4,5,6,7,8,9]) returns 1

