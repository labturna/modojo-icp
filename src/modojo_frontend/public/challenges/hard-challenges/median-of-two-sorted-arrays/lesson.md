# Median of Two Sorted Arrays
## Problem
There are two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively. Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
You may assume `nums1` and `nums2` cannot be both empty.

Function Signature:

```motoko

public func findMedianSortedArrays(_ nums1: [Int], _ nums2: [Int]) -> Double;

```

```plaintext

Input:

nums1 (Array of Int): A sorted array of integers.

nums2 (Array of Int): A sorted array of integers.

Output:

Double: Returns the median of the two sorted arrays.

```

## Examples

### Example 1:

```motoko

findMedianSortedArrays([1,3], [2]) // 2.0

```

### Example 2:

```motoko

findMedianSortedArrays([1,2], [3,4]) // 2.5

```

### Example 3:

```motoko


findMedianSortedArrays([0,0], [0,0]) // 0.0

```

### Example 4:

```motoko

findMedianSortedArrays([], [1]) // 1.0

```

## Constraints:

- nums1.length == m

- nums2.length == n

- 0 <= m <= 1000

- 0 <= n <= 1000

- 1 <= m + n <= 2000

- -10^6 <= nums1[i], nums2[i] <= 10^6

- nums1 and nums2 are sorted in non-decreasing order.

## Hints

- The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values.

- The median is the same as the 50th percentile.

- The median is the value that separates the higher half from the lower half of a data sample.



```motoko
