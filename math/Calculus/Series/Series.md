-  An **(infinite) series** is an expression that can be written in the form $\displaystyle\sum _{n=1}^{\infty}a_n=a_{1}+a_{2}+\dots+ a_{n}+\dots$ where $(a_{n})$ is a sequence

	- The sequence $(a_{n})$ is **sequence of terms** of the series. 
		- The number $a_n$ is called the $n$-th **term** of the series.
	- The sequence $(s_n)$ defined by $s_n=\sum_{k=1}^{n}a_k$ is called the **sequence of partial sums** of the series. 
		- The number $s_n$ is called the **$n$-th partial sum** of the series.
	- If $s_n\to L \in\mathbb{R}$, we say the series **converges**, and $L$ is its **sum**, and write $$a_1+a_2+a_3+\cdots=\sum_{n=1}^{\infty}a_n=\lim_{ n \to \infty }\underbrace{\sum _{k=1}^{n}a_k}_{s_{n}}=L$$
	- If the sequence of partial sums $(s_n)$ diverges, then we say that the series **diverges**.  
		- If $\displaystyle\lim_{n\to\infty}s_n=\infty$, then we say that the series **diverges to infinity**. And denote its sum by $\sum_{n=1}^{\infty}a_n=\infty$. 
		- If $\displaystyle\lim_{n\to\infty}s_n=-\infty$, then we say that the series **diverges to negative infinity**. And denote its sum by $\sum_{n=1}^{\infty}a_n=-\infty$.
## Convergence Absolutely

- (d5.7) A series $\sum_{n=1}^{\infty}a_n$ is said to **converge absolutely** if the series of absolute values $\sum_{n=1}^{\infty}|a_n|$ converges.
- (d5.8) A series $\sum_{n=1}^{\infty}a_n$ is said to **converge conditionally** if it converges but does not converge absolutely.
- (5.24a) The series $\sum a_n$ converges absolutely if and only if the series $\sum a_n^+$ and $\sum a_n^-$ converge.
    - ($\sum a_n^+$ and $\sum a_n^-$ are called the **positive** and **negative** parts of the series $\sum a_n$ respectively.)
- (5.24b) If $\sum a_n$ converges conditionally, then $\sum a_n^+$ and $\sum a_n^-$ diverge to $\infty$.

