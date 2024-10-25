## Monotonicity

- $f$ is a real function that defined on interval $I$
	- $f$ is **(weakly) increasing** if $\forall x_{1},x_{2}\in{I},~~ x_{1}<x_{2}\implies{f(x_{1})\leq f(x_{2})}$
		- $f$ is **(strictly) increasing** if $\forall x_{1},x_{2}\in{I},~~ x_{1}<x_{2}\implies{f(x_{1})< f(x_{2})}$
	- $f$ is **(weakly) decreasing** if $\forall x_{1},x_{2}\in{I},~~ x_{1}<x_{2}\implies{f(x_{1}) \geq f(x_{2})}$
		- $f$ is **(strictly) decreasing** if $\forall x_{1},x_{2}\in{I},~~ x_{1}<x_{2}\implies{f(x_{1})> f(x_{2})}$
	- $f$ is **monotonic** if it's increasing or decreasing

>in this course monotonic is strictly monotonic

- (INFI2.d1.16) A function $f:[a,b] \to \mathbb{R}$ is said to be **piecewise monotone** if there exists a partition of $[a, b]$ into subintervals such that $f$ is weakly monotone on each *internal* of the subintervals
	- Each piecewise monotone function is also weakly monotone


___


#todo 


- (5.40) if $f$ is increasing on neighborhood of $x_{0}$, then the one-side limits $\displaystyle\lim_{ x \to x_{0}^{-} }f(x)$ and $\displaystyle\lim_{ x \to x_{0}^{+} }f(x)$ exist and $\displaystyle\lim_{ x \to x_{0}^{-} }f(x)\leq f(x_{0})\leq\lim_{ x \to x_{0}^{+} }f(x)$
- (5.41) **Discontinuity of Monotonic Function** is Jump Discontinuity
	- if $f$ is monotonic in $(a,b)$ and let $x_{0}\in{(a.b)}$ be a discontinuity point, then it's the *jump discontinuity* point
- (5.42) $f$ is monotonic on $I$. if the interval image $f(I)$ is also an interval, then $f$ is continuous on $I$
