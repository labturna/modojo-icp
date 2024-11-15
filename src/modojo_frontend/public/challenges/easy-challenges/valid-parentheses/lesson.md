# Valid Parentheses
## Problem

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

- Open brackets must be closed by the same type of brackets.

- Open brackets must be closed in the correct order.

Function Signature:

```motoko

public func isValid(_ s: String) -> Bool;

```

```plaintext

Input:

s (String): A string containing just the characters '('`, `')'`, `'{'`, `'}'`, `'['` and `']'`.

Output:

Bool: Returns true if the input string is valid, false otherwise.

```

## Examples:

- isValid("()") returns true

- isValid("()[]{}") returns true

- isValid("(]") returns false

- isValid("([)]") returns false

- isValid("{[]}") returns true

## Constraints:

- 1 <= s.length <= 10^4

- s consists of only the characters '('`, `')'`, `'{'`, `'}'`, `'['` and `']'`.

- You may assume that the input string is always valid.

## Hints:

- You can use a stack to keep track of the opening brackets.

