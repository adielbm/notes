# Electric charge

- Electric charge is **quantized**, that is, exists in discrete quantities which are integer multiples of the **elementary charge** $e=1.6022\times 10 ^{-19}\,\mathsf{C}\approx 1.6\times 10^{-19}\,\mathsf{C}$
	- The charge of an electron is $-e$ and the charge of a proton is $+e$
	- The SI unit of charge is the **coulomb** (C)
- **Conservation of charge**: the total charge in an isolated system remains constant
- An object can become charged by:
	- rubbing (friction)
	- conduction (transfer of charge from one charged object to another by touching)
	- induction


## Coulomb's Law

```tex
\documentclass[varwidth]{standalone}
\usepackage{xcolor,tikz,amsmath}
\newcommand*\circled[2]{\tikz[baseline=(char.base)]{\node[shape=circle,draw,fill=#1,inner sep=2pt] (char) {#2};}}
\begin{document}
$\underset{q_1}{\circled{red!40}{$\pm$}}$ 
$\underset{\vec{\mathbf{F}}_{12}}{\longrightarrow}$ 
$\underset{\vec{\mathbf{F}}_{21}}{\longleftarrow}$ 
$\underset{q_2}{\circled{blue!40}{$\mp$}}$
\\
$\underset{\vec{\mathbf{F}}_{12}}{\longleftarrow}$
$\underset{q_1}{\circled{red!40}{$\pm$}}$
$\underset{q_2}{\circled{red!40}{$\pm$}}$ 
$\underset{\vec{\mathbf{F}}_{21}}{\longrightarrow}$
\end{document}
```

- $\displaystyle F=k\frac{q_1q_2}{r^2}$ is the **electrostatic force** (or **Coulomb force**) between two charges (in $\mathsf{N}$)
	- $q_1$ and $q_2$ are the magnitudes of the charges (in $\mathsf{C}$)
	- $r$ is the distance between the charges (in $\mathsf{m}$)
	- $\displaystyle k=\frac{1}{4\pi\epsilon_{0}}=8.99\times 10^9\ \mathsf{N\cdot m^2/C^2}$ is **Coulomb's constant**
	- $\epsilon_{0}=\frac{1}{4\pi k}=8.85\times 10^{-12}\ \mathsf{C^2/N\cdot m^2}$ is the **permittivity of free space**

- limitations and assumptions of Coulomb's Law #todo
	- point charges
	- objects are at rest (electrostatics force)
	- electric force




## Electric field

- The **electric field** of is defined as a vector field that associates to each point in space the force per unit of charge exerted on an infinitesimal test charge at rest at that point
- SI unit of electric field is $\mathsf{N/C}=\mathsf{V/m}$
- $k$ is Coulomb's constant
- $\displaystyle E=\frac{F}{q}$ (vector form: $\displaystyle \vec{\mathbf{E}}=\frac{\vec{\mathbf{F}}}{q}$)
	- $E$ is the electric field that a charge $q$ experiences (in $\mathsf{N/C}$)
	- $F$ is the force on a charge (in $\mathsf{N}$)
	- $q$ is the test charge (in $\mathsf{C}$)
- $E=-\frac{V_{ba}}{d}$ is the electric field (uniform $\vec{\mathbf{E}}$)
	- $V_{ba}$ is the potential difference between points $a$ and $b$ (in $\mathsf{V}$)
	- $d$ is the distance between the points (in $\mathsf{m}$)

### Electric field of a single point charge

- $\displaystyle E =k\frac{Q}{r^2}$ (vector form: $\displaystyle \vec{\mathbf{E}}=k\frac{Q}{r^2}\hat{\mathbf{r}}$)
	- $P$ is the point in space where the electric field is being calculated
	- $Q$ is the point charge creating the electric field (in $\mathsf{C}$)
	- $E$ is the electric field created by a point charge $Q$ (in $\mathsf{N/C}$)
	- $r$ is the distance between the charge and the point in space (in $\mathsf{m}$)
	- $\hat{\mathbf{r}}$ is the unit vector pointing from the charge to the point in space



