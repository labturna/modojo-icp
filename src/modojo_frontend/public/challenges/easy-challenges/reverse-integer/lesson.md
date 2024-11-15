# Reverse Integer
## Problem

Given a signed 32-bit integer `x`, return `x` with its digits reversed. If reversing `x` causes the value to go outside the signed 32-bit integer range `[-2^31, 2^31 - 1]`, then return `0`.

Function Signature:

```motoko

public func reverse(_ x: Int) -> Int;

```

```plaintext

Input:

x (Int): A signed 32-bit integer.

Output:

Int: Returns the reversed integer.

```

## Examples

### Example 1:

```motoko

reverse(123) // 321

```

### Example 2:

```motoko

reverse(-123) // -321

```

### Example 3:

```motoko

reverse(120) // 21

```

### Example 4:

```motoko

reverse(0) // 0

```

## Constraints

- -2^31 <= x <= 2^31 - 1

- You must not use any built-in functions to perform the conversion.

## Hints

- You can use the modulo operator to get the last digit of a number.

- You can use the division operator to remove the last digit of a number.