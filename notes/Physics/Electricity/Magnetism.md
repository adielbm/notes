
# Magnetic field 

- A **magnetic field** is a vector field $\vec{B}$
	- The SI unit of magnetic field is the **tesla** (T) which is defined as $1 \, \text{T} = 1 \, \text{N}/(\text{A} \cdot \text{m})$.
	- $\displaystyle\vec{B}=\frac{\mu_0}{4\pi} \frac{q\vec{v} \times \hat{r}}{r^2}$ is the magnetic field (in $\mathsf{T}$) at distance $r$ from a point charge $q$ moving with velocity $\vec{v}$ in the direction $\hat{r}$. $\vec{B}$ is perpendicular to both $\vec{v}$ and $\hat{r}$.
		- (superposition) The total magnetic field caused by multiple point charges is the vector sum of the magnetic fields caused by each individual charge.


# Lorentz force 

- (**Lorentz Force**) $\displaystyle \vec{F} = \int I(d\vec{\ell} \times \vec{B})$ is the magnetic force (in $\mathsf{N}$) on a current-carrying conductor in a magnetic field $\vec{B}$.
	- $F=IL B\sin\theta$ (or $\vec{F}=I(\vec{L}\times\vec{B})$) is the magnetic force exerted on a straight wire of length $L$ carrying a current $I$ in a uniform magnetic field $B$ where $\theta$ is the angle between $\vec{L}$ and $\vec{B}$.
	- $F=qvB\sin\theta$ (or $\vec{F}=q(\vec{v}\times\vec{B})$) is the magnetic force exerted on a particle of charge $q$ moving with velocity $\vec{v}$ in a uniform magnetic field $\vec{B}$ where $\theta$ is the angle between $\vec{v}$ and $\vec{B}$. 


## Biot-Savartlaw

- (differential form) $\displaystyle d\vec{B} = \frac{\mu_0}{4\pi} \frac{I (d\vec{\ell} \times \hat{r})}{r^2}$ is the infinitesimal magnetic field produced by a current element $I d\vec{\ell}$ at a distance $r$ in the direction $\hat{r}$.
- (integrated form) $\displaystyle\vec{B} = \frac{\mu_0}{4\pi} \int \frac{I\, d\vec{l} \times \hat{r}}{r^2}$


- $B=\mu_0 n I$ is the magnetic field inside a long solenoid with $n$ turns per unit length ($n=\frac{N}{L}$) carrying current $I$.
- $\displaystyle B=\frac{\mu_0 I}{2\pi r}$ is the magnitude of magnetic field at distance $r$ from a long straight wire carrying current $I$. 
- $\displaystyle B=\frac{\mu_0 I}{2R}$ is the magnitude of magnetic field at the center of a circular loop of radius $R$ carrying current $I$.
- $B=\mu_0 n I$ is the magnetic field inside of a long solenoid with $n$ turns per unit length ($n=\frac{N}{L}$) carrying current $I$.


# Magnetic flux

- $\displaystyle \Phi_B = \vec{B} \cdot \vec{A}$ is the **magnetic flux** (in $\mathsf{Wb}$) through a surface area $\vec{A}$ in a magnetic field $\vec{B}$.
	- $\displaystyle\Phi_B = \int \vec{B} \cdot d\vec{A}$ is the magnetic flux through a surface area $A$ in a magnetic field $\vec{B}$.

# Electromagnetic induction

- (**Faraday’s Law of Induction**) $\displaystyle \mathcal{E} = -N\frac{d\Phi_B}{dt}$ is the induced emf (in $\mathsf{V}$) in a closed loop of wire with $N$ turns due to a changing magnetic flux $\Phi_B$ (in $\mathsf{Wb}$) through the loop.
	- (The negative sign is due to **Lenz's Law**)
	- (**Motional EMF**) $\mathcal{E} = B \ell v \sin\theta$ is the induced emf (in $\mathsf{V}$) in a straight conductor of length $\ell$ moving with velocity $v$ in a magnetic field $B$ at an angle $\theta$ to the field.


- The **inductance** (in henry, $\mathsf{H}$) of a  
	- An inductor is a circuit elementthathassignificantinductance.
	- $\displaystyle L=\frac{\mu_0 N^2 A}{\ell}$
	- $U = \frac{1}{2}LI^2$ is the energy stored in an inductor with inductance $L$ carrying current $I$.
	- $\mathcal{E} = -L \frac{dI}{dt}$


# Magnetic moment

- $\vec{\mu} = I \vec{A}$ is the **magnetic moment** (in $\mathsf{A \cdot m^2}$) of a current loop with area $\vec{A}$ carrying current $I$. ![[Magnetic Moment.svg|150]]
	- $\vec{\tau}=\vec{\mu} \times \vec{B}$ is the torque on a magnetic dipole $\vec{\mu}$ in a magnetic field $\vec{B}$.


# Ampère’s Law

- (**Ampère’s circuital Law**)
	- $\displaystyle \oint_{\mathcal{C}} \vec{B} \cdot d\vec{\ell} = \mu_0 I_{\text{enc}}$ where $I_{\text{enc}}$ is the current through the area enclosed by the closed path $\mathcal{C}$ in a magnetic field $\vec{B}$.

# Maxwell's equations

### Gauss's Law for Electricity

- ${\displaystyle \nabla \cdot \mathbf {E} ={\frac {\rho }{\varepsilon _{0}}}}$
	- where $\rho$ is the charge density

### Gauss's Law for Magnetism 

- ${\displaystyle \nabla \cdot \mathbf {B} =0}$
- $\displaystyle \oint \vec{B} \cdot d\vec{A} = 0$ 
	- (the magnetic flux through a closed surface is zero, indicating that there are no magnetic monopoles)
### Maxwell–Faraday equation

- ${\displaystyle \nabla \times \mathbf {E} =-{\frac {\partial \mathbf {B} }{\partial t}}}$
- $\displaystyle \oint \vec{E} \cdot d\vec{\ell} = -\frac{d\Phi_B}{dt}$ 

### Ampère–Maxwell law

- ${\displaystyle \nabla \times \mathbf {B} =\mu _{0}\mathbf {J} +\mu _{0}\varepsilon _{0}{\frac {\partial \mathbf {E} }{\partial t}}}$
- $\displaystyle \oint \vec{B} \cdot d\vec{\ell} = \mu_0 I + \mu_0 \epsilon_0 \frac{d\Phi_E}{dt}$ 