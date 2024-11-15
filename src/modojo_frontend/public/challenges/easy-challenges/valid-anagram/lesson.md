# Valid Anagram
## Problem

Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Function Signature:

```motoko

public func isAnagram(_ s: String, _ t: String) -> Bool;

```

```plaintext

Input:

s (String): A string.

t (String): A string.

Output:

Bool: Returns true if `t` is an anagram of `s`, false otherwise.

```

## Examples

### Example 1:

```motoko

isAnagram("anagram", "nagaram") // true

```

### Example 2:

```motoko

isAnagram("rat", "car") // false

```

### Example 3:

```motoko

isAnagram("listen", "silent") // true

```

## Constraints:

- 1 <= s.length, t.length <= 5 * 10^4

- s and t consist only of lowercase English letters.

- You may assume the input strings contain only lowercase English letters.

## Hints:

- You can use a hash map to store the frequency of each character in the string in a single pass.
