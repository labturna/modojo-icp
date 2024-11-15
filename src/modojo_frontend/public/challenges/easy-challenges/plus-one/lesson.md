# Plus One
## Problem

Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Function Signature:

```motoko

public func plusOne(_ digits: [Int]) -> [Int];

```

```plaintext

Input:

digits ([Int]): An array of decimal digits representing a non-negative integer.

Output:

[Int]: An array of decimal digits representing the integer incremented by one.

```

## Examples:

- plusOne([1,2,3]) returns [1,2,4]

- plusOne([4,3,2,1]) returns [4,3,2,2]

- plusOne([0]) returns [1]

## Constraints:

- 1 <= digits.length <= 100

- 0 <= digits[i] <= 9

- The integer represented by the input array does not contain any leading zero, except the number 0 itself.

## Hints:

- You can use a greedy approach to solve this problem.

- You can use a greedy approach to solve this problem in a single pass.


