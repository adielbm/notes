# k-combination (_n_ choose _k_)

$$C(n,k)=\binom{n}{k}=\binom{n}{n-k}=\frac{n!}{k!(n-k)!}$$

- The number of ways to choose $k$ elements from a set of size $n$ (without regard to the order of choice).
- [[Binomial Coefficient]]

# Combination with Repetitions
$$\left(\!\!{n\choose k}\!\!\right)=\binom{n+k-1}{n-1}=\binom{n+k-1}{k}=\frac{(n+k-1)!}{k!\,(n-1)!}$$
- aka: _n_ **multichoose** _k_, or **multiset coefficient**
- The number of [[Set theory#Multisets|multisets]] of cardinality $k$, with elements taken from a finite set of cardinality $n$.
- The number of ways to distribute $k$ identical balls into $n$ distinct boxes 
- The number of **weak compositions** of $k$ into $n$ parts
- The number of nonnegative integer solutions of $x_1+\cdots+x_n=k$ (with regard to the order of variables. i.e. $x_1+x_2=k$ and $x_2+x_1=k$ are considered as two different solutions. for consider them as a single solution use in _Generating Functions_)

### Identities

- $\displaystyle\left(\!\!{n\choose k}\!\!\right)=\frac{n^{\overline{k}}}{k!}$ (where $n^{\overline{k}}=n(n+1)\cdots(n+k-1)$ is a _rising factorial_)
- $\displaystyle\left(\!\!{n\choose k}\!\!\right)=(-1)^k\binom{-n}{k}$
- $\displaystyle\left(\!\!{n\choose k}\!\!\right)=\left(\!\!{k+1\choose n-1}\!\!\right)$


### Special Case: $k=n$

$$\left(\!\!{n\choose n}\!\!\right)=\binom{2n-1}{n-1}=\binom{2n-1}{n}=\frac{(2n-1)!}{n!\,(n-1)!}$$

This is the [A088218](https://oeis.org/A088218) sequence, which is total number of leaves in all rooted ordered trees with n edges.
$$1, 1, 3, 10, 35, 126, 462, 1716, 6435, 24310,...$$
# _k_-composition of _n_ 
 $$n-1 \choose k-1$$
- The number of positive integer solutions of $x_1+\cdots+x_k=n$ (without regard to the order of variables)
- The $k$-**composition** of $n$

> $\displaystyle\sum_{k=1}^n {n-1 \choose k-1} = 2^{n-1}$ is the number of all compositions of $n$. (i.e. $k=1,2,\ldots,n$)

## Solutions with Restrictions
### Minimum restrictions

- for $t_1$.  solutions for $t_1+\cdots+t_n=k$ such that $t_1 \ge p$. 
$$\binom{n+k-p-1}{k-p}$$

- solutions for $t_1+\cdots+t_n=k$ such that $t_i \ge p$. for each $i \leq m$
$$\binom{n+k-(p\cdot m)-1}{k-(p\cdot m)}$$

### Maximum restrictions

- by [[Generating Functions]]
- by [[Inclusion–exclusion principle]] with Minimum restrictions. for e.g, the solutions for $t_1+\cdots+t_n=k$ such that $t_i \lt p$. for each $i \leq n$
$$\sum^{n}_{i=0}{(-1)^i\binom{n}{i}\binom{n+k-pi-1}{n-1}}$$

# Number of Solutions of Inequality

$$\binom{(n+1)+k-1}{(n+1)-1}=\binom{n+k}{n}$$
- The number of nonnegative integer solutions of the inequality $t_1+\cdots+t_n \leq k$

# Other

- The number of nonnegative integer solutions of $x_1+\cdots+x_n=k$, such that $x_1+\ldots+x_a\geq{b}$.
$$\sum_{i=0}^{a-1}{\binom{a+b+i-1}{b+i}}\binom{n-a+k-(b+i)-1}{k-(b+i)}$$


