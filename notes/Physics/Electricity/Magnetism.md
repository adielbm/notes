
# Magnetic field 

- A **magnetic field** is a vector field $\vec{\boldsymbol{B}}$
	- The SI unit of magnetic field is the **tesla** ($\mathrm{T}$) which is defined as $1 \, \text{T} = 1 \, \text{N}/(\text{A} \cdot \text{m})$.
- $\vec{\boldsymbol{H}}=\frac{\vec{\boldsymbol{B}}}{\mu_0} - \vec{\boldsymbol{M}}$ is the **magnetic field strength** (in $\mathrm{A/m}$) where $\mu_0$ is the permeability of free space and $\vec{\boldsymbol{M}}$ is the magnetization of the material.


# Lorentz force 

- $\vec{\boldsymbol{F}}=q(\vec{\boldsymbol{E}}+\vec{\boldsymbol{v}}\times\vec{\boldsymbol{B}})$ is the force (in $\mathrm{N}$) on a particle of charge $q$ moving with velocity $\vec{\boldsymbol{v}}$ in an electric field $\vec{\boldsymbol{E}}$ and a magnetic field $\vec{\boldsymbol{B}}$.
	- $\displaystyle \vec{\boldsymbol{F}} = \int_{\mathcal{C}} I(d\vec{\boldsymbol{\ell}} \times \vec{\boldsymbol{B}})$ is the magnetic force (in $\mathrm{N}$) on a current-carrying conductor in a magnetic field $\vec{\boldsymbol{B}}$.
	- $\vec{\boldsymbol{F}}=I(\vec{\boldsymbol{\ell}}\times\vec{\boldsymbol{B}})$ is the magnetic force exerted on a straight wire of length $\ell$ carrying a current $I$ in a uniform magnetic field $B$ where $\theta$ is the angle between $\vec{\boldsymbol{\ell}}$ and $\vec{\boldsymbol{B}}$.




## Biot-Savartlaw


- $\displaystyle\vec{\boldsymbol{B}}=\frac{\mu_0}{4\pi} \frac{q\vec{v} \times \hat{r}}{r^2}$ is the magnetic field (in $\mathrm{T}$) at distance $r$ from a point charge $q$ moving with velocity $\vec{v}$ in the direction $\hat{r}$. $\vec{\boldsymbol{B}}$ is perpendicular to both $\vec{v}$ and $\hat{r}$.
	- (superposition) The total magnetic field caused by multiple point charges is the vector sum of the magnetic fields caused by each individual charge.
- $\displaystyle\vec{\boldsymbol{B}} = \frac{\mu_0}{4\pi} \oint_{\mathcal{C}} \frac{I\, d\vec{\boldsymbol{\ell}} \times \hat{\mathbf{r}}}{r^2}$
- $B=\mu_0 n I$ is the magnetic field inside a long solenoid with $n$ turns per unit length ($n=\frac{N}{L}$) carrying current $I$.
- $\displaystyle B=\frac{\mu_0 I}{2\pi r}$ is the magnitude of magnetic field at distance $r$ from a long straight wire carrying current $I$. 
- $\displaystyle B=\frac{\mu_0 I}{2R}$ is the magnitude of magnetic field at the center of a circular loop of radius $R$ carrying current $I$.
- $B=\mu_0 n I$ is the magnetic field inside of a long solenoid with $n$ turns per unit length ($n=\frac{N}{L}$) carrying current $I$.


# Magnetic flux

