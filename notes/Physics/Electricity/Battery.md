# Electric Battery

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
- The total voltage of a **series** (connected end-to-end positive to negative) connection is the sum of the voltages of the individual cells $V_{\text{total}}=V_1+V_2+\ldots+V_n$
- The total voltage of an opposite series connection




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


