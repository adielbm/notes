# Differentiability 

> given $x_{0} \in I \subseteq \text{dom}(f)$

- $f$ is **differentiable at a point** $x_{0}\in{I}$
- (7.8) The limit $\displaystyle  L=\lim_{h\to 0}{\frac {f(x_{0}+h)-f(x_{0})}{h}}=\lim_{x\to{x_{0}}}{\frac{f(x)-f(x_{0})}{x-x_{0}}}$ exists
- $\forall \varepsilon > 0,\exists\delta>0:\forall h\left(0<|h|<\delta\implies \left|L - \frac{f(x_{0}+h)-f(x_{0})}{h}\right| < \varepsilon \right)$
- $f$ is **left-** and **right-differentiable** at $x_{0}$ and $f'_{+}(x_{0})=f'_{-}(x_{0})$ (in this case $f'(x_{0})=f'_{+}(x_{0})=f'_{-}(x_{0})$)
- #todo  $\exists{A}\in\mathbb{R} : f(x_{0}+h)-f(x_{0})=Ah+\alpha(h)h$ where $\displaystyle\lim_{ h \to 0 }\alpha(h)=0$
- There exists a function $g$ defined on $I$ and continuous at $x_{0}$ s.t. $\forall x \in I,f(x)=g(x)\cdot(x-x_{0})+f(x_{0})$

# Derivative

- Derivative Function - $\displaystyle f'(x)=\frac{df}{dx}=\lim_{h\to 0}{\frac {f(x+h)-f(x)}{h}}$

> $f(x)$ is **differentiable at a point** $x_{0}\in\text{dom}(f)$

- Derivative of $f$ at the point $x_{0}$ is $f'(x_{0})$
	- $\displaystyle f'(x_{0})=\lim_{h\to 0}{\frac {f(x_{0}+h)-f(x_{0})}{h}}=\lim_{x\to{x_{0}}}{\frac{f(x)-f(x_{0})}{x-x_{0}}}$
	- $f'(x_{0})$ is the **slope of the tangent line** to the graph of $f$ at the point $x_{0}$
	- $f'(x_{0})$ is the **instantaneous rate of change** of $f$ with respect to $x$ at $x_{0}$


>[!notation] Notation $\displaystyle f'(x_{0})=\frac{df}{dx}(x_{0}) = \left.{\frac {df}{dx}}\right|_{x=x_{0}}$

> [!note] Rate of Change 
> - The **average rate of change** of $y=f(x)$ with respect to $x$ over the interval $[x_{0},x_{1}]$ is $\frac{\Delta y}{\Delta x}=\frac{f(x_{1})-f(x_{0})}{x_{1}-x_{0}}=\frac{f(x_{0}+h)-f(x_{0})}{h}$ (where $h\neq 0$) 
> - The **instantaneous rate of change** of $f$ with respect to $x$ at $x_{0}$ is the derivative $f'(x_{0})=\displaystyle\lim_{h\to 0}{\frac {f(x_{0}+h)-f(x_{0})}{h}}$. (provided the limit exists)

## Theorems

- if $f$ is differentiable at $x_{0}$
	- (7.9) $f$ continuous at $x_{0}$
	- (q7.62) There exists a neighborhood on which $f$ is bounded 
- if $f$ and $g$ are differentiable at $x_{0}$ 
	- (q7.19) **Piecewise Function** $k(x)=\begin{cases} f(x) & x \leq x_0 \\ g(x) & x > x_0 \end{cases}$
		- $k$ is continuous at $x_{0}$ $\iff f(x_{0})=g(x_{0})$
		- $k$ is differentiable at $x_{0}$ $\iff f(x_{0})=g(x_{0})$ and $f'(x_{0})=g'(x_{0})$
		- https://en.wikipedia.org/wiki/Piecewise#Continuity_and_differentiability_of_piecewise-defined_functions #todo 

- (**Local Property**) $\exists\delta:\forall x \in(x_{0}-\delta,x_{0}+\delta), f (x) = g(x)\implies f'(x_{0})=g'(x_{0})$


- (q8.24) if $f$ is continuous at $x_{0}$, and $f$ differentiable at deleted neighborhood of $x_{0}$, and $\displaystyle\lim_{ x \to x_{0} }f'(x)\in\mathbb{R}$ then $f$ differentiable at $x_{0}$ and $f'(x_{0})=\displaystyle\lim_{ x \to x_{0} }f'(x)$

## Derivative Rules

> Assuming the function are differentiable at the relevant points


| Derivative Rules                |                                                                                                                                                    |                                                                          |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| **Sum/Difference Rule**         | $(f\pm g)'(x_{0})=f'(x_{0})\pm g'(x_{0})$                                                                                                          |                                                                          |
| **Product Rule** (Leibniz rule) | $(fg)'={fg'}+{f'g}$                                                                                                                                |                                                                          |
| ---- Constant Multiple Rule     | $(cf)'(x_{0})=c\cdot f'(x_{0})$                                                                                                                    |                                                                          |
| ---- (7.17)                     | $(f^{n})'(x)=nf^{n-1}(x)\cdot f'(x)$                                                                                                               |                                                                          |
| ---- Power Rule                 | $(x^n)'=nx^{n-1}$ (integer $n\neq 0$, *7.20*) <br>$(x^r)'=rx^{r-1}$ ($r\in\mathbb{R}$, $x>0$, *7.31*)                                              |                                                                          |
| **Quotient Rule**               | $\displaystyle\left( \frac{f}{g} \right)'(x_{0})=\frac{f'g-fg'}{g^2}$                                                                              | $g(x_{0})\neq 0$                                                         |
| ---- (7.19) Reciprocal rule     | $\displaystyle\left( \frac{1}{f} \right)'=\frac{{-f'}}{f^2}$<br>$\displaystyle\frac{d}{dx}\left[ \frac{1}{f(x)} \right]=\frac{{-f'(x)}}{[f(x)]^2}$ | $f(x_{0})\neq 0$                                                         |
| **Chain Rule**                  | $(f(g(x)))'=f'(g(x))\cdot g'(x)$                                                                                                                   | $\displaystyle  {\frac {dz}{dx}}={\frac {dz}{dy}}\cdot {\frac {dy}{dx}}$ |
|                                 | $(f(g(h(x))))'=f'(g(h(x))) \cdot g'(h(x)) \cdot h'(x)$                                                                                             |                                                                          |
|                                 | $\displaystyle  f_{1\,.\,.\,n}'(x)=\prod _{k=1}^{n}f_{k}'\left(f_{(k+1\,.\,.\,n)}(x)\right)$                                                       |                                                                          |
| linearity of differentiation    | $\displaystyle  {\frac {\mbox{d}}{{\mbox{d}}x}}(\alpha \cdot f(x)+\beta \cdot g(x))=\alpha \cdot f'(x)+\beta \cdot g'(x)$                          | from the sum and constant factor rules                                   |






## One Side

- $f$ is **right-differentiable at** $x_{0}$ if $\displaystyle  L=\lim_{h\to 0^+}{\frac {f(x_{0}+h)-f(x_{0})}{h}}$ exists. 
	- (in that case $f'_{+}(x_{0})=L$ is the **right-derivative** of $f$ at $x_{0}$)
- $f$ is **left-differentiable at** $x_{0}$ if $\displaystyle  L=\lim_{h\to 0^-}{\frac {f(x_{0}+h)-f(x_{0})}{h}}$ exists. 
	- (in that case $f'_{-}(x_{0})=L$ is the **left-derivative** of $f$ at $x_{0}$)


# Differentiability on Interval

- $f$ is said to be **differentiable** on the interval $I$ if $f$ is differentiable at every point $x\in I\subseteq\text{dom}(f)$
## Theorems

- $\text{dom}(f')\subseteq\text{dom}(f)$

- **Mean Value Theorem** - $f$ (and $g$) is continuous on $[a,b]$, differentiable on the $(a,b)$
	- (8.5) (Rolle's Theorem) - $f(a)=f(b)\implies\exists c\in(a,b):f'(c )=0$
		- Rolle's theorem is special case of MVT when $f(a)=f(b)$
	- (8.6) (Lagrange's MVT) - $\exists c\in(a,b):f'(c )=\frac{{f(b)-f(a)}}{b-a}$
		- MVT is special case of Cauchy's MVT when $g(x)=x$
	- (8.9) (Cauchy's MVT) if $\forall{x\in{(a,b)}},\, g'(x)\neq 0$, then:
		- $g(a)\neq g(b)$ and $\displaystyle\exists{c\in{(a,b)}}:\frac{f'(c)}{g'(c)}=\frac{f(b)-f(a)}{g(b)-g(a)}$



- $f$ is continuous on $I$, differentiable at every inferior point of $I$
	- **First Derivative Test for Monotonicity** (q8.28, 8.18, q8.29) 
		- $f'(x)\geq 0\iff$ $f$ is **weakly increasing** on $I$
		- $f'(x)>0\implies$ $f$ is **increasing** on $I$
		- $f'(x)\leq0\iff$ $f$ is **weakly decreasing** on $I$
		- $f'(x)<0\implies$ $f$ is **decreasing** on $I$
		- $f$ is **increasing** on $I$, if and only if, $f'(x)\geq0$, and there is no subinterval on which $f'(x)=0$ for all $x$ in it
		- $f$ is **decreasing** on $I$, if and only if, $f'(x)\leq0$, and there is no subinterval on which $f'(x)=0$ for all $x$ in it
- if $f$ is continuous on $[a,b]$ and **monotonic** on $(a,b)$ then $f$ is **monotonic** on $[a,b]$  (by q8.25)

- Constant function theorem
	- (q7.12b) $f \text{ is constant on dom}(f) \implies\forall x \in \text{dom}(f),f'(x)=0$ 
	- (8.7) $f$ is continuous on $[a,b]$ and differentiable $(a,b)$ then: 
		- $\forall x \in(a,b), f'(x)=0\implies f \text{ is constant on } [a,b]$
	- $f$ is differentiable on $I=(a,b),(a,\infty),(-\infty,b),(-\infty,\infty)$
		- (8.8, q8.11) $\forall x \in I,\left(f'(x)=0\implies f(x)=c\right)$


- $f$ is continuous on $[0,\infty)$, differentiable on the $(0,\infty)$
	- $\displaystyle(\exists c>0:\forall x>0,f'(x)\geq c)\implies \lim_{ x \to \infty }f(x)=\infty$ (e2019c.91.q2b)

- $f$ is differentiable on $[a,b]$ 
	- (8.10) **Darboux's theorem** - $f'$ has the intermediate value property, i.e. $(\displaystyle  {\min(f'(a),f'(b))\leq t\leq\max(f'(a),f'(b))})\implies{\exists{c}\in{[a,b]}:f'(c)=t}$
	- (q8.17) If $f'(a)=f'(b)=0$ and $\forall x \in(a,b),f'(x)\neq 0$, then $\forall x \in(a,b),f'(x)> 0$ or $\forall x \in(a,b),f'(x)< 0$
- (8.11) #todo 


- **Constant Difference Theorem** #not-in-course If $f$ and $g$ are differentiable on an interval, and if $f'(x)=g'(x)$ for all $x$ in that interval, then $f − g$ is constant on the interval; that is, there is a constant k such that $f(x) − g(x) = k$ or, equivalently, $f(x) = g(x) + k$ for all $x$ in the interval. 

## Examples

| $f(x)$             | $\text{dom}(f)$                                                                     | $f'(x)$                              | $\text{dom}(f')$      |
| ------------------ | ----------------------------------------------------------------------------------- | ------------------------------------ | --------------------- |
| $\sqrt{x}$         | $[0, \infty)$                                                                       | $\frac{1}{2\sqrt{x}}$                | $(0, \infty)$         |
| $\sqrt{g(x)}$      | $\{x\mid g(x)\geq 0 \}$                                                             | $\frac{g'(x)}{2\sqrt{g(x)}}$         | $\{x\mid g(x)> 0 \}$  |
| $\sin(x)$          | $\mathbb{R}$                                                                        | $\cos(x)$                            | $\mathbb{R}$          |
| $\cos(x)$          | $\mathbb{R}$                                                                        | $-\sin(x)$                           | $\mathbb{R}$          |
| $\tan(x)$          | $\mathbb{R} \setminus \left\{ \frac{(2n + 1)\pi}{2} \mid n \in \mathbb{Z} \right\}$ | $\frac{1}{\cos^2 x} = 1 + \tan^2(x)$ | $\text{dom}(\tan(x))$ |
| $\cot(x)$          | $\mathbb{R} \setminus \left\{ n\pi \mid n \in \mathbb{Z}\right\}$                   | $-\frac{1}{\sin^2(x)}$               | $\text{dom}(\cot(x))$ |
| $\arcsin(x)$       | $[-1, 1]$                                                                           | $\frac{1}{\sqrt{1-x^2}}$             | $(-1, 1)$             |
| $\arccos(x)$       | $[-1, 1]$                                                                           | $-\frac{1}{\sqrt{1-x^2}}$            | $(-1, 1)$             |
| $\arctan(x)$       | $\mathbb{R}$                                                                        | $\frac{1}{1+x^2}$                    | $\mathbb{R}$          |
| $\text{arccot}(x)$ | $\mathbb{R}$                                                                        | $\frac{-1}{1+x^2}$                   | $\mathbb{R}$          |
| $a^x$              | $\mathbb{R}$                                                                        | $a^x \cdot \ln(a)$                   | $\mathbb{R}$          |
| $e^x$              | $\mathbb{R}$                                                                        | $e^x$                                | $\mathbb{R}$          |
| $\log_{a}(x)$      | $(0, \infty)$                                                                       | $\frac{1}{x \ln(a)}$                 | $(0, \infty)$         |
| $\ln(x)$           | $(0, \infty)$                                                                       | $\frac{1}{x}$                        | $(0, \infty)$         |

### Inverse functions

> assuming: $f$ is *continuous* and *monotonic* on $I$

- (7.27) $\big(f^{−1}\big)'(x)=\frac{1}{f'\big(f^{−1}(x)\big)}$

- if $f'(x_{0})=0$ then $(f^{-1})'(f(x_{0}))$ is undefined 


## Concavity 

#todo #not-in-course 

- The graph of a differentiable function $f(x)$ is
	- **concave up** on an open interval $I$ if $f'$ is increasing on $I$
	- **concave down** on an open interval $I$ if $f'$ is decreasing on $I$
- A point $(x_{0},f(x_{0}))$ where the graph of a function has a tangent line and where the concavity changes is an **inflection point** (or **point of inflection**)
- The Second Derivative Test for Concavity #todo 
- At an inflection point $(x_{0},f(x_{0}))$, either $f''(x_{0})=0$ or $f''(x_{0})$ fails to exist
- An inflection point $x_{0}$ can be categorized by $f'$
	- if $f'(x_{0})=0$, the point is a **stationary inflection point**
	- if $f'(x_{0})\neq 0$, the point is a **non-stationary inflection point**
- A stationary inflection point is not a local extremum point

# Higher-order derivatives

- A function $f$ is **twice differentiable** if and both $f'$ and $(f')'$ exist. In such case $(f')'=f''$ is called the **second derivative** of $f$
- A function $f$ is **n-times differentiable** if $f',f'',f'''=f^{(3)}, \dots, f ^{(n)}$ all exist. In such case $f^{(n)}$ is called the **$n$-th derivative** of $f$
- $f^{(n+1)}(x)=(f^{(n)})'(x)$ for every $x$ in which $f^{(n+1)}$ is defined
- $f=f^{(0)}$
- for infinite times see *smooth function*

#### Derivative Rules

- (IN2-4.1) if $f$ (and $g$) [[#Higher-order derivatives|n-times differentiable functions]] in an interval $D$ then:
	- $(f\pm g)$ is n-times differentiable in $D$ and $(f\pm g)^{(n)}=f^{(n)}\pm g^{(n)}$
	- $(f\cdot g)$ is n-times differentiable in $D$ and for all $x$ in $D$ we have 
		- (**General Leibniz rule**) $\displaystyle(f \cdot g)^{(n)}(x)=\sum^n_{k=0}\binom{n}{k}f^{(n-k)}(x)\cdot g^{(k)}(x)$
		- $(c\cdot f)^{(n)}=c\cdot f^{(n)}$
-  if $f_{1},\dots f_{m}$ n-times differentiable in an interval $D$ then $f_{1}+ \dots+f_{m}$ is n-times differentiable in $D$ and $(f_{1}+ \dots+f_{m})^{(n)}=f_{1}^{(n)}+\dots+ f_{m}^{(n)}$
- if $f(x)=x^n$ then
	- if $k<n$ then $f^{(k)}(x)=n\cdot(n-1)\cdots(n-k+1)x^{n-k}$
	- if $k=n$ then $f^{(k)}(x)\equiv n!$
	- if $k>n$ then $f^{(k)}(x)\equiv 0$

# Continuously Differentiability

- A function $f$ is said to be of class $C^0$ if it is continuous (the class $C^0$ consists of all continuous functions)
- A function $f$ is said to be **continuously differentiable** and of class $C^1$ if the derivative $f'(x)$ exists and is itself a continuous function.
- A function $f$ is of class $\displaystyle C^{2}$ if the first and second derivative of the function both exist and are continuous. 
- A function $f$ is said to be of class $\displaystyle C^{k}$ if the first $k$ derivatives ${\textstyle f^{\prime }(x),f^{\prime \prime }(x),\ldots ,f^{(k)}(x)}$ all exist and are continuous. 
- A function $f$ is to be **smooth** (or **infinitely differentiable**) and of class $C^\infty$ if it has derivatives of all orders (so all these derivatives are continuous)

> The classes $C^{k}$ can be defined recursively by declaring $C^{0}$ to be the set of all continuous functions, and declaring $\displaystyle C^{k}$ for any positive integer $k$ to be the set of all differentiable functions whose derivative is in $C^{k-1}$. In particular, $C^{k}\subset C^{k-1}$ for every $k>0$. The class $\displaystyle C^{\infty }$ of smooth functions, is the intersection of the classes $C^{k}$ as $k$ varies over the non-negative integers.

> Although the derivative of a differentiable function never has a [[Continuity#Discontinuity point|jump discontinuity]], it is possible for the derivative to have an essential discontinuity

