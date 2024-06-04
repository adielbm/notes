
- A **series of functions** is an expression of the form $\displaystyle \sum_{n=1}^{\infty} f_n(x)$, where $(f_n)$ is a [[sequence of functions]]. 
- The series $\displaystyle \sum_{n=1}^{\infty} f_n(x)$ **converges** pointwise (or uniformly) to $f$ on $I$ if the sequence of partial sums $(S_n)$ [[Sequence of Functions#Convergence|converges]] pointwise (or uniformly) to $f$ on $I$. (where $\displaystyle S_n(x) = \sum_{k=1}^{n} f_k(x)$).
- Examples of series of functions include [[power series]], and Fourier series.

# Theorems

- (6.6\*, Cauchy Criterion for U.C) 
	- $\displaystyle \sum_{n=1}^{\infty} f_n(x)$ converges uniformly on $I$, if and only if, $\displaystyle\forall\varepsilon > 0,\exists N\in\mathbb{N}:\forall n>N,\forall m>n,\forall x\in I,\left| \sum_{k=n+1}^{m} f_k(x) \right| < \varepsilon$
-  (6.5\*, Dini's Theorem) 
	- Given $\displaystyle \sum_{n=1}^{\infty} f_n(x)$ converges pointwise to a continuous function $f$ on $[a,b]$, if each $f_n$ is continuous and non-negative on $[a,b]$, then $\displaystyle \sum_{n=1}^{\infty} f_n(x)$ converges uniformly to $f$ on $[a,b]$

- (6.7, Weierstrass) 
	- Let $\displaystyle \sum_{n=1}^{\infty} f_n(x)$ be a series of functions defined on an interval $I$. If: 
		- There exists a convergent sequence $(a_n)$ s.t.  $\forall n\in \mathbb{N},\forall x \in I,|f_n(x)| \leq a_n$
		- The series $\displaystyle \sum_{n=1}^{\infty} a_n$ converges. 
	- Then, the series $\displaystyle \sum_{n=1}^{\infty} f_n(x)$ uniformly converges on $I$.

- Given a series of functions $\displaystyle \sum_{n=1}^{\infty} f_n(x)$ that uniformly converges on an interval $I$ to a function $f$,
    - (6.4*) If each $f_n$ is continuous on $I$, then $f$ is continuous on $I$.
    - (term-by-term integration) If each $f_n$ is integrable on $I$, then $f$ is integrable on $I$ and $\displaystyle \int_{a}^{b} f(x) dx = \sum_{n=1}^{\infty} \int_{a}^{b} f_n(x) dx$.

- (6.9*) (term-by-term differentiation) 
	- If: 
		- Each $f_n$ is continuously differentiable on $I$ 
		- There exists $x_0$ where in $\displaystyle\sum_{n=1}^{\infty} f_n(x_0)$ converges
		- $\displaystyle\sum_{n=1}^{\infty} f_n'(x)$ converges uniformly on $I$
	  - then:
		  - $\displaystyle\sum_{n=1}^{\infty} f_n(x)$ converges uniformly on $I$ to a function $f$ that is differentiable on $I$
		  - $\displaystyle \forall x \in I, f'(x) = \sum_{n=1}^{\infty} f_n'(x)$

- (6.9) Let $(f_n)$ be a sequence of continuously differentiable functions on $[a,b]$ that pointwise converges to a function $f$ on $[a,b]$. If $(f_n')$ converges uniformly on $[a,b]$, Then, $f$ is differentiable on $[a,b]$, and $\displaystyle\forall x \in [a,b], f'(x) = \lim_{n\to\infty} f_n'(x)$.

- From Spivak:
    - The Weierstrass M-Test: Let $(f_n)$ be a sequence of functions defined on a set $A$. Suppose that there exists a sequence of positive numbers $(M_n)$ such that for all $n$ and for all $x\in A$, we have $|f_n(x)| \leq M_n$. Suppose moreover that the series $\displaystyle \sum_{n=1}^{\infty} M_n$ converges. Then for each $x\in A$, the series $\displaystyle \sum_{n=1}^{\infty} f_n(x)$ converges (in fact, it converges absolutely), and the series of functions $\displaystyle \sum_{n=1}^{\infty} f_n(x)$ converges uniformly on $A$ to a function $f(x)=\displaystyle \sum_{n=1}^{\infty} f_n(x)$.



