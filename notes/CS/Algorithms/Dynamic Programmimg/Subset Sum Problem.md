
# Subset Sum Problem


- Given $n$ objects, where:
	- $w_i$ is it _weight_ of the $i$ object (non-negative integers) (`arr`)
- $W$ is the _target weight_ (`target`)
- $x_i$ is the number of copies of the $i$ object in the backpack
- (_decision variables_) The goal is to find a sequence $x_1,...,x_n$ (where $x_i$ is the number of copies of the $i$ object) such that:
	- $x_i \in \{0,1\}$
	- $\displaystyle\sum_{i=1}^n w_ix_i = W$

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

def subset_sum_dp(arr, target):
    """
    Determines if there is a subset of the array `arr` whose sum equals `target`.
    Also returns the list of items that form the subset if it exists.

    This function uses dynamic programming to efficiently solve the problem.
    The main idea is to use a 2D table `dp`, where `dp[i][j]` is True if there is a subset
    of the first `i` elements of `arr` that sums to `j`, and False otherwise.

    Args:
    arr (list of int): The list of integers to check for subsets.
    target (int): The target sum to check for using subsets of `arr`.

    Returns:
    tuple: A tuple containing:
        - list: The list of items that form the subset if it exists, otherwise an empty list.
        - dp: The 2D table used to solve the problem.
    
    Time complexity: O(n * target)
    Space complexity: O(n * target)
    
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

    # Step 4: Fill the DP table and track the inclusion of elements.
    include = [[False] * (target + 1) for _ in range(n + 1)]
    
    for i in range(1, n + 1):  # Iterate over the elements of the array
        for j in range(1, target + 1):  # Iterate over all possible target sums
            # If the current element is greater than the current sum `j`, we cannot include it.
            if arr[i - 1] > j:
                dp[i][j] = dp[i - 1][j]  # Exclude the element
            else:
                # Otherwise, we check two cases:
                # 1. Exclude the current element: dp[i - 1][j]
                # 2. Include the current element: dp[i - 1][j - arr[i - 1]]
                if dp[i - 1][j]:
                    dp[i][j] = True
                elif dp[i - 1][j - arr[i - 1]]:
                    dp[i][j] = True
                    include[i][j] = True  # Mark the element as included

    # Step 5: If the target sum is achievable, reconstruct the subset.
    if dp[n][target]:
        subset = []
        j = target
        for i in range(n, 0, -1):
            if include[i][j]:
                subset.append(arr[i - 1])
                j -= arr[i - 1]
        return subset[::-1], dp  # Reverse the subset for correct order
    else:
        return [], dp
        
# Example usage
if __name__ == "__main__":
    # Test the function with a sample array and target sum
    result, _ = subset_sum_dp([23, 134, 5, 2,4], 9)
    if result:
      print("The subset that sums to the target is:", result)
    else:
      print("No subset sums to the target.")  
```


## Visualization



<iframe src="https://adielbm.github.io/subset-sum-problem-visualization/" width="100%" height="900px"></iframe>


