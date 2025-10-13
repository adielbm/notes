
- A **vector-valued function** (or **vector function**) is a function (of one or more variables) whose range is a set of vectors. 
	- Given $\mathbf{r}(t)=\langle x(t),y(t),z(t)\rangle$, we define: 
		- $\displaystyle\lim_{t\to a}\mathbf{r}(t)=\langle \lim_{t\to a}x(t),\lim_{t\to a}y(t),\lim_{t\to a}z(t)\rangle$.
		- $\displaystyle\frac{d\mathbf{r}}{dt}=\mathbf{r}'(t)=\lim_{h\to 0}\frac{\mathbf{r}(t+h)-\mathbf{r}(t)}{h}$ (assume $\mathbf{r}$ is differentiable)
			- $\mathbf{r}'(t)=\langle x'(t),y'(t),z'(t)\rangle$ 

# Gradient

![350](https://upload.wikimedia.org/wikipedia/commons/d/d2/3d-gradient-cos.svg "The gradient of f(x,y) = −(cos²x + cos²y)² as a projected vector field on the bottom plane.")

- The **gradient vector** (or **gradient**) of a differentiable function $f:\mathbb{R}^2\to\mathbb{R}$ is the vector-valued function $\nabla f:\mathbb{R}^2\to\mathbb{R}^2$ defined as $\nabla f=\left(\frac{\partial f}{\partial x},\frac{\partial f}{\partial y}\right)$, where $x,y$ are the variables of the function $f$.
	- $\nabla f(p_0)=\left(\frac{\partial f}{\partial x}(p_0),\frac{\partial f}{\partial y}(p_0)\right)$ is the gradient vector at the point $p_0$
	- $\displaystyle \frac{\partial f}{\partial \mathbf{v}}(p_0)=\nabla f(p_{0})\cdot \mathbf{v}$
	- $\displaystyle \frac{\partial f}{\partial {\hat{\mathbf{u}}}}(p_0)=\nabla f(p_{0})\cdot \hat{\mathbf{u}}=\|\nabla f(p_{0})\|\cdot \cos \theta$, where $\hat{\mathbf{u}}$ is a unit vector and $\theta$ is the angle between $\nabla f(p_{0})$ and $\hat{\mathbf{u}}$.
		- $\displaystyle \frac{\partial f}{\partial {\hat{\mathbf{u}}}}(p_0)$ is maximized when $\hat{\mathbf{u}}$ is in the direction of $\nabla f(p_{0})$, minimized when $\hat{\mathbf{u}}$ is in the opposite direction, and zero when $\hat{\mathbf{u}}\perp\nabla f(p_{0})$.


# Divergence

![[Divergence.svg|300]]
 

- The **divergence** of a continuously differentiable vector field ${\displaystyle \mathbf {F} =F_{x}\mathbf {i} +F_{y}\mathbf {j} +F_{z}\mathbf {k} }$ is defined as the scalar-valued function ${\displaystyle \operatorname {div} \mathbf {F} =\nabla \cdot \mathbf {F} =\left({\frac {\partial }{\partial x}},{\frac {\partial }{\partial y}},{\frac {\partial }{\partial z}}\right)\cdot (F_{x},F_{y},F_{z})={\frac {\partial F_{x}}{\partial x}}+{\frac {\partial F_{y}}{\partial y}}+{\frac {\partial F_{z}}{\partial z}}}$
- A vector field $\mathbf{F}$ is said to be **solenoidal** (or **divergence-free** or **incompressible**) if $\nabla \cdot \mathbf{F}=0$ everywhere 


# Curl
![[curl.svg|300]]
- The **curl** of a vector field $\mathbf{F}=F_x\mathbf{i}+F_y\mathbf{j}$ is defined as the vector-valued function $\displaystyle\text{curl}(\mathbf{F})=\nabla\times\mathbf{F}=\left(\frac{\partial F_y}{\partial x}-\frac{\partial F_x}{\partial y}\right)\mathbf{k}$.
- The **curl** of a vector field $\mathbf{F}=F_x\mathbf{i}+F_y\mathbf{j}+F_z\mathbf{k}$ is defined as the vector-valued function $\displaystyle\text{curl}(\mathbf{F})=\nabla\times\mathbf{F}=\left(\frac{\partial F_z}{\partial y}-\frac{\partial F_y}{\partial z}\right)\mathbf{i}+\left(\frac{\partial F_x}{\partial z}-\frac{\partial F_z}{\partial x}\right)\mathbf{j}+\left(\frac{\partial F_y}{\partial x}-\frac{\partial F_x}{\partial y}\right)\mathbf{k}$.
- A vector field $\mathbf{F}$ is said to be **irrotational** (or **curl-free**) if $\nabla \times \mathbf{F}=0$ everywhere
- A vector field $\mathbf{F}:D\subseteq \mathbb{R}^n\to \mathbb{R}^n$ is said to be **conservative** if there exists a function $\phi:D\to \mathbb{R}$ such that $\mathbf{F}=\nabla \phi$. (such a function $\phi$ is called a **potential function** for $\mathbf{F}$)
- Every conservative vector field is irrotational. The converse is true if the domain $D$ is simply connected.