# JS-Assignment | Question 6

**Name**: Aditya Vikram Singh
**Enrolment No.**: SAU/FET/DBM(CSE)/2025/008
**Programme**: Dual Degree B.Tech+M.Tech (CSE)
**Course**: CSE106 - Fundamentals of Web Design
**University**: South Asian University
**Date**: April 8, 2026

---

## 1. Approach
- **Input Handling**: a (correct), b (partially correct), and c (wrong) are taken via `prompt()` and converted using `Number()`.
- **Initial Score Calculation**: The base score is computed as `3*a+b-2*c`.
- **Rule Application**:
    - **Negative Score Reset**: If the calculated score is negative, it is immediately replaced with 0.
    - **Submission Penalty**: If total number of answers (a+b+c) exceeds 50, 10 points is subtracted from the score.
- **Status Determination**: If score >= 60, status is "PASS", otherwise "FAIL".
- **Output**: Final score and status are shown via `alert()`.

## 2. Complexity Analysis
- **Time Complexity**: O(1).
    - All steps are independent of input values.

## Submission Link
- **Repository Link:** https://github.com/theavsingh/JS-Assignment