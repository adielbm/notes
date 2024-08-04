
## Atomic Structure

- An **atomic nucleus** of an atom is the small, dense region consisting of protons and neutrons at the center of the atom.
- An **atomic number** (Z) is the number of protons in the nucleus of an atom. It is also the number of electrons in a neutral atom.
- A **neutron number** (N) is the number of neutrons in the nucleus of an atom.
- The **(atomic) mass number** (A) is the total number of protons and neutrons (together known as **nucleons**) in an atomic nucleus. (A = Z + N)
    - It is approximately equal to the atomic mass of the atom in unified atomic mass units.

## Atomic Particles

| Subatomic particle | Symbol | Charge | Mass (u)                       | Location in atom |
| ------------------ | ------ | ------ | ------------------------------ | ---------------- |
| Proton             | $p^+$  | $+1$   | $1.007276466812$               | Nucleus          |
| Neutron            | $n^0$  | $0$    | $1.00866491588$                | Nucleus          |
| Electron           | $e^-$  | $-1$   | $5.48579909070 \times 10^{-4}$ | Electron cloud   |


## Isotopes

- Atoms with the same number of protons but different numbers of neutrons are called **isotopes**.
    - Example: $\ce{^{12}_{6}C}$, $\ce{^{13}_{6}C}$, and $\ce{^{14}_{6}C}$ are isotopes of carbon.
- The **natural abundance** (NA) of an isotope is the percentage of that isotope that occurs in nature.



### AZE Notation

- **Nuclear Symbol Notation**: $^{A}_{Z}\ce{E}$
    - $A$ is the mass number
    - $Z$ is the atomic number (optional if the element is known)
    - $\ce{E}$ is the chemical symbol of the element
    - Examples: 
        - (carbon-14) $\ce{^{14}_{6}C}$ or $\ce{^{14}C}$
        - (neon-20) $\ce{^{20}_{10}Ne}$ or $\ce{^{20}Ne}$
- **Hyphen Notation**: $\ce{E}\text{-}A$
    - $A$ is the mass number
    - $\ce{E}$ is the chemical symbol or name of the element
    - Examples:
        - (carbon-14) $\ce{C-14}$ or $\ce{carbon-14}$
        - (neon-20) $\ce{Ne-20}$ or $\ce{neon-20}$


# Mass
## Atomic Mass

- The atomic mass ($m$ or $m_{\text{a}}$) is the mass of an atom
    - Although the SI unit of mass is the $\mathsf{kg}$, atomic mass is often expressed in the non-SI unit of unified atomic mass units (u).
    - Examples: 
        - $m(\ce{^{12}C})=12 \, \mathsf{u}$ (the atomic mass of an carbon-12 atom is $12 \, \mathsf{u}$)
        - $m(\ce{^{13}C})=13.0033548378 \, \mathsf{u}$ (the atomic mass of an carbon-13 atom is $13.0033548378 \, \mathsf{u}$)

### Unified Atomic Mass Unit (u)

- An **unified atomic mass unit** (u) (or **dalton** (Da)) is a non-SI unit of mass defined as $\frac{1}{12}$ of the mass of an unbound neutral atom of carbon-12 in its nuclear and electronic ground state and at rest.
    - The **atomic mass constant** is a constant defined as $m_{u} =\frac{1}{12} m(^{12}\text{C}) = 1 \, \text{u} = 1.66053906892(52) \times 10^{-27} \, \text{kg}$

### Average Atomic Mass

