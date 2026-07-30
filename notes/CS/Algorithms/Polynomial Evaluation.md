# Naive Approach 

```python
# Time complexity: O(n^2)
def evaluate(poly, x):
    result = 0
    for i in range(len(poly)):
        result += poly[i] * (x ** i)
    return result
```

# Horner's Method

$\displaystyle a_{0}+a_{1}x+\cdots +a_{n}x^{n}=a_{0}+x (a_{1}+x (a_{2}+x{\big (}a_{3}+\cdots +x(a_{n-1}+x\,a_{n})\cdots )$

```python
# Time complexity: O(n)
def evaluate(poly, x): 
    result = poly[len(poly) - 1]
    # Loop 
    for i in range(len(poly) - 2, -1, -1): 
        result = result * x + poly[i]
    return result
```



