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
		- [[Set theory#Set Operations, Relations, and Properties|Disjoint]] events are mutually exclusive
			- $E\cap F = \emptyset \implies P(E\cap F) = 0$
			- If $E_1, E_2, \ldots$ are [[Set theory#Set Operations, Relations, and Properties|pairwise disjoint]], then they are mutually exclusive. 
		- $\displaystyle P\left(\bigcap_{i=1}^{n}E_i\right) = 1-P\left(\bigcup_{i=1}^{n}E_i^\complement\right)$ (By 4.1 and De Morgan's Law)
	- Notation for random variables:
		- $P(X=a)=P(\{s\in S:X(s)=a\})$
		- $P(X\in A)=P(\{s\in S:X(s)\in A\})$
		- $P(a\leq X\leq b)=P(\{s\in S:a\leq X(s)\leq b\})$

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
If for every $I\subset\{1,\ldots,n\}$, $\displaystyle a_k=P(E_I)$, where $k=\mid I\mid$, then $\displaystyle P\left(\bigcup_{i=1}^{n}E_i\right)=\sum_{k=1}^{n}(-1)^{k-1}\binom{n}{k}a_k$
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

- $O(A_1:A_2)=\displaystyle\frac{P(A_1)}{P(A_2)}$
	- $O(A)=\displaystyle\frac{P(A)}{1-P(A)}=\frac{P(A)}{P(A^\complement)}$
- (**Bayes' Rule in Odds Form**) $O(A_1:A_{2}\mid B)=\displaystyle\frac{P(A_1\mid B)}{P(A_2\mid B)}=O(A_1:A_2)\cdot\displaystyle\frac{P(B\mid A_1)}{P(B\mid A_2)}$
- $\displaystyle \frac{P(B\mid A)}{P(B^\complement\mid A)}=\frac{P(B)}{P(B^\complement)}\frac{P(A\mid B)}{P(A\mid B^\complement)}$
- $\Lambda(A_1:A_2\mid B)=\displaystyle\frac{P(B\mid A_1)}{P(B\mid A_2)}$


____

- $P(E\mid F) \leq P(E)\implies P(F\mid E) \leq P(F)$

# Random Variables

- A **random variable** is a function $X:S\to\mathbb{R}$ that assigns a real number to each outcome in the sample space $S$.
- The **cumulative distribution function** (CDF) of a random variable $X$ is the function defined by $F(x)=P(X\leq x)$
	- $F$ is nondecreasing.
	- $\displaystyle\lim_{x\to-\infty}F(x)=0$ and $\displaystyle\lim_{x\to\infty}F(x)=1$
	- $\forall x \in \mathbb{R},\, 0\leq F(x)\leq 1$
	- $F$ is right continuous.
- A **mode** of a random variable $X$ is a value $x_0$ such that $p(x_0)\geq p(x)$ for all $x$, where $p$ is the pmf or pdf of $X$.
- The **median** of a random variable $X$ is a value $m$ such that $P(X\leq m)\geq \frac{1}{2}$ and $P(X\geq m)\geq \frac{1}{2}$.

## Discrete Random Variables

- A **discrete random variable** is a random variable $X$, whose image, $X(S)=\{X(s):s\in S\}$, is a countable set.
	- The **support** of a discrete random variable $X$ is the set $\{x\in\mathbb{R}:P(X=x)>0\}$
- Let $X$ be a discrete random variable with CDF $F$.
	- $\displaystyle F(x)=P(X\leq x)=\sum_{t\leq x}P(X=t)$
	- $F(x)$ is a step function with jumps at the values of $X$.
	- The **probability mass function** (PMF) of $X$ is the function $p:\mathbb{R}\to[0,1]$ defined by $p(a)=P\{X=a\}$
		- $\displaystyle\sum_{x}p(x)=1$
		- $\forall x,\, 0\leq p(x)\leq 1$
		- $\forall x \notin X(S),\, p(x)=0$
		- $p(x)=F(x)-\displaystyle\lim_{t\to x^-}F(t)$
		- $\displaystyle P(a< X\leq b)=F(b)-F(a)$
		- $\displaystyle P(X<b)=\lim_{n\to\infty}F\left(b-\frac{1}{n}\right)$

### Expected Value

- The **expected value** (or **expectation** or **mean**) of a discrete random variable $X$ with probability mass function $p(x)$ is defined as $\displaystyle E[X]=\sum_{x:p(x)>0}xp(x)$. 
	- The expected value is the [[Means|weighted arithmetic mean]] of the possible values of $X$ where the weights are the probabilities of the values.
- $\displaystyle E[g(X)]=\sum_{i}g(x_i)p(x_i)$
- If $a$ and $b$ are constants, then $\displaystyle E[aX+b]=aE[X]+b$
- $E[X^n] = \displaystyle\sum_{x:p(x)>0}x^np(x)$
### Variance

- The **variance** of a random variable $X$ is defined as $\displaystyle \text{Var}(X)=E[(X-E[X])^2]$
- $\displaystyle \text{Var}(X)=E[X^2]-E[X]^2$
- $\displaystyle \text{Var}(aX+b)=a^2\text{Var}(X)$
- The **standard deviation** (denoted by $\sigma$) of a random variable $X$ is defined as $\displaystyle \text{SD}(X)=\sqrt{\text{Var}(X)}$
 
### Discrete Distributions

| **Distribution**                                                                                                                             | $\operatorname{supp}(X)$                                                                    | PMF                                                                       | $E(X)$                       | $\text{Var}(X)$      | CDF                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ---------------------------- | -------------------- | -------------------------------------------------------------------------- |
| $\text{Uniform}(a,b)$                                                                                                                        | $k\in\{a,a+1,\dots,b-1,b\}$                                                                 | $P(X = k) = \frac{1}{n}$                                                  | $\frac{n + 1}{2}$            | $\frac{n^2 - 1}{12}$ | $F(k) = \frac{k}{n}$                                                       |
| $\text{Bernoulli}(p)$                                                                                                                        | $x\in\{\underset{\textsf{\color{gray}fail.}}{0},\underset{\textsf{\color{gray}succ.}}{1}\}$ | $P(X = x)=p^x(1-p)^{1-x}$                                                 | $p$                          | $p(1 - p)$           | $F(x) = \begin{cases} 0, & x < 0 \\ 1 - (1 - p)^x, & x \geq 0 \end{cases}$ |
| $\text{Binomial}(\underset{\textsf{\color{gray}trials}}{n}, p)$                                                                              | $\underset{\textsf{\color{gray}successes}}{k}\in\{0,1,\dots ,n\}$                           | $P(X = k) = \binom{n}{k} p^k (1 - p)^{n-k}$                               | $np$                         | $np(1 - p)$          | $\displaystyle F(x) = \sum_{k=0}^x \binom{n}{k} p^k (1 - p)^{n-k}$         |
| $\text{NB}(\underset{\textsf{\color{gray}successes}}{r}, p)$                                                                                 | $\underset{\textsf{\color{gray}trials}}{n}\in\{r,r+1,\dots\}$                               | $\displaystyle P(X = n) = \binom{n-1}{r-1} (1-p)^{n-r} p^r$               |                              |                      |                                                                            |
| $\text{Pois}(\underset{\textsf{\color{gray}rate}}{\lambda})$                                                                                 | $\underset{\textsf{\color{gray}events}}{k}\in\{0,1,\dots \}$                                | $\displaystyle P(X = k) = \frac{\lambda^k e^{-\lambda}}{k!}$              | $\lambda$                    | $\lambda$            | $\displaystyle F(x) = \sum_{k=0}^x \frac{\lambda^k e^{-\lambda}}{k!}$      |
| $\text{Geo}(p)$                                                                                                                              | $\underset{\textsf{\color{gray}trials}}{n}\in\{1,2,\dots\}$                                 | $P(X = n) = (1-p)^{n-1} p$                                                | $\frac{1}{p}$                | $\frac{1-p}{p^2}$    |                                                                            |
| $\mathcal{N}(\mu,\sigma^2)$                                                                                                                  |                                                                                             |                                                                           |                              |                      |                                                                            |
| $\text{Hypergeo}(\underset{\textsf{\color{gray}pop.}}{N},\underset{\textsf{\color{gray}succ.}}{K},\underset{\textsf{\color{gray}draws}}{n})$ | $\underset{\textsf{\color{gray}observed}}{k}\in\{\max(0,n+K-N),\dots,\min(n,K)\}$           | $\displaystyle P(X=k)=\frac{\binom{K}{k} \binom{N-K}{n-k}}{\binom{N}{n}}$ | $\displaystyle n\frac{K}{N}$ |                      |                                                                            |

- Poisson:
	- (Average Rate of Occurrence) $\displaystyle\lambda=\frac{\text{Total number of occurrences}}{\text{Total observed time or space}}$
	- $\displaystyle\lambda=\sum_{i=1}^{n}p_i$
	- $\displaystyle \lambda\approx \bar{X}=\frac{1}{n}\sum_{i=1}^{n}X_i$
	- (Binomial Approximation) If $n$ is large, $p$ is small, and $\lambda=np$, then $\text{Binom}(n,p)\approx\text{Pois}(\lambda)$
	- $\displaystyle\frac{P(X=k+1)}{P(X=k)}=\frac{\lambda}{k+1}$
- Geometric:
	- $\displaystyle P(X\geq k)=(1-p)^{k-1}$
- Speical Cases:
	- $\text{Binomial}(1,p)=\text{Bernoulli}(p)$
	- $\text{Geometric}(p)=\text{NB}(1,p)$
- Hypergeometric:
	- If $p=\displaystyle\frac{K}{N}$, then $\displaystyle E[X]=n\frac{K}{N}=np$
		- If $N$ is large in relation to $n$, then $\text{Var}(X)\approx np(1-p)$

## Continuous Random Variables

- A **continuous random variable** is a random variable $X$, whose image, $X(S)=\{X(s):s\in S\}$, is an uncountable set.
- Let $X$ be a continuous random variable with CDF $F$.
	- $F(x)$ is a continuous function.
	- $\displaystyle f(x)=\frac{d}{dx}F(x)$ (the PDF of $X$ is the derivative of the CDF of $X$)
	- The **probability density function** (PDF) of $X$ is the function $f:\mathbb{R}\to[0,\infty)$ defined by $\displaystyle f(x)=\frac{d}{dx}F(x)$
		- $\displaystyle\int_{-\infty}^{\infty}f(x)dx=1$
		- $\forall x,\, f(x)\geq 0$
		- $\displaystyle P(X\in B)=\int_{B}f(x)dx$
			- $\displaystyle P(a\leq X\leq b)=\int_{a}^{b}f(x)dx$
- The **expected value** of a continuous rv $X$ with PDF $f(x)$ is defined as $\displaystyle E[X]=\int_{-\infty}^{\infty}xf(x)dx$.
	- (2.1) $\displaystyle E[g(X)]=\int_{-\infty}^{\infty}g(x)f(x)dx$
	- (c2.1) $E[aX+b]=aE[X]+b$
- The **variance** of a continuous rv $X$ is defined as $\displaystyle \text{Var}(X)=E[(X-E[X])^2]=E[X^2]-E[X]^2$
	- $\displaystyle \text{Var}(X)=\int_{-\infty}^{\infty}(x-\mu)^2f(x)dx=\int_{-\infty}^{\infty}x^2f(x)dx-\mu^2$ 
	- (c2.1) $\displaystyle \text{Var}(aX+b)=a^2\text{Var}(X)$





| **Distribution**                     | PDF                                                                                          | $E(X)$            | **Var(X)**             | **CDF**                                                                                             | **MGF** |
| ------------------------------------ | -------------------------------------------------------------------------------------------- | ----------------- | ---------------------- | --------------------------------------------------------------------------------------------------- | ------- |
| $\text{Uniform}(a,b)$                | $f(x) = \frac{1}{b - a}$                                                                     | $\frac{a + b}{2}$ | $\frac{(b - a)^2}{12}$ | $\displaystyle F(x) = \frac{x - a}{b - a}$                                                          |         |
| $\mathcal{N}(\mu,\sigma^2)$ (Normal) | $f(x) = \frac{1}{\sigma\sqrt{2\pi}}\cdot\exp\left( {-\frac{(x - \mu)^2}{2\sigma^2}} \right)$ | $\mu$             | $\sigma^2$             |                                                                                                     |         |
| $\mathcal{N}(0,1)$ (Standard Normal) | $\varphi(x) = \frac{1}{\sqrt{2\pi}}\cdot\exp\left( {-\frac{x^2}{2}} \right)$                 | 0                 | 1                      | $\Phi(x)=\displaystyle\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{x}\exp\left( {-\frac{t^2}{2}} \right)dt$ |         |

- (4.3, Symmetry) $\Phi(-x)=1-\Phi(x)$
- If $\displaystyle Z=\frac{X-\mu}{\sigma}$ then $Z\sim\mathcal{N}(0,1)\iff X\sim\mathcal{N}(\mu,\sigma^2)$
- $\displaystyle P(a<Z<b)=\Phi(b)-\Phi(a)$


- (**De Moivre–Laplace theorem**) If $X_{n}\sim\mathrm{Bin}(n,p)$ and $Z_{n}=\displaystyle\frac{X_{n}-np}{\sqrt{np(1-p)}}$, then $\displaystyle\lim_{ n \to \infty }P\left( a\leq Z_{n} \leq b \right)=P(a\leq Z\leq b)=\Phi(b)-\Phi(a)$

- Let $X\sim\text{Bin}(n,p)$ and $k\in\{0,1,\ldots,n\}$, then $\displaystyle P(X=k)\approx\Phi\left( \frac{k+0.5-\mu}{\sigma} \right)-\Phi\left( \frac{k-0.5-\mu}{\sigma} \right)$ where:
	- $\mu=np$
	- $\sigma=\sqrt{np(1-p)}$


# Todo
#### **Chapter 5: Continuous Random Variables**

- Continuous Random Variables
	- Probability Density Function
	- Expectation & Variance
- The Uniform Random Variable
- Exponential Random Variables
	- Memorylessness Property
- Normal Random Variables
	- Standard normal random variable
- ~~Other Continuous Distributions (Gamma, Weibull, Cauchy, Beta)~~
- ~~The Distribution of a Function of a Random Variable~~
#### **Chapter 6: Jointly Distributed Random Variables**

- Independent Random Variables
- Joint Distribution Functions
- Joint Probability Function
- Joint Probability Density Function (PDF)
- Joint Cumulative Distribution Function (CDF)
- Joint Distribution of Independent Variables
- Joint Variance
- Sums of Independent Random Variables
- Conditional Distributions
- Discrete Case
- Continuous Case
- Binomial Random Variables
- Geometric Random Variables
- Poisson Random Variables
- Negative Binomial Random Variables
- Hypergeometric Random Variables