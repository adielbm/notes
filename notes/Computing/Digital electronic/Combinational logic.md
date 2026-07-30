

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

## Bus

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