Because substances are usually not isotopically pure, (i.e., they are a mixture of isotopes of the element) it is convenient to use the **average atomic mass** (or **atomic weight**) which is the weighted average of the atomic masses of the naturally occurring isotopes of the element to calculate the atomic mass of given sample of the element.
    - General formula for calculating the average atomic mass of an element:
        - $m(E)=\sum_i \left( m_i \cdot f_i \right)$, where:
            - $m(E)$ is the average atomic mass of the element $E$ (in $\mathsf{u}$)
            - $m_i$ is the atomic mass of the $i$-th isotope of the element (in $\mathsf{u}$)
            - $f_i$ is the natural abundance of the $i$-th isotope of the element (in $\%$)
    - Example:
        - The natural abundance of $\ce{^{12}C}$ and $\ce{^{13}C}$ are $98.93\%$ and $1.07\%$ respectively.
        - The average atomic mass of carbon is $m(\ce{C})=\left( m(\ce{^{12}C}) \times \text{NA}(\ce{^{12}C}) \right) + \left( m(\ce{^{13}C}) \times \text{NA}(\ce{^{13}C}) \right)=12.011 \, \mathsf{u}$ 

## Relative Atomic Mass

> the meaning of the term _relative_ in this context is that the atomic mass is a dimensionless quantity, as it is the ratio of the mass of an atom to the unified atomic mass unit.

- The **relative isotopic mass** of a particular isotope of an element is the mass of the isotope relative to the mass of carbon-12.
    - It is defined as $m_i = \frac{m}{m_{\text{C}}}$, where:
        - $m$ is the atomic mass of the isotope (in $\mathsf{u}$)
        - $m_{\text{C}}$ is the atomic mass of $\ce{^{12}C}$ (in $\mathsf{u}$)
        - $m_i$ is the relative isotopic mass of the isotope (dimensionless)
    - Example:
        - The relative isotopic mass of $\ce{^{13}C}$ is $m_{\ce{^{13}C}}=\frac{13.0033548378}{12}=1.083$
- The **relative atomic mass** ($A_r$) is a dimensionless quantity.
    - $\displaystyle A_r=\frac{\text{average atomic mass of the element in u}}{\frac{1}{12} \times \text{atomic mass of } \ce{^{12}C}}=\frac{m(E)}{1 \, \text{u}}$
    - Example: $A_r(\ce{C})=\frac{12.011\, \mathsf{u}}{1 \, \mathsf{u}}=12.011$
        
    - The **standard atomic weight** ($A_r^\circ(E)$ for an element $E$) the weighted arithmetic mean of the relative isotopic masses of all isotopes of that element weighted by each isotope's abundance on Earth.
        - Formula: $A_r^\circ(E)=\sum_i \left( m_i \cdot f_i \right)$, where:
            - $m_i$ is the relative isotopic mass of the $i$-th isotope of the element (dimensionless)
            - $f_i$ is the natural abundance of the $i$-th isotope
        - Examples:
            - (carbon) $A_r^\circ(\ce{C})=12.011$

## Amount of Substance

- The **amount of substance** (n) of a sample of matter is the number of entities (atoms, molecules, ions, etc.) in the sample.
- **Mole** (mol) is the SI unit of amount of substance.
    - The **Avogadro number** is $N_0=6.02214076×10^{23}$.
    - $1 \,\mathsf{mol}$ of a substance contains exactly $N_0$ entities.
    - The **Avogadro constant** $N_\text{A}=6.02214076×10^{23} \, \text{mol}^{-1}$ 
    - Approximately one mole is based on the number of atoms in 12 grams of carbon-12.


## Molar Mass


- The **molar mass** ($M$) of an element/compound is the mass of one mole of a substance of that element/compound.
    - The molar mass is expressed in $\mathsf{g/mol}$.
- The **molar mass of an element** is numerically equal to the atomic mass of the element in $\mathsf{u}$.
    - Example: 
        - The molar mass of carbon is $12.011 \, \mathsf{g/mol}$.
        - The molar mass of oxygen is $15.999 \, \mathsf{g/mol}$.
        - The molar mass of hydrogen is $1.008 \, \mathsf{g/mol}$.
