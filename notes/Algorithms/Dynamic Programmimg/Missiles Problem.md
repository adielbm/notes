- $n$ is the number of objects
- For each object $i\in\{1,2,...,n\}$ we have:
	- A _value_ $v_i$ of the $i$ object
	- A sequence of _probabilities_ $\{p_i(0),p_i(1),...,p_i(S)\}$
		- $p_i(s)$ is the probability of the $i$ object when $s$ resources are allocated to it
		- $0\leq p_i(1)\leq p_i(2)\leq...\leq p_i(S)\leq 1$
- $S\in\mathbb{N}$ is the number of _resources_ available
- Decision variables: $s_1,s_2,...,s_n$ where $s_i\in\{0,1,...,S\}$ and $\displaystyle\sum_{i=1}^{n}s_i\leq S$
- Objective function: $\displaystyle\max\left\{\sum_{i=1}^{n}p_i(s_i)v_i : \sum_{i=1}^{n}s_i\leq S\right\}$


>[!EXAMPLE] Example: 
>The $n$ objects can represent enemy targets
>Each target has a value $v_i$ representing the importance of the target
>$S$ is the number of missiles available to allocate
>For each target $i$, we have a sequence of probabilities $p_i(s)$ that the target will be destroyed when $s$ missiles are allocated
>Our goal is to maximize the expected total value of destroyed targets by optimally allocating $s_i$ missiles to each target, subject to the constraint of the total number of missiles available.



```python
def DP_Maximize_Allocation(n: int, S: int, p: list[list[float]], v: list[int]) -> tuple[float, list[int]]:
    """
    Dynamic programming algorithm to maximize the expected value of allocating resources to objects.

    Problem Description:
        - There are `n` objects, each with:
            - A value `v[i]` representing the importance of the object.
            - A sequence of probabilities `p[i][s]` where `p[i][s]` is the probability of achieving
              success for object `i` when `s` resources are allocated to it.
        - `S` is the total number of resources available for allocation.
        - Decision variables: `s_1, s_2, ..., s_n`, where `s_i` is the number of resources allocated to object `i`,
          with the constraint that `sum(s_i for i in range(1, n+1)) <= S`.

    Objective:
        Maximize the total expected value: 
        `max sum(p[i][s_i] * v[i] for i in range(1, n+1))` subject to the resource constraint.

    Args:
        n (int): Number of objects.
        S (int): Total number of resources available.
        p (list of lists): A 2D list where `p[i][s]` gives the probability of success for object `i`
                           when `s` resources are allocated. Assumes `p[i][0] = 0` and 
                           `p[i][s]` is non-decreasing for `s = 0 to S`.
        v (list): A list where `v[i]` represents the value of object `i`. Index 0 is unused.

    Returns:
        float: The maximum expected value achievable by optimally allocating resources.
    """

    # Input validation
    if len(p) != n + 1 or len(v) != n + 1:
        raise ValueError(
            "Input lists `p` and `v` must have `n+1` elements (index 0 unused).")
    for k in range(1, n + 1):
        if len(p[k]) < S + 1:
            raise ValueError(
                f"Probability list `p[{k}]` must have at least {S+1} elements.")

    # Step 1: Initialize the DP table
    # `M[s][k]` represents the maximum expected value achievable with `s` resources
    # distributed across the first `k` objects.
    M = [[0.0] * (n + 1) for _ in range(S + 1)]  # 2D DP table initialized to 0

    # Step 2: Build the DP table iteratively
    # Iterate through each object (k = 1 to n)
    for k in range(1, n + 1):
        # Iterate through each possible total resource allocation (s = 0 to S)
        for s in range(S + 1):
            max_value = 0  # Initialize the maximum value for M[s][k]
            # Iterate through possible resources allocated to object k (h = 0 to s)
            for h in range(s + 1):
                # Calculate the contribution of allocating `h` resources to object k
                current_value = M[s - h][k - 1] + p[k][h] * v[k]
                max_value = max(max_value, current_value)
            # Store the best value in the DP table
            M[s][k] = max_value

    # Step 3: Backtracking to find the decision variables s_1, s_2, ..., s_n
    # Initialize a list to store the decision variables
    s_values = [0] * n

    # Start from M[S][n] and trace the decisions
    remaining_resources = S
    for k in range(n, 0, -1):  # Backtrack from the last item to the first
        # Check all possible resource allocations
        for h in range(remaining_resources + 1):
            # If we find the allocation that gives the maximum value for M[remaining_resources][k]
            if M[remaining_resources][k] == M[remaining_resources - h][k - 1] + p[k][h] * v[k]:
                s_values[k - 1] = h  # Store the allocation for item k
                remaining_resources -= h  # Update the remaining resources
                break  # Once we find the decision for this item, move to the next item

    # Step 4: Return the result and the decision variables
    return M[S][n], s_values


# Example usage
# p[i][s] is the probability of success for object i<=n when s<=S resources are allocated
p = [
    [0, 0, 0, 0, 0, 0],  # (unused)
    [0, 0.2, 0.5, 0.7, 0.8, 0.9],
    [0, 0.1, 0.2, 0.65, 0.7, 0.8],
    [0, 0.4, 0.78, 0.8, 0.82, 0.85]
]

n = 3  # Number of objects
S = 5  # Total resources available
v = [0, 10, 12, 13]  # Values for objects (index 0 unused)

result = DP_Maximize_Allocation(n, S, p, v)
max_expected_value, allocation = result

header_format = "{:>18}" * (n + 1)
row_format = "{:>18}" * (n + 1)

print("Optimal Value Probability:", max_expected_value)
print("Total Resources Allocated (sum(s_i)):", sum(allocation), " out of ", S)
print("\n")
print(header_format.format("Obj", *[f"Obj {i}" for i in range(1, n + 1)]))
print(row_format.format("Val (v_i)", *v[1:]))
print(row_format.format("#Res. (s_i)", *allocation))
print(row_format.format("Prob. (p_i(s_i))", *
      [round(p[i][allocation[i-1]], 2) for i in range(1, n + 1)]))
print(row_format.format("p_i(s_i) * v_i", *
      [round(p[i][allocation[i-1]] * v[i], 2) for i in range(1, n + 1)]))

```
