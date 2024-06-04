- Unit: 6 (Seq. & Series of functions, Power series, Taylor series)
- Due date: May 22, 2024
- Points: 4
- Semester: Spring 2024
- Course: MATH CALCULUS II
- Questions: 6

## Q1

A sequence of functions $(f_n)$ is defined on $[0,1]$ by $f_{n+1}(x)=\sqrt{x f_n(x)}$ for all $n\geq 1$, where $f_1(x)=1$.

Determine whether the sequence $(f_n)$ uniformly converges on $[0,1]$.

### Answer 1

#TODO

> (6.5) Dini's Theorem - if $(f_n)$ converges pointwise to $f$ on $[a,b]$ and $f$ is continuous on $[a,b]$, and $(f_n)$ is increasing ($\forall n \in \mathbb{N},\forall x\in [a,b],f_n(x)\leq f_{n+1}(x)$), or decreasing, then $(f_n)$ converges uniformly to $f$ on $[a,b]$.

- by induction, we can show that $f_n(x)\geq x$ for all $n\geq 1$ and $x\in [0,1]$.
    - Base case $n=1$: $f_1(x)=1\geq x$ for all $x\in [0,1]$.
    - Assume $f_n(x)\geq x$ for all $x\in [0,1]$. 
    - Then, $f_{n+1}(x)=\sqrt{x f_n(x)}\geq \sqrt{x^2}=x$ for all $x\in [0,1]$. 
    - Thus, $f_n(x)\geq x$ for all $n\geq 1$ and $x\in [0,1]$. QED.
- by induction, we can show that the sequence $(f_n)$ is decreasing for all $x\in [0,1]$.
    - Base case $n=1$: $f_1(x)=1\geq f_2(x)=\sqrt{x}$ for all $x\in [0,1]$.
    - Assume $f_n(x)\geq f_{n+1}(x)$ for all $x\in [0,1]$. 
    - Then, $f_{n+1}(x)=\sqrt{x f_n(x)}\geq \sqrt{x f_{n+1}(x)}=f_{n+2}(x)$ for all $x\in [0,1]$. 
    - Thus, $f_n(x)\geq f_{n+1}(x)$ for all $n\geq 1$ and $x\in [0,1]$. QED.
- by 3.16 (Monotone Convergence Theorem), $\lim_{n\to\infty}f_n(x)\in\mathbb{R}$ for all $x\in [0,1]$.
- since $\lim f_n(x)=\lim f_{n+1}(x)$ 
    - $\lim f_n(x)=\lim \sqrt{x f_n(x)}$
    - $\lim f_n(x)=\sqrt{x} \cdot  \sqrt{ \lim f_n(x)}$
    - $\lim f_n(x)=x$ (since $f_n(x)\geq x\implies \lim f_n(x)\geq \lim x=x$, and $f_n(x)\leq x\implies \lim f_n(x)\leq \lim x=x$) ???? #todo


## Q2

Given $\displaystyle f_n(x)=\frac{x^n}{n^x}$.

