# JS-Assignment | Question 1

**Name:** Aditya Vikram Singh
**Enrolment No.:** SAU/FET/DBM(CSE)/2025/008
**Programme:** Dual Degree B.Tech+M.Tech (CSE)
**Course:** CSE106 - Fundamentals of Web Design
**University:** South Asian University
**Date:** April 8, 2026

---

## 1. Approach
- **Input Handling:** L, R, and K are taken via `prompt()` and converted to numbers using `Number()`.
- **Iteration:** A `for` loop goes from L to R checking each integer x.
- **Divisibility Check:** `x % K === 0` filters multiples of K.
- **Digit Processing:**
    * For numbers meeting the divisibility criteria, a `while` loop extracts individual digits using `% 10` and `Math.floor`.
    * A boolean flag `zeroFound` is used to skip any number containing the digit 0.
    * The sum of all non-zero digits is calculated simultaneously.
- **Primality Check:** A helper function `isPrime` checks if the sum of the digits is prime by checking for factors up to its square root.
- **Final Count:** If all conditions pass, `count` variable is incremented and shown via `alert()`.

## 2. Complexity Analysis
- **Time Complexity:** O((R-L)*log(R)).
    * The outer loop runs (R-L+1) times.
    * Inside the loop, the digit extraction process takes O(log(R)) time, which is at most 7 operations given the constraint R less than equal to 10^6.
    * The primality check runs in O(√sumOfDigits) time; since max digit sum is 54, so this is effectively constant.

## Submission Link
- **Repository Link:** https://github.com/theavsingh/JS-Assignment