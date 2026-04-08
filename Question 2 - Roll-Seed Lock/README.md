# JS-Assignment | Question 2

**Name**: Aditya Vikram Singh
**Enrolment No.**: SAU/FET/DBM(CSE)/2025/008
**Programme**: Dual Degree B.Tech+M.Tech (CSE)
**Course**: CSE106 - Fundamentals of Web Design
**University**: South Asian University
**Date**: April 8, 2026

---

## 1. Approach
- **Input Handling**: N and seed are taken via `prompt()` and converted to numbers using `Number()`.
- **Transformation Loop**: A `for` loop executes exactly three iterations to modify the value of N based on its parity:
    * If N is even, it is replaced with `(N/2)+seed`.
    * If N is odd, it is replaced with `(N*3)-seed`.
- **Digit Extraction**: After the third transformation, the middle digit is calculated using `Math.floor(N/10)%10`.
- **Validation**: Checks if N is between 100 and 999 inclusive, and if the middle digit equals seed.
- **Output**: Displays "YES" or "NO" along with the final N via `alert()`.

## 2. Complexity Analysis
- **Time Complexity**: O(1).
    * The loop runs exactly 3 times regardless of input, and all other operations are constant time.

## Submission Link
- **Repository Link:** https://github.com/theavsingh/JS-Assignment