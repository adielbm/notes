# Finite Limit

### Definitions

- The **limit** of $f$, as $x$ approaches $x_{0}$, is $L$
- $\displaystyle\lim_{ x \to x_{0} }f(x)=L$ 
- ((ε, δ)-definition of limit. Cauchy) 
	- ${\forall \varepsilon >0,\,\exists \delta >0,\,\forall x\in \mathbb {R} ,(\,0<|x-x_{0}|<\delta \implies |f(x)-L|<\varepsilon )}$
- (Sequential Criterion for a Limit of a Function. Heine) 
	- $\displaystyle\forall(x_{n})^{\infty}_{n=1},\Big((\lim_{n\to \infty}(x_{n})=x_{0})\land(\forall{n\in\mathbb{N}},x_{n}\neq x_{0})\Big)\implies\displaystyle\lim_{ n \to \infty }f(x_{n})=L$
- (**left** & **right**-hand limit) (4.48)
	- $\displaystyle\lim_{x\to{x_{0}}^{-}}f(x)=\displaystyle\lim_{x\to{x_{0}}^{+}}f(x)=L$
- (4.40) $\displaystyle\lim_{h\to 0}{f(x_0+h)}=L$

### Theorems

- (4.31) **Uniqueness** of the limit of function 
	- $(f(x) \underset{n \to x_{0}}{\longrightarrow} L\land{f(x) \underset{n \to x_{0}}{\longrightarrow} M})\implies{L=M}$
- (4.33) Limit of **Linear Function** 
	- Let $f$ a linear function then for each $x_{0}\in\mathbb{R}$, we have $\displaystyle\lim_{ x \to {x_{0}} }f(x)=f(x_{0})$

- $\displaystyle\forall \varepsilon >0,\exists \delta >0:\forall x\in \mathbb {R}, \Big(0<|x-x_{0}|<\delta \implies |f(x)-L|<K\varepsilon \Big)\implies\displaystyle\lim_{ x \to x_{0} }f(x)=L$ (given $K$ is a constant positive real number)  

- given $\displaystyle\lim_{x\to{x_0}}{f(x)}\in\mathbb{R}$
	- (4.34, **Local Property**) $\displaystyle\exists\delta:\forall x \in(-\delta,x_{0})\cup(x_{0},\delta),f(x)=g(x)\implies \lim_{ x \to x_{0} }f(x)=\lim_{ x \to x_{0} }g(x)$
- $f$ is defined on $(-\delta_{0},x_{0})\cup(x_{0},\delta_{0})$
	- (4.36) $\displaystyle0\neq\lim_{x\to x_0}f(x)\in\mathbb{R}\implies \exists \delta:\forall x \in(-\delta,x_{0})\cup(x_{0},\delta),f(x)\neq 0$  

- (4.43) Squeeze theorem for functions
	- $\Big(f(x)\leq g(x)\leq h(x)\Big)\land\Big({\displaystyle\lim_{ x \to x_{0} }f(x)=\lim_{ x \to x_{0} }h(x)=L}\Big)\implies{\displaystyle\lim_{ x \to x_{0} }g(x)=L}$


- given the limits of $f$ and $g$ is defined (finite or infinite) 
	- (4.41) $\displaystyle{\color{gray}\exists{\varepsilon>0}:\forall x \in N^{*}_{\varepsilon}(x_{0}),\,}f(x)\leq g(x)\implies \lim_{ x \to x_{0} }f(x)\leq \lim_{ x \to x_{0} }g(x)$
	- (4.42) $\displaystyle{\color{gray}\exists{\varepsilon>0}:\forall x \in N^{*}_{\varepsilon}(x_{0}),\,}f(x)< g(x)\impliedby\lim_{ x \to x_{0} }f(x)< \lim_{ x \to x_{0} }g(x)$
### Arithmetic

>Assuming $f,g$ are defined on $N^{*}_{\varepsilon}(x_{0})$, and their limits are exist

