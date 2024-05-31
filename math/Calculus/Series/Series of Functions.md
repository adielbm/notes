# Sequences of Functions

A sequence of functions is a function whose domain is $\mathbb{N}$ and whose range is a set of functions.
## Convergence

### Pointwise Convergence

- (d6.1) Given a sequence of functions $(f_n)$ that are all defined on an interval $D$, and given a real number $x_0$ in $D$. 
    - (a.) If the sequence of real numbers $(f_n(x_0))$ converges, then we say that the sequence $(f_n)$ **converges** in $x_0$.
    - (b.) If the sequence $(f_n)$ converges in every point of $I\subseteq D$, then we say that the sequence $(f_n)$ **converges (pointwise)** on $I$.
    - (c.) If the sequence $(f_n)$ converges pointwise on $I\subseteq D$, then the function $f$ defined by $\displaystyle f(x) = \lim_{n \to \infty} f_n(x)$ is called the **limit function** of the sequence $(f_n)$ on $I$. In which case, we say that the sequence $(f_n)$ **converges (pointwise) to** $f$ on $I$, and we write $\displaystyle f_n \to f$.
    - In $\varepsilon$-$N$ terms, we say that the sequence $(f_n)$ converges pointwise on $I$ to $f$ if for every $\varepsilon > 0$ and for every $x\in I$, there exists an integer $N$ such that $|f_n(x) - f(x)| < \varepsilon$ for all $n\geq N$. 
        - ($N$ depends on $\varepsilon$ and $x$. So, we can write $N = N(\varepsilon, x)$.)