- The **molar mass of a compound** is the sum of the molar masses of the elements in the compound.
    - To determine the molar mass of a compound, multiply the molar mass of each element by its subscript in the formula and add the results.
    - $M=\sum_i \left( a_i \times M_i \right)$, where:
        - $M$ is the molar mass of the compound (in $\mathsf{g/mol}$)
        - $a_i$ is the subscript of the $i$-th element in the compound's chemical formula (which is the number of atoms of that element in one molecule of the compound).
        - $M_i$ is the molar mass of the $i$-th element (in $\mathsf{g/mol}$)
    - Example:
        - The molar mass of $\ce{H2O}$ is $2 \times 1.008 \, \mathsf{g/mol} + 15.999 \, \mathsf{g/mol} = 18.015 \, \mathsf{g/mol}$.
        - The molar mass of $\ce{CO2}$ is $12.011 \, \mathsf{g/mol} + 2 \times 15.999 \, \mathsf{g/mol} = 44.01 \, \mathsf{g/mol}$.
- The molar mass $M$ of a substance can be calculated by these formulas: 
    - $M=\frac{m}{N_A}$, where:
        - $m$ is the mass of the substance (in $\mathsf{g}$)
        - $N_0$ is Avogadro's number
    - $M=\frac{m}{n}$, where:
        - $m$ is the mass of the substance (in $\mathsf{g}$)
        - $n$ is the number of moles of the substance (in $\mathsf{mol}$)
    

> [!EXAMPLE] Converting Moles to Grams
> Given $0.750 \, \mathsf{mol}$ of $\ce{Ag}$, calculate the mass (in $\mathsf{g}$) of $\ce{Ag}$.
> **Answer:** The molar mass of $\ce{Ag}$ is $107.87 \, \mathsf{g/mol}$, so, by the formula $m=n \times M$, the mass of $0.750 \, \mathsf{mol}$ of $\ce{Ag}$ is $m=0.750 \, \mathsf{mol} \times 107.87 \, \mathsf{g/mol}=80.9 \, \mathsf{g}$.

> [!EXAMPLE] Converting Grams to Moles
> - Given $25.0 \, \mathsf{g}$ of $\ce{H2O}$, calculate the number of moles of $\ce{H2O}$.
>   - **Answer:** The molar mass of $\ce{H2O}$ is $18.015 \, \mathsf{g/mol}$, so, by the formula $n=\frac{m}{M}$, the number of moles of $25.0 \, \mathsf{g}$ of $\ce{H2O}$ is $n=\frac{25.0 \, \mathsf{g}}{18.015 \, \mathsf{g/mol}}=1.39 \, \mathsf{mol}$.
> - Given $737 \, \mathsf{g}$ of $\ce{NaCl}$, calculate the number of moles of $\ce{NaCl}$.
>   - **Answer:** The molar mass of $\ce{NaCl}$ is $(22.99 + 35.45) \, \mathsf{g/mol}=58.44 \, \mathsf{g/mol}$, so, by the formula $n=\frac{m}{M}$, the number of moles of $737 \, \mathsf{g}$ of $\ce{NaCl}$ is $n=\frac{737 \, \mathsf{g}}{58.44 \, \mathsf{g/mol}}=12.6 \, \mathsf{mol}$.