```tex
\documentclass{standalone}
\usepackage{tikz}
\usetikzlibrary{arrows.meta}
\definecolor{_red}{HTML}{D63146}
\definecolor{_pink}{HTML}{ef3875}
\definecolor{_green}{HTML}{5dc3ad}
\newcommand{\customarrow}[5]{
	\draw[ultra thick, arrows = {-Stealth[reversed, reversed]}, color=#4] (#1,#2) -- (#3,#2) node[midway, below] {#5};
}
\begin{document}
\begin{tikzpicture}
\customarrow{0}{0}{1}{_red}{$\vec{\mathbf{E}}$}
\draw[fill] (0,0) circle [radius=0.08] node[above] {$P$};
\draw[fill=_green, draw=none] (2,0) circle [radius=0.2] node[right, xshift=0.2cm] {$Q$};
\node at (2, 0) {$-$};
\node at (4, 0) {$\mathsf{negative\ charge}$};
\draw[|-|] (0,0.7) -- (2,0.7) node[midway, below] {$r$};
\customarrow{0}{-1}{-1}{_red}{$\vec{\mathbf{E}}$}
\draw[fill] (0,-1) circle [radius=0.08] node[above] {$P$};
\draw[fill=_pink, draw=none] (2,-1) circle [radius=0.2] node[right, xshift=0.2cm] {$Q$};
\node at (2, -1) {$+$};
\node at (4, -1) {$\mathsf{positive\ charge}$};
\end{tikzpicture}
\end{document}
```

> There is no electric charge at point $P$. But there is an electric field there. The only real charge is $Q$.

### Superposition principle

- the total force on a charge is the vector sum of the forces exerted by the other charges

### todo

- electric field lines
- electric dipole
- static electric field
- equipotential surfaces, equipotential lines


# Electric potential energy

- **Electric potential energy** is the energy stored in a system of charges due to their positions relative to each other
- $\vec{\mathbf{E}}$ is an uniform electric field, 
- $q$ is a tiny positive charge first placed at point $a$ near the positive plate and then released from rest and accelerates toward the negative plate. 
	- $W = Fd = qEd$ is the work done by the electric field $E$ to move a charge $q$ a distance $d$
	- $\Delta \mathrm{PE}=\mathrm{PE}_b-\mathrm{PE}_a=-W$ is the change in electric potential energy when a charge $q$ moves from point $a$ to point $b$
- $W_{\text{ext}}=Q_2 V=k\frac{Q_1Q_2}{r}$ is the work done by an external force to move a charge $Q_2$ from infinity to a distance $r$ from a charge $Q_1$
	- $W_{\text{ext}}$ is the work done by an external force (in $\mathsf{J}$)
	- $Q_1$ is the charge creating the electric field (in $\mathsf{C}$)
	- $Q_2$ is the charge being moved (in $\mathsf{C}$)
	- $r$ is the distance between the charges (in $\mathsf{m}$)

## Electric energy

- Electric energy is the capacity to do work
- $\displaystyle E=\int _{t_0} ^t Pdt=\int _{t_0} ^t VI dt$
    - $E$ is electrical energy (in joules) absorbed or supplied by an element from time $t_0$ to time $t$
    - $P$ is power (in watts)
    - $V$ is voltage (in volts)
    - $I$ is current (in amperes)


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

## Voltage

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

# Electric power

- Electric power is the rate of transfer of electrical energy within a circuit
- $P=\frac{dE}{dt}=\frac{dE}{dq}\frac{dq}{dt}=VI$
    - $E$ is electrical energy (in joules)
    - $t$ is time (in seconds)
    - $P$ is power (in watts)
    - $V$ is voltage (in volts)
    - $I$ is current (in amperes)
    - $q$ is charge (in coulombs)


# Electric current

- Electric current is the flow of electric charge
- $\displaystyle I=\frac{dq}{dt}$
	- $I$ is the **electric current** of the circuit (in $\mathsf{A}$)
	- $q$ is the electric charge has passed through some surface in the circuit up to time $t$ (in $\mathsf{C}$)
	- $t$ is interval during which the charge flows (in $\mathsf{s}$)
- The SI unit of current is the **ampere** (abbreviated $\mathsf{amp}$ or $\mathsf{A}$), defined as $\mathsf{1\ A = 1\ C/s}$
- A current is **positive** if it flows from the positive terminal of a voltage source to the negative terminal





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





# Kirchhoff's Laws

### Kirchhoff’s Current Law 

- The sum of the currents flowing into any node is equal to the sum of the currents flowing out

### Kirchhoff’s Voltage Law

- The **voltage drop** is the decrease in electric potential along the path of a current flowing in a circuit
- In one traversal of any closed loop, the sum of the voltage rises equals the sum of the voltage drops.

