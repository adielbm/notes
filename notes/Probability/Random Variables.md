
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
- The **expected value** (or **expectation** or **mean**) of a discrete random variable $X$ with probability mass function $p(x)$ is defined as $\displaystyle E[X]=\sum_{x:p(x)>0}xp(x)$. 
	- The expected value is the [[Means|weighted arithmetic mean]] of the possible values of $X$ where the weights are the probabilities of the values.
	- $\displaystyle E[g(X)]=\sum_{i}g(x_i)p(x_i)$
	- $\displaystyle E[aX+b]=aE[X]+b$
	- $E[X^n] = \displaystyle\sum_{x:p(x)>0}x^np(x)$
- The **variance** of a random variable $X$ is defined as $\displaystyle \text{Var}(X)=E[(X-E[X])^2]$
	- $\displaystyle \text{Var}(X)=E[X^2]-E[X]^2$
	- $\displaystyle \text{Var}(aX+b)=a^2\text{Var}(X)$
- The **standard deviation** (denoted by $\sigma$) of a random variable $X$ is defined as $\displaystyle \text{SD}(X)=\sqrt{\text{Var}(X)}$
 
### Discrete Distributions

- $p$ is probability of success

| **Distribution**                                                                                                                             | $\operatorname{supp}(X)$                                                                    | PMF                                                                       | $E(X)$                                        | $\text{Var}(X)$                                                                    | CDF                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| $\text{Uniform}(a,b)$, <br>$n=b-a+1$                                                                                                         | $k\in\{a,a+1,\dots,b-1,b\}$                                                                 | $P(X = k) = \frac{1}{n}$                                                  | $\frac{a+b}{2}$                               | $\frac{n^2 - 1}{12}$                                                               | $F(k) = \frac{\lfloor k \rfloor -a+1}{n}$                                  |
| $\text{Uniform}(\{ x_{1},\dots,x_{n} \})$                                                                                                    | $k\in\{ x_{1},\dots,x_{n} \}$                                                               | $P(X = k) = \frac{1}{n}$                                                  | $\displaystyle\frac{1}{n} \sum_{i=1}^{n} x_i$ |                                                                                    |                                                                            |
| $\text{Bernoulli}(p)$                                                                                                                        | $x\in\{\underset{\textsf{\color{gray}fail.}}{0},\underset{\textsf{\color{gray}succ.}}{1}\}$ | $P(X = x)=p^x(1-p)^{1-x}$                                                 | $p$                                           | $p(1 - p)$                                                                         | $F(x) = \begin{cases} 0, & x < 0 \\ 1 - (1 - p)^x, & x \geq 0 \end{cases}$ |
| $\text{Binomial}(\underset{\textsf{\color{gray}trials}}{n}, p)$<br>(Run $n$ i.i.d. Ber(p) trials)                                            | $\underset{\textsf{\color{gray}successes}}{k}\in\{0,1,\dots ,n\}$                           | $P(X = k) = \binom{n}{k} p^k (1 - p)^{n-k}$                               | $np$                                          | $np(1 - p)$                                                                        | $\displaystyle F(x) = \sum_{k=0}^x \binom{n}{k} p^k (1 - p)^{n-k}$         |
| $\text{NB}(\underset{\textsf{\color{gray}successes}}{r}, p)$<br>(Run i.i.d. Ber($p$) trials until $r$th suc.)                                | $\underset{\textsf{\color{gray}trials}}{n}\in\{r,r+1,\dots\}$                               | $\displaystyle P(X = n) = \binom{n-1}{r-1} (1-p)^{n-r} p^r$               |                                               |                                                                                    |                                                                            |
| $\text{Geo}(p)$<br>(Run i.i.d. Ber($p$) trials until $1$st suc.)                                                                             | $\underset{\textsf{\color{gray}trials}}{n}\in\{1,2,\dots\}$                                 | $P(X = n) = (1-p)^{n-1} p$                                                | $\frac{1}{p}$                                 | $\frac{1-p}{p^2}$                                                                  |                                                                            |
| $\text{Pois}(\underset{\textsf{\color{gray}rate}}{\lambda})$                                                                                 | $\underset{\textsf{\color{gray}events}}{k}\in\{0,1,\dots \}$                                | $\displaystyle P(X = k) = \frac{\lambda^k e^{-\lambda}}{k!}$              | $\lambda$                                     | $\lambda$                                                                          | $\displaystyle F(x) = \sum_{k=0}^x \frac{\lambda^k e^{-\lambda}}{k!}$      |
| $\text{Hypergeo}(\underset{\textsf{\color{gray}pop.}}{N},\underset{\textsf{\color{gray}succ.}}{K},\underset{\textsf{\color{gray}draws}}{n})$ | $\small{\underset{\textsf{\color{gray}observed}}{k}\in\{\max(0,n+K-N),\dots,\min(n,K)\}}$   | $\displaystyle P(X=k)=\frac{\binom{K}{k} \binom{N-K}{n-k}}{\binom{N}{n}}$ | $\displaystyle n\frac{K}{N}$                  | $n \cdot \frac{K}{N} \cdot \left(1 - \frac{K}{N}\right) \cdot \frac{N - n}{N - 1}$ |                                                                            |

