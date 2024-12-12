# Find All Numbers Disappeared in an Array
## Problem

Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Function signature: `def findDisappearedNumbers(nums: List[int]) -> List[int]:`

## Input

An array of integers where 1 ≤ a[i] ≤ n (n = size of array)

## Output

A list of integers

## Example

Input: [4,3,2,7,8,2,3,1]

Output: [5,6]

## Constraints

* The time complexity should be O(n)

* The space complexity should be O(1)

* The returned list does not count as extra space

## Hints

* Think about how you can use the input array itself to mark visited elements

* You can use the absolute value of the elements as an index to mark visited elements

* You can also use the sign of the elements to mark visited elements
