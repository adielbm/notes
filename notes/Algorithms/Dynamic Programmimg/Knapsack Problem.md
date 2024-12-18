- Given $n$ objects, where:
	- $p_i$ is the _price_ of the $i$ object
	- $w_i$ is it _weight_ of the $i$ object
	- $x_i$ is the number of copies of the $i$ object in the backpack
	- $W$ is the maximum weight that the backpack can carry
- The goal is to find a sequence $x_1,x_2,...,x_n$ (_decision variables_) such that:
	- $\displaystyle\sum_{i=1}^n p_ix_i$ is maximized
	- $\displaystyle\sum_{i=1}^n w_ix_i \leq W$ (the total weight of items does not exceed the limit $W$)
- _Objective function_: $\displaystyle\max\left\{ \sum_{i=1}^n p_ix_i : \sum_{i=1}^n w_ix_i \leq W \right\}$
- Variants of the Knapsack Problem
	- ***0-1 knapsack problem***: each item has only one copy, so $x_i \in \{0,1\}$ (meaning, if a specific item is in the backpack, there is only one of its kind in the backpack).
	- ***bounded knapsack problem***: each object $i$ has a quantity $c_i$ and we are allowed to put a number of copies of the object in the backpack: $x_i \in \{0,1,...,c_i\}$.
	- ***unbounded knapsack problem***: we are allowed to take an unlimited number of copies of each item: $x_i \in \mathbb{N}$
# 0-1 knapsack problem

Here is a Python implementation of the dynamic programming approach to solve the 0-1 knapsack problem:

```python
def knapSack(W: int, weights: list[int], values: list[int]) -> tuple[int, list[int]]:
    """
    Given a knapsack of capacity W and a list of items with weights and values,
    find the maximum value that can be obtained by selecting a subset of the items.
    This is a 0/1 knapsack problem, meaning that either an item is selected or not.

    :param W: The capacity of the knapsack
    :param weights: A list of weights for each item
    :param values: A list of values for each item

    :return: A tuple containing 
        (a) the maximum value that can be obtained, and 
        (b) a list of indices of the selected items

	Time complexity: O(n * W)
	Space complexity: O(n * W)
    
    """

    n = len(weights)

    # Create DP table to store maximum values
    dp = [[0 for _ in range(W + 1)] for _ in range(n + 1)]

    # Build the dynamic programming table
    for i in range(1, n + 1):
        for w in range(1, W + 1):
            if weights[i - 1] <= w:
                # Compare including vs excluding current item
                include_value = values[i - 1] + dp[i - 1][w - weights[i - 1]]
                exclude_value = dp[i - 1][w]
                dp[i][w] = max(include_value, exclude_value)
            else:
                # Can't include current item
                dp[i][w] = dp[i - 1][w]

    # Find the selected items
    selected_items = []
    w = W
    for i in range(n, 0, -1):
        if dp[i][w] != dp[i - 1][w]:
            selected_items.append(i - 1)
            w -= weights[i - 1]

    return dp[n][W], selected_items


def print_green(string):
    GREEN = "\033[32m"
    RESET = "\033[0m"  # Resets to default color
    print(f"{GREEN}{string}{RESET}")


# Example usage
weights = [10, 20, 30]
values = [60, 100, 120]
capacity = 50

max_value, selected_items = knapSack(capacity, weights, values)
# Print all items with selected items in green
print("All items:")
for i in range(len(weights)):
    item_str = f"Item {i}: Value = {values[i]}, Weight = {weights[i]}"
    if i in selected_items:
        print_green(item_str)
    else:
        print(item_str)
print("----------------------")
print("Maximum value:", max_value)
print("Total weight:", sum(weights[i] for i in selected_items), "=<", capacity)

```

#### 0/1 Knapsack problem in O(nV) time

```python
def knapSack(V: int, weights: list[int], values: list[int]) -> tuple[int, list[int]]:
    """
    Solve the 0/1 Knapsack problem using O(nV) time complexity.

    :param V: The sum of all values (upper bound for total achievable value)
    :param weights: A list of weights for each item
    :param values: A list of values for each item

    :return: A tuple containing 
        (a) the maximum value that can be obtained under the weight limit, and 
        (b) a list of indices of the selected items
    """
    n = len(weights)
    max_value = sum(values)

    # DP array to store minimum weights required to achieve each value
    INF = float('inf')
    dp = [INF] * (max_value + 1)
    dp[0] = 0  # Base case: 0 weight needed for 0 value

    # Update the DP table for each item
    for i in range(n):
        for v in range(max_value, values[i] - 1, -1):
            dp[v] = min(dp[v], dp[v - values[i]] + weights[i])

    # Find the maximum value achievable within weight capacity
    max_val_within_capacity = 0
    for v in range(max_value + 1):
        if dp[v] <= V:
            max_val_within_capacity = v

    # Trace back to find the selected items
    selected_items = []
    v = max_val_within_capacity
    for i in range(n - 1, -1, -1):
        if v >= values[i] and dp[v] == dp[v - values[i]] + weights[i]:
            selected_items.append(i)
            v -= values[i]

    return max_val_within_capacity, selected_items


def print_green(string):
    GREEN = "\033[32m"
    RESET = "\033[0m"  # Resets to default color
    print(f"{GREEN}{string}{RESET}")


# Example usage
weights = [10, 20, 30]
values = [60, 100, 120]
capacity = 50

max_value, selected_items = knapSack(capacity, weights, values)
# Print all items with selected items in green
print("All items:")
for i in range(len(weights)):
    item_str = f"Item {i}: Value = {values[i]}, Weight = {weights[i]}"
    if i in selected_items:
        print_green(item_str)
    else:
        print(item_str)
print("----------------------")
print("Maximum value:", max_value)
print("Total weight:", sum(weights[i] for i in selected_items), "=<", capacity)

```