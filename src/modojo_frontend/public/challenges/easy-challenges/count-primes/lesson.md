# Count Primes

Count the number of prime numbers less than a non-negative number, n.

## Problem

Count the number of prime numbers less than a non-negative number, n.

Function Signature:

```motoko

public func countPrimes(_ n: Int) : Int;

```

```plaintext

Input:

n (Int): An integer representing a non-negative number.

Output:

Returns the number of prime numbers less than n.

```

## Examples:

- countPrimes(10) returns 4

- countPrimes(0) returns 0

- countPrimes(1) returns 0

## Constraints:

- 0 <= n <= 5 * 10^6

- You must not use the built-in function `isPrime`.

## Hints:

- You can use the Sieve of Eratosthenes algorithm to count the number of prime numbers less than n.

- You can use the Sieve of Eratosthenes algorithm to count the number of prime numbers less than n in a single pass.
