- Given $n$ non-negative integers $w_{1}, w_{2},...,w_{n}$ (`arr`) and a target sum $W$ (`target`)
- The **subset sum problem** is to determine whether there exists a subset $S \subseteq \{1,2,...,n\}$ such that $\displaystyle\sum_{i \in S}w_{i} = W$. 
	- The subset sum problem is a special case of the knapsack problem, where the weights of the items are equal to their values.
- We define a matrix `dp` (`n+1` x `target+1`) where `dp[i][j]` is `True` if there exists there exists a subset of the first `i` elements that sums to `j`, and `False` otherwise.

|       | `0` | `1` | `...` | `j - arr[i-1]`       | `...` | `j`         | `...` | `target` |
| ----- | --- | --- | ----- | -------------------- | ----- | ----------- | ----- | -------- |
| `0`   | 1   | 0   | 0     | 0                    | 0     | 0           | 0     | 0        |
| `1`   | 1   |     |       |                      |       |             |       |          |
| `...` | 1   |     |       |                      |       |             |       |          |
| `i-1` |     |     |       | `dp[i-1,j-arr[i-1]]` |       | `dp[i-1,j]` |       |          |
| `i`   | 1   |     |       |                      |       | `dp[i,j]`   |       |          |
| `...` | 1   |     |       |                      |       |             |       |          |
| `n`   | 1   |     |       |                      |       |             |       |          |


```python
def is_subset_sum_dp(arr, target):
    """
    Determines if there is a subset of the array `arr` whose sum equals `target`.
    
    This function uses dynamic programming to efficiently solve the problem.
    The main idea is to use a 2D table `dp`, where `dp[i][j]` is True if there is a subset
    of the first `i` elements of `arr` that sums to `j`, and False otherwise.
    
    Args:
    arr (list of int): The list of integers to check for subsets.
    target (int): The target sum to check for using subsets of `arr`.
    
    Returns:
    bool: `True` if there is a subset with sum equal to `target`, `False` otherwise.

	Time Complexity: O(n * target)
	Space Complexity: O(n * target)
    
    """
    
    # Step 1: Initialize the length of the array.
    n = len(arr)
    
    # Step 2: Create a DP table of size (n+1) x (target+1), initialized to False.
    # dp[i][j] will be True if there's a subset of the first `i` elements that sums to `j`.
    dp = [[False] * (target + 1) for _ in range(n + 1)]
    
    # Step 3: Base case: A sum of 0 is always achievable with the empty subset.
    # Set all dp[i][0] to True, since sum 0 is possible with any subset (including empty).
    for i in range(n + 1):
        dp[i][0] = True
    
    # Step 4: Fill the DP table.
    for i in range(1, n + 1):  # Iterate over the elements of the array
        for j in range(1, target + 1):  # Iterate over all possible target sums
            # If the current element is greater than the current sum `j`, we cannot include it.
            # the current i element is arr[i-1] because the array is 0-index
            if arr[i - 1] > j:
                dp[i][j] = dp[i - 1][j]  # Exclude the element
            else:
                # Otherwise, we check two cases:
                # 1. Exclude the current element: dp[i - 1][j]
                # 2. Include the current element: dp[i - 1][j - arr[i - 1]]
                dp[i][j] = dp[i - 1][j] or dp[i - 1][j - arr[i - 1]]
    
    # Step 5: The result is stored in dp[n][target], which tells if it's possible
    # to form the target sum using all elements of the array.
    return dp[n][target]


# Example usage
if __name__ == "__main__":
    # Test the function with a sample array and target sum
    result = is_subset_sum_dp([3, 34, 4, 12, 5, 2], 9)
    print(result)  # Output: True

```



# Visualization



<iframe src="https://adielbm.github.io/subset-sum-problem-visualization/" width="100%" height="900px"></iframe>


