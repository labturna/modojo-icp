# Best Time to Buy and Sell Stock III
## Problem

Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete at most two transactions.

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

Function Signature: `def maxProfit(prices: List[int]) -> int:`

## Input

* `prices` an array of integers representing the price of a stock on each day.

## Output

* An integer which is the maximum profit.

## Example

`maxProfit([3,3,5,0,0,3,1,4])` returns `6`

`maxProfit([1,2,3,4,5])` returns `4`

`maxProfit([7,6,4,3,1])` returns `0`

## Note

1. You may complete at most two transactions.

2. You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

3. You may not buy more than one stock at a time (i.e., you must sell the stock before you buy again).

4. You may not sell a stock before you buy it.

5. You may not buy a stock before you sell it.


## Hints

1. Dynamic Programming

2. State Machine

3. State Machine with Dynamic Programming
