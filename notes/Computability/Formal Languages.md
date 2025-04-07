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
	- $S\in V$ is the **start variable**
# Languages

- Any subset $L \subseteq \Sigma^*$ is called a **language** over $\Sigma$.  
	- A language is **prefix-free** if no string in it is a proper prefix of another.  
- The strings in a language are called **words**.  
### Operations & Closure Properties 

| Operation     |                                                                            | Regular | CFL |
| ------------- | -------------------------------------------------------------------------- | ------- | --- |
| Union         | $L_1 \cup L_2 = \{w \mid w \in L_1 \lor w \in L_2\}$                       | Yes     | Yes |
| Intersection  | $L_1 \cap L_2 = \{w \mid w \in L_1 \land w \in L_2\}$                      | Yes     | No  |
| Complement    | $\overline{L_1} = \{w \mid w \not\in L_1\}$                                | Yes     | No  |
| Concatenation | $L_1 \cdot L_2 = \{wz \mid w \in L_1 \land z \in L_2\}$                    | Yes     | Yes |
| Kleene Star   | $L_1^{*} = \{\varepsilon\} \cup \{wz \mid w \in L_1 \land z \in L_1^{*}\}$ | Yes     | Yes |
| Reverse       | $L^\mathcal{R} = \{w^\mathcal{R} \mid w \in L\}$                           | Yes     | Yes |

### Classification

