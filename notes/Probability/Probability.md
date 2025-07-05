A **probability space** is a triple $(S,\mathcal{F},P)$ where:
	
- $S$ is the **sample space** (the set of all possible **outcomes** of an experiment)
	- An **experiment** is a procedure that yields one of a given set of outcomes (i.e. a given subset of the sample space).
	- A **subexperiment** is a step in an experiment. 
		- (Example: If an experiment consists of rolling two dice, then each die roll is a subexperiment.)
		- If each subexperiment of an experiment is indentical–that is, if each subexperiment has the same sub sample space–then the subexperiments are called **trials**.
- $\mathcal{F}$ is a $\sigma$-algebra of **events**
	- Each event $E\in\mathcal{F}$ is a subset of the sample space $S$.
		- An event $E$ is **simple** if it consists of exactly one outcome.
		- An event $E$ is **compound** if it consists of more than one outcome.
		- The empty set $\emptyset$ is an event (impossible event).
		- The sample space $S$ is an event (certain event).
		- Two events $E$ and $F$ are said to be **mutually exclusive** if $P(E\cap F)=0$
			- A sequence of events $E_1,E_2,\ldots$ are said to be mutually exclusive if $P(E_i\cap E_j)=0$
		- Two events $E$ and $F$ are said to be **exhaustive** if $P(E\cup F)=1$ (or equivalently, if $E\cup F=S$). 
			- A sequence of events $E_1,E_2,\ldots$ are said to be exhaustive if $\displaystyle\bigcup_{i=1}^{\infty}E_i=S$.
