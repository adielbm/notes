##  Extrema (Maxima & Minima)

- $f$ is defined on an interval $I=\text {dom} (f)$
	- **Global Extrema**
		- **Extremum point**: $x_{0}\in{I}$ is a **maximum point** (resp. **minimum point**) on $I$ of $f$ if $\displaystyle  \forall (x\in I),\,f(x_{0})\geq f(x)$ (resp. $f(x_{0})\leq f(x)$)
			- **Extremum value:**  In this case, $f(x_{0})$ is called the **maximum** (resp. **minimum**) **(value)** on $I$, and $f$ is said to have a maximum (resp. minimum) (value) on $I$ at a point $x_{0}$
	- **Local Extrema** (מקסימום/מינימום מקומי)
		- **Local Extremum point**: $x_{0}\in{I}$ is a **local maximum point** (resp. **local minimum point**) at $I$ if there exists a neighborhood $N_{\varepsilon}(x_{0})$ such that $\forall x \in N_{\varepsilon}(x_{0}),f(x_{0})\geq f(x)$ (resp. $f(x)\geq f(x_{0})$) (in both cases נקודת קיצון)
			- In this case, $f(x_{0})$ is called a **local maximum (value)** (resp. **local minimum (value)**) of $f$ at a point $x_{0}$. (in both cases $f(x_{0})$ is also called **local extremum value**, ערך קיצון)
	- (Some say *relative* instead of *local*, and *absolut* instead of *global*)
	- A function $g$ said to **change its sign** at $x_0$ if $\exists \varepsilon>0:\forall x_1\in (x_0-\varepsilon,x_0),\forall x_2\in (x_0,x_0+\varepsilon),g(x_1)g(x_2)<0$
		- If $\forall x_1\in (x_0-\varepsilon,x_0),g(x_1)>0$ and $\forall x_2\in (x_0,x_0+\varepsilon),g(x_2)<0$, then $g$ changes sign at $x_0$ from **positive to negative** (from $+$ to $-$).
		- If $\forall x_1\in (x_0-\varepsilon,x_0),g(x_1)<0$ and $\forall x_2\in (x_0,x_0+\varepsilon),g(x_2)>0$, then $g$ changes sign at $x_0$ from **negative to positive** (from $-$ to $+$).
	- $x_{0}$ is called a **critical point** (חשודה כקיצון) of $f$ if either $f'(x_{0})=0$ or $f'(x_{0})$ is undefined
	- $x_{0}$ is called a **stationary point** of $f$ if $f'(x)=0$
	- $x_0$ is called a **turning point** of $f$ if $f'(x_0)=0$ and $f'$ changes its sign at $x_0$. 

### Theorems

Let $f$ be a function that is continuous at a point $x_0$ and differentiable in a punctured neighborhood $I=N_{\varepsilon}(x_0)$ of $x_0$.

- (8.3) A global extremum point on $I$ is either a local extremum point of $f$ or an endpoint of $I$
- (**Fermat's theorem**) equivalent versions:
	- (8.4) Let $x_{0}$ be a local extremum point of $f$. if $f$ is differentiable at $x_{0}$, then $f'(x_{0})=0$
	- (8.19) If $x_{0}$ is a local extremum point of $f$, then, $f$ is not differentiable at $x_{0}$, xor, ($f$ is differentiable and $f'(x_{0})=0$)   
- If $x_0$ is a local extremum point of $f$, then $x_0$ is a critical point of $f$.
- (p93) If $x_{0}$ is a global extremum of $f$, then at least one of the following is true: 
	- $x_{0}$ is an endpoint of $I$ 
	- $f$ is not differentiable at $x_{0}$ 
	- $f'(x_{0})=0$ (i.e. $x_{0}$ is a stationary point of $f$) 
- (q8.3) if $f$ is monotonic on $I$, and $x_{0}$ is global extremum point of $f$, then $x_{0}$ is an endpoint of $I$
- (8.21) (**First Derivative Test for Local Extrema**) 
	- If $f'$ changes its sign at $x_0$ from $-$ to $+$, then $x_0$ is a local minimum point of $f$.
	- If $f'$ changes its sign at $x_0$ from $+$ to $-$, then $x_0$ is a local maximum point of $f$.
	- If $f'$ does not change its sign at $x_0$, then $x_0$ is not a local extremum point of $f$, and:
		- If $x_0$ is a stationary point of $f$, then $x_0$ is an inflection point of $f$.
- (8.23) (**Second Derivative Test for Local Extrema**) If $f$ is twice differentiable at $x_{0}$ and $f'(x_{0})=0$
	 - if$f''(x_{0})\neq 0$, then $x_{0}$ is a local extremum point of $f$
		- if $f''(x_{0})> 0$, then $x_{0}$ is a local minimum point of $f$
		- if $f''(x_{0})< 0$, then $x_{0}$ is a local maximum point of $f$
	- if $f''(x_{0})=0$, then the test is inconclusive.
- (**Second Derivative Test for inflection point**)
	- If $f$ is twice differentiable at $x_{0}$ and $f''$ changes its sign at $x_{0}$, then $x_{0}$ is an inflection point of $f$.
- (**Third Derivative Test**) If $f$ is three times differentiable at $x_{0}$ and $f''(x_{0})=0$ and $f'''(x_{0})\neq0$, then $x_{0}$ is an inflection point of $f$.


| $f''$        | $f'$                  | $f$                 |
| ------------ | --------------------- | ------------------- |
| positive $+$ | increasing $\nearrow$ | concave up $\cup$   |
| negative $-$ | decreasing $\searrow$ | concave down $\cap$ |
| changes sign | extremum point        | inflection point    |




