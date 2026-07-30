# Memoization Approach

```python
def nth_fibonacci(A, n):
    if n == 1 or n == 2:
        return 1
    if A[n] != 0:  # Check if the sub-problem is already solved
        return A[n]
    A[n] = fib2(A, n - 1) + fib2(A, n - 2)  # Solve and store in A
    return A[n]
```

# Bottom-Up Approach (Dynamic Programming)

```python
def nth_fibonacci(n):
    if n <= 1:
        return n
	dp = [0] * (n + 1)
    dp[0] = 0
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
    return dp[n]
```