> [!INFO] Calculating the mass of a substance in a mixture
> **Problem:**
> Given:
> - $m(\text{Sample})$ - The mass of a sample containing a compound. 
> - $P$ - The percentage by mass of a specific element in the sample.
> 
> Find:
> - $M(\text{Compound})$ - The molar mass of the compound 
> - $m(\text{Element})$ - The mass of the element in the sample.
> - $m(\text{Compound})$ - The mass of the compound required to provide the calculated mass of the element in the sample.
> 
> **Answer:**
> 1. Calculate the molar mass of the compound.
> See [[#Molar Mass]] (of a compound)
> 2. Calculate the mass of the element in the sample.
> $m(\text{Element})=\frac{P}{100} \times m(\text{Sample})$
> 3. Determine the mass of the compound required to provide the calculated mass of the element.
> $m(\text{Compound})=m(\text{Element}) \times \frac{M(\text{Compound})}{M(\text{Element})}$
>
> > [!EXAMPLE]
> > - $m\text{(Sample)}=0.450 \, \mathsf{g}$ - The mass of a sample containing a compound
> > - $\text{Element}=\ce{K}$ - The element is _potassium_
> > - $P=22.0\%$ - The percentage by mass of $\ce{K}$ in the sample,
> > - $\text{Compound}=\ce{KCl}$ - The compound is _potassium chloride_
> > 
> > **Solution:**
> > 1. $M(\ce{KCl})=74.55 \, \mathsf{g/mol}$ is the molar mass of $\ce{KCl}$
> > 2. $m(\ce{K})=\frac{22.0}{100} \times 0.450=0.099 \, \mathsf{g}$ is the mass of $\ce{K}$ in the sample
> > 3. $m(\ce{KCl})=0.099 \, \mathsf{g} \times \frac{74.55 \, \mathsf{g/mol}}{39.10 \, \mathsf{g/mol}}=\boxed{0.188 \, \mathsf{g}}$ is the mass of $\ce{KCl}$.



> [!INFO] Calculating the Mass Percent of an Element in a Mixture
> **Problem:**
> Given:
> - $m(\text{Mixture})$ - The mass of a mixture containing different compounds.
> - $n(\text{Compound})$ - The number of moles of a specific compound in the mixture.
> 
> Find:
> - $M(\text{Compound})$ - The molar mass of the specific compound.
> - $m(\text{Element})$ - The mass of the specific element in the mixture.
> - $\text{Mass Percent}$ - The mass percent of the specific element in the mixture.
> 
> **Answer:**
> 1. Calculate the molar mass of the compound.
> See [[#Molar Mass]] (of a compound)
> 2. Calculate the mass of the compound in the mixture.
> $m(\text{Compound}) = n(\text{Compound}) \times M(\text{Compound})$
> 3. Calculate the mass of the element in the compound.
> $m(\text{Element}) = n(\text{Compound}) \times M(\text{Element in Compound})$
> 4. Determine the mass percent of the element in the mixture.
> $\text{Mass Percent} = \frac{m(\text{Element})}{m(\text{Mixture})} \times 100$
>
> > [!EXAMPLE]
> > Given:
> > - $m(\text{Mixture}) = 1.5 \, \mathsf{g}$ - The mass of a mixture containing $\ce{CaCO3}$ and $\ce{NaHCO3}$.
> > - $n(\ce{NaHCO3}) = 0.010 \, \mathsf{mol}$ - The number of moles of $\ce{NaHCO3}$ in the mixture.
> > 
> > **Solution:**
> > 1. Calculate the molar mass of $\ce{NaHCO3}$.
> > $M(\ce{NaHCO3}) = 84.01 \, \mathsf{g/mol}$
> > 2. Calculate the mass of $\ce{NaHCO3}$ in the mixture.
> > $m(\ce{NaHCO3}) = 0.010 \, \mathsf{mol} \times 84.01 \, \mathsf{g/mol} = 0.8401 \, \mathsf{g}$
> > 3. Calculate the mass of sodium ($\ce{Na}$) in $\ce{NaHCO3}$.
> > $M(\ce{Na}) = 22.99 \, \mathsf{g/mol}$
> > $m(\ce{Na}) = 0.010 \, \mathsf{mol} \times 22.99 \, \mathsf{g/mol} = 0.2299 \, \mathsf{g}$
> > 4. Determine the mass percent of sodium in the mixture.
> > $\text{Mass Percent} = \frac{0.2299 \, \mathsf{g}}{1.5 \, \mathsf{g}} \times 100 = \boxed{15.33\%}$




> [!INFO] Calculating the Mass Percent of a Compound in a Mixture
> **Problem:**
> Given:
> - $m(\text{Mixture})$ - The mass of a mixture containing different compounds.
> - $n(\text{Compound})$ - The number of moles of a specific compound in the mixture.
> - $M(\text{Compound})$ - The molar mass of the specific compound.
> 
> Find:
> - $m(\text{Compound})$ - The mass of the compound in the mixture.
> - $\text{Mass Percent}$ - The mass percent of the compound in the mixture.
>
> **Answer:**
> 1. Calculate the mass of the compound in the mixture.
> $m(\text{Compound}) = n(\text{Compound}) \times M(\text{Compound})$
> 2. Determine the mass percent of the compound in the mixture.
> $\text{Mass Percent} = \frac{m(\text{Compound})}{m(\text{Mixture})} \times 100$
>
> > [!EXAMPLE]
> > Given:
> > - $m(\text{Mixture}) = 1.6 \, \mathsf{g}$
> > - $n(\ce{CaCO3}) = 0.0133 \, \mathsf{mol}$ of $\ce{C2H5NO2}$ (amino acid glycine)
> > - $M(\ce{C2H5NO2}) = 75.07 \, \mathsf{g/mol}$
> >
> > **Solution:**
> > 1. Calculate the mass of $\ce{C2H5NO2}$ in the mixture.
> > $m(\ce{C2H5NO2}) = 0.0133 \, \mathsf{mol} \times 75.07 \, \mathsf{g/mol} = 0.998 \, \mathsf{g}$
> > 2. Determine the mass percent of $\ce{C2H5NO2}$ in the mixture.
> > $\text{Mass Percent} = \frac{0.998 \, \mathsf{g}}{1.6 \, \mathsf{g}} \times 100 = \boxed{62.4\%}$





### Calculating Masses in Reactions

- $\ce{2Fe + 3Cl2 → 2FeCl3}$, what's the maximum mass of iron chloride that can be produced from 2.24 g of iron reacts with excess chlorine?
    1. Write the balanced chemical equation (in this example, $\ce{2Fe + 3Cl2 → 2FeCl3}$)
    2. Calculate the molar mass of the product
        - $M(\ce{Fe})=55.85 \, \mathsf{g/mol}$
        - $M(\ce{Cl3})=3 \times 35.5 \, \mathsf{g/mol}$
        - $M(\ce{FeCl3})=M(\ce{Fe})+M(\ce{Cl3})=162.2 \, \mathsf{g/mol}$
    3. Calculate the number of moles of the limiting reactant (in this example, iron)
        - $\displaystyle n(\ce{Fe})=\frac{m(\ce{Fe})}{M(\ce{Fe})}=\frac{2.24 \, \mathsf{g}}{55.85 \, \mathsf{g/mol}}=0.0401 \, \mathsf{mol}$
    4. Calculate the mass of the product that can be produced
        - $\displaystyle m(\ce{FeCl3})=n(\ce{Fe}) \times M(\ce{FeCl3})=0.0401 \, \mathsf{mol} \times 162.2 \, \mathsf{g/mol}=6.50 \, \mathsf{g}$ 
- In general, given a balanced chemical equation, we want to find the maximum mass of a product that can be produced when a certain mass of a reactant is used, the mass of the product is the product of the number of moles of the limiting reactant and the molar mass of the product, $m(\text{product})=n(\text{limiting reactant}) \times M(\text{product})$





# Volume of Gases

- The **Molar volume** ($V_m$) of a substance is the ration of the volume occupied by a substance to the amount of substance.
    - $V_m=\frac{M}{\rho}$, where:
        - $V_m$ is the molar volume of the substance (in $\mathsf{m^3/mol}$)
        - $M$ is the molar mass of the substance (in $\mathsf{g/mol}$)
        - $\rho$ is the density of the substance (in $\mathsf{g/m^3}$)

## Ideal Gas Law

The **ideal gas law** is the equation of state for an ideal gas, given by

$$PV=nRT$$

where:

- $P$ is the pressure
- $V$ is the volume
- $n$ is the amount of substance of the gas (in moles)
- $T$ is the absolute temperature
- $R$ is the gas constant 
    - $R$ must be expressed in units consistent with those chosen for pressure, volume and temperature. 
    - For example, when pressure is expressed in pascals, volume in cubic meters, and absolute temperature in kelvin, the value of the gas constant is $R=8.3145 \, \mathsf{J \cdot K^{-1}\cdot mol^{-1} }$.


# Chemical Formulas

- The **molecular formula** of a compound gives the actual number of atoms of each element in a molecule of the compound.
- The **empirical formula** of a compound gives the simplest whole-number ratio of the atoms of each element in the compound.
- The **structural formula** uses lines to represent covalent bonds and *shows* how atoms in a molecule connect or bond to each other.


| Name of Compound | Empirical Formula | Molecular Formula |
| ---------------- | ----------------- | ----------------- |
| Benzene          | $\ce{CH}$         | $\ce{C6H6}$       |
| Acetylene        | $\ce{CH}$         | $\ce{C2H2}$       |
| Glucose          | $\ce{CH2O}$       | $\ce{C6H12O6}$    |
| Ammonia          | $\ce{NH3}$        | $\ce{NH3}$        |
| Water            | $\ce{H2O}$        | $\ce{H2O}$        |

## Empirical Formula

> [!EXAMPLE] Determining Empirical Formula of a Compound from Mass Percentages 
> Suppose you have a compound with the following composition by mass: 40.0% Carbon (C), 6.7% Hydrogen (H), and 53.3% Oxygen (O). Determine the empirical formula of the compound.
> **Answer:**
> 1. Assume you have 100 g of the compound, so you have:
> - $40.0 \, \mathsf{g}$ of Carbon
> - $6.7 \, \mathsf{g}$ of Hydrogen
> - $53.3 \, \mathsf{g}$ of Oxygen
> 2. Calculate the number of moles of each element:
> - $n(\ce{C})=\frac{40.0 \, \mathsf{g}}{12.011 \, \mathsf{g/mol}}=3.33 \, \mathsf{mol}$
> - $n(\ce{H})=\frac{6.7 \, \mathsf{g}}{1.008 \, \mathsf{g/mol}}=6.65 \, \mathsf{mol}$
> - $n(\ce{O})=\frac{53.3 \, \mathsf{g}}{16.00 \, \mathsf{g/mol}}=3.33 \, \mathsf{mol}$
> 3. Divide the number of moles of each element by the smallest number of moles to get the simplest whole-number ratio:
> - $\ce{C}: \ce{H}: \ce{O} = 3.33:6.65:3.33=1:2:1$
> 4. The empirical formula of the compound is $$\ce{CH2O}$$.



# Electrons

## Ions

- An **ion** is an atom or molecule that has a net electrical charge. 
- The **ionic charge** of an ion is the charge of the ion and its magnitude is the number of electrons gained or lost by the atom.
    - **Cation**: A positively charged ion (lost electrons)
    - **Anion**: A negatively charged ion (gained electrons)
- The ion charge is written as a superscript after the chemical symbol.
- Examples:
    - $\ce{Na+}$ is a sodium cation
    - $\ce{Cl-}$ is a chloride anion
    - $\ce{Al^{3+}}$ is an aluminum cation
    - $\ce{O^{2-}}$ is an oxide anion

## Electron Configuration

- The **energy state** of an electron is determined by the **quantum numbers**:
	- **Principal Quantum Number** ($n$)
		- $n=1,2,3,4,\dots$
        - Determines the **electron shell** 
        - Electrons with the same $n$ are in the same shell.
        - Orbitals with the same $n$ are said to be in the same shell.
        - The **energy level** of an electron is determined by the principal quantum number
        - The number of orbitals in a shell is $n^2$.
        - The maximum number of electrons in a shell is $2n^2$.
    - **Azimuthal Quantum Number** ($\ell$) (Angular Momentum Quantum Number)
        - Determines the shape of the orbital
		- $\ell=0,1,2,3,\dots,n-1$
        - Electrons with the same $n$ and $\ell$ are said to be in the same **subshell**
        - Orbitals with the same $n$ and $\ell$ are said to be in the same subshell (or sublevel)
        - For every subshell (given by $n$ and $\ell$):
            - The number of orbitals is $2\ell+1$.
            - The maximum number of electrons is $2(2\ell+1)$.
	- **Magnetic Quantum Number** ($m_{l}$)
        - Electrons with the same $n$, $\ell$, and $m_{l}$ are in the same **orbital**. (they have the same energy level, shape, and orientation)
        - Determines the orientation of the orbital 
		- $m_{l}=-\ell,\dots,0,\dots,\ell$
	- **Spin Quantum Number** ($m_{s}$)
        - Determines the orientation of the electron's spin
- Every atomic orbital can hold a maximum of two electrons.
- The **valence electrons** of an atom are the electrons in the **valence shell** (outermost shell) of the atom.
- The **core electrons** are the electrons in the inner shells of the atom. 
- energy level 
- Aufbau principle:
    - Electrons fill the lowest energy
- Pauli exclusion principle:
    - No two electrons in an atom can have the same set of four quantum numbers.
- Hund's rule:
    - Electrons fill orbitals singly before pairing up.

| Letter | $\ell$ | electrons $2(2\ell +1)$ | Shells containing it | Orbitals |
| ------ | ------ | ----------------------- | -------------------- | -------- |
| $s$    | $0$    | $2$                     | Every shell          | $s$                 |
| $p$    | $1$    | $6$                     | 2nd shell onwards    | $p_x$, $p_y$, $p_z$ |
| $d$    | $2$    | $10$                    | 3rd shell onwards    | $d_{xy}$, $d_{yz}$, $d_{xz}$, $d_{x^2-y^2}$, $d_{z^2}$ |
| $f$    | $3$    | $14$                    | 4th shell onwards    | |

| Shell | $n$ | $\ell=0$ | $1$  | $2$  | $3$  | Total electrons in shell ($2n^2$) |
| ----- | --- | -------- | ---- | ---- | ---- | --------------------------------- |
| $K$   | $1$ | $1s$     |      |      |      | $2$                               |
| $L$   | $2$ | $2s$     | $2p$ |      |      | $8$                               |
| $M$   | $3$ | $3s$     | $3p$ | $3d$ |      | $18$                              |
| $N$   | $4$ | $4s$     | $4p$ | $4d$ | $4f$ | $32$                              |
| $O$   | $5$ | $5s$     | $5p$ | $5d$ | $5f$ | $50$                              |

## Periodic Trends

### Coulomb's Law

$$\displaystyle  F \propto \frac{q_1 q_2}{r^2}$$
- $F$ is the magnitude of the force between two charged particles
- $q_1$ and $q_2$ are the charges of the particles
- $r$ is the distance between the particles

### Effective Nuclear Charge (Z-effective)

$$Z_{\mathrm {eff} }=Z-S$$

- $Z_\text{eff}$ is effective nuclear charge
- $Z$ is the atomic number (number of protons)
- $S$ is the **shielding constant**
	- It represents the portion of the nuclear charge that is screened from a valence electron by the other electrons in the atom. 
	- Because core electrons are most effective at screening a valence electron from the nucleus, the value of  is usually close to the number of core electrons

## Periodic Table Trends

- Effective Charge (Z-effective) 
- Atomic Radius
- Ionization Energy
	- The **ionization energy** of an atom or ion is the minimum energy required to remove an electron from the ground state of the isolated gaseous atom or ion
	- Highest for noble gases and halogens
	- Lowest for alkali metals (bottom left)
- Electron Affinity
	- Lowest for noble gases and alkali metals
	- Highest for halogens
- Electronegativity
	- Follows a similar trend to electron affinity
	- Increases from bottom left to top right of the periodic table

