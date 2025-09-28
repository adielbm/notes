# Electrical Circuits

- An **electrical component** is a 
- An **electrical element** is a 
- An **electrical network** is an interconnection of electrical components or a model of such an interconnection, consisting of electrical elements
- An **electrical circuit** is a network consisting of a closed loop, giving a return path for the current. 
- A **branch** represents a single two-terminal element (such as a voltage source or a resistor)
- A **node** (or **junction**) represents a connection between two or more branches
	- Nodes that are connected by perfectly conducting wires are considered to be the same node
- A **reference node**
- A **mesh**
- A **loop**
- A **short circuit** is a circuit element with resistance approaching zero, so $\displaystyle I=\lim_{R\to 0}\frac{V}{R}=\infty$
- An **open circuit** is a circuit element with resistance approaching infinity, so $\displaystyle I=\lim_{R\to \infty}\frac{V}{R}=0$



> [!Terminology] 
> In some texts, a _node_ is defined to be the junction between 3 or more elements. Another term for that is an _essential node_
> In this text, a _node_ is defined to be the junction between 2 or more elements, by thisdefinition, some nodes may be redundant (i.e. not independent)

##### Electrical Elements

classification of elements:

- terminals number:
	- One-port elements (two terminals)
			- dioes, resistors, capacitors, inductors
	- Two-port elements (four terminals)
	- Multiport elements
- energy source:
	- **passive elements** do not have a source of energy
		- dioes, resistors, capacitors, inductors
	- **active elements** (or **sources**) have a source of energy
		- voltage sources, current sources
		- dependent sources
- linearity:
	- **linear elements** have a linear relationship between voltage and current
		- resistors, capacitors, inductors
	- **nonlinear elements** are elements in which the relation between voltage and current is a nonlinear function
		- dioes
# Kirchhoff's Circuit Laws

- **Kirchhoff's (circuit) laws** (or **Kirchhoff's rules**) are two equalities that deal with the current and potential difference.

### Kirchhoff’s Current Law 

- aka: **first law**, **junction rule**	

- For any node in an electrical circuit, the algebraic sum of the currents flowing into and out of the node is zero. Mathematically $$\displaystyle\sum\limits_{i=1}^{n} I_i=0$$
	- $I_i$ is the current flowing through the $i$-th branch
	- $n$ is the total number of branches with currents flowing towards or away from the node
	- Currents flowing into the node are considered positive, and currents flowing out of the node are considered negative (or vice versa, depending on the convention chosen)
