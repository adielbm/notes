# Logic Gates


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




- A **logic function** (or **Boolean function**) is a function that takes one or more bits of input and produces a single bit of output.
- A **logic gate** (or simply **gate**) is a device that implements a logic function.
- Multiplexors
	- selector (or control) value
	- B.3 Combinational Logic B-11  -- Two-Level Logic and PLAs
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


# Sequential Logic

- **SR latch** (Set-Reset latch) is a simple form of sequential logic that can store one bit of information
- **flip-flop** 
	- **JK flip-flop**


# Boolean Algebra

| Logic Gate |                |                 |
| ---------- | -------------- | --------------- |
| OR         | $A+B$          | logical sum     |
| AND        | $A\cdot B$     | logical product |
| NOT        | $\overline{A}$ |                 |

## Laws

- Identity law: $A+0=A$, $A\cdot 1=A$
- Zero and one law: $A+1=1$, $A\cdot 0=0$
- Inverse law: $A+\overline{A}=1$, $A\cdot\overline{A}=0$
- Commutative law: $A+B=B+A$, $A\cdot B=B\cdot A$
- Associative law: $(A+B)+C=A+(B+C)$, $(A\cdot B)\cdot C=A\cdot(B\cdot C)$
- Distributive law: $A\cdot(B+C)=A\cdot B+A\cdot C$, $A+(B\cdot C)=(A+B)\cdot(A+C)$
