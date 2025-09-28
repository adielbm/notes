# DRAFT

- A voltage source is a two-terminal device which can maintain a fixed voltage.
- An ideal voltage source 
	- It is a two-terminal device that maintains a fixed voltage drop across its terminals
	- maintain the fixed voltage independent of the load resistance or the output current. 
	- (open circuit) when it is loaded by an open circuit (i.e. an infinite impedance), it provides no energy
		- If you open circuit a voltage source, it sits there at its rated voltage and does nothing interesting.
	- (short circuit) when the load resistance approaches zero, it approaches infinite energy and current
		- If you short-circuit a voltage source, you get extremely large currents (and normally blow a fuse/trip a breaker, etc.)
	- have a zero ohm output impedance in series with the source. 
- Real-world voltage source: 
	- cannot supply unlimited current.
	- has a very low, but non-zero internal resistance and output impedance, often much less than 1 ohm.
	- Most sources of electrical energy (the mains, a battery) are modeled as voltage sources. 

- Current source: 
	- provides a constant current, as long as the load connected to the source terminals has sufficiently low impedance. 
	- provides, as closely as it can manage to the ideal, a constant (or only slightly varying) current at whatever voltage is needed (in real supplies, to the limit of the voltage it can supply.)
	- If you short-circuit a current source, you get the rated current at extremely low voltage, and nothing exciting happens.
	- If you open circuit a current source, it shoots to its maximum voltage. If it was an ideal current source, it would drive itself to enough kilovolts to form an arc and get the rated current flowing in plasma. We don't really want ideal current sources in most situations for that reason.
- An ideal current source
	- would provide no energy to a short circuit and approach infinite energy and voltage as the load resistance approaches infinity (an open circuit). 
	- has an infinite output impedance in parallel with the source. 
- A real-world current source 
	- has a very high, but finite output impedance. 
	- In the case of transistor current sources, impedance of a few megohms (at low frequencies) is typical.

- Since no ideal sources of either variety exist (all real-world examples have finite and non-zero source impedance), any current source can be considered as a voltage source with the same source impedance and vice versa


- sources
    - An **ideal independent source** is an active element that provides a specified voltage or current that is completely independent of other circuit elements

# Voltage Source

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
> ```tex
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



