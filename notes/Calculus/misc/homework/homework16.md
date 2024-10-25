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

- by induction, we can show that $f_n(x)\geq x$ for all $n\geq 1$ and $x\in [0,1]$.
    - Base case $n=1$: $f_1(x)=1\geq x$ for all $x\in [0,1]$.
    - Assume $f_n(x)\geq x$ for all $x\in [0,1]$. 
    - Then, $f_{n+1}(x)=\sqrt{x f_n(x)}\geq \sqrt{x^2}=x$ for all $x\in [0,1]$. 
    - Thus, $f_n(x)\geq x$ for all $n\geq 1$ and $x\in [0,1]$. QED.
- (I) by induction, we can show that the sequence $(f_n)$ is decreasing for all $x\in [0,1]$.
    - Base case $n=1$: $f_1(x)=1\geq f_2(x)=\sqrt{x}$ for all $x\in [0,1]$.
    - Assume $f_n(x)\geq f_{n+1}(x)$ for all $x\in [0,1]$. 
    - Then, $f_{n+1}(x)=\sqrt{x f_n(x)}\geq \sqrt{x f_{n+1}(x)}=f_{n+2}(x)$ for all $x\in [0,1]$. 
    - Thus, $f_n(x)\geq f_{n+1}(x)$ for all $n\geq 1$ and $x\in [0,1]$. QED.
- (II) let's show that $f_n(x)$ converges to $f$ pointwise on $[0,1]$.
    - by 3.16 (Monotone Convergence Theorem), $\displaystyle\lim_{n\to\infty}f_n(x)=L\in\mathbb{R}$ for all $x\in [0,1]$.
    - since $\lim f_n(x)=\lim f_{n+1}(x)=L$ 
    - $\lim f_n(x)=\lim \sqrt{x f_n(x)}=L$
    - $\lim f_n(x)=\sqrt{x} \cdot  \sqrt{ \lim f_n(x)}=\sqrt{x} \cdot  \sqrt{L}=L$
    - $L=0$ or $L=x$
    - $L=0$ is not possible since $f_n(x)\geq x$ for all $n\geq 1$ and $x\in [0,1]$.
    - $\implies L=x$ for all $x\in [0,1]$.
    - #todo
- (III) let's show that each $f$ is continuous on $[0,1]$.
    - #todo
- By Dini's Theorem (6.5), since (I), (II), and (III) are satisfied, $(f_n)$ uniformly converges to $f$ on $[0,1]$.
    

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

Determine whether or not each of the following series converges uniformly.

- (A) $\displaystyle\sum_{n=1}^{\infty}(e^{nx}-e^{(n-1)x})$ on $[-e,0]$.
- (B) $\displaystyle\sum_{n=2}^{\infty}\frac{\ln n \cdot \cos (n^3 x)}{n(\ln n)^3+x^2}$ on $\mathbb{R}$.
- (C) $\displaystyle\sum_{n=1}^{\infty}\frac{2^{n+1}}{(1+\frac{1}{n})^{n^2}}x^n$ on its convergence domain.

### Answer 3

#### 3a

$\displaystyle\sum_{n=1}^{\infty}(e^{nx}-e^{(n-1)x})$ on $[-e,0]$.

- The sequence of partial sums is $S_n(x)=\sum_{k=1}^{n}(e^{kx}-e^{(k-1)x})$ which is a telescoping sum.
- $S_n(x)=\sum_{k=1}^{n}(e^{kx}-e^{(k-1)x})=e^{nx}-e^{0}=e^{nx}-1$.
- $\displaystyle\lim_{n\to\infty}S_n(x)=\lim_{n\to\infty}e^{nx}-1$.
- if $x=0$, then $\displaystyle\lim_{n\to\infty}S_n(0)=\lim_{n\to\infty}e^{n\cdot 0}-1=0$.
- if $x\in (-e,0)$, then $\displaystyle\lim_{n\to\infty}S_n(x)=\lim_{n\to\infty}e^{nx}-1=0-1=-1$.
- i.e. $f(x)=\sum_{n=1}^{\infty}(e^{nx}-e^{(n-1)x})=\begin{cases} 0 & x=0 \\ -1 & x\in (-e,0) \end{cases}$. (which is not continuous on $[-e,0]$)
- Let's assume for contradiction that the series $\displaystyle\sum_{n=1}^{\infty}(e^{nx}-e^{(n-1)x})$ uniformly converges on $[-e,0]$.
- each $f_n=e^{nx}-e^{(n-1)x}$ is continuous on $[-e,0]$.
- by (6.4\*) the function $f$ is continuous on $[-e,0]$. Contradiction. 
- Conclusion: the series $\displaystyle\sum_{n=1}^{\infty}(e^{nx}-e^{(n-1)x})$ does not uniformly converge on $[-e,0]$.

#### 3b

- Let's denote $f_n(x)=\frac{\ln n \cdot \cos (n^3 x)}{n(\ln n)^3+x^2}$.
- $\displaystyle\left|\frac{\ln n \cdot \cos (n^3 x)}{n(\ln n)^3+x^2}\right|\leq \frac{\ln n}{n(\ln n)^3}=\frac{1}{n(\ln n)^2}$ for all $n\geq 2$ and $x\in \mathbb{R}$.
- Let's denote $M_n=\frac{1}{n(\ln n)^2}$.
- The series $\displaystyle\sum_{n=2}^{\infty}M_n=\sum_{n=2}^{\infty}\frac{1}{n(\ln n)^2}$ converges:
    - the sequence $(M_n)$ is positive and decreasing.
    - $\int ^{\infty}_2 \frac{1}{x(\ln x)^2}dx$
    - Let's use the substitution $u=\ln x$. Then, $du=\frac{1}{x}dx$.
    - $\displaystyle\int ^{\infty}_2 \frac{1}{x(\ln x)^2}dx=\int ^{\infty}_{\ln 2} \frac{du}{u^2}=-\frac{1}{u}\Big|_{\ln 2}^{\infty}=\lim_{x\to\infty}-\frac{1}{x}+\frac{1}{\ln 2}=\frac{1}{\ln 2}$.
    - Thus, $\displaystyle\sum_{n=2}^{\infty}\frac{1}{n(\ln n)^2}$ converges by the integral test (5.15).
- $\forall n\geq 2, \forall x\in \mathbb{R}, \left|f_n(x)\right|\leq M_n$.
- By the Weierstrass M-test (6.7), $\displaystyle\sum_{n=2}^{\infty}f_n(x)=\sum_{n=2}^{\infty}\frac{\ln n \cdot \cos (n^3 x)}{n(\ln n)^3+x^2}$ uniformly converges on $\mathbb{R}$.

#### 3c

> $\displaystyle\sum_{n=1}^{\infty}\frac{2^{n+1}}{(1+\frac{1}{n})^{n^2}}x^n$ on its convergence domain.

- #todo

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