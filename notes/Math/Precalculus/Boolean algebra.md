
- A **logic function** (or **Boolean function**) is a function that takes $n$ bits of input and produces a single bit of output.
	- Representations:
		- **Truth table** that contains $2^n$ rows (one for each possible combination of inputs) and $n+1$ columns (one for each input and one for the output)
		- **Logic equation** that represents the function in using other logic functions, especially, as:
			- **Sum-of-products** (SOP)
			- **Product-of-sums** (POS)
			- An expression that uses only AND, OR, and NOT
	- Simplification:
	    - **Karnaugh map** (K-map)
	    - **Quine–McCluskey algorithm**
	    - **Algebraic manipulation**

- A **logic gate** (or simply **gate**) is a device that implements a logic function.
- A **logical expression** 
- A **logic equation** 
- Two logic expressions are **equivalent** if


>[!TIP] Transformation from truth table to either SOP or POS form: 
> Truth table $\to$ SOP:
> 1. Find the miniterms for each row for which the output is 1
> 2. Sum (ORing) all the miniterms
> 
> Truth table $\to$ POS:
> 1. Find the mintems for each row for which the output is 0
> 2. Find the complement of the sum of the miniterms
> 3. Use De Morgan's laws to change miniterms to maxterms
> 
 > >[!EXAMPLE] Example: 
 > > Given the truth table:
 > > 
 > > | $A$ | $B$ | $F$ |   |
 > > | --- | --- | --- | --- |
 > > | 0   | 0   | 1   |  $\overline{A}\cdot\overline{B}$ |
 > > | 0   | 1   | 0   |  $\color{red}\overline{A}\cdot B$ |
 > > | 1   | 0   | 1 | $A\cdot\overline{B}$ |
 > > | 1 | 1 | 1 | $A\cdot B$ |
 > > 
 > > (SOP) $F=\overline{A}\cdot\overline{B}+A\cdot\overline{B}+A\cdot B$
 > > (POS) $F=\overline{({\color{red}\overline{A}\cdot B})}=A+\overline{B}$


## Logic Gates

```tex
\usepackage{circuitikz}[american]
\usetikzlibrary{matrix}
\tikzset{every node/.style={line width=0.2mm}} % Change the thickness here

\begin{document}
\sffamily
\begin{circuitikz}
    % Define the matrix layout with 3 columns and 2 rows, and name each node
    \matrix[matrix of nodes, column sep=3cm, row sep=1.2cm, nodes={anchor=center}] (m) {
        \node[buffer port] (buffer1) {}; & \node[not port] (not1) {}; \\
        \node[and port] (and1) {}; &  \node[nand port] (nand1) {}; \\
        \node[or port] (or1) {}; & \node[nor port] (nor1) {}; \\
		\node[xor port] (xor1) {}; & \node[xnor port] (xnor1) {}; \\
    };

	\node[left of=buffer1, xshift=-1cm] {BUFFER};
    \node[left of=and1, xshift=-1cm] {AND};
    \node[left of=or1, xshift=-1cm] {OR};
    \node[left of=not1, xshift=-1cm] {NOT};
    \node[left of=nand1, xshift=-1cm] {NAND};
    \node[left of=nor1, xshift=-1cm] {NOR};
    \node[left of=xor1, xshift=-1cm] {XOR};
    \node[left of=xnor1, xshift=-1cm] {XNOR};
\end{circuitikz}
\end{document}
```

| Logical operation | Operator | Notation              | eq. form                                                                                |
| ----------------- | -------- | --------------------- | --------------------------------------------------------------------------------------- |
|                   | NOT      | $\overline{A}$        |                                                                                         |
| logical sum       | OR       | $A+B$                 |                                                                                         |
| logical product   | AND      | $A\cdot B$            |                                                                                         |
|                   | NAND     | $\overline{A\cdot B}$ |                                                                                         |
|                   | NOR      | $\overline{A+B}$      |                                                                                         |
|                   | XOR      | $A\oplus B$           | $A\overline{B}+\overline{A}B=(A+B)\cdot (\overline{A}+\overline{B})$                    |
|                   | XNOR     | $A \odot B$           | $(A + \overline{B}) \cdot (\overline{A} + B)=A \cdot B + \overline A \cdot \overline B$ |
## Laws

- Identity law: 
	- $A+0=A$
	- $A\cdot 1=A$
- Zero and one law: (Annihilator)
	- $A+1=1$
	- $A\cdot 0=0$
- Inverse law: (Complemention)
	- $A+\overline{A}=1$
	- $A\cdot\overline{A}=0$
- Commutative law: 
	- $A+B=B+A$
	- $A\cdot B=B\cdot A$
- Associative law: 
	- $(A+B)+C=A+(B+C)$
	- $(A\cdot B)\cdot C=A\cdot(B\cdot C)$
- Distributive law: 
	- $A\cdot(B+C)=A\cdot B+A\cdot C$
	- $A+(B\cdot C)=(A+B)\cdot(A+C)$
- Double negation: 
	- $\overline{\overline{A}}=A$
- **De Morgan's laws**: 
	- $\overline{A\cdot B}=\overline{A}+\overline{B}$
	- $\overline{A+B}=\overline{A}\cdot\overline{B}$
