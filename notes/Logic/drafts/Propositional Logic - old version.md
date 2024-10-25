---
aliases:
  - Propositional calculus
---

- A **propositional variable** (aka: sentential variable, sentential letter) is an input variable (that can either be true or false) of a truth function. 
	- Propositional variables are the basic building-blocks of propositional formulas
	- Propositional variables are the atomic formulas of propositional logic
- **Propositional Formula** (propositional expression, sentence, sentential formula, proposition)
	- A **propositional formula** is a type of syntactic formula which is well formed and has a truth value. 
	- If the values of all variables in a propositional formula are given, it determines a unique truth value. 
	- Propositional formulas are the formulas of propositional calculus
- A **compound proposition** is a proposition constructed by combining propositions using logical connectives 

- A **truth assignment** (or **valuation function**) is a function that maps propositional variables to true or false.




- Tautology
	- A compound proposition P is a **tautology** $\top$ if every truth assignment satisfies P, i.e. all entries of its truth table are true.
		- Examples: $p\leftrightarrow{p},\quad p\rightarrow{p},\quad p\lor{(\lnot{p})},\quad p\rightarrow{T},\quad F\rightarrow{p}$
	- in propositional logic **valid** formula is tautology
- Satisfiability 
	- A compound proposition P is **satisfiable** if there is a truth assignment that satisfies P; that is, at least one entry of its truth table is true
- Contradiction
	- A compound proposition P is a **contradiction** $\bot$ (or **unsatisfiable**) if it is not satisfiable; that is, all entries of its truth table are false.
		- Examples: $p\land\lnot{p}$
- Contingency
	- A compound proposition that is neither a tautology nor a contradiction is called a **contingency**. 
		- Examples: $p\lor{q}$


- Negation of a tautology is always a contradiction
- Negation of a contradiction is always a tautology


- Logical Equivalence
	- The compound propositions $p$ and $q$ are **logically equivalent** if $p\leftrightarrow{q}$ is a tautology. (i.e. they always have the same truth values ) The notation $p \equiv q$ (or $p \dashv \vdash q$) denotes that $p$ and $q$ are logically equivalent. 

##  Logical Connectives (Logical Operator)

- Logical conjunction $\land$
- Logical disjunction $\lor$
- Logical Complement (Negation, Logical Not) $\lnot,\sim$
- Material Conditional (Material Implication) $\rightarrow \,,\supset$
	- $p\rightarrow{q}$ is true unless, $p$ is true and $q$ is false.

- Logical Consequence
	- **Syntactic consequence**: $\vdash$ (turnstile symbol)
	- **Semantic consequence**: $\models$



# DRAFT HUTH & RYAN 

## definitions

- The **well-formed formulas of propositional logic** are those which we obtain by using the construction rules, and only those, finitely many times
- A **valuation** or **model** of a formula $φ$ is an assignment of each propositional atom in $φ$ to a truth value.
- Given a well-formed formula φ, we define its **height** to be 1 plus the length of the longest path of its parse tree.
- If, for all valuations in which all $\varphi_{1}, \varphi_2,\dots,\varphi_n$ evaluate to $T$, $ψ$ evaluates to $T$ as well, we say that $\varphi_{1}, \varphi_2,\dots,\varphi_n \models ψ$ holds and call $\models$ the **semantic entailment** relation
- A formula of propositional logic $\phi$ is called a **tautology** iff it evaluates to $T$ under all its valuations, i.e. iff $\models \phi$

## theorems

- Corollary 1.39 (Soundness and Completeness) Let $\phi_{1},\phi_{2},\dots,\phi_{n},\psi$ be formulas of propositional logic. Then $\phi_{1},\phi_{2},\dots,\phi_{n}\models\psi$ is holds iff the sequent $\phi_{1},\phi_{2},\dots,\phi_{n}\vdash\psi$ is valid