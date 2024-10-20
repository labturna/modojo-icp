# Palindrom Number

## Problem:

Given an integer x, write a function to determine if it is a palindrome.

A palindrome number is an integer that reads the same backward as forward. For example, 121 is a palindrome, and 12321 is a palindrome, but 123 is not a palindrome.

Function Signature:

```motoko
public func isPalindrome(x: Int) : Bool;
``` 

```plaintext
Input:

x (Int): The integer to check.
Output:

Returns true if x is a palindrome, otherwise false.
Constraints:

-2^31 <= x <= 2^31 - 1
```


## Examples:

- isPalindrome(121) returns true
- isPalindrome(-121) returns false
- isPalindrome(10) returns false
- isPalindrome(1221) returns true
