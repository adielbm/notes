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

Given $f_n(x)=\frac{x^n}{n^x}$.

- (A) Determine if the sequence $(f_n)$ uniformly converges on $(-1,1)$.
- (B) Find the convergence domain of the series $\sum_{n=1}^{\infty}f_n(x)$.
- (C) Prove that the series $\sum_{n=1}^{\infty}f_n(x)$ does not uniformly converge on its convergence domain. (note: it's not a power series)

### Answer 2

#TODO

## Q3

Determine whether each of the following series converges uniformly.

- (A) $\sum_{n=1}^{\infty}(e^{nx}-e^{(n-1)x})$ on $[-e,0]$.
- (B) $\sum_{n=2}^{\infty}\frac{\ln n \cdot \cos (n^3 x)}{n(\ln n)^3+x^2}$ on $\mathbb{R}$.
- (C) $\sum_{n=1}^{\infty}\frac{2^{n+1}}{(1+\frac{1}{n})^{n^2}}x^n$ on its convergence domain.


### Answer 3

#TODO

## Q4

Given a function $f(x)=\sum_{n=1}^{\infty}a_n \sin(nx)$. Prove that if $\sum_{n=1}^{\infty}n|a_n|$ converges, then $f(x)$ is differentiable on $\mathbb{R}$.

### Answer 4

#TODO

## Q5

Expand the function $f(x)=\frac{x}{(1+x^2)^2}$ to a power series of the form $\sum_{n=0}^{\infty}a_n x^n$, and find the domain of convergence of the series.

### Answer 5

#TODO

## Q6

Given a function $f(x)=\begin{cases} \frac{\sin \sqrt{x}}{\sqrt{x}} & x>0 \\ 1 & x=0 \end{cases}$.

Evaluate $f^{(2024)}(0)$. (of course, it's one-sided differentiability)

### Answer 6

#TODO