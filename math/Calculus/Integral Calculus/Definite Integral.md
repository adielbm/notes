# Definitions

## by Draboux

### Darboux Sums
	
- The **Lower Darboux Sum** 
	- $\displaystyle L(P)=\sum^{n}_{i=1} m_{i}\cdot\Delta x_i$ where $\displaystyle{m_{i}=\inf _{x\in [x_{i-1},x_{i}]}f(x)}$
- The **Upper Darboux Sum**
	- $\displaystyle U(P)=\sum^{n}_{i=1} M_{i}\cdot\Delta x_i$ where $\displaystyle{M_{i}=\sup _{x\in [x_{i-1},x_{i}]}f(x)}$ 
- $L(P)\leq U(Q)$ (for any partitions)
- $\displaystyle\sup_{P}L(P)\leq\inf_{P}U(P)$
- (1.36) $L(P)\leq \sigma \leq U(P)$

### Upper & Lower Darboux integral

- Let $\mathcal{P}$ represent all possible [[Interval#Partition|partitions]] over $[ a , b ]$
- The **upper Darboux integral** of $f$ is 
	- $\displaystyle U_{f}= {\overline {\int _{a}^{b}}}f(x)\,\mathrm {d} x=\inf \{ U_{f,P}:P \in \mathcal{P} \}$

- The **lower Darboux integral** of $f$ is
	- $\displaystyle L_{f}= {\underline {\int _{a}^{b}}}f(x)\,\mathrm {d} x=\sup \{ L_{f,P}:P\in \mathcal{P} \}$
-  $L_{f}\leq U_{f}$
- Let $P'$ be a refinement of the partition $P$ of the given interval $[a, b]$ then:
	- $U(P')\leq U(P)$
	- $L(P)\leq L(P')$

### Darboux integral

- (d1.8) A bounded function $f:[a,b]\to \mathbb{R}$ is **Darboux-integrable** if $\displaystyle {\overline {\int _{a}^{b}}}f(x)\,dx= {\underline {\int _{a}^{b}}}f(x)\,dx$, in such case, the common value is called the **Darboux integral** of $f$ and denote as $\displaystyle\int^{b}_{a} f(x) \, dx$
## by Riemann

### Riemann Sums

Let be a function $f : [a, b] \to \mathbb{R}$ and $P=\set{a=x_{0}, x_{1}, x_{2},\dots, x_n=b}$ is a partition of $[a, b]$ and $\Delta x_i = x_i - x_{i-1}$

- (d1.38) ${\mid\mid}P{\mid\mid}=\displaystyle\lambda(P)=\max_{1\leq i\leq n}{\Delta{x_{i}}}$ is the **mesh** (or **norm**) of $P$
- (d1.35) The sum $\displaystyle \sigma= R(P) = \sum_{i=1}^{n} f(\xi_i) \cdot \Delta x_i$ where $\xi_i$ is a chosen point in the $i$-th subinterval $[x_{i-1}, x_i]$ is called a **Riemann sum** of $f$ over $[ a , b ]$ with partition $P$

### Riemann Integral

- (d1.39)  $\displaystyle\int ^b_{a}f(x) \, dx=\lim_{ \lambda(P) \to 0 }\sigma=\lim_{ \mid\mid P\mid\mid \to 0 }\sum_{i=1}^{n} f(\xi_i) \cdot \Delta x_i$ is the **definite integral** of $f$ from $a$ to $b$. 
	- if the limit exists (finite) then $f$ is **integrable**
	- $\displaystyle\forall \varepsilon>0,\exists \delta>0:\left(\max_{1\leq i\leq n}{\Delta{x_{i}}}<\delta\implies\left|(\sum_{i=1}^{n} f(\xi_i) \cdot \Delta x_i)-\int ^b_{a}f(x) \, dx\right|<\varepsilon\right)$

- (1.40) if $f$ is Riemann-integrable on $[a,b]$ then $f$ is bounded on $[a,b]$


## draft --- other def

- Consider the partition $P_n=\{a=x_{0}, x_{1}, x_{2},\dots, x_n=b\}$ of $[a, b]$ such that the subintervals have equal width $\Delta x = (b-a)/n$.
- A **Riemann sum** of $f$ over $[a, b]$ with partition $P_n$ is given by $\displaystyle\sum_{i=1}^{n} f(\xi_i) \cdot \Delta x$, where $\xi_i$ is a chosen point in the $i$-th subinterval $[x_{i-1}, x_i]$.
- The **Riemann integral** of $f(x)$ over $[a, b]$, denoted by $\int ^b_{a}f(x) \, dx$, is defined as $\displaystyle\int ^b_{a}f(x) \, dx = \lim_{ n \to \infty }\sum_{i=1}^{n} f(\xi_i) \cdot \Delta x$.

## Riemann & Darboux Equivalence

Equivalence of Definitions of Riemann and Darboux Integrals

- (1.42) $f$ is Riemann-integrable iff $f$ Darboux-integrable, in this case Riemann-integral is equal to Darboux-integral

## (half)-open interval

- (u3) Given $f$ is a function defined and bounded on $(a,b]$. Let $\displaystyle f_1(x)=\begin{cases} f(x) & x\in(a,b] \\ c & x=a \end{cases}$ where $c$ is any constant. Then $f$ is integrable on $(a,b]$ if and only if $f_1$ is integrable on $[a,b]$. In this case $\displaystyle\int ^b_{a}f_1=\int ^b_{a}f$. (similar definitions for $[a,b)$ and $(a,b)$).
- (q3.2) A function $f$ (defined and bounded on $(a,b]$) is not integrable on $(a,b]$ if and only if there exists a function $f_1$ (defined as above) that is not integrable on $[a,b]$.

## Area Function

Given $f$ is an function integrable on $[a,b]$

-  The function $\displaystyle F_{c}(x)=\int ^x_{c}f(t) \, dt$ is called an **area function** of $f$ on $[a,b]$ (where $c \in [a,b]$), (אינטגרל בלתי מסוים (d1.30)) 
- Given the area function $F_{c}(x)$ of $f$ on $[a,b]$ (where $c \in [a,b]$)
	- The area function $F_{c}(x)$ gives the net area of the region bounded by the graph of $f$ and the $t$-axis on the interval $[c, x]$
	- (q1.57) $F_{c}(x)$ is an antiderivative of $f$ on $[a,b]$
	- (1.32) $F_{c}(x)$ is continuous on $[c,b]$
	- (1.33) if $f$ is continuous on $[a,b]$ then $F_{c}(x)$ differentiable on $[c,b]$, and $F'_{c}(x)=f(x)$
- Given the area functions $F_{c}$ and $F_{d}$ of $f$ on $[a,b]$ (where $c,d \in [a,b]$)
	- (1.31) There exists a constant $K$ such that $F_{c}(x)-F_{d}(x)=K$. (also $K=\int ^d_{c}f(t) \, dt$)

# Theorems

- (1.10) $f$ is integrable, if and only if, $\forall \varepsilon>0,\exists P:U_{f,P}-L_{f,P}<\varepsilon$
- (1.11) $\displaystyle\lim_{ n \to \infty }(U(P_{n})-L(P_{n}))=0\implies \int_{a}^{b} f(x) \, dx=\lim_{ n \to \infty }U(P_{n})=\lim_{ n \to \infty }L(P_{n})$
- (1.20,q1.34) Additivity
	- If $a<c<b$ then $f$ is integrable on $[a,b]$ iff $f$ is ingerable on $[a,c]$ and $[c,b]$. In that case: $\displaystyle\int_a^b f(x) \; dx = \int_a^c f(x) \; dx \, + \int_c^b f(x) \; dx$
- (1.25) If $f(x)=g(x)$ for every $x$ excluding finite number of points on $[a,b]$, then, if $g$ integrable on $[a,b]$ then $f$ integrable on $[a,b]$, and $\int ^b_{a}f(x) \, dx=\int ^b_{a}g(x) \, dx$

- if $f$ is integrable on an interval where $a$ and $b$ are its endpoints and $|f(x)|\leq M$ for all $x$ in that interval, then $\displaystyle\left|\int^b_{a} f(t) \, dt\right|\leq M|b-a|$
- (1.41) if $f$ is Darboux-integrable on $[a,b]$, then $\displaystyle \lim_{ \lambda(P) \to 0 }(S(P)-s(P))=0$
- Odd / Even Functions (continuous on $\mathbb{R}$)
	- (q2.43, Odd)  $\forall x,f(-x)=-f(x)\implies \forall a,\displaystyle\int ^a_{-a}f(x) \, dx=0$
	- (Even) $\forall x, f(-x)=f(x)\implies\forall a,\displaystyle\int ^a_{-a}f(x) \, dx=2\int ^a_{0}f(x) \, dx$
- Periodic functions
	- If $f(x)=f(x+P)$ for all $x$, then $\displaystyle\int ^{b+P}_{a+P}f(x) \, dx=\int ^{b}_{a}f(x) \, dx$ for all $a,b$.
- If $f(x)=\begin{cases} g_1(x) & x\geq x_0 \\ g_2(x) & x\leq x_0 \end{cases}$ then $F(x)=\begin{cases} G_1(x) & x\geq x_0 \\ G_2(x) & x\leq x_0 \end{cases}$ where $G_1$ and $G_2$ are antiderivatives of $g_1$ and $g_2$ (resp.), s.t. $G_1(x_0)=G_2(x_0)$. #todo

## Integrabletly Sufficient Conditions

Sufficient conditions for integrabletly of $f$ on $[a,b]$:

- (1.11) $\displaystyle\lim_{ n \to \infty }(U(P_{n})-L(P_{n}))=0$
- (1.15) if $f$ is weakly monotonic on $[a,b]$
- (1.17) if $f$ is bounded and piecewise monotone on $[a,b]$
- (1.18) if $f$ is continuous (thus bounded) on $[a,b]$ 
- (1.19) if $f$ is bounded and continuous on $[a,b]$ (possibly expect finites number of discontinuity points)
- if $f$ is [[Continuity#Piecewise Continuous Function|piecewise continuous function]] on $[a,b]$
 ## Integrable Function Properties 

Given $f$ (and $g$) is integrable (usually on $[a,b]$, unless otherwise stated)

- (1.13, Newton–Leibniz theorem, 2nd fundamental theorem  of calculus, (הנו' היסודית)) - If $F$ is an [[Indefinite Integral|antiderivative]] of $f$ on $[a,b]$, then: 
	- $\displaystyle\int^{b}_{a} f(x) \, dx=F(b)-F(a)=F(x) \bigg\rvert_a^b$
- $\forall a,b,c$ we have $\displaystyle\int ^b_{a}c \, dt=c(b-a)$ 
- (1.21) $f$ is integrable on $[c,d]\subseteq[a,b]$
- (d1.22a) Reversing Limits: $\displaystyle\int ^b_{a}f(x) \, dx=-\int ^a_{b}f(x) \, dx$
- (d1.22b) Identical Limits (Zero Width Interval): $\displaystyle\int ^a_{a}f(x) \, dx=0$
- Linearity
	- (1.24a) Constant Multiple
		- $\displaystyle\int ^b_{a}cf(x) \, dx=c\int ^b_{a}f(x) \, dx$
			- ($c=-1$ special-case)  $\displaystyle\int ^b_{a}(-f(x)) \, dx=-\int ^b_{a}f(x) \, dx$
	- (1.24b) Sum
		- $\displaystyle\int ^b_{a}(f(x)\pm g(x)) \, dx=\int ^b_{a} f(x)\, dx\pm\int ^b_{a} g(x)\, dx$
- (1.23) Additivity: $\displaystyle\int ^b_{a}f(x) \, dx=\int ^c_{a}f(x) \, dx+\int ^b_{c}f(x) \, dx$  (given $a,b,c\in\mathbb{R}$, and $f$ is integrable on each closed intervals that their endpoints are two of $a,b,c$)
- (1.26) Monotonicity 
	- $\forall x \in[a,b], f(x)\leq g(x)\implies\displaystyle\int ^b_{a}f(x) \, dx\leq\int ^b_{a}g(x) \, dx$
- (1.27) $|f|$ is also integrable on $[a,b]$
- (1.32) $F_{a}(x)=\displaystyle\int ^x_{a}f(t) \, dt$ is continuous on $[a,b]$
- (1.31) $\displaystyle \int _{c}^{x} f(t) \, dt-\int _{d}^{x} f(t) \, dt=\int _{c}^{d} f(t) \, dt$ for all $c,d$.  (i.e.  $F_{c}(x)-F_{d}(x)=\int ^d_{c}f(t) \, dt$)
- (1.34) if $f$ has an antiderivative on $[a,b]$ then $F_{c}(x)=\displaystyle\int ^x_{c}f(t) \, dt$ is an antiderivative of $f$ on $[a,b]$
- (q1.50b) $\displaystyle\left|\int ^b_{a}f(x) \, dx\right|\leq \int ^b_{a}|f(x)| \, dx$
- (q1.51) **Max-Min Inequality** - if $m\leq f(x)\leq M$ for all $x \in[a,b]$ then $m(b-a)\leq \int ^{b}_{a}f(x) \, dx\leq M(b-a)$
- $\forall x\in[a,b], f(x)\geq 0\implies\int ^{b}_{a}f(x) \, dx\geq 0$

## Continuous Function Properties

if $f$ is [[Continuity#Continuous over an Interval|continuous]] on $[a,b]$ then:

- (1.18) $f$ is integrable on $[a,b]$ (thus $f$ has [[#Integrable Function Properties|integrable function properties]])
- (1.29) MVT for Integrals 
	- $\exists c \in[a,b]:\displaystyle\int ^b_{a}f(x) \, dx=f(c)(b-a)$ 
	- (see also [[#Average Value]])
- The **Fundamental Theorem of Calculus**
	- (1.33) 
		- The [[#area function]] $\displaystyle F_{a}(x)=\int_{a}^{x}f(t)  \, dt$ is differentiable on $[a,b]$, and 
		- $\displaystyle F'_{a}(x)=\frac{d}{dx}\left[ \int_{a}^{x}f(t)  \, dt \right]=f(x)$
	- (1.33')
		- $f$ has an antiderivative function on $[a,b]$
		- every antiderivative function of $f$ on $[a,b]$ is of the form $\displaystyle\int ^x_{a}f(t) \, dt+C$ where $C$ is some real number
	- (see also [[#Integrable Function Properties|Newton–Leibniz theorem]] which is sometimes referred to as the second fundamental theorem of calculus)
- (q1.57) for all $c \in [a,b]$, the area function $F_{c}(x)=\displaystyle\int ^x_{c}f(t) \, dt$ is an antiderivative of $f$ on $[a,b]$


# Applications

- The Net Change Theorem - The net change in a differentiable function $F(x)$ over $[a,b]$ is is the integral of its rate of change, which is $\displaystyle\int_{a}^{b} F'(x) \, dx = F(b) - F(a)$

## The Area Problem 

> A procedure for finding areas via integration is called the **antiderivative method**

- If $f$ (and $g$) are continuous
	- $\displaystyle\int^{b}_{a} |f(x)| \, dx$ is the area of of the region that lies between the graph of $f$ and the interval $[a, b]$ on the $x$-axis
	-  $\displaystyle A =\left|{\int^{b}_{a}(f(x)-g(x))  \, dx}\right|$ is the area between the curves $f(x)$ and $g(x)$ over the interval $[a, b]$

- If $f(x)$ is nonnegative and integrable over a closed interval $[a,b]$, then the area under the curve $f(x)$ over $[a,b]$ is the integral of $f$ from $a$ to $b$, $A=\int _{a}^{b}f(x) \, dx$

## Average Value

- If $f$ is integrable on $[a,b]$, then its average value on $[a,b]$ is $\displaystyle\frac{1}{b-a}\int ^b_{a}f(x) \, dx$ (see also [[#Theorems of Continuous Function|MVT for Integrals]])

## Arc Length

- If $f'$ is [[Derivative#Continuously Differentiability|continuously differentiable]] on $[a,b]$, then the **length** (**arc length**) of the curve $y=f(x)$ from the point $(a, f(a))$ to the point $(b, f(b))$ is $\displaystyle L=\int ^b_{a}\sqrt{ 1+(f'(x))^2 } \, dx=\int ^b_{a}\sqrt{ 1+\left(\frac{dy}{dx}\right)^2 } \, dx$ 


## Volume

#### Solid of Revolution

The solid generated by rotating (or revolving) a planar region about an axis in its plane is called a **solid of revolution**.

- The Disk Method
	- Rotation about the $x$-axis
		- $R(x)$ is the distance from the $x$-axis of revolution to the planar region’s boundary (the curve $y=R(x)$)
		- $A(x)=\pi \cdot(R(x))^2$ is the area of a disk of radius $R(x)$
		- $V=\displaystyle\int ^b_{a}A(x) \, dx$ is the volume of the solid generated by revolving a region between the $x$-axis and a curve $y=R(x)$ (where $a\leq x\leq b$) about the $x$-axis
	- Rotation about the $y$-axis
		- $R(y)$ is the distance from the $y$-axis of revolution to the planar region’s boundary (the curve $x=R(y)$)
		- $A(y)=\pi (R(y))^2$ is the area of a disk of radius $R(y)$ 
		- $V=\displaystyle\int ^d_{c}A(y) \, dy$ is the volume of the solid generated by revolving a region between the $y$-axis and a curve $x=R(y)$ (where $c\leq y\leq d$) about the $y$-axis

- The Washer Method 
