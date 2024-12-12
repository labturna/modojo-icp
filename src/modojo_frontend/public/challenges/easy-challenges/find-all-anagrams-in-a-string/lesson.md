# Find All Anagrams in a String
## Problem

Given a string `s` and a non-empty string `p`, find all the start indices of `p`'s anagrams in `s`.

Strings consists of lowercase English letters only and the length of both strings `s` and `p` will not be larger than 20,100.

The order of output does not matter.

## Example

```plaintext

Input: s: "cbaebabacd" p: "abc"

Output: [0, 6]

```

## Note

- The input string only contains lowercase English letters.


## Constraints

- The input string only contains lowercase English letters.

- The length of both strings `s` and `p` will not be larger than 20,100.

## Hints

- Use a sliding window to keep track of the frequency of characters in the current window. You can keep track of the frequency of characters in `p` in a separate array and compare the two arrays to check if the current window is an anagram of `p`.