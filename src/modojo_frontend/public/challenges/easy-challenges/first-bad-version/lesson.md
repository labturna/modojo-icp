# First Bad Version
## Problem

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

Function Signature: `def firstBadVersion(n: int) -> int:`

## Input

* `n` an integer where `1 <= n <= 2^31 - 1`.

## Output

* An integer which is the first bad version.

## Example

`firstBadVersion(5)` returns `4`

`firstBadVersion(1)` returns `1`

## Note

1. You must use only constant, O(1) extra space.

2. The implementation of the API is defined in the parent class VersionControl.

3. You must call isBadVersion as few times as possible.

## Hints

1. Binary Search

2. The API isBadVersion is already defined for you.