| Limit Laws                |                                                                                                                                                     |                                                                                                                                                          |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sum / Difference          | $\displaystyle\lim_{x\to x_{0}}(f(x)\pm g(x))=\displaystyle \lim_{x\to x_{0}}f(x)\pm\lim_{x\to x_{0}}g(x)$                                          |                                                                                                                                                          |
| Product                   | $\displaystyle\lim_{x\to x_{0}}(f(x)\cdot g(x))=\displaystyle \lim_{x\to x_{0}}f(x)\cdot\lim_{x\to x_{0}}g(x)$                                      |                                                                                                                                                          |
|                           | $\displaystyle\lim_{x\to x_{0}}(f(x)\cdot c)=\displaystyle \lim_{x\to x_{0}}f(x)\cdot c$                                                            |                                                                                                                                                          |
|                           | $\displaystyle\lim_{x\to x_{0}}(f(x))^n=\Big(\displaystyle \lim_{x\to x_{0}}f(x)\Big)^{n}$                                                          |                                                                                                                                                          |
| Quotient                  | $\displaystyle\lim_{x\to x_{0}}(f/g)(x)=\displaystyle \lim_{x\to x_{0}}f(x)/\lim_{x\to x_{0}}g(x)$ where $\displaystyle\lim_{x\to x_{0}}g(x)\neq 0$ |                                                                                                                                                          |
| Composite Function (4.39) | $\displaystyle\lim_{ x \to {x_{0}} }f(x)=\displaystyle\lim_{ t \to t_{0} }f(g(t))$                                                                  | $\displaystyle\lim_{ t \to t_{0} }g(t)=x_{0}$ is defined and ($f$ is continuous at $x_{0}$ or $g(t)\neq x_{0}$ for some deleted neighborhood of $t_{0}$) |


- (q4.62) $\displaystyle\lim_{x\to0}{f(x)}=L\implies\lim_{x\to 0}{f(x^2)}=L$
-  (q4.63) $\displaystyle\lim_{x\to0}{f(x)}=\lim_{x\to 0}{f(xk)}$  (where $k\neq 0$ and the limits exists)
- $\displaystyle\lim_{x \to \infty} f(x) = 0\land\exists M: |g(x)|< M\implies\lim_{x \to \infty} f(x)g(x) = 0$ (analogously 2.22)
- $\displaystyle\lim_{ x \to x_{0} }f(x)=0\iff\lim_{ x \to x_{0} }|f(x)|=0$ (analogously q2.20a)

>for $\displaystyle\lim_{ x \to x_{0} }f(x)^{g(x)}$ you can use in these methods:
> - Heine's Sequential Criterion with t6.15
> - Using in the identity $f(x)^{g(x)}=e^{g(x)\ln(f(x))}$ (where $0<f(x)^{g(x)}$) and using in Composite Function (5.14)


# One-Sided Limits

- $L$ is the **right-hand limit** of $f$ at $x_{0}$
	- $\displaystyle\lim_{x\to{x_{0}}^{+}}f(x)=L$
	- $\displaystyle  {\displaystyle (\forall \varepsilon >0)\,(\exists \delta >0)\,(\forall x\in \mathbb {R} )\,(x\in(x_{0},x_{0}+\delta)\implies{f(x)}\in(L-\varepsilon,L+\varepsilon))}$ 
	- Sequential Criterion (*Heine*)
		- $\forall(x_{n})^{\infty}_{n=1}(\displaystyle\lim_{ n \to \infty }(x_{n})=x_{0})\land(\forall{n\in\mathbb{N}},x_{n}>x_{0})\implies\displaystyle\lim_{ n \to \infty }f(x_{n})=L$
