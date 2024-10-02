

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
- $k$ is Coulomb's constant
- $\displaystyle E=\frac{F}{q}$ (vector form: $\displaystyle \vec{\mathbf{E}}=\frac{\vec{\mathbf{F}}}{q}$)
	- $E$ is the electric field that a charge $q$ experiences (in $\mathsf{N/C}$)
	- $F$ is the force on a charge (in $\mathsf{N}$)
	- $q$ is the test charge (in $\mathsf{C}$)

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

# Electric potential energy

- **Electric potential energy** is the energy stored in a system of charges due to their positions relative to each other
- $\vec{\mathbf{E}}$ is an uniform electric field, 
- $q$ is a tiny positive charge first placed at point $a$ near the positive plate and then released from rest and accelerates toward the negative plate. 
	- $W = Fd = qEd$ is the work done by the electric field $E$ to move a charge $q$ a distance $d$
	- $\Delta \mathrm{PE}=\mathrm{PE}_b-\mathrm{PE}_a=-W$ is the change in electric potential energy when a charge $q$ moves from point $a$ to point $b$

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

## Voltage

- **Voltage** (or **(electrical) potential difference**) is the difference in electric potential between two points in a circuit.
	- $\displaystyle V_{ab} = V_a - V_b = \frac{\mathrm{PE}_a-\mathrm{PE}_b}{q}$ is the **voltage** between points $a$ and $b$.
	- We often use ground (0 V) or infinity as a reference point.
	- Voltage is the energy required to move a unit charge from one point to another.
	- The SI unit of voltage is the **volt** (V), defined as $\mathsf{1\ V = 1\ J/C}$.
	- Given a point $a$ with a higher potential $V_a$ and a point $b$ with a lower potential $V_b$:
		- A **negative charge** placed at $b$ has higher potential energy than at $a$, so it will move from $b$ to $a$ (when released) and decrease its potential energy.
			- $\mathrm{PE}_a < \mathrm{PE}_b \implies \Delta \mathrm{PE} < 0$
		- A **positive charge** placed at $a$ has higher potential energy than at $b$, so it will move from $a$ to $b$ (when released) and decrease its potential energy.
			- $\mathrm{PE}_a > \mathrm{PE}_b \implies \Delta \mathrm{PE} > 0$
		- In both cases, $\Delta V = V_a - V_b > 0$.


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
- The SI unit of current is the **ampere** (A), which is defined as 1 C/s
- A current is **positive** if it flows from the positive terminal of a voltage source to the negative terminal






# Ohm's Law 

$$V=IR$$

```tikz
\usepackage{color,graphicx,circuitikz}
\begin{document}
\begin{circuitikz}[american]
\draw (0,0) to [V, l={$V$}, invert](0,2) to[short, >, i=$I$](2,2) to [R, l={$R$}](2,0) to (0,0);
\end{circuitikz}
\end{document}
```

# Kirchhoff's Laws

- Kirchhoff’s Current Law 
    - The sum of the currents flowing into any node is equal to the sum of the currents flowing out
- Kirchhoff’s Voltage Law
    - In one traversal of any closed loop, the sum of the voltage rises equals the sum of the voltage drops.
