A **sequence of functions** is a function whose domain is $\mathbb{N}$ and whose range is a set of functions.
# Convergence

## Pointwise Convergence

- (d6.1) Given a sequence of functions $(f_n)$, and a function $f$ such that all functions defined on an interval $I$. The following are equivalent: 
	- The sequence $(f_n)$ **converges pointwise** on $I$ to the **limit function** $f$
	-  $\forall x \in I,\,\displaystyle f(x) = \lim_{n \to \infty} f_n(x)$ 
	- $f_n\to f$ **pointwise** on $I$
	- For every $x\in I$, the sequence $(f_n)$ **converges** at $x$ to $f(x)$
	- $\forall \varepsilon > 0, \forall x\in I, \exists N\in \mathbb{N} : \forall n\geq N, |f_n(x) - f(x)| < \varepsilon$


- If $(f_n)$ converges pointwise to $f$ on $[a,b]$
	- (6.9) term-by-term differentiation - If each $f_n$ is continuously differentiable on $[a,b]$, and if the sequence of derivatives $(f_n')$ converges uniformly on $[a,b]$, then $f$ is differentiable on $[a,b]$ and $\displaystyle f'(x) = \lim_{n \to \infty} f_n'(x)$ for all $x\in [a,b]$.
	- (6.5) Dini's Theorem - If $f$ is continuous on $[a,b]$, and $(f_n)$ is increasing ($\forall n \in \mathbb{N},\forall x\in [a,b],f_n(x)\leq f_{n+1}(x)$), or decreasing, then $(f_n)$ converges uniformly to $f$ on $[a,b]$

## Uniform Convergence

- (d6.2, 6.3) Given a sequence of functions $(f_n)$, and a function $f$ such that all functions defined on an interval $I$. The following are equivalent: 
	- The sequence $(f_n)$ **converges uniformly** on $I$ to the **uniform limit** $f$
	- $f_n\to f$ **uniformly** on $I$
	- $\forall\varepsilon > 0,\exists N\in\mathbb{N}:\forall n\geq N,\forall x \in{I},|f_n(x) - f(x)| < \varepsilon$
	- $f$ is the **uniform limit** of $(f_n)$ on $I$
	- (6.3) $\displaystyle \lim_{n \to \infty} \sup_{x\in I} |f_n(x) - f(x)| = 0$
	- (q6.7) There exists a null sequence $(a_n)$ such that for almost all $n$ and for all $x\in I$, we have $|f_n(x) - f(x)| \leq a_n$


### Cauchy Criterion for UC

- Given a sequence of functions $(f_n)$ such that all functions defined on an interval $I$. The following are equivalent: 
	- There exists a function $f$ such that $f_n\to f$ uniformly on $I$
	- ((6.6) Cauchy Criterion for U.C.) $\forall\varepsilon > 0 ,\exists N:\forall n>N,\forall p\in \mathbb{N},\forall x \in I,|f_{n+p}(x) - f_n(x)| < \varepsilon$

### Theorems & Properties

- If $f_{n}\to f$ uniformly on $I$, then:
	- (q6.5) $f_{n}\to f$ pointwise on $I$
	- (6.4) If each $f_n$ is continuous on $I$, then $f$ is continuous on $I$.
	- (q6.10) If each $f_n$ is bounded on $I$, then $f$ is bounded on $I$.
	- (q6.11) If $f$ is bounded on $I$, then:
		- There exists a constant $A$ such that for almost all $n$ we have $\displaystyle\sup_{I}\{\left| f_n(x) \right| \} \leq A$ (i.e. from some $n$ onwards, all $f_n$ are bounded by $A$)
		- $\displaystyle\lim_{n\to\infty} \left( \sup_{I}\{\left| f_n(x) \right| \} \right) = \sup_{I}\{\left| f(x) \right| \}$
- If each $f_n$ is integrable on $[a,b]$ and if $(f_n)$ converges uniformly to $f$ on $[a,b]$, then $f$ is integrable on $[a,b]$ and $\displaystyle \int_{a}^{b} f(x) dx = \lim_{n \to \infty} \int_{a}^{b} f_n(x) dx$.
- If each $f_n$ is differentiable continuously on $[a,b]$ and if the sequence of derivatives $(f_n')$ converges uniformly on $I$, and if $(f_n)$ converges at some point $x_0\in I$, then $(f_n)$ converges uniformly on $I$ to a function $f$ that is differentiable on $I$ and $\displaystyle f'(x) = \lim_{n \to \infty} f_n'(x)$ for all $x\in I$.

- If $f_n\to f$ and $g_n\to g$ uniformly on $I$, then:
	- (q6.9a) $f_n+g_n\to f+g$ uniformly on $I$
	- (q6.9b) if $f$ and $g$ are bounded on $I$, then $f_n \cdot g_n \to f\cdot g$ uniformly on $I$

