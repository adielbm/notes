### Explicit representation

- The curve (or surface) is described as the graph of a function $y=f(x)$ (or $z=f(x,y)$).
- (Note: Not all curves/surfaces can be represented explicitly.)

### Implicit representation

- The curve (or surface) is described as the solution set of an equation: 
	- (reacangular equation) $F(x,y) = 0$ (or $F(x,y,z) = 0$).
	- (polar equation) $r = g(\theta)$ (or $r = g(\theta,\phi)$).
### Parametric representation

#### Parametric curve

> This is a curve in $\mathbb{R}^2$ (**plane curve**). A **space curve** in $\mathbb{R}^3$ can be defined similarly by $\mathbf{r}(t) = \big( x(t), y(t), z(t) \big)$, $x,y,z:I\to\mathbb{R}$.


- A set $\mathcal{C}=\{\mathbf{r}(t):t\in I\}$, where:  
	- $I\subseteq \mathbb{R}$ is the **parameter interval**  
		- If $I=[a,b]$, then $(x(a),y(a))$ is the **initial point** and $(x(b),y(b))$ is the **terminal point** of the curve.  
	- $x,y:I\to\mathbb{R}$  
		- $x=x(t)$ and $y=y(t)$ are the **parametric equations** of the curve.  
	- $\mathbf{r}:I\to\mathbb{R}^2$ and $\mathbf{r}(t) = \big( x(t), y(t) \big)$  
	- $t$ is the **parameter** of the curve.  
- A parameterization $\mathbf{r}(t)$ is **smooth** on $I$ if $\mathbf{r}'(t)$ is continuous on $I$ and $\mathbf{r}'(t) \neq \mathbf{0}$ for all $t \in I$.
	- A curve is **smooth** if it has a smooth parameterization
- A curve is **simple** if $\mathbf{r}(t_1) \neq \mathbf{r}(t_2)$ for all $t_1, t_2 \in I$ with $t_1 \neq t_2$.
- A curve is **closed** if $\mathbf{r}(a) = \mathbf{r}(b)$.
- A curve is **regular** if $\mathbf{r}'(t) \neq \mathbf{0}$ for all $t \in I$.


- The **arc length** of a $\mathcal{C}$ is given by $L = \int_a^b \|\mathbf{r}'(t)\| \, dt$
	- (plane curve) $L=\int_a^b \sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2}\, dt$.
	- (space curve) $L=\int_a^b \sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2 + \left(\frac{dz}{dt}\right)^2}\, dt$.
- The **tangent vector** to $\mathcal{C}$ at the point $\mathbf{r}(t)$ is $\mathbf{r}'(t)$ (if $\mathbf{r}'(t) \neq \mathbf{0}$).
	- The **unit tangent vector** is $\mathbf{T}(t) = \frac{\mathbf{r}'(t)}{\|\mathbf{r}'(t)\|}$
	- If $\forall t \in I$, $\| \mathbf{r}(t)\| = c$ (constant), then $\forall t \in I$, $\mathbf{r}(t) \perp \mathbf{r}'(t)$.
.
- The **curvature** of a smooth curve $\mathcal{C}$ at the point $\mathbf{r}(t)$ is $\kappa(t) = \frac{\|\mathbf{T}'(t)\|}{\|\mathbf{r}'(t)\|}$.

#### Parametric surface

- A set $S=\{\mathbf{r}(u,v):(u,v)\in D\}$, where:
	- $D\subseteq \mathbb{R}^2$ is the **parameter domain**
	- $x,y,z:D\to\mathbb{R}$
		- $x=x(u,v)$, $y=y(u,v)$, and $z=z(u,v)$ are the **parametric equations** of the surface
	- $\mathbf{r}:D\to\mathbb{R}^3$ and $\mathbf{r}(u,v) = \big( x(u,v),\, y(u,v),\, z(u,v) \big)$
	- $u,v$ are the **parameters** of the surface.
- The **surface area** of $S$ is given by $A(S) = \iint_D \left\| \frac{\partial \mathbf{r}}{\partial u} \times \frac{\partial \mathbf{r}}{\partial v} \right\|\, dA$.
- The **tangent plane** to $S$ at the point $\mathbf{r}(u_0,v_0)$ is given by the point $\mathbf{r}(u_0,v_0)$ and the normal vector $\frac{\partial \mathbf{r}}{\partial u} \times \frac{\partial \mathbf{r}}{\partial v}$ (if $\frac{\partial \mathbf{r}}{\partial u} \times \frac{\partial \mathbf{r}}{\partial v} \neq \mathbf{0}$).




- (The parametric equations are collectively called a **parametric representation** or **parametrization** of the curve/surface)
- (_Remark_: A curve/surface can have multiple parameterizations.)
- The process of finding a rectangular equation from a parametric representation is called **elimination of the parameter**.





# Examples 


| Curve               | Explicit            | Implicit                                    | Parametric                                                                  |
| ------------------- | ------------------- | ------------------------------------------- | --------------------------------------------------------------------------- |
| Circle (radius $R$) | Not a function      | $x^2 + y^2 - R^2 = 0$                       | $\mathbf{r}(t) = (R\cos t, R\sin t), t \in [0, 2\pi]$                       |
| Ellipse             | Not a function      | $\frac{x^2}{a^2} + \frac{y^2}{b^2} - 1 = 0$ | $\mathbf{r}(t) = (a\cos t, b\sin t), t \in [0, 2\pi]$                       |
| Parabola            | $y = ax^2 + bx + c$ | $y - ax^2 - bx - c = 0$                     | $\mathbf{r}(t) = (t, at^2 + bt + c), t \in \mathbb{R}$                      |
| Hyperbola           | Not a function      | $\frac{x^2}{a^2} - \frac{y^2}{b^2} - 1 = 0$ | $\mathbf{r}(t) = (a\sec t, b\tan t), t \in (-\frac{\pi}{2}, \frac{\pi}{2})$ |
| Line                | $y = mx + b$        | $Ax + By + C = 0$                           | $\mathbf{r}(t) = (x_0 + t, y_0 + mt), t \in \mathbb{R}$                     |
