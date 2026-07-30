```
merge-sort(L):
	if L.length <= 1:
	    return L

	mid = L.length // 2
	left = merge-sort(L[:mid])
	right = merge-sort(L[mid:])

	return merge(left, right)

merge(left, right):
	# todo
```

- $T(n)\leq 2T(n/2)+O(n)$
- $\displaystyle T(n)\leq \sum_{i=0}^{\log n}2^i\cdot O(n/2^i)=O(n\log n)$
	- $i$ is the level of the recursion tree
	- $2^i$ is the number of subproblems at level $i$
	- $O(n/2^i)$ is the cost per subproblem at level $i$
	- $O(n\log n)$ is the total cost of all levels
- $T(n)=O(n\log n)$