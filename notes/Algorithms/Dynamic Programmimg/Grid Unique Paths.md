
# Grid Unique Paths


- $\displaystyle\binom{m+n}{m}= \frac{(m+n)!}{m!n!}$ is the formula for the number of unique paths in a grid of size $m \times n$.
- when $n=m$ then the formula becomes $\displaystyle\binom{2n}{n}= \frac{(2n)!}{n!n!}$.

### Using Recursion


```python
# O(2^(n+m)) Time and O(n+m) Space
def grid_unique_paths(m,n):
	if m == 0 or n == 0:
	    return 1
	else:
		return grid_unique_paths(m-1,n) + grid_unique_paths(m,n-1)
```

### Using Top-Down DP (Memoization)



```python 
# Python implementation to count of possible paths to reach
# using Using Top-Down DP (Memoization)
# O(m*n) Time and O(m*n) Space

def countPaths(m, n, memo):
    if n == 1 or m == 1:
        memo[m][n] = 1
        return 1

    # Add the element in the memo table
    # If it was not computed before
    if  memo[m][n] == 0:
         memo[m][n] = countPaths(m-1,n, memo) + \
            countPaths(m,n-1, memo)

    return  memo[m][n]


def number_of_paths(m, n):
      
    memo = [[0 for _ in range(n + 1)] for _ in range(m + 1)]
    ans = countPaths(m, n, memo)
    return ans

if __name__ == "__main__":
    n, m = 3, 3

    res = number_of_paths(m, n)
    print(res)

```


# Cheapest Path in weighted Grid

- given a grid of size $m \times n$ where each edge has a non-negative cost
- we need to find the minimum cost to reach the bottom right cell from the top left cell.
- we can only move right or down.
- $\mathrm{cost}(m,n)=\mathrm{grid}[m][n]+\min(\mathrm{cost}(m-1,n),\mathrm{cost}(m,n-1))$
- improve using DP, O(mn)
- if we want the path (like waze) we keep for each cell a boolean flag up/right.
- another approach than DP?
	- Dijkstra's algorithm $O(mn\log(mn))$
- which one is better and why?
	- DP is better because it's faster and easier to implement.
- Did we learn Dijkstra's for nothing?
	- No, here it's a special form of graph where we can use DP.


# Lecture 5 Exercise


- for estimateing an arithmatic expression, we can use in perranthesis:
	  - $(1+(2*3)-6)$ is not the same as $((1+2)*(3-6))$
- we want an algorithm that takes a value n and calc the number of ways of ordering the peranthesis in in an arithmatic expression wit n numbers in it.
- in our problem $(1+(2+3))$ is not the same as $((1+2)+3)$ 
- $p(1)=1,p(2)=1, p(3)=2, p(n)=?$