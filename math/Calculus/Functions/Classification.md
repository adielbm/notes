## Elementary Functions

- An **elementary function** is a function which belongs to the class of functions consisting of the polynomials, the exponential functions, the logarithmic functions, the trigonometric functions, the inverse trigonometric functions, and the functions obtained from those listed by the four arithmetic operations and/or by composition, applied finitely many times (see d2.3-infi2)
	- All elementary functions are continuous on their domains.

### Algebraic functions

**Algebraic functions** are functions that can be expressed as the solution of a polynomial equation with integer coefficients.

- [[Polynomial|Polynomials]]
	- [[Calculus/Functions/Limit#Polynomials|Limit]]
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
	- [[Calculus/Functions/Limit#Exponential functions|limit]]  
		- (Increasing) $a>1\implies$ 
			- $\displaystyle\lim_{ x \to -\infty }f(x)=0$
			- $\displaystyle\lim_{ x \to \infty }f(x)=\infty$
		- (Decreasing) $0<a<1\implies$ 
			- $\displaystyle\lim_{ x \to -\infty }f(x)=\infty$
			- $\displaystyle\lim_{ x \to \infty }f(x)=0$
	- [[Derivative#Examples|Derivative]]

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
	- [[Calculus/Functions/Limit#Logarithmic functions|limit]]  
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

- [[Calculus/Functions/Limit#Trigonometric functions|Limit]]
- [[Derivative#Examples|Derivative]]

##### Inverse trigonometric functions

- [[Calculus/Functions/Limit#Trigonometric functions|Limit]]
- [[Derivative#Examples|Derivative]]