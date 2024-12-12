# Keyboard Row
## Problem

Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.

![American Keyboard](https://assets.leetcode.com/uploads/2018/10/12/keyboard.png)

## Example

```plaintext

Input: ["Hello", "Alaska", "Dad", "Peace"]

Output: ["Alaska", "Dad"]

```

## Note

You may use one character in the keyboard more than once.

You may assume the input string will only contain letters of alphabet.

## Constraints

- You may use one character in the keyboard more than once.

- You may assume the input string will only contain letters of alphabet.

- The input string will only contain letters of alphabet.


## Hints

- Use a set to store the characters of each row, and check if all characters of a word are in the same set.

- Alternatively, use regular expressions to check if a word is in the same row.