- $L$ is the **left-hand limit** of $f$ at $x_{0}$
	- $\displaystyle\lim_{x\to{x_{0}}^{-}}f(x)=L$
	- $\displaystyle  {\displaystyle (\forall \varepsilon >0)\,(\exists \delta >0)\,(\forall x\in \mathbb {R} )\,(x\in(x_{0}-\delta,x_{0})\implies{f(x)}\in(L-\varepsilon,L+\varepsilon))}$
	- Sequential Criterion (*Heine*)
		- $\forall(x_{n})^{\infty}_{n=1}(\displaystyle\lim_{ n \to \infty }(x_{n})=x_{0})\land(\forall{n\in\mathbb{N}},x_{n}<x_{0})\implies\displaystyle\lim_{ n \to \infty }f(x_{n})=L$


# Infinite limits

- $\displaystyle\lim_{ x \to x_{0} }f(x)=\infty$ 
- $\displaystyle  {\displaystyle (\forall M\in\mathbb{R})\,(\exists \delta >0)\,(\forall x\in \mathbb {R} )\,(0<|x-x_{0}|<\delta \implies f(x)>M )}$
	- (Note: It's sufficient to ensure for $M>0$.)
- $\forall(x_{n})^{\infty}_{n=1}(\displaystyle\lim_{ n \to \infty }(x_{n})=x_{0})\land(\forall{n\in\mathbb{N}},x_{n}\neq x_{0})\implies\displaystyle\lim_{ n \to \infty }f(x_{n})=\infty$
- $\displaystyle\lim_{x\to{x_{0}}^{-}}f(x)=\infty=\displaystyle\lim_{x\to{x_{0}}^{+}}f(x)$

> $\displaystyle\lim_{ x \to x_{0} }f(x)=-\infty$ (or one-sided Limits) defined the same, just replace $f(x)>m$ with $f(x)<m$ 

## One-Sided Limits

- $\infty$ is the **right-hand limit** of $f$ at $x_{0}$
	- $\displaystyle\lim_{x\to{x_{0}}^{+}}f(x)=\infty$
	- $\displaystyle  {\displaystyle (\forall M\in\mathbb{R})\,(\exists \delta >0)\,(\forall x\in \mathbb {R} )\,(x\in(x_{0},x_{0}+\delta) \implies f(x)>M )}$
	- $\forall(x_{n})^{\infty}_{n=1}~~(\displaystyle\lim_{ n \to \infty }(x_{n})=x_{0})\land(\forall{n\in\mathbb{N}},x_{n}> x_{0})\implies\displaystyle\lim_{ n \to \infty }f(x_{n})=\infty$
- $\infty$ is the **left-hand limit** of $f$ at $x_{0}$
	- $\displaystyle\lim_{x\to{x_{0}}^{-}}f(x)=\infty$
	- $\displaystyle  {\displaystyle (\forall M\in\mathbb{R})\,(\exists \delta >0)\,(\forall x\in \mathbb {R} )\,(x\in(x_{0}-\delta,x_{0}) \implies f(x)>M )}$
	- $\forall(x_{n})^{\infty}_{n=1}(\displaystyle\lim_{ n \to \infty }(x_{n})=x_{0})\land(\forall{n\in\mathbb{N}},x_{n}< x_{0})\implies\displaystyle\lim_{ n \to \infty }f(x_{n})=\infty$
- $-\infty$ is the **right-hand limit** of $f$ at $x_{0}$
	- $\displaystyle\lim_{x\to{x_{0}}^{+}}f(x)=-\infty$
	- $\displaystyle  {\displaystyle (\forall M\in\mathbb{R})\,(\exists \delta >0)\,(\forall x\in \mathbb {R} )\,(x_{0}<x<x_{0}+\delta) \implies f(x)<M )}$
	- $\forall(x_{n})^{\infty}_{n=1}(\displaystyle\lim_{ n \to \infty }(x_{n})=x_{0})\land(\forall{n\in\mathbb{N}},x_{n}> x_{0})\implies\displaystyle\lim_{ n \to \infty }f(x_{n})=-\infty$