- $P$ (**Probability Measure**) 
	- A function $P:\mathcal{F}\to[0,1]$, satisfying:
		- $P(S)=1$
		- (Countable Additivity) If $E_1,E_2,\ldots$ are mutually exclusive events, then $\displaystyle P\left(\bigcup_{i=1}^{\infty}E_i\right) = \sum_{i=1}^{\infty}P(E_i)$
	- Consequences:
		- (Monotonicity) $E\subseteq F \implies P(E)\leq P(F)$
		- $P(\emptyset)=0$
		- (Complement Rule, 4.1) $P(E)+P(E^\complement)=1$
		- [[Sets#Set Operations, Relations, and Properties|Disjoint]] events are mutually exclusive
			- $E\cap F = \emptyset \implies P(E\cap F) = 0$
			- If $E_1, E_2, \ldots$ are [[Sets#Set Operations, Relations, and Properties|pairwise disjoint]], then they are mutually exclusive. 
		- $\displaystyle P\left(\bigcap_{i=1}^{n}E_i\right) = 1-P\left(\bigcup_{i=1}^{n}E_i^\complement\right)$ (By 4.1 and De Morgan's Law)
	- Notation for random variables:
		- $P(X=a)=P(\{s\in S:X(s)=a\})$
		- $P(X\in A)=P(\{s\in S:X(s)\in A\})$
		- $P(a\leq X\leq b)=P(\{s\in S:a\leq X(s)\leq b\})$
	- An event $E$ is said to happen **almost surely** (a.s.) if $P(E)=1$. An event $E$ is said to happen **almost never** if $P(E)=0$.

## Counting

- $\displaystyle P(A)=\frac{N(A)}{N}$
- $\displaystyle P(A\cap B)=\frac{N(A\cap B)}{N}$

## Inclusion-Exclusion Principle
$$\displaystyle P(E_1\cup\cdots\cup E_n)=\sum_{i=1}^{n}P(E_i)-\sum_{i<j}P(E_i E_j) + \sum_{i<j<k}P(E_i E_jE_k) + \cdots + (-1)^{n+1}P(E_1 E_2\cdots E_n)$$
Or equivalently,
$$\displaystyle P\left(\bigcup_{i=1}^{n}E_i\right)=\sum_{k=1}^{n}\left((-1)^{k-1}\sum_{I\subset\{1,\ldots,n\}\atop\mid I\mid =k}P\left(\bigcap_{i\in I}E_i\right)\right)$$
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

- If $P(F)>0$, then the **conditional probability** of $E$ given $F$ is defined as: $$\displaystyle P(E\mid F)=\frac{P(EF)}{P(F)}$$
- (2.2) $P(EF) = P(E\mid F)P(F)$
- (**Multiplication Rule**) $\displaystyle P(E_1\cdots E_n) = P(E_1)\prod_{i=2}^{n}P(E_i\mid E_1\cdots E_{i-1})$
- $P(E|F)=1\implies P(F^\complement|E^\complement)=1$
- $P(E|F)=0\implies P(E\cap F)=0$
- If $P(E\cap F)=0$ and $P(E),P(F)>0$, then $E$ and $F$ are not independent.
- If $E$ and $F$ are independent and $P(E),P(F)>0$, then $P(E\cap F)\neq 0$
- $\displaystyle P(A|B)=\frac{P(A\cap B)}{P(B)}=\frac{\frac{N(A\cap B)}{N}}{\frac{N(B)}{N}}=\frac{N(A\cap B)}{N(B)}$
- (Complement Rule for Conditional Probability)
	- $P(E^{\complement}\mid F)+P(E\mid F)=1$
	- $P(E^{\complement}\mid F^\complement)+P(E\mid F^{\complement})=1$
- $P(E\mid F) \leq P(E)\implies P(F\mid E) \leq P(F)$

## Bayes' Theorem
$$\displaystyle \text{Posterior} = \frac{\text{Likelihood}\times\text{Prior}}{\text{Evidence}}$$

- (Simple Form) $\displaystyle P(F\mid E)=\frac{P(E\mid F)P(F)}{P(E)}$
- (Extended Form) $\displaystyle P(F_j\mid E)=\frac{P(E\mid F_j)P(F_j)}{\sum_{i=1}^{n}P(E\mid F_i)P(F_i)}$ for $j=1,\ldots,n$
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

- Two events $E$ and $F$ are said to be **independent** (denoted $E\perp F$) if $P(EF)=P(E)P(F)$
	- If $P(E\mid F)=P(E)$, then $E$ and $F$ are independent.
- Two events that are not independent are said to be **dependent**.
- (4.1) If $E$ and $F$ are independent, then so are $E$ and $F^\complement$
- Three events $E$, $F$, and $G$ are said to be **independent** if
	- $P(EFG)=P(E)P(F)P(G)$
	- $P(EF)=P(E)P(F)$
	- $P(EG)=P(E)P(G)$
	- $P(FG)=P(F)P(G)$
- Events $E_1,E_2,\ldots,E_n$ are said to be **(mutually) independent** if, for every subset $\{F_1,F_2,\ldots,F_k\}\subseteq\{E_1,E_2,\ldots,E_n\}$, we have $\displaystyle P\left(\bigcap_{i=1}^{k}F_i\right)=\prod_{i=1}^{k}P(F_i)$.
- An infinite set of events is said to be **independent** if every finite subset is independent.

- If (i) $P(EF)=P(E)P(F)$, (ii) $P(EG)=P(E)P(G)$, and (iii) $P(FG)=0$, then $P(E(F\cup G))=P(E)P(F\cup G)$
- If (i) $P(EF)=P(E)P(F)$, (ii) $P(FG)=P(F)P(G)$, and (iii) $P(EFG)=P(E)P(FG)$, then $P(EFG)=P(EF)P(G)$


- if $E$ and $F$ are mutually exclusive events of an experiment, then, when independent trials of the experiment are performed, the event $E$ will occur before the event $F$ with probability $\displaystyle\frac{P(E)}{P(E)+P(F)}$
- $\displaystyle P_{n,m}=\sum_{k=n}^{m+n-1}\binom{m+n-1}{k}p^k(1-p)^{m+n-1-k}$ is the probability that $n$ successes occur before $m$ failures in a sequence of successes and failures, where $p$ and $1-p$ are the probabilities of success and failure (respectively.) in each trial. 
- $P(E_1\cup\cdots\cup E_n)=P(E_1^{\complement})P(E_2^{\complement})\cdots P(E_n^{\complement})$

### Conditional Independence

- Two events $E_1$ and $E_2$ are said to be **conditionally independent** given $F$ if $P(E_1E_2\mid F)=P(E_1\mid F)P(E_2\mid F)$ or equivalently, if $P(E_1\mid E_2F)=P(E_1\mid F)$.

# Odds

- Let $P(E),P(F),P(G)\in(0,1)$ denote the probabilities of events $E$ and $F$ and $G$.
	- $\text{Odds}(E)=\displaystyle\frac{P(E)}{1-P(E)}=\frac{\text{Favorable}}{\text{Unfavorable}}$ is called the _odds in favor_ of $E$.
	- $\text{Odds}(E^{\complement})=\displaystyle\frac{1-P(E)}{P(E)}=\frac{\text{Unfavorable}}{\text{Favorable}}$ is called the _odds against_ $E$.
	- $\text{Odds}(E)\cdot\text{Odds}(E^{\complement})=1$
	- $P(E)=\displaystyle\frac{X}{Y}\iff \text{Odds}(E)=\displaystyle\frac{X}{Y-X}$. (Given $0<X<Y$) 
		- $\text{``} X\text{ in }Y\text{ ''}$
		- $\text{`` pays }Y\text{ for }X\text{ ''}$
	- $\displaystyle\text{Odds}(E)=\frac{X}{Y}\iff P(E)=\displaystyle\frac{X}{X+Y}$. (Given $0<X,Y$) 
		- $\text{``Odds in favor of }E\text{ are }X\text{ to }Y\text{ ''}$
		- $\text{``Odds against }E\text{ are }Y\text{ to }X\text{ ''}$
		- $\text{``}X:Y\text{ ''}$
		- $\text{``}X\text{ to }Y\text{ in favor''}$
		- $\text{``}X\text{ to }Y\text{ on''}$
		- $\text{``}Y\text{ to }X\text{ against''}$
		- $\text{`` pays }X\text{ to }Y\text{ ''}$
	- (**Bayes' Theorem in Odds Form**)
		- $\displaystyle\frac{P(E)P(F^\complement)}{P(E^\complement)P(F)}$ is called the **odds ratio** of $E$ and $F$.
		- $O(E:F\mid G)=\displaystyle \frac{P(E\mid G)}{P(F\mid G)}$ is called the **posterior odds**
		- $\Lambda(E:F\mid G)=\displaystyle \frac{P(G\mid E)}{P(G\mid F)}$ is called the **likelihood ratio** (or **Bayes factor**) 
		- $O(E:F)=\displaystyle\frac{P(E)}{P(F)}$ is called the **prior odds**
		- $\text{Posterior odds}=\text{Likelihood ratio}\times\text{Prior odds}$
		- $\displaystyle O(E:F\mid G)=\Lambda(E:F\mid G)O(E:F)$
		- $\displaystyle \frac{P(E\mid G)}{P(F\mid G)}=\frac{P(G\mid E)}{P(G\mid F)}\frac{P(E)}{P(F)}$

