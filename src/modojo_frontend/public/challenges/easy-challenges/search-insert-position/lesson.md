# Search Insert Position
## Problem

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Function Signature:

```motoko

public func searchInsert(_ nums: [Int], _ target: Int) -> Int;

```

```plaintext

Input:

nums ([Int]): A sorted array of distinct integers.

target (Int): An integer value.

Output:

Int: The index where the target value would be inserted.

```

## Examples

### Example 1:

```motoko

searchInsert([1,3,5,6], 5) // 2

```

### Example 2:

```motoko

searchInsert([1,3,5,6], 2) // 1

```

### Example 3:

```motoko

searchInsert([1,3,5,6], 7) // 4

```

### Example 4:

```motoko

searchInsert([1,3,5,6], 0) // 0

```

## Constraints

- 1 <= nums.length <= 10^4

- -10^4 <= nums[i] <= 10^4

- nums contains distinct values sorted in ascending order.

## Hints:

- You can use a binary search approach to solve this problem.