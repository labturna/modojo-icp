# Best Time To Buy And Sell Stock

## Problem Statement

You are given an array `prices` where `prices[i]` is the price of a given stock on the `i-th` day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return `0`.

Function Signature:

```motoko
public func maxProfit(prices: [Int]) : Int;
```

```plaintext
Input:

prices (Array[Int]): An array of integers representing the price of a stock on each day.

Output:

Returns the maximum profit you can achieve from this transaction.
```

## Examples:

- maxProfit([7,1,5,3,6,4]) returns 5

- maxProfit([7,6,4,3,1]) returns 0

- maxProfit([1,2]) returns 1

- maxProfit([2,1]) returns 0

## Constraints:

- 1 <= prices.length <= 10^5

- 0 <= prices[i] <= 10^4

- You must not buy more than one share of the stock.

- You must sell the stock before you buy again.

- You cannot sell a stock before you buy one.

## Hints:

- The key to solve this problem is to use a variable to store the minimum price.

- The maximum profit can be calculated by subtracting the minimum price from the current price.

- You can iterate through the array and update the minimum price and maximum profit.

- You can iterate through the array and update the minimum price and maximum profit at the same time.

- You can iterate through the array and update the minimum price and maximum profit in a single pass.

- You can iterate through the array and update the minimum price and maximum profit in a single pass using a single variable.

- You can iterate through the array and update the minimum price and maximum profit in a single pass using two variables.

- You can iterate through the array and update the minimum price and maximum profit in a single pass using two pointers.

