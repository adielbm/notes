
- A matrix of size $h\times m$ can be multiplied with a matrix $B$ of size $m\times k$
- The resulting matrix $C=AB$ will have size $h\times k$
- The computational cost of multiplying these two matrices is $hmk$
- Matrix Chain Multiplication Problem:
	- Given:
		- A sequence of matrices $A_1,A_2,\dots,A_n$
		- A sequence of dimensions $m_0,m_1,\dots,m_n$ such that the size of matrix $A_i$ is $m_{i-1}\times m_i$
		- $m_0\times m_n$ is the size of the final matrix product
	- Goal: Determine the order of multiplication that minimizes the total cost of multiplying all the matrices
- Dynamic Programming Solution: 
	- Subproblems:
		- Let $C(i,j)$ represent the minimum cost of multiplying matrices $A_i,\dots,A_j$
	- Recurrence Relation:
	    - $\displaystyle C(i,j)=\min \{C(i,k)+C(k,j)+m_{i}m_km_j\}$


```python
# Python code to implement the 
# matrix chain multiplication using tabulation

def matrixMultiplication(arr):
    n = len(arr)
    
    # Create a 2D DP array to store min
    # multiplication costs
    dp = [[0] * n for _ in range(n)]

	# dp[i][j] stores the minimum cost of
	# multiplying matrices from i to j

    # Fill the DP array
    # length is the chain length
    for length in range(2, n):
        for i in range(n - length):
            j = i + length
            dp[i][j] = float('inf')

            for k in range(i + 1, j):
                cost = dp[i][k] + dp[k][j] + arr[i] * arr[k] * arr[j]
                dp[i][j] = min(dp[i][j], cost)

    # Minimum cost is in dp[0][n-1]
    return dp[0][n - 1]

arr = [1, 2, 3, 4, 3]
print(matrixMultiplication(arr))
```

