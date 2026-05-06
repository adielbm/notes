- **chemical kinetics** (or **reaction kinetics**)
- **collision theory**
- **reaction mechanism**

# Reaction rate

- **reaction rate** (or **rate of reaction**) (קצב תגובה, מהירות תגובה)
	- For $\ce{aA + bB -> pP + qQ}$
		- $a,b,p,q$ are the [[Reactions#Stoichiometry|stoichiometric coefficients]]
		- $\displaystyle v=-\frac{1}{a}\frac{d[\ce{A}]}{dt}=-\frac{1}{b}\frac{d[\ce{B}]}{dt}=\frac{1}{p}\frac{d[\ce{P}]}{dt}=\frac{1}{q}\frac{d[\ce{Q}]}{dt}$
	- symbols: $v$, $\nu$, $r$, $R$, $\text{Rate}$
	- units: $\text{M/s}$ (molarity per second)

- **rate equation** (or **rate law** or **empirical differential rate equation**)
- **reaction rate constant** (or **rate coefficient**) $k$
	- **Arrhenius equation**
## $\ce{aA -> products}$

- $v=k[\ce{A} ]^{n}$, where: 
	- $n$ is the **reaction order** (determined experimentally. It is not necessarily $n=a$ unless the reaction is elementary)

|                             | zero-order ($n = 0$)                | first-order ($n = 1$)                                | second-order ($n = 2$)                                              |
| :-------------------------- | :---------------------------------- | :--------------------------------------------------- | :------------------------------------------------------------------ |
| differential rate law       | $\text{Rate} = k$                   | $\text{Rate} = k[\text{A}]$                          | $\text{Rate} = k[\text{A}]^2$                                       |
| integrated rate law         | $[\text{A}]_t = -kt + [\text{A}]_0$ | $\ln[\text{A}]_t = -kt + \ln[\text{A}]_0$            | $\frac{1}{[\text{A}]_t} = kt + \frac{1}{[\text{A}]_0}$              |
| alternative integrated form | $[\text{A}]_0 - [\text{A}]_t = kt$  | $[\text{A}]_t = [\text{A}]_0 e^{-kt}$                | $\frac{[\text{A}]_0 - [\text{A}]_t}{[\text{A}]_0[\text{A}]_t} = kt$ |
| unit of $k$                 | $\text{M} \cdot \text{s}^{-1}$      | $\text{s}^{-1}$                                      | $\text{M}^{-1} \cdot \text{s}^{-1}$                                 |
| half-life ($t_{1/2}$)       | $t_{1/2} = \frac{[\text{A}]_0}{2k}$ | $t_{1/2} = \frac{\ln(2)}{k} \approx \frac{0.693}{k}$ | $t_{1/2} = \frac{1}{k[\text{A}]_0}$                                 |

## $\ce{aA + bB -> products}$

- $v=k[\ce{A}]^{m}[\ce{B} ]^{n}$ where:
	- $n$ and $m$ are the **partial orders**, and $m+n$ is the **overall order**
		- determined experimentally. It is not necessarily $n=b,m=a$ unless the reaction is elementary


---

- **activated complex** (קומפלקס משופעל, תצמיד משופעל)
	- **transition state** (מצב מעבר)
- **activation energy** ($E_a$) (אנרגיית שפעול) 
- **effective collision** (התנגשות פוריה)

- **catalysis** (זֵירוז, קִטלוז, קטליזה)
	- **catalyst** (זָרָז, קָטָלִיזָטוֹר)

# Chemical equilibrium

- **chemical equilibrium** (שיווי משקל כימי)
	- cf. **dynamic equilibrium**
- **equilibrium reaction**
	- "When the reactants in a chemical reaction are initially in a Boltzmann distribution the reaction is referred to as an equilibrium reaction." (IUPAC)
- **homogeneous equilibrium** (all reactants and products are in the same physical phase)
- **heterogeneous equilibrium**
- **equilibrium constant** ($K_{\text{eq}}$) (קבוע שיווי-משקל) (of a substance in a given temperature) 
	- dimensionless
	- **equilibrium-constant expression**
		- terms of concentration:
			- $\displaystyle K_{c}=\frac{[\ce{C}]^c [\ce{D}]^d}{[\ce{A}]^a [\ce{B}]^b}$ 
		- terms of partial pressure:
			- $K_{p} = \frac{(P_{\ce{C}})^{c} (P_{\ce{D}})^{d}}{(P_{\ce{A}})^{a} (P_{\ce{B}})^{b}}$
		- $K_{p} = K_{c}(RT)^{\Delta n}$
	- (see also [[Solutions|dissociation constant]])


- #todo
	- In equilibrium expressions, pure solids and liquids are omitted because their activities are unity in their standard states. In rate law, their concentrations are not variable and are incorporated into $k$; however, the rate can depend on factors such as surface area in heterogeneous systems.


- **law of mass action** (חוק פעולת המסות)

- equilibrium position
- **reaction quotient** ($Q$)
- **reversible process** (תהליך הפיך)
	- **irreversible process** (תהליך בלתי הפיך)
	- $\ce{<=>}$
- **reversible reaction**
	- $a\ce{A}+b\ce{B}\ce{<=>}c\ce{C}+d\ce{D}$
	- **forward reaction**
	- **reverse reaction**
- **Le Chatelier's principle**
	- "If a system at equilibrium is disturbed by a change in temperature, pressure, or a component concentration, the system will shift its equilibrium position so as to counteract the effect of the disturbance" [@Brown, 2012]
