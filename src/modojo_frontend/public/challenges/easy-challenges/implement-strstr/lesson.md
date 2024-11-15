# Implement strStr()
## Problem

Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

**Note:** You may assume that both haystack and needle consist of only lowercase English letters.

Function Signature:

```motoko

public func strStr(_ haystack: String, _ needle: String) : Int;

```

```plaintext

Input:

haystack (String): A string containing only lowercase English letters.

needle (String): A string containing only lowercase English letters.

Output:

Int: The index of the first occurrence of needle in haystack. If needle is not part of haystack, return -1.

```

## Examples:

- strStr("hello", "ll") returns 2

- strStr("aaaaa", "bba") returns -1

- strStr("", "") returns 0

## Constraints:

- 0 <= haystack.length, needle.length <= 5 * 10^4

- You can assume that both haystack and needle consist of only lowercase English letters.

## Hints:

- You can use the built-in `find` method to solve this problem.

- You can use the built-in `find` method to solve this problem in a single pass.