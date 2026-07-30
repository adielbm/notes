
- Logical symbols
	- variables $v_{0},v_{1},v_{2},\dots$
	- punctuation symbols: parentheses and commas
- Signature  https://www.cs.ox.ac.uk/people/james.worrell/lecture09.pdf
	- Constant symbols
	- Function symbols 

- **Terms**
	- Each individual variable $x_{k}$ and each constant symbol $c$ is a **term**
	- If $F$ is an $k$-ary function symbol, and $t_{1},\dots, t_{k}$ are terms, then $F(t_{1},\dots,t_{n})$ is a term

## Structural Induction 

we can define a func

- We can define a function $H$ from the set of terms to any other set
	- We define $H(t)$ for each atomic term
	- For each name of $n$-ary function $F$ and terms $t_{1},\dots ,t_{k}$ we define $H(F(t_{1},\dots,t_{k}))$ by the values of $H$


- Substitution
	- If $\alpha$ is the string $e_{1}e_{2}\cdots e_{k}$ and $\beta$ is a string. then a **substitution** of $\beta$ instead of $e_{i}$ in the string $\alpha$ is the string $e_{1}e_{2}\cdots e_{i-1}\beta e_{i+1}\cdots e_{k}$
	- ($d$ is variable?) $\alpha[\beta/d]$ is the string obtained by replacing each occurrences of $d$ in $\alpha$ with the string $\beta$.
	- If $t$ and $s$ are terms, $x$ is variable name, then a substitution of $s$ instead of $x$ in the string $t$ is the string $t[s/x]$  
	

- 5.2 #todo 


- A **structure** $M$ in first-order logic is defined as $M = \langle A; c_1^M, \ldots; F_1^M, \ldots \rangle$, where:
	- $A$ is a non-empty set called the domain.
	- $c_1^M, \ldots$ are constant symbols, each assigned to an element in $A$.
	- $F_1^M, \ldots$ are function symbols, each with an interpretation specifying how it operates on elements of $A$.



- $M=\langle{A;}\rangle$
	1. The set $A$ is nonempty and is called the domain of $M$. The set $A$ is sometimes denoted by $|M|$. 
	2. $M$ assigns to each $n$-ary predicate symbol $P$ an $n$-place relation $P^M\subseteq A^n$
	3. $M$ assigns to each constant symbol $c$ a member $c^M$ of the universe A. 
	4. $M$ assigns to each $n$-ary function symbol $f$ an $n$-ary function $f^{M}: A^{n}\to{A}$. 
	5. The equality symbol ̇$=$ will always be interpreted as “equality.”