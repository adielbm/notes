
- The **sample space** of an experiment is the set $S$ of all possible outcomes of the experiment.
- An **event** is a subset $E$ of the sample space $S$.

# Axioms of Probability

- $0\leq P(E) \leq 1$
- $P(S) = 1$
- If $E_1, E_2, \ldots$ are mutually exclusive events, then $\displaystyle P\left(\bigcup_{i=1}^{\infty}E_i\right) = \sum_{i=1}^{\infty}P(E_i)$

# Theorems

- (4.1) $P(E)+P(E^\complement) = 1$
- $E\subset F \implies P(E) \leq P(F)$
- $\displaystyle P\left(\bigcap_{i=1}^{n}E_i\right) = 1-P\left(\bigcup_{i=1}^{n}E_i^\complement\right)$ (By 4.1 and De Morgan's Law)
 


## Inclusion-Exclusion Principle
$$\displaystyle P(E_1\cup\cdots\cup E_n)=\sum_{i=1}^{n}P(E_i)-\sum_{i<j}P(E_i E_j) + \sum_{i<j<k}P(E_i E_jE_k) + \cdots + (-1)^{n+1}P(E_1 E_2\cdots E_n)$$
Or equivalently,
$$\displaystyle P\left(\bigcup_{i=1}^{n}E_i\right)=\sum_{k=1}^{n}\left((-1)^{k-1}\sum_{I\subset\{1,\ldots,n\}\atop|I|=k}P\left(\bigcap_{i\in I}E_i\right)\right)$$
##### Special Case: $n=2$

$P(E\cup F) = P(E) + P(F) - P(EF)$
##### Special Case 
If for every $I\subset\{1,\ldots,n\}$, $\displaystyle a_k=P(E_I)$, where $k=|I|$, then $\displaystyle P\left(\bigcup_{i=1}^{n}E_i\right)=\sum_{k=1}^{n}(-1)^{k-1}\binom{n}{k}a_k$
### Boole's Inequality
$$\displaystyle P\left(\bigcup_{i=1}^{n}E_i\right) \leq \sum_{i=1}^{n}P(E_i)$$ 


- $\displaystyle P\left(\bigcup_{i=1}^{n}E_i\right) \geq \sum_{i=1}^{n}P(E_i) - (n-1)$


### Bonferroni's Inequality

- $P(EF) \geq P(E) + P(F) - 1$
- $\displaystyle P\left(\bigcap_{i=1}^{n}E_i\right) \geq \sum_{i=1}^{n}P(E_i) - (n-1)$


### Continuous Set Function

- A sequence of events $\{E_n,n\geq 1\}$ is said to be:
	- **Increasing sequence** if $E_1\subset E_2\subset\cdots\subset E_n\subset\cdots$
	- **Decreasing sequence** if $E_1\supset E_2\supset\cdots\supset E_n\supset\cdots$
- (6.1) If $\{E_n,n\geq 1\}$ is either an increasing or decreasing sequence of events, then $\displaystyle \lim_{n\to\infty}P(E_n)=P\left(\lim_{n\to\infty}E_n\right)=P\left(\bigcup_{n=1}^{\infty}E_n\right)$


 