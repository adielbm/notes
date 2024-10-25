# k-combination (_n_ choose _k_)

$$C(n,k)=\binom{n}{k}=\binom{n}{n-k}=\frac{n!}{k!(n-k)!}$$
>See also: [[Binomial Coefficient]]

# Combination with Repetitions

Number of ways to distribute **$k$ identical Balls** into **$n$ distinct Boxes** ^[https://en.wikipedia.org/wiki/Combination#Number_of_combinations_with_repetitionr *צירופים עם חזרות*.]

$$D(n,k)=\left(\!\!{n\choose k}\!\!\right)=\binom{n+k-1}{n-1}=\binom{n+k-1}{k}=\frac{(n+k-1)!}{k!\,(n-1)!}$$

## Counting solutions of equation
can also be used for number of **nonnegative** solutions of equation $t_1+\cdots+t_n=k$. i.e. the number of solutions is: $$\binom{n+k-1}{k}=\binom{n+k-1}{n-1}$$.

> (for the equation $x_1+x_2=10$, there are also solution $6+4=10$ and $4+6=10$ and these are considered as two solution. for consider them as a single solution use in [[Generating Functions#Partition|generating function]] ) 
### Restrictions
#### Minimum restrictions
- positive integers (strictly) solutions ($t_i \ge 1$ for any $i \le n$) for $t_1+\cdots+t_n=k$ need to add $-1\cdot n$ to $k$
$$\binom{k-1}{n-1}$$
>See also: [[Binomial Coefficient#Compositions of _n_]]

- for $t_1$.  solutions for $t_1+\cdots+t_n=k$ such that $t_1 \ge p$. 
$$\binom{n+k-p-1}{k-p}$$

- solutions for $t_1+\cdots+t_n=k$ such that $t_i \ge p$. for each $i \leq m$
$$\binom{n+k-(p\cdot m)-1}{k-(p\cdot m)}$$

##### Maximum restrictions
- by [[Generating Functions]]
- by [[Inclusion–exclusion principle]] with Minimum restrictions. for e.g, the solutions for $t_1+\cdots+t_n=k$ such that $t_i \lt p$. for each $i \leq n$
$$\sum^{n}_{i=0}{(-1)^i\binom{n}{i}\binom{n+k-pi-1}{n-1}}$$

#### number solutions of inequality
number of **nonnegative** solutions of equation $t_1+\cdots+t_n \leq k$. i.e. the number of solutions is: $$\binom{(n+1)+k-1}{(n+1)-1}=\binom{n+k}{n}$$

#### Sum of $a$ first terms greater than or equal to $b$
- nonnegative solutions for $x_1+\cdots+x_n=k$, such that $x_1+\ldots+x_a\geq{b}$.
$$\sum_{i=0}^{a-1}{\binom{a+b+i-1}{b+i}}\binom{n-a+k-(b+i)-1}{k-(b+i)}$$


## Combination with Repetitions ($k=n$)

$$\left(\!\!{n\choose n}\!\!\right)=\binom{2n-1}{n-1}=\binom{2n-1}{n}=\frac{(2n-1)!}{n!\,(n-1)!}$$

This is the [A088218](https://oeis.org/A088218) sequence, which is total number of leaves in all rooted ordered trees with n edges.
$$1, 1, 3, 10, 35, 126, 462, 1716, 6435, 24310,...$$