> Related Convergence Tests: [[Convergence Tests#Absolute Convergence Test|Absolute Convergence Test]], [[Convergence Tests#Root test (Cauchy)|Root test]], [[Convergence Tests#Ratio test (d'Alembert)|Ratio test]] 

## Bounded Series

- (d5.21) A series $\sum a_n$ is said to be **bounded** if the sequence of partial sums $(s_n)$ is bounded.
	- (q5.31) Every convergent series is bounded.
	- (q5.33) for $\theta\neq2\pi m$ for any integer $m$, the series $\sum\sin n\theta$ and $\sum\cos n\theta$ are bounded
	- see [[Convergence Tests#Dirichlet's Test|Dirichlet's Test]] 
# Theorems & Properties

- Additivity 
	- (5.9) If $\sum a_n$ and $\sum b_n$ converge, then $\sum (a_n\pm b_n)$ converges and $\sum (a_n\pm b_n)=\sum a_n\pm\sum b_n$.
	- If $\sum a_n$ absolutely converge, $\sum b_n$ conditionally converge, then $\sum (a_n+b_n)$ conditionally converge.
- Multiplication by a constant 
	- (5.10) - If $c\neq0$, then $\sum_{k=1}^{\infty}a_k$ converges if and only if $\sum_{k=1}^{\infty}ca_k$ converges. (in this case, $\sum_{k=1}^{\infty}ca_k=c\sum_{k=1}^{\infty}a_k$. )
	- (q5.12) If $\sum_{k=1}^{\infty}a_k=\infty$, and $c>0$, then $\sum_{k=1}^{\infty}ca_k=\infty$.  

- (q5.16) Given a convergent series $\sum_{k=1}^{\infty}a_k$, then $\left( {\sum_{k=n+1}^{\infty}a_k} \right)$ is a null sequence (i.e. the **tail** of a convergent series tends to zero)
## Rearranging (Commutativity)

- A series $\sum a_n$ is a **rearrangement** of a series $\sum b_n$ if there exists a bijection $\sigma:\mathbb{N}\to\mathbb{N}$ such that $a_n=b_{\sigma(n)}$ for all $n\in\mathbb{N}$.
- Given $\sum b_n$ is a rearrangement of $\sum a_n$
	- (5.25) If $a_n\geq 0$, then $\sum b_n$ converges if and only if $\sum a_n$ converges.
	- (5.26) $\sum a_n$ converges absolutely if and only if $\sum b_n$ converges absolutely. 
	- In these two cases, $\sum a_n=\sum b_n$.
- Riemann series theorem #todo 
	- (5.27) If $\sum a_n$ converges conditionally, then: 
		- For every $S\in\mathbb{R}$, there exists a rearrangement series of $\sum a_n$ such that $S$ is its sum. 
		- There exists rearrangement series of $\sum a_n$ that diverge to $\infty$ and $-\infty$.
		- There exists a rearrangement series of $\sum a_n$ that diverges. (not to $\infty$ or $-\infty$)
	- (5.27') If $\sum a_n$ converges conditionally, and $A\leq B$ are real numbers, then there exists a rearrangement series of $\sum a_n$ such that $A$ is the limit inferior of the partial sums and $B$ is the limit superior of the partial sums. (the same is true for $A=-\infty$ and $B=\infty$)

## Inserting Parentheses (Associativity)

- If $\sum a_n$ converges, then every series obtained by inserting parentheses, converges to the same sum.

- (5.11) If $\sum a_k$ is a convergent series. And $(k_i)$ is an increasing sequence of natural numbers. And $b_1=a_1+\cdots+a_{k_1}$ and $b_{i+1}=a_{k_{i}}+\cdots+a_{k_{i+1}}$ for all $i\in\mathbb{N}$. Then the series $\sum b_i$ converges and $\sum b_i=\sum a_k$. (in other words, if a series converges, then every series obtained by inserting parentheses converges to the same sum)
	- the opposite is not necessarily true.

## Deleting/Adding Terms 

- (5.12) Let $k$ be a natural number. The series $\sum_{n=1}^{\infty}a_n$ converges if and only if the series $\sum_{n=1}^{\infty}a_{n+k}$ converges.
	- (in other words, if a series converges, then every series obtained by deleting or adding a *finite* number of terms converges too).
	- In which case, $\sum_{n=1}^{\infty}a_n=(a_1+a_2+\cdots+a_k)+\sum_{n=1}^{\infty}a_{n+k}$.
	- (q5.14) Let $m$ be a natural number. $\sum_{k=1}^{\infty}a_k=\infty$ if and only if $\sum_{k=m}^{\infty}a_{k}=\infty$.

# Well-known Series

## Telescoping series

- A **telescoping series** is a series of the form $\displaystyle\sum_{n=1}^{\infty}(b_n-b_{n+1})$.
- A **telescoping sum** is a sum of the form $\displaystyle\sum_{n=1}^{N}(b_n-b_{n+1})=b_1-b_{N+1}$.
	- $\sum_{n=1}^{N}(b_{n+1}-b_n)=b_{N+1}-b_1$.




## Geometric series

- A **geomorphic series** is a series of the form $\sum_{n=0}^{\infty}ar^n$ where $a\neq0$ and the **common ratio** $r$ are constants.
	- Finite series
		- ${\displaystyle\sum _{k=1}^{n}ar^{k-1}={\begin{cases}a\left({\frac {1-r^{n}}{1-r}}\right)&r\neq 1\\an&{\text{otherwise}}\end{cases}}}$
	- Infinite series
		- if $|r|<1$, $\sum_{n=0}^{\infty}ar^n=\frac{a}{1-r}$.
		- if $|r|\geq1$, $\sum_{n=0}^{\infty}ar^n$ diverges.
			- if $r=1$, $\sum_{n=0}^{\infty}ar^n$ diverges to $\infty$ if $a>0$ (or $-\infty$ if $a<0$).

## p-series & harmonic series

- A series of the form $\sum_{n=1}^{\infty}\frac{1}{n^p}$ is called a **p-series**. 
	- (e5.8) The p-series converges if $p>1$ and diverges if $p\leq1$.
	- When $p=1$, the series is called the **harmonic series** $\sum_{n=1}^{\infty}\frac{1}{n}$, which diverges.

- The **alternating harmonic series** is the series $\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n}=\ln 2$.

