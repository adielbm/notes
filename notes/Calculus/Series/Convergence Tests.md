
> Strategy for Series Convergence Tests https://eddieguo.ca/assets/downloads/notes/math101.pdf
## Cauchy's Convergence Test

- (5.4) The series $\sum a_n$ converges if and only if for every $\varepsilon>0$ there exists $N_{\varepsilon}$ such that if $\forall n>N_{\varepsilon}$, and $\forall p \in \mathbb{N}$ we have $\left|s_{n+p}-s_{n}\right|=\left|a_{n+1}+a_{n+2}+\cdots+a_{n+p}\right|<\varepsilon$.

## Divergence Test

- (5.5) If $\sum_{n=1}^{\infty}a_n$ converges, then $\displaystyle\lim_{n\to\infty}a_n=0$.
- (The Divergence Test) If $\displaystyle\lim_{n\to\infty}a_n\neq0$, then $\sum_{n=1}^{\infty}a_n$ diverges.

## p-Test

- (e5.8) The [[Series#p-series & harmonic series|p-series]] $\displaystyle\sum_{n=1}^{\infty}\frac{1}{n^p}$ converges if $p>1$ and diverges if $p\leq1$
## Absolute Convergence Test

- (5.6) If the seires $\sum \left|a_n\right|$ converges, then $\sum a_n$ converges as well.
- see also [[Series#Convergence Absolutely]]

## Monotone Converges Theorem for Series  

- (5.13 MCT) $(a_n)\geq0\iff(s_n)$ is [[Calculus/Sequences/Monotonicity|increasing]]. In this case:
	-  $\sum a_n$ converges $\iff$ $\sum a_n$ is [[Series#Bounded Series|bounded]] $\iff$ $(s_n)$ is bounded
		- In this case, $\sum a_n=\lim{s_n}=\sup\{s_n:n\in\mathbb{N}\}$ 
	- The series $\sum a_n$ diverges to infinity $\iff$ $(s_n)$ is unbounded. 
- $(a_n)>0\iff(s_n)$ is strictly increasing.
- $(a_n)\leq0\iff(s_n)$ is decreasing.
- $(a_n)<0\iff(s_n)$ is strictly decreasing.

## Comparison test

Given series $\sum a_n$ and $\sum b_n$.
#### Direct Comparison test

- The Comparison Test (5.14, "first") If $0\leq a_n\leq b_n$ for all $n>N$, then
	- If $\sum b_n$ converges, then $\sum a_n$ converges.
	- If $\sum a_n$ diverges, then $\sum b_n$ diverges. (they both diverge to infinity)

#### Limit Comparison Test

Given $a_n\geq0$ and $b_n\geq0$ for all $n>N$.

- (5.15, "second") If $\displaystyle\lim_{n\to\infty}\frac{a_n}{b_n}=c$, where $c$ is a positive real number, then
	- The series $\sum a_n$ converges, if and only if the series $\sum b_n$ converges.
- (q5.21) 
	- If $\displaystyle\lim_{n\to\infty}\frac{a_n}{b_n}=0$, and $\sum b_n$ converges, then $\sum a_n$ converges.
	- If $\displaystyle\lim_{n\to\infty}\frac{a_n}{b_n}=\infty$, and $\sum b_n$ diverges, then $\sum a_n$ diverges.
## Root test (Cauchy)

- (5.16) Root test (Cauchy)
	- (a.) If there exists $q<1$ such that $\sqrt[n]{|a_n|}\leq q$ for almost all $n$, then the series $\sum a_n$ converges absolutely. 
	- (b.) If $\sqrt[n]{|a_n|}\geq 1$ for infinitely many $n$, then the series $\sum a_n$ diverges.

- (5.16*) Given $c=\displaystyle\limsup_{n\to\infty}\sqrt[n]{|a_n|}$. or ($c=\displaystyle\lim_{n\to\infty}\sqrt[n]{|a_n|}$ exists (5.16**))
	- If $c<1$, then the series $\sum a_n$ converges absolutely.
	- If $c>1$, then the series $\sum a_n$ diverges.
	- If $c=1$, then the test is inconclusive.

## Ratio test (d'Alembert)

- Ratio test (d'Alembert) (given $a_n\neq0$ for all $n$)
	- (5.17) 
		- (a.) If there exists $q<1$ such that $\left|\frac{a_{n+1}}{a_n}\right|\leq q$ for almost all $n$, then the series $\sum a_n$ converges absolutely.
		- (b.) If $\left|\frac{a_{n+1}}{a_n}\right|\geq 1$ for almost all $n$, then the series $\sum a_n$ diverges.
	- (5.17**) Given $c=\displaystyle\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|$.
		- If $c<1$, then the series $\sum a_n$ converges absolutely.
		- If $c>1$, then the series $\sum a_n$ diverges.
		- If $c=1$, then the test is inconclusive.
	(q5.26) If there exists $q<1$ such that $\left|\frac{a_{n+1}}{a_n}\right|\leq q<1$ for almost all $n$, then there exists $q\leq q'<1$ such that $\sqrt[n]{|a_n|}\leq q'$ for almost all $n$.

> If we found that $\sum a_n$ diverges by either ratio test or root test, then $\displaystyle\lim_{n\to\infty}a_n\neq0$.

## Cauchy Condensation Test

- (5.18) Cauchy condensation test - Let $(a_n)$ be a [[Sequences/Monotonicity|decreasing]] sequence of nonnegative terms. The series $\sum_{n=1}^{\infty}a_n$ converges if and only if the series $\sum_{n=1}^{\infty}2^na_{2^n}$ converges.

## Integral Test

(5.19) 

- Given a series $\sum a_k$ of nonnegative terms, where $a_k$ is decreasing. 
- Given $f(x)$ is decreasing (weakly), nonnegative on $[1,\infty)$, and integrable every fintie interval. And $a_n=f(n)$ for all $n\in\mathbb{N}$.

The series $\sum a_k$ converges if and only if the improper integral $\int_{1}^{\infty}f(x)dx$ converges.

> We can use integral test also when $f$ is decreasing and nonnegative on $[k_0,\infty)$ for some $k_0\in\mathbb{N}$. In this case, the series $\sum_{k=k_0}^{\infty}a_k$ converges if and only if the improper integral $\int_{k_0}^{\infty}f(x)dx$ converges. Hence, the series $\sum_{k=1}^{\infty}a_k$ converges if and only if the series $\sum_{k=k_0}^{\infty}a_k$ converges.

## Alternating Series Test (Leibniz)

- (5.20) Let $(a_n)$ be a decreasing, null, (thus nonnegative) sequence. Then:
	- (A.) The series $\sum_{n=1}^{\infty}(-1)^{n+1}a_n$ converges. (This is a special case of [[#Dirichlet's test]]. see q5.32)
	- Alternating Series Estimation Theorem - If $S=\sum (-1)^{n+1}a_n$, and $S_n$ is the $n$-th partial sum, then for all $n$ we have:
		- (B.) $S$ is between $S_n$ and $S_{n+1}$.
		- (C.) The error $|S-S_n|$ is less than $a_{n+1}$.

> A series of the form $\sum (-1)^{n+1}a_n$ is called an **alternating series**

> These conclusions hold also for the series $\sum (-1)^{n}a_n$.

## Dirichlet's Test

- (5.22) Let $\sum a_k$ be a [[series#bounded series|bounded]] series, and $(b_k)$ be a [[Calculus/Sequences/Monotonicity|monotone]] [[Calculus/Sequences/Limit#Null Sequence|null sequence]]. Then the series $\sum a_kb_k$ converges.

## Abel's Test

- (5.23) Let $\sum a_k$ be a convergent series, and let $(b_k)$ be a sequence that is bounded and monotone. Then the series $\sum a_kb_k$ converges.
