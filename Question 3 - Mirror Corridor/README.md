# JS-Assignment | Question 3

**Name**: Aditya Vikram Singh
**Enrolment No.**: SAU/FET/DBM(CSE)/2025/008
**Programme**: Dual Degree B.Tech+M.Tech (CSE)
**Course**: CSE106 - Fundamentals of Web Design
**University**: South Asian University
**Date**: April 8, 2026

---

## 1. Approach
- **Input Handling**: N and K are taken via `prompt()` and converted to numbers using `Number()`.
- **Smallest Integer Search**: A `for` loop iterates through values of X starting from 0 to find the smallest non-negative integer satisfying the conditions.
- **Condition Validation**:
    * **Divisibility**: The script calculates `sum = N + X` and checks if it is divisible by K using the modulo operator (`sum % K === 0`).
    * **Palindrome Check**: If divisible, the `sum` is converted to a string. A nested loop reverses this string by iterating from the last character to the first.
    * **Comparison**: The original string is compared to the reversed string; if they match, the current X is identified as a palindrome.
- **Loop Termination**: The `break` statement exits the loop as soon as the first valid X is found.
- **Final Result**: The script displays the value of X using `alert()`, or -1 if no such X was found within the search range.

## 2. Complexity Analysis
- **Time Complexity**: O(M*digits).
    * The outer loop runs up to 100000 times.
    * For each iteration, string conversion and reversal take O(digits) where digits ≤ 7 for N+X ≤ 10^6 + 10^5.

## Submission Link
- **Repository Link:** https://github.com/theavsingh/JS-Assignment