Suppose that $F(x)$ and $G(x)$ are antiderivatives of $f(x)$ and $g(x)$, respectively

|                         | Formula                                                                                          |                         |
| ----------------------- | ------------------------------------------------------------------------------------------------ | ----------------------- |
| Constant Multiplication | $\displaystyle\int cf(x)dx=c\int f(x)dx$                                                         | $c\in\mathbb{R}$        |
| Sum / Difference        | $\displaystyle \int \left(f(x)\pm g(x)\right)dx= \int f(x)dx\pm \int  g(x)dx$                    |                         |
| (2.4) Linearity         | $\displaystyle\int (\alpha f(x)+\beta g(x)) \, dx=\alpha\int f(x) \, dx+\beta \int g(x) \, dx$   |                         |
| Power Rule              | $\displaystyle\int x^r \, dx=\frac{x^{r+1}}{r+1}+C$                                              | $-1\neq r\in\mathbb{R}$ |
|                         | $\displaystyle\int \frac{1}{x} \, dx = \ln\vert {x}\vert + C$                                    |                         |
| Exponential             | $\displaystyle\int a^x \, dx=\frac{a^x}{\ln a}$ (Special Case $\displaystyle\int e^x \, dx=e^x$) | $a\neq 1,a>0$           |
| U-Substitution          | $\displaystyle\int f(g(x)) g'(x)=F(g(x))+C$                                                      |                         |





- ln
	- $\displaystyle\int \ln x \, dx=x\ln x-x+C$
- Trigonometric
	- $\displaystyle\int \sin x \, dx=-\cos x+C$
	- $\displaystyle\int  \cos x\, dx=\sin x+C$
	- $\displaystyle\int \tan x \, dx=\ln\left|\cos x\right|+C$
	- $\displaystyle\int \cot x\, dx=\ln\left|\sin x\right|+C$
- Reciprocal Trigonometric
	- $\displaystyle\int \frac{1}{\sin x} \, dx=\ln\left|\tan \frac{x}{2}\right|+C$
	- $\displaystyle\int \frac{1}{\cos x} \, dx=-\ln\left|\tan \left( \frac{x}{2}-\frac{\pi}{4} \right)\right|+C$
	- $\displaystyle\int \frac{1}{\sin^2x} \, dx=-\cot x$
	- $\displaystyle\int \frac{1}{\cos^2x} \, dx=\tan x$
- Inverse Trigonometric
	- $\displaystyle\int \frac{1}{1 + x^2} \, dx = \arctan x + C$
	- $\displaystyle\int \frac{1}{\sqrt{1 - x^2}} \, dx = \arcsin x + C$
	- $\displaystyle\int \frac{1}{\sqrt{ a^2+x^2 }} \, dx=\arcsin \frac{x}{a}+C$


some exmaple

- (2.8a) $\displaystyle\int x\ln x \, dx=\frac{x^2\ln x}{2}-\frac{x^2}{4}+C$
- (2.9) $\displaystyle\int \ln x \, dx=x\ln x-x+C$
- (2.10) $\displaystyle\int \ln^2x \, dx=x\ln^2x-2x\ln x+2x+C$
- (e2.12) $\displaystyle I_{m}=\int \frac{1}{(x^2+a^2)^{m}} \, dx={\begin{cases}I_{1}=\frac{1}{a}\arctan \frac{x}{a}+C \\ I_{m+1}=\frac{1}{2ma^2}\cdot \frac{x}{(x^2+a^2)^m}+\frac{2m-1}{2ma^2}I_{m} \end{cases}}$
- (by power rule)
	- $\int \frac{1}{\sqrt{ x }} \, dx=2\sqrt{ x }+C$ 
	- $\int 0 \, dx=C$
	- $\int 1 \, dx=\int  \, dx=x+C$

- $\displaystyle\int (ax+b)^n \, dx=\frac{(ax+b)^{n+1}}{a(n+1)}+C$ (for $\alpha\neq -1$) #todo 

> Read More 
> https://en.wikipedia.org/wiki/Integration_by_reduction_formulae
> https://en.wikipedia.org/wiki/Lists_of_integrals
> 

# Integration by Parts

- (2.6) Integration by parts
	- $\int f(x)g'(x) \, dx=f(x)g(x) -\int f'(x)g(x) \, dx$ 

# Substitution

#### Version 1

