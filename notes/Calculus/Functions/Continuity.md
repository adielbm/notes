# Continuous at Point

## Definitions

- $f$ is **continuous** in $x_{0}$
- $\displaystyle\lim_{ x \to x_{0} }f(x)=f(x_{0})$
- The **limit** of $f$, as $x$ approaches $x_{0}$, is $f(x_{0})$
- $\displaystyle{\displaystyle (\forall \varepsilon >0)\,(\exists \delta >0)\,(\forall x\in \mathbb {R} )\,(|x-x_{0}|<\delta \implies |f(x)-f(x_{0})|<\varepsilon )}$ 
- (5.4) $\forall(x_{n})^{\infty}_{n=1}~,~\displaystyle\lim_{ n \to \infty}x_{n}=x_{0}\implies\displaystyle\lim_{ n \to \infty }f(x_{n})=f(x_{0})$
- (5.6) $\displaystyle\lim_{ h \to 0 }f(x_{0}+h)=f(x_{0})$
- (5.18) $f$ is **right-** and **left-continuous at** $x_{0}$

## Theorems 

- (q5.2) If $f(x)=g(x)$ for all $x$ in some neighborhood of $x_0$, then $f$ is continuous in $x_0$ iff $g$ is continuous in $x_0$ 
- (7.9) if $f$ is differentiable at $x_{0}$, then it is continuous at $x_{0}$
- (5.11) **Continuous Arithmetic** - If $f$ and $g$ are continuous at $x_{0}$, then $f\pm g$, $f\cdot g$, and $f/g$ (given $g\neq 0$), are continuous at $x_{0}$,
- (5.15) **Composition Function** - if $g$ is continuous in $t_{0}$, and $f$ is continuous in $x_{0}$ where $x_{0}=g(t_{0})$, then $f(g(x))$ is continuous in $t_{0}$
- $f$ is continuous at $\displaystyle\lim_{ n \to \infty }a_{n}$ then $\displaystyle f{(\lim_{ n \to \infty }a_{n})}=\lim_{ n \to \infty }f (a_{n})$

## One Side

- $f$ is **left-continuous at** $x_{0}$
	- $\displaystyle\lim_{ x \to x^{-}_{0} }f(x)=f(x_{0})$
- $f$ is **right-continuous at** $x_{0}$
	- $\displaystyle\lim_{ x \to x^{+}_{0} }f(x)=f(x_{0})$

## Discontinuity point 

#not-in-course 

- **Removable discontinuity** - $\displaystyle\lim_{ x \to x_{0} }f(x)=L\in\mathbb{R}$, and $f(x_{0})\neq L$ (or $f(x_{0})$ is undefined)
- **Jump discontinuity** (first kind) - $\displaystyle\lim_{ x \to x_{0}^{-} }f(x)\neq\lim_{ x \to x_{0}^{+} }f(x)$
- **Essential discontinuity** (second kind) - At least one of the two one-sided limits does not exist (although can be $\pm\infty$)

# Continuous over an Interval

- **Definitions** (assuming $f$ is defiened in the interval $I$)
	- $f$ is continuous on the interval $I$ 
	- $f$ is **continuous** on **every inferior point** in $I$, and **right-continuous at** the **left-endpoint** (if exists), and **left-continuous at** the **right-endpoint** (if exists).
	- $(\forall{x_{0}\in{I}})(\forall{\varepsilon>0})(\exists\delta>0):(\forall{x\in{I}}),~|x-x_{0}|<\delta\implies{|f(x)-f(x_{0})|<\varepsilon}$
	- (5.27) For each sequence $(x_{n})^{\infty}_{n=1}$ of points in the interval $I$. we have $\displaystyle\lim_{ n \to \infty }x_{n}=x_{0}\in{I}\implies{\lim_{ n \to \infty }}f(x_{n})=f(x_{0})$

#### Theorems

- (assuming $f$ is defined on the interval $(a,b)$)
	- if $f$ is continuous on each interval $[c,d]\subset(a,b)$ then $f$ is continuous $(a,b)$. (exam23A.tB.q9b)