#### Poisson

- (Average Rate of Occurrence) $\displaystyle\lambda=\frac{\text{Total number of occurrences}}{\text{Total observed time or space}}$
- $\displaystyle\lambda=\sum_{i=1}^{n}p_i$
- $\displaystyle \lambda\approx \bar{X}=\frac{1}{n}\sum_{i=1}^{n}X_i$
- (Binomial Approximation) If $n$ is large, $p$ is small, and $\lambda=np$, then $\text{Binom}(n,p)\approx\text{Pois}(\lambda)$
- $\displaystyle\frac{P(X=k+1)}{P(X=k)}=\frac{\lambda}{k+1}$
- If $X_i\sim\text{Pois}(\lambda_{i})$ then $\displaystyle X=\sum_{i=1}^{n}X_i\sim\text{Pois}(\lambda_{1}+\cdots+\lambda_{n})$

##### Poisson Process

- A set of random variables $\{N(t),t\geq 0\}$ (where $N(t)\in\mathbb{N}_{0}$) is the number of events in the interval $[0,t]$) is said to be a **Poisson process** having rate $\lambda$ (where $\lambda>0$) if:
	- (Initial Condition) $N(0)=0$ 
	- (Independent Increments) For $0\leq t_1<t_2<\cdots<t_n$, the random variables $N(t_2)-N(t_1),\ldots,N(t_n)-N(t_{n-1})$ are independent.
	- (Stationary Increments) For all $s,t\geq 0$, and $k\in\mathbb{N}_{0}$, we have $P(N(s+t)-N(s)=k)=P(N(t)=k)$
	- $\displaystyle P(N(h)=1)=\lambda h+o(h)$
	- $\displaystyle P(N(h)\geq 2)=o(h)$
- Let $\{N(t),t\geq 0\}$ be a Poisson process with rate $\lambda$.
	- $P(N(t)=0)=e^{-\lambda t}$ 
	- $P(N(t)=k)=\displaystyle\frac{(\lambda t)^k}{k!}e^{-\lambda t}$
	- $\forall s,t\geq 0,N(s+t)-N(s)\sim\text{Pois}(\lambda t)$


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







### Continuous Distributions


| **Distribution**                     | PDF                                                                                          | $E(X)$              | **Var(X)**             | **CDF**                                                                                             | **MGF** |
| ------------------------------------ | -------------------------------------------------------------------------------------------- | ------------------- | ---------------------- | --------------------------------------------------------------------------------------------------- | ------- |
| $\text{Uniform}(a,b)$                | $f(x) = \frac{1}{b - a}$                                                                     | $\frac{a + b}{2}$   | $\frac{(b - a)^2}{12}$ | $\displaystyle F(x) = \frac{x - a}{b - a}$                                                          |         |
| $\mathcal{N}(\mu,\sigma^2)$ (Normal) | $f(x) = \frac{1}{\sigma\sqrt{2\pi}}\cdot\exp\left( {-\frac{(x - \mu)^2}{2\sigma^2}} \right)$ | $\mu$               | $\sigma^2$             |                                                                                                     |         |
| $\mathcal{N}(0,1)$ (Standard Normal) | $\varphi(x) = \frac{1}{\sqrt{2\pi}}\cdot\exp\left( {-\frac{x^2}{2}} \right)$                 | 0                   | 1                      | $\Phi(x)=\displaystyle\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{x}\exp\left( {-\frac{t^2}{2}} \right)dt$ |         |
| $\text{Exp}(\lambda)$                | $f(x)=\lambda e^{-\lambda x}$ (for $x>0$)                                                    | $\frac{1}{\lambda}$ | $\frac{1}{\lambda^2}$  | $1-e^{-\lambda x}$                                                                                  |         |


- (4.3, Symmetry) $\Phi(-x)=1-\Phi(x)$
- If $\displaystyle Z=\frac{X-\mu}{\sigma}$ then $Z\sim\mathcal{N}(0,1)\iff X\sim\mathcal{N}(\mu,\sigma^2)$
- $\displaystyle P(a<Z<b)=\Phi(b)-\Phi(a)$


