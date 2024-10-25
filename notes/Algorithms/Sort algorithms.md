## Comparison sorts
 
| name | best | average | Worst | Memory | Stable | Method | Notes |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| Selection sort | $n^2$ | $n^2$ | $n^2$ |  |  |  |  |
| Bubble sort | $n$ | $n^2$ | $n^2$ | 1 |  |  |  |
| Insertion sort | $n$ | $n^2$ | $n^2$ | 1 | Yes |  |  |
| Heapsort | $n \lg n$ | $n \lg n$ | $n \lg n$ | 1 | No |  |  |
| Merge sort | $n \lg n$ | $n \lg n$ | $n \lg n$ | $n$ | Yes |  |  |
| Quicksort | $n \lg n$ | $n \lg n$ | $n^2$ | $\lg n$ | No |  |  |

- Theorem (8.1) - Any comparison sort algorithm requires $\Omega{(n \lg n)}$ comparisons in the *worst case*. 
- Corollary (8.2) - *Heapsort* and *merge sort* are asymptotically optimal comparison sorts

#### Decision tree

- The height (the longest root-to-leaf path) of a decision tree is $h\geq{\lg{(n!)}}=\Omega{(n\lg{n})}$, that is the worst-case number of comparisons in comparison sort algorithm.
- The number of leaves is $l\geq{n!}$ 
- The depth of any leaf is at least $n-1$

## Non-comparison Sorts

- A non-comparison sort algorithm requires $\Omega{(n)}$ comparisons in the *worst case*.

|           | best | average | Worst   | Memory  | Stable | Notes |
| ------------- | ---- | ------- | ------- | ------- | ------ | ----- |
| Counting sort |      | $n + k$ | $n + k$ | $n + k$ | Yes    |       |
| Bucket sort   |      |         |         |         | No     |       |
| Radix Sort    |      |         |         |         |        |       |