- $-\infty$ is the **left-hand limit** of $f$ at $x_{0}$
	- $\displaystyle\lim_{x\to{x_{0}}^{-}}f(x)=-\infty$
	- $\displaystyle  {\displaystyle (\forall M\in\mathbb{R})\,(\exists \delta >0)\,(\forall x\in \mathbb {R} )\,(x_{0}-\delta<x<x_{0}) \implies f(x)<M )}$
	- $\forall(x_{n})^{\infty}_{n=1}(\displaystyle\lim_{ n \to \infty }(x_{n})=x_{0})\land(\forall{n\in\mathbb{N}},x_{n}< x_{0})\implies\displaystyle\lim_{ n \to \infty }f(x_{n})=-\infty$

## Arithmetic of Infinite limits

- $\infty+\infty=\infty$
- $\infty+r=\infty$
- $\infty\cdot\infty=\infty$
- $\infty\cdot{r}_{>0}=\infty$
- $1/\infty=0$
- $1/0^{+}=\infty$
- $\displaystyle\lim_{ x \to x_{0} }(f(x))=\infty \iff\displaystyle\lim_{ x \to x_{0} }(-f(x))=-\infty$
- **Squeeze Theorem** for infinite limit 
	- $f(x)\to \infty \land\exists M:\forall x>M,g(x)\geq f(x)\implies g(x)\to \infty$ (analogously to 2.45)


# Limits at Infinity

- $L$ is the **limit** of $f$ 
	- at $\infty$
		- $\displaystyle\lim_{ x \to \infty }f(x)=L$
		- ${\displaystyle \forall \varepsilon >0,\,\exists M:\,\forall x\in \mathbb {R},\,(x>M \implies |f(x)-L|<\varepsilon )}$
		- $\forall(x_{n})^{\infty}_{n=1}\displaystyle\lim_{ n \to \infty}x_{n}=\infty\implies\displaystyle\lim_{ n \to \infty }f(x_{n})=L$
	- at $-\infty$
		- $\displaystyle\lim_{ x \to -\infty }f(x)=L$
		- $\displaystyle  {\displaystyle (\forall \varepsilon >0)\,(\exists M)\,(\forall x\in \mathbb {R} )\,(x<M \implies |f(x)-L|<\varepsilon )}$ 
		- $\forall(x_{n})^{\infty}_{n=1}\displaystyle\lim_{ n \to \infty}x_{n}=-\infty\implies\displaystyle\lim_{ n \to \infty }f(x_{n})=L$


-  $\infty$ is the **limit** of $f$ 
	- at $\infty$
		- $\displaystyle\lim_{ x \to \infty }f(x)=\infty$
		- $\displaystyle  {\displaystyle (\forall M_{1} \in\mathbb{R})\,(\exists M_{2} \in\mathbb{R})\,(\forall x\in \mathbb {R} )\,(x>M_{2} \implies f(x)>M_{1} )}$ 
		- $\forall(x_{n})^{\infty}_{n=1}\displaystyle\lim_{ n \to \infty}x_{n}=\infty\implies\displaystyle\lim_{ n \to \infty }f(x_{n})=\infty$
	- at $-\infty$ #todo


-  $-\infty$ is the **limit** of $f$ 
	- at $\infty$ #todo
	- at $-\infty$ #todo


____


- Limit at Infinity of **Rational Function** $\displaystyle \frac{f(x)}{g(x)}=\frac{a_{n}x^n+\dots+a_{0}}{b_{m}x^m+\dots+b_{0}}$
	- $\displaystyle\deg(f)<\deg(g)\implies\displaystyle\lim_{x\to\infty}\frac{\frac{a_nx^n}{x^m}+...+\frac{a_0}{x^m}}{\frac{b_mx^m}{x^m}+...+\frac{b_0}{x^m}}=\frac{0+...+0}{b_m+...+0}=\frac{0}{b_m}=0$
	- $\displaystyle\deg(f)=\deg(g)\implies\displaystyle\lim_{x\to\infty}\frac{\frac{a_nx^n}{x^n}+...+\frac{a_0}{x^n}}{\frac{b_nx^n}{x^n}+...+\frac{b_0}{x^n}}=\frac{a_{n}+...+0}{b_n+...+0}=\frac{a_{n}}{b_n}$
	- $\displaystyle\deg(f)>\deg(g)\implies\lim_{x\rightarrow \infty}\frac{f(x)}{g(x)}=\pm \infty$ (depending on the sign of $\frac{a_{n}}{b_{m}}$)


