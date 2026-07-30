
```
INPUT: Two n-bit binary numbers A and B
OUTPUT: Product of A and B
TIME: O(n^2)
---
Initialize result = 0
For i from 0 to n-1 (iterate over each bit of B, right to left): O(n)
     If B[i] == 1:
          result = result + (A << i) // Shift A left by i bits and add to result (O(n))
Return result
```

# Karatsuba Algorithm

### Simple Version (4 multiplications, $O(n^2)$)

```
mul(x,y,n):
	if n == 1: 
		return x*y
		 	
	x_h = x >> n/2
	y_h = y >> n/2

	x_l = x & ((1 << n/2) - 1)
	y_l = y & ((1 << n/2) - 1)

	h = mul(x_h, y_h, n/2)
	m1 = mul(x_h, y_l, n/2)
	m2 = mul(x_l, y_h, n/2)
	l = mul(x_l, y_l, n/2)

	return (h << n) + ((m1 + m2) << n/2) + l
```

- $T(n) \leq T(n/2 + 1) + 2T(n) + O(n) \implies T(n) = O(n^2)$

### Optimized Version (3 multiplications, $O(n^{\log_2 3})$)

```
mul(x,y,n):                              # T(n)
	n2 = floor(n/2)
	Write x as x_h * 2^(n2) + x_l        # O(n)
	Write y as y_h * 2^(n2) + y_l        # O(n)
	h = mul(x_h, y_h, n2)                # T(n/2)
	m = mul(x_h + x_l, y_h + y_l, n2)    # T(n/2)
	l = mul(x_l, y_l, n2)                # T(n/2)
	return h * 2^n2 + (m - h - l) * 2^n2 + l
```

- $T(n) = 3T(n/2) + O(n) \implies T(n) = O(n^{\log_2 3})$
# Complex Multiplication 

```python
# Multiply complex bumbers with just three multiplications 
def print_product(a, b, c, d): # a+bi * c+di
	prod1 = a * c
	prod2 = b * d
	prod3 = (a + b) * (c + d)

	real = prod1 - prod2
	imag = prod3 - (prod1 + prod2)
	return real, imag
```