- (A) Determine if the sequence $(f_n)$ uniformly converges on $(-1,1)$.
- (B) Find the convergence domain of the series $\sum_{n=1}^{\infty}f_n(x)$.
- (C) Prove that the series $\sum_{n=1}^{\infty}f_n(x)$ does not uniformly converge on its convergence domain. (note: it's not a power series)

### Answer 2

#### 2a

- For all $x\in (-1,1)$ :
    - $\frac{f_{n+1}(x)}{f_n(x)}=\frac{x^{n+1}}{(n+1)^x}\cdot \frac{n^x}{x^n}=\frac{x}{n+1}\left(1+\frac{x}{n}\right)^x\to 0<1$ as $n\to\infty$.
    - $\implies f_n(x)\to f \equiv 0$ as $n\to\infty$.
- $\implies f_n(x)$ pointwise converges on $(-1,1)$.
- Now, let's take $a_n=-1+\frac{1}{n}$.
- $|f_n(a_n)-f(a_n)|=|f_n(a_n)|=|f_n(-1+\frac{1}{n})|=\frac{(-1+\frac{1}{n})^n}{n^{-1+\frac{1}{n}}}$
- $\displaystyle\lim_{n\to\infty}\left|\left(-1+\frac{1}{n}\right)^n\right|=\frac{1}{e}$.
- $\displaystyle\lim_{n\to\infty}\frac{1}{n^{-1+\frac{1}{n}}}=\lim_{n\to\infty}\frac{n}{\sqrt[n]{n}}=\lim_{n\to\infty}\frac{n}{1}=\infty$.
- $\displaystyle\lim_{n\to\infty}f_n(a_n)=\lim_{n\to\infty}\frac{\left|(-1+\frac{1}{n})^n\right|}{n^{-1+\frac{1}{n}}}=\infty$
- $\forall n\geq 1, a_n\in (-1,1)$.
- $\displaystyle\sup_{x\in (-1,1)}|f_n(x)-f(x)|\neq 0$. (by question 3.9 (INFI1))
- $\implies f_n(x)$ does not uniformly converge on $(-1,1)$. (by (6.3))

#### 2b

- Let's find the convergence domain of the series $\sum_{n=1}^{\infty}f_n(x)$.
- $\sum_{n=1}^{\infty}f_n(x)=\sum_{n=1}^{\infty}\frac{x^n}{n^x}$.
- Let's use the ratio test.
- $\displaystyle\lim_{n\to\infty}\left|\frac{x^{n+1}}{(n+1)^x}\cdot \frac{n^x}{x^n}\right|=\lim_{n\to\infty}\left|\frac{x \cdot n^x}{(n+1)^x}\right|=|x|\lim_{n\to\infty}\left|\frac{n^x}{(n+1)^x}\right|=|x|$.
- By the ratio test (5.17\*\*):
    - If $|x|<1$, then $\sum_{n=1}^{\infty}f_n(x)$ converges.
    - If $|x|>1$, then $\sum_{n=1}^{\infty}f_n(x)$ diverges.
- If $|x|=1$, 
    - if $x=1$, then $\sum_{n=1}^{\infty}f_n(x)=\sum_{n=1}^{\infty}\frac{1}{n}$, which diverges. (example 5.8)
    - if $x=-1$, then $\sum_{n=1}^{\infty}f_n(x)=\sum_{n=1}^{\infty}\frac{(-1)^n}{n^{-1}}=\sum_{n=1}^{\infty}(-1)^n n$, which diverges by divergence test (5.5).
- Conclusion: the convergence domain of the series $\sum_{n=1}^{\infty}f_n(x)$ is $(-1,1)$.

#### 2c

- Let's assume for contradiction that the series $\sum_{n=1}^{\infty}f_n(x)$ uniformly converges on $(-1,1)$.
- By Cauchy's criterion (6.6\*), $\displaystyle\forall\varepsilon > 0,\exists N\in\mathbb{N}:\forall n>N,\forall m>n,\forall x\in (-1,1),\left| \sum_{k=n+1}^{m} f_k(x) \right| < \varepsilon$
- In particular, $\displaystyle\forall\varepsilon > 0,\exists N\in\mathbb{N}:\forall n>N,\forall x\in (-1,1),\left|  f_n(x) \right| < \varepsilon$.
- By the definition of uniform convergence (6.2), (since $f\equiv 0$), $f_n(x)$ uniformly converges to $f$ on $(-1,1)$. Contradiction to 2a. Conclusion: the series $\sum_{n=1}^{\infty}f_n(x)$ does not uniformly converge on its convergence domain, $(-1,1)$.

## Q3

Determine whether each of the following series converges uniformly.

- (A) $\sum_{n=1}^{\infty}(e^{nx}-e^{(n-1)x})$ on $[-e,0]$.
- (B) $\sum_{n=2}^{\infty}\frac{\ln n \cdot \cos (n^3 x)}{n(\ln n)^3+x^2}$ on $\mathbb{R}$.
- (C) $\sum_{n=1}^{\infty}\frac{2^{n+1}}{(1+\frac{1}{n})^{n^2}}x^n$ on its convergence domain.


### Answer 3

#TODO

## Q4

Given a function $\displaystyle f(x)=\sum_{n=1}^{\infty}a_n \sin(nx)$. Prove that if $\sum_{n=1}^{\infty}n|a_n|$ converges, then $f(x)$ is differentiable on $\mathbb{R}$.

### Answer 4

> - (6.7, Weierstrass) 
	- Let $\displaystyle \sum_{n=1}^{\infty} f_n(x)$ be a series of functions defined on an interval $I$. If: 
		- There exists a convergent sequence $(a_n)$ s.t.  $\forall n\in \mathbb{N},\forall x \in I,|f_n(x)| \leq a_n$
		- The series $\displaystyle \sum_{n=1}^{\infty} a_n$ converges. 
	- Then, the series $\displaystyle \sum_{n=1}^{\infty} f_n(x)$ uniformly converges on $I$.


> - (6.9*) (term-by-term differentiation) If: 
>		- Each $f_n$ is continuously differentiable on $I$ 
>		- There exists $x_0$ where in $\displaystyle\sum_{n=1}^{\infty} f_n(x_0)$ converges
>		- $\displaystyle\sum_{n=1}^{\infty} f_n'(x)$ converges uniformly on $I$
>	  - then:
>		  - $\displaystyle\sum_{n=1}^{\infty} f_n(x)$ converges uniformly on $I$ to a function $f$ that is differentiable on $I$
>		  - $\displaystyle \forall x \in I, f'(x) = \sum_{n=1}^{\infty} f_n'(x)$

- Let's prove that $f(x)$ is differentiable on $\mathbb{R}$.
- Let's denote, $f_n(x)=a_n \sin(nx)$.
- For all $x\in \mathbb{R}$ :
    - $f_n(x)=a_n \sin(nx)$ 
    - $|f_n(x)|=|a_n \sin(nx)|\leq |a_n|\leq n|a_n|$.   
    - $|f_n'(x)|=|a_n n \cos(nx)|\leq |a_n n|\leq n|a_n|$.
    - Given that $\sum_{n=1}^{\infty}n|a_n|$ converges.
    - By the comparison test (5.14), $\sum_{n=1}^{\infty}|f_n'(x)|=\sum_{n=1}^{\infty}|a_n n \cos(nx)|$ converges.
    - Thus, $\sum_{n=1}^{\infty}f_n'(x)$ converges. (by 5.6)
- By 6.7, $\sum_{n=1}^{\infty}f_n'(x)$ uniformly converges on $\mathbb{R}$.
- Each $f_n'$ is continuously differentiable on $\mathbb{R}$, (since $f_n(x)=a_n \sin(nx)$ is continuously differentiable on $\mathbb{R}$).
- By (6.9\*), $\sum_{n=1}^{\infty}f_n(x)$ converges uniformly on $\mathbb{R}$ to a function $f$ that is differentiable on $\mathbb{R}$.

## Q5

Expand the function $f(x)=\frac{x}{(1+x^2)^2}$ to a power series of the form $\sum_{n=0}^{\infty}a_n x^n$, and find the domain of convergence of the series.

### Answer 5

#TODO

## Q6

Given a function $f(x)=\begin{cases} \frac{\sin \sqrt{x}}{\sqrt{x}} & x>0 \\ 1 & x=0 \end{cases}$.

Evaluate $f^{(2024)}(0)$. (of course, it's one-sided differentiability)

### Answer 6

#TODO