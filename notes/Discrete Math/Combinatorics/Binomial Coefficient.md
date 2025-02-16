

$$\binom{n}{k} = \frac{n!}{k! (n-k)!}=\frac{n\times(n-1)\times\cdots\times(n-k+1)}{k\times(k-1)\times\cdots\times1}$$
- Symmetry Rule for Binomial Coefficients - $\binom nk = \binom n{n-k} \quad \text{for } \ 0\leq k\leq n$
- Zero Choose Zero - $\binom 00 =1$
- Binomial Coefficient with One or Self minus One - $\binom n1=\binom{n}{n-1}=n$
- Binomial Coefficient with Zero or with Self - $\binom n0 = \binom nn= 1 \quad \text{for } \ n\geq 0$
- Sums of the binomial coefficients - $\sum_{k=0}^n \binom n k = 2^n$

# Multinomial Coefficient
$${n \choose k_1, k_2, \ldots, k_i} = \frac{n!}{k_1!\, k_2! \cdots k_i!} = {k_1\choose k_1}{k_1+k_2\choose k_2}\cdots{k_1+k_2+\cdots+k_i\choose k_i}$$

# Multinomial Theorem

For any positive integer $i$ and any nonnegative integer $n$
$$(x_1+\cdots+x_i)^n = \sum_{k_1+\cdots+k_i=n} {n \choose k_1,\ldots,k_i}x_1^{k_1}\cdots x_i^{k_i}$$
> In the case $i=2$, the multinomial theorem reduces to the binomial theorem.
## Binomial Theorem

$$(a+b)^n = \sum_{k=0}^n {n \choose k}a^{n-k}b^k = \sum_{k=0}^n {n \choose k}a^{k}b^{n-k}$$
Special case:
$$(1+x)^n = \sum_{k=0}^n {n \choose k}x^k$$

## Pascal's Rule

>Also called ***Pascal's-formula*** or ***Pascal's Recurrence*** or ***זהות פסקל***
$$\binom{n}{k} = \binom{n-1}{k} + \binom{n-1}{k-1}$$
