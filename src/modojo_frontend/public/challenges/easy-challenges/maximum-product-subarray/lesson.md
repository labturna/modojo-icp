# Maximum Product Subarray
## Problem

Given an integer array `nums`, find the contiguous subarray within an array (containing at least one number) which has the largest product.

Function signature: `def max_product(nums: List[int]) -> int:`

## Example

```

Input:  [2,3,-2,4]

Output: 6

Explanation: [2,3] has the largest product 6.

```

## Constraints

* The length of the array will not exceed 10^3.

* The product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

* You must solve it in O(n) time complexity.

* You must solve it without using the `output` array.

## Hints

* The product of all the elements of the array is the product of all the elements to the left of `i` multiplied by the product of all the elements to the right of `i`.

* You can solve it by calculating the product of all the elements to the left of `i` and then multiplying it by the product of all the elements to the right of `i`.