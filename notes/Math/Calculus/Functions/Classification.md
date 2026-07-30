## Elementary Functions

- An **elementary function** is a function which belongs to the class of functions consisting of the polynomials, the exponential functions, the logarithmic functions, the trigonometric functions, the inverse trigonometric functions, and the functions obtained from those listed by the four arithmetic operations and/or by composition, applied finitely many times (see d2.3-infi2)
	- All elementary functions are continuous on their domains.

### Algebraic functions

**Algebraic functions** are functions that can be expressed as the solution of a polynomial equation with integer coefficients.

- [[Polynomial|Polynomials]]
	- [[Math/Calculus/Functions/Limit#Polynomials|Limit]]
- [[Rational function|Rational functions]]: A ratio of two polynomials.
- nth root

### Transcendental functions

**Transcendental functions** are functions that are not algebraic.
#### Exponential Functions

- $f(x)=a^x$ where $a>0$
	- $\text{dom}(f)=\mathbb{R}$
	- $f$ is continuous on $\mathbb{R}$
	- one-to-one function
	- x-intercept: none
	- y-intercept:  $(0,1)$
	- $\text{Im}f=(0,\infty)$
	- Inverse Function $f^{-1}=\log_{a}(x)$ (where $a\neq 1$)
	- [[Math/Calculus/Functions/Limit#Exponential functions|limit]]  
		- (Increasing) $a>1\implies$ 
			- $\displaystyle\lim_{ x \to -\infty }f(x)=0$
			- $\displaystyle\lim_{ x \to \infty }f(x)=\infty$
		- (Decreasing) $0<a<1\implies$ 
			- $\displaystyle\lim_{ x \to -\infty }f(x)=\infty$
			- $\displaystyle\lim_{ x \to \infty }f(x)=0$
	- [[Derivative#Examples|Derivative]]


- (**natural exponential function**) $f(x)=e^x$
- generalizations of exponential function:
	- $f(x)=ab^{cx+d}$, for $a,b,c,d \in \mathbb{R}$ and $b>0$
		- $f(x)$ is an **exponentially increasing function** if $c>0$, and is an **exponentially decreasing function** if $c<0$.
	- $f(x)=ab^{x}=a(1+r)^x$, where: 
		- $a$ is the **initial amount**
		- $b$ is the **base**
			- if $0<b<1$, then $f$ is an exponential decay
		- $r$ is the **growth rate** (if $r>0$) or the **decay rate** (if $r<0$) per time period
		- $x=0,1,2,\dots$ is the number of time periods that have passed
	- (**exponential decay**) $f(x):[0,\infty]\to \mathbb{R}$, if $\exists \lambda>0:\frac{df}{dx}=-\lambda f$ (or equivalently: $\exists \lambda>0,a>0:f(x)=ae^{-\lambda x}$), where:
		- $a=f(0)$ is the **initial amount**
		- $\lambda=-\ln b$ is the **decay constant** (where $b$ is the base)
		- [[Nuclear chemistry|half-life]]: $t_{1/2}=\frac{\ln(2)}{\lambda}$
		- mean lifetime: $\tau=\frac{1}{\lambda}$

#### Logarithmic Functions

- $f(x)=\log_{a}(x)$ where $a>0$ and $a\neq 1$
	- $\text{dom}f=(0,\infty)$
	- $\text{Im}f=\mathbb{R}$
	- $f$ is continuous on $(0,\infty)$
	- one-to-one function
	- X-intercept: $(1,0)$
	- Y-intercept: none
	- Asymptotes
		- Vertical asymptote at $x=0$
		- Horizontal asymptote as $x$ approaches infinity
	- Inverse Function $f^{-1}=a^x$
	- [[Math/Calculus/Functions/Limit#Logarithmic functions|limit]]  
		- (Increasing) $a>1\implies$ 
			- $\displaystyle\lim_{ x \to 0^+}\log_{a}(x)= -\infty$
			- $\displaystyle\lim_{ x \to \infty }\log_{a}(x)=\infty$
		- (Decreasing) $0<a<1\implies$ 
			- $\displaystyle\lim_{ x \to 0^+ }\log_{a}(x)=\infty$
			- $\displaystyle\lim_{ x \to \infty }\log_{a}(x)=-\infty$
	- [[Derivative#Examples|Derivative]]


#### Power functions

- $f(x)=ax^r$
- $a,r \in \mathbb{R}$

#### Periodic functions

##### Trigonometric Functions 

- [[Math/Calculus/Functions/Limit#Trigonometric functions|Limit]]
- [[Derivative#Examples|Derivative]]

##### Inverse trigonometric functions

- [[Math/Calculus/Functions/Limit#Trigonometric functions|Limit]]
- [[Derivative#Examples|Derivative]]