- given a circuit with a voltage source $V$ and resistors $R_1, R_2, \ldots, R_n$:
	- $I=\frac{V}{\sum R_i}$ is the current through the circuit
	- $V_0, V_1, V_2, \ldots, V_n$
	- $I\cdot R_i$ is the voltage drop across the $i$-th resistor
	- $V_i$ is equal to $V_{i-1}$ minus the voltage drop across $R_i$
		- $V_0=V$
		- $V_n=0$


# Electrical Circuits

- elements of an electric circuit:
    - A **branch** represents a single two-terminal element (such as a voltage source or a resistor)
    - A **node** is the point of connection between two or more branches
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

- sources
    - An **ideal independent source** is an active element that provides a specified voltage or current that is completely independent of other circuit elements




- A **short circuit** is a circuit element with resistance approaching zero, so $\displaystyle I=\lim_{R\to 0}\frac{V}{R}=\infty$
- An **open circuit** is a circuit element with resistance approaching infinity, so $\displaystyle I=\lim_{R\to \infty}\frac{V}{R}=0$



- #todo 
	- **electric current** (aka: **conventional current**) is a flow of electric charge
		- electric current from $+$ to $-$ is equivalent to a negative electron flow from $-$ to $+$
		- conventional current combines the effects of electron, ion, proton, and hole flows all into one number.
		- conventional current is not the opposite of electron current
		- Electron current is a subset of conventional current. 
	- A 19th-century convention, still in use, treats any electric current as a flow of positive charge from a region of positive potential to one of negative potential.
		- The real motion, however, in the case of electrons flowing through a metal conductor, is in the opposite direction, from negative to positive.

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

```todo
\usepackage{color,graphicx,circuitikz}
\begin{document}
\begin{circuitikz}[american]
\draw (0,0) to [V, l={$v$}](2,0) to[short, =>, i=$i$](3,0);
\end{circuitikz}
\end{document}
```


## Light-emitting diode

- A **light-emitting diode** (LED) is a semiconductor device that emits light when an electric current passes through it

```tex
\usepackage{color,graphicx,circuitikz}
\begin{document}
\begin{circuitikz}[american, thick]
\draw (0,0) to [leDo, l={$$}](2,0);	
\end{circuitikz}
\end{document}
```


## Capacitance

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



## Voltage Source

```tex
\usepackage{color,graphicx,circuitikz}
\begin{document}
\begin{circuitikz}[american, thick]
\draw (0,0) to [V, l={$V$}](2,0);
\end{circuitikz}
\end{document}
```



> [!NOTE] Notation
> Symbols for independent voltage sources
> 
> ```tikz
> \usepackage{color,graphicx,circuitikz}
> \begin{document}
> \begin{circuitikz}[american, voltage dir=RP]
> % First circuit (A)
> \draw (0.5,-1) node[above] {\textsf{constant/time-varying voltage}};
> \draw (0,2.5) to [short, -o] (1,2.5);
> \draw (0,0) to [V, -, v={$v$}](0,2.5);
> \draw (0,0) to [short, -o] (1,0);
> % Second circuit (B), shifted to the right by 5 units
> \begin{scope}[shift={(5,0)}]
> \draw (0.5,-1) node[above] {\textsf{constant voltage (DC)}};
> \draw (0,2.5) to [short, -o] (1,2.5);
> \draw (0,0) to [battery1, -, v={$V$}](0,2.5);
> \draw (0,0) to [short, -o] (1,0);
> \end{scope}
> \end{circuitikz}
> \end{document}
> ```
> 


```tex
\usepackage{color,graphicx,circuitikz}
\begin{document}
\begin{circuitikz}[american, voltage dir=RP]
\draw (0,0) to [V, l={$9\ \mathsf{V}$}](0,2) to[short](2,2) to [R, l={$10\ \mathsf{k\Omega}$}](2,0) to (0,0);
\end{circuitikz}
\end{document}
```

or shoter version

```tex
\usepackage{color,graphicx,circuitikz}
\begin{document}
\begin{circuitikz}[american]
\draw (0,0) to [short, o-, l={$9\ \mathsf{V}$}](0,-1) to[R, l={$10\ \mathsf{k\Omega}$}](0,-2) to[short](0,-2.5) node[ground] {};
\end{circuitikz}
\end{document}
```


## Ground

```tex
\usepackage{color,graphicx,circuitikz}
\begin{document}
\begin{circuitikz}[american]
\draw (0,0) node[ground] {};
\end{circuitikz}
\end{document}
```


## Electric Battery

