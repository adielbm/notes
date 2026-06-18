

- **solution**
	- "A liquid or solid phase containing more than one substance, when for convenience one (or more) substance, which is called the solvent, is treated differently from the other substances, which are called solutes. When, as is often but not necessarily the case, the sum of the mole fractions of solutes is small compared with unity, the solution is called a dilute solution." (_IUPAC Gold Book_)
	- **true solution**
		- "a homogeneous mixture with uniform properties throughout. In a true solution, the solute cannot be isolated from the solution by filtration" [@Denniston, 2022]
- **solubility** (מְסִיסוּת) (of a solute in a solvent)
	- "the ability of a substance, the solute, to form a solution with another substance, the solvent" (Wikipedia)
	- quantification: a [[concentration]] of a saturated solution of the two
	- factors:
		- composition and structure of the solute and the solvent
		- pressure
		- temperature: an increase in temperature usually increases solubility
	- "_like dissolves like_" (Latin: "_Similia similibus solventur_")
	- **insolubility**
- **solvation** (הֲמָסָה)
	- cf. **dissolution**
- **hydration** (הִידְרַצְיָה, מִיּוּם)
- **soluble** (מָסִיס)
	- "A _soluble substance_ is one that dissolves to a significant extent in a specified solvent. When solubility is mentioned without indicating a solvent, it normally means “soluble in water.”" [@Jones, 2016]
	- "An _insoluble substance_ is one that does not dissolve significantly in a specified solvent" [@Jones, 2016]
- **solute** (מוּמָס) - dissolved substance
	- **dissolved** (_adj_.) - that has been disintegrated in a solvent (Wiktionary) 
- **solvent** (מֵמֵס, מְמִסִּים)
	- "(1) The most abundant component of a solution. (2) The component of a solution in which the other components are considered to be dissolved." [@Jones, 2016]


- **supersaturation** (רְוָיַת-יֶתֶר, רִוּוּי-יֶתֶר)
	- "The condition of a solution being more highly concentrated than is normally possible" (Wiktionary)
	- **supersaturated solution** (תמיסה רווית-יתר)
- **saturated solution** (תמיסה רוויה)

- **dilution** (מיהול)
	- $M_1V_1 = M_2V_2$
	- $V_1,V_2$ are the volumes of the solution before and after dilution, (resp.) 
	- $M_1,M_2$ are the molarities of the solution before and after dilution (resp.)


- **aqueous solution** (תמיסה מימית)
	- **spectator ions** (יונים משקיפים)

# Electrolyte

- **electrolyte** (אלקטרוליט)
	- "A substance that produces ions when dissolved in water; its solution conducts electricity." [@Timberlake, 2017]
	- "a substance that conducts electricity through the movement of ions, but not through the movement of electrons" (Wikipedia)
	- **strong electrolyte**
		- "solutes that exist in solution completely or nearly completely as ions" [@Brown, 2012]
	- **weak electrolyte**
		- "solutes that exist in solution mostly in the form of neutral molecules with only a small fraction in the form of ions" [@Brown, 2012]
- **nonelectrolyte**
	- "A substance that dissolves in water as molecules; its solution does not conduct an electrical current." [@Timberlake, 2017]

- electrolyte identification #todo 
	- soluble ionic compound → strong electrolyte
	- covalent compound
		- ionize completely in water → strong electrolyte
		- strong acid → strong electrolyte
		- ionize partially in water → weak electrolyte
		- weak acid/base → weak electrolyte
		- not ionize in water → non-electrolytes 



# Ideal solution

- **ideal solution** (or **ideal mixture**)
	- "A solution that obeys Raoult’s law at any concentration; all solutions behave ideally as the concentration approaches zero" [@Jones, 2016]
	- properties:
		- $\Delta H_{\text{mix}} = 0$
		- $\Delta V_{\text{mix}} = 0$
		- obeys Raoult’s law at any concentration
		- the activity coefficient is equal to one for each component


# Raoult's law


- **Raoult's law** 
	- given a mixture of substances, where each component $i$ present in the liquid (with amount $n_i$) 
	- $P_i = x_i P_i^{\ast}$ is partial vapor pressure of component $i$
		- $x_i = \frac{n_i}{n_{\text{total}}}$ is the mole fraction of the component $i$
		- $P_i^\ast$ is the vapor pressure of the pure component $i$
			- (when $i$ is nonvolatile, $P_i^\ast\approx 0$)
	- $P_{\text{total}} = \sum_i P_i$ is total vapor pressure of the ideal solution 


# Colligative properties

