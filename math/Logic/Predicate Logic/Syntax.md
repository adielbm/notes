## Alphabet 

The alphabet of a first-order language consists of the following distinct symbols:
### Logical symbols

|                            | Logical symbols                                                      |
| -------------------------- | -------------------------------------------------------------------- |
| Logical connectives        | $\lnot,\rightarrow,\lor,\land,\leftrightarrow$                       |
| Punctuation Symbols        | Comma and Parentheses                                                |
| Variables ($\mathrm{VAR}$) | $v_{0},v_{1},v_{2},\dots$                                            |
| Quantifier symbols         | $∀$ (universal quantification), <br>$∃$ (existential quantification) |
| Equality (optional)        | $=$                                                                  |

### Non-logical symbols (Signature)

|                             | Non-logical symbols                                               |
| --------------------------- | ----------------------------------------------------------------- |
| Predicate Symbols           | $P_{0}^{n}, P_{1}^{n},P_{2}^{n},\dots$ (For each arity $n\geq 0$) |
| Function Symbols (optional) | $F_{0}^{n}, F_{1}^{n},F_{2}^{n},\dots$ (For each arity $n\geq 0$) |
| Constant Symbols (optional) | $C_{0},C_{1},C_{2},\dots$                                         |

- The set of constant symbols, function symbols, and predicate symbols is called the **signature** of the language.
- The set of all symbols is called the **alphabet** of the language.
- The function that assigns to each symbol its arity is called the **signature function**.

## Terms

The set of terms is inductively defined by the following rules:

- Each variable and each constant symbol is a **term**
- If $F$ is an $n$-ary function symbol, and $t_{1},\dots, t_{n}$ are terms, then $F(t_{1},\dots,t_{n})$ is a **term**
## Formulas

The set of **formulas** (also called **well-formed formulas** or **WFFs**) is inductively defined by the following rules:

- *Predicate symbols*. If $P$ is an $n$-ary predicate symbol and $t_{1}, \dots, t_{n}$ are terms then $P(t_{1},\dots,t_{n})$ is a formula. 
- *Negation*. If $φ$ is a formula, then $¬ φ$ is a formula. 
- *Binary connectives*. If $φ$ and $ψ$ are formulas, then $( φ → ψ )$ is a formula. (Similar rules apply to other binary logical connectives). 
- *Quantifiers*. If φ is a formula and $x$ is a variable, then $∀xφ$ (for all $x$, $φ$ holds) and $∃xφ$ (there exists $x$ such that $φ$) are formulas

Only expressions which can be obtained by finitely many applications of rules  are formulas. 

The formulas obtained from the first two rules are said to be **atomic formulas**.

- Let $\Sigma$ be a set of formulas
	- A **boolean combination** of formulas from $\Sigma$ is a formula that can be obtained from formulas from $\Sigma$ by finitely many applications of the rules for binary connectives and negation.
	- A **positive boolean combination** of formulas from $\Sigma$ is a formula that can be obtained from formulas from $\Sigma$ by finitely many applications of the rules for binary connectives.
	- The **boolean closure** of $\Sigma$ is the set of all boolean combinations of formulas from $\Sigma$.
- A formula is **positive** if it can be obtained from atomic formulas using only binary connectives and quantifiers.
- A **negative** formula is a negated positive formula.
- A formula is **quantifier-free** if it contains no quantifiers

### Unique Readability

#todo 

### Induction on wffs principle 

- (Theorem 5.4) 
	- Prove $H(A)$ for all atomic formulas A #todo 

## Free & Bound Variables

- For each quantifier $Q$, and let be a formula $QxB$, we say that $B$ is the **scope** of $Qx$
- The concept that a variable $x$ **occurs free** or **bound** (also: $x$ is a **free** or **bound occurrence**) in formula is defined recursively as follows:
	- Atomic formulas:
		- If $φ$ is an atomic formula, then $x$ occurs free in $φ$ if and only if $x$ occurs in $φ$. 
		- Moreover, there are no bound variables in any atomic formula.
	- Negation:
		- $x$ occurs free in $¬φ$ if and only if $x$ occurs free in φ. 
		- $x$ occurs bound in $¬φ$ if and only if $x$ occurs bound in φ
	- Binary connectives:
		- $x$ occurs free in $(φ → ψ)$ if and only if $x$ occurs free in either $φ$ or $ψ$. 
		- $x$ occurs bound in $(φ → ψ)$ if and only if $x$ occurs bound in either $φ$ or $ψ$. 
		- (The same rule applies to any other binary connective in place of $→$.)
	- Quantifiers: ($Q$ is either $\forall$ or $\exists$)
		- $x$ occurs free in $Qyφ$, if and only if $x$ occurs free in $φ$ and $x$ is a different symbol from $y$. 
		- $x$ occurs bound in $Qyφ$, if and only if $x$ is $y$ or $x$ occurs bound in $φ$. 

