
# Electric power

- Electric power is the rate of transfer of electrical energy within a circuit
- $P=\frac{dE}{dt}=\frac{dE}{dq}\frac{dq}{dt}=VI$
    - $E$ is electrical energy (in joules)
    - $t$ is time (in seconds)
    - $P$ is power (in watts)
    - $V$ is voltage (in volts)
    - $I$ is current (in amperes)
    - $q$ is charge (in coulombs)
- $P=I^2R=\frac{V^2}{R}$
	- $P$ is the power dissipated by the resistor (in $\mathsf{W}$)
	- $R$ is the resistance of the resistor (in $\mathsf{\Omega}$)
	- $I$ is the current through the resistor (in $\mathsf{A}$)

# Passive sign convention

 #todo

- Components of an electrical circuit
	- Voltage source
		- Terminals:
			- Positive voltage terminal (higher voltage)
			- Negative voltage terminal (lower voltage)
- Passive sign convention (PSC)
	- electric power is positive if it flows out of the circuit into an electrical component
	- electric power is negative if it flows into the circuit out of a component
	- Passive components (loads) will have positive power dissipation ($P>0$) and positive resistance ($r>0$)
	- Active components (sources) will have negative power dissipation ($P<0$) and negative resistance ($r<0$)
	- The **conventional current** variable $I$:
		- If $i$ is defined such that positive current enters the device through the positive voltage terminal:
			- $P=VI$ and $R=\frac{V}{I}$
		- If $i$ is defined such that positive current enters the device through the negative voltage terminal:
			- $P=-VI$ and $R=-\frac{V}{I}$


```
\usepackage{color,graphicx,circuitikz}
\begin{document}
\begin{circuitikz}[american]
\draw (0,0) to [V, l={$v$}](2,0) to[short, =>, i=$i$](3,0);
\end{circuitikz}
\end{document}
```
