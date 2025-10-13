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

![[Coulomb's Law.svg|200]]


- $\displaystyle F=k\frac{q_1q_2}{r^2}$ is the **electrostatic force** (or **Coulomb force**) between two charges (in $\mathrm{N}$)
	- $q_1$ and $q_2$ are the magnitudes of the charges (in $\mathrm{C}$)
	- $r$ is the distance between the charges (in $\mathrm{m}$)
	- $\displaystyle k=\frac{1}{4\pi\epsilon_{0}}=8.99\times 10^9\ \mathsf{N\cdot m^2/C^2}$ is **Coulomb's constant**

- limitations and assumptions of Coulomb's Law #todo
	- point charges
	- objects are at rest (electrostatics force)
	- electric force
- (_Superposition principle_) The total force on a charge $Q$ is the sum of the forces exerted by the other charges $q_1, q_2, q_3, ...$ on $Q$
	- $\displaystyle F = F_1 + F_2 + F_3 + ...$
- $\displaystyle |\vec{F}_E| = \frac{1}{4\pi\epsilon_0} \frac{|q_1q_2|}{r^2} = k \frac{|q_1q_2|}{r^2}$ #todo


## Charge Density

- $\displaystyle \lambda = \frac{Q}{L}$ is the **linear charge density** (in $\mathrm{C/m}$)
- $\displaystyle \sigma = \frac{Q}{A}$ is the **surface charge density** (in $\mathrm{C/m^2}$)
- $\displaystyle \rho = \frac{Q}{V}$ is the **volume charge density** (in $\mathrm{C/m^3}$)

- $\displaystyle Q_{\text{total}} = \int \rho(r) dV$

## Electric field

- An **electric field** is a vector field that associates to each point in space the force per unit of charge exerted on an infinitesimal test charge at rest at that point $$\displaystyle E=\frac{F}{q}$$  
	- $E$ is the electric field that a charge $q$ experiences (in $\mathrm{N/C}$)
	- $F$ is the force on a charge (in $\mathrm{N}$)
	- $q$ is the **test charge** (in $\mathrm{C}$)
- (vector form: $\displaystyle \vec{\boldsymbol{E}}=\frac{\vec{\boldsymbol{F}}}{q}$) or $\displaystyle \vec{\boldsymbol{E}}=\lim_{ q \to 0}\frac{\vec{\boldsymbol{F}}}{q}$
- The SI unit of electric field is $\mathrm{N/C}=\mathrm{V/m}$

### Electric Field due to a Point Charge 

- $\displaystyle E =k\frac{Q}{r^2}$ 
	- $P$ is the point in space where the electric field is being calculated
	- $Q$ is the point charge creating the electric field (in $\mathrm{C}$)
	- $r$ is the distance between the point $P$ and the charge $Q$ (in $\mathrm{m}$)
	- $E$ is the electric field (at $P$) due to the source charge $Q$ (in $\mathrm{N/C}$)
	- $\vec{\boldsymbol{E}}=k\frac{Q}{r^2}\hat{\mathbf{r}}$ where $\hat{\mathbf{r}}$ is the unit vector pointing from $Q$ to $P$
	- $k$ is Coulomb's constant
- (_Superposition Principle_) The total electric field at a point in space is the vector sum of the electric fields due to the individual charges
	-  $\vec{\boldsymbol{E}}_{\text{total}}=\vec{\boldsymbol{E}}_1+\vec{\boldsymbol{E}}_2+\vec{\boldsymbol{E}}_3+...$ 

- $\displaystyle\vec{E}=k \int \frac{dq}{r^2} \hat{r}$ #todo 


![[Electric Field due to a Point Charge.svg]]

> [!Notes]
> - There is no electric charge at point $P$. But there is an electric field there. The only real charge is $Q$.
> - Notice that $E$ depends only on the charge $Q$ which produces the electric field, and not on the value of the test charge $q$.
> - In the figure, the electric field is positive, so it points towards a negative charge and away from a positive charge. But if the electric field is negative, it is the opposite.






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

 

# Electrostatic field

- An **electrostatics field** (or **static electric field**) is an electric field that does not change with time
- For any electrostatic field:
	- $\vec{\boldsymbol{E}}=-\nabla V$
		- (uniform electrostatic field) $\displaystyle E=-\frac{V_{ba}}{d}$
			- $V_{ba}$ is the potential difference between points $a$ and $b$ (in $\mathrm{V}$)
			- $d$ is the distance between the points (in $\mathrm{m}$)
	- $\displaystyle\oint_{\mathcal{C}} \vec{\boldsymbol{E}} \cdot d\vec{\boldsymbol{\ell}} = 0$ for any closed curve $\mathcal{C}$

# Electric dipole moment

- An **electric dipole** consists of two equal and opposite charges separated by a distance $d$
- The **electric dipole moment** $\vec{\boldsymbol{p}}$ (in $\mathrm{C\cdot m}$) of a dipole is defined as $\vec{\boldsymbol{p}}=q\vec{\boldsymbol{d}}$ where $q$ is the magnitude of the charges and $\vec{\boldsymbol{d}}$ is the vector pointing from the negative charge to the positive charge
- $\vec{\boldsymbol{\tau}}=\vec{\boldsymbol{p}}\times\vec{\boldsymbol{E}}$ is the torque on an electric dipole
- $U=-\vec{\boldsymbol{p}}\cdot\vec{\boldsymbol{E}}$ is the potential energy for an electric dipole in an electric field




# Electric flux

- $\displaystyle \Phi_E =\iint_{S} \vec{\boldsymbol{E}} \cdot d\vec{\boldsymbol{S}}$ is the **electric flux** (in $\mathrm{N\cdot m^2/C}$) through a surface $S$ in an electric field $\vec{\boldsymbol{E}}$
	- $\displaystyle \Phi_E = \vec{\boldsymbol{E}} \cdot \vec{\boldsymbol{A}}$ is the electric flux through a flat surface with a vector area $\vec{\boldsymbol{A}}$ in a uniform electric field $\vec{\boldsymbol{E}}$.
	- (See [[Magnetism#Maxwell's equations|Gauss's Law for electricity]])
