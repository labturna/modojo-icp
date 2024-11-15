# First Unique Character in a String
## Problem

Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

**Note:** You may assume the string contains only lowercase English letters.

```plaintext

Function Signature:

public func firstUniqChar(_ s: String) -> Int;

```

```plaintext

Input:

s (String): A string containing only lowercase English letters.

Output:

Int: The index of the first non-repeating character in the string. If it doesn't exist, return -1.

```


**Example 1:**

```plaintext

Input: s = "motoko"

Output: 0

```

**Example 2:**

```plaintext

Input: s = "modojo"

Output: 1

```
Constraints:

- 1 <= s.length <= 10^5

- You can assume that there is at least one non-repeating character in the string.

## Hints:

- You can use a hash map to store the frequency of each character in the string in a single pass.