# Alphabet

- An **alphabet** is a nonempty finite set $\Sigma$ of **symbols** (or **letters**).  
	- Symbols are typically denoted by `a, b, c, ...`.  
# Strings 

- A **string** over an alphabet $\Sigma$ is a finite sequence of symbols from $\Sigma$, usually written without separators.  
	- Strings are typically denoted by lowercase letters $w, x, y, z, ...$.  
- The **length** of a string $w$, written $|w|$, is the number of symbols in $w$.  
- The set of all possible strings over an alphabet $\Sigma$ is denoted by $\Sigma^*$.  
- The string of length zero is called the **empty string**, denoted by $\varepsilon \in \Sigma^*$.
	- The empty string is a substring of every string.  
	- $\varepsilon w = w \varepsilon = w$
	- $|\varepsilon| = 0$
- A **prefix** of a string $w$ is a string $u$ such that $w = uz$ for some string $z$.  
- A **suffix** of a string $w$ is a string $v$ such that $w = zv$ for some string $z$.  
- A **substring** of a string $w$ is a string $t$ such that $w = put$ for some strings $p, s \in \Sigma^*$.
- A **proper** prefix/suffix/substring is a prefix/suffix/substring that is not equal to $w$.  
- The **lexicographic order** of strings follows dictionary order.  
- The **shortlex order** (or **string order**) is a lexicographic order where shorter strings precede longer ones.  
## Operations  

- For strings $x, y \in \Sigma^*$, their **concatenation** is written as $xy$ or $x \cdot y$ and is the string formed by appending $y$ to $x$.  
- The **reverse** of a string $w$, written $w^\mathcal{R}$, is the string obtained by writing $w$ in the opposite order.  
- A **power** of a string $x$, written $x^k$, represents $x$ concatenated with itself $k$ times.  

# Grammar

- A **formal grammar** is a tuple $G=(V,\Sigma, R, S)$ where
	- $V$ is a finite set of **variables** (or **non-terminals**)
		- Symbolized by $A,B,\dots$
		- (In other areas, these are called _syntactic categories_)
	- $\Sigma$ is a finite set of **terminals** (with $\displaystyle V$ and $\displaystyle \Sigma$ disjoint)
		- Symbolized by $a,b,\dots$
		- This is the alphabet of the language
	- $R$ is a finite set of **rules** (or **productions**)
		- A **rule** is a string of the form $(\Sigma \cup N)^*N(\Sigma \cup N)^*\to(\Sigma \cup N)^*$ 
		- A **$\varepsilon$-rule** is a rule of the form $A\to \varepsilon$, where $A\in V$.
		- An **unit rule** is a rule of the form $A\to B$, where $A,B\in V$.
		- A variable $A$ is **nullable** if $A\overset{*}\Rightarrow \varepsilon$.
	- $S\in V$ is the **start variable**
# Languages

- Any subset $L \subseteq \Sigma^*$ is called a **language** over $\Sigma$.  
	- A language is **prefix-free** if no string in it is a proper prefix of another.  
- The strings in a language are called **words**.  
- The empty set $\emptyset$ is a language, called the **empty language**.
	- $L \cdot\emptyset=\emptyset \cdot L  = \emptyset$
	- $\emptyset^*=\{\varepsilon\}$
	- $\emptyset$ is regular
	- $\emptyset^+=\emptyset$
- The set $\{\varepsilon\}$ is a language (sometimes called the **empty string language**)
	- $\{\varepsilon\}=\emptyset^*$
	- $\{\varepsilon\}$ is regular
	- $\{\varepsilon\}^*=\{\varepsilon\}$

- $\displaystyle L^*=\bigcup_{i=0}^{\infty} L^i$	
- $L^0=\{\varepsilon\}$
- $L\cdot \{\varepsilon\} = \{\varepsilon\} \cdot L = L$

### Operations & Closure Properties 

| Operation     |                                                                            | Regular | CFL | Decidable (R) | Turing-recognizable (RE) |
| ------------- | -------------------------------------------------------------------------- | ------- | --- | ------------- | ------------------------ |
| Union         | $L_1 \cup L_2 = \{w \mid w \in L_1 \lor w \in L_2\}$                       | Yes     | Yes | Yes           | Yes                      |
| Intersection  | $L_1 \cap L_2 = \{w \mid w \in L_1 \land w \in L_2\}$                      | Yes     | ╳   | Yes           | Yes                      |
| Complement    | $\overline{L_1} = \{w \mid w \not\in L_1\}$                                | Yes     | ╳   | Yes           | ╳                        |
| Concatenation | $L_1 \cdot L_2 = \{wz \mid w \in L_1 \land z \in L_2\}$                    | Yes     | Yes | Yes           | Yes                      |
| Kleene Star   | $L_1^{*} = \{\varepsilon\} \cup \{wz \mid w \in L_1 \land z \in L_1^{*}\}$ | Yes     | Yes | Yes           | Yes                      |
| Reverse       | $L^\mathcal{R} = \{w^\mathcal{R} \mid w \in L\}$                           | Yes     | Yes | Yes           | Yes                      |
| Homomorphism  |                                                                            | Yes     | Yes | ╳             | Yes                      |

### Classification

| Chomsky Hierarchy | Language/Grammar                        | Abstract Machine         |
| ----------------- | --------------------------------------- | ------------------------ |
| Type-0            | Turing-recognizable (RE) / Unrestricted | Turing Machine           |
| Type-1            | Context-Sensitive                       | Linear Bounded Automaton |
| Type-2            | Context-Free                            | Pushdown Automaton       |
| Type-3            | Regular                                 | Finite State Automaton   |



