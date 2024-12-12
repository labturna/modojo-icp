# Best Time to Buy and Sell Stock with Cooldown
## Problem

Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:

You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)

Function Signature: `def maxProfit(prices: List[int]) -> int:`

## Input

- 2 <= len(prices) <= 5000

## Output

- Return the maximum profit you can achieve.

## Constraints

- prices[i] is an integer.

## Examples

```

Input: [1, 2, 3, 0, 2]

Output: 3

Explanation: transactions = [buy, sell, cooldown, buy, sell]

```

## Explanation

- The maximum profit is achieved by buying on day 1 (price = 1) and selling on day 3 (price = 3). Total profit = 3 - 1 = 2.

- The maximum profit is achieved by buying on day 4 (price = 0) and selling on day 5 (price = 2). Total profit = 2 - 0 = 2.

- The maximum profit is the sum of the profits of the two transactions = 2 + 2 = 4.

- The maximum profit is achieved by buying on day 1 (price = 1) and selling on day 2 (price = 2). Total profit = 2 - 1 = 1.

- The maximum profit is achieved by buying on day 1 (price = 1), selling on day 2 (price = 2), buying on day 3 (price = 3), and selling on day 4 (price = 0). Total profit = 2 - 1 + 3 - 0 = 4.


## Hints

- The problem is a dynamic programming problem. We can solve it by using a 2D array to store the maximum profit at each day.

- The 2D array is a 2D list of size len(prices) x 2. The first dimension is the day, and the second dimension is the state of the stock (0 = not holding, 1 = holding).
