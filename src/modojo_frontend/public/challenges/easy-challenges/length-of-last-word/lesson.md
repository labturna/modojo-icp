# Length of Last Word
## Problem

Given a string `s` consisting of some words separated by some number of spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

Function Signature:

```motoko

public func lengthOfLastWord(_ s: String) -> Int;

```

```plaintext

Input:

s (String): A string consisting of some words separated by some number of spaces.

Output:

Int: The length of the last word in the string.

```

## Examples:

- lengthOfLastWord("Hello World") returns 5

- lengthOfLastWord("   fly me   to   the moon  ") returns 4

- lengthOfLastWord("luffy is still joyboy") returns 6

## Constraints:

- 1 <= s.length <= 10^4

- s consists of only English letters and spaces ' '.

- There will be at least one word in s.

## Hints:

- You can use the built-in split method to split the string into an array of words.

- You can use the built-in filter method to filter out the empty strings from the array of words.