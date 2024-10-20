# Basic Calculator

## Problem

Implement a basic calculator to evaluate a simple expression string.

The expression string may contain open `(` and closing parentheses `)`, the plus `+` or minus `-` sign, non-negative integers, and empty spaces.

Function Signature:

```motoko
func calculate(s: String) : Int;
``` 

```plaintext
Input:

s (String): A string representing a simple expression.
Output:

Returns the result of the expression.

Constraints:

1 <= s.length <= 3 * 10^5

s consists of digits, '+', '-', '(', ')', and ' '.

The expression will not contain any leading spaces.
```

## Examples:

- calculate("1 + 1") returns 2

- calculate(" 2-1 + 2 ") returns 3

- calculate("(1+(4+5+2)-3)+(6+8)") returns 23

- calculate("1") returns 1