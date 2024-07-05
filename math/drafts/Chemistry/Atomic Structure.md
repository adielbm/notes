
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



### Notation

- **Nuclear Symbol Notation**: $^{A}_{Z}\ce{X}$
    - $A$ is the mass number
    - $Z$ is the atomic number (optional if the element is known)
    - $\ce{X}$ is the chemical symbol of the element
    - Examples: 
        - (carbon-14) $\ce{^{14}_{6}C}$ or $\ce{^{14}C}$
        - (neon-20) $\ce{^{20}_{10}Ne}$ or $\ce{^{20}Ne}$
- **Hyphen Notation**: $\ce{X}\text{-}A$
    - $A$ is the mass number
    - $\ce{X}$ is the chemical symbol or name of the element
    - Examples:
        - (carbon-14) $\ce{C-14}$ or $\ce{carbon-14}$
        - (neon-20) $\ce{Ne-20}$ or $\ce{neon-20}$

## Unified Atomic Mass Unit (u)

- An **unified atomic mass unit** (u) (or **dalton** (Da)) is a non-SI unit of mass defined as $\frac{1}{12}$ of the mass of an unbound neutral atom of carbon-12 in its nuclear and electronic ground state and at rest.
    - The **atomic mass constant** is a constant defined as $m_{u} =\frac{1}{12} m(^{12}\text{C}) = 1 \, \text{u} = 1.66053906892(52) \times 10^{-27} \, \text{kg}$

## Atomic Mass

- The atomic mass ($m$ or $m_{\text{a}}$) is the mass of an atom
    - Although the SI unit of mass is the $\mathsf{kg}$, atomic mass is often expressed in the non-SI unit of unified atomic mass units (u).
    - Examples: 
        - $m(\ce{^{12}C})=12 \, \mathsf{u}$ (the atomic mass of an carbon-12 atom is $12 \, \mathsf{u}$)
        - $m(\ce{^{13}C})=13.0033548378 \, \mathsf{u}$ (the atomic mass of an carbon-13 atom is $13.0033548378 \, \mathsf{u}$)
    - Because substances are usually not isotopically pure, (i.e., they are a mixture of isotopes of the element) it is convenient to use the **average atomic mass** which is the weighted average of the atomic masses of the naturally occurring isotopes of the element to calculate the atomic mass of given sample of the element.
        - Example:
            - The natural abundance of $\ce{^{12}C}$ is $98.93\%$ and the natural abundance of $\ce{^{13}C}$ is $1.07\%$.
            - The average atomic mass of carbon is $m(\ce{C})=\left( m(\ce{^{12}C}) \times \text{NA}(\ce{^{12}C}) \right) + \left( m(\ce{^{13}C}) \times \text{NA}(\ce{^{13}C}) \right)=12.011 \, \mathsf{u}$ 
        - General formula for calculating the average atomic mass of an element:
            - $m(E)=\sum_i \left( m_i \cdot f_i \right)$, where:
                - $m(E)$ is the average atomic mass of the element $E$ (in $\mathsf{u}$)
                - $m_i$ is the atomic mass of the $i$-th isotope of the element (in $\mathsf{u}$)
                - $f_i$ is the natural abundance of the $i$-th isotope of the element (in $\%$)

## Relative Atomic Mass

> the meaning of the term _relative_ in this context is that the atomic mass is a dimensionless quantity, as it is the ratio of the mass of an atom to the unified atomic mass unit.

- The **relative isotopic mass** of a particular isotope of an element is the mass of the isotope relative to the mass of carbon-12.
    - It is defined as $m_i = \frac{m}{m_{\text{C}}}$, where:
        - $m$ is the atomic mass of the isotope (in $\mathsf{u}$)
        - $m_{\text{C}}$ is the atomic mass of $\ce{^{12}C}$ (in $\mathsf{u}$)
        - $m_i$ is the relative isotopic mass of the isotope (dimensionless)
    - Example:
        - The relative isotopic mass of $\ce{^{13}C}$ is $m_{\ce{^{13}C}}=\frac{13.0033548378}{12}=1.083$
- The **relative atomic mass** ($A_r$) is a dimensionless physical quantity.
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