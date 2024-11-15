# Zigzag Conversion
## Problem

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:

```plaintext

P   A   H   N

A P L S I I G

Y   I   R

```

And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows.

Function Signature:

```motoko

public func convert(_ s: String, _ numRows: Int) -> String;

```

```plaintext


Input:

s (String): A string.

numRows (Int): An integer representing the number of rows.

Output:

String: Returns the zigzag conversion of the string.

```

## Examples

### Example 1:

```motoko

convert("PAYPALISHIRING", 3) // "PAHNAPLSIIGYIR"

```

### Example 2:

```motoko

convert("PAYPALISHIRING", 4) // "PINALSIGYAHRPI"

```

### Example 3:

```motoko

convert("A", 1) // "A"

```

## Constraints:

- 1 <= s.length <= 1000

- s consists of English letters, digits, symbols, and spaces.

- 1 <= numRows <= 1000

- numRows is a positive integer.

- numRows is less than the length of the string.

- numRows is greater than 1.


## Hints

- Compare this snippet from src/modojo_frontend/public/challenges/easy-challenges/valid-anagram/lesson.md:

An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


