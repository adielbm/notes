# Bohr model

- **electron orbit**
- _principal quantum number_ $n$
	- the radius of the orbit gets larger as $n$ increases
- $L = n \hbar$
- Bohr radius
- **Balmer series** (or **Balmer lines**)
- **Rydberg formula** for hydrogen
	- $\frac{1}{\lambda}=(R_{\ce{H}})\left( \frac{1}{n_{1}^2}-\frac{1}{n_{2}^2} \right)$

# Atomic orbitals 

- **electron shell**
	- orbitals with the same $n$ are in the same shell
	- electrons with the same $n$ are in the same shell
- **subshell**
	- Electrons with the same $n$ and $\ell$ are said to be in the same subshell
	- Orbitals with the same $n$ and $\ell$ are said to be **degenerate**, and they are in the same subshell (or sublevel) and they have the same energy level
	- For every subshell (given by $n$ and $\ell$):
		- The number of orbitals is $2\ell+1$.
		- The maximum number of electrons is $2(2\ell+1)$.
	- for a given value of $n$, the energies of subshells folllow order: $ns<np<nd<nf$ 
- **atomic orbital**
	- every atomic orbital can hold a maximum of two electrons
	- electrons with the same $n$, $\ell$, and $m_{l}$ are in the same orbital. (they have the same energy level, shape, and orientation)
	- **electron cloud**
- **principal quantum number** ($n$) (מספר קוונטי ראשי, מספר קוונטי יסודי)
	- $n=1,2,3,4,\dots$ (in X-ray notation: $\mathrm{K, L, M, N, \dots}$)
	- determines the electron shell 
	- higher $n$ → larger orbital 
	- higher $n$ → higher energy level (and larger distance from the nucleus)
	- The number of orbitals in a shell is $n^2$.
	- The maximum number of electrons in a shell is $2n^2$.
- **azimuthal quantum number** ($\ell$) (or **orbital angular momentum quantum number**)
	- determines the shape of the orbital
	- $\ell=0,1,2,3,\dots,n-1$ (letters: $s,p,d,f$)
- **magnetic quantum number** ($m_{l}$)
	- determines the orientation of the orbital 
	- $m_{l}=-\ell,\dots,0,\dots,\ell$
- **spin magnetic quantum number** ($m_{s}$)
	- (sometimes called [_spin quantum number_](https://en.wikipedia.org/wiki/Spin_quantum_number#Nomenclature))
	- determines the orientation of the electron's spin
	- spin-up ($\uparrow$) $m_s = +\frac{1}{2}$
	- spin-down ($\downarrow$) $m_s = -\frac{1}{2}$
- **valence electrons** (אלקטרוני ערכיות)
	- electrons in the **valence shell** (outermost shell) of the atom.
	- _number of valence electrons_
	- **valence** (or **valency**) of an atom
- The **core electrons** are the electrons in the inner shells of the atom. 
- energy level
- [[Quantum mechanics|Pauli exclusion principle]]
- **Aufbau principle** (or **Aufbau rule**)
    - "a maximum of two electrons are put into orbitals in the order of increasing orbital energy: the lowest-energy subshells are filled before electrons are placed in higher-energy orbitals." (Wikipedia)
- Pauli exclusion principle
    - No two electrons in an atom can have the same set of four quantum numbers.
- **Hund's rules**
    - Electrons fill orbitals singly before pairing up.
- **octet rule**
	- "atoms usually react in such a way as to obtain a noble gas configuration" [@Denniston, 2022]
	- "elements in groups 1A to 7A (1, 2, 13 to 17) react with other elements by forming ionic or covalent bonds to produce a stable electron arrangement, usually eight electrons in the outer shell." [@Timberlake, 2017]
	- "In covalent bond formation, atoms go as far as possible toward completing their octets by sharing electron pairs." [@Jones, 2016]

- **unpaired electron**
- **electron pair** (or **Lewis pair**)
	- **lone pair** (or **unshared pair**, **non-bonding pair**, or **electron pair**)
		- "Two paired electrons localized in the valence shell on a single atom. Lone pairs should be designated with two dots. The term 'nonbonding electron pair' is more appropriate, and is found in many modern text books." (_IUPAC Gold Book_)
	- **shared pairs** (or **bonding pairs**)

- **electron density** (or **electronic density**)
- isoelectronicity




| $\ell$ | subshell<br>letter | electrons <br>$2(2\ell +1)$ | shells containing it                  | orbitals                                               |
| ------ | ------------------ | --------------------------- | ------------------------------------- | ------------------------------------------------------ |
| $0$    | $s$                | $2$                         | Every shell                           | $s$                                                    |
| $1$    | $p$                | $6$                         | 2nd shell onwards                     | $p_x$, $p_y$, $p_z$                                    |
| $2$    | $d$                | $10$                        | 3rd shell onwards                     | $d_{xy}$, $d_{yz}$, $d_{xz}$, $d_{x^2-y^2}$, $d_{z^2}$ |
| $3$    | $f$                | $14$                        | 4th shell onwards                     | ...                                                    |
| $4$    | $g$                | $18$                        | 5th shell onwards <br>(theoretically) | ...                                                    |


| shell<br>name | $n$ | $\ell=0$ | $1$  | $2$  | $3$  | shell max electrons<br>$2n^2$   |
| ------------- | --- | -------- | ---- | ---- | ---- | ------------------------------- |
| $K$           | $1$ | $1s$     |      |      |      | $2$                             |
| $L$           | $2$ | $2s$     | $2p$ |      |      | $8={\color{gray}2+6}$           |
| $M$           | $3$ | $3s$     | $3p$ | $3d$ |      | $18={\color{gray}2+6+10}$       |
| $N$           | $4$ | $4s$     | $4p$ | $4d$ | $4f$ | $32={\color{gray}2+6+10+14}$    |
| $O$           | $5$ | $5s$     | $5p$ | $5d$ | $5f$ | $50={\color{gray}2+6+10+14+18}$ |




- $R(r)$ is the radial wavefunction
- $Y(\theta, \phi)$ is the angular wavefunction
- $\psi(r, \theta, \phi) = R(r) \cdot Y(\theta, \phi)$
- radial probability density $R(r)^2$
	- radial probability function $4\pi r^2 R(r)^2$
	- nodes and peaks 