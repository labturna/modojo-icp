# Add Binary
## Problem

Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Function Signature:

```motoko
func addBinary(a: Text, b: Text) : Text;
``` 

```plaintext
Input:

a (Text): A binary string.
b (Text): A binary string.
Output:

Returns the sum of the two binary strings.
```

## Examples:

- addBinary("11", "1") returns "100"

- addBinary("1010", "1011") returns "10101"

- addBinary("1", "111") returns "1000"

- addBinary("0", "0") returns "0"
```

## Constraints:

- 1 <= a.length, b.length <= 10^4

- a and b consist only of '0' or '1' characters.

- Each string does not contain leading zeros except for the zero itself.

- You must not use any built-in BigInteger library or convert the inputs to integer directly.


## Hints:

- The key to solve this problem is to use a carry variable to store the carry value.

- The sum of two binary strings can be represented as a binary string.

- The sum of two bits can be represented as a binary string.

