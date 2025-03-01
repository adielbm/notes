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

# Languages

- Any subset $L \subseteq \Sigma^*$ is called a **language** over $\Sigma$.  
	- A language is **prefix-free** if no string in it is a proper prefix of another.  

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


## Context-Free Language

- A grammar $G = (V, T, S, P)$ is said to be **context-free** if all productions in $P$ have the form $A → x$, where $A \in V$ and $x\in(V \cup T)^∗$
	- $V$ - **Non-Terminals** (variables) 
		- symbolized by uppercase $A,B,\dots$
		- $V$ is a finite set
		- Every element in $V$ is called a **nonterminal character** or a **variable**
		- Variables are also sometimes called syntactic categories. 
		- Each variable defines a sub-language of the language defined by $G$.
	- $T$ (also symbolized by $\Sigma$) - **Terminals**
		- Terminals symbolized by lowercase $a,b,\dots$
		- $T$ is a finite set of **terminals**, disjoint from $V$, which make up the actual content of the sentence. The set of terminals is the alphabet of the language defined by the grammar $G$.
	- $P$ (also symbolized by a $R$) is a finite relation in $\displaystyle V\times (V\cup T )^{*}$, where the asterisk represents the Kleene star operation. 
		- The members of $P$ are called or the **productions rule** (or rewrite rules) of the grammar 
	- $S$ is the **start** variable (or start symbol), used to represent the whole sentence (or program). It must be an element of $V$.



- A derivation is said to be **leftmost** if in each step the leftmost variable in the sentential form is replaced. If in each step the rightmost variable is replaced, we call the derivation **rightmost**.

- A context-free grammar $G$ is said to be **ambiguous** if there exists some $w∈L(G)$ that has at least two distinct derivation trees. Alternatively, ambiguity implies the existence of two or more leftmost or rightmost derivations.
- A context-free grammar is in **Chomsky normal form** (CNF) if every rule is of the form $A\to BC$,  $A\to \alpha$, or $S\to \epsilon$. for some variable $A∈V$, some terminal symbol $\alpha∈Σ$, and some variables $B,C∈V∖{S}$.

- Any production of a context-free grammar of the form $A → λ$ is called a λ-**production**. Any variable $A$ for which the derivation $A \overset{*}⇒ λ$ is possible is called **nullable**.
- Any production of a context-free grammar of the form $A → B$, where $A, B ∈ V$ , is called a **unit-production**.




- THEOREM - Any context-free language is generated by a context-free grammar in Chomsky normal form.











## Context-Sensitive

- A **context-sensitive grammar** is a formal grammar in which the left-hand sides and right-hand sides of any production rules may be surrounded by a context of terminal and nonterminal symbols. 


## Unrestricted Grammar

- An **unrestricted grammar** (aka: phrase structure grammar, semi-Thue) is a formal grammar $\displaystyle {\textstyle G=(N,T,P,S)}$, where
	- $\displaystyle N$ is a finite set of **non-terminal symbols** (or **variables**)
	- $\displaystyle T$ is a finite set of **terminal symbols** with $\displaystyle N$ and $\displaystyle T$ disjoint,
	- $\displaystyle P$ is a finite set of production rules of the form $\displaystyle \alpha \to \beta$ , where $\displaystyle \alpha$ and $\displaystyle \beta$ are strings of symbols in $\Sigma=\displaystyle N\cup T$, and $\displaystyle \alpha$ is not the empty string
	- $\displaystyle S\in N$ is a specially designated start symbol


> As the name implies, there are no real restrictions on the types of production rules that unrestricted grammars can have.




# formal grammar


-  #todo  (Grammar) $\set{V_{T}, V_N , S, R}$, where $V_T$ is the set of terminal elements, $V_N$ is the set of non-terminals, $S$ is a member of $V_N$, and $R$ is a finite set of rules

- A **formal grammar** describes how to form strings from an alphabet of a formal language that are valid according to the language's syntax
- A **formal grammar** is defined as a set of production rules for such strings in a formal language.
- A **formal grammar** (consisting of production rules or formation rules).


- The rules that specify when we can replace a string from $\Sigma^*$, the set of all strings of elements in the alphabet, with another string are called **the productions of the grammar**
