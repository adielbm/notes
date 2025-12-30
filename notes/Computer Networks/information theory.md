

- $A_s=\{s_1,s_2, \ldots, s_\alpha\}$ is the set of source symbols
- (**message**) $s=(s_1, s_2, \ldots, s_k)\in A_s^k$ 
- (**channel input**) $x=g(s)$
	- $A_x=\{x_1,x_2, \ldots, x_m\}$ is the set of channel input symbols
	- $x=(x_1, x_2, \ldots, x_n) \in A_x^n$ is a sequence of **codewords** 
- $p(X)=\{p(x_1), p(x_2), \ldots, p(x_m)\}$ 
- (**channel output**) $y=(y_1, y_2, \ldots, y_n) \in A_y^n$
	- $A_y=\{y_1,y_2, \ldots, y_m\}$ is the set of channel output symbols


# Self-information

- $I(x)= -\log p(x)$ is the **self-information** (or **information content**) of outcome $x$
	- (It measures how surprising or informative the specific outcome $x$ is. If $p(x)$ is small, then observing $x$ is rare and thus carries more information, so $I(x)$ is large. Conversely, if $p(x)$ is large, then observing $x$ is common and carries less information, so $I(x)$ is small.)
	- $I(x) \geq 0$
	- $I(x, y) = I(x) + I(y)$ 

# Entropy

The **(Shannon) entropy** of $X$ is defined as $$\displaystyle H(X)= - \sum_{x \in \mathcal{X}} p(x)\,\log p(x).$$
- $X$ is a discrete random variable
- $\mathcal{X}$ is a countable set of all possible outcomes of $X$
- $p(x)$ is the probability of outcome $x$
- $H(X)=\mathbb{E}[I(X)]$
- $H(X) \geq 0$
- $H(X)\leq \log |\mathcal{X}|$, with equality if and only if $X$ is uniformly distributed over $\mathcal{X}$
- $H(X, Y) = H(X) + H(Y)$ 


- (examples)
	- (deterministic variable) Let $\displaystyle p(x_0)=1$ for some $x_0 \in \mathcal{X}$, then $H(X)=0$
	- (uniform distribution) Let $\displaystyle p(x)=\frac{1}{n}$ for all $x \in \mathcal{X}$, where $|\mathcal{X}|=n$, then $\displaystyle H(X)=\log n$
		- (fair die) If $n=6$, then $\displaystyle H(X)=\log 6 \approx 2.585$
	- (binary variable) Let $\displaystyle p(0)=p$ and $\displaystyle p(1)=1-p$, then $\displaystyle H(X)=-p\log p - (1-p)\log(1-p)$
		- (fair coin) If $p=\frac{1}{2}$, then $\displaystyle H(X)=1$

- (**Shannon's source coding theorem**) 
- $\displaystyle {\frac {H(X)}{\log _{2}a}}\leq \mathbb {E} [S]<{\frac {H(X)}{\log _{2}a}}+1$
