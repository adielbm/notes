
- A **permutation** of a set $S$ with $n$ elements is a bijection $\sigma:S\to S$. 
- A permutation can be viewed as a rearrangement of the elements of $S$ where $\sigma(i)=j$ means that the element $i$ is moved to the position of element $j$.
- The number of permutations of a set with $n$ elements is: $$P(n)=n!$$
- The number of bijective functions between two sets of the same size $n$

# Partial Permutation

$$\displaystyle P(n,k)=\frac{n!}{(n-k)!}=n(n-1)\cdots(n-k+1)$$
- **_k_-permutations** of a set with $n$ distinct elements.
- The number of ways to arrange $k$ distinct objects in order, chosen from $n$ available objects.
- The number of ways to distribute $k$ distinct balls into $n$ distinct cells, where each cell can contain either one or no ball.
- The number of injective (one-to-one) functions from a set of size $k$ to a set of size $n$. ($n\geq{k}$)

# Permutations of Multisets

$$P(n;k_1,...,k_i)={n \choose k_1, \ldots, k_i} = \frac{n!}{k_1! \cdots k_i!}={k_1\choose k_1}{k_1+\choose k_2}\cdots{k_1+\cdots+k_i\choose k_i}$$
- [[Binomial Coefficient#Multinomial Coefficient|Multinomial Coefficient]]
- The number of ways to arrange a [[Set theory#Multisets|multiset]] of size $n$ where $k_1,\ldots, k_i$ are the multiplicities of the elements of the multiset. (i.e. $k_1+\cdots+k_i=n$)


# Permutations with Repetition
$$n^k$$
- The number of ways to form a string of length $k$ from an alphabet of size $n$ (repetition allowed)
- The number of ways to distribute $k$ distinct balls into $n$ distinct cells (a cell can be empty, or contain any number of balls)


# Number of Surjective Functions

$$\displaystyle n!\left\{ {k \atop n}\right\}=\displaystyle \sum_{i=0}^{n-1} (-1)^i{n \choose i}(n-i)^k$$
- The number of surjective (onto) functions from a set of size $k$ to a set of size $n$. ($k\geq{n}$)
- The number of ways to distribute $k$ distinct balls into $n$ distinct cells, where each cell must contain at least one ball.

>${\lbrace\textstyle{k\atop n}\rbrace}=S(k,n)$ is [[Stirling numbers#Second kind (Stirling partition number)]]

# Other

- Distribute $k$ distinct balls into $n$ distinct cells, where the first $a$ cells must contain at least $b$ balls total $\displaystyle\sum_{i=0}^{a-1}\binom{k}{b+i}\cdot{a^{(b+i)}}\cdot(n-a)^{(k-(b+i))}$
- The number of ways to distribute $k$ distinct balls into $n$ distinct cells, where the order of balls within the cells is matter
$$k!\binom{n+k-1}{k}=\frac{(n+k-1)!}{(n-1)!} = (n+k-1)^{\underline{k}}$$


# Derangement

- A **derangement** of a set $S$ with $n$ elements is a permutation $\sigma:S\to S$ such that $\forall i\in S, \sigma(i)\neq i$.
	- A derangement can represent an arrangement of a sequence of elements such that no element appears in its original position.
	- A derangement is a _permutation that has no fixed points_. 
	- (aka: אי סדר מלא, בלבול, תמורה ללא נקודות שבת)
- The number of derangements of a set of size $n$ is known as the **subfactorial** of $n$ or the $n$-th derangement number, denoted by $!n$ or $D_n$ and is given by any of the following formulas:
	- $!n=D_n=(n-1)(D_{n-2}+D_{n-1})$ for $n\geq{2}$ with $D_0=1$ and $D_1=0$.
	- $\displaystyle !n=n! \sum_{i=0}^{n} \frac{(-1)^i}{i!}=n!\left(1-\frac{1}{1!}+\frac{1}{2!}-\frac{1}{3!}+\ldots+\frac{(-1)^n}{n!}\right)$
	- $\displaystyle !n = \left\lfloor\frac{n!}{e}+\frac{1}{2}\right\rfloor$

###### A000166

| $n$  | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7    | $\ldots$ |
| ---- | --- | --- | --- | --- | --- | --- | --- | ---- | -------- |
| $!n$ | 1   | 0   | 1   | 2   | 9   | 44  | 265 | 1854 | $\ldots$ |


#### Derivation by inclusion–exclusion principle
$$!n = n! - \left|S_1 \cup \dotsm \cup S_n\right| = n! \sum_{i=0}^n \frac{(-1)^i}{i!}$$
>For $1 \leq k \leq n$ we define $S_k$ to be the set of permutations of $n$ objects that fix the $k$-th object. 


# Dis. objects into indist. boxes of size r

- The number of ways to distribute $n$ distinguishable objects into $k$ indistinguishable boxes each of size $r$ (where $n=kr$) is given by  $\displaystyle\frac{n!}{(r!)^k k!}$


