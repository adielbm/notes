

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


> [!NOTE]
> Symbols for independent voltage sources: (A) used for constant or time-varying voltage, (B) used for constant voltage (DC).
> 
> ```tikz
> \usepackage{color,graphicx,circuitikz}
> \begin{document}
> \begin{circuitikz}[american, voltage dir=RP]
> % First circuit (A)
> \draw (0.5,-1) node[above] {(A)};
> \draw (0,2.5) to [short, -o] (1,2.5);
> \draw (0,0) to [V, -, v={$v$}](0,2.5);
> \draw (0,0) to [short, -o] (1,0);
> % Second circuit (B), shifted to the right by 3.5 units
> \begin{scope}[shift={(3.5,0)}]
> \draw (0.5,-1) node[above] {(B)};
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
    - Components of an electrical circuit
        - Voltage source
            - Terminals:
                - Positive voltage terminal (higher voltage)
                - Negative voltage terminal (lower voltage)
    - Passive sign convention (PSC)
        - electric power is **positive** if it flows out of the circuit into an electrical component
        - electric power **negative** if it flows into the circuit out of a component
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


# Electric energy

- Electric energy is the capacity to do work
- $E=\int _{t_0} ^t Pdt=\int _{t_0} ^t VI dt$
    - $E$ is electrical energy (in joules) absorbed or supplied by an element from time $t_0$ to time $t$
    - $P$ is power (in watts)
    - $V$ is voltage (in volts)
    - $I$ is current (in amperes)
    



# Electric power

- Electric power is the rate of transfer of electrical energy within a circuit
- $P=\frac{dE}{dt}=\frac{dE}{dq}\frac{dq}{dt}=VI$
    - $E$ is electrical energy (in joules)
    - $t$ is time (in seconds)
    - $P$ is power (in watts)
    - $V$ is voltage (in volts)
    - $I$ is current (in amperes)
    - $q$ is charge (in coulombs)
    
# Electric charge

- Electric charge exists in discrete quantities, which are integer multiples of the **elementary charge** $e=1.6\times 10^{-19}$ C
    - The charge of an electron is $-e$ and the charge of a proton is $+e$
    - The SI unit of charge is the **coulomb** (C)

# Electric current

- Electric current is the flow of electric charge
- The SI unit of current is the **ampere** (A), which is defined as 1 C/s
- A current is **positive** if it flows from the positive terminal of a voltage source to the negative terminal


# Voltage

- **Voltage** is the difference in electric potential between two points in a circuit
- Voltage is the energy required to move a unit charge through an element
- The SI unit of voltage is the **volt** (V), which is defined as 1 J/C



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






