# Letter Combinations
## Problem
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

![telephone](https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Telephone-keypad2.svg/200px-Telephone-keypad2.svg.png)

Function Signature:

```motoko
func letterCombinations(digits: String) : [String];
``` 

```plaintext
Input:

digits (String): A string containing digits from 2-9 inclusive.

Output:

Returns all possible letter combinations that the number could represent.
```

## Examples:
```plaintext
- letterCombinations("23") returns ["ad","ae","af","bd","be","bf","cd","ce","cf"]
- letterCombinations("") returns []
- letterCombinations("2") returns ["a","b","c"]
```	
