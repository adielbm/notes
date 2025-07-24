# Electric charge

- Electric charge is **quantized**, that is, exists in discrete quantities which are integer multiples of the **elementary charge** $e=1.6022\times 10 ^{-19}\,\mathsf{C}\approx 1.6\times 10^{-19}\,\mathsf{C}$
	- The charge of an electron is $-e$ and the charge of a proton is $+e$
	- The SI unit of charge is the **coulomb** (C)
- **Conservation of charge**: the total charge in an isolated system remains constant
- An object can become charged by:
	- rubbing (friction)
	- conduction (transfer of charge from one charged object to another by touching)
	- induction
- $m_{\rm {e}}=9.11\times 10^{-31}\,\mathsf{kg}$ is the mass of an electron
- $\displaystyle n=\frac{Q}{e}$ is the number of electrons transferred

## Coulomb's Law

![[Coulomb's Law.svg]]


- $\displaystyle F=k\frac{q_1q_2}{r^2}$ is the **electrostatic force** (or **Coulomb force**) between two charges (in $\mathsf{N}$)
	- $q_1$ and $q_2$ are the magnitudes of the charges (in $\mathsf{C}$)
	- $r$ is the distance between the charges (in $\mathsf{m}$)
	- $\displaystyle k=\frac{1}{4\pi\epsilon_{0}}=8.99\times 10^9\ \mathsf{N\cdot m^2/C^2}$ is **Coulomb's constant**
	- $\displaystyle\epsilon_{0}=\frac{1}{4\pi k}=8.85\times 10^{-12}\ \mathsf{C^2/N\cdot m^2}$ is the **permittivity of free space**

- limitations and assumptions of Coulomb's Law #todo
	- point charges
	- objects are at rest (electrostatics force)
	- electric force
- (_Superposition principle_) The total force on a charge $Q$ is the sum of the forces exerted by the other charges $q_1, q_2, q_3, ...$ on $Q$
	- $\displaystyle F = F_1 + F_2 + F_3 + ...$
- $\displaystyle |\vec{F}_E| = \frac{1}{4\pi\epsilon_0} \frac{|q_1q_2|}{r^2} = k \frac{|q_1q_2|}{r^2}$ #todo


## Charge Density

- $\displaystyle \lambda = \frac{Q}{L}$ is the **linear charge density** (in $\mathsf{C/m}$)
- $\displaystyle \sigma = \frac{Q}{A}$ is the **surface charge density** (in $\mathsf{C/m^2}$)
- $\displaystyle \rho = \frac{Q}{V}$ is the **volume charge density** (in $\mathsf{C/m^3}$)

## Electric field

- An **electric field** is a vector field that associates to each point in space the force per unit of charge exerted on an infinitesimal test charge at rest at that point $$\displaystyle E=\frac{F}{q}$$  
	- $E$ is the electric field that a charge $q$ experiences (in $\mathsf{N/C}$)
	- $F$ is the force on a charge (in $\mathsf{N}$)
	- $q$ is the **test charge** (in $\mathsf{C}$)
- (vector form: $\displaystyle \vec{\mathbf{E}}=\frac{\vec{\mathbf{F}}}{q}$) or $\displaystyle \vec{\mathbf{E}}=\lim_{ q \to 0}\frac{\vec{\mathbf{F}}}{q}$
- The SI unit of electric field is $\mathsf{N/C}=\mathsf{V/m}$

### Electric Field due to a Point Charge 

- $\displaystyle E =k\frac{Q}{r^2}{\color{gray}\impliedby E =\frac{F}{q}=\frac{kQq/r^2}{q}}$ 
	- $P$ is the point in space where the electric field is being calculated
	- $Q$ is the point charge creating the electric field (in $\mathsf{C}$)
	- $r$ is the distance between the point $P$ and the charge $Q$ (in $\mathsf{m}$)
	- $E$ is the electric field (at $P$) due to the source charge $Q$ (in $\mathsf{N/C}$)
	- $\vec{\mathbf{E}}=k\frac{Q}{r^2}\hat{\mathbf{r}}$ where $\hat{\mathbf{r}}$ is the unit vector pointing from $Q$ to $P$
	- $k$ is Coulomb's constant
- (_Superposition Principle_) The total electric field at a point in space is the vector sum of the electric fields due to the individual charges
	-  $\vec{\mathbf{E}}_{\text{total}}=\vec{\mathbf{E}}_1+\vec{\mathbf{E}}_2+\vec{\mathbf{E}}_3+...$ 

- $\displaystyle\vec{E}=k \int \frac{dq}{r^2} \hat{r}$ #todo 


![[Electric Field due to a Point Charge.svg]]

> [!Notes]
> - There is no electric charge at point $P$. But there is an electric field there. The only real charge is $Q$.
> - Notice that $E$ depends only on the charge $Q$ which produces the electric field, and not on the value of the test charge $q$.
> - In the figure, the electric field is positive, so it points towards a negative charge and away from a positive charge. But if the electric field is negative, it is the opposite.


### Electric Field and Potential Eifference

- $\displaystyle E=-\frac{V_{ba}}{x}$ is the electric field (uniform $\vec{\mathbf{E}}$)
	- $V_{ba}$ is the potential difference between points $a$ and $b$ (in $\mathsf{V}$)
	- $x$ is the distance between the points (in $\mathsf{m}$)
- $\displaystyle E_{x}=-\frac{dV}{dx}$ is the electric field (non-uniform $\vec{\mathbf{E}}$)

### Electric Field between Two Parallel Plates

- $\displaystyle E=\frac{Q}{\varepsilon_{0}A}$ is the magnitude of the electric field between two parallel plates, oppositely charged
	- $Q$ is the charge on each plate
	- $A$ is the area of one plate (Gaussian surface)
	- Given the plate separation is much smaller than the dimensions of the plates
	- This equation is derived from Gauss's Law and the principle of superposition:

### Electric Field Lines

- Electric field lines indicate the direction of the electric field; the field points in the direction tangent to the field line at any point (note that the field lines never cross)
- The lines are drawn such that the magnitude of the electric field, $E$, is proportional to the number of lines crossing unit area perpendicular to the lines. The closer the lines, the stronger the field
- The lines start on positive charges and end on negative charges


- $\displaystyle \Phi_E = \int \vec{E} \cdot d\vec{A}$
- $\displaystyle \oint \vec{E} \cdot d\vec{A} = \frac{q_{enc}}{\epsilon_0}$
- $\displaystyle Q_{\text{total}} = \int \rho(r) dV$



### todo

- electric field lines
- electric dipole
- static electric field
- equipotential surfaces, equipotential lines


# Electric Flux

- $\displaystyle \Phi_E = EA\cos\theta=EA_{\perp}=E_{\perp}A$ is the **electric flux** through a surface
	- $E$ is the magnitude of the electric field $\vec{\mathbf{E}}$ (in $\mathsf{N/C}$)
	- $A$ is the area of the surface (in $\mathsf{m^2}$)
	- $E_{\perp}=E\cos\theta$ is the component of the electric field perpendicular to the surface
	- $A_{\perp}=A\cos\theta$ is the projection of the area perpendicular to the field
	- $\theta$ is the angle between $\vec{\mathbf{E}}$ and $E_{\perp}$
	- $N \propto \Phi_E$ - the number of field lines crossing the surface is proportional to the electric flux
- $\displaystyle \Phi_E =\sum E \Delta A \cos\theta$, where the sum is over all the patches of the surface
- (**Gauss's Law**) 
	- $\displaystyle\oint \mathbf{E} \cdot d\mathbf{A} = \frac{Q_{\text{enc}}}{\varepsilon_0}$ is the electric flux through a closed surface
		- $q_{\text{enc}}$ is the charge enclosed by the surface (in $\mathsf{C}$)
		- $\epsilon_0$ is the permittivity of free space (in $\mathsf{C^2/N\cdot m^2}$)
	- (Differential form) $\displaystyle \nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0}$, where $\rho$ is the charge density (in $\mathsf{C/m^3}$)