- $i$ is the **van 't Hoff factor**
- $b$ is the [[Mole#Related quantities|molality]] of the solute
- $M$ is the molarity
- $k_b$ and $k_f$ are the **ebullioscopic constant** (קבוע-רתיחה) and the **cryoscopic constant** (קבוע-קפיאה) (resp.). they are solvent-specific. 
	- unit: $\mathrm{K\,m^{-1}}=\mathrm{K\,kg\,mol^{-1}}$ (or $\mathrm{^\circ C\,m^{-1}}$, and then $\Delta T$ are in $\mathrm{^\circ C}$)
	- (e.g. for water: $k_{b}=0.512\,\mathrm{K\,kg\,mol^{-1}}$ and $k_{f}=1.86\,\mathrm{K\,kg\,mol^{-1}}$)

- **colligative properties**
	- relative lowering of vapor pressure (derived from [[#Raoult's law]])
		- $P_{\text{solution}} = x_{\text{solvent}} P^\circ_{\text{solvent}}$ is the vapor pressure of the solution
		- $\Delta P = P^{\circ}_{\text{solvent}} - P_{\text{solution}} = x_{\text{solute}} P^{\circ}_{\text{solvent}}$ is the decrease in vapor pressure of the solvent due to the presence of the nonvolatile solute
			- $P^{\circ}_{\text{solvent}}$: vapor pressure of the pure solvent
			- $x_{\text{solute}}$: the mole fraction of the solute in the solution
	- **boiling-point elevation**
		- $\Delta T_b = ik_b  b$
	- **freezing-point depression**
		- $\Delta T_f = ik_f  b$
	- [[#Osmotic pressure]]

## Osmotic pressure

- **osmotic pressure** $\pi$ (or $\Pi$) 
	- $\pi = iMRT$
	- [[Pressure#Units|pressure units]]
- **semipermeable membrane**
- selectively permeable membrane
- **osmosis** (אוֹסְמוֹזָה)
- **osmotic concentration** (or **osmolarity**) 
	- $\text{osmolarity} = M \cdot i$ 
		- SI unit: $\mathrm{Osm/m^3}$
		- other units: $\mathrm{osmolar=Osm/L}$
- (**osmole**, $\mathrm{Osm}$, $\mathrm{osmol}$) 1 osmole = 1 mole of particles that contribute to osmotic pressure
- **osmolality**
	- $\mathrm{Osm/kg}$
- Given two solutions $A$ and $B$ with osmolarities $c_A$ and $c_B$:
	- if $c_A>c_B$, $A$ is **hyperosmotic** 
	- if $c_A<c_B$, $A$ is **hypoosmotic** (or $A$ is  to $B$)
	- if $c_A=c_B$, $A$ and $B$ are **isoosmotic** (or $A$  to $B$)
	- (cf. **tonicity**: **hypertonic**, **hypotonic** and **isotonic**)
- **turgor pressure** (לחץ טוּרְגּוֹר, מִלְחָץ)
- see also: diffusion

# Water soluble compounds

| **water soluble compounds contain**                                                                               | **exceptions**                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Alkali metal ions ($\ce{Li+}$, $\ce{Na+}$, $\ce{K+}$, $\ce{Rb+}$, $\ce{Cs+}$) or the ammonium ion ($\ce{NH4+}$)   |                                                                                                                                        |
| Nitrate ($\ce{NO3-}$), bicarbonate ($\ce{HCO3−}$), or chlorate ($\ce{ClO3−}$)                                     | Chlorate compounds containing $\ce{Cs+}$ and $\ce{Rb+}$ are insoluble.                                                                 |
| Halides ($\ce{Cl-}$, $\ce{Br-}$, $\ce{I-}$)                                                                       | Compounds containing halides of $\ce{Ag+}$ or $\ce{ Hg2^{2+} }$ are insoluble. $\ce{ CuI }$ and $\ce{ PbI2 }$ are also insoluble.      |
| Sulfate ($\ce{SO4^{2−}}$)                                                                                         | Compounds containing sulfate of $\ce{ Ag+ }$, $\ce{Ca^{2+}}$, $\ce{Sr^{2+}}$, $\ce{Ba^{2+}}$, $\ce{Hg2^{2+}}$, or $\ce{Pb^{2+}}$       |
| **water insoluble compounds contain**                                                                             | **exceptions**                                                                                                                         |
| Carbonate ($\ce{CO3^{2−}}$), phosphate ($\ce{PO4^{3−}}$), chromate ($\ce{CrO4^{2−}}$), or sulfide ($\ce{S^{2−}}$) | Compounds containing alkali metal ions or the ammonium ion are soluble. $\ce{SrS}$, $\ce{MgCrO4}$, and $\ce{CaCrO4}$ are also soluble. |
| Hydroxide ($\ce{OH−}$)                                                                                            | Compounds containing alkali metal ions or the $\ce{Ba^{2+}}$, $\ce{Sr^{2+}}$, or $\ce{Ca^{2+}}$ ions are soluble.                      |
| (source: Denniston, K. J. _General, organic, and biochemistry_. McGraw-Hill Education.)                           |                                                                                                                                        |


