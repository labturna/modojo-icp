# Longest palindromic substring
## Problem

Given a string `s`, return the longest palindromic substring in `s`.

A palindrome is a word, phrase, number, or other sequence of characters that reads the same backward as forward. For example, "racecar" and "level" are palindromes.

Function Signature:

```motoko

public func longestPalindrome(_ s: String) -> String;

```

```plaintext

Input:

s (String): A string.

Output:

String: Returns the longest palindromic substring in `s`.

```

## Examples

### Example 1:

```motoko

longestPalindrome("babad") // "bab"

```

### Example 2:

```motoko

longestPalindrome("cbbd") // "bb"

```

### Example 3:

```motoko

longestPalindrome("a") // "a"

```

### Example 4:

```motoko

longestPalindrome("ac") // "a"

```

## Constraints:

- 1 <= s.length <= 1000

- s consist of only digits and English letters (lower-case and/or upper-case),

- There is only one longest palindromic substring.

## Hints

- How can we reuse a previously computed palindrome to compute a larger palindrome?

- How can we reuse a previously computed palindrome to compute a larger palindrome?