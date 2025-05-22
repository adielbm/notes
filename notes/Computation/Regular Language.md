
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

- A **deterministic finite automaton** (DFA) is a 5-tuple $M=(Q,\Sigma,\delta,q_0,F)$
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
- $R^+\cup\varepsilon = R^*$

### DFA to Regular Expression

#### GNFA

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

#### DFA to GNFA

- Let $M=(Q,\Sigma,\delta,q_{\text{start}},F)$ be a DFA.
- We can construct a GNFA $G=(Q',\Sigma,\delta',q'_{\text{start}},q'_{\text{accept}})$ as follows:
	- $Q'=Q\cup\{q'_{\text{start}},q'_{\text{accept}}\}$
	- $\delta'(q'_{\text{start}},q_{\text{start}})=\varepsilon$
	- For each $q_\text{accept}\in F$, $\delta'(q_{\text{accept}},q'_{\text{accept}})=\varepsilon$
	- If any arrows have multiple labels (or if there are multiple arrows going between the same two states in the same direction), we replace each with a single arrow whose label is the union of the previous labels
	- We add arrows labelled with $\emptyset$ between states that has no arrows.

#### GNFA to Regular Expression

The $\mathrm{CONVERT}(G)$ procedure is used to convert a GNFA $G$ into a regular expression $R$.

- $\mathrm{CONVERT}(G)$:
	- Let $k$ be the number of states in $G$
	- If $k=2$, then $G$ must consist of a single transition from the start state to the accept state, and the regular expression $R$ is simply the label of that transition. Return $R$
	- If $k>2$, then:
		- Select any $q_{\mathrm{rip}}\in Q$ different from $q_{\mathrm{start}}$ and $q_{\mathrm{accept}}$
		- Let $G'$ be the GNFA $(Q',\Sigma,\delta',q_{\mathrm{start}},q_{\mathrm{accept}})$, where:
			- $Q'=Q\setminus\{q_{\mathrm{rip}}\}$
			- For every $q_i\in Q'\setminus\{q_{\mathrm{accept}\}}$, and every $q_j\in Q'\setminus\{q_{\mathrm{start}}\}$:
				- $\delta'(q_i,q_j)=(\delta(q_i,q_{\mathrm{rip}}))(\delta(q_{\mathrm{rip}},q_{\mathrm{rip}}))^*(\delta(q_{\mathrm{rip}},q_j))\cup(\delta(q_i,q_j))=(R_1)(R_2)^*(R_3)\cup(R_4)$
	- Return $\mathrm{CONVERT}(G')$

![[GNFA to Regular Expression.svg]]


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
