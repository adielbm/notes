
# Gradient

![350](https://upload.wikimedia.org/wikipedia/commons/d/d2/3d-gradient-cos.svg "The gradient of f(x,y) = −(cos²x + cos²y)² as a projected vector field on the bottom plane.")

- The **gradient vector** (or **gradient**) of a differentiable function $f:\mathbb{R}^2\to\mathbb{R}$ is the vector-valued function $\nabla f:\mathbb{R}^2\to\mathbb{R}^2$ defined as $\nabla f=\left(\frac{\partial f}{\partial x},\frac{\partial f}{\partial y}\right)$, where $x,y$ are the variables of the function $f$.
	- $\nabla f(p_0)=\left(\frac{\partial f}{\partial x}(p_0),\frac{\partial f}{\partial y}(p_0)\right)$ is the gradient vector at the point $p_0$
	- $\displaystyle \frac{\partial f}{\partial \mathbf{v}}(p_0)=\nabla f(p_{0})\cdot \mathbf{v}$
	- $\displaystyle \frac{\partial f}{\partial {\hat{\mathbf{u}}}}(p_0)=\nabla f(p_{0})\cdot \hat{\mathbf{u}}=\|\nabla f(p_{0})\|\cdot \cos \theta$, where $\hat{\mathbf{u}}$ is a unit vector and $\theta$ is the angle between $\nabla f(p_{0})$ and $\hat{\mathbf{u}}$.
		- $\displaystyle \frac{\partial f}{\partial {\hat{\mathbf{u}}}}(p_0)$ is maximized when $\hat{\mathbf{u}}$ is in the direction of $\nabla f(p_{0})$, minimized when $\hat{\mathbf{u}}$ is in the opposite direction, and zero when $\hat{\mathbf{u}}\perp\nabla f(p_{0})$.


# Divergence

![[Divergence.svg|400]]
 

- The **divergence** of a continuously differentiable vector field ${\displaystyle \mathbf {F} =F_{x}\mathbf {i} +F_{y}\mathbf {j} +F_{z}\mathbf {k} }$ is defined as the scalar-valued function ${\displaystyle \operatorname {div} \mathbf {F} =\nabla \cdot \mathbf {F} =\left({\frac {\partial }{\partial x}},{\frac {\partial }{\partial y}},{\frac {\partial }{\partial z}}\right)\cdot (F_{x},F_{y},F_{z})={\frac {\partial F_{x}}{\partial x}}+{\frac {\partial F_{y}}{\partial y}}+{\frac {\partial F_{z}}{\partial z}}}$

# Curl

- The **curl** of a vector field $\mathbf{F}=F_x\mathbf{i}+F_y\mathbf{j}$ is defined as the vector-valued function $\displaystyle\text{curl}(\mathbf{F})=\nabla\times\mathbf{F}=\left(\frac{\partial F_y}{\partial x}-\frac{\partial F_x}{\partial y}\right)\mathbf{k}$.
- The **curl** of a vector field $\mathbf{F}=F_x\mathbf{i}+F_y\mathbf{j}+F_z\mathbf{k}$ is defined as the vector-valued function $\displaystyle\text{curl}(\mathbf{F})=\nabla\times\mathbf{F}=\left(\frac{\partial F_z}{\partial y}-\frac{\partial F_y}{\partial z}\right)\mathbf{i}+\left(\frac{\partial F_x}{\partial z}-\frac{\partial F_z}{\partial x}\right)\mathbf{j}+\left(\frac{\partial F_y}{\partial x}-\frac{\partial F_x}{\partial y}\right)\mathbf{k}$.