# JS-Assignment | Question 5

**Name**: Aditya Vikram Singh
**Enrolment No.**: SAU/FET/DBM(CSE)/2025/008
**Programme**: Dual Degree B.Tech+M.Tech (CSE)
**Course**: CSE106 - Fundamentals of Web Design
**University**: South Asian University
**Date**: April 8, 2026

---

## 1. Approach
- **Input Handling**: N and seed are taken via `prompt()` and converted using `Number()`.
- **Variable Initialization**: The `sum` and the counter `m` are initialized to 0, while the `divisor` is calculated as `seed + 2`.
- **Summation Loop**: A `while` loop runs as long as the current `sum` is less than N:
    * In each iteration, `m` is incremented by 1.
    * If `m % divisor !== 0`, m is added to `sum`.
- **Final Output**: Once the `sum` reaches or exceeds N, the script displays both the value of `m` and the final computed `sum` via `alert()`.

## 2. Complexity Analysis
- **Time Complexity**: O(m) ≈ O(√N).
    * The loop runs m times where m is the smallest integer for the sum to reach N.
    * Since the sum of integers grows as m²/2, m is approximately proportional to √N.

## Submission Link
- **Repository Link:** https://github.com/theavsingh/JS-Assignment