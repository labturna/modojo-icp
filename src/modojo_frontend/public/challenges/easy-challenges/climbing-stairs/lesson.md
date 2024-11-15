# Climbing Stairs

## Problem

You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

Function Signature:

```motoko
public func climbStairs(_ n: Int) : Int;
```

```plaintext
Input:

n (Int): An integer representing the number of steps to reach the top.

Output:

Returns the number of distinct ways you can climb to the top.
```

## Examples:

- climbStairs(2) returns 2

- climbStairs(3) returns 3

- climbStairs(4) returns 5

## Constraints:

- 1 <= n <= 45

- You can assume that you can reach the top.

## Hints:

- You can use a dynamic programming approach to solve this problem.

- You can use a dynamic programming approach to solve this problem in a single pass.
