- The set of points in $\mathbb{R}^2$ defined by $\{ (x,y)\mid y=f(x) \}$ is called the **graph** of the function $f: \mathbb{R} \to \mathbb{R}$. 
- The set of points in $\mathbb{R}^3$ defined by $\{ (x,y,f(x,y))\mid (x,y)\in \mathbb{R}^2 \}$ is called the **graph** of the function $f: \mathbb{R}^2 \to \mathbb{R}$.
- Let $f:\mathbb{R}^2 \to \mathbb{R}$ be a two-variable function, and $C\in\mathbb{R}$, the set of points defined by $\{ (x,y)\mid f(x,y)=C \}$ is called the **level curve** of $f$ at the level $C$.
- $\displaystyle\lim_{p\to p_{0}} f(p)=L \iff \forall \varepsilon>0, \exists \delta>0: (0<d(p,p_{0})<\delta \implies |f(p)-L|<\varepsilon)$. 



- Let $f(x,y)$ be a real-valued function of two variables defined on an neighborhood of the point $(x_0,y_0)$. 
	- The function $f$ is said to be **continuous** at the point $(x_0,y_0)$ if $\displaystyle\lim_{(x,y)\to (x_0,y_0)} f(x,y)=f(x_0,y_0)$. (assuming the limit exists)
	- Partial Derivatives
		- The **partial derivative** of $f$ with respect to $x$ at the point $(x_0,y_0)$ is defined as $\displaystyle\frac{\partial f}{\partial x}(x_0,y_0)=\lim_{h\to 0} \frac{f(x_0+h,y_0)-f(x_0,y_0)}{h}$. (assuming the limit exists)
		- The **partial derivative** of $f$ with respect to $y$ at the point $(x_0,y_0)$ is defined as $\displaystyle\frac{\partial f}{\partial y}(x_0,y_0)=\lim_{h\to 0} \frac{f(x_0,y_0+h)-f(x_0,y_0)}{h}$. (assuming the limit exists)
		- $\displaystyle\frac{\partial^2 f}{\partial x \partial y} = \frac{\partial}{\partial x} \left( \frac{\partial f}{\partial y} \right)$
	- The **directional derivative** of $f$ at the point $p_{0}=(x_0,y_0)$ in the direction of the vector $\mathbf{v}=(a,b)$ is defined as $\displaystyle D_{\mathbf{v}}f(p_0)=\lim_{t\to 0} \frac{f(p_0+tv)-f(p_{0})}{t}$ (assuming the limit exists).
	- The **gradient vector** (or **gradient**) of $f$ is the vector $\nabla f=\left(\frac{\partial f}{\partial x},\frac{\partial f}{\partial y}\right)$. 
		- $\nabla f(p_{0})=\left(\frac{\partial f}{\partial x}(p_{0}),\frac{\partial f}{\partial y}(p_{0})\right)$ is the vector of partial derivatives at the point $p_{0}$.


# Multiple Integrals

- (Double Integral) The **double integral** of a function $f(x,y)$ over a region $D$ in the $xy$-plane is defined as $\displaystyle\iint_D f(x,y)\,dx\,dy=\lim_{m,n\to \infty} \sum_{i=1}^{m}\sum_{j=1}^{n} f(x_{ij},y_{ij})\Delta A_{ij}$, where: 
	- $\Delta A_{ij}$ is the area of the rectangle $R_{ij}$
	- $(x_{ij},y_{ij})$ is a point in the rectangle $R_{ij}$.
- If $D$ is a rectangle $[a,b]\times[c,d]$, then the double integral can be evaluated as $\displaystyle\iint_D f(x,y)\,dx\,dy=\int_a^b \int_c^d f(x,y)\,dy\,dx=\int_c^d \int_a^b f(x,y)\,dx\,dy$.



- $\displaystyle\iiint_D f(x,y,z)\,dx\,dy\,dz$  
- $\displaystyle \int_0^\infty \int_0^y f(x,y)\,dx\,dy$  

