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

## Multiplexor

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
>  
> The truth table of the 2-to-1 multiplexor is:
> 
> | $S$ | $C$ |
> | --- | --- |
> | 0   | $A$ |
> | 1   | $B$ |


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

- A **read-only memory** (ROM) is a memory device with fixed contents that can only be read, typically set at manufacturing. 
	- The **shape** (or **dimensions**) of a ROM is defined by:  
		- The **height** $2^m$ which is the number of addressable entries 
			- (where $m$ is the number of input lines)
		- The **width** $n$ which is the number of bits in each entry, equal to the number of output bits
		- The **totel number of bits** is $\text{width}\times\text{height}=n\cdot 2^m$
	- In our context, ROMs are used as structured logic to implement logic functions, where inputs represent addresses, and outputs are the data stored at those addresses.


> [!INFO] Comparison between PLA and ROM for implementing logic functions
> - ROMs are fully decoded, meaning: 
> 	- they store outputs for all possible input combinations, which results in exponential growth of entries with more inputs.
> 	- they are more flexible since they can implement any logic function with matching input and output sizes, without changing the ROM size
> - PLAs are partially decoded, meaning:
> 	- they store outputs for only the active product terms, thus, they are generally more efficient for implementing combinational logic functions
> 
> > [!EXAMPLE]
> > Following the previous truth table example, the PLA contains only the 7 active product terms, whereas the ROM contains all 8 possible entries. 

>[!INFO] Programmable ROM
> - A **programmable ROM** (PROM) is a type of ROM that can be programmed electronically after manufacturing when the designer determines its contents.
> - A **erasable PROM** (EPROM) is a programmable ROM that can be erased using ultraviolet light, allowing reprogramming during the design and debugging process.

## Don't Cares

- A **don't care** refers to a condition where the specific value of a variable (input or output) does not impact the operation or behavior of a system. This allows flexibility in logic optimization to minimize complexity.
	- An **output don't care** occurs when the output value of a logic function is irrelevant for a particular input combination. This provides freedom to assign any value to the output for such cases to simplify the overall logic.
	- An **input don't care** arises when certain inputs have no effect on the output for a specific combination of other inputs. In such cases, the input values can be treated as irrelevant (don't care), which enables further optimization of the logic.




