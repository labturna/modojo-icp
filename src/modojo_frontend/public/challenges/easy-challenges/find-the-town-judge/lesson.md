# Find The Town Judge
## Problem

In a town, there are N people labeled from 1 to N. There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

1. The town judge trusts nobody.

2. Everybody (except for the town judge) trusts the town judge.

3. There is exactly one person that satisfies properties 1 and 2.

You are given trust, an array of pairs trust[i] = [a, b] representing that the person labeled a trusts the person labeled b.

If the town judge exists and can be identified, return the label of the town judge. Otherwise, return -1.

## Example

```plaintext

Input: N = 3, trust = [[1,3],[2,3],[3,1]]

Output: 3

```

## Constraints

* 1 <= N <= 1000

* 0 <= trust.length <= 10^4

* trust[i].length == 2

* trust[i] are all different

* trust[i][0] != trust[i][1]

* 1 <= trust[i][0], trust[i][1] <= N

## Hints

* Count the number of people trusting each person