- substitute and evaluate:
$$\int f(\varphi(x))\varphi'(x)\, dx={\color{gray}\left[\begin{align} t &= \varphi(x) \\ dt &= \varphi'(x)dx \end{align}\right]}=\int f(t) \, dt$$
- return to $x$ by substitute $t=\varphi(x)$
- assumptions:
	- $\varphi$ is continuously differentiable on $J$
	- $f$ is continuous on $I$
	- $\varphi(J)\subseteq I$ (so that $f \circ \varphi$ is defined)

- Thomas' & Stewart
	- $u=g(x)$ is a differentiable function whose range is an interval $I$
	- $f$ is continuous on $I$
	- $\int f(g(x)) \cdot g'(x) \, dx=\int f(u) \, du$
- Goldstein-Lay-Calculus
	- substitute $\begin{align} u &= g(x) \\ du &= g'(x)dx \end{align}$ (assume $g$ is continuously differentiable on $J$ )
	- Integrate the resulting function of $u$.
	- Rewrite the answer in terms of $x$ by replacing $u$ by $g(x)$
- Briggs
	- Given an indefinite integral involving a composite function $f(g(x))$, indentify the inner function $u=g(x)$ such that a constant multiple of the $g'(x)$ appears in the integrand.
	- Substitute $\begin{align} u &= g(x) \\ du &= g'(x)dx \end{align}$
	- Evaluate the new indefinite integral with respect to $u$.
	- Write the result in terms of $x$ by replacing $u$ by $g(x)$.


##### Logarithmic Differentiation

