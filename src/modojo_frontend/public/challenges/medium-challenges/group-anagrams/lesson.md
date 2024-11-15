# Group AnaGrams
## Problem

Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Function Signature:

```motoko

public func groupAnagrams(_ strs: [String]) -> [[String]];

```

```plaintext

Input:

strs (Array of String): An array of strings.

Output:

Array of Array of String: Returns an array of anagrams grouped together.

```

## Examples

### Example 1:

```motoko

groupAnagrams(["eat","tea","tan","ate","nat","bat"]) // [["bat"],["nat","tan"],["ate","eat","tea"]]

```

### Example 2:

```motoko

groupAnagrams([""]) // [[""]]

```

### Example 3:

```motoko

groupAnagrams(["a"]) // [["a"]]

```

## Constraints:

- 1 <= strs.length <= 10^4

- 0 <= strs[i].length <= 100

- strs[i] consists of lowercase English letters.

## Hints

- How will you identify the anagrams?

- How will you group the anagrams together?

- How will you return the grouped anagrams?
