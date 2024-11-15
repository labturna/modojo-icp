# Number of 1 Bits
## Problem

Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

Function Signature:

```motoko

public func hammingWeight(_ n: Int) -> Int;

```

```plaintext

Input:

n (Int): An unsigned integer.

Output:

Int: Returns the number of '1' bits the input has.

```

## Examples

### Example 1:

```motoko

hammingWeight(11) // 3

```

### Example 2:

```motoko

hammingWeight(128) // 1

```

### Example 3:

```motoko

hammingWeight(-3) // 31

```

## Constraints:

- The input must be a binary string of length 32.

- You must not use any built-in functions to perform the conversion.


