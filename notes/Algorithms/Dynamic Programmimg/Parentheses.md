
- Given a sequence $a_1, a_2, \ldots, a_n$ of $n$ numbers separated by $n-1$ binary operators
- Goal: Count all possible valid ways to parenthesize the sequence, foucsing on the order of operations but not the actual values of the numbers
- Example: 
	- $P(1)=1$
		- $(a_1)$
	- $P(2)=1$
		- $(a_1a_2)$
	- $P(3)=2$
	    - $(a_1(a_2a_3))$
	    - $((a_1a_2)a_3)$
	- $P(4)=5$
        - $(a_1(a_2(a_3a_4)))$
        - $(a_1((a_2a_3)a_4))$
        - $((a_1a_2)(a_3a_4))$
        - $((a_1(a_2a_3))a_4)$
        - $(((a_1a_2)a_3)a_4)$
- Recursive Formula:
	- $\displaystyle P(n)=\sum_{i=1}^{n-1}P(i)P(n-i)$ 
		- Where $i$ splits the sequence into a left part with $i$ elements and a right part with $n-i$ elements
	-  Base cases: $P(1)=P(2)=1$
- Dynamic Programming Optimization:
	- Use an array `dp` to store results for subproblems
	- Initialize `dp[1]=dp[2]=1`
	- 


```python
def count_parentheses(n):
    # Base cases
    if n <= 2:
        return 1
    
    # Initialize a table to store results for subproblems
    dp = [0] * (n + 1)
    dp[1] = 1
    dp[2] = 1
    
    # Fill the table iteratively
    for m in range(3, n + 1):
        for i in range(1, m):  # Split into two parts
            dp[m] += dp[i] * dp[m - i]
    
    return dp[n]
```