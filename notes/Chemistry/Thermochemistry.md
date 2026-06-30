
- **thermochemistry**
	- related topics:
		- [[Thermodynamics]]
			- [[Thermodynamics|first law of thermodynamics]]
			- [[Thermodynamics|second law of thermodynamics]]
			- [[Thermodynamics#Heat|heat]]: $Q = mc\Delta T$
		- [[chemical thermodynamics]]
- in this page, the [[Thermodynamics#Sign conventions|IUPAC convention of work]] is used

# Internal energy

- $\Delta U_{\text{reaction}} = \sum U_{\text{products}} - \sum U_{\text{reactants}}$

# Enthalpy 

The [[Thermodynamics#Enthalpy|enthalpy change]] here is _molar enthalpy change_ (i.e. per one mole) (unit: $\mathrm{kJ/mol}$)

### Hess's law

- **Hess's law of constant heat summation** (or **Hess's law**)
	- $\Delta H(\ce{A -> B})=-\Delta H(\ce{B -> A})$
	- $\Delta H(\ce{A -> B})=c\Delta H(\ce{cA -> cB})$
	- $\Delta H(\ce{A -> C}) = \Delta H(\ce{A -> B}) + \Delta H(\ce{B -> C})$
- #todo Lavoisier and Laplace's law 

## Enthalpy of reaction

- **[[Thermodynamics#Thermodynamic processes|exothermic]] reaction**: $\Delta H < 0$
- **[[Thermodynamics#Thermodynamic processes|endothermic]] reaction**: $\Delta H > 0$
- The **enthalpy of reaction** ($\Delta H_{\text{rxn}}$) (or _heat of reaction_) is the enthalpy change of a reaction. (i.e. $\Delta H_{\text{rxn}}=H_{\text{products}}-H_{\text{reactants}}$).
- There are two methods to calculate the enthalpy of reaction:
	- using [[#Bond energy|average bond enthalpies]]:
		- $\Delta H_{\text{rxn}} = \sum \Delta H_{\text{(bonds broken)}} - \sum \Delta H_{\text{(bonds formed)}}$
			- $\sum \Delta H_{\text{(bonds broken)}}$ is the total energy to break bonds
				- $\Delta H$ are the average bond enthalpies of the bonds in reactants
			- $\sum \Delta H_{\text{(bonds formed)}}$ is the total energy to form bonds
				- $\Delta H$ are the average bond enthalpies of the bonds in products
	- using [[#Enthalpy of formation|standard enthalpy of formation]]:
		- The **standard enthalpy of reaction** ($\Delta H^\circ_{\text{rxn}}$)
			- enthalpy change for a reaction under standard-state conditions
			- $\Delta H^\circ_{\text{rxn}}=\sum \nu_{p} \Delta H_f^\circ(p)-\sum \nu_{r} \Delta H_f^\circ(r)$
			- $\nu$ are the [[Reactions#Stoichiometry|stoichiometric coefficients]] of the reactants and products

## Enthalpy of formation

- The **standard enthalpy of formation** (or **standard heat of formation**) ($\Delta H_f^\circ$)
	- The enthalpy change when exactly 1 mole of a compound is formed from its elements in their standard states (typically: 1 atm, 298 K)
	- examples:
		- $\Delta H_{f}^\circ(\ce{H2O{(g)}}) = -241.8\text{ kJ/mol}$
			- $\ce{H2{(g)} + 1/2 O2{(g)} -> H2O{(g)}}$
		- $\Delta H_{f}^\circ(\ce{CO2{(g)}}) = -393.5\text{ kJ/mol}$
			- $\ce{C{(s, graphite)} + O2{(g)} -> CO2{(g)}}$
		- $\Delta H_{f}^\circ(\ce{O3{(g)}}) = +142.7\text{ kJ/mol}$
		- for any element in its most stable state: $\Delta H_{f}^\circ=0$
	- reference table: https://en.wikipedia.org/wiki/Standard_enthalpy_of_formation#Examples:_standard_enthalpies_of_formation_at_25_%C2%B0C


## Enthalpy of solution

see [[Solutions]]

## Latent heat

- **latent heat** (or **latent energy**, **heat of transformation**) (חום כמוס)
	- $Q = m L$
		- $L$ is the specific latent heat of the substance
- **enthalpy of fusion** (or **(latent) heat of fusion**)
- **enthalpy of sublimation** (or **(latent) heat of sublimation**)
- **enthalpy of vaporization** (or **(latent) heat of vaporization**)

## Lattice enthalpy

- $\Delta H_{\text{lattice}}=\Delta U_{\text{lattice}}+P\Delta V_{m}$
	- $\Delta V_{m}$ is the change of [[Mole#Molar volume|molar volume]] due to the formation of the lattice
	- (notice: [[Thermodynamics#Sign conventions|IUPAC convention]] is used)
- **lattice energy** ($\Delta U_{\text{lattice}}$)
	- "the energy change (released) upon formation of one mole of a crystalline compound from its infinitely separated constituents, which are assumed to initially be in the gaseous state at 0 K" (Wikipedia)
- **lattice enthalpy** ($\Delta H_{\text{lattice}}$)
	- "the heat required to vaporize the solid to widely separated gaseous ions at constant pressure." [@Jones, 2016]
		- $\Delta H_{\text{lattice}}=H_{\text{m}}(\text{ions},\text{g})-H_{\text{m}}(\text{solid})$
- example: 
	- $\ce{Na+(g) + Cl-(g) ->NaCl(s)}$: $\Delta H_{\text{lattice}}=-788\,\mathrm{kJ/mol}$
- "The difference between lattice energy and enthalpy is very small and the two terms are often interchanged freely." (Wikipedia)
- both lattice enthalpy and lattice energy values are negative during lattice formation, become identical at 0 K, and their minor difference is typically disregarded at standard temperatures.
- **Born–Haber cycle**
### Heating value

- **heating value** (ערך-היסק) (or **energy value**, **calorific value** (ערך קלורי), **heat of combustion** (חום-בערה))
	- "the amount of heat released during the combustion of a specified amount of it" (Wikipedia)
	- The **enthalpy of combustion** is the heating value expressed as an enthalpy 
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

# Chemical energy

- **chemical energy**
	- "the energy of chemical substances that is released when the substances undergo a chemical reaction and transform into other substances" (Wikipedia)
	- "The energy available from a chemical reaction" [@Jones, 2016] 
- breaking bonds requires energy (endothermic)
- forming bonds releases energy (exothermic)
	- when reactants with weaker covalent bonds form products with stronger bonds, net energy is released
- **chemical potential** ($\mu$)
- **activity**

## Bond energy

- https://en.wikipedia.org/wiki/Bond_energy

- **bond dissociation energy** (**BDE**)
- **bond energy** (**BE**) (or **bond enthalpy**, **bond strength**) (אנרגיית קשר)
	- "The enthalpy change accompanying the dissociation of a bond" [@Jones, 2016]
	- notations: $D$, and $\Delta H_{\text{B}}$ 
	- **average bond enthalpy** (or **mean bond**) (of a bond)
		- reference table: https://owl.oit.umass.edu/departments/Chemistry/appendix/bond.html
		- examples:
			- $\Delta H_{\text{B}}(\ce{H-H})=+436\,\mathrm{kJ/mol}$ is the enthalpy change of $\ce{H2(g)-> 2H(g)}$. 
			- $D(\ce{C-C})=413\,\mathrm{kJ/mol}$
	- $D(\ce{C-C}) < D(\ce{C=C})  < D(\ce{C#C})$

---

