# JS-Assignment | Question 4

**Name**: Aditya Vikram Singh
**Enrolment No.**: SAU/FET/DBM(CSE)/2025/008
**Programme**: Dual Degree B.Tech+M.Tech (CSE)
**Course**: CSE106 - Fundamentals of Web Design
**University**: South Asian University
**Date**: April 8, 2026

---

## 1. Approach
- **Input Handling**: `base`, `distance`, `minutesLate`, and `seed` are taken via `prompt()` and converted using `Number()`.
- **Initial Calculation**: The base fare is calculated as `base + (7*distance)`.
- **Conditional Surcharges**:
    * **Late Fee**: If `minutesLate` exceeds 15, a flat fee of 20 is added.
    * **Distance Fee**: If `distance` is greater than 10, a surcharge of 10% of the current fare is added using `Math.floor`.
- **Seed Adjustment**: Based on the parity of the `seed`:
    * If the `seed` is odd, it is subtracted from the total.
    * Otherwise, the `seed` is added to the total.
- **Rounding Logic**: The fare is first rounded up to the nearest integer using `Math.ceil()`. A `while` loop then increments the value until it reaches the nearest multiple of 5.
- **Output**: The final computed fare is displayed to the user.

## 2. Complexity Analysis
- **Time Complexity**: O(1).
    * All operations are constant time. The rounding loop runs at most 4 iterations regardless of input.

## Submission Link
- **Repository Link:** https://github.com/theavsingh/JS-Assignment