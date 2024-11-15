# Intersection of Two Linked Lists
## Problem

Given the heads of two singly linked-lists `headA` and `headB`, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return `null`.

It is guaranteed that there are no cycles anywhere in the entire linked structure.

Note that the linked lists must retain their original structure after the function returns.

Function Signature:

```motoko

public func getIntersectionNode(_ headA: ListNode?, _ headB: ListNode?) : ListNode?;
```

```plaintext

Input:

headA (ListNode?): The head of the first linked list.

headB (ListNode?): The head of the second linked list.

Output:

ListNode?: The node at which the two lists intersect. If the two linked lists have no intersection at all, return `null`.

```

## Examples:

- getIntersectionNode([4,1,8,4,5], [5,0,1,8,4,5]) returns [8,4,5]

- getIntersectionNode([1,9,1,2,4], [3,2,4]) returns [2,4]

- getIntersectionNode([2,6,4], [1,5]) returns null

## Constraints:

- The number of nodes of `headA` is in the range [0, 10^4].

- The number of nodes of `headB` is in the range [0, 10^4].

- 0 <= Node.val <= 1000

- The linked lists must retain their original structure after the function returns.

## Hints:

- You can use a hash set to store the nodes of the first linked list in a single pass.