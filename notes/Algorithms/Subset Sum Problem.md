
# Subset Sum Problem


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


# Cassette Problem

Given $n$ non-negative integers $d_{1}, d_{2},...,d_{n}$ (`durations`) and a number `side_capacity`, the **cassette problem** is to determine if there exists a way to divide the songs into two sides such that the total duration of each side does not exceed `side_capacity`.


```python
def cassette_problem(durations, side_capacity):
    """
    Solves the cassette problem using the DP table from the subset sum problem. (subset_sum_dp)

	:param durations: List of song durations.
    :param side_capacity: Maximum duration that can be stored on one side of the cassette.
	
	:return: True if the songs can be divided between the two sides, False otherwise.
    """
    # Compute total duration
    total_duration = sum(durations)
    
    # Number of Songs
    n = len(durations)

    # Check trivial cases
    if side_capacity >= total_duration:
        return True  # All songs fit on one side
    if total_duration > 2 * side_capacity:
        return False  # Total duration exceeds both sides

    # Build the DP table
    _, dp_table = subset_sum_dp(durations, side_capacity)

    
    for t in range((total_duration + 1) // 2, side_capacity + 1):
      if dp_table[n][t]:
            side1 = subset_sum_dp(durations, t)[0]  # Reconstruct subset for the current 's'
            side2 = [d for d in durations if d not in side1]
            return True, side1, side2

    return False, [], []

# Example usage
if __name__ == "__main__":
    # Example input: 5 songs with durations [25, 10, 15, 18, 19] and side capacity 45
    song_durations = [25, 10, 15, 18, 19]
    side_capacity = 45

    result = cassette_problem(song_durations, side_capacity)
    print(result)
```
