- A **power series** (centered at $c$) is a series of the form $\displaystyle\sum_{n=0}^{\infty}a_n(x-c)^n$ where $(a_n)$ is a sequence of real numbers and $c$ is a real number.
	- The number $c$ is called the **center** of the power series.
	- The constants $a_0,a_1,a_2,\ldots$ are called the **coefficients** of the power series.
	- A power series is actually a [[Series of Functions|series of functions]], where $f_n(x)=a_n(x-c)^n$.
	- A power series is a function of $x$, and it is defined for all $x$ in the interval of convergence.
	- In this discussion, we will talk about power series centered at $0$, of the form $\displaystyle\sum_{n=0}^{\infty}a_nx^n$. But the results can be generalized to power series centered at any real number $c$, by substituting $y=x-c$.
	
## Radius of Convergence

Given a power series $\displaystyle\sum_{n=0}^{\infty}a_nx^n$

- (6.10) Let's denote $C=\displaystyle\limsup_{n\to\infty}\sqrt[n]{|a_n|}$.
	- $R=\begin{cases}0&\text{if }C=\infty\\\infty&\text{if }C=0\\\frac{1}{C}&\text{if }0<C<\infty\end{cases}$ is called the **radius of convergence** of the power series.
	- (a.) The series converges absolutely for all real number $x$ in $(-R,R)$.
	- (b.) The series converges uniformly on every closed interval $[-r,r]$ where $0<r<R$.
- (6.11) $R=\displaystyle\lim_{n\to\infty}\left|\frac{a_{n}}{a_{n+1}}\right|$ is the radius of convergence. (given the limit exists, finite or infinite)
- (6.12) Let $R>0$ (or $R=\infty$) be the radius of convergence. And let $f(x)=\sum_{n=0}^{\infty}a_nx^n$ be the function defined on $(-R,R)$. Then:
	- (a.) The function $f$ is continuous on $(-R,R)$. (if the series converges at $R$ or $-R$, then $f$ is continuous at $R$ or $-R$, respectively.)
	- (b.) for all $0<r<R$, the function $f$ is integrable on $[-r,r]$. And for all $x\in(-R,R)$, we have $\int_{0}^{x}f(t)dt=\sum_{n=0}^{\infty}\frac{a_n}{n+1}x^{n+1}$.
	- (c.) The function $f$ is continuously differentiable on $(-R,R)$, and for all $x\in(-R,R)$, we have $f'(x)=\sum_{n=0}^{\infty}a_n(n+1)x^n=\sum_{n=1}^{\infty}na_nx^{n-1}$.
	- The power series in (b.) and (c.) have the same radius of convergence $R$ as the original power series.
