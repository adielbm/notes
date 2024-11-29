# Boolean Algebra

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
\documentclass{standalone}
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

# Logic Circuits

- **logic circuits**
	- a **combinational logic** (מעגל צירופי) is a device consisting of logic gates whose outputs at any time are determined by the current inputs
	- a **sequential logic** (מעגל סדרתי) is a device consisting of logic gates whose outputs at any time are determined by the current inputs and the previous state of the device

- packaged building-block logic families can be divided into categories:
	- **resistor-transistor logic** (RTL) circuits are logic circuits built from resistors and transistors
	- **diode-transistor logic** (DTL) 
	- **transistor-transistor logic** (TTL)

- An **integrated circuit** (IC) is a device that contains many logic gates on a single chip of silicon
	- ICs have external electrical contact points called **pins**
	- A **package** is a plastic or ceramic case that holds the IC and connects the pins to the outside world
	- A **dual in-line package** (DIP) is a package with two parallel rows of pins
- A **discrete** component is an electronic device containing only a single element, such as a transistor or a resistor

# Combinational Logic

## Decoder

- A $n$-bit **decoder** is a logic block that takes an $n$-bit input and activates one of $2^n$ outputs
	- $\text{Out}_0, \text{Out}_1, \ldots, \text{Out}_{2^n-1}$ are the output lines
	- $n$ input lines
	- If the value of the input is $i$, then the $i$-th output will be true, and all other outputs will be false

>[!EXAMPLE] Example: 3-bit decoder
> 
> ![[3-bit decoder.png]]
> Only the output corresponding to the binary value of the input is true, as shown in the truth table. The label 3 on the input to the decoder says that the input signal is 3 bits wide.

### Encoder

- There is also a logic element called an **encoder** that performs the inverse function of a decoder, taking $2^n$ input and producing an $n$-bit output

> [!EXAMPLE] Example: 4-to-2 encoder
> 
> | $I_{3}$ | $I_{2}$ | $I_{1}$ | $I_{0}$ | $O_{1}$ | $O_{0}$ |
> | ------- | ------- | ------- | ------- | ------- | ------- |
> | 0       | 0       | 0       | 1       | 0       | 0       |
> | 0       | 0       | 1       | 0       | 0       | 1       |
> | 0       | 1       | 0       | 0       | 1       | 0       |
> | 1       | 0       | 0       | 0       | 1       | 1       |
>
> - Out of 16 possible input values (4 bits), only 4 are valid, so the others are invalid
> - A possible implementation of a 4-to-2 encoder (using two OR gates) is: 
> 	- $O_0=I_1+I_3$
> 	- $O_{1}=I_2+I_3$
> 	- Note that the input $I_{0}$ is not wired
> 
> ![[4-to-2 encoder.svg|230]]

### Priority Encoder

#todo 

- A **priority encoder** is an encoder 

## Enable

- An **enable** (E) is sometimes added to some combinational logic components, when its value is 1, the component is working as usual, but when it is 0, the component is disabled and all its outputs are 0


> [!EXERCISE] Exercise
> Implement a 3-to-8 decoder using two 2-to-4 decoders that have an _enable_ input. (how can we implement an enable over the 2-to-4 decoder?)

## Multiplexors

- A $n$-to-$1$ **multiplexor** (or **multiplexer**, **mux**, **data selector**) is a logic block consisting of: 
	- $n$ **data inputs** lines labeled $I_0, I_1, \ldots, I_{n-1}$
	- $\lceil\log_2 n \rceil$ **select lines** (or **control lines**) labeled $S_0, S_1, \ldots, S_{\lceil\log_2 n \rceil-1}$ 
	- A single **output line**
- The multiplexor selects the $i$ input line if the binary value formed by concatenating the select lines is $i$, and outputs the value of the selected input line (without modification)
- An implementation of a multiplexor with $n$ data inputs (and $\lceil\log_2 n \rceil$ select lines) basically consists of three parts:
	- A $\lceil\log_2 n \rceil$-bit decoder, where each one (of $n$) output lines corresponds to one of the data inputs 
	- An array of $n$ AND gates, each combining one of the data inputs with the corresponding decoder output
	- An OR gate that combines the outputs of the AND gates to produce the final output


>[!EXAMPLE] Example: 2-to-1 multiplexor
> ![[2-to-1 mux.png|400]]
> - (left) A 2-to-1 multiplexor with two data inputs ($A$ and $B$, labeled $0$ and $1$), a select line $S$, and an output $C$. 
> - (right) Its implementation using logic gates, which can be represented by $C=(A\cdot \overline{S})+(B\cdot S)$

