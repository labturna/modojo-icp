# Merge Two Sorted Lists
## Problem

Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

Function Signature:

```motoko

public func mergeTwoLists(_ l1: ListNode?, _ l2: ListNode?) -> ListNode?;

```

```plaintext

Input:

l1 (ListNode?): The head of the first sorted linked list.

l2 (ListNode?): The head of the second sorted linked list.

Output:

ListNode?: The head of the new sorted linked list.

```

## Examples:

- mergeTwoLists([1,2,4], [1,3,4]) returns [1,1,2,3,4,4]

- mergeTwoLists([], []) returns []

- mergeTwoLists([], [0]) returns [0]

## Constraints:

- The number of nodes in both lists is in the range [0, 50].

- -100 <= Node.val <= 100

## Hints:

- You can use a recursive approach to solve this problem.

- You can use a recursive approach to solve this problem in a single pass.

[]: # (end)
```