- This law is based on the [[#Electric charge|conservation of electric charge]]

### Kirchhoff’s Voltage Law

- aka: **second law**, **loop rule**
- The **voltage drop** is the decrease in electric potential along the path of a current flowing in a circuit
- In one traversal of any closed loop, the sum of the voltage rises equals the sum of the voltage drops.

- given a circuit with a voltage source $V$ and resistors $R_1, R_2, \ldots, R_n$:
	- $I=\frac{V}{\sum R_i}$ is the current through the circuit
	- $V_0, V_1, V_2, \ldots, V_n$
	- $I\cdot R_i$ is the voltage drop across the $i$-th resistor
	- $V_i$ is equal to $V_{i-1}$ minus the voltage drop across $R_i$
		- $V_0=V$
		- $V_n=0$

- This law is based on the conservation of energy

# Resistance & Conductance
![[Resistance.svg]]

- the electric current through a conductor between two points is directly proportional to the voltage across the two points
	- Ohm's Law holds for **ohmic materials** (like most metals) but not for **non-ohmic materials** (like diodes, transistors, and other semiconductors)
	- The unit of resistance is the $\mathsf{ohm}$ ($\mathsf{\Omega}$) defined as $\mathsf{1\ \Omega = 1\ V/A}$
	- The reciprocal of resistance is called the **electrical conductance** (in $\mathsf{S}$, siemens, which is $\mathsf{1\ S = 1 \Omega^{-1}}$)
	- $\displaystyle V=IR$
		- $V$ is the voltage (in $\mathsf{V}$)
		- $I$ is the current (in $\mathsf{A}$)
		- $R$ is the resistance (in $\mathsf{\Omega}$)
- The **(electrical) resistivity** (or **specific resistance**) $\rho$ (in $\mathsf{\Omega\cdot m}$) of a material is a measure of how strongly that material opposes the flow of electric current  
	- $\displaystyle R=\rho\frac{L}{A}$ is the resistance of a conductor of length $L$ and cross-sectional area $A$ with resistivity $\rho$
	- $\rho=\frac{E}{J}$ where $E$ is the electric field (in $\mathsf{V/m}$) and $J$ is the current density (in $\mathsf{A/m^2}$)
	- $\rho(T)=\rho_0[1+\alpha(T-T_0)]$
	- The reciprocal of the resistivity, called the **electrical conductivity** (or **specific conductance**) is $\sigma=\frac{1}{\rho}$ (in $\mathsf{S/m}$, siemens per meter, or $\mathsf{(\Omega\cdot m)^{-1}}$)

### Resistor

![[Resistor.svg]]

- The resistors could be simple resistors, or they could be lightbulbs, heating elements, or other resistive devices


#### Series Resistors
![[Series Resistors.svg|250]]

- When $n$ resistors are connected end to end along a single path they are said to be connected in **series**
	- $\displaystyle R_{\text{total}}=\sum_{i=1}^{n} R_i$ is the **total resistance** (or **equivalent resistance**) of the series
	- $\displaystyle V_i=V \frac{R_i}{R_{\text{total}}}=I R_i$ is the voltage across the $i$-th resistor
	- $\displaystyle I=\frac{V}{R_{\text{total}}}$ is the current through the circuit
	- $\displaystyle V=\sum_{i=1}^{n} V_i$ is the voltage across the voltage source, and it is equal to the sum of the voltage drops across each resistor
	- Any charge that passes through $R_1$ will pass through $R_2$ and so on, hence the same current flows through each resistor in series
	- When we add resistors in series: 
		- ($\displaystyle \lim_{n\to\infty} I=0$) The current $I$ in the circuit decreases (more resistors to pass through)
		- ($\displaystyle \lim_{n\to\infty} R_{\text{total}}=\infty$) The total resistance $R_{\text{total}}$ increases
	- The power dissipated by the $i$-th resistor is $\displaystyle P_i=V_i I=I^2 R_i$ 
		- When $R_i<R_j$ then $P_i<P_j$

#### Parallel Resistors
![[Parallel Resistors.svg]]

- We say that $n$ resistors are connected in **parallel** when the current from the source splits into $n$ paths
	- $\displaystyle I_i=\frac{V}{R_i}$ is the current through the $i$-th resistor
	- $\displaystyle I=\sum_{i=1}^{n} I_i=\frac{V}{R_{\text{total}}}$ is the total current through the circuit
	- $\displaystyle\frac{1}{R_{\text{total}}}=\frac{1}{R_1}+\frac{1}{R_2}+\ldots+\frac{1}{R_n}$
	- All resistors in parallel have the same voltage drop $V$ across them
	- When we add resistors in parallel: 
		- ($\displaystyle \lim_{n\to\infty} I=\infty$) The total current $I$ in the circuit increases (more paths for the current to flow)
		- ($\displaystyle \lim_{n\to\infty} R_{\text{total}}=0$) The total resistance $R_{\text{total}}$ decreases
	- The power dissipated by each resistor is $\displaystyle P_i=V I_i=\frac{V^2}{R_i}$
	    - When $R_i<R_j$ then $P_i>P_j$
	- The total power dissipated from the source is $\displaystyle P=V I=\sum_{i=1}^{n} P_i=\sum_{i=1}^{n} \frac{V^2}{R_i}$


>[!EXAMPLE]
> A parallel circuit with two resistors of $4\ \mathsf{\Omega}$ has a total resistance of $\frac{1}{R_{\text{eq}}}=\frac{1}{4}+\frac{1}{4}=\frac{1}{2}$, so $R_{\text{eq}}=2\ \mathsf{\Omega}$ 

>[!NOTE]
>The total power dissipated from a source is greater in a parallel circuit than in a series circuit with the same resistors and voltage source
 
## Electrical Impedance

todo

## Semiconductor

- #todo https://www.youtube.com/watch?v=33vbFFFn04k

 
# RC Circuits

- $\tau=RC$ (in $\mathsf{s}$) is the **time constant** (or **relaxation time**) of the RC circuit

#### Capacitor charging

- $q=Q_{\text{f}}(1-e^{-t/RC})$ is the charge on the capacitor in time $t$
	- $Q_{\text{f}}=C\mathcal{E}$  
- $i=I_{0}e^{-t/RC}$ is the current in time $t$
	- $I_0=\frac{\mathcal{E}}{R}$ 
- $v_C=\mathcal{E}(1-e^{-t/RC})$ is the voltage across the capacitor in time $t$
- $v_R=\mathcal{E}-v_C$ is the voltage across the resistor in time $t$

![[RC circuit - charging.svg]]

#### Capacitor discharging 

- $q=Q_{0}e^{-t/RC}$ is the charge on the capacitor in time $t$
	- $Q_0$ is the initial charge on the capacitor
- $i=I_{0}e^{-t/RC}$ is the current in time $t$
	- $I_0=\frac{Q_0}{RC}$
- $v_C=V_0 e^{-t/RC}$ is the voltage across the capacitor in time $t$
	- $V_0$ is the initial voltage across the capacitor
- $v_R=v_C$ is the voltage across the resistor in time $t$