| Chomsky Hierarchy | Language/Grammar           | Abstract Machine         |
| ----------------- | -------------------------- | ------------------------ |
| Type-0            | Recursively Enumerable     | Turing Machine           |
| Type-1            | Context-Sensitive          | Linear Bounded Automaton |
| Type-2            | [[#Context-Free Language]] | Pushdown Automaton       |
| Type-3            | [[#Regular Language]]      | Finite State Automaton   |


## Regular Language

- Let $A$ and $B$ languages. We define the **regular operations** as follows:
	- **Union**: $A\cup B = \{x\mid x\in A \text{ or } x\in B\}$
	- **Concatenation**: $A\circ B = \{xy\mid x\in A \text{ and } y\in B\}$
	- **Kleene Star**: $A^* = \{x_1x_2\dots x_n\mid n\geq 0 \text{ and each } x_i\in A\}$

- A language is called a **regular language** if some finite automaton recognizes it.
- (1.45,7,9) The class of regular languages is closed under the union, concatenation, and Kleene star operations. That is, if $\displaystyle L_1$ and $\displaystyle L_2$ are regular languages, then so are
	- $\displaystyle L_1\cup L_2$
	- $\displaystyle L_{1} \circ L_{2}$
	- $\displaystyle L_1^*$
- (1.40) A language is regular iff some NFA recognizes it.
- (1.54) A language is is regular iff some regular expression describes it.
- (1.70, **Pumping Lemma**) If $\displaystyle A$ is a regular language, then there exists a number $p$ (the **pumping length**) such that every string $s\in A$ of length at least $p$, can be written as $s=xyz$, satisfying the following conditions:
	- $\forall i\geq 0, xy^iz\in A$
	- $|y|>0$
	- $|xy|\leq p$

### Finite Automata

- A **deteministic finite automaton** (DFA) is a 5-tuple $M=(Q,\Sigma,\delta,q_0,F)$
	- $Q$ is a finite set of **states**
	- $\Sigma$ is an alphabet
	- $\delta$ is a **transition function**
	- $q_0$ is the **start state**
	- $F$ is the **set of accept states**
- A **nondeterministic finite automaton** (NFA) is a 5-tuple $M=(Q,\Sigma,\delta,q_0,F)$
	- $Q$ is a finite set of states
	- $\Sigma$ is an finite alphabet
	- $\delta:Q\times \Sigma_\varepsilon \to \mathcal{P}(Q)$ is the transition function
	- $q_0\in Q$ is the start state
	- $F\subseteq Q$ is the set of accept states
- (1.39) Every NFA has an equivalent DFA.
- (exercise 1.11) Every NFA can be converted to an equivalent one that has a single accept state.
### Regular Expressions

- Say that $R$ is a **regular expression** if $R$ is one of the following:
	1. $a$ for some $a\in \Sigma$
	2. $\varepsilon$
	3. $\emptyset$
	4. $(R_1\cup R_2)$, where $R_1$ and $R_2$ are regular expressions
	5. $(R_1\circ R_2)$, where $R_1$ and $R_2$ are regular expressions
	6. $(R_1^*)$, where $R_1$ is a regular expression
- A regular expression $R$ represents the language $L(R)$ as follows:
	- $L(a) = \{a\}$
	- $L(\varepsilon) = \{\varepsilon\}$
	- $L(\emptyset) = \emptyset$
	- $L((R_1\cup R_2)) = L(R_1)\cup L(R_2)$
	- $L((R_1\circ R_2)) = L(R_1)\circ L(R_2)$
	- $L((R_1^*)) = (L(R_1))^*$

## DFA to Regular Expression (using GNFA)

- A **generalized nondeterministic finite automaton** (GNFA) is a 5-tuple, $(Q,\Sigma,\delta,q_{\text{start}},q_{\text{accept}})$, where 
	- $Q$ is the finite set of states
	- $\Sigma$ is the input alphabet
	- $\delta:(Q\setminus \{q_{\text{accept}}\})\times(Q\setminus \{q_{\text{start}}\}\longrightarrow\mathcal{R}$ is the transition function (where $\mathcal{R}$ is the set of all regular expressions over $\Sigma$)
	- $q_{\text{start}}\in Q$ is the start state
	- $q_{\text{accept}}\in Q$ is the accept state
- A GNFA accepts a string $w\in\Sigma^*$ if $w=w_{1}w_{2}\cdots w_{k}$, where $w_{i}\in\Sigma^*$ and there exists a sequence of states $q_{0},q_{1},\dots,q_{k}$ such that:
	- $q_{0}=q_{\text{start}}$
	- $q_{k}=q_{\text{accept}}$
	- For each $i$, we have $w_i\in L(R_{i})$, where $R_{i}=\delta(q_{i-1},q_{i})$; 


#### Ripping States 

- In the old GNFA, if
	- $q_i$ goes to $q_{\mathrm{rip}}$ with an arrow labeled $R_1$
	- $q_{\mathrm{rip}}$ goes to itself with an arrow labeled $R_2$
	- $q_{\mathrm{rip}}$ goes to $q_j$ with an arrow labeled $R_3$
	- $q_i$ goes to $q_j$ with an arrow labeled $R_4$
- Then, in the new GNFA,
	- $q_i$ goes to $q_j$ with an arrow labeled $(R_1)(R_2)^*(R_3)\cup(R_4)$
	- $q_{\mathrm{rip}}$ is removed from the GNFA


```tikz
\usepackage{tikz}
\usetikzlibrary{automata, arrows.meta, positioning}
\usepackage{amssymb}
\begin{document}
\begin{tikzpicture}[
      shorten >=3pt,
      bend angle=20,
      inner sep=5pt,
	node distance=60pt,
      thick,
      >={Stealth[round]},
      initial text=start,
      accepting by double/.style={double, double distance=1.5pt},
      on grid]
  
  % Left diagram
  \node[state] (q_i) {$q_i$};
  \node[state] (qr) [below right=of q_i] {$q_\mathrm{rip}$};
  \node[state] (q_j) [above right=of qr] {$q_j$};

  \draw (q_i) edge [bend left,above, ->] node[auto]{$R_4$} (q_j);
  \draw (q_i) edge[bend right, below, ->] node[below left]{$R_1$} (qr);
  \draw (qr) edge [bend right,above, ->] node[below right]{$R_3$} (q_j);
  \draw (qr) edge[loop below, ->]node[auto]{$R_2$} (qr);

  % Spacing between the two diagrams
  \node at (5, 0) {$\scalebox{2}{$\rightsquigarrow$}$}; % Empty node to add some space between the two diagrams
  
  % Right diagram
  \node[state] (q_i2) at (7, 0) {$q_i$};
  \node[state] (q_j2) [right=150pt of q_i2] {$q_j$};
  \draw (q_i2) edge [above, ->] node[auto]{$(R_1)(R_2)^*(R_3)\cup(R_4)$} (q_j2);
\end{tikzpicture}
\end{document}

```

### Regular Grammar

- A **regular grammar** is a formal grammar $G=(V,\Sigma,R,S)$ in which each production rule is one of the following forms: (where $A,B,S\in V$ and $a\in \Sigma$)
	- $A\to aB$
	- $A\to a$
	- $S\to \varepsilon$
- Every regular language is generated by a regular grammar.
- Every regular grammar generates a regular language.

### Non-Regular Languages

- A language is **non-regular** if it is not regular.
- The class of non-regular languages is closed under the complement operation.



## Context-Free Language

- A **context-free grammar** (CFG) is a formal grammar $G=(V,\Sigma,R,S)$ in which each production rule is of the form $A\to w$, where $A\in V$ and $w\in (V\cup \Sigma)^*$.
- Let $G=(V,\Sigma,R,S)$ be a CFG. 
	- If $u,v,w\in(V\cup \Sigma)^*$ and $A\to w$ is a rule, then we say that $uAv$ **yields** $uwv$, written $uAv\Rightarrow uwv$
	- A **derivation** of a string $w\in \Sigma^*$ in $G$ is a sequence of substitutions of the form:
		- $S\Rightarrow u_1\Rightarrow u_2\Rightarrow \dots \Rightarrow u_n = w$, where each $u_i$ is in $(V\cup \Sigma)^*$
		- If such a derivation for $w$ exists in $G$, we say that $G$ **generates** $w$ (or $S$ **derives** $w$) and write $S\overset{*}\Rightarrow w$
	- The language $L(G)=\{w\in \Sigma^*\mid S\overset{*}\Rightarrow w\}$ (which is the set of all strings generated by $G$) is called the **language generated by $G$** and is said to be a **context-free language** (CFL).
	- A derivation of a string $w$ is a **leftmost derivation** if at every step the leftmost remaining variable is the one replaced.
	- A string $w$ is said to be derived **ambiguously** in $G$ if it has two or more different leftmost derivations.
- A CFG is **ambiguous** if it generates at least one string ambiguously.
- A CFG is ambiguous iff it generates some string with two different parse trees.
- There is a one-to-one and onto correspondence between parse trees and leftmost derivations, meaning that every parse tree uniquely determines a left-most derivation and each left-most derivation uniquely determines a parse tree.
- Remarks:
	- There can be multiple CFGs that generate the same language, moreoever, some of these may be ambiguous while others are unambiguous.
- A language is **inherently ambiguous** if all CFGs that generate it are ambiguous.
- A CFG is in **Chomsky normal form** if every rule is of the form $A\to BC$, $A\to a$, or $S\to \varepsilon$, where $A,B,C\in V$, $a\in \Sigma$, and $S$ is the start variable, and $B$ and $C$ are not $S$.
	- If $G$ is a CFG in Chomsky normal form, and $w\in L(G)$, then $|w|\leq 2^{|h|}-1$, where $h$ is the height of the parse tree for $w$.
- Every CFL is generated by a CFG in Chomsky normal form.
- **$\varepsilon$-rules** are rules of the form $A\to \varepsilon$.
- **Unit rules** are rules of the form $A\to B$.
- A variable $A$ is **nullable** if $A\overset{*}\Rightarrow \varepsilon$.
- A **parse tree** for a string $w\in \Sigma^*$ with respect to a CFG $G$ is a rooted ordered tree in which:
	- The root is labeled by the start variable $S$
	- The leaves are labeled by the symbols of $w$
	- Each internal node is labeled by a variable $A$ and has children labeled $X_1,\dots,X_n$ if $A\to X_1\dots X_n$ is a rule in $G$


- Let $M=(Q,\Sigma,\delta,q_0,F)$ be a DFA. We can convert $M$ to a CFG $G=(V,\Sigma,R,S)$ as follows:
	1. Make a variable $R_i$ for each state $q_i\in Q$
	2. Add a rule $R_i\to aR_j$ to the CFG if $\delta(q_i,a)=q_j$
	3. Add a rule $R_i\to \varepsilon$ if $q_i\in F$
	4. Make $R_0$ the start variable of the CFG, where $q_0$ is the start state of $M$


### Pushdown Automata (PDA)

- A **pushdown automaton** (PDA) is a 6-tuple $M=(Q,\Sigma,\Gamma,\delta,q_0,F)$, where $Q$, $\Sigma$, $\Gamma$, and $F$ are all finite sets, and
	- $Q$ is the set of states
	- $\Sigma$ is the input alphabet
	- $\Gamma$ is the stack alphabet
	- $\delta:Q\times \Sigma_\varepsilon\times \Gamma_\varepsilon\longrightarrow \mathcal{P}(Q\times \Gamma_\varepsilon)$ is the transition function
	- $q_0\in Q$ is the start state
	- $F\subseteq Q$ is the set of accept states
- A pushdown automaton $M=(Q,\Sigma,\Gamma,\delta,q_0,F)$ **accepts** a string $w\in \Sigma^*$ if there exists a sequence of states $r_0,r_1,\dots,r_m\in Q$ and strings $s_0,,s_1,\dots,s_m\in \Gamma^*$ such that:
	- $r_0=q_0$ and $s_0=\varepsilon$
	- For $i=0,1,\dots,m-1$, we have $(r_i,b)\in\delta(r_{i},w_{i+1},a)$, where $s_i=at$ and $s_{i+1}=bt$ for some $a,b\in \Gamma_\varepsilon$ and $t\in \Gamma^*$.
	- $r_m\in F$
- A PDA can be represented using a state diagram, where each transition is labeled by the notation "$a,b\to c$" to denote that the automaton: reads $a$ from the input; pops $b$ from the stack; and pushes $c$ onto the stack.
- (2.20) A language is context free iff some PDA recognizes it.
- (2.32) Every regular language is context free.

## Context-Sensitive

- A **context-sensitive grammar** is a formal grammar $\displaystyle {\textstyle G=(V,\Sigma,R,S)}$ in which each production rule is either of the form $S\to \varepsilon$ or of the form $\alpha A\beta \to \alpha \gamma \beta$ where:
	- $\displaystyle \alpha ,\beta \in (V\cup \Sigma \setminus \{S\})^*$
	- $\gamma \in (V\cup  \Sigma  \setminus \{S\})^+$
	- $\displaystyle A\in V$
- The term _context-sensitive_ comes from the fact that the production rules are sensitive to the **context** ($\alpha$ and $\beta$) in which a variable $A$ appears. By contrast, in a context-free grammar, the left-hand side of a production is a single variable, with no context surrounding it.
- As defined, the string $\gamma$ is not allowed to be empty. Without this restriction, the resulting grammars become equal in power to unrestricted grammars.

### Linear Bounded Automaton

chapter 5

## Unrestricted Grammar

- An **unrestricted grammar** (or **phrase structure grammar**) is a formal grammar $\displaystyle {\textstyle G=(V,\Sigma,R,S)}$, where each production rule is of the form $\displaystyle \alpha \to \beta$ where:
	- $\alpha \in (V\cup \Sigma)^+$
	- $\beta \in (V\cup \Sigma)^*$

#### Turing Machine

chapter 3
