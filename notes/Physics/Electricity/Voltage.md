# Electric Potential

- The **electric potential** (or **potential**) at a point is the amount of electric potential energy per unit charge at that point. $$V=\frac{U}{q}$$
- The electric potential at a point $\vec{\mathbf{r}}$ is the work done in moving a unit positive charge from infinity to that point. $$\displaystyle V=V(\vec{\mathbf{r}}) - V(\infty)=-\int_{\infty}^{\vec{\mathbf{r}}} \vec{\mathbf{E}}\cdot d\vec{\mathbf{l}}$$
- The **volt** ($\mathrm{V}$), defined as $\mathrm{1\ V = 1\ J/C}$, is the SI unit of electric potential
- (**Coulomb potential**) $\displaystyle V=k\frac{Q}{r}$
	- $V$ is the electric potential at a point in space due to a point charge $Q$ (in $\mathrm{V}$)
	- $Q$ is the point charge creating the electric potential (in $\mathrm{C}$)
	- $r$ is the distance between the charge and the point in space (in $\mathrm{m}$)
	- $k$ is [[Charge#Coulomb's Law|Coulomb's constant]]
- The electric potential at a point due to multiple charges is the sum of the potentials due to each charge. $V_{\text{total}}=V_1+V_2+V_3+...$

## Voltage
$$\displaystyle V = V_a - V_b =\frac{W_{a \to b}}{q} =-\frac{\Delta U}{q}=\int_a^b \vec{\mathbf{E}}\cdot d\vec{\mathbf{l}}=-\int_b^a \vec{\mathbf{E}}\cdot d\vec{\mathbf{l}}$$is the **voltage** (or **(electrical) potential difference**) between points $a$ and $b$. (also called the **potential difference** of $a$ with respect to $b$) 

- $V_a$ and $V_b$ are the electric potentials at points $a$ and $b$ (in $\mathrm{V}$)
- $\Delta U=(U_b- U_a)$ 
- $\frac{W_{a \to b}}{q} = -\frac{\Delta U}{q}$ is the work done by the electric field in moving a unit charge $q$ from point $a$ to point $b$ (in $\mathrm{J}$)
- The SI unit of voltage is the volt
- If $V_a>V_b$:
	- A negative charge $q^{-}$ placed at $b$ has higher potential energy than at $a$ (i.e. $U _a < U _b$)
	- A positive charge $q^{+}$ placed at $b$ has lower potential energy than at $a$ (i.e. $U _a > U _b$)
	- In both cases, $V = V_a - V_b >0$
- We often use ground (0 V) or infinity as a reference point.

# Electromotive Force

- A **source (of emf)** is a device that transforms some other form of energy into electrical energy
- The potential difference (voltage) be tween the terminals of a source when no current is flowing is called the **emf** of the source 
	- The emf of a source is determined by the chemical reactions that occur within the source
- The **terminal voltage (difference)** is the potential difference between the terminals of a source
- The **internal resistance** of a source is the resistance that the source itself has to the flow of current
	- Unless stated otherwise, we assume the battery’s internal resistance is negligible, and the battery voltage given is its terminal voltage
- $V=\mathcal{E}-Ir$ is the terminal voltage of a source
	- $\mathcal{E}$ is the emf of the source (in $\mathrm{V}$)
	- $I$ is the current that flows through the source (in $\mathrm{A}$)
	- $r$ is the internal resistance of the source (in $\mathrm{\Omega}$)
	- When $I=0$ (no current is flowing), $V=\mathcal{E}$ (the terminal voltage equals the emf)
