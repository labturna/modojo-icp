# Best Time to Buy and Sell Stock II
## Problem

Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

Function signature: `def maxProfit(prices: List[int]) -> int:`
## Input

An array of integers where each element represents the price of a stock on a given day.

## Output

An integer representing the maximum profit that can be achieved by buying and selling the stock.

## Constraints

- The number of elements in the input array is at most 10^5.

- The price of the stock on each day is at most 10^4.

- The input array is non-empty.

- The input array is guaranteed to have at least two elements.

## Example

Input: [7,1,5,3,6,4]

Output: 7

Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4. Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

## Hint

The key point is we need to consider every peak immediately following a valley to maximize the profit. In case we skip one of the peaks (trying to obtain more profit), we will end up losing the profit over one of the transactions leading to an overall lesser profit.


