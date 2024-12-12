# Find The Duplicate Number
## Problem

Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

Function Signature: `def findDuplicate(nums: List[int]) -> int:`

## Input

* `nums` an array of integers where each integer is between 1 and n (inclusive) and n is the length of the array.

## Output

* An integer which is the duplicate number.

## Example

`findDuplicate([1,3,4,2,2])` returns `2`

`findDuplicate([3,1,3,4,2])` returns `3`

## Note

1. You must not modify the array (assume the array is read only).

2. You must use only constant, O(1) extra space.

3. Your runtime complexity should be less than O(n^2).

## Hints

1. Binary Search

2. Floyd's Tortoise and Hare (Cycle Detection)