```tex
\usepackage{color,graphicx,circuitikz}
\begin{document}
\begin{circuitikz}[american]

% battery symbol `battery1`
%\draw (2,0) to [battery1, l={$\mathsf{}$}] (3,0);

% `battery1`, polarity marks below, without text
\draw (0,0) to [battery1, l={$\mathsf{}$}, v_=$\;$] (1,0);

\end{circuitikz}
\end{document}
```

- A **Galvanic cell** (or **voltaic cell**) is an electrochemical cell that converts chemical energy into electrical energy, consisting of:
	- two **electrodes**: conductors through which electric current enters or leaves the cell
		- **anode** ($-$): the electrode where oxidation occurs (loses electrons)
		- **cathode** ($+$): the electrode where reduction occurs (gains electrons)
		- the part of each electrode outside the solution is called the **terminal** which is used to connect the cell to a circuit
	- An **electrolyte** is a substance that conducts electricity by allowing ions to move and can exist either as a liquid (**wet cell**) or a paste (**dry cell**)
- A **battery** is a collection of electric cells connected together
- The total voltage of a **series** (connected end-to-end positive to negative) connection is the sum of the voltages of the individual cells




> [!EXAMPLE] Example: Bunsen cell (zinc-carbon & dilute sulfuric acid)
> - *Electrodes*:
>   - *Zinc anode*: Zinc metal dissolves into the electrolyte as zinc ions ($\ce{Zn^{2+}}$), leaving behind electrons on the zinc electrode, which becomes negatively charged.
>   - *Carbon cathode*: The sulfuric acid electrolyte pulls electrons from the carbon electrode, making it positively charged.
> - *Electrolyte*: The *dilute sulfuric acid* ($\ce{H2SO4}$) serves as the electrolyte, allowing ions (e.g., $\ce{Zn^{2+}}$) to move between the electrodes while completing the internal charge balance.
> - *Chemical Reaction*:
>   - At the *zinc anode*: Zinc undergoes oxidation ($\ce{Zn -> Zn^{2+} + 2e^-}$), releasing electrons into the electrode and producing zinc ions.
>   - At the *carbon cathode*: Electrons flow from the zinc anode to the carbon cathode through an external circuit, where reduction reactions can take place.
> - Voltage: The zinc electrode becomes negatively charged, and the carbon electrode becomes positively charged, creating a potential difference (voltage) between the two terminals.
> - Current: 
>   - (closed circuit) Electrons flow through the external circuit from the zinc anode to the carbon cathode, creating an electric current.
>  	- (open circuit) When the terminals are not connected, only a small amount of the zinc is dissolved, 

- #todo 
	- terms 
		- dry cell
		- half-cell
		- salt bridge
		- standard electrode potential
		- volatge regulator
		- State of charge (SoC)
		- State of health (SoH)
		- battery management system (BMS)
	- why does electric cars typically have only one gear?




# Digital electronics

- transistor
	- A **transistor** is a semiconductor device that can amplify or switch current
		- **BJT** (bipolar junction transistor)
			- The **base** is the control terminal
			- The **collector** is the high-voltage terminal
			- The **emitter** is the low-voltage terminal
			- Type of BJT:
				- **NPN** (negative-positive-negative)
				- **PNP** (positive-negative-positive)
		- **FET** (field-effect transistor) 
- a [[logic gate]] is a device that implements a logic function


##### Figure: An NPN transistor as a switch

#todo

```tex
\usepackage{color,graphicx,circuitikz}
\begin{document}
\begin{circuitikz}[american, scale=0.7, every node/.style={transform shape}]
\draw (0,0) node[npn](npn){};
\draw (npn.B) to[R, -o] ++(-2,0) node[left] {$V_{\mathrm{in}}$};
\draw (npn.C) to[short, -o] ++(0,0) node[above] {$V_{\mathrm{cc}}$};
\draw (npn.E) to[R, -] ++(0,-2) node[ground] {};
\draw (npn.E) to[short, -o] ++(0.5,0) node[right] {$V_{\mathrm{out}}$};
\end{circuitikz}	
\end{document}
```



## Digital signal processing

- The difference between the original continuous analog signal and its digital approximation is called the **quantization error**
- The **resolution** (or **bit depth**) is the number of bits or values for the voltage of each sample (=measurement)
- The **sampling rate** is the number times per second the original analog voltage is measured ("sampled")
- **ADC** (analog-to-digital converter) is a device that converts a continuous analog signal to a discrete digital signal
- **DAC** (digital-to-analog converter) is a device that converts a digital signal to an analog signal
- bandwidth, Spectral band, frequency band #todo
