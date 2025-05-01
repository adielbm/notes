![[Differential.svg|380]]
 
- Let $f(x)$ be a differentiable function at a point $a$: 
	- The linear function $df_a(dx)=f'(a)dx$ is called the **differential** of $f$ at $a$. 
		- Denoted by $dy$ and $df$ (where $a$ is known)
			- (e.g. if $f(x)=\sin(x)$, then $dy=\cos(a)dx$)
		- $dx$ is the independent variable of the function $df_a=dy$
			- It is called the **differential of $x$** (or **increment** of $x$)
			- It is also denoted by $h$ or $\Delta x$.
		- $dy$ is dependent variable (on both $dx$ and $a$)
			- It is called the **differential of $y$**
		- $\Delta y=f(a+dx)-f(a)$
		- $dy=f'(a)dx\approx \Delta y$ when $dx$ is small
		- $\varepsilon=\Delta y-dy=f(a+dx)-f(a)-f'(a)dx$ is called the **error** of the approximation.
		- $\displaystyle\lim_{ dx\to 0 }\frac{\Delta y-dy}{dx}=\lim_{ dx\to 0 }\frac{f(a+dx)-f(a)-f'(a)dx}{dx}=0$
	- The function $r(x)=f(x)-L(x)$ is called the **error** of the approximation of $f$ at $a$.
	- The function $L(x) = f(a) + f'(a)(x - a)$ is called the **linearization** of $f$ at $a$
	- The approximation of $f$ by $L$, that is $f(x) \approx L(x)$, is the **(standard) linear approximation** (or **tangent line approximation**) of $f$ at $a$
	- The point $x=a$ is the **center of the approximation**
	- $\displaystyle\lim_{ x \to a }\frac{r(x)}{x-a}=0$
- Let $f(x)$ be a function defined in a neighborhood of $a$.
	- If $f$ is differentiable at $a$, then $f(x)=f(a)+f'(a)(x-a)+r(x)$, where $\displaystyle\lim_{ x \to a }\frac{r(x)}{x-a}=0$
	- If there exists $A\in\mathbb{R}$ and function $r(x)$ such that
	  $f(x)=f(a)+A\cdot(x-a)+r(x)$ and $\displaystyle\lim_{ x \to a }\frac{r(x)}{x-a}=0$, then $f$ is differentiable at $a$ and $f'(a)=A$.