# L'Hôpital's rule

- $x_{0}\in I$ is finite, $\infty$ or $-\infty$
- $I$ is an open interval with $x_0$ (for two-sided limits) or an open interval with endpoint $x_0$ (for one-sided limits or limits at infinity if $x_0$ is infinite).
- $f$ and $g$ are differentiable on $I$ (except possibly at $x_0$), 
- $\displaystyle g'(x) \neq 0$ on $I$ (except possibly at $x_0$)
- $L=\displaystyle\lim_{ x \to x_{0} }\frac{f'(x)}{g'(x)}$ exists (finite, $\infty$ or $-\infty$)
- $\displaystyle \lim_{{x \to x_0}} f(x) = \lim_{{x \to x_0}} g(x) = 0$       or      $\displaystyle \lim_{{x \to x_0}} |f(x)| = \lim_{{x \to x_0}} |g(x)| = \infty$
 $$\displaystyle \lim_{{x \to x_0}} \frac{f(x)}{g(x)} =  \lim_{{x \to x_0}} \frac{f'(x)}{g'(x)}$$
# Indeterminate form

$$\displaystyle  {\frac {0}{0}},\quad{\frac {\infty }{\infty }},\quad0\times \infty ,\quad\infty -\infty ,\quad0^{0},\quad1^{\infty },\quad\infty ^{0}$$

|  |  | Transformation to $\frac{0}{0}$ | Transformation to $\frac{∞}{∞}$ |
| ---- | ---- | ---- | ---- |
| $\displaystyle\lim_{ x \to x_{0} }\frac{f(x)}{g(x)}$ | $\displaystyle\frac{0}{0}$ | - | $\displaystyle\lim_{ x \to x_{0} }\frac{1/g(x)}{1/f(x)}$ |
|  | $\displaystyle\frac{\infty}{\infty}$ | $\displaystyle\lim_{ x \to x_{0} }\frac{1/g(x)}{1/f(x)}$ | - |
| $\displaystyle\lim_{ x \to x_{0} }f(x)- g(x)$ | $\infty-\infty$ |  | $\displaystyle\ln \lim _{x\to x_{0}}{\frac {e^{f(x)}}{e^{g(x)}}}\!$ |
| $\displaystyle\lim_{ x \to x_{0} }f(x)\cdot g(x)$ | $0\cdot \infty$ |  |  |
| $\displaystyle  \lim _{x\to x_{0}}f(x)^{g(x)}$ | $\displaystyle 1^\infty$ | $\displaystyle\exp \lim _{x\to x_{0}}{\frac {\ln f(x)}{1/g(x)}}$ | $\displaystyle\exp \lim _{x\to x_{0}}{\frac {g(x)}{1/\ln f(x)}}\!$ |
|  | $0^0$ |  |  |
|  | $\infty^0$ |  |  |


# Bounded Monotonic Function 

- (5.39) **Bounded Monotonic Function** - $f$ is **monotonic** and defined on open interval $(a,b)$.
	- $f$ is **bounded** on an open interval $(a,b)$, then both $\displaystyle\lim_{ x \to b^{-} }f(x)$ and $\displaystyle\lim_{ x \to a^{+} }f(x)$ exist (finite)
		- if $f$ is **increasing** then 
			- $\displaystyle\lim_{ x \to b^{-} }f(x)=\sup f\big((a,b)\big)$ 
			- $\displaystyle\lim_{ x \to a^{+} }f(x)=\inf f\big((a,b)\big)$ 
		- if $f$ is **decreasing** then 
			- $\displaystyle\lim_{ x \to b^{-} }f(x)=\inf f\big((a,b)\big)$ 
			- $\displaystyle\lim_{ x \to a^{+} }f(x)=\sup f\big((a,b)\big)$ 
	- if $f$ is **not bounded above**
		- if $f$ is **increasing** then 
			- $\displaystyle\lim_{ x \to b^{-} }f(x)=+\infty$ 
		- if $f$ is **decreasing** then 
			- $\displaystyle\lim_{ x \to a^{+} }f(x)=+\infty$ 
	- if $f$ is **not bounded below**
		- if $f$ is **increasing** then 
			- $\displaystyle\lim_{ x \to a{+} }f(x)=-\infty$ 
		- if $f$ is **decreasing** then 
			- $\displaystyle\lim_{ x \to b^{-} }f(x)=-\infty$ 