- (6.13, Abel's Theorem) Let $0<R\in\mathbb{R}$ be the radius of convergence, and let $f(x)=\sum_{n=0}^{\infty}a_nx^n$ be the function defined on $(-R,R)$. If the series converges at $x=R$ (or $x=-R$), then the function $f$ is continuous at $x=R$ from the left, i.e. $\displaystyle\lim_{x\to R^{-}}f(x)=f(R)$ (or $\displaystyle\lim_{x\to -R^{+}}f(x)=f(-R)$, respectively).
- (p210) A power series with finite radius of convergence $R>0$ uniformly converges on the domain of convergence if and only if the series converges at the endpoints $x=R$ and $x=-R$. 
- (6.14a) $\forall x \in(-r,r),\,\displaystyle f(x)=\sum_{n=0}^{\infty}a_nx^n\implies f$ is [[Derivative#Continuously Differentiability|infinitely differentiable]] on $(-r,r)$
- (6.14b) $\forall x \in(-r,r),\,\displaystyle f(x)=\sum_{n=0}^{\infty}a_n(x-c)^n\implies\forall n\geq 0,a_n=\frac{f^{(n)}(c)}{n!}$
	- $\forall x \in(-r,r),\,\displaystyle f(x)=\sum_{n=0}^{\infty}a_nx^n\implies\forall n\geq 0,a_n=\frac{f^{(n)}(0)}{n!}$


#### Some Theorems 

#not-in-course #todo 

- If the power series $\displaystyle\sum_{n=0}^{\infty}a_nx^n$ converges in $x_0$, then:
	- the series converges absolutely for all $x$ such that $|x|<|x_0|$.
	- The series converges uniformly on every closed interval $[-r,r]$ where $0<r<|x_0|$.
	- (Cauchy-Hadamard) $R=\displaystyle\frac{1}{\displaystyle\lim_{n\to\infty}\sqrt[n]{|a_n|}}$ is the radius of convergence. given the limit exists.
	- (Cauchy-Hadamard, Stonger Version) $R=\displaystyle\frac{1}{\displaystyle\limsup_{n\to\infty}\sqrt[n]{|a_n|}}$ is the radius of convergence. (the limit always exists)
	- If the limit is $\infty$, then $R=0$, and if the limit is $0$, then $R=\infty$.
	- The series converges in $R$ (or $-R$) if and only if the series converges uniformly on $[0,R]$ (or $[-R,0]$, respectively).
- Given a power series $f(x)=\sum_{n=0}^{\infty}a_nx^n$ on $[-R,R]$ that converges to $f$ on $[-R,R]$. Then:
	- For all $x\in(-R,R)$, we have $f'(x)=\sum_{n=1}^{\infty}a_nn(x)^{n-1}$. And radius of convergence of $f'$ is $R$ as well. (it's possible that the series of $f$ converges in $\pm R$, but the series of $f'$ converges does not.)
	- For all $x\in(-R,R)$, we have $\int_{0}^{x}f(t)dt=\sum_{n=0}^{\infty}\frac{a_n}{n+1}x^{n+1}$. And radius of convergence of $\int_{0}^{x}f(t)dt$ is $R$ as well. (it's possible that the series of $f$ converges in $\pm R$, but the series of $\int_{0}^{x}f(t)dt$ converges does not.)


## Operations

- Addition and Subtraction: Given two power series $f(x)=\sum a_n(x-c)^n$ and $g(x)=\sum b_n(x-c)^n$, then $f(x)\pm g(x)=\sum (a_n\pm b_n)(x-c)^n$.
	- The radius of convergence of $f(x)\pm g(x)$ is at least the minimum of the radii of convergence of $f(x)$ and $g(x)$.
- Multiplication and Division: #todo
- Differentiation and Integration:
	- $f'(x)=\sum_{n=1}^{\infty}na_n(x-c)^{n-1}=\sum_{n=0}^{\infty}a_{n+1}(n+1)(x-c)^n$.
	- $\int f(x)dx=\sum_{n=0}^{\infty}\frac{a_n}{n+1}(x-c)^{n+1}$.
	- The radius of convergence of $f'(x)$ and $\int f(x)dx$ is the same as the radius of convergence of $f(x)$.

- #todo Given power series $f(x)=\sum_{n=0}^{\infty}a_nx^n$ and $g(x)=\sum_{n=0}^{\infty}b_n(x)^n$ that converges to $f$ and $g$, respectively. Then:
	- (a.) $\sum c a_n x^n$ converges to $cf(x)$.
	- (b.) $\sum (a_n+b_n)x^n$ converges to $f(x)+g(x)$.
	- (c.) $a_n=\sum_{k=0}^{n}a_kb_{n-k}$, then $\sum a_nx^n$ converges to $f(x)g(x)$. (Cauchy product)
	- (d.) #todo composition of power series

# Taylor Series

- The **Taylor series** of an [[Derivative#Continuously Differentiability|infinitely differentiable]] function $f$ at a point $a$, is the power series $\displaystyle\sum_{n=0}^{\infty}\frac{f^{(n)}(a)}{n!}(x-a)^n$. 
	- When $a=0$ the series is called the **Maclaurin series** of $f$
	- The partial sum formed by the first $n+1$ terms of a Taylor series is a polynomial of degree $n$ that is called the $n$th [[#Taylor Polynomial]] of $f$ at $a$. (or the $n$th Maclaurin polynomial of $f$)

## Representing Functions

- (6.15) Given $f(x)$ is infinitely differentiable on $(-r,r)$, then the following are equivalent:
	- The function $f$ can be represented by a power series on $(-r,r)$
	- There exists a sequence $(a_n)$ such that for all $x\in(-r,r)$, we have $\displaystyle f(x)=\sum_{n=0}^{\infty}a_nx^n$ 
	- For all $x\in(-r,r)$, the Taylor series of $f$ at $0$ converges to $f$ at $x$.
	- For all $x\in(-r,r)$, we have $\displaystyle \lim_{n\to\infty}S_n(x)=f(x)$ (where $S_n(x)=\sum_{k=0}^{n}a_kx^k$ is the $n$-th partial sum of the power series of $f$ at $x$).
	- For all $x\in(-r,r)$, we have $\displaystyle f(x)=\sum_{n=0}^{\infty}\frac{f^{(n)}(0)}{n!}x^n$
	- For all $x\in(-r,r)$, we have $\displaystyle\lim_{n\to\infty}R_n(x)=0$ (where $R_n(x)=\frac{f^{(n+1)}(x)}{(n+1)!}$ is the remainder of the $n$-th Taylor polynomial of $f$ at $x$.)
	- ניתנת לפיתוח לטור חזקות


- If the function $f$ can be represented by a power series on $(-r,r)$, then: 
	- $f$ is infinitely differentiable on $(-r,r)$.
	- The power series is unique, and the coefficients given by $a_n=\frac{f^{(n)}(0)}{n!}$.

- #not-in-course Let $I\subset\mathbb{R}$ be an open interval. A function $f:I\to\mathbb{R}$ is **(real) analytic** if for all $a\in I$, there exists some $r>0$ and a sequence of coefficients $(a_n)$ such that $(a-r,a+r)\subset I$ and $f(x)=\sum_{n=0}^{\infty}a_n(x-a)^n$. ( #todo this is stronger than being infinitely differentiable, and weaker than being represented by one power series on the whole interval. i.e. represented by a power series $\implies$ analytic $\implies$ infinitely differentiable)

- #todo check if #not-in-course - If $f$ infinitely differentiable on $(-R,R)$, and there exists $M$ such that $|f^{(n)}(x)|\leq M$ for all $x\in(-R,R)$ and $n\in\mathbb{N}$, then $f$ can be represented by a power series on $[-R,R]$. ( #todo check also if relate to taylor's ineq.)

## Taylor's Theorem

- (wiki) Let $n\geq 1$ be an integer, and let $f:\mathbb{R}\to\mathbb{R}$ be a function that is $n$ times differentiable at the point $a\in\mathbb{R}$. Then there exists a function $R_n:\mathbb{R}\to\mathbb{R}$ such that for all $x\in\mathbb{R}$, we have:
	- $f(x)=\sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k+R_n(x)$
	- $\displaystyle\lim_{x\to a}R_n(x)=0$

- Let $f$ be a function that is $n+1$ times on an interval $I$ containing $a$. Let $P_n(x)=\sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k$ be the $n$th Taylor polynomial of $f$ at $a$. Then for all $x\in I$, there exists $c$ between $a$ and $x$ such that $R_n(x)=f(x)-P_n(x)=\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}$.
	- Conclusion: If there exists $M$ such that $|f^{(n+1)}(x)|\leq M$ for all $x\in I$, then $|R_n(x)|\leq\frac{M}{(n+1)!}|x-a|^{n+1}$.


### Estimates for the remainder

#todo it's from wikipedia

Suppose that $f$ is $n+1$ times continuously differentiable in an interval $I$ containing $a$.
 
1. If there exists $q,Q$ such that $q\leq f^{(n+1)}(x)\leq Q$ for all $x\in I$, then for all $x\in I$, we have: 
	- $q\frac{(x-a)^{n+1}}{(n+1)!}\leq R_n(x)\leq Q\frac{(x-a)^{n+1}}{(n+1)!}$ if $x>a$.
	- $Q\frac{(x-a)^{n+1}}{(n+1)!}\leq R_n(x)\leq q\frac{(x-a)^{n+1}}{(n+1)!}$ if $x<a$.
2. If $f^{(n+1)}\leq M$ for all $x\in I=(a-r,a+r)$, (with some $r>0$), then for all $x\in I$, we have $|R_n(x)|\leq M \frac{|x-a|^{n+1}}{(n+1)!}\leq M\frac{r^{n+1}}{(n+1)!}$. (Taylor's Inequality)  (see 'uniform convergence')

## Taylor Polynomial

- Let $f$ be a [[Derivative#Higher-order derivatives|n-times differentiable]] function, 
	- The polynomial $\displaystyle P_{n}(x)=\sum _{k=0}^{n}{\frac {f^{(k)}(a)}{k!}}(x-a)^{k}$ is called the $n$th order **Taylor polynomial** of $f$ centered at $a$.
		- When $a=0$, the polynomial $P_{n}(x)=\sum _{k=0}^{n}{\frac {f^{(k)}(0)}{k!}}x^{k}$ is called also the **Maclaurin polynomial** of $f$
		- Taylor Polynomial is partial sum of [[#Taylor Series]] 
	- The function $R_{n}(x)=f(x)-P_{n}(x)$ is called the $n$-th [[#Remainder Term|remainder]] of $f$ at $a$
	- The representation $f(x)=P_{n}(x)+R_{n}(x)$ of $f$ is called $n$th order **Taylor’s formula with remainder** of $f$ centered at $a$ 


- $P_{n}^{(m)}(a)=f^{(m)}(a)$ (for all $m=0,\dots,n$)

- (q4.11) Let $f(x)=x^k$ for $k\in\mathbb{N}$, and $P_{n}(x)$ Maclaurin polynomial of $f$, and $R_{n}(x)$ the reminder, then
	- for all $k>n$, $f(x)=R_{n}(x)$
	- for all $k\leq n$, $f(x)=P_{n}(x)$
- (4.7) If $f$ is a $n$ times differentiable (at $a$) function where $R_{n}(x)$ is its n-th remainder at $a$, then $\displaystyle\lim_{ x \to a }\frac{R_{n}(x)}{(x-a)^n}=0$
- (4.8) (**Uniqueness of Taylor Polynomial**)  If $f$ is a $n$ times differentiable (at $a$) function and $P_{n}$ is a polynomial and $\displaystyle\lim_{ x \to a }\frac{f(x)-P_{n}(x)}{(x-a)}=\lim_{ x \to a }\frac{R_{n}(x)}{(x-a)}=0$ then $P_{n}$ is the $n$th order Taylor polynomial of $f$ centered at $a$

### Remainder Term
#### Lagrange’s Form

- (4.4) if $f$ is a $n+1$ times differentiable function on $I$ where $a\in I$ and $R_{n}(x)$ is the n-th remainder of $f$ at $a$. then:
	- (**Lagrange’s Form**) there exists a number $c$ between $a$ and $x$ s.t: $$\displaystyle R_{n}(x)=\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}$$


- (page-70) if $f$ is continuous on $[a,b]$ (or $[b,a]$), and $n+1$ times differentiable in $(a,b)$ (or $(b,a)$), and and $n$ times differentiable in $a$ such that $f^{(n)}(x)$ is continuous at $a$, then there exists $c$ between $a$ and $b$ for which $\displaystyle R_{n}(b)=\frac{f^{(n+1)}(c)}{(n+1)!}(b-a)^{n+1}$ that is $\displaystyle f(b)=\sum^{n}_{k=0}\frac{f^{(n)}(a)}{k!}(b-a)^k+\frac{f^{(n+1)}(c)}{(n+1)!}(b-a)^{n+1}$
	- for $n=0$ it is [[Derivative#Differentiability on Interval|Lagrange's MVT]]

#### Cauchy’s Form

- (4.5) if $f$ is a $n+1$ times differentiable function on $I$ where $a\in I$ and $R_{n}(x)$ is the n-th remainder of $f$ at $a$, then for every $x\in I$ there exists a number $c$ between $a$ and $x$ s.t: $\displaystyle R_{n}(x)=(x-a)\cdot\frac{f^{(n+1)}(c)}{n!}(x-c)^{n}$

#### General Form

#not-in-course

- (4.6) if $f$ is a $n+1$ times differentiable function on $I$ where $a\in I$ and $R_{n}(x)$ is the n-th remainder of $f$ at $a$. Let be $b\in I$ and $b\neq a$, and be a continuous function $\psi:[a,b]\to\mathbb{R}$, where $\psi$ is differentiable on $(a,b)$ and $\psi(a)=0$ and $\psi'(t)\neq 0$ for all between $a$ and $b$. Then there exists a number $c$ between $a$ and $b$ s.t: $\displaystyle R_{n}(b)=\frac{\psi(b)}{\psi'(c)}\cdot\frac{f^{(n+1)}(c)}{n!}(b-c)^{n}$.
- Schlömilch’s Form (see q4.37)


# Examples

- $\displaystyle\sin x=\sum_{n=0}^{\infty}\frac{(-1)^n}{(2n+1)!}x^{2n+1}$ 
- $\displaystyle\cos x=\sum_{n=0}^{\infty}\frac{(-1)^n}{(2n)!}x^{2n}$ 
- $\displaystyle e^x=\sum_{n=0}^{\infty}\frac{1}{n!}x^n$
- $\displaystyle e^{-x}\sum_{n=0}^{\infty}\frac{(-1)^n}{n!}x^n$
- $\displaystyle\ln(1+x)=\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n}x^{n}$
- $\displaystyle\ln(1-x)=-\sum_{n=1}^{\infty}\frac{1}{n}x^{n}$
