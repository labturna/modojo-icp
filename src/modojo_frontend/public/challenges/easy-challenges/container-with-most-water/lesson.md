# Container With Most Water
## Problem

Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.

## Example

```plaintext

Input: [1,8,6,2,5,4,8,3,7]

Output: 49

```

## Constraints

* n == height.length

* 2 <= n <= 3 * 10^4

* 0 <= height[i] <= 3 * 10^4

## Hints

* The area formed between the lines will always be limited by the height of the shorter line. Further, the farther the lines, the more will be the area obtained.

* Start with the maximum width container and go to a shorter width container if there is a vertical line longer than the current containers shorter line. This way we are compromising on the width but we are looking forward to a longer length container.

* Compare this snippet from src/modojo_frontend/public/challenges/easy-challenges/find-the-town-judge/lesson.md:
