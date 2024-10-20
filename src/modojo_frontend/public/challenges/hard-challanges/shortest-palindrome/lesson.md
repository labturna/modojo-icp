# Shortest Palindrome

## Problem

Given a string `s`, you can convert it to a palindrome by adding characters in front of it. Find and return the shortest palindrome you can find by performing this transformation.

Function Signature:

```motoko
func shortestPalindrome(s: String) : String;
``` 

```plaintext
Input:

s (String): A string of lowercase English letters.

Output:

Returns the shortest palindrome you can find by adding characters in front of the string.
```

## Examples:

- shortestPalindrome("aacecaaa") returns "aaacecaaa"

- shortestPalindrome("abcd") returns "dcbabcd"

- shortestPalindrome("a") returns "a"


