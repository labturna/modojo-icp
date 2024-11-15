# Power of Two 
## Problem

Given an integer `n`, write a function to determine if it is a power of two.

Function Signature:

```motoko

public func isPowerOfTwo(_ n: Int) -> Bool;

```

```plaintext

Input:

n (Int): An integer.

Output:

Bool: Returns true if `n` is a power of two, false otherwise.

```

## Examples

### Example 1:

```motoko

isPowerOfTwo(1) // true

```

### Example 2:

```motoko

isPowerOfTwo(16) // true

```

### Example 3:

```motoko

isPowerOfTwo(3) // false

```

## Constraints

- -2^31 <= n <= 2^31 - 1

## Hints

- If a number is a power of two, it will have only one bit set in its binary representation.

- You can use the bitwise AND operator to check if a number has only one bit set.
