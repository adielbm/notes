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
## Language

### Terms

The set of terms is inductively defined by the following rules:

- Each variable and each constant symbol is a **term**
- If $F$ is an $n$-ary function symbol, and $t_{1},\dots, t_{n}$ are terms, then $F(t_{1},\dots,t_{n})$ is a **term**
### Formulas

The set of **formulas** (also called **well-formed formulas** or **WFFs**) is inductively defined by the following rules:

- *Predicate symbols*. If $P$ is an $n$-ary predicate symbol and $t_{1}, \dots, t_{n}$ are terms then $P(t_{1},\dots,t_{n})$ is a formula. 
- *Negation*. If $φ$ is a formula, then $¬ φ$ is a formula. 
- *Binary connectives*. If $φ$ and $ψ$ are formulas, then $( φ → ψ )$ is a formula. (Similar rules apply to other binary logical connectives). 
- *Quantifiers*. If φ is a formula and $x$ is a variable, then $∀xφ$ (for all $x$, $φ$ holds) and $∃xφ$ (there exists $x$ such that $φ$) are formulas

Only expressions which can be obtained by finitely many applications of rules  are formulas. 

The formulas obtained from the first two rules are said to be **atomic formulas**.

#### Unique Readability

#todo 

#### Induction on wffs principle 

- (Theorem 5.4) 
	- Prove $H(A)$ for all atomic formulas A #todo 


### Free & Bound Variables

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
#### Sentence

- A formula $\varphi$ is called a **sentence** (or **closed formula**), if these is no free variable in $\varphi$, i.e. all occurrences of $x$ in $φ$ are bound

### Substitution

- The **substitution** $\varphi[t/x]$ replaces each free occurrence of the variable $x$ in the formula $\varphi$ with the term $t$
- The substitution $\varphi[t/x]$ is a **capture-avoiding substitution** if and only if no variable occur in $t$ become bonud (we say that $t$ is **substitutable** for $x$ in $\varphi$, or the quantifier $Qx$ does not **capture** the variable $x$ in $t$.)

- If $\varphi[t/x]$ is a capture-avoiding substitution, then $\models \forall x \varphi \rightarrow \varphi[t/x]$
- If $y$ is a **fresh variable** (i.e. does not occur in $\varphi$ (niether free nor bound)), then $\models \forall x \varphi \leftrightarrow \forall y \varphi[y/x]$.
	- The replacement of $x$ by $y$ is called **renaming** (רענון משתנים) of the variable $x$ to $y$ in $\varphi$.


# Theory

- A set of [[Logic/Predicate Logic/Syntax#Free & Bound Variables|sentences]] $K$ is said to be **inconsistent** if there exists a sentence $\varphi$ such that $K ⊢ \varphi$ and $K ⊢ ¬\varphi$. Moreover, $K$ is **consistent** if for no sentences $\varphi$ we have $K ⊢ \varphi$ and $K ⊢ ¬\varphi$
- A **theory** is a consistent set of sentences
- A theory $K$ is said to be **complete** if for every sentence $φ$, either $K \vdash\varphi$ or $K \vdash\lnot\varphi$

> See also the defitnion of [[Predicate Calculus#Proof Sequence|proof sequence]] (in some proof claculus)

> In the propositional logic a [[Propositional Calculus#Completeness Theorem|complete theory]] has [[Propositional Calculus#Completeness Theorem|unique model]] (4.5), but in the predicate logic, a complete theory may have many models.

>  #todo antoher definition  (from *D. Cunningham*)  
	- A set of sentences $K$ is said to be a **theory** if and only if $K$ is closed under logical implication, that is, for any sentence $\varphi$ of the language, if $K \models \varphi$, then $\varphi \in K$
	- A theory $K$ is said to be **complete** if for every sentence $φ$, either $φ ∈ K$ or $¬φ ∈ K$

## Henkin Theory

- A complete theory $K$ is said to be a **Henkin theory** if the following condition holds: "If $K$ contains the sentence $\lnot \forall x \varphi$ then there is a constant $c \in L$ for which $K$ contains $\lnot \varphi [c / x]$". (The constant $c$ is called a **Henkin witness** for $\lnot \forall x \varphi$)


- #todo check if Completeness theorem depends on predicare calc.
- (6.6) Completeness Theorem (without equality) 
	- (A.) Every theory $K$ in a language $L$ can be extended to a Henkin theory in a language $L'$ such that $L'$ adds only constants to $L$.
	- (B.) For every Henkin theory in a language $L'$, there exists a model in $L'$. Reducing the model to the language $L$ gives a model of the theory $K$ in the language $L$. 
- #todo (6.8) Completeness Theorem (with equality)


- #todo t6.7
- 

# BNF


