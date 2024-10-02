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




- A **logic function**
- A **logic gate** (or simply **gate**) is a device that implements a logic function.
- Multiplexors
	- selector (or control) value
	- B.3 Combinational Logic B-11  -- Two-Level Logic and PLAs
- combinational logic (מעגל צירופי)
- sequential logic (מעגל סדרתי)

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
