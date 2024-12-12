# Find K Closest Elements
## Problem

Given a sorted array, two integers k and x, find the k closest elements to x in the array. The result should also be sorted in ascending order. If there is a tie, the smaller elements are always preferred.

## Example

```plaintext

Input: [1, 2, 3, 4, 5], k=4, x=3

Output: [1, 2, 3, 4]

```

## Constraints

* The value of k is positive and will always be smaller than the length of the sorted array
* Length of the given array is positive and will not exceed 10^4
* Absolute value of elements in the array and x will not exceed 10^4

## Hints

* Use binary search to find the closest element to x

* Use two pointers to expand the window around the closest element

* Handle the case when the window size is less than k
