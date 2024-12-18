
Given $n$ non-negative integers $d_{1}, d_{2},...,d_{n}$ (`durations`) and a number `side_capacity`, the **cassette problem** is to determine if there exists a way to divide the songs into two sides such that the total duration of each side does not exceed `side_capacity`.

We use in [[Subset Sum Problem]] algorithm to solve this problem. 
 

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