- (assuming $f$ is continuous on the interval $I$)
	- $f$ is injective $\iff$ $f$ is [[Classification#Monotonicity|monotonic]] 
	- (5.43) if $f$ is monotonic then there exist a inverse fucntion $f^{-1}$ whose domain is $f(I)$ and its image is $I$ which $f^{-1}$ itself is monotonic and continuous on $f(I)$. ($f^{-1}$ is increasing if $f$ is decreasing, and vice versa)


- (assuming $f$ is continuous on $I=[a,b]$)
	- (5.29) **Bolzano's Theorem**
		- $f(a)\cdot f(b)<0\implies \exists c\in(a,b):f(c)=0$
	- (5.31) **Intermediate Value Theorem** (IVT)
		- $(\displaystyle  {\min(f(a),f(b))\leq t\leq\max(f(a),f(b))})\implies{\exists{c}\in{[a,b]}:f(c)=t}$
	- (5.32) **Brouwer's Fixed Point Theorem** (1-dim) 
		- $f:[a,b]\to[a,b]\implies\exists{x}\in{[a,b]}:f(x)=x$
	- (5.34, 5.38) Preservation of intervals - $f(I)= \set{f(x):x\in{I}}$ is either an **closed interval** or a **point**
	- (5.35) Boundedness theorem (W1, Weierstrass 1)
		- $f$ is **bounded** on $I=[a,b]$
		- $\exists{m,M}: \displaystyle  {\displaystyle m\leq f(x)\leq M\quad \forall x\in [a,b]}$
	- (5.37) **Extreme value theorem** (EVT, W2, Weierstrass 2)
		- $f$ has both a maximum and a minimum on $I=[a,b]$
		- $\exists c,d\in[a,b]:\forall{x}\in[a,b],~f(c)\geq f(x) \geq{f(d)}$
	- (q8.25) if $f$ is **monotonic** on $(a,b)$ then $f$ is **monotonic** on $[a,b]$ 
	- (5.48) **Heine–Cantor theorem** - $f$ is uniformly continuous on it.
	- $\forall x \in[a,b],f(x)>0\implies \inf{f((a,b))>0}$ (e2019b91q9)
	- (see more on [[Definite Integral#Theorems of Continuous Function]])


## Examples

- (e5.2) $f(x)=|x|$ is continuous everywhere
- (5.5) $f(x)=\sqrt{ x }$ is continuous on $(0,\infty)$
- (5.7) $\sin$ and $\cos$ are continuous everywhere
- (5.12a) All **polynomial functions** are continuous everywhere 
- (5.12b) All **rational functions** are continuous over their domain

## Uniform continuity

 #not-in-course 

Definition
- $f$ is **uniformly continuous** on the interval $I$
- (d5.46) $(\forall{\varepsilon>0})(\exists\delta>0):(\forall{x,y\in{I}}),~|x-y|<\delta\implies{|f(x)-f(y)|<\varepsilon}$

Theorems
- (5.47) if $f$ is uniformly continuous on $I$, then it is $f$ is continuous on $I$
- (5.48) **Heine–Cantor theorem** - if $f$ is continuous on the closed interval $I=[a,b]$, then $f$ is uniformly continuous on it.
- (5.48) If $f$ is defined on the open interval $I=(a,b)$, then $f$ is uniformly continuous on it, if and only if, $f$ is continuous on it, and the one-side limits $\displaystyle\lim_{ x \to a^{+} }f(x)$ and $\displaystyle\lim_{ x \to b^{-} }f(x)$ are defined.

# Piecewise Continuous Function

#not-in-course

- A function $f:[a,b]\to\mathbb{R}$ is **piecewise continuous** if there exists a finite subset $\{ x_{0},x_{1},\dots, x_{n} \}\subseteq[a,b]$ such that:
	- $a\leq x_{0}<x_{1}<\ldots<x_{n}\leq b$
	- $f$ is continuous on each open interval $(x_{i-1},x_{i})$ for $i=1,2,\dots,n$
	- For each $i$, the one-sided limits $\displaystyle\lim_{ x \to x_{i-1}^{+} }f(x)$ and $\displaystyle\lim_{ x \to x_{i}^{-} }f(x)$ exist and are finite. (we make the obvious variations if either $x_0=a$ or $x_n=b$)
- If $f$ is defined on $\mathbb{R}$, then $f$ is piecewise continuous if it is piecewise continuous restricted to every bounded closed interval $[a,b]$.
- All piecewise continuous functions are [[Definite Integral|integrable]]
- The points of discontinuity subdivide $[a,b]$ into open and half-open subintervals on which $f$ is continuous, and the limit criteria above guarantee that $f$ has a continuous extension to the closure of each subinterval.