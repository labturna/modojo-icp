# Reverse Bits
## Problem

Reverse bits of a given 32 bits unsigned integer.

Function Signature:

```motoko

public func reverseBits(_ n: Int) -> Int;

```

```plaintext

Input:

n (Int): An unsigned integer.

Output:

Int: Returns the reversed bits of the input.

```

## Examples

### Example 1:

```motoko

reverseBits(43261596) // 964176192

```

### Example 2:

```motoko

reverseBits(4294967293) // 3221225471

```

### Example 3:

```motoko

reverseBits(0) // 0

```

## Constraints

- The input must be a binary string of length 32.

- You must not use any built-in functions to perform the conversion.

## Hints

- You can use the bitwise AND operator to check if a number has only one bit set.

- You can use the bitwise OR operator to set a bit in a number.

- You can use the bitwise left shift operator to move bits to the left.

