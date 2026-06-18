

# Nuclide

- **nuclide** (or **nucleide**, **nuclear species**) (נוּקליד)
	- Nuclides' classification:
		- [[isotopes]] (equal $Z$) (see Wikipedia: [Isotope vs. nuclide](https://en.wikipedia.org/wiki/Isotope#Isotope_vs._nuclide))
		- isotones (equal $A$)
		- isobars (equal $N$)
- **atomic nucleus** (גרעין האטום)
	- "the small, dense region consisting of protons and neutrons at the center of the atom" (Wikipedia)

|                    | symbol      |                                                   |                                                                                       | aka                                          |
| ------------------ | ----------- | ------------------------------------------------- | ------------------------------------------------------------------------------------- | -------------------------------------------- |
| **atomic number**  | $Z$         | the number of protons in the nucleus of an atom   | also the number of electrons in a neutral atom                                        | **nuclear charge number**                    |
| **neutron number** | $N$         | the number of neutrons in the nucleus of an atom  |                                                                                       |                                              |
| **mass number**    | $A = Z + N$ | the number of **nucleons** (protons and neutrons) | It is approximately equal to the atomic mass of the atom in unified atomic mass units | **atomic mass number** or **nucleon number** |
| **neutron excess** | $D=N-Z$     |                                                   |                                                                                       |                                              |


# Nuclear stability

- **nuclear binding energy** (אנרגיית הקשר הגרעינית)
	- mass defect
- **valley of stability**
- **island of stability**
- metastability
- **stable nuclides**
- **magic numbers**
- radioactive
- **radioisotope** – an atom containing a radionuclide
- **radionuclide** – a radioactive nuclide

# Nuclear reaction

- **nuclear reaction**
	- "may refer either to a change in a nuclide induced by collision with another particle or to a spontaneous change of a nuclide without collision" (Wikipedia)
	- "A change that a nucleus undergoes (such as a nuclear transmutation)" [@Jones, 2016]
- **nuclear equation**
	- "A summary of the changes in a nuclear reaction, written in a form resembling a chemical equation." [@Jones, 2016]
- **nuclear chain reaction** (תגובת שרשרת גרעינית)
- **nuclear fusion** (היתוך גרעיני)
	- $\ce{^2_{1}H + ^3_{1}H->^4_{2}H + ^1_{0}n + energy}$
- **nuclear fission** (ביקוע גרעיני)
	- $\ce{^1_{0}n + ^{235}_{92}U -> ^{236}_{92}U -> ^{92}_{36}Kr + ^{141}_{56}Ba + 3 ^{1}_{0}n + energy}$
	- induced fission
- **nuclear transformation**

# Radioactive decay

- **radioactivity**
- **radioactive decay** (or **nuclear decay**, or **radioactivity**) (דעיכה רדיואקטיבית)
- **induced radioactivity** (or **artificial radioactivity**)
	- in contrast to "natural radioactivity"
- spontaneous fission

- **parent nucleus**
	- "In a nuclear reaction, the nucleus that undergoes disintegration or transmutation" [@Jones, 2016]
- **daughter nucleus** (or **daughter product**, **decay product**) (תוצר דעיכה)
	- "A nucleus that is the product of a nuclear decay." [@Jones, 2016]
- **intermediate nucleus**
- **decay chain** (or **radioactive series**) (שרשרת דעיכה)


- **alpha radiation** (or **alpha rays**)
	- **alpha decay** (or **α-decay**) $\ce{^{A}_{Z}X -> ^{A-4}_{Z-2}Y + ^{4}_{2}He}$
- **beta radiation** (or **beta ray**)
	- **beta decay** (or **β-decay**) 
		- $\ce{^{A}_{Z}X -> ^{A}_{Z+1}Y + e^- + \bar{\nu}_e}$
		- $\ce{^1_{0}n->^1_{1}p + ^0_{-1}e}$
	- **positron emission** (or **beta plus decay**, **β+ decay**) 
		- $\ce{^{A}_{Z}X -> ^{A}_{Z-1}Y + e^+ + \nu_e}$
		- $\ce{^1_{1}p->^1_{0}n + ^0_{1}e}$
- proton radiation
- **neutron radiation** $\ce{^{A}_{Z}X -> ^{A-1}_{Z}Y + ^{1}_{0}n}$
- **electron capture**
	- $\ce{^{A}_{Z}X + ^{0}_{-1}e -> ^{A}_{Z-1}Y}$
	- $\ce{^1_{1}p + ^0_{-1}e ->^1_{0}n}$
- **gamma radiation** (or **gamma ray**)
	- **gamma decay**


|                  | [[Particles\|particle]] | $^{A}_{Z}\ce{E}^q$                                                   | $\ce{^{\mathit{A}}_{q}x}$              | mass ($\mathrm{u}$) |
| ---------------- | ----------------------- | -------------------------------------------------------------------- | -------------------------------------- | ------------------- |
| alpha particle   | Helium-4                | $\alpha$, $\ce{\alpha^{2+}}$, $\ce{He^{2+}}$, $^{4}_{2}\ce{He^{2+}}$ |                                        | $\approx 4.0015$    |
| β− particle <br> | electron                | $\ce{\beta}$                                                         | $\ce{^0_{-1}e}$, $\ce{^{0}_{-1}\beta}$ | $1\,m_\mathrm{e}$   |
| β+ particle      | antielectron            | $\ce{\beta^+}$, $\ce{e^+}$                                           | $\ce{^0_{+1}e}$, $\ce{^{0}_{+1}\beta}$ | $1\,m_\mathrm{e}$   |
| gamma            | photon                  | $\gamma$                                                             | $\ce{^0_{0}\gamma}$                    | 0                   |


## Half-life

- **half-life** ($t_{1/2}$), where: 
	- $N(t)=N_0 e^{-\lambda t}$ is an exponential decay function, where $\lambda$ is the decay constant. It gives the amount remaining after time $t$.
	- $t_{1/2}=\frac{\ln(2)}{\lambda}$ is the time required for a quantity to reduce to half of its initial value.
	- $N(n t_{1/2})=N_0 \cdot (1/2)^n$ is the amount after $n$ half-lives.
		- $\frac{1}{2}$ is the **decay factor** per half-life.
		- $n=t/t_{1/2}$
- $\displaystyle\frac{dN}{dt} = -\lambda N$
- $A = -\frac{dN}{dt} = \lambda N$ is the activity


## Measurement

| quantity                                   |                                                  | SI unit           | other units    |
| ------------------------------------------ | ------------------------------------------------ | ----------------- | -------------- |
| **activity** (or **total activity**) ($A$) | rate of decay in a sample                        | $\mathrm{B}$      | $\mathrm{Cu}$  |
| **specific activity** ($a$)                | activity per unit mass                           | $\mathrm{B / kg}$ |                |
| **radiation exposure** ($X$)               | ionization produced                              | $\mathrm{C/kg}$   | $\mathrm{R}$   |
| **absorbed dose** ($D$)                    | absorbed dose of ionizing radiation              | $\mathrm{Gy}$     | $\mathrm{rad}$ |
| **equivalent dose** ($H$)                  | absorbed dose adjusted for radiation type damage | $\mathrm{Sv}$     | $\mathrm{rem}$ |
| **effective dose** ($E$)                   |                                                  | $\mathrm{Sv}$     | $\mathrm{rem}$ |


### units

- **becquerel** ($\mathrm{B}$) (בקרל) ($1\,\mathrm{B}=1\,\mathrm{s^{-1}}$) an activity of one per second on average
- **curie** ($\mathrm{Cu}$), $1\,\mathrm{Cu}=3.7 \times 10^{10}\,\mathrm{B}$
- **gray** ($\mathrm{Gy}$), $1\,\mathrm{Gy}=1\,\mathrm{J \cdot kg^{-1}}$
- **rad** ($\mathrm{rad}$), $1\,\mathrm{rad}=0.01\,\mathrm{Gy}$
- **röntgen** (or **roentgen**) ($\mathrm{R}$), $1\,\mathrm{R}=2.58 \times 10^{-4}\,\mathrm{C/kg}$
- **roentgen equivalent man** (**rem**), $1\,\mathrm{rem}=10^{-2}\,\mathrm{Sv}$
- **sievert** ($\mathrm{Sv}$), $1\,\mathrm{Sv}=1\,\mathrm{m^{2} \cdot s^{-2} }$
- **lethal dose**
	- **median lethal dose** ($\text{LD}_{50}$)
		- "the dose required to kill half the members of a tested population after a specified test duration" (Wikipedia)
		- $\approx 500\,\mathrm{rem}$


# Applications

- **nuclear power** (אנרגיה גרעינית)
- **nuclear reactor** (כור גרעיני)
	- **breeder reactor** (כור תרבית, כור דוגר)
- **nuclear medicine** (or **nuclear radiology**) (רפואה גרעינית)
- **medical imaging**
- **radiometric dating** (or **radioactive dating**) (תיארוך רדיומטרי)
- radioactive waste
# Realted topics

- radiochemistry
- radiation chemistry
- nuclear physics