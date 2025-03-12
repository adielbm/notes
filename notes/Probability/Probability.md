
- The **sample space** of an experiment is a set $S$ of all possible **outcomes** of the experiment.
- An **event** is a subset $E$ of the sample space $S$.
	- An event $E$ is **simple** if it consists of exactly one outcome.
	- An event $E$ is **compound** if it consists of more than one outcome.
	- The empty set $\emptyset$ is an event (impossible event).
	- The sample space $S$ is an event (certain event).
- An **experiment** is a procedure that yields one of a given set of outcomes (i.e. a given subset of the sample space).
- A **subexperiment** is a step in an experiment. 
	- (Example: If an experiment consists of rolling two dice, then each die roll is a subexperiment.)
	- If each subexperiment of an experiment is indentical–that is, if each subexperiment has the same sub sample space–then the subexperiments are called **trials**.
# Axioms of Probability

- $\forall E\subseteq S,\, 0\leq P(E) \leq 1$
- $P(S) = 1$
- If $E_1, E_2, \ldots$ are mutually exclusive events, then $\displaystyle P\left(\bigcup_{i=1}^{\infty}E_i\right) = \sum_{i=1}^{\infty}P(E_i)$
# Theorems

- (4.1) $P(E)+P(E^\complement) = 1$
	- $P(E\mid F) = 1 - P(E^\complement\mid F)$
- $E\subset F \implies P(E) \leq P(F)$
- $\displaystyle P\left(\bigcap_{i=1}^{n}E_i\right) = 1-P\left(\bigcup_{i=1}^{n}E_i^\complement\right)$ (By 4.1 and De Morgan's Law)
 

## Inclusion-Exclusion Principle
$$\displaystyle P(E_1\cup\cdots\cup E_n)=\sum_{i=1}^{n}P(E_i)-\sum_{i<j}P(E_i E_j) + \sum_{i<j<k}P(E_i E_jE_k) + \cdots + (-1)^{n+1}P(E_1 E_2\cdots E_n)$$
Or equivalently,
$$\displaystyle P\left(\bigcup_{i=1}^{n}E_i\right)=\sum_{k=1}^{n}\left((-1)^{k-1}\sum_{I\subset\{1,\ldots,n\}\atop\mid I\mid =k}P\left(\bigcap_{i\in I}E_i\right)\right)$$
##### Special Case: $n=2$

$P(E\cup F) = P(E) + P(F) - P(EF)$
##### Special Case 
If for every $I\subset\{1,\ldots,n\}$, $\displaystyle a_k=P(E_I)$, where $k=\mid I\mid $, then $\displaystyle P\left(\bigcup_{i=1}^{n}E_i\right)=\sum_{k=1}^{n}(-1)^{k-1}\binom{n}{k}a_k$
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

- If $P(F)>0$, then the **conditional probability** of $E$ given $F$ is defined as: $$\displaystyle P(E\mid F)=\frac{P(EF)}{P(F)}$$
- (2.2) $P(EF) = P(E\mid F)P(F)$
- (**Multiplication Rule**) $\displaystyle P(E_1\cdots E_n) = P(E_1)\prod_{i=2}^{n}P(E_i\mid E_1\cdots E_{i-1})$

## Bayes' Theorem
$$\displaystyle \text{Posterior} = \frac{\text{Likelihood}\times\text{Prior}}{\text{Evidence}}$$

- (Simple Form) $\displaystyle P(F\mid E)=\frac{P(E\mid F)P(F)}{P(E)}$
- (Extended Form) $\displaystyle P(F_j\mid E)=\frac{P(E\mid F_j)P(F_j)}{P(E)}$ for $j=1,\ldots,n$
	- Where $F_1,\ldots,F_n$ form a partition of $S$ (i.e., $F_i\cap F_j=\emptyset$ for $i\neq j$ and $\displaystyle\bigcup_{i=1}^{n}F_i=S$)
# Law of Total Probability
$$\begin{align*} P(E) &= P(EF) + P(EF^\complement) \\ &= P(E\mid F)P(F) + P(E\mid F^\complement)P(F^\complement) \\ &= P(E\mid F)P(F) + P(E\mid F^\complement)[1-P(F)]\end{align*}$$
- Given $F_1,\ldots,F_n$ form a partition of $S$
	- (General Form) $P(E)=\displaystyle\sum_{i=1}^{n}P(E\mid F_i)P(F_i)=\sum_{i=1}^{n}P(EF_i)$
	- $\displaystyle\sum_{i=1}^{n}P(EF_i)=P\left(\bigcup_{i=1}^{n}EF_i\right)$

### Conditional Law of Total Probability
$$P(E\mid F)=P(E\mid GF)P(G\mid F)+P(E\mid G^\complement F)P(G^\complement\mid F)$$

- (General Form) $\displaystyle P(E\mid F)=\sum_{i=1}^{n}P(E\mid G_iF)P(G_i\mid F)$

# Independent Events

- Two events $E$ and $F$ are said to be **independent** if $P(EF)=P(E)P(F)$
	- If $P(E\mid F)=P(E)$, then $E$ and $F$ are independent.
- Two events that are not independent are said to be **dependent**.
- (4.1) If $E$ and $F$ are independent, then so are $E$ and $F^\complement$
- Three events $E$, $F$, and $G$ are said to be **independent** if
	- $P(EFG)=P(E)P(F)P(G)$
	- $P(EF)=P(E)P(F)$
	- $P(EG)=P(E)P(G)$
	- $P(FG)=P(F)P(G)$
- Events $E_1,E_2,\ldots,E_n$ are said to be **independent** if, for every subset $\{F_1,F_2,\ldots,F_k\}\subseteq\{E_1,E_2,\ldots,E_n\}$, we have $\displaystyle P\left(\bigcap_{i=1}^{k}F_i\right)=\prod_{i=1}^{k}P(F_i)$.
- An infinite set of events is said to be **independent** if every finite subset is independent.


- if $E$ and $F$ are mutually exclusive events of an experiment, then, when independent trials of the experiment are performed, the event $E$ will occur before the event $F$ with probability $\displaystyle\frac{P(E)}{P(E)+P(F)}$
- $\displaystyle P_{n,m}=\sum_{k=n}^{m+n-1}\binom{m+n-1}{k}p^k(1-p)^{m+n-1-k}$ is the probability that $n$ successes occur before $m$ failures in a sequence of successes and failures, where $p$ and $1-p$ are the probabilities of success and failure (respectively.) in each trial. 

### Conditional Independence

- Two events $E_1$ and $E_2$ are said to be **conditionally independent** given $F$ if $P(E_1E_2\mid F)=P(E_1\mid F)P(E_2\mid F)$ or equivalently, if $P(E_1\mid E_2F)=P(E_1\mid F)$.

# Odds

- $O(A_1:A_2)=\displaystyle\frac{P(A_1)}{P(A_2)}$
	- $O(A)=\displaystyle\frac{P(A)}{1-P(A)}=\frac{P(A)}{P(A^\complement)}$
- (**Bayes' Rule in Odds Form**) $O(A_1:A_{2}\mid B)=\displaystyle\frac{P(A_1\mid B)}{P(A_2\mid B)}=O(A_1:A_2)\cdot\displaystyle\frac{P(B\mid A_1)}{P(B\mid A_2)}$
- $\displaystyle \frac{P(B\mid A)}{P(B^\complement\mid A)}=\frac{P(B)}{P(B^\complement)}\frac{P(A\mid B)}{P(A\mid B^\complement)}$
- $\Lambda(A_1:A_2\mid B)=\displaystyle\frac{P(B\mid A_1)}{P(B\mid A_2)}$