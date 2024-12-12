# Missing Ranges
## Problem

Given a sorted list of integers, find the missing ranges between the minimum and maximum elements. The missing ranges should be in ascending order and should be represented as a list of strings.

Function signature: `def missing_ranges(nums: List[int], lower: int, upper: int) -> List[str]:`

## Constraints

* The input list will have at most 1000 elements.

## Example

Input: `nums = [0, 1, 3, 50, 75], lower = 0, upper = 99`

Output: `["2", "4->49", "51->74", "76->99"]`

Input: `nums = [], lower = 1, upper = 1`

Output: `["1"]`

## Complexity Analysis

The time complexity for this approach is O(n) where n is the number of elements in the input list. The space complexity is O(1) as we are not using any extra space.

## Hint

You can solve this problem by iterating through the input list and checking the difference between the current element and the previous element. If the difference is greater than 1, you can add the missing range to the result list. Make sure to handle the edge cases where the missing range is at the beginning or end of the list.