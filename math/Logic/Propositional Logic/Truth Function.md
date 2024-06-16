
- A function $f:V^{n}\to V$ where $V$ is a set of truth values and $n$ is a natural number is called $n$-ary **truth function** 
- Example: [[Logic/Propositional Logic/Syntax#Logical Symbols|Logical Connectives]]

### Functional completeness

- A set of truth functions is called **functionally complete** if every truth function can be expressed using only the functions in the set.
	- קבוצת (מערכת) קשרים שלמה (מלאה) (see 4.1.2, 4.1.3, 3.3.1) 

- examples $\{ \lnot,\land \},\{ \lnot,\lor \},\{ \to,\mathsf{F}\},\{ \lnot,\land,\lor \},\{ \lnot,\to \}$
- non-example $\{ \land,\lor \}$


A set of truth functions is called **functionally complete** if it can express all possible truth tables by combining members of the set into a Boolean expression

# Boolean function

- A function $f:\{0,1\}^{k}\to\{0,1\}$ is called a **Boolean function**. (which is a truth function with the set of truth values $\{0,1\}$ or $\{\mathsf{F},\mathsf{T}\}$)


- The set $\{0,1\}$ is known as the **Boolean domain**.
- The number $k$ is a non-negative integer called the **arity** of the function, and it is the number of **arguments** the function takes.
  - In case of $k=0$, the function is a constant element of $\{0,1\}$.
- There are $2^{2^{k}}$ different Boolean functions of arity $k$; equal to the number of different truth tables with $2^{k}$ rows.


### Representation

A Boolean function may be specified in a variety of ways:

- Truth table: explicitly listing its value for all possible values of the arguments

