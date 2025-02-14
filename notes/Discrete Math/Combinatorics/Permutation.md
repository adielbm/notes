$$P(n)=n!$$
- The number of **permutations** (arrangements of objects in a sequence) of a set of size $n$ is $n!$.

# Partial permutation
$$\displaystyle P(n,k)={_n}P_k=\frac{n!}{(n-k)!}=(n)_{k}$$
- **_k_-permutations of _n_** 
- The number of ways to distribute $k$ distinct balls into $n$ distinct cells

# Permutations of Multisets

$$P(n;k_1,...,k_i)={n \choose k_1, \ldots, k_i} = \frac{n!}{k_1! \cdots k_i!}={k_1\choose k_1}{k_1+\choose k_2}\cdots{k_1+\cdots+k_i\choose k_i}$$

>See also [[Binomial Coefficient#multinomial coefficient]] also called ***multiset permutation*** or ***multinomial theorem*** or ***תמורה עם חזרות*** or **המקדם המולטינומי**


# Other

- The number of ways to form a string of length $k$ from an alphabet of size $n$ (repetition allowed) is $n^k$.
- The number of ways to distribute $k$ distinct balls into $n$ distinct cells (a cell can be empty, or contain any number of balls) is $n^k$.
- The number of ways to distribute $k$ distinct balls into $n$ distinct cells (a cell must contain at least one ball) is $\displaystyle n!{\lbrace\textstyle{k\atop n}\rbrace}$.
	- This is also the number of onto functions from a set of size $k$ to a set of size $n$.
	- ${\lbrace\textstyle{k\atop n}\rbrace}$ is the Stirling number of the second kind.
- Distribute $k$ distinct balls into $n$ distinct cells, where the first $a$ cells must contain at least $b$ balls total $\displaystyle\sum_{i=0}^{a-1}\binom{k}{b+i}\cdot{a^{(b+i)}}\cdot(n-a)^{(k-(b+i))}$


___  

- $k$ distinct balls into $n$ distinct cells, where **the order of balls within the cells is matter**
$$k!\binom{n+k-1}{k}=\frac{(n+k-1)!}{(n-1)!} = (n+k-1)^{\underline{k}}$$


## Derangement

A **derangement** is a permutation of the elements of a set, such that no element appears in its original position. In other words, a derangement is a **permutation that has no fixed points**. (*אי סדר מלא, בלבול, תמורה ללא נקודות שבת*)

**The number of derangements** of a set of size $n$ is known as the **subfactorial** of $n$ or the $n$-th derangement number or n-th de Montmort number. Notations for subfactorials in common use include $!n$, $D_n$.
$$!n=D_n=(n-1)(D_{n-2}+D_{n-1})$$
or
$$D_n=n! \sum_{i=0}^{n} \frac{(-1)^i}{i!}=n!(1-\frac{1}{1!}+\frac{1}{2!}-\frac{1}{3!}+\ldots+\frac{(-1)^n}{n!})$$
and the A000166 sequence
$$1, 0, 1, 2, 9, 44, 265, 1854, 14833, 133496, 1334961,...$$

#### Derivation by inclusion–exclusion principle
$$!n = n! - \left|S_1 \cup \dotsm \cup S_n\right| = n! \sum_{i=0}^n \frac{(-1)^i}{i!}$$
>For $1 \leq k \leq n$ we define $S_k$ to be the set of permutations of $n$ objects that fix the $k$-th object. 