- (**De Moivre–Laplace theorem**) If $X_{n}\sim\mathrm{Bin}(n,p)$ and $Z_{n}=\displaystyle\frac{X_{n}-np}{\sqrt{np(1-p)}}$, then $\displaystyle\lim_{ n \to \infty }P\left( a\leq Z_{n} \leq b \right)=P(a\leq Z\leq b)=\Phi(b)-\Phi(a)$

- Let $X\sim\text{Bin}(n,p)$ and $k\in\{0,1,\ldots,n\}$, then $\displaystyle P(X=k)\approx\Phi\left( \frac{k+0.5-\mu}{\sigma} \right)-\Phi\left( \frac{k-0.5-\mu}{\sigma} \right)$ where:
	- $\mu=np$
	- $\sigma=\sqrt{np(1-p)}$


## Jointly Distributed Random Variables

- $X$ and $Y$
	- $p(i,j)=P(X=i,Y=j)$ is the **joint PMF** of $X$ and $Y$
	- $\displaystyle P(X=i)=\sum_{j}p(i,j)$ is the **marginal PMF** of $X$
	- $\displaystyle P(Y=j)=\sum_{i}p(i,j)$ is the **marginal PMF** of $Y$
### Multinomial

- If $\displaystyle P(X_1=n_1,\ldots,X_r=n_r) = \frac{n!}{n_1!\cdots n_r!}p_1^{n_1}\cdots p_r^{n_r}$, then $X_1,\ldots,X_r$ are said to be **jointly multinomial**, where:
	- $n=n_1+\cdots+n_r$
	- $p_1+\cdots+p_r=1$
- If $X_1,\ldots,X_r$ are jointly multinomial, then: - 
	- $X_i\sim\text{Bin}(n,p_i)$
	- $X_1,\ldots,X_r$ are dependent
	- For all $i\neq j$, $X_i+X_j\sim\text{Bin}(n,p_i+p_j)$
	- If $r=2$, then $X\sim\text{Bin}(n,p_1)$

### Independence

- $X$ and $Y$ are said to be **independent** if $P(X=x,Y=y)=P(X=x)P(Y=y)$ for all $x,y$, otherwise they are **dependent**.
	- If $X$ and $Y$ are independent, iff, their joint PMF can be written as $p_{X,Y}(x,y)=h(x)g(y)$ for some functions $h$ and $g$.
	- $X_1,\ldots,X_n$ are said to be **(mutually) independent** if $P(X_1=x_1,\ldots,X_n=x_n)=P(X_1=x_1)\cdots P(X_n=x_n)$ for all $x_1,\ldots,x_n$
- If $X_i\sim \text{Pois}(\lambda_i)$, and $X_i$ are independent, then $\displaystyle X=\sum_{i=1}^{n}X_i\sim\text{Pois}(\lambda_1+\cdots+\lambda_n)$
- If $X_i\sim \text{Bin}(n_i,p)$, and $X_i$ are independent, then $\displaystyle X=\sum_{i=1}^{n}X_i\sim\text{Bin}(n_1+\cdots+n_n,p)$
- The **conditional PMF** of $X$ given $Y=y$ is defined as $p_{X|Y}(x|y)=\displaystyle P(X=x|Y=y)=\frac{P(X=x,Y=y)}{P(Y=y)}=\frac{p(x,y)}{p_{Y}(y)}$, where $p$ is the joint PMF of $X$ and $Y$, and $p_{Y}$ is the marginal PMF of $Y$, and $p_{Y}(y)>0$.

### Continuous

- $X$ and $Y$ are said to be **jointly continuous** if there exists a function $f(x,y)$ such that $\displaystyle P((X,Y)\in C)=\iint_{C}f(x,y)\,dx\,dy$ for all sets $C\subseteq\mathbb{R}^2$.
- The function $f(x,y)$ is called the **joint probability density function** of $X$ and $Y$.
- $\displaystyle P(X \in A,Y \in B)=\int _{A}\int_{B}f(x,y)\,dx\,dy$ (where $A,B\subseteq\mathbb{R}$)
	- $\displaystyle P(X\in A)=\int_{A}\int_{-\infty}^{\infty}f(x,y)\,dy\,dx=\int_{A}f_{X}(x)\,dx$
	- $\displaystyle P(Y\in B)=\int_{B}^{}\int_{-\infty}^{\infty}f(x,y)\,dx\,dy=\int_{B}f_{Y}(y)\,dy$
- $\displaystyle F(a,b)=P(X\leq a,Y\leq b)=\int_{-\infty}^{a}\int_{-\infty}^{b}f(x,y)\,dx\,dy$
- $\displaystyle f(a,b)=\frac{\partial^2}{\partial a \partial b}F(a,b)$