# Examples

### Trigonometric functions

- (4.44a) $\displaystyle\lim_{ x \to 0 }\sin x=0$
- (4.44b) $\displaystyle\lim_{ x \to 0 }\cos x=1$
- (4.45) $\displaystyle\lim_{ x \to 0 }{\frac{\sin x}{x}}=\lim_{ x \to 0 }{\frac{x}{\sin x}}=1$

- $\displaystyle\lim_{ x \to 0 }\frac{\tan x}{x}=1$
- $\displaystyle\lim_{ x \to 0 }\frac{\tan^2 x}{x}=0$
- $\displaystyle\lim_{ x \to 0 }{\frac{\sin (cx)}{x}}=c$
- $\displaystyle\lim_{ x \to 0 }{\frac{\sin (x)}{cx}}=\frac{1}{c}$
- $\displaystyle\lim_{x \to 0}{\frac{\arcsin{x}}{x}}=\lim_{x \to 0}{\frac{\arctan{x}}{x}}=1$
- $\displaystyle\lim_{x\to\infty} (x \sin(1/x)) = 1$

- $(\cos{x})^{\sin x}$
	- $\displaystyle\lim_{ x \to 0 }(\cos{x})^{\sin x}=$ #todo see e6.3 page 179



### Exponential functions 

#### Functions of the form c^g(x)

#### $\lim c^x$

(6.9)

| ${c^x}$ | $x\to -\infty$ | $x\to x_{0}$ | $x\to \infty$ |
| ---- | ---- | ---- | ---- |
| $0<c<1$ | $\lim=\infty$ |  | $\lim=0$ |
| $c=1$ | $\lim=1$ | $\lim=1$ | $\lim=1$ |
| $1<c$ | $\lim=0$ | $\lim=c^{x_{0}}$ | $\lim=\infty$ |
#### $\lim c^{1/x}$

$\displaystyle  \lim _{x\to \infty }{\sqrt[{x}]{c}}=\lim _{x\to \infty }{c}^{1/x}={\begin{cases}1,&c>0\\0,&c=0\\{\text{does not exist}},&c<0\end{cases}}$

#### Functions of the form $f(x)^{g(x)}$

- (6.16) $\displaystyle\lim_{ x \to \infty }\left( 1+\frac{1}{x} \right)^x=e$
- (6.17) $\displaystyle\lim_{ x \to -\infty }\left( 1+\frac{1}{x} \right)^x=e$
- (6.18) $\displaystyle\lim_{ x \to 0 }(1+x)^{1/x}=e$

- $\displaystyle\lim_{ x \to \infty }\left( 1-\frac{1}{x} \right)^x=\frac{1}{e}$


### Polynomials

- $\displaystyle  {\displaystyle \lim _{x\to c}p(x)=p(c)}$
- $p$ is n degree polynomial and $a_{n}\neq 0$
	- $\displaystyle\lim_{x\rightarrow \infty} p(x) = \text{sign}(a_n) \cdot \infty$
	- $\displaystyle\lim_{x\rightarrow-\infty}p(x)=\begin{cases} \phantom{-}{\rm sign}(a_n) \infty & n\text{ even} \\ {-}{\rm sign}(a_{n}) \infty & n \text{ odd} \end{cases}$

### Functions of the form x^c

