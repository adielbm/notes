```
binary_search(A, l, r, q):
	if l > r:
	    return false
	m = floor((l + r) / 2)
	
	if A[m] == q:
		return m
    
    if A[m] > q:
	    return binary_search(A, l, m - 1, q)
	else:
		return binary_search(A, m + 1, r, q)
```

- Input:
	- $A$: a sorted (non-decreasing) array of size $n$
	- Initial call: $l = 0$, $r = n - 1$
	- $q$: the query element
- Output:
	- The index of $q$ in $A$ if it exists, otherwise $\text{false}$
- Time complexity: 
	- $T(n) := T(n/2) + O(1)$ 
	- $O(\log n)$
