# Valid Palindrome
## Problem

Given a string `s`, return `true` if the string is a palindrome, and `false` otherwise.

A string is a palindrome when it reads the same backward as forward.

Function Signature:

```motoko

public func isPalindrome(_ s: String) -> Bool;

```

```plaintext

Input:

s (String): A string.

Output:

Bool: Returns true if the string is a palindrome, false otherwise.

```

## Examples
### Example 1:

```motoko
isPalindrome("racecar") // true
```

### Example 2:

```motoko
isPalindrome("hello") // false
```

### Example 3:

```motoko
isPalindrome("A man, a plan, a canal: Panama") // true
```

## Constraints:

- 1 <= s.length <= 2 * 10^5

- s consists only of printable ASCII characters.

- You may ignore the case of the characters and any non-alphanumeric characters.

## Hints:

- You can use the built-in filter method to filter out the non-alphanumeric characters from the string.

- You can use the built-in lowercased method to convert the string to lowercase.

- You can use the built-in reversed method to reverse the string.

