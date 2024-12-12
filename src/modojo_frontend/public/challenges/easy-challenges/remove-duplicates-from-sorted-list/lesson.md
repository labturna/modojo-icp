# Remove Duplicates from Sorted List
## Problem

Given a sorted list, delete all duplicates such that each element appear only once.

## Constraints

* The linked list will have at most 1000 nodes.

## Example

Input: 1 -> 1 -> 2

Output: 1 -> 2

Input: 1 -> 1 -> 2 -> 3 -> 3

Output: 1 -> 2 -> 3

## Complexity Analysis

The time complexity for this approach is O(n) where n is the number of nodes in the linked list. The space complexity is O(1) as we are not using any extra space.

## Hint

You can solve this problem by iterating through the linked list and comparing the current node with the next node. If they are equal, you can skip the next node and update the current node's next pointer to the next node's next pointer. This way, you can remove duplicates from the linked list in a single pass.




