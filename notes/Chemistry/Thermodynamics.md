
- thermodynamics
- chemical thermodynamics
- thermochemistry

# Laws of thermodynamics

- **zeroth law of thermodynamics**
- **first law of thermodynamics** 
	- $\Delta U = Q - W$ is the change in internal energy of the system, where:
		- $Q$ is the heat added to the system
		- $W$ is the work done by the system
	- (or equivalently $\Delta U = Q + W$, where $W$ is the work done on the system)
- **second law of thermodynamics**
- **third law of thermodynamics**

- **state function** (פונקציית מצב)
	- examples: internal energy ($U$), enthalpy ($H$), entropy ($S$), pressure ($P$), and temperature ($T$)
	- (The [[differential]] $dX$ (of a state function) is an **exact differential**)
		- exact differential describes a change in a state function
		- $\oint dX = 0$
- **path function** (or **process function**)
	- examples: $Q$ and $W$
	- **inexact differential** (a differential whose integral depends on the path taken between two points)
		- (e.g. $\delta W$ and $\delta Q$)


- **equation of state**
	- e.g., [[Gases#Ideal gas law|ideal gas law]]

- **thermal energy** (אנרגייה תרמית)
	- by Wikipedia it can refer to:
		- [[#internal energy]]
		- [[#heat]]
		- the characteristic energy

- **thermodynamic work** 
	- #todo https://physics.stackexchange.com/questions/598304/what-does-work-in-thermodynamics-mean-versus-in-other-parts-of-physics
	- **pressure-volume work** 
		- $\delta W=PdV$
		- $W = \int P\,dV$
	- $W = \int V I \, dt$


# Thermodynamic system

![](https://upload.wikimedia.org/wikipedia/commons/4/44/Diagram_Systems_Text.svg)

- **thermodynamic system** (or **system**)
	- closed system
	- open system
	- isolated system

- **surroundings**

- **thermodynamic processes**
	- **isobaric** (אִיזוֹבָּרִי, אחיד-לחץ, קבוע-לחץ)
	- **isochoric** (אִיזוֹכוֹרִי, אחיד-נפח, קבוע-נפח)
	- **isothermal** (איזותרמי, אחיד-טמפרטורה, קבוע-טמפרטורה)
	- **adiabatic** (אַדְיַאבָּטִי)
	- **isentropic** (אִיזֶנְטְרוֹפִּי, אחיד-אנטרופיה, קבוע-אנטרופיה)
	- **isenthalpic** (אִיזֶנְתַּלְפִּי, אחיד-אנתלפייה, קבוע-אנתלפייה)
	- quasistatic
	- polytropic
	- **free expansion**
		- **Joule expansion**
	- **reversible** (הפיך)
	- **irreversible** (לא-הפיך)
	- endoreversibility

- **exothermic process**
	- **exothermic reaction** 
		- "A reaction for which the overall standard enthalpy change $\Delta H^{\,\unicode{x26ac}}$ is negative" (IUPAC)
- **endothermic process**
	- **endothermic reaction** 
- **spontaneous** process
	- (thermodynamically favorable)
- **nonspontaneous** process
	- (thermodynamically unfavorable)


- **pressure–volume diagram** (or **PV diagram**)

# Chemical energy

- **chemical energy**
- "the energy of chemical substances that is released when the substances undergo a chemical reaction and transform into other substances"
 
- breaking bonds requires energy (endothermic)
- forming bonds releases energy (exothermic)

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

# Heat transfer

- **heat transfer**
	- **thermal conduction**
		- **thermal conductivity** $\kappa$
		- **thermal resistivity** $\rho$
	- **convection** (הסעה)
	- **thermal radiation** (קרינה תרמית)
		- "electromagnetic radiation emitted by the thermal motion of particles in matter" (Wikipedia)


- **thermal equilibrium**

- **calorimetry** (קלורימטריה)


## Latent heat

- **latent heat** (or **latent energy**, **heat of transformation**) (חום כמוס)
	- $Q = m L$
		- $L$ is the specific latent heat of the substance
- **enthalpy of fusion** (or **latent heat of fusion**)
- **enthalpy of sublimation** (or **latent heat of sublimation**)
- **enthalpy of vaporization** (or **latent heat of vaporization**)
## Heating value

- **heating value** (ערך-היסק) 
	- (or **energy value**, **calorific value** (ערך קלורי), **heat of combustion** (חום-בערה))
	- "the amount of heat released during the combustion of a specified amount of it" (Wikipedia)
	- the "amount" of fuel may be either: amount of substance, mass or volume, and the quantities and units are:
		- energy/mole: 
		- energy/mass: $\mathrm{J/kg}$, $\mathrm{Cal/kg}$ 
		- energy/volume:
	- **fuel value**
		- "The energy released when 1 g of any substance is combusted" [@Brown, 2012]
		- "the amount of energy per g of food" [@Denniston, 2022]
	- **higher heating value** (HHV)
	- **lower heating value** (LHV)
- **specific energy** (or **massic energy**, **gravimetric energy density**)

# Potentials

- **thermodynamic potential** (or **thermodynamic potential energy**)
	- **Gibbs free energy** (or **Gibbs energy**)
		- $G=U+PV-TS$
		- $\Delta G=\Delta H-T\Delta S$
		- $\Delta G<0$ → spontaneous
		- $\Delta G = 0$ → equilibrium
		- $\Delta G>0$ → nonspontaneous
	- [[#enthalpy]]
	- [[#internal energy]]
	- **Helmholtz free energy** ($A$)
	- **grand potential** (or **Landau potential**) ($\Omega$)

- **(thermodynamic) free energy**

# Enthalpy

- **enthalpy** (אֶנְתַּלְפִּיָּה)
	- $H = U + PV$
	- $\Delta H=H_{\text{products}}-H_{\text{reactants}}$
	- A reaction is endothermic if $\Delta H>0$, and exothermic if $\Delta H<0$
- The **standard enthalpy of reaction** ($\Delta H^\circ_{\text{rxn}}$)
- The **standard enthalpy of formation** (or **standard heat of formation**) ($\Delta H_f^\circ$)
- **Hess's law of constant heat summation** (or **Hess's law**)

- **specific enthalpy** 
	- $h=H/m$
	- SI unit: $\mathrm{J/kg}$
- **molar enthalpy** 
	- $H_m=H/n$
	- SI unit: $\mathrm{J/mol}$

# Bond energy

- **bond dissociation energy** (**BDE**)
- **bond energy** (**BE**) (or **mean bond**, **bond enthalpy**, **average bond enthalpy**, or **bond strength**) (אנרגיית קשר)




# Internal energy

- **** ($U$) (אנרגיה פנימית)
- in contrast to:
	- macroscopic kinetic energy
	- macroscopic potential energy
		- elastic
		- gravitational

- for an ideal gas: $\Delta U = n C_{V,m} \Delta T$
	- $n$ is the number of moles
	- $C_{V,m}$ is [[#Heat capacity|molar heat capacity]] at constant volume
	- $\Delta T$ is the change in temperature

- #todo 
	- $\Delta U=\sum_{i}p_{i}E_{i}$
	- ${\displaystyle \Delta U=\sum _{i}E_{i}}$
	- ${\displaystyle U=U_{\text{micro,pot}}+U_{\text{micro,kin}}}$

# Entropy

- **entropy** ($S$)

# Temperature

- **temperature**
	- **thermodynamic temperature** (or **absolute temperature**) (טמפרטורה מוחלטת)
	- **absolute zero**
	- **Celsius**
		- degree Celsius ($^\circ\mathrm{C}$)
		- (sometimes $\mathrm{C}^\circ$ is used for temperature interval)
	- $\overline{\text{KE}}=\frac{3}{2}k_B T$


- **thermal expansion** (התפשטות תרמית)
	- $\Delta L = \alpha L_{0}\Delta T$
	- $\Delta V = \beta V_{0}\Delta T$


![](https://upload.wikimedia.org/wikipedia/commons/3/34/Phase-diag2.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original)

- **phase diagram**
	- **lines of equilibrium** (or **phase boundaries**)
	- The **critical point** (specifically **liquid–vapor critical point**) is the point $(T_c, P_c)$ in which the liquid–gas equilibrium curve ends. Beyond this point, the distinction between liquid and gas vanishes, and the substance becomes a supercritical fluid.
		- $T_c$ is the **critical temperature**
		- $P_c$ is the **critical pressure**
	- The **triple point** is the point $(T_{tp}, P_{tp})$ in which all three phases coexist in dynamic equilibrium

# misc.

- **critical point** (or **critical state**)
	- (e.g., the [[#Temperature|liquid–vapor critical point]])