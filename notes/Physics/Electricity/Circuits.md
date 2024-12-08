# Electrical Circuits

- elements of an electric circuit:
    - A **branch** represents a single two-terminal element (such as a voltage source or a resistor)
    - A **node** (or **junction**) is the point of connection between two or more branches
        - Nodes that are connected by perfectly conducting wires are considered to be the same node
- classification of elements:
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


- A **short circuit** is a circuit element with resistance approaching zero, so $\displaystyle I=\lim_{R\to 0}\frac{V}{R}=\infty$
- An **open circuit** is a circuit element with resistance approaching infinity, so $\displaystyle I=\lim_{R\to \infty}\frac{V}{R}=0$

- #todo
    - Components of an electrical circuit
        - Voltage source
            - Terminals:
                - Positive voltage terminal (higher voltage)
                - Negative voltage terminal (lower voltage)
    - Passive sign convention (PSC)
        - electric power is positive if it flows out of the circuit into an electrical component
        - electric power negative if it flows into the circuit out of a component
        - Passive components (loads) will have positive power dissipation ($p>0$) and positive resistance ($r>0$)
        - Active components (sources) will have negative power dissipation ($p<0$) and negative resistance ($r<0$)
        - The **conventional current** variable $i$:
            - If $i$ is defined such that positive current enters the device through the positive voltage terminal:
                - $p=vi$ and $r=\frac{v}{i}$
            - If $i$ is defined such that positive current enters the device through the negative voltage terminal:
                - $p=-vi$ and $r=-\frac{v}{i}$


```
\usepackage{color,graphicx,circuitikz}
\begin{document}
\begin{circuitikz}[american]
\draw (0,0) to [V, l={$v$}](2,0) to[short, =>, i=$i$](3,0);
\end{circuitikz}
\end{document}
```

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

```tex
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}[american, thick]
\draw (0,0) to [V, l={$V$}, invert](0,2) to[short, >, i=$I$](2,2) to [R, l={$R$}](2,0) to (0,0);
\end{circuitikz}
\end{document}
```

- the electric current through a conductor between two points is directly proportional to the voltage across the two points
	- Ohm's Law holds for **ohmic materials** (like most metals) but not for **non-ohmic materials** (like diodes, transistors, and other semiconductors)
	- The unit of resistance is the $\mathsf{ohm}$ ($\mathsf{\Omega}$) defined as $\mathsf{1\ \Omega = 1\ V/A}$
	- The reciprocal of resistance is called the **electrical conductance** (in $\mathsf{S}$, siemens, which is $\mathsf{1\ S = 1 \Omega^{-1}}$)
	- $\displaystyle V=IR$
		- $V$ is the voltage (in $\mathsf{V}$)
		- $I$ is the current (in $\mathsf{A}$)
		- $R$ is the resistance (in $\mathsf{\Omega}$)
- Electrical **resistivity** (or **specific resistance**) denoted by $\rho$, is a measure of how strongly a material opposes the flow of electric current
	- $\displaystyle R=\rho\frac{L}{A}$
		- $R$ is the resistance of the conductor (in $\mathsf{\Omega}$)
		- $\rho$ is the resistivity of the material (in $\mathsf{\Omega\cdot m}$)
		- $L$ is the length of the conductor (in $\mathsf{m}$)
		- $A$ is the cross-sectional area of the conductor (in $\mathsf{m^2}$)
	- The reciprocal of the resistivity, called the **electrical conductivity** (or **specific conductance**) is $\sigma=\frac{1}{\rho}$ (in $\mathsf{S/m}$, siemens per meter, or $\mathsf{(\Omega\cdot m)^{-1}}$)

### Resistor

```tex
\usepackage{color,graphicx,circuitikz}
\begin{document}
\begin{circuitikz}[american, thick]
\draw (0,0) to [R, l={$R$}](2,0);
\end{circuitikz}
\end{document}
```



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

```tex
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}[american, thick]
	\draw (-1,0) -- (2,0) to (-1,0) to [battery1, l_={$V$}] (-1,-2) -- (2,-2);
	\draw (0,0) to [R, l={$R_1$}, i={$I_1$}](0,-2);
	\draw (1,0) to [R, l={$R_2$}, i={$I_2$}](1,-2);
	\draw (2,0) to [R, l={$R_3$}, i={$I_3$}](2,-2);
	\draw (-1,0) to [short, i={$I$}] (0,0);
\end{circuitikz}
\end{document}
```

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

# Capacitance

```tex
\usepackage{color,graphicx,circuitikz}
\begin{document}
\begin{circuitikz}[american, thick]
\draw (0,0) to [C, l={$C$}](2,0);
\end{circuitikz}
\end{document}
```

- A **capacitor** is a device that can store electric charge, and normally consists of two condaucting objects (usually plates or sheets) placed near each other but not touching
	- The capacitor was originally known as the **condenser**
	- $Q=CV$ is the relationship between charge, capacitance, and voltage
		- $Q$ is the charge stored on the capacitor (in $\mathsf{C}$)
		- $C$ is the capacitance of the capacitor (in $\mathsf{F}$, farads)
		- $V$ is the voltage across the capacitor (in $\mathsf{V}$)
	- $C=\epsilon_0 \frac{A}{d}$ is the capacitance of a parallel-plate capacitor
		- $C$ is the capacitance (in $\mathsf{F}$)
		- $\epsilon_0$ is the **permittivity of free space** (or **vacuum permittivity**) that is $8.85\times 10^{-12}\ \mathsf{F/m}$
		- $A$ is the area of the plates (in $\mathsf{m^2}$)
		- $d$ is the separation between the plates (in $\mathsf{m}$)

- The **total** (or **equivalent**) capacitance of capacitors connected:
	- (series) $\displaystyle\frac{1}{C_{\text{total}}}=\frac{1}{C_1}+\frac{1}{C_2}+\ldots+\frac{1}{C_n}$
	- (parallel) $C_{\text{total}}=C_1+C_2+\ldots+C_n$

# RC Circuits

- $V_C=V_0(1-e^{-t/RC})$ is the voltage across the capacitor in time $t$ in an RC circuit
	- $V_0$ is the initial voltage across the capacitor (in $\mathsf{V}$)
	- $V_C$ is the voltage across the capacitor at time $t$ (in $\mathsf{V}$)
	- $R$ is the resistance in the circuit (in $\mathsf{\Omega}$)
	- $C$ is the capacitance of the capacitor (in $\mathsf{F}$)
	- $t$ is the time (in $\mathsf{s}$)
	- $e$ is the base of the natural logarithm
	- $\tau=RC$ is the time constant of the circuit (in $\mathsf{s}$)
- $V_R=V_0-V_C$ is the voltage across the resistor in time $t$ in an RC circuit
- $Q=Q_0(1-e^{-t/RC})$ is the charge on the capacitor in time $t$ in an RC circuit
	- $Q_0$ is the initial charge on the capacitor (in $\mathsf{C}$)
- $I=\frac{V_R}{R}=\frac{V_0}{R}e^{-t/RC}$ is the current in the circuit in time $t$ in an RC circuit

# Ground

- ground fault
- ground wire
- Leakage
- ground and neutral
- Fuse
- GFCI (Ground Fault Circuit Interrupter)
- Circuit breaker
- grounding system
- grounding rod
- leakage current
- hot, neutral, and ground wires
- Grounding is the action of electrically connecting something to a Grounding Electrode, which is a conductive object used to create a direct connection to ground--typically a Ground Rod