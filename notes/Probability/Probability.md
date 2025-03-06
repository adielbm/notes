				
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

# Conditional Probability

- If $P(F)>0$, then the **conditional probability** of $E$ given $F$ is defined as: $\displaystyle P(E|F)=\frac{P(EF)}{P(F)}$
- (2.2) $P(EF) = P(E|F)P(F)$
- (**Multiplication Rule**) $\displaystyle P(E_1\cdots E_n) = P(E_1)\prod_{i=2}^{n}P(E_i|E_1\cdots E_{i-1})$

## Bayes' Theorem

- (3.1) $\begin{align*} P(E) &= P(EF) + P(EF^\complement) \\ &= P(E|F)P(F) + P(E|F^\complement)P(F^\complement) \\ &= P(E|F)P(F) + P(E|F^\complement)[1-P(F)]\end{align*}$


- The **odds ratio** (or **odds**) of an event $A$ is defined as $\displaystyle \frac{P(A)}{P(A^\complement)}=\frac{P(A)}{1-P(A)}$
- $\displaystyle \frac{P(B|A)}{P(B^\complement|A)}=\frac{P(B)}{P(B^\complement)}\frac{P(A|B)}{P(A|B^\complement)}$

- **Bayes' Formula**
	- $\displaystyle \text{Posterior} = \frac{\text{Likelihood}\times\text{Prior}}{\text{Evidence}}$
	- (Simple Form) $\displaystyle P(F|E)=\frac{P(E|F)P(F)}{P(E)}$
	- (Extended Form) $\displaystyle P(F_j|E)=\frac{P(E|F_j)P(F_j)}{\displaystyle\sum_{i=1}^{n}P(E|F_i)P(F_i)}$
		- where $F_1,F_2,\ldots,F_n$ form a partition of the sample space $S$, i.e., $F_i\cap F_j=\emptyset$ for $i\neq j$ and $\displaystyle\bigcup_{i=1}^{n}F_i=S$
		- $P(E)=\displaystyle\sum_{i=1}^{n}P(EF_i)=\displaystyle\sum_{i=1}^{n}P(E|F_i)P(F_i)$ (**Law of Total Probability**)











