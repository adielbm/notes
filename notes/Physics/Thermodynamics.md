
- **thermodynamics**
- [[Thermochemistry|chemical thermodynamics]]
- [[Thermochemistry|thermochemistry]]

# Sign conventions

- sign conventions of work $W$:
	- Clausius convention: the work done _by_ the system
		- usually used in physics 
		- (used here unless otherwise stated)
	- IUPAC convention: the work done _on_ the system
		- usually used in chemistry 
# Laws of thermodynamics

- **zeroth law of thermodynamics**
- **first law of thermodynamics** 
	- $\Delta U = Q - W$ is the change in internal energy of the system, where:
		- $Q$ is the heat added to the system
		- $W$ is the work done by the system
	- (or equivalently $\Delta U = Q + W$, where $W$ is the work done on the system (IUPAC convention))
	- for isochoric process: $\Delta U = q_v$
- **second law of thermodynamics**
	- _Clausius statement_:
		- "Heat can never pass from a colder to a warmer body without some other change, connected therewith, occurring at the same time" (Wikipedia)
		- "no device is possible whose sole effect is to transfer heat from one system at a temperature $T_\text{L}$ into a second system at a higher temperature $T_\text{H}$" [@Giancoli, 2015]
	- _Kelvin-Planck statement_: (see: https://en.wikipedia.org/wiki/Second_law_of_thermodynamics#Relation_between_Kelvin's_statement_and_Planck's_proposition)
		- "no device is possible whose sole effect is to transform a given amount of heat completely into work" [@Giancoli, 2015] 
- **third law of thermodynamics**

# Thermodynamic system

![249](https://upload.wikimedia.org/wikipedia/commons/4/44/Diagram_Systems_Text.svg)

- **thermodynamic system** (or **system**)
	- closed system
	- open system
	- isolated system
- **surroundings**
- **thermodynamic equilibrium**
- **thermodynamic state** (of a system)

- **equation of state**
	- $f(p,V,T)=0$
	- e.g., [[Gases#Ideal gas law|ideal gas law]]
- **state function** (פונקציית מצב)
	- examples: 
		- internal energy ($U$)
		- enthalpy ($H$)
		- entropy ($S$)
		- pressure ($P$)
			- $P = f(V, T, n) = \frac{nRT}{V}$
		- temperature ($T$)
	- (The [[differential]] $dX$ (of a state function) is an **exact differential**)
		- exact differential describes a change in a state function
		- $\oint dX = 0$
		- #todo https://youtu.be/FnoAK3Le0pw?list=PLYHaXvNA5JrcVn8pDXD9gkPgq4Ay83cRh
- **path function** (or **process function**)
	- examples: 
		- [[#heat]] $Q$
		- work $W$
	- **inexact differential** (a differential whose integral depends on the path taken between two points)
		- (e.g. $\delta W$ and $\delta Q$)



# Thermodynamic processes

- **thermodynamic processes**
- **isobaric** (אִיזוֹבָּרִי, אחיד-לחץ, קבוע-לחץ)
	- $\Delta P=0$
- **isochoric** (or **isovolumetric**) (אִיזוֹכוֹרִי, אחיד-נפח, קבוע-נפח)
	- $\Delta V=0$
- **isothermal** (איזותרמי, אחיד-טמפרטורה, קבוע-טמפרטורה)
	- $\Delta T=0$
- **adiabatic** (אַדְיַאבָּטִי)
	- $Q=0$
- **isentropic** (אִיזֶנְטְרוֹפִּי, אחיד-אנטרופיה, קבוע-אנטרופיה)
- **isenthalpic** (אִיזֶנְתַּלְפִּי, אחיד-אנתלפייה, קבוע-אנתלפייה)
- quasistatic
- polytropic
- **free expansion**
	- **Joule expansion**
- **quasi-static process** (or **quasi-equilibrium process**)

- **reversible** (הפיך)
	- 
- **irreversible** (לא-הפיך)


- endoreversibility


---

- **exothermic process** and **endothermic process**
	- [[Thermochemistry|exothermic and endothermic reaction]]
- **spontaneous** process
	- (thermodynamically favorable)
- **nonspontaneous** process
	- (thermodynamically unfavorable)
- [[Thermochemistry|spontaneous and nonspontaneous reaction]]
- **pressure–volume diagram** (or **PV diagram**)


# Work

- **thermodynamic work** 
	- #todo https://physics.stackexchange.com/questions/598304/what-does-work-in-thermodynamics-mean-versus-in-other-parts-of-physics
	- **pressure-volume work** (**PV work**)
		- $\delta W=PdV$
		- $W = \int P\,dV$
		- $W = P\Delta V$
			- If the gas expands ($\Delta V > 0$) work $W$ is positive. If the gas is compressed ($\Delta V < 0$), work $W$ is negative.
		- $P$ is the external pressure (constant)
		- (notice to [[#sign conventions]])
	- $W = \int V I \, dt$

# Heat

- **heat** ($Q$)
	- "the form of energy crossing the boundary of a thermodynamic system by virtue of a temperature difference across the boundary" (Wikipedia)
	- $Q = mc\Delta T=C\Delta T$
	- SI unit: $\mathrm{J}$

## Heat capacity

- **heat capacity** (or **thermal capacity**) $C$ (קיבול חום)
	- SI unit: $\mathrm{J \cdot K^{-1}}$
- **molar heat capacity** $\displaystyle c_m=\frac{C}{n}$ (קיבול חום מולי)
	- SI unit: $\mathrm{J \cdot K^{-1} \cdot mol^{-1}}$
- **specific heat capacity** ($c$) (קיבול חום סגולי) is the amount of heat required to raise the temperature of one unit of mass (typically $1\,\mathrm{kg}$ or $1\,\mathrm{g}$) of a substance by $1^\circ\mathrm{C}$ (or equivalently $1^\circ\mathrm{K}$)
	- aka: **massic heat capacity** or **specific heat** (חום סגולי)
	- SI unit: $\mathrm{J \cdot kg^{-1} \cdot K^{-1}}$

## Heat transfer

- **heat transfer**
	- **thermal conduction**
		- **thermal conductivity** $\kappa$
		- **thermal resistivity** $\rho$
	- **convection** (הסעה)
	- [[Electromagnetic radiation#Thermal radiation|thermal radiation]]

- **thermal equilibrium**
- [[Thermochemistry#Heating value|heating value]]
- **calorimetry** (קלורימטריה)

- $q$ is the **heat flux**
	- SI unit: $\mathrm{W /m^2}$
	- $q = \frac{dQ}{dA \cdot dt}$
	- $q = h\Delta T$
	- $h$ is the **heat transfer coefficient**

### Latent heat

- **latent heat** (or **latent energy**, **heat of transformation**) (חום כמוס)
	- $Q = m L$
		- $L$ is the specific latent heat of the substance
- **enthalpy of fusion** (or **(latent) heat of fusion**)
- **enthalpy of sublimation** (or **(latent) heat of sublimation**)
- **enthalpy of vaporization** (or **(latent) heat of vaporization**)

# Temperature

- **temperature**
	- **thermodynamic temperature** (or **absolute temperature**) (טמפרטורה מוחלטת)
	- **absolute zero**
	- **Celsius**
		- degree Celsius ($^\circ\mathrm{C}$)
		- (sometimes $\mathrm{C}^\circ$ is used for temperature interval)
	- For an ideal gas, $\overline{\text{KE}}=\frac{3}{2}k_B T$





![](https://upload.wikimedia.org/wikipedia/commons/3/34/Phase-diag2.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original)

- **phase diagram**
	- **lines of equilibrium** (or **phase boundaries**)
	- The **critical point** (specifically **liquid–vapor critical point**) is the point $(T_c, P_c)$ in which the liquid–gas equilibrium curve ends. Beyond this point, the distinction between liquid and gas vanishes, and the substance becomes a supercritical fluid.
		- $T_c$ is the **critical temperature**
		- $P_c$ is the **critical pressure**
	- The **triple point** is the point $(T_{tp}, P_{tp})$ in which all three phases coexist in dynamic equilibrium





# Potentials

- **thermodynamic potential** (or **thermodynamic potential energy**)
	- **Gibbs free energy** (or **Gibbs energy**)
		- $G=U+PV-TS$
		- $\Delta G=\Delta H-T\Delta S$
			- the enthalpy contribution is favorable when $\Delta H < 0$
			- the entropy contribution is favorable when $\Delta S > 0$
		- $\Delta G<0$ → spontaneous
		- $\Delta G = 0$ → equilibrium
		- $\Delta G>0$ → nonspontaneous
	- [[#enthalpy]]
	- [[#internal energy]]
	- **Helmholtz free energy** ($A$)
	- **grand potential** (or **Landau potential**) ($\Omega$)

- **(thermodynamic) free energy**

# Internal energy

- **internal energy** ($U$) (אנרגיה פנימית)
	- [[#Laws of thermodynamics|first law of thermodynamics]]
- in contrast to:
	- macroscopic kinetic energy
	- macroscopic potential energy
		- elastic
		- gravitational
- for an ideal gas: $U = \frac{f}{2}nRT$
	- $f$ is the degrees of freedom
		- monatomic gas: $f = 3$ 
		- diatomic gas: $f = 5$
- for an ideal gas (or real gas with constant presure):
	- $\Delta U = n C_{V,m} \Delta T$
	- $n$ is the number of moles
	- $C_{V,m}$ is [[#Heat capacity|molar heat capacity]] at constant volume
	- $\Delta T$ is the change in temperature

- #todo 
	- $\Delta U=\sum_{i}p_{i}E_{i}$
	- ${\displaystyle \Delta U=\sum _{i}E_{i}}$
	- ${\displaystyle U=U_{\text{micro,pot}}+U_{\text{micro,kin}}}$
	- $\Delta U=\sum U_{\text{products}}-\sum U_{\text{reactants}}$

# Enthalpy

- **enthalpy** (אֶנְתַּלְפִּיָּה)
	- $H = U + PV$
	- SI unit: $\mathrm{J}$
- **enthalpy change** ($\Delta H$) of any process (as [[Reactions#Chemical reaction|chemical reaction]], [[State of matter|phase transition]])
	- $\Delta H = H_{\text{final}} - H_{\text{initial}}$
		- [[Thermochemistry#Enthalpy of reaction|enthalpy change of reaction]]
	- $\Delta H=\Delta U+P\Delta V=q_{P}$
		- $\Delta U$ is the internal energy change
		- $q_P$ is the heat at constant pressure
		- $P\Delta V$ is the PV work
	- $\Delta H>0$ for an endothermic process
	- $\Delta H<0$ for an exothermic process
- **specific enthalpy** 
	- $h=H/m$
	- SI unit: $\mathrm{J/kg}$
- **molar enthalpy** 
	- $H_m=H/n$
	- SI unit: $\mathrm{J/mol}$


# Entropy

- **entropy** ($S$)
- $\Delta S= \frac{Q}{T}$ 
- $\Delta S = \int \frac{dq_{\text{rev}}}{T}$



# Properties of materials

- **compressibility** (or **coefficient of compressibility**) (דחיסות)
- **thermal expansion** (התפשטות תרמית)
	- $\Delta L = \alpha L_{0}\Delta T$
	- $\Delta V = \beta V_{0}\Delta T$
- [[#Heat capacity|specific heat]]


# misc.

- **critical point** (or **critical state**)
	- (e.g., the [[#Temperature|liquid–vapor critical point]])