# Naive Approach $O(n^2)$

```python
# input: A and B are the coefficients of two polynomials of degree m and n
# output: the (m+n-1) coefficients of the product of A and B
# time: O(m*n) (or O(n^2) if m=n)
# space: O(m+n)
def multiply(A, B, m, n): 
    prod = [0] * (m + n - 1); 
    for i in range(m): # A polynomial 
        for j in range(n): # B polynomial
            prod[i + j] += A[i] * B[j]; # Add A[i]*B[j] to the (i+j)th coefficient
    return prod; 
```

# Karatsuba Algorithm for Polynomials $O(n^{\log_2 3})$

```python
# input: p and q are the coefficients of two polynomials
# output: the coefficients of the product of p and q
# time: O(n^log2(3))
# space: O(n)
def karatsuba_poly_mult(p, q):
    # Base case: if either polynomial is empty, return an empty list
    if not p or not q:
        return []

    # Base case: if either polynomial is a constant, perform scalar multiplication
    if len(p) == 1:
        return [p[0] * qi for qi in q]
    if len(q) == 1:
        return [q[0] * pi for pi in p]

    # Determine the size for splitting the polynomials
    m = min(len(p), len(q)) // 2

    # Split the polynomials into lower and higher degree parts
    p_low = p[:m]
    p_high = p[m:]
    q_low = q[:m]
    q_high = q[m:]

    # Recursively compute the three products
    z0 = karatsuba_poly_mult(p_low, q_low)
    z2 = karatsuba_poly_mult(p_high, q_high)
    p_sum = [p_low[i] + p_high[i] for i in range(len(p_low))]
    q_sum = [q_low[i] + q_high[i] for i in range(len(q_low))]
    z1 = karatsuba_poly_mult(p_sum, q_sum)

    # Combine the results to get the final product
    result = [0] * (len(p) + len(q) - 1)
    for i in range(len(z0)):
        result[i] += z0[i]
    for i in range(len(z1)):
        result[i + m] += z1[i] - z0[i] - z2[i]
    for i in range(len(z2)):
        result[i + 2 * m] += z2[i]

    return result
```

# Fast Polynomial Multiplication using FFT $O(n\log n)$

## Lagrange Polynomial

- (**Interpolation theorem**) For every set $S=\{(x_0,y_0),\dots,(x_{n-1},y_{n-1})\}\subseteq \mathbb{F}^2$ of $n$ distinct points such that $\forall i\neq j, x_i\neq x_j$:
	- There is a unique polynomial $f\in \mathbb{F}[x]$ of degree $n-1$ (at most) such that $f(x_k)=y_k$ for all $k\in \{0,\dots,n-1\}$
		- $f$ is said to **interpolate** the set $S$, and it is called the **Lagrange interpolation polynomial** of the set $S$
		- $\displaystyle f(x)=\sum _{k=0}^{n-1}y_k\prod _{j\neq k}{\frac {x-x_{j}}{x_{k}-x_{j}}}$
	- (The points $(x_k,y_k)$ are called the **interpolation points** or **data points**, and $x_k$ are the **interpolation nodes**)
	- The Lagrange interpolation polynomial can be computed in $O(n^2)$ time

## Naive Algorithm for Polynomial Mul. u/ Lagrange Interpolation $O(n^2)$

- Algorithm: 
	- Input: Two polynomials $f$ and $g$ of degree at most $n-1$
	- Let $\ell$ be the smallest power of $2$ such that $\ell\geq 2n-1$
	- Choose $\ell$ distinct points $x_0,\dots,x_{\ell-1}$ in $\mathbb{F}$ 
	- $\forall k\in\{0,\dots,\ell-1\}, y_k=f(x_k)g(x_k)$
	- Find the Lagrange interpolation polynomial $h$ of the set $\{(x_0,y_0),\dots,(x_{\ell-1},y_{\ell-1})\}$

> In this approach, the multiplication operation ($y_k=f(x_k)g(x_k)$) is easily performed in linear time, but the interpolation step is done in $O(n^2)$ time, which of course is not efficient compared to the previous approaches. However, we will see that by selecting the points $x_0,\dots,x_{\ell-1}$ carefully, we can achieve a more efficient divide-and-conquer algorithm that is efficient for both evaluation and interpolation steps. The smart choice of points will be in the complex plane, so the algorithm will be for polynomials in $\mathbb{C}[x]$

## Polynomial Multiplication u/ FFT


 - Input:
	 - Two polynomials $f,g\in \mathbb{C}[x]$ with degree less than $n=2^k$ for some integer $k$
		- $f(x)=a_0+a_1x+\dots+a_{n-1}x^{n-1}$
		- $g(x)=b_0+b_1x+\dots+b_{m-1}x^{m-1}$
	- A primitive $n$th root of unity $\omega$
- (Calculate the DFT of $\mathbf{a}$ and $\mathbf{b}$ using FFT)
	- $\omega$ is an $n$th primitive root of unity, $\displaystyle\displaystyle\omega=e^{\frac{2\pi i}{n}}$
	- $\mathbf{a}=(a_0,a_1,\dots,a_{n-1})\overset{\mathsf{FFT}}{\longmapsto}\mathbf{\hat{a}}=(f(\omega^0),f(\omega^1),\dots,f(\omega^{n-1}))$
	- $\mathbf{b}=(b_0,b_1,\dots,b_{m-1})\overset{\mathsf{FFT}}{\longmapsto}\mathbf{\hat{b}}=(g(\omega^0),g(\omega^1),\dots,g(\omega^{m-1}))$
- (Pointwise multiplication)
	- $\mathbf{\hat{a}}\cdot \mathbf{\hat{b}}=(f(\omega^0)g(\omega^0),f(\omega^1)g(\omega^1),\dots,f(\omega^{n-1})g(\omega^{n-1}))$
- (Calculate the IDFT of $\mathbf{\hat{a}}\cdot \mathbf{\hat{b}}$ using FFT)
- $\mathbf{\hat{a}}\cdot \mathbf{\hat{b}}\overset{\mathsf{IFFT}}{\longmapsto}\mathbf{a} * \mathbf{b} = \begin{bmatrix} a_0b_0 \\ a_0b_1+a_1b_0 \\ a_0b_2+a_1b_1+a_2b_0 \\ \vdots \\ a_{n-1}b_{m-1} \end{bmatrix}$

