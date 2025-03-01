Given a universal set $S$ and $n$ sets $A_1, A_2, \ldots, A_n$ that are subsets of $S$


# Inclusion–exclusion principle

$$\left|\bigcup_{i=1}^n A_i\right| = \sum_{i=1}^n |A_i| - \sum_{1 \leqslant i < j \leqslant n} |A_i\cap A_j| + \sum_{1 \leqslant i < j < k \leqslant n} |A_i \cap A_j\cap A_k| - \cdots + (-1)^{n+1} \left|A_1\cap\cdots\cap A_n\right|$$

## Intersction form 

$$\left|\bigcap_{i=1}^n A^{\complement}_i\right| = \left|S \setminus \bigcup_{i=1}^n A_i \right| =|S| - \sum_{i=1}^n |A_i| + \sum_{1 \leqslant i < j \leqslant n} |A_i\cap A_j| - \cdots + (-1)^n |A_1\cap\cdots\cap A_n|$$
or
$$\left|\bigcap_{i=1}^n A_i\right| = \left|S \setminus \bigcup_{i=1}^n A^{\complement}_i \right| =|S| - \sum_{i=1}^n |A^{\complement}_i| + \sum_{1 \leqslant i < j \leqslant n} |A^{\complement}_i\cap A^{\complement}_j| - \cdots + (-1)^n |A^{\complement}_1\cap\cdots\cap A^{\complement}_n|$$

### The number of elements $A_i$ that are not in any of the other sets
$$\displaystyle \left|A_i\setminus \left(\bigcup_{j\neq i} A_j\right)\right|=|A_i|-\sum_{j\neq i}|A_i\cap A_j|+\sum_{1 \leqslant j < k \leqslant n} |A_i\cap A_j\cap A_k| - \cdots$$

### The number of elements that are in exactly one set

 