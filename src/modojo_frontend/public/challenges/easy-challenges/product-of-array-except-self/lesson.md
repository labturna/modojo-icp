# Product of Array Except Self
## Problem

Given an array `nums` of `n` integers where `n > 1`,  return an array `output` such that `output[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

Function signature: `def product_except_self(nums: List[int]) -> List[int]:`


## Example

```

Input:  [1,2,3,4]

Output: [24,12,8,6]

```

## Constraints

* It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

* You must solve it without division and in O(n) time complexity.

* You must solve it without using the `output` array.

* You can solve it with O(1) extra space complexity.

## Hints

* The product of all the elements of the array is the product of all the elements to the left of `i` multiplied by the product of all the elements to the right of `i`.

* You can solve it by calculating the product of all the elements to the left of `i` and then multiplying it by the product of all the elements to the right of `i`.