- $\displaystyle\int \frac{f'(x)}{f(x)} \, dx=\ln|f(x)|+C$


####  Version 2

- first, substitute and evaluate:
$$\int f(x) \, dx={\color{gray}\left[\begin{align} x &= \varphi(t) \\ dx &= \varphi'(t)dt \end{align}\right]}=\int f(\varphi(t))\varphi'(t) \, dt$$
- and then return to $x$ by substitute $t=\varphi^{-1}(x)$




$\int f(x) \, dx=\int f(g(t))g'(t) \, dt\Big\vert_{t=g'(x)}$


- (2.5)  $f(\alpha x+\beta)$ from (where $\alpha\neq 0$)
	- $\displaystyle\int f(x) \, dx=F(x)+C\implies\displaystyle\int f(\alpha x+\beta) \, dx=\frac{1}{\alpha}F(\alpha x+\beta)+C$ 

#### Trigonometric substitution

| Integrand containing | Substitution                                                            | Identity            |                                                       | Result of Substitution | After Simplification |
| -------------------- | ----------------------------------------------------------------------- | ------------------- | ----------------------------------------------------- | ---------------------- | -------------------- |
| ${a^2-x^2}$          | $x=a\sin t$ <br>$dx=a\cos t \,dt$ <br>$t=\arcsin {\frac {x}{a}}$        | $\sin^2t+\cos^2t=1$ | $-\frac{\pi}{2}\leq t\leq \frac{\pi}{2}$              | $a^2(1-\sin^2 t)$      | $a^2\cos^2t$         |
| ${a^2+x^2}$          | $x=a\tan t$  <br>$dx=a\sec^2 t \,dt$ <br>$t=\arctan {\frac {x}{a}}$     | $\tan^2t+1=\sec^2t$ | $-\frac{\pi}{2}<t<\frac{\pi}{2}$                      | $a^2(1+\tan^2t)$       | $a^2\sec ^2t$        |
| ${x^2-a^2}$          | $x=a\sec t$$dx=a\sec t\tan t \,dt$ <br>$t=\text{arcsec} {\frac {x}{a}}$ | $\sec^2t-1=\tan^2t$ | $0\leq t<\frac{\pi}{2}$ or $\pi\leq t<\frac{3\pi}{2}$ | $a^2(\sec^2t-1)$       | $a^2\tan ^2t$        |




| Integrands                                     | Substitutions                                                             |
| ---------------------------------------------- | ------------------------------------------------------------------------- |
| $a^{2}+(f(x))^{2}$                             | $f(x)=a\tan\theta$ or<br>$a\cot\theta$ or<br>$a\sinh\theta$               |
| $a^{2}-(f(x))^{2}$                             | $f(x)=a\sin\theta$ or <br>$a\cos\theta$                                   |
| $(f(x))^{2}-a^{2}$                             | $f(x)=a\sec\theta$ or <br>$a \csc$ or <br>$a\cosh\theta$                  |
| $a+f(x)$                                       | $f(x)=a\tan^{2}\theta$ or <br>$a\cot^{2}\theta$ or <br>$a\sinh^{2}\theta$ |
| $a-f(x)$                                       | $f(x)=a\sin^{2}\theta$ or <br>$a\cos^{2}\theta$                           |
| $f(x)-a$                                       | $f(x)=a\sec^{2}\theta$ or <br>$a \csc^2 \theta$ or <br>$\cosh^{2}\theta$  |
| $ax-x^{2}$                                     | $x=a\sin^{2}\theta$ or<br>$a \cos² 0$                                     |
| $(a-x)(x-b)$                                   | $x=a\cos^{2}\theta+b\sin^{2}\theta$                                       |
| $\displaystyle\frac{a^{n}-x^{n}}{a^{n}+x^{n}}$ | $x^{n}=a^{n}\cos\theta$                                                   |




#### Tangent half-angle substitution


- $\displaystyle \sin x={\frac {2t}{1+t^{2}}}$
- $\displaystyle\cos x={\frac {1-t^{2}}{1+t^{2}}}$
- $\displaystyle dx={\frac {2}{1+t^{2}}} dt$


- $\int f(\cos x)\sin x \, dx$ then we can substitute $t=\cos x$
- $\int f(\sin x)\cos x \, dx$ then we can substitute $t=\sin x$


- $\displaystyle\int \sin^{m}x\cos^{n}x \, dx$ ($m,n$ are nonnegative integers)
	- $m$ is odd:
		- $m=2k+1$
		- $\sin ^m x=\sin^{2k+1}x=(\sin^2x)^{k}\sin x=(1-\cos^{2} x)^{k}\sin x$
	- $n$ is odd: 
		- $n=2k+1$
		- $\cos ^n x=\cos^{2k+1}x=(\cos^2x)^{k}\cos x=(1-\sin^{2} x)^{k}\cos x$
	- $m,n$ are even:
		- #todo 

# Rational Functions

- $\displaystyle \frac{a}{(x-p)^k}$ (where $a,p \in \mathbb{R},\,k \in \mathbb{N}$)
	- $x-p=t$ and $dx=dt$
	- $\displaystyle \int \frac{a}{(x-p)^{k}} \, dx=\begin{cases}{ a\ln|t|+C}  & k=1 \\ a \frac{t^{1-k}}{1-k}+C & k\geq 2 \end{cases}=\begin{cases}{ a\ln|x-p|+C}  & k=1 \\ a \frac{(x-p)^{1-k}}{1-k}+C & k\geq 2 \end{cases}$
- $\displaystyle \frac{ax+b}{(x^2+px+q)^k}$ (where $a,b,p,q \in \mathbb{R},\,k \in \mathbb{N}$ and $x^2+px+q$ has no real roots)
	- Step 1:
		- $\displaystyle ax+b=\frac{a}{2}(2x+p)+b-\frac{ap}{2}$ (note $(2x+p)=(x^2+px+q)'$)
		- $\int \frac{ax+b}{(x^2+px+q)^k} \, dx= \frac{a}{2}\int \frac{2x+p}{(x^2+px+q)} \, dx+\left( b-\frac{ap}{2} \right)\int  \frac{dx}{(x^2+px+q)^k}$
	- Step 2: (evaluate the first integral)
		- $u=x^2+px+q$ and $du=(2x+p)dx$
		- $\displaystyle\int \frac{2x+p}{(x^2+px+q)^{k}} \, dx=\int  \frac{du}{u^k}=\begin{cases}{ \ln|u|+C}  & k=1 \\ \frac{u^{1-k}}{1-k}+C & k\geq 2 \end{cases}$
		- $\displaystyle\int \frac{2x+p}{(x^2+px+q)}dx=\ln(x^2+px+q)+C$
		- $\displaystyle\int \frac{2x+p}{(x^2+px+q)^k}dx=\frac{1}{1-k}(x^2+px+q)^{1-k}+C$ (where $k\geq 2$)
	- Step 3: (evaluate the second integral)
		- $\displaystyle \int  \frac{dx}{(x^2+px+q)^k}$
		- $(x^2+px+q)=\left( x+\frac{p}{2} \right)^2+q-\frac{p^2}{4}$ ([[Completing the square]])
		- $(x^2+px+q)=\left( x+\frac{p}{2} \right)^2+d^2$
		- substitute: $x+\frac{p}{2}=t$ and $dx=dt$
		- $\displaystyle \int  \frac{dx}{(x^2+px+q)^k}=\int  \frac{dx}{\left(\left( x+\frac{p}{2} \right)^2+d^2\right)^k}=\int \frac{dt}{(t^2+d^2)^k}$
		- $\displaystyle I_{k}=\int \frac{dt}{(t^2+d^2)^k}$ (see [[#Examples]] e2.12)
		- $\displaystyle I_{1}=\frac{1}{d}\arctan \frac{t}{d}+C$
		- $\displaystyle I_{k+1}=\frac{1}{2kd^2}\cdot \frac{t}{(t^2+d^2)^k}+\frac{2k-1}{2kd^2}I_k$

### Partial Fraction Decomposition

Decomposition of a [[rational function]] $N(x)/D(x)$ into partial fractions 

1. Divide when improper: When $N(x)/D(x)$ is [[Rational function|improper]] (i.e. $\deg N \geq \deg D$), [[Polynomial Long Division|divide]] the denominator into the numerator to obtain $\displaystyle\frac{N(x)}{D(x)}=Q(x)+\frac{N_{1}(x)}{D(x)}$   where $\deg N_{1}(x)< \deg D(x)$. Then apply Steps 2, 3, and 4 to the proper rational expression $N_{1}(x)/D(x)$
2. Factor denominator: Completely factor the denominator into factors of the form $(px+q)^m$ and $(ax^2+bx+c)^n$ where $ax^2+bx+c$ is irreducible
3. Linear factors: For each factor of the form $(px + q)^m$, the partial fraction decomposition must include the following sum of $m$ fractions $\displaystyle\frac{A_{1}}{(px+q)}+\frac{A_{2}}{(px+q)^2}+\dots+\frac{A_{m}}{(px+q)^m}$
4. Quadratic factors: For each factor of the form $(ax^2 + bx + c)^n$, the partial fraction decomposition must include the following sum of $n$ fractions. $\displaystyle \frac{B_{1}x+C_{1}}{ax^2+bx+c}+\frac{B_{2}x+C_{2}}{(ax^2+bx+c)^2}+\dots+\frac{B_{n}x+C_{n}}{(ax^2+bx+c)^n}$




# Definite Integrals


|                |                                                                                   |                                          |
| -------------- | --------------------------------------------------------------------------------- | ---------------------------------------- |
| Additivity     | $\displaystyle\int_a^b f(x) \; dx = \int_a^c f(x) \; dx \, + \int_c^b f(x) \; dx$ | $a<c<b$ and $f$ is integrable on $[a,b]$ |
| Shift Property | $\displaystyle\int_a^b f(x) \; dx = \int_{a-c}^{b-c} f(x+c) \; dx$                |                                          |
|                | $\displaystyle\int_0^a f(x) \; dx = \int_{0}^{a} f(a-x) \; dx$                    |                                          |
|                | $\displaystyle\int ^b_{a}\alpha \, dx=\alpha(b-a)$                                |                                          |
|                | $\displaystyle\int ^a_{a}f(x) \, dx=0$                                            |                                          |
|                |                                                                                   |                                          |

- Cavalieri's Quadrature Formula $\displaystyle\int ^b_{a} x^n\, dx=\begin{cases}\displaystyle{\frac{b^{n+1}-a^{n+1}}{n+1}}&{n=1}\\\displaystyle{\ln\left(\frac{b}{a}\right)}&{n=-1}\end{cases}$ (where $a,b,x\in\mathbb{R}$)

## Integration by parts

- (2.10) Integration by parts for definite integrals
	- $\int ^b_{a}uv' \, dx=uv|^b_{a}-\int ^{b}_{a}u'v \, dx$

## Substitution in Definite Integrals

(2.11) conditions:

- $f$ is defined and continuous on $[a,b]$
- $\varphi$ is a function defined, continuous and continuously differentiable on an interval $J=[\alpha,\beta]$ or $J=[\beta,\alpha]$
- $\varphi(J)\subseteq[a,b]$ (that is, $f$ is continuous on $\varphi$'s image)
- $\varphi(\alpha)=a$ and $\varphi(\beta)=b$
- Substitutions
	- (substitute $t=\varphi(x)$)  $\displaystyle  \int ^\beta_{\alpha}f(\varphi(t))\varphi'(x) \, dx =\int ^{\varphi(\beta)}_{\varphi(\alpha)}f(t) \, dt$
	- (substitute $x=\varphi(t)$)  $\displaystyle \int ^b_{a}f(x) \, dx =\int ^\beta_{\alpha}f(\varphi(t))\varphi'(t) \, dt$

> notation: others use in $u$ and $g$ instead of $t$ and $\varphi$
