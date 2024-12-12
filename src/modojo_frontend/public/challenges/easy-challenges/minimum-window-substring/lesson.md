# Minimum Window Substring
## Problem

Given two strings `s` and `t`, return the minimum window in `s` which will contain all the characters in `t`. If there is no such window in `s` that covers all characters in `t`, return the empty string `""`.

Note that If there is such a window, it is guaranteed that there will always be only one unique minimum window in `s`.

## Example

```plaintext

Input: s = "ADOBECODEBANC", t = "ABC"

Output: "BANC"

```

## Note

- If there is no such window in `s` that covers all characters in `t`, return the empty string `""`.

- If there is such a window, it is guaranteed that there will always be only one unique minimum window in `s`.

## Constraints

- `1 <= s.length, t.length <= 10^5`

- `s` and `t` consist of English letters.   

## Hints

- Use two pointers to create a window of characters in `s`, which would have all the characters from `t`.

- Since you have to find the minimum window in `s` which has all characters from `t`, you need to expand and contract the window using the two pointers and keep checking the window for all the characters. This approach is also called the Sliding Window Approach.