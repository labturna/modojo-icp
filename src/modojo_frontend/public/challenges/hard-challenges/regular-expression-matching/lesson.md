# Regular Expression Matching
## Problem

Given an input string `s` and a pattern `p`, implement regular expression matching with support for `'.'` and `'*'` where:

- `'.'` Matches any single character.

- `'*'` Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).

Function Signature:

```motoko

public func isMatch(_ s: String, _ p: String) -> Bool;

```

```plaintext

Input:

s (String): A string.

p (String): A pattern.

Output:

Bool: Returns true if the pattern matches the string, false otherwise.

```

## Examples

### Example 1:

```motoko

isMatch("aa", "a") // false

```

### Example 2:

```motoko

isMatch("aa", "a*") // true

```

### Example 3:

```motoko

isMatch("ab", ".*") // true

```

### Example 4:

```motoko

isMatch("aab", "c*a*b") // true

```


## Constraints:

- 0 <= s.length, p.length <= 20

- s consists of only lowercase English letters.

- p consists of only lowercase English letters, `'.'`, and `'*'`.

- It is guaranteed for each appearance of the character `'*'`, there will be a previous valid character to match.

## Hints:

- You can use dynamic programming to solve this problem.

- You can use a recursive approach to solve this problem.

- You can use a backtracking approach to solve this problem.