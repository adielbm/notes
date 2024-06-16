	
> Here we describe an example (c4.3) of [[Proof Calculus|proof calculus]] which are also examples of [[Proof Calculus#Examples|hilbert systems]]. In the end, we show some variations (c4.3.5, and q4.9) of this proof calculus

# Characterization

- Language: The dialect $L_{\rightarrow }$ of the proposional language 
	- convectives: $\{ \lnot,\rightarrow \}$
	- the propositions are either elementary propositions, negation propositions in the form $\lnot{\varphi}$, or propositions in the form $(\varphi\rightarrow \psi)$
- Logical Axioms: (Each one is general form of one of infinite propositions. Also, these axioms are tautologies (q4.6))
	- $(\varphi\rightarrow (\psi\rightarrow \varphi))$
	- $([\varphi\rightarrow (\psi\rightarrow \theta)]\rightarrow [(\varphi\rightarrow \psi)\rightarrow (\psi\rightarrow \theta)])$
	- $[(\lnot \varphi\rightarrow \lnot\psi )\rightarrow (\psi\rightarrow \varphi)]$
- Rules of inference (actually one here)
	- Modus ponens $\displaystyle\frac{\varphi,(\varphi \rightarrow \psi)}{\psi}$

# Definitions

Here are some definitions related to this proof calculus:
## Proof Sequence

- Let $K$ be a set of propositions, a **proof sequence from a set** $K$ (in our calculus) is a sequence of propositions $\varphi_{1},\dots,\varphi_{n}$ such that each proposition in the sequence is either: 
	- A logical axiom
	- A proposition in the set $K$
	- Derived from two previous propositions in the sequence using rules of inference (here is only modus ponens)
- A **proof sequence in the calculus** is proof sequence from the empty set. (i.e. each proposition is either a logical axiom or derived from two previous propositions)
- A **proof sequence from $K$ to** $\varphi$ is a proof sequence from $K$, such that $\varphi$ is the last proposition

## Provable Proposition

- $\varphi$ is **theorem** (משפט) of $K$ (or is **provable** (יכיח) from $K$) and denoted by $K \vdash \varphi$, if and only if it has (at least one) proof sequence from $K$ 
- (4.1) 
	- If $\varphi_{1},\dots,\varphi_{n}$ is a proof sequence from $K$, then for each $i\leq n$ the proof sequence $\varphi_{1},\dots,\varphi_{i}$ is is a proof sequence from $K$. ( #todo )
	- If $\varphi_{1},\dots,\varphi_{n}$ is a proof sequence from $K$, and $\psi_{1},\dots,\psi_{n}$ is also a proof sequence from $K$, then  $\varphi_{1},\dots,\varphi_{n},\psi_{1},\dots,\psi_{n}$
	- If $K\vdash \varphi$ and $K \subseteq K'$ then $K' \vdash \varphi$
	- If $\varphi$ is a theorem of $K$, and $K \cup \{ \varphi \}\vdash \psi$ then $K \vdash \psi$. 
		- Similarly, $\varphi_{1},\dots,\varphi_{n}$ are theorems of $K$ and $K\cup \{ \varphi_{1},\dots,\varphi_{n} \}\vdash \psi$ then $K\vdash \psi$.
	- If $K \vdash \varphi$ then there exists a finite subset of $K'$ such that $K' \vdash \varphi$


> Note: all these properties (4.1) are not unique to the specific calculus we chose with three axioms and the MP rule.

>We can show that a proposition is a *theorem* (provable), using either showing its proof sequence or using t4.3

## Theory

- Given a set of propositions $K$ 
	- $K$ is **inconsistent** if there exists a proposition $\varphi$ s.t. $K ⊢ \varphi$ and $K ⊢ ¬\varphi$ 
	- $K$ is **consistent** if it is not inconsistent
	- $K$ is **maximally consistent** if every superset of $K$ is inconsistent
- A consistent set of propositions is called a **theory**
- (Syntactical completeness) A theory is **complete** (תורה שלמה) if for every proposition $\varphi$, either $K\vdash{\varphi}$ ([[Propositional Calculus#Provable Proposition|provable]]) or $K\vdash{\lnot{\varphi}}$ (disproved)

> In some books, the definitions requires a _theory_ to be closed under logical implication
# Properties

Here are some properties of this proof calculus

- lemma:
	- if $\varphi$ is a logical axiom or $\varphi \in K$ then $K \vdash \varphi$
	- if $K \vdash \psi$ and $K \vdash (\psi\rightarrow\varphi )$ then $K \vdash \varphi$
	- if $K \vdash \varphi$ then for each proposition $\psi$: $K\vdash(\psi \rightarrow \varphi)$
	- for each proposition $\varphi$: $K\vdash(\varphi \rightarrow \varphi )$
- (4.2) Deduction theorem: if $K\cup \{ \psi \}\vdash\varphi$ then $K\vdash(\psi\rightarrow\varphi)$ (in Cunningham's he shows the reverse direction)
	- example: arrow transitivty
- (Lemma) Let $K$ be an infinite set of proposition. If $K$ is [[#Theory|inconsistent]], then there exists a finite inconsistent subset of $K$. 
- q4.7 #todo 
- (4.3) Proof-by-Contradiction Theorem 
	- For each proposition $\varphi$, $\{ \psi,\lnot\psi \}\vdash\varphi$
	- If $K$ is inconsistent, then $K\vdash{\varphi}$ for each proposition $\varphi$ ( #todo is it iff?)
	- If $K\cup \{ \lnot \varphi \}$ is inconsistent, then $K\vdash{\varphi}$
- examples #todo 
- (4.4) **Soundness Theorem** (נאותות)
	- This proof calculus is [[Proof Calculus#Soundness|sound]], i.e.
	- Let $K$ be a set of propositions and $\psi$ be a proposition. If $K\vdash \varphi$ ([[#Proof Sequence|provable]]), then $K\implies\varphi$ ([[Logic/Propositional Logic/Semantic#Logical Implication|logically implied]]. common notation $K \models\varphi$)
		- In particular, if $\emptyset\vdash \varphi$ then, $\varphi$ is a tautology ($\models \varphi$)
		- Corollary: If a set of propositions has a [[Logic/Propositional Logic/Semantic#Model|model]], then it is consistent
- (4.5) Every [[#Theory|complete theory]] has unique model
- #todo If a set of propositions $K$ has unique model, then $K$ is a complete theory 
- (4.6) For each theory $K$ there exist a complete theory $\overline{K}$ such that $K\subseteq{\overline{K}}$
- (4.7) **Completeness Theorem**
	- This proof calculus is [[Proof Calculus#Strong completeness|strongly complete]]
	- For every theory $K$, there exists a [[Logic/Propositional Logic/Semantic#Model|model]] $M$ such that $M \models K$ 
	- If a theory $K$ [[Logic/Propositional Logic/Semantic#Logical Implication|logically implies]] a proposition $\psi$, then $\psi$ is [[#Provable Proposition|provable]] from $K$
	- If $K \implies \psi$ then $K \vdash \psi$

## Summary 

| Syntax                                                                                                                  | Semantics                                                                                                                              |
| ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| $\xrightarrow{\text{Soundness}}$                                                                                        | $\xleftarrow{\text{Completeness}}$                                                                                                     |
| $K\vdash\varphi$<br>($\varphi$ is [[#Proof Sequence\|provable]] from $K$)                                               | $K\models\varphi$ (or $K \implies \psi$)<br>($K$ [[Logic/Propositional Logic/Semantic#Logical Implication\|logically implies]] $\psi$) |
| $\vdash\varphi$ (or  $\emptyset\vdash \varphi$)<br>($\varphi$ is [[#Proof Sequence\|provable]] from the logical axioms) | $\models\varphi$<br>($\varphi$ is a [[Logic/Propositional Logic/Semantic#Logical Validity\|tautology]])                                |
| $K$ is [[#Theory\|consistent]] (theory)                                               | $M\models K$<br>($K$ has a [[Logic/Propositional Logic/Semantic#Model\|model]] $M$ (or, $K$ is satisfiable))                           |
| $K$ is a complete theory                                                                                                | $K$ has unique model                                                                                                                   |

___

# Other Variations 

here we show some variations (c4.3.5, and q4.9) of proof calculus we saw above.

#### Example (c4.3.5)

- (4.3.5) Like (4.3) but with $L=\{ \lnot,\land,\lor,\to,\leftrightarrow \}$ and other axioms #todo

#### Example (q4.9)

- q4.9 - $L=\{ \lnot,\to,\land \}$ and other axioms  #todo
