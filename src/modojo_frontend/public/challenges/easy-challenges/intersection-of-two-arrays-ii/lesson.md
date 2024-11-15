# Intersection of Two Arrays II
## Problem

Given two integer arrays `nums1` and `nums2`, return an array of their intersection. Each element in the result should appear as many times as it shows in both arrays and you may return the result in any order.

**Note:** Each element in the result must be unique.

Function Signature:

```motoko

public func intersect(_ nums1: [Int], _ nums2: [Int]) : [Int];
```

```plaintext

Input:

nums1 (Array of Int): An array of integers.

nums2 (Array of Int): An array of integers.

Output:

Array of Int: An array of integers representing the intersection of `nums1` and `nums2`.

```

## Examples:

- intersect([1,2,2,1], [2,2]) returns [2,2]

- intersect([4,9,5], [9,4,9,8,4]) returns [4,9]

## Constraints:

- 1 <= nums1.length, nums2.length <= 1000

- 0 <= nums1[i], nums2[i] <= 1000

- You may assume that each input would have exactly one solution.

## Hints:

- You can use a hash map to store the frequency of each element in the arrays in a single pass.