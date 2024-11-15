# Min Stack
## Problem

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

- MinStack() initializes the stack object.

- void push(int val) pushes the element val onto the stack.

- void pop() removes the element on the top of the stack.

- int top() gets the top element of the stack.

- int getMin() retrieves the minimum element in the stack.

Function Signature:

```motoko

public class MinStack {
    public func push(_ val: Int) -> Void;
    public func pop() -> Void;
    public func top() -> Int;
    public func getMin() -> Int;
}

```

```plaintext

Input:

- val (Int): An integer representing the element to be pushed onto the stack.

Output:

Void: Returns nothing.

```

## Examples

### Example 1:

```motoko

let minStack = MinStack();

minStack.push(-2);

minStack.push(0);

minStack.push(-3);

minStack.getMin(); // return -3

minStack.pop();

minStack.top(); // return 0

minStack.getMin(); // return -2

```

### Example 2:

```motoko

let minStack = MinStack();

minStack.push(0);

minStack.push(1);

minStack.push(0);

minStack.getMin(); // return 0

minStack.pop();

minStack.getMin(); // return 0

```

## Constraints

- -2^31 <= val <= 2^31 - 1

- At most 10^4 calls will be made to push, pop, top, and getMin.

## Hints

- You can use an auxiliary stack to store the minimum element at each level of the main stack.