- (e4.31) $\displaystyle\lim_{ x \to \infty }\sqrt{ x }=\lim_{ x \to \infty }x^{1/2}=\infty$
- (q4.82a) $\displaystyle\lim_{ x \to \infty } {x}=\infty$
- $\displaystyle\lim_{ x \to x_{0} } {x}=x_{0}$
- $\displaystyle\lim_{ x \to x_{0} } {x^c}=x_{0}^c$

- $c>0$
	- $\displaystyle\lim_{ x \to \infty }x^c=\infty$
	- $\displaystyle\lim_{ x \to 0^+ }x^c=0$


### Logarithmic functions

#### b<1

- $\displaystyle\lim_{ x \to \infty }\log_{b} x=-\infty$
- $\displaystyle\lim_{ x \to 0^+ }\log_{b} x=\infty$

#### b>1

- $\displaystyle\lim_{ x \to \infty }\log_{b} x=\infty$
- $\displaystyle\lim_{ x \to 0^+ }\log_{b} x=-\infty$

##### Natural logarithms

- $\displaystyle\lim_{ x \to x_{0} }\ln x=\ln x_{0}$
- $\displaystyle\lim_{ x \to \infty }\ln x=\infty$
- $\displaystyle\lim_{ x \to 0^+ }\ln x=-\infty$

### Other

- (q4.85c) $\displaystyle\lim_{ x \to \infty }f(x)=\lim_{ x \to 0^+ }f(1/x)$ (assuming $f$ defined on $(M,\infty)$)
- (q4.85d) $\displaystyle\lim_{ x \to -\infty }f(x)=\lim_{ x \to \infty }f(-x)$ (assuming $f$ defined on $(-\infty,M)$)




- $\displaystyle\lim_{ x \to 0^+ }x^x=1$

- $\displaystyle\frac{1}{x-x_{0}}$
	- $\displaystyle\lim_{x\to x_{0}} \frac{1}{x-x_{0}}$ *does **not** exist* $\impliedby\displaystyle\lim_{x\to x_{0}^{+}} \frac{1}{x-x_{0}}=\infty\land\lim_{x\to x_{0}^{-}} \frac{1}{x-x_{0}}=-\infty$
	- $\displaystyle\lim_{ x \to \infty } \frac{1}{x-x_{0}}=0$
	- $\displaystyle\frac{1}{x}$ (Special Case $x_{0}=0$)
		- $\displaystyle\lim_{x\to {0}} \frac{1}{x}$ *does **not** exist* $\impliedby\displaystyle\lim_{x\to {0}^{+}} \frac{1}{x}=\infty\land\lim_{x\to {0}^{-}} \frac{1}{x}=-\infty$
		- (q4.78) $\displaystyle\lim_{ x \to \infty } \frac{1}{x}=0$

- $\displaystyle\frac{x^r}{a^x}$ (assuming $a>1$, and $r\in\mathbb{R}$)
	- (q6.13) $\displaystyle\lim_{ x \to \infty }\frac{x^r}{a^x}=0$ 
- (q6.17) $\displaystyle\lim_{ x \to \infty }\frac{\ln x}{x^a}=0$ where $a>0$


# Asymptotes

- The vertical line $x=x_{0}$ is a **vertical asymptote** of the function $y = f(x)$ if
	- $\displaystyle\lim_{x\to~x_{0}^{-}}f(x)=\pm \infty$, or
	- $\displaystyle \lim_{x\to x_{0}^{+}}f(x)=\pm \infty$ 

-  The horizontal line $y=c$ is a **horizontal asymptote** of the function $y=f(x)$ if
	- $\displaystyle \lim_{x\rightarrow -\infty }f(x)=c$, or 
	- $\displaystyle \lim_{x\rightarrow +\infty }f(x)=c$

- The straight line $y = mx + n$ is an **oblique asymptote** of the function $y=f(x)$ if 
	- $\displaystyle\lim_{x\to -\infty }\left[f(x)-(mx+n)\right]=0$, or
	- $\displaystyle \lim_{x\to +\infty }\left[f(x)-(mx+n)\right]=0$ 


