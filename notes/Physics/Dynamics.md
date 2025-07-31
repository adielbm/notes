- **Inertia** is the tendency of an object to resist changes in its state of motion.
- **Mass** is a measure of the inertia of an object.

# Force

- A force is an interaction between two objects or between an object and its environment.
- A force is a vector quantity.
- $\vec{\mathbf{F}}_{\text{G}} = m\vec{\mathbf{g}}$ is the **gravitational force** (in $\mathsf{N}$) acting on an object with mass $m$ in a gravitational field with gravitational acceleration $\vec{\mathbf{g}}$.
	- $W=mg$ is the **weight** (in $\mathsf{N}$) of an object with mass $m$ in a gravitational field with gravitational acceleration $g$.
	- (Some define weight as a vector quantity, the gravitational force acting on an object, while others define it as a scalar quantity, the magnitude of the gravitational force)
- The **normal force** $\vec{F}_{\text{N}}$ is the force exerted by a surface perpendicular to the object in contact with it.
- The **friction force** $\vec{F}_{\text{fr}}$ is the force exerted by a surface parallel to the object in contact with it, opposing its motion.
	- $F_{\text{fr}}=\mu_{k} F_{\text{N}}$ is the **kinetic friction force** (in $\mathsf{N}$) acting on an object moving on a surface with normal force $F_{\text{N}}$ and coefficient of kinetic friction $\mu_{k}$.
	- $F_{\text{fr}}=\mu_{s} F_{\text{N}}$ is the **static friction force** (in $\mathsf{N}$) acting on an object at rest on a surface with normal force $F_{\text{N}}$ and coefficient of static friction $\mu_{s}$.

## Newton's Laws of Motion

### 1st Law

A body remains at rest, or in motion at a constant speed in a straight line, except insofar as it is acted upon by a force.

### 2nd Law

The acceleration of a body is directly proportional to the net force acting on it, and inversely proportional to its mass. 

- $F=ma$
- $\vec{\mathbf{F}} = m\vec{\mathbf{a}}$
- $\displaystyle\vec{\mathbf{F}} = \frac{d\vec{\mathbf{p}}}{dt}$
- (rotational form) $\tau=I\alpha=\frac{dL}{dt}$
    - $\tau$ is the torque
    - $I$ is the moment of inertia
    - $\alpha$ is the angular acceleration
    - $L$ is the angular momentum

### 3rd Law

For every action force $\vec{F}_{1 \to 2}$ exerted by object 1 on object 2, there is an equal in magnitude and opposite in direction reaction force $\vec{F}_{2 \to 1}$ exerted by object 2 on object 1. $$\vec{F}_{1 \to 2} = -\vec{F}_{2 \to 1}$$
## Gravity

- $G=6.67430(15)\times 10^{-11}\ \mathrm {m^{3}kg^{-1}s^{-2}}$ is the **gravitational constant** (dim. ${\mathsf {M^{-1}L^{3}T^{-2}}}$)
- $\displaystyle g=\frac{F}{m}$ is the **gravitational acceleration** (in $\mathsf{m/s^2}$) of a free-falling object of mass $m$ in a gravitational field with gravitational force $F$ acting on it
- $\displaystyle g=G\frac{M}{r^2}$ is the **gravitational acceleration** (in $\mathsf{m/s^2}$) at a point a gravitational field due to a mass $M$, where $r$ is the distance from the center of mass of $M$ to the point
	- If $M$ is the Earth, then $g=G M_{\text{E}}r^2\approx 9.81\ \mathrm {m/s^2}$ (**Gravity on Earth**)


#### Newton's Law of Universal Gravitation

$$\displaystyle  F=G{\displaystyle\frac {m_{1}m_{2}}{r^{2}}}$$

- $\mathbf {F}_{12}=-F\hat{\mathbf {r}}_{12}=F\hat{\mathbf {r}}_{21}=-\mathbf {F}_{21}\quad \text{(vector form)}$
- $F=|\mathbf {F}_{12}|=|\mathbf {F}_{21}|$ is the [[Vectors#Norm of a Vector|magnitude]] of **gravitational force** ($\mathbf {F}_{12}$ is the force exerted by $m_{1}$ on $m_{2}$, and vice versa)
- $m_{1}$ and $m_{2}$ are the (center of) mass of the two objects
- $\mathbf {r}_{12}=-\mathbf {r}_{21}$ is the position vector from $m_{1}$ to $m_{2}$, 
	- $r=|\mathbf {r}_{12}|=|\mathbf {r}_{21}|$ the [[Vectors#Norm of a Vector|distance]] between the two objects
- $\displaystyle\hat {\mathbf {r}}_{12}= \frac {\mathbf {r}_{12}}{r}$ is the unit vector in the direction of $\mathbf {r}_{12}$ (and vice versa)
#### Gravitational Potential Energy

- $\displaystyle U_{g}=-G{\displaystyle\frac {m_{1}m_{2}}{r}}$ 
- $\Delta U_{g} = mg\Delta h$  

## Mechanical Advantage

- The **mechanical advantage** of a machine is the ratio of the output force to the input force ${\displaystyle \mathrm {MA} ={F_{\text{out}} \over F_{\text{in}}}}$
- A **simple machine** is a mechanical device that changes the magnitude of a force (i.e. the $\mathrm{MA}$ is not $1$), or the direction of a force
- **Lever**
	- $F_{\text{effort}}d_{\text{effort}} = F_{\text{load}}d_{\text{load}}$ (Law of the Lever)
	- $F_{\text{effort}}$ and $F_{\text{load}}$ are the effort and load forces
	- $d_{\text{effort}}$ and $d_{\text{load}}$ are the effort and load distances from the fulcrum
	- Class 1 Lever: fulcrum between the effort and load
	- Class 2 Lever: load between the fulcrum and the effort
	- Class 3 Lever: effort between the fulcrum and the load

- MA of bicycle #todos 
	- $\displaystyle\text{MA}= \frac{d_{\text{in}}}{d_{\text{out}}}= \frac{F_{\text{out}}}{F_{\text{in}}}=\frac{r_{\text{sprocket}}}{r_{\text{chainring}}} \cdot \frac{r_{\text{crank}}}{r_{\text{wheel}}}$

# Center of Mass (CM)

- The **center of mass** of a system of particles is the point that moves as though all the system's mass were concentrated at that point
- $\displaystyle \vec{R_\text{cm}}=\frac{1}{M}\sum_{i=1}^{n}m_{i}\vec{r}_{i}$ is the center of mass of a particles $i=1,2,\ldots,n$ with masses $m_{i}$ and position vectors $\vec{r}_{i}$, where $\displaystyle M=\sum_{i=1}^{n}m_{i}$ is the total mass of the system
  
  
# Density

- $\displaystyle\rho = \frac{m}{V}$ is the **density** (in $\mathsf{kg/m^3}$)





# Mechanical Equilibrium

#todo
