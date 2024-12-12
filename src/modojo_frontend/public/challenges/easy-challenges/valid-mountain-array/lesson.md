# Valid Mountain Array
## Problem

Given an array of integers `arr`, return `true` if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

- `arr.length >= 3`

- There exists some `i` with `0 < i < arr.length - 1` such that:
  - `arr[0] < arr[1] < ... < arr[i - 1] < arr[i]`
  - `arr[i] > arr[i + 1] > ... > arr[arr.length - 1]`

## Example

```plaintext

Input: arr = [2,1]

Output: false

```

## Note

- `arr.length == 0` or `arr.length == 1` or `arr.length == 2` is not a mountain array.

## Constraints

- `1 <= arr.length <= 10^4`

- `0 <= arr[i] <= 10^4`

## Hints

- It's very easy to keep track of a monotonically increasing or decreasing ordering of elements. You just need to be able to determine the start of the valley in the mountain and from that point onwards, it should be a valley i.e. no mini-hills after that. Use this information in regards to the values in the array and you will be able to come up with a linear time algorithm.