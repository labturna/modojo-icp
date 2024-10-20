# Longest substring without repeating characters

## Problem

Given a string `s`, find the length of the longest substring without repeating characters.

Function Signature:

```motoko

func lengthOfLongestSubstring(s: String) : Int;

``` 

```plaintext

Input:

s (String): A string of lowercase English letters.

Output:

Returns the length of the longest substring without repeating characters.

Constraints:

0 <= s.length <= 5 * 10^4

s consists of English letters, digits, symbols, and spaces.

```

## Examples:
 ```plaintext
- lengthOfLongestSubstring("abcabcbb") returns 3

- lengthOfLongestSubstring("bbbbb") returns 1

- lengthOfLongestSubstring("pwwkew") returns 3
```
