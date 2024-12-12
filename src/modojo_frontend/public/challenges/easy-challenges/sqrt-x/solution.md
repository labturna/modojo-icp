# Sqrt(x)
## Problem

Given a non-negative integer `x`, compute and return the square root of `x`.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

Function Signature:

```motoko

public func mySqrt(_ x: Int) -> Int;

```

```plaintext

Input:

x (Int): A non-negative integer.

Output:

Int: The square root of x.

```

## Examples:

- mySqrt(4) returns 2

- mySqrt(8) returns 2

## Constraints:

- 0 <= x <= 2^31 - 1

- The square root of x is guaranteed to be an integer.

## Hints:

- You can use a binary search approach to solve this problem.

- You can also use the Newton's method to solve this problem.
```