- If $(f_n)$ converges pointwise to $f$ on $[a,b]$
	- (6.9) term-by-term differentiation - If each $f_n$ is continuously differentiable on $[a,b]$, and if the sequence of derivatives $(f_n')$ converges uniformly on $[a,b]$, then $f$ is differentiable on $[a,b]$ and $\displaystyle f'(x) = \lim_{n \to \infty} f_n'(x)$ for all $x\in [a,b]$.
	- (6.5) Dini's Theorem - If $f$ is continuous on $[a,b]$, and $(f_n)$ is increasing ($\forall n \in \mathbb{N},\forall x\in [a,b],f_n(x)\leq f_{n+1}(x)$), or decreasing, then $(f_n)$ converges uniformly to $f$ on $[a,b]$

### Uniform Convergence

Given a sequence of functions $(f_n)$ defined on an interval $D$

- Given a sequence of functions $(f_n)$ defined on an interval $D$, the following are equivalent: (d6.2, 6.3)
	- $(f_n)$ **converges uniformly** to $f$ on $D$
	- $\displaystyle f_n \to f$ **uniformly** on $D$
	- $\forall\varepsilon > 0,\exists N:\forall n\geq N,\forall x \in{D},|f_n(x) - f(x)| < \varepsilon$
	- $f$ is the **uniform limit** of $(f_n)$ on $D$
	- $\displaystyle \lim_{n \to \infty} \sup_{x\in D} |f_n(x) - f(x)| = 0$

- ((6.6) Cauchy Criterion for Uniform Convergence) There exists a function $f$ s.t. $(f_n)\to f$ uniformly on $D$, if and only if $\forall\varepsilon > 0 ,\exists N:\forall n>N,\forall p\in \mathbb{N},\forall x \in D,|f_{n+p}(x) - f_n(x)| < \varepsilon$


- If $(f_n)$ converges uniformly to $f$ on $D$, then:
	- (q6.5) $(f_{n})$ converges converges pointwise to $f$ on $D$
	- (6.4) If each $f_n$ is continuous on $D$, then $f$ is continuous on $D$.
	- If each $f_n$ is integrable on $[a,b]$ and if $(f_n)$ converges uniformly to $f$ on $[a,b]$, then $f$ is integrable on $[a,b]$ and $\displaystyle \int_{a}^{b} f(x) dx = \lim_{n \to \infty} \int_{a}^{b} f_n(x) dx$.
	- If each $f_n$ is differentiable continuously on $[a,b]$ and if the sequence of derivatives $(f_n')$ converges uniformly on $I$, and if $(f_n)$ converges at some point $x_0\in I$, then $(f_n)$ converges uniformly on $I$ to a function $f$ that is differentiable on $I$ and $\displaystyle f'(x) = \lim_{n \to \infty} f_n'(x)$ for all $x\in I$.

# Series of Functions

- A **series of functions** is a series of the form $\displaystyle \sum_{n=1}^{\infty} f_n(x)$, where $(f_n)$ is a sequence of functions. 
- The series $\displaystyle \sum_{n=1}^{\infty} f_n(x)$ **converges** pointwise (or uniformly) if the sequence of partial sums $(S_n)$ **converges** pointwise (or uniformly) to a function $f$, where $\displaystyle S_n(x) = \sum_{k=1}^{n} f_k(x)$.
#### Theorems

- (6.6*) Cauchy Criterion for Uniform Convergence - A series of functions $\displaystyle \sum_{n=1}^{\infty} f_n(x)$ converges uniformly on an interval $I$ if and only if for every $\varepsilon > 0$, there exists an integer $N$ such that for all $n,m$ with $m>n>N$ we have $\left| \sum_{k=n+1}^{m} f_k(x) \right| < \varepsilon$ for all $x\in I$.
-  (6.5*, Dini's Theorem) Given $\displaystyle \sum_{n=1}^{\infty} f_n(x)$ converges pointwise to a continuous function $f$ on $[a,b]$, if each $f_n$ continuous and non-negative on $[a,b]$, then $\displaystyle \sum_{n=1}^{\infty} f_n(x)$ converges uniformly to $f$ on $[a,b]$.
- (6.7, Weierstrass) Let $\displaystyle \sum_{n=1}^{\infty} f_n(x)$ be a series of functions defined on an interval $I$. Suppose that there exists a sequence of positive numbers $(a_n)$ such that for all $n$ and for all $x\in I$, we have $|f_n(x)| \leq a_n$. Suppose moreover that the series $\displaystyle \sum_{n=1}^{\infty} a_n$ converges. Then the series $\displaystyle \sum_{n=1}^{\infty} f_n(x)$ uniformly converges on $I$.
- Given a series of functions $\displaystyle \sum_{n=1}^{\infty} f_n(x)$ that converges uniformly on an interval $I$ to a function $f$,
    - (6.4*) If each $f_n$ is continuous on $I$, then $f$ is continuous on $I$.
    - (term-by-term integration) If each $f_n$ is integrable on $I$, then $f$ is integrable on $I$ and $\displaystyle \int_{a}^{b} f(x) dx = \sum_{n=1}^{\infty} \int_{a}^{b} f_n(x) dx$.
- (6.9*) (term-by-term differentiation) If each $f_n$ is continuously differentiable on $I$ s.t. there exists $x_0$ where in $\sum_{n=1}^{\infty} f_n(x_0)$ converges, and $\sum_{n=1}^{\infty} f_n'(x)$ converges uniformly on $I$, then $\sum_{n=1}^{\infty} f_n(x)$ converges uniformly on $I$ to a function $f$ that is differentiable on $I$ and $f'(x) = \sum_{n=1}^{\infty} f_n'(x)$ for all $x\in I$.
- From Spivak:
    - The Weiersstrass M-Test: Let $(f_n)$ be a sequence of functions defined on a set $A$. Suppose that there exists a sequence of positive numbers $(M_n)$ such that for all $n$ and for all $x\in A$, we have $|f_n(x)| \leq M_n$. Suppose moreover that the series $\displaystyle \sum_{n=1}^{\infty} M_n$ converges. Then for each $x\in A$, the series $\displaystyle \sum_{n=1}^{\infty} f_n(x)$ converges (in fact, it converges absolutely), and the series of functions $\displaystyle \sum_{n=1}^{\infty} f_n(x)$ converges uniformly on $A$ to a function $f(x)=\displaystyle \sum_{n=1}^{\infty} f_n(x)$.

___

#todo  https://en.wikipedia.org/wiki/Series_expansion