> [!EXAMPLE] Example
> Consider a logic function, defined as follows: 
> - If A or B is 1, the output D is 1 (whatever the value of C)
> - If A or C is 1, the output E is 1 (whatever the value of B)
> - Output F is 1 if exactly one of the inputs is 1, although we do not care about F whenever D and E are both 1.
> 
> Here is the full truth table (without _don't cares_):
> 
> | In | | | Out | | |
> | --- | --- | --- | --- | --- | --- |
> | $A$ | $B$ | $C$ | $D$ | $E$ | $F$ |
> | 0 | 0 | 0 | 0 | 0 | 0 |
> | 0 | 0 | 1 | 1 | 0 | 1 |
> | 0 | 1 | 0 | 0 | 1 | 1 |
> | 0 | 1 | 1 | 1 | 1 | 0 |
> | 1 | 0 | 0 | 1 | 1 | 1 |
> | 1 | 0 | 1 | 1 | 1 | 0 |
> | 1 | 1 | 0 | 1 | 1 | 0 | 
> | 1 | 1 | 1 | 1 | 1 | 0 |
> 
> The truth table written with _output don't cares_ look like this:
> 
> | In | | | Out | | |
> | --- | --- | --- | --- | --- | --- |
> | $A$ | $B$ | $C$ | $D$ | $E$ | $F$ |
> | 0 | 0 | 0 | 0 | 0 | 0 |
> | 0 | 0 | 1 | 1 | 0 | 1 |
> | 0 | 1 | 0 | 0 | 1 | 1 |
> | $\color{LimeGreen}{\textsf{0}}$ | 1 | 1 | 1 | 1 | $\color{red}{\textsf{X}}$ |
> | 1 | $\color{Turquoise}{\textsf{0}}$ | $\color{Turquoise}{\textsf{0}}$ | 1 | 1 | $\color{red}{\textsf{X}}$ |
> | 1 | $\color{Turquoise}{\textsf{0}}$ | $\color{Turquoise}{\textsf{1}}$ | 1 | 1 | $\color{red}{\textsf{X}}$ |
> | 1 | $\color{Turquoise}{\textsf{1}}$ | $\color{Turquoise}{\textsf{0}}$ | 1 | 1 | $\color{red}{\textsf{X}}$ | 
> | $\color{LimeGreen}{\textsf{1}}$ | $\color{Turquoise}{\textsf{1}}$ | $\color{Turquoise}{\textsf{1}}$ | 1 | 1 | $\color{red}{\textsf{X}}$ |
> 
> If we also use the _input don't cares_, this truth table can be further simplified to: 
> 
> | In | | | Out | | |
> | --- | --- | --- | --- | --- | --- |
> | $A$ | $B$ | $C$ | $D$ | $E$ | $F$ |
> | 0 | 0 | 0 | 0 | 0 | 0 |
> | 0 | 0 | 1 | 1 | 0 | 1 |
> | 0 | 1 | 0 | 0 | 1 | 1 |
> | $\color{LimeGreen}{\textsf{X}}$ | 1 | 1 | 1 | 1 | $\color{red}{\textsf{X}}$ |
> | 1 | $\color{Turquoise}{\textsf{X}}$ | $\color{Turquoise}{\textsf{X}}$ | 1 | 1 | $\color{red}{\textsf{X}}$ |
> 
 

> [!INFO] 
> Logic minimization is critical to achieving efficient implementations. One tool useful for hand minimization of random logic is the _Karnaugh map_. Nevertheless, hand optimization of significant logic functions using K-maps can be challenging, both because of the size of the maps and their complexity, for this reason, design tools are used to automate the process.


## Arrays of Logic Elements

- A **bus** is a collection of data lines that is treated together as a single logical signal. 
	- (The term _bus_ is also used to indicate a shared collection of lines with multiple sources and uses.)
	- Thick lines in diagrams indicate buses. Width of buses (e.g., 32 bits) may be explicitly labeled.
- An **array** of logic elements 

> [!EXAMPLE] Example: A 32-bit multiplexor
> A multiplexor is arrayed 32 times to perform a selection (using **one** select line) between two 32-bit inputs. 
 ![[32-bit mux.png]]


## Arithmetic logic circuits

### Binary adders

#### Half Adder

![[Half Adder.svg|180]]

- A **half adder** addes two single binary digits $A$ and $B$, and outputs a sum bit $S$ and a carry out bit $C_{\text{out}}$
	- (sum) $S=A\oplus B=A\cdot \overline{B}+\overline{A}\cdot B$
	- (carry out) $C_{\text{out}}=A\cdot B$ (represents an overflow into the next digit of a multi-digit addition)

| In  |     | Out           |                            |
| --- | --- | ------------- | -------------------------- |
| $A$ | $B$ | $S$ <br>(XOR) | $C_{\text{out}}$ <br>(AND) |
| 0   | 0   | 0             | 0                          |
| 0   | 1   | 1             | 0                          |
| 1   | 0   | 1             | 0                          |
| 1   | 1   | 0             | 1                          |

#### Full Adder
![[Full Adder.png|180]]


- A **full adder** adds two bits $A$ and $B$ and accounts for values carried in as well as out, and outputs a sum bit $S$ and a carry out bit $C_{\text{out}}$
	- $S=A\oplus B\oplus C_{\text{in}}=(A\cdot \overline{B}\cdot \overline{C_{\text{in}}})+(\overline{A}\cdot B\cdot \overline{C_{\text{in}}})+(\overline{A}\cdot \overline{B}\cdot C_{\text{in}})+(A\cdot B\cdot C_{\text{in}})$
	- $C_{\text{out}}=(A\cdot B)+(C_{\text{in}}\cdot(A\oplus B))$

![[full adder using two half adders.svg|310]]

| In  |     |                 | Out |                  |
| --- | --- | --------------- | --- | ---------------- |
| $A$ | $B$ | $C_{\text{in}}$ | $S$ | $C_{\text{out}}$ |
| 0   | 0   | 0               | 0   | 0                |
| 0   | 0   | 1               | 1   | 0                |
| 0   | 1   | 0               | 1   | 0                |
| 0   | 1   | 1               | 0   | 1                |
| 1   | 0   | 0               | 1   | 0                |
| 1   | 0   | 1               | 0   | 1                |
| 1   | 1   | 0               | 0   | 1                |
| 1   | 1   | 1               | 1   | 1                |

#### Ripple-carry adder

#todo 
#### Carry-lookahead adder

#todo 
# ALU 

![[ALU#ALU Summary]]

# Sequential Logic

## Clock

- A **clock signal** is  
	- The **clock period** is the time for one full cycle of the clock signal
- The **clocking methodology** is the approach used to determine 
	- **Edge-triggered clocking**: all state changes occur on a clock edge, either **rising edge** or **falling edge**. (note: our default is _rising edge_, but sometimes we'll use _falling edge_)
- A **clock generator** is an electronic oscillator producing a periodic clock signal

- A **signal edge** is the transition of a signal from one level to another
	- A **rising edge** (or **positive edge**) is the transition from low to high
	- A **falling edge** (or **negative edge**) is the transition from high to low



- A **sequential logic** is
	- The **state** of a sequential logic is the current value of the memory elements
	- A **state element** 

- A **synchronous circuit** (or **synchronous logic**)
- An **asynchronous circuit** (or **asynchronous logic**)

- **SR latch** (Set-Reset latch) is a simple form of sequential logic that can store one bit of information
- **flip-flop** 
	- **JK flip-flop**

## Memory Elements

- **Memory elements**
- Memory elements are **unclocked** when they do not have any clock input (e.g. SR latch)

### SR Latch


![[SR latch (NOR).png|200]]

| $S$ | $R$ | Action             | $Q$ | $\overline{Q}$ |
| --- | --- | ------------------ | --- | -------------- |
| 0   | 0   | hold state (latch) | $Q$ | $\overline{Q}$ |
| 0   | 1   | reset              | 0   | 1              |
| 1   | 0   | set                | 1   | 0              |
| 1   | 1   | invalid            | 0   | 0              |


### D Latch

- inputs
	- $D$ data value
	- $C$ is the clock signal - indicates when the latch should read the value of D and store it
		- when $C=1$ (asserted), the latch is said to be **open** (or **transparent**), and the value of $Q$ is updated to the value of $D$
		- when $C=0$ (deasserted), the latch is said to be **closed** (or **opaque**), and the value of $Q$ is whatever value was last stored in the latch
- outputs
	- **Q** the value of the internal state
	- **$\overline{Q}$** the complement of $Q$
- this sturcture is called a **transparent latch** (or **level-sensitive latch**)


![[D latch (NOR).png|200]]

| $C$ | $D$ | $Q$ | $\overline{Q}$ |
| --- | --- | --- | -------------- |
| 0   | $x$ | $Q$ | $\overline{Q}$ |
| 1   | 0   | 0   | 1              |
| 1   | 1   | 1   | 0              |



### Flip-Flop

- Flip-flops are not transparent: their outputs change only on the clock edge
- The **setup time** $t_{\text{setup}}$ is the minimum time that the input signal must be valid before the clock edge
- The **hold time** $t_{\text{hold}}$ is the minimum time during which the input signal must be valid after the clock edge. (hold times are usually zero or very small)
- An input is **valid** (or **stable**)
#### D Flip-Flop

- A **D flip-flop** (**data** or **delay** flip-flop) 
- consists of two D latches (master and slave) connected in series, with the $Q$ output of the master connected to the $D$ input of the slave. and a clock signal connected to both latches, but inverted in the slave latch.

 ![[D flip-flop (falling-edge).png|350]]

- $D$ is the data input to be stored
- $Q$ is the current data stored in the flip-flop
- $C$ (or $CLK$) is the clock signal

>there is also d flip-flop with enable 

### Register File

- A **register** is a memory element that can hold a multibit datum of $n$ bits (such as a byte or a word), and it can be read and written. It can be implemented using $n$ D flip-flops, each storing one bit.
- A register file consists of a set of registers that can be read and written by supplying a register number to be accessed. it can be implemented with a decoder for each read and write port, and an array of registers
- In MIPS, a register file has $32$ registers, each storing a $32$-bit value, that is $32^2=1024$ bits in total implemented $1024$ D flip-flops where all connected to the same clock signal.
- In MIPS, we define a special register called **zero** that always contains the value zero, and it cannot be written to. (we do not present its implementation here)

#### Register Read

- _read port_: the _read register number_ input connected as the selector of $n$-to-1 multiplexor with $n$ registers as data inputs of the multiplexor that outputs the _read data_
- for $n$ registers of $m$ bits, a $\lfloor\log n\rfloor$-bit _Read Register Number_ input is used as the selector for $n$-to-1 multiplexor that outputs $m$-bit _Read Data_



![[Register File (read).png|300]]

- In MIPS, Two 5-bit lines (`read register 1` and `read register 2`) specify which registers to read (values between 0 and 31), using two 32-to-1 multiplexors.
- If `read register 1` and `read register 2` are the same, both outputs will contain the same value.

#### Register Write

- _write port_
- A _Clock_ signal is connected to the clock input of all flip-flops
	- TODO: does not appear in this diagram, but it is connected to the clock input of all flip-flops instead of the AND output, which will be connected to E in the actual implementation.
- A _Write Enable_ signal (will be called later _RegWrite_)
- A _Register Number_ input ($\lfloor\log n\rfloor=5$ bits) is implemented using a using a $\lfloor\log n\rfloor$-to-$n$ decoder (5-to-32) that each one of its $n=32$ outputs is connected with the _Write Enable_ signal using an AND gate to the clock input of the corresponding register flip-flop. 
- A _Register Data_ input (32 bits) is connected to the data input of the corresponding register flip-flop.


![[Register File (write).png]]




