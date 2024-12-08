# Electric Potential

- **Electric potential** (or simply **potential**) is the electric potential energy per unit charge.
- $\displaystyle V=\frac{\mathrm{PE}_a}{q}$
	- $V$ is the electric potential (in $\mathsf{V}$, volts)
	- $\mathrm{PE}_a$ is the electric potential energy at point $a$ (in $\mathsf{J}$, joules)
	- $q$ is the charge (in $\mathsf{C}$, coulombs)

- $\displaystyle V=k\frac{Q}{r}$ (**Coulomb potential**) #todo
	- $V$ is the electric potential due to a point charge $Q$ (in $\mathsf{V}$)
	- $Q$ is the point charge creating the electric potential (in $\mathsf{C}$)
	- $r$ is the distance between the charge and the point in space (in $\mathsf{m}$)
	- $k$ is Coulomb's constant

# Voltage

- **Voltage** (or **(electrical) potential difference**) is the difference in electric potential between two points in a circuit.
	- $\displaystyle V = V_a - V_b = \frac{\mathrm{PE}_a-\mathrm{PE}_b}{q}$ is the **voltage** between points $a$ and $b$.
		- $V$ is the work done in moving unit charge from $b$ to $a$ (in $\mathsf{V}$)
		- $V_a$ and $V_b$ are the electric potentials at points $a$ and $b$ (in $\mathsf{V}$)
	- The SI unit of voltage is the **volt** (V), defined as $\mathsf{1\ V = 1\ J/C}$.
	- We often use ground (0 V) or infinity as a reference point.
	- Given a point $a$ with a higher potential $V_a$ and a point $b$ with a lower potential $V_b$:
		- A **negative charge** placed at $b$ has higher potential energy than at $a$, so it will move from $b$ to $a$ (when released) and decrease its potential energy.
			- $\mathrm{PE}_a < \mathrm{PE}_b \implies \Delta \mathrm{PE} < 0$
		- A **positive charge** placed at $a$ has higher potential energy than at $b$, so it will move from $a$ to $b$ (when released) and decrease its potential energy.
			- $\mathrm{PE}_a > \mathrm{PE}_b \implies \Delta \mathrm{PE} > 0$
		- In both cases, $\Delta V = V_a - V_b > 0$.

- $V_{ba}=-dE$ is the electric field (uniform $\vec{\mathbf{E}}$)
	- $V_{ba}$ is the potential difference between points $a$ and $b$ (in $\mathsf{V}$)
	- $d$ is the distance between the points (in $\mathsf{m}$)
	- $E$ is the electric field (in $\mathsf{N/C}$)


# Electromotive Force

- #todo A **source of electromotive force (emf)** (or **source**) is a device that transforms some other form of energy into electrical energy
- The potential difference (voltage) between the terminals of a source when no current is flowing is called the **emf** of the source 
	- The emf of a source is determined by the chemical reactions that occur within the source
- The **terminal voltage (difference)** is the potential difference between the terminals of a source
- The **internal resistance** of a source is the resistance that the source itself has to the flow of current
	- Unless stated otherwise, we assume the battery’s internal resistance is negligible, and the battery voltage given is its terminal voltage
- $V=\mathcal{E}-Ir$ is the terminal voltage of a source
	- $\mathcal{E}$ is the emf of the source (in $\mathsf{V}$)
	- $I$ is the current that flows through the source (in $\mathsf{A}$)
	- $r$ is the internal resistance of the source (in $\mathsf{\Omega}$)
	- When $I=0$ (no current is flowing), $V=\mathcal{E}$ (the terminal voltage equals the emf)
