# Reverse Linked List II
## Problem

Given the `head` of a singly linked list and two integers `left` and `right` where `left <= right`, reverse the nodes of the list from position `left` to position `right`, and return the reversed list.

Function Signature:

```motoko

public func reverseBetween(_ head: ListNode?, _ left: Int, _ right: Int) -> ListNode?;

```

```plaintext

Input:

head (ListNode): A singly linked list.

left (Int): An integer.

right (Int): An integer.

Output:

ListNode: Returns the head of the reversed linked list.

```

## Examples

### Example 1:

```motoko

reverseBetween([1,2,3,4,5], 2, 4) // [1,4,3,2,5]

```

### Example 2:

```motoko

reverseBetween([5], 1, 1) // [5]

```

## Constraints:

- The number of nodes in the list is n.

- 1 <= n <= 500

- -500 <= Node.val <= 500

- 1 <= left <= right <= n

- Compare this snippet from src/modojo_frontend/public/challenges/hard-challenges/regular-expression-matching/lesson.md:

