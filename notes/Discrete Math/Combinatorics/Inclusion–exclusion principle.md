$$\left|\bigcup_{i=1}^n A_i\right| = \sum_{i=1}^n |A_i| - \sum_{1 \leqslant i < j \leqslant n} |A_i\cap A_j| + \sum_{1 \leqslant i < j < k \leqslant n} |A_i \cap A_j\cap A_k| - \cdots + (-1)^{n+1} \left|A_1\cap\cdots\cap A_n\right|$$
## Intersction form 
>Remark: $S$ is a universal set

$$\left|\bigcap_{i=1}^n A^{\complement}_i\right| = \left|S \setminus \bigcup_{i=1}^n A_i \right| =|S| - \sum_{i=1}^n |A_i| + \sum_{1 \leqslant i < j \leqslant n} |A_i\cap A_j| - \cdots + (-1)^n |A_1\cap\cdots\cap A_n|$$
or
$$\left|\bigcap_{i=1}^n A_i\right| = \left|S \setminus \bigcup_{i=1}^n A^{\complement}_i \right| =|S| - \sum_{i=1}^n |A^{\complement}_i| + \sum_{1 \leqslant i < j \leqslant n} |A^{\complement}_i\cap A^{\complement}_j| - \cdots + (-1)^n |A^{\complement}_1\cap\cdots\cap A^{\complement}_n|$$

## Derangement
**derangement** is a permutation of the elements of a set, such that no element appears in its original position. In other words, a derangement is a **permutation that has no fixed points**. (*אי סדר מלא, בלבול, תמורה ללא נקודות שבת*)

**The number of derangements** of a set of size $n$ is known as the **subfactorial** of $n$ or the $n$-th derangement number or n-th de Montmort number. Notations for subfactorials in common use include $!n$, $D_n$.
$$!n=D_n=(n-1)(D_{n-2}+D_{n-1})$$
or
$$D_n=n! \sum_{i=0}^{n} \frac{(-1)^i}{i!}=n!(1-\frac{1}{1!}+\frac{1}{2!}-\frac{1}{3!}+\ldots+\frac{(-1)^n}{n!})$$
and the A000166 sequence
$$1, 0, 1, 2, 9, 44, 265, 1854, 14833, 133496, 1334961,...$$

#### Derivation by inclusion–exclusion principle
$$!n = n! - \left|S_1 \cup \dotsm \cup S_n\right| = n! \sum_{i=0}^n \frac{(-1)^i}{i!}$$
>For $1 \leq k \leq n$ we define $S_k$ to be the set of permutations of $n$ objects that fix the $k$-th object. 

