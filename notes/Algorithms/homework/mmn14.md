
## Q1

FFT Execution. 
(In this question, section a is for submission, section b is not for submission.)

Consider the polynomial $p(x) = 2x^3 + 3x^2 + x + 1$ whose degree is less than 4. 

Write all calculations over the complex field (including recursive calls) for:

- a) FFT execution of order 4 (running $FFT_4(\omega, p)$) on the polynomial coefficients.
- b) INVERSE-FFT execution (running $FFT^{-1}_4(\omega, p(\omega))$) on the values obtained in section a.

## Q2

FFT-based Integer Multiplication: Integer multiplication is an algorithmic problem of supreme practical importance. For simplicity, let's assume that both numbers being multiplied are of equal length (both have a binary representation of $n$ bits) and both are positive. This exercise will present the main components of one of the most efficient algorithms known today for integer multiplication: its running time is only $O(n \log n)$.

Recall that Karatsuba's multiplication algorithm is based on splitting the digits of each input into two equal-sized blocks and runs in $O(n^{\log_2 3})$ time. Present an improved algorithm that divides each input into $n/k$ blocks of size $k$. Use the FFT algorithm to solve the resulting sub-problems. Assume for simplicity (and without justification) that the multiplications performed during recursive calls do not increase the length of the numbers, and therefore these multiplications can be implemented naively while performing $O(k^2)$ bit operations. Finally, choose the block size to be $k = \log n$.

## Q3

Matrix Multiplication (Strassen). We want to multiply two square matrices $A, B$ of order $n \times n$ over a certain field. The product result is a matrix $C = A \times B$ of order $n \times n$. Exactly $n^3$ scalar multiplication operations (scalar = number in the field) are required if computing $C$ directly according to the definition $C_{i,j} = \sum_{k=1}^n A_{i,k}B_{k,j}$.

In this question, we'll present a clever recursive algorithm that significantly reduces the number of scalar multiplications (which are considered expensive compared to scalar addition and subtraction operations). For simplicity, assume that $n$ is a power of 2, so each matrix can be "decomposed" into 4 sub-matrices of order $(\frac{n}{2}) \times (\frac{n}{2})$, as follows:

$A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}, B = \begin{pmatrix} e & g \\ f & h \end{pmatrix}, C = \begin{pmatrix} r & s \\ t & u \end{pmatrix}$

Note that from the definition of matrix multiplication:

$r = ae + bf, s = ag + bh$
$t = ce + df, u = cg + dh$

Now let's compute the 7 matrices:

$P_1 = a(g-h)$
$P_2 = (a+b)h$
$P_3 = (c+d)e$
$P_4 = d(f-e)$
$P_5 = (a+d)(e+h)$
$P_6 = (b-d)(f+h)$
$P_7 = (a-c)(e+g)$

a) Explain how to compute the 4 required matrices $r, s, t, u$ using only addition and subtraction operations on matrices $P_1,...,P_7$ (matrix multiplication is not allowed). For example $u = P_7 + P_5 - P_1 - P_3$.

Calculate s: ___________________________________________________________
Calculate t: ___________________________________________________________
Calculate r: ___________________________________________________________

b) Check how many scalar multiplications are required in total for the recursive algorithm described in this question.

1. 
2. 

## Q4
Computing all derivatives of a polynomial at a point. It is customary to denote by $f^{(k)}(x)$ the $k$-th order derivative of the function $f(x)$. For example, $f^{(1)}(x) = f'(x)$, $f^{(2)}(x) = f''(x)$, $f^{(3)}(x) = f'''(x)$ and $f^{(0)}(x) = f(x)$. Given the coefficients of the polynomial:
$f(x) = a_0 + a_1x + a_2x^2 + ... + a_nx^n$
and a certain point $x_0$, present an algorithm to compute the values of all derivatives $f^{(0)}(x_0),...,f^{(n)}(x_0)$ at that point $x_0$, while performing only $O(n \log n)$ basic arithmetic operations. (Basic operation = addition, subtraction, multiplication, division, or comparison of numbers).

For example, for a polynomial of degree $n=4$, you need to compute the following values:

$f^{(0)}(x_0) = a_0 + a_1x_0 + a_2x_0^2 + a_3x_0^3 + a_4x_0^4$
$f^{(1)}(x_0) = a_1 + 2a_2x_0 + 3a_3x_0^2 + 4a_4x_0^3$
$f^{(2)}(x_0) = 2a_2 + 2 \cdot 3a_3x_0 + 3 \cdot 4a_4x_0^2$
$f^{(3)}(x_0) = 2 \cdot 3a_3 + 2 \cdot 3 \cdot 4a_4x_0$
$f^{(4)}(x_0) = 2 \cdot 3 \cdot 4a_4$

A 4-5 line answer is required. An FFT-based answer is required. In particular, no credit will be given for the trivial algorithm that separately computes each of the $O(n^2)$ terms. Use in your answer the standard factorial reduction:
$\frac{m!}{(m-k)!} = m(m-1)...(m-k+1)$