> [!EXERCISE] Exercise: 4-to-1 multiplexor
> Draw an implementation using logic gates of 4-to-1 multiplexor with four data inputs ($I_0, I_1, I_2, I_3$), two select lines ($S_0, S_1$), and an output $O$.

## PLA
![[PLA.png|300]]

- A **programmable logic array** (PLA) is a structured-logic elemement that composed of:
	- A set of inputs and corresponding input complements
	- Two stages of logic:
		- (first) an array of AND gates that generate a set of product terms (minterms) of the inputs and their complements
		- (second) an array of OR gates that generate sum terms of the product terms, which are the outputs of the PLA 
- PLAs implement logic functions as a sum of products (SOP)


> [!EXAMPLE] PLA Example 
>
> | In  |     |     | Out |     |     |
> | --- | --- | --- | --- | --- | --- |
> | A | B | C | D | E |  F |
> | 0   | 0   | 0   | 0   | 0   | 0   |
> | 0   | 0   | 1   | 1   | 0   | 0   |
> | 0   | 1   | 0   | 1   | 0   | 0   |
> | 0   | 1   | 1   | 1   | 1   | 0   |
> | 1   | 0   | 0   | 1   | 0   | 0   |
> | 1   | 0   | 1   | 1   | 1   | 0   |
> | 1   | 1   | 0   | 1   | 1   | 0   |
> | 1   | 1   | 1   | 1   | 0   | 1   |
>
> - Since there are 7 unique product terms (with at least one true output), there will be 7 columns in the AND plane
> - There are 3 rows in the AND plane (one for each input)
> - There are 3 rows in the OR plane (one for each output)
> 
> ![[PLA implementation.png|380]]
>
Rather than drawing all the gates, designers often show just the position of AND gates and OR gates. 
 ![[PLA drawing.png]]
>
>- Rather than use inverters on the gates, usually all the inputs are run the width of the AND plane in both true and complement forms. 
>- Dots are used on the intersection of a product term signal line and an input line or an output line when a corresponding AND gate or OR gate is required. 
>	- A dot in the AND plane indicates that the input, or its inverse, occurs in the product term. 
>	- A dot in the OR plane indicates that the corresponding product term appears in the corresponding output.

> [!INFO] 
> The contents of a PLA are fixed when the PLA is created, although there are also forms of PLA-like structures, called _PALs_, that can be programmed electronically when a designer is ready to use them.


## ROM

- A **read-only memory** (ROM) is a memory device that stores data permanently

## Don't Cares





# Sequential Logic

- **SR latch** (Set-Reset latch) is a simple form of sequential logic that can store one bit of information
- **flip-flop** 
	- **JK flip-flop**


# Arithmetic logic circuits

## Binary adders

### Half Adder

- A **half adder** addes two single binary digits $A$ and $B$, and outputs a sum bit $S$ and a carry out bit $C_{\text{out}}$
	- The sum bit ($S$) is a XOR of $A$ and $B$
	- The carry out bit ($C_{\text{out}}$) is an AND of $A$ and $B$
	- The carry out bit represents an overflow into the next digit of a multi-digit addition


| $A$ | $B$ | $S$ | $C_{\text{out}}$ |
| --- | --- | --- | --------------- |
| 0   | 0   | 0   | 0               |
| 0   | 1   | 1   | 0               |
| 1   | 0   | 1   | 0               |
| 1   | 1   | 0   | 1               |


### Full Adder

- A **full adder** adds two bits $A$ and $B$ and accounts for values carried in as well as out, and outputs a sum bit $S$ and a carry out bit $C_{\text{out}}$
	- $S=A\oplus B\oplus C_{\text{in}}$
	- $C_{\text{out}}=(A\cdot B)+(C_{\text{in}}\cdot(A\oplus B))$



| $A$ | $B$ | $C_{\text{in}}$ | $S$ | $C_{\text{out}}$ |
| --- | --- | --------------- | --- | --------------- |
| 0   | 0   | 0               | 0   | 0               |
| 0   | 0   | 1               | 1   | 0               |
| 0   | 1   | 0               | 1   | 0               |
| 0   | 1   | 1               | 0   | 1               |
| 1   | 0   | 0               | 1   | 0               |
| 1   | 0   | 1               | 0   | 1               |
| 1   | 1   | 0               | 0   | 1               |
| 1   | 1   | 1               | 1   | 1               |




# ALU 
