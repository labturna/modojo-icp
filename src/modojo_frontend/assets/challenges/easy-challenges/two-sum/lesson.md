# Two Sum

## Problem Statement

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to the `target`. You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

```plaintext
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
```

## Instructions

Create a function twoSum(nums: [Int], target: Int): ?[Int] in Motoko.

The function should return the indices of the two numbers whose sum is equal to the target.

### Hints

Using a HashMap:

Consider using a dictionary to store the difference between the target and the current number as the key, and the index of the current number as the value.
As you iterate through the array, check if the current number is in the dictionary. If it is, you have found the two numbers.
Edge Cases:

Think about cases where the array has only two elements.
Consider cases with negative numbers or zeros.