
- **dynamic equilibrium**
	- "The condition in which a forward process and its reverse are taking place simultaneously at equal rates." [@Jones, 2016]
	- "A state of balance in which opposing processes occur at the same rate" [@Brown, 2012]
	- No macroscopic change occurs, but microscopic changes do. This is in contrast to _static equilibrium_, in which no microscopic change occurs either. ([stackexchange](https://chemistry.stackexchange.com/questions/123950/what-is-the-difference-between-chemical-equilibrium-and-dynamic-equilibrium))
	- examples: 
		- [[vapor pressure]] in a closed container
		- $\ce{H2O(s) <=> H2O(l)}$ (at $0^\circ\mathrm{C}$ and $1\,\mathrm{atm}$)
- less common related terms:
	- _physical equilibrium_
		- "A state in which two or more phases of a substance coexist without a tendency to change." [@Jones, 2016]
	- _phase equilibrium_ 
# Chemical equilibrium

- **chemical equilibrium** (שיווי משקל כימי)
	- "A dynamic equilibrium between reactants and products in a chemical reaction" [@Jones, 2016]
- _equilibrium reaction_
	- "When the reactants in a chemical reaction are initially in a Boltzmann distribution the reaction is referred to as an equilibrium reaction." (IUPAC)
- **homogeneous equilibrium** (all reactants and products are in the same physical phase)
- **heterogeneous equilibrium**
- **equilibrium constant** ($K_{\text{eq}}$) (קבוע שיווי-משקל) (of a substance in a given temperature) 
	- dimensionless
	- **equilibrium-constant expression**
		- in terms of concentration:
			- $\displaystyle K_{c}=\frac{[\ce{C}]^c [\ce{D}]^d}{[\ce{A}]^a [\ce{B}]^b}$ 
		- in terms of partial pressure:
			- $K_{p} = \frac{(P_{\ce{C}})^{c} (P_{\ce{D}})^{d}}{(P_{\ce{A}})^{a} (P_{\ce{B}})^{b}}$
		- $K_{p} = K_{c}(RT)^{\Delta n}$
	- (see also [[Solutions#Dissociation|dissociation constant]])
	- **reaction quotient** ($Q$)
- equilibrium position
- #todo
	- In equilibrium expressions, pure solids and liquids are omitted because their activities are unity in their standard states. In rate law, their concentrations are not variable and are incorporated into $k$; however, the rate can depend on factors such as surface area in heterogeneous systems.
- **law of mass action** (חוק פעולת המסות)
- **reversible reaction**
	- $a\ce{A}+b\ce{B}\ce{<=>}c\ce{C}+d\ce{D}$
	- **forward reaction** ($\ce{->}$)
	- **reverse reaction** ($\ce{<-}$)

## examples

- **Haber process**

## Dissociation

- **dissociation** (דיסוציאציה, התפרדות, פירוד)
	- "The separation of an acid or a base into ions in water." [@Timberlake, 2017]
	- "The separation of ions that occurs when an ionic solid dissolves" [@Jones, 2016]
	- "a general process in which molecules (or ionic compounds such as salts, or complexes) separate or split into other things such as atoms, ions, or radicals, usually in a reversible manner" (Wikipedia)
	- **dissociation constant** $K_{d}$
		- for $\ce{AB <=> A + B}$: $K_d=\frac{[\ce{A}][\ce{B}]}{[\ce{AB}]}$
		- a type of [[Chemical equilibrium|equilibrium constant]]
	- #todo 
		- "Weak electrolytes _ionize_ to a limited extent, and strong electrolytes _dissociate or ionize_ almost completely into ions" [@Petrucci, 2016]
		- dissociation constant vs equilibrium constant

## Le Chatelier's principle

- **Le Chatelier's principle**
	- "If a system at equilibrium is disturbed by a change in temperature, pressure, or a component concentration, the system will shift its equilibrium position so as to counteract the effect of the disturbance" [@Brown, 2012]
	- interactive simulation: https://marblescience.com/blog/le-chateliers-principle
- $\ce{aA + bB <=> cC + dD}$
- $n_g^P$ (and $n_g^R$): total moles of gaseous products (and reactants)
- $\Delta n_g =  n_g^P-n_{g}^R$

| stress                                       | shift                            |
| -------------------------------------------- | -------------------------------- |
| $\uparrow[\ce{A}]$ (or $\downarrow[\ce{C}]$) | $\rightarrow$                    |
| $\downarrow[\ce{A}]$ (or $\uparrow[\ce{C}]$) | $\leftarrow$                     |
| $P\uparrow$ (or $V\downarrow$)               | $\min(n_g^R, n_g^P)$             |
| $P\downarrow$ (or $V\uparrow$)               | $\max(n_g^R, n_g^P)$             |
| $T\uparrow$ (exo)                            | $\leftarrow$ (and $K\downarrow$) |
| $T\uparrow$ (endo)                           | $\rightarrow$ (and $K\uparrow$)  |
| catalyst                                     | none                             |

- pressure/volume changes:
	- shift only if $\Delta n_g \neq 0$
	- inert gas addition:
		- at constant volume: no shift (partial pressures unchanged)
		- at constant pressure: volume increases; shifts toward the side with more gas moles
- concentration changes:
	- no shift for changes in the amount of a pure solid or pure liquid (as long as the phase remains present)
- catalyst: no shift; only speeds up attainment of equilibrium