- ${\displaystyle \Phi _{B}=\iint _{S}\vec{\boldsymbol{B}} \cdot d\vec{\boldsymbol{S}}}$ is the **magnetic flux** (in $\mathrm{Wb}$) through a surface $S$ in a magnetic field $\vec{\boldsymbol{B}}$.
	- $\displaystyle \Phi_B = \vec{\boldsymbol{B}} \cdot \vec{\boldsymbol{A}}$ is the magnetic flux through a flat surface with a vector area $\vec{\boldsymbol{A}}$ in a uniform magnetic field $\vec{\boldsymbol{B}}$.
	- (See [[Magnetism#Maxwell's equations|Gauss's Law for magnetism]])

# Electromagnetic induction

- $\displaystyle\mathcal{E} = \oint_{\mathcal{C}} (\vec{\boldsymbol{E}}+\vec{\boldsymbol{v}} \times \vec{\boldsymbol{B}}) \cdot d\vec{\boldsymbol{\ell}}$ is the induced emf (in $\mathrm{V}$) in a moving conductor in a magnetic field $\vec{\boldsymbol{B}}$ where $\vec{\boldsymbol{E}}$ is the electric field and $\vec{\boldsymbol{v}}$ is the velocity of the conductor.
	- (constant flux, $\frac{d\Phi_B}{dt}=0$) $\displaystyle\mathcal{E} = \oint_{\mathcal{C}} (\vec{\boldsymbol{v}} \times \vec{\boldsymbol{B}}) \cdot d\vec{\boldsymbol{\ell}}$ (**Motional EMF**)
		- (faraday disk) $\mathcal{E} = \tfrac{1}{2}\,\omega\,B\,R^2$
	- (stationary conductor $\vec{\boldsymbol{v}}=0$) $\displaystyle\mathcal{E} = \oint_{\mathcal{C}} \vec{\boldsymbol{E}} \cdot d\vec{\boldsymbol{\ell}}$
		- (changing flux, $\frac{d\Phi_B}{dt}\ne 0$) $\displaystyle \mathcal{E} = -\frac{d\Phi_B}{dt}$ (**Faraday’s law of induction**)
			- (The negative sign is due to **Lenz's law**)
			- The **mutual inductance** (in $\mathrm{H}$) between two circuits is $\displaystyle M = \frac{\Phi_{21}}{I_1} = \frac{\Phi_{12}}{I_2}$ where $\Phi_{21}$ is the magnetic flux through circuit 2 due to current $I_1$ in circuit 1, (and vice versa).
				 - $\mathcal{E}_2 = -M \frac{dI_1}{dt}$ is the emf induced in circuit 2 due to a changing current $I_1$ in circuit 1.
				 - $\mathcal{E}_1 = -M \frac{dI_2}{dt}$ is the emf induced in circuit 1 due to a changing current $I_2$ in circuit 2.
				 - The **henry** ($\mathrm{H}$) can be defined as $1\,\mathrm{H} = 1\,\mathrm{Wb/A}$.
			 - The **self-inductance** (or **inductance**) (in $\mathrm{H}$) of a circuit is $\displaystyle L = \frac{\Phi_{B}}{I}$ where $\Phi_{B}$ is the magnetic flux through the circuit due to current $I$ in this circuit.
				 - $\mathcal{E} = -L \frac{dI}{dt}$ is the emf induced in a circuit due to a changing current $I$ in the same circuit.






- An **inductor** (or **coil**), 
- $\displaystyle L=\frac{\mu_0 N^2 A}{\ell}$
	- $U = \frac{1}{2}LI^2$ is the energy stored in an inductor with inductance $L$ carrying current $I$.

| Inductor symbols | ![[cute inductor.svg\|Inductor symbol\|50]] | ![[american inductor.svg\|Inductor symbol\|50]] |
| ---------------- | ------------------------------------------- | ----------------------------------------------- |

# Magnetic moment

- $\vec{\boldsymbol{\mu}} = I \vec{\boldsymbol{A}}$ is the **magnetic (dipole) moment** (in $\mathrm{A \cdot m^2}$) of a current loop with area $\vec{\boldsymbol{A}}$ carrying current $I$. 
- $\vec{\boldsymbol{\tau}}=\vec{\boldsymbol{\mu}} \times \vec{\boldsymbol{B}}$ is the torque on a magnetic dipole $\vec{\boldsymbol{\mu}}$ in a magnetic field $\vec{\boldsymbol{B}}$.
- $U=-\vec{\boldsymbol{\mu}} \cdot \vec{\boldsymbol{B}}$ is the potential energy of a magnetic dipole $\vec{\boldsymbol{\mu}}$ in a magnetic field $\vec{\boldsymbol{B}}$.


# Ampère’s circuital Law

|                              | Differential Form                                                                       | Integral Form                                                                                                                                                                                                      |
| ---------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Ampère’s (circuital) Law** | ${\displaystyle \nabla \times \vec{\boldsymbol{B}} =\mu _{0} {\vec{\boldsymbol{J}}}  }$ | $\displaystyle \oint_{\mathcal{C}} \vec{\boldsymbol{B}} \cdot d\vec{\boldsymbol{\ell}} = \mu_0 I_{\text{enc}}$<br>where $I_{\text{enc}}$ is the current through the area enclosed by the closed path $\mathcal{C}$ |

Ampère’s circuital Law is a special case Ampère–Maxwell law when there is no changing electric field (steady current). 

# Maxwell's equations

|                                 | Differential Form                                                                                                                                                           | Integral Form                                                                                                                                                                                                                                                                  |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Gauss's Law for Electricity** | ${\displaystyle \nabla \cdot \vec{\boldsymbol{E}} ={\frac {\rho }{\varepsilon _{0}}}}$<br>$\rho$ is the charge density                                                      | $\displaystyle \iint_{S} \vec{\boldsymbol{E}} \cdot d\vec{\boldsymbol{A}} = \frac{Q_{\text{enc}}}{\varepsilon_0}$<br>where $S$ is any closed surface                                                                                                                           |
| **Gauss's Law for Magnetism**   | ${\displaystyle \nabla \cdot \vec{\boldsymbol{B}} =0}$                                                                                                                      | $\displaystyle \iint_{S} \vec{\boldsymbol{B}} \cdot d\vec{\boldsymbol{A}} = 0$<br>where $S$ is any closed surface                                                                                                                                                              |
| **Maxwell–Faraday equation**    | ${\displaystyle \nabla \times \vec{\boldsymbol{E}} =-{\frac {\partial \vec{\boldsymbol{B}} }{\partial t}}}$                                                                 | $\displaystyle \oint_{\partial S} \vec{\boldsymbol{E}} \cdot d\vec{\boldsymbol\ell} = -\frac{d}{dt}\iint_S \vec{\boldsymbol{B}} \cdot d\vec{\boldsymbol{A}}$<br>where $\partial S$ is the boundary curve of a surface $S$                                                      |
| **Ampère–Maxwell law**          | ${\displaystyle \nabla \times \vec{\boldsymbol{B}} =\mu _{0}\left( {\vec{\boldsymbol{J}}} +\varepsilon _{0}{\frac {\partial {\vec{\boldsymbol{E}}} }{\partial t}} \right)}$ | $\displaystyle\oint_{\partial S} \vec{\boldsymbol{B}} \cdot d\vec{\boldsymbol{\ell}} = \mu_0 \left( I_{\text{enc}} + \varepsilon_0 \frac{d}{dt} \iint_S \vec{\boldsymbol{E}} \cdot d\vec{\boldsymbol{A}} \right)$<br>where $\partial S$ is the boundary curve of a surface $S$ |