- A variable $x$ is a **free variable** in $φ$, if and only if, it has at least one free occurrence in $\varphi$ 
- A variable $x$ is a **bound variable** in $φ$, if and only if, all occurrences of $x$ in $φ$ are bound

### Universal Closure

- Given $V(\varphi)=\{ x_{1},\dots,x_{r} \}$ is the set of free variables in $\varphi$, then $\forall x_{1}\dots \forall x_{r}\varphi$ is the **universal closure** of the formula $\varphi$

### Sentence

- A formula $\varphi$ is called a **sentence** (or **closed formula**), if these is no free variable in $\varphi$, i.e. all occurrences of $x$ in $φ$ are bound

### Substitution

- The **substitution** $\varphi[t/x]$ replaces each free occurrence of the variable $x$ in the formula $\varphi$ with the term $t$
- The substitution $\varphi[t/x]$ is a **capture-avoiding substitution** if and only if no variable occur in $t$ become bonud (we say that $t$ is **substitutable** for $x$ in $\varphi$, or the quantifier $Qx$ does not **capture** the variable $x$ in $t$.)


- If $y$ is a **fresh variable** (i.e. does not occur in $\varphi$ (niether free nor bound)), then $\models \forall x \varphi \leftrightarrow \forall y \varphi[y/x]$.
	- The replacement of $x$ by $y$ is called **renaming** (רענון משתנים) of the variable $x$ to $y$ in $\varphi$.


# Theory

- A [[Predicate Calculus#Theory|theory]] is a consistent set of sentences

> In the propositional logic a [[Propositional Calculus#Completeness Theorem|complete theory]] has [[Propositional Calculus#Completeness Theorem|unique model]] (4.5), but in the predicate logic, a complete theory may have many models.

> A theory can be considered on two levels. One is the _proof theory_ level (see [[Predicate Calculus]]), where we focus on the syntactic aspects (strings (which are formulas) and on manipulating strings according to rules). The other is the _[[Model Theory|model theory]]_ level, where we focus on the semantic aspects as the class of all models of the theory.

# Minimal Language

#todo 


# Normal Forms
#### Prenex Normal Form (5.7.2)

- A formula $\varphi$ is said to be in **prenex form** if it is of the form $Q_{1}x_{1}Q_{2}x_{2} \dots Q_{n} x_{n} B$ where each $Q$ is either $∃$ or $∀$, and where $B$ contains no quantifiers. 
	- The sequence of quantifiers and variables at the beginning is called the **prefix**, and the quantifier-free formula that follows the **matrix**.
	- If $\varphi$ is in prenex form and its metrix is [[Logic/Propositional Logic/Semantic#CNF & DNF|DNF]] then it is said to be in **prenex normal form** (PNF)


# BNF



# Restricted languages

```
If the set of relation symbols, function symbols, and constant symbols of a language $L$ is a subset of the set of alphabet symbols of $L'$, then $L$ is called a **reduction** of the language $L'$, and $L'$ is called an **enrichment** of the language L. Every noun in $L$ is also a noun in $L'$, and every formula in $L$ is also a formula in $L'$. If M is a model in the extended language $L'$, then the reduction of M to the language $L$ is obtained by ignoring the relations and functions that have been named in $L'$ but are not in the language $L$ (on the other hand, if M is a model in the language L, then there are many enrichments of the model to a model in the language $L'$, because there are many functions and relations in the model to which the additional names can be assigned). It is important to note that the locality of the definition by induction (of the value of a noun in an assignment, and of the truth value of a formula in an assignment) ensures that the definition of the truth value of a formula does not depend on the interpretation that the model gives to the symbols that are not mentioned in the formula. In precise terms, this means:

- (Theorem 5.7) Let $M_{1}$ and $M_{2}$ be two models in the languages $L_{1}$ and $L_{2}$, respectively, whose domain is the same set $A$, such that every assignment in one model is also an assignment in the other model. Let $\varphi$ be a formula that is in the intersection of the two languages. If the two models interpret the relation symbols, the function symbols, and the constant symbols that appear in the formula ϕ in the same way, then for every assignment S in the domain A: $M_{1}⊨_{S}​\varphi\iff M_{2}⊨_{S}​\varphi$
	- In particular, if $L_{2}$ is a reduction of $L_{1}$ and $M_{2}$ is the reduction of $M_{1}$, then for every assignment $S$ and for every formula $\varphi$ in $L_{2}$: we have $M_{1}⊨_{S}​\varphi\iff M_{2}⊨_{S}​\varphi$
```

#todo 5.4.6
#todo 5.4.7
