
> Here we describe an example (C6.1) of a [[Proof Calculus]] (תחשיב הוכחה), which is [[Proof Calculus#Strong completeness|complete]].  This is kind of expansion of [[Hilbert System#Example (c4.3)]]

#  Characterization

## Language $L_{\to}$

- Connectives $\{ \lnot,\to \}$
- Quantifier $\forall$

## Axioms 

Claculus Axioms in propositional language ${L_{\to}}$

|     |                | Taulogical Axioms                                                          |
| --- | -------------- | -------------------------------------------------------------------------- |
| Ax1 |                | $[\varphi\to(\psi\to \varphi)]$                                            |
| Ax2 |                | $[\varphi\to(\psi\to \theta)]\to[(\varphi\to \psi)\to(\varphi\to \theta)]$ |
| Ax3 | Contrapositive | $[(\lnot\varphi\to\lnot\psi)\to(\psi\to\varphi)]$                          |
### Axioms of $∀$

|      |               | **Axioms of $\forall$**                                   |                                          |
| ---- | ------------- | --------------------------------------------------------- | ---------------------------------------- |
| Ax.4 | אקסיומת ההצבה | $\forall x \varphi\to \varphi[t/x]$                       | if no variable occur in $t$ become bonud |
| Ax.5 | הזזת הכמת     | $\forall x(\varphi\to \psi)\to(\varphi\to \forall x\psi)$ | if $x$ is not occur freely in $\varphi$  |
### Axioms of Equality

If it is first-order logic with equality, then we have also

|       |              | Equivalence Axioms                                                                                                                                                                                            |
| ----- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ax.6a | Reflexivity  | $\forall x (x = x)$                                                                                                                                                                                           |
| Ax.6b | Symmetry     | $\forall x\forall y (x = y \rightarrow y = x)$                                                                                                                                                                |
| Ax.6c | Transitivity | $\forall x \forall y \forall z (x = y \land y = z \rightarrow x = z)$                                                                                                                                         |
|       |              | **אקסיומות ההחלפה**                                                                                                                                                                                           |
|       |              | (For each n-place function / prediacte symbol)                                                                                                                                                                |
| Ax.7a |              | $\begin{align}\forall v_{0}\forall v_{1}\dots \forall_{2n-2}\forall_{2n-1}(((v_{0}=v_{n})\land\dots \land(v_{n-1}=v_{2n-1}))\to\\(F(v_{0},\dots,v_{n-1})=F(v_{n},\dots,v_{2n-1})))\end{align}$                |
| Ax.7b |              | $\begin{align}\forall v_{0}\forall v_{1}\dots \forall_{2n-2}\forall_{2n-1}(((v_{0}=v_{n})\land\dots \land(v_{n-1}=v_{2n-1}))\to\\(P(v_{0},\dots,v_{n-1})\leftrightarrow P(v_{n},\dots,v_{2n-1})))\end{align}$ |

## Rules of inference

- Universal Generalization $\displaystyle\frac{\varphi}{\forall x\varphi}$
- Modus Ponens $\displaystyle\frac{\varphi,(\varphi\to \psi)}{\psi}$

# Definitions

## Proof Sequence (סדרת הוכחה)

- (c6.1) A **proof sequence** from a [[Logic/Predicate Logic/Semantic#Theory|theory]] $K$ (in our calculus) is a sequence of formulas such that each formula in the sequence is either:
	- A logical axiom
	- A [[Logic/Predicate Logic/Syntax#Sentence|sentence]] in the set $K$
	- Derived from two previous formulas in the sequence using one of the rules of inference
- A formula $\varphi$ is **theorem** (משפט) of $K$ (or is **provable** (יכיח) from $K$) and denoted by $K \vdash \varphi$, if and only if, there exists a proof sequence from $K$ such that $\varphi$ is the last formula

> **Note**: Here we restrict a theory to be set of *sentences*. but there are definitions without this restriction. Also, in a *proof sequence* (unlike to a *theory*), may be formulas that are *not* sentences.

# Theorems

- (6.1)
	- Let $\varphi$ be a proposition (of the propositional language) such that all of its elementary proposition are from $P_{1}, ..., P_{n}$. Let $\alpha_{1}, ..., \alpha_{n}$ be formulas of predicate logic, and let $\varphi'$ be the string obtained by replacing all occurrences of $P_{i}$  with $\alpha_{i}$, for $i=1, \dots, n$. Then:
		- $\varphi'$ is a formula of predicate logic.
		- If $M$ is a [[Logic/Propositional Logic/Semantic|model]] of the propositional language and $S$ is an [[Logic/Predicate Logic/Semantic#Variable Assignment|assignment]] of predicate logic such that $M(P_{i}) = S(\alpha_{i})$ for all ${i}\leq n$, then $M(\varphi) = S(\varphi ')$
		- If $\varphi$ is a tautology, then $\varphi'$ is logically true
	- A formula obtained by systematic substitution in a tautology of formulas in place of elementary propositions is called a **tautology of predicate logic**, and according to (t6.1.c) it is logically true
- (6.2) Soundness Theorem
	- This proof system is [[Proof Calculus#Soundness|sound]], i.e.
	- Let $K$ be a set of formulas and $\psi$ be a proposition. If $K\vdash \varphi$ (provable), then $K \models\varphi$ ([[Logic/Propositional Logic/Semantic#Logical Implication|logically implied]])
- Given $K$ is a [[Logic/Predicate Logic/Semantic#Theory|theory]], $\psi$ is a sentence and $\varphi$ is a formula. 
	- (6.3) Deduction theorem - If $K\cup \{ \psi \}\vdash \varphi$ then $K \vdash ( \psi \to \varphi)$
	- (6.4a) Principle of explosion - $\{ \psi,\lnot \psi \}\vdash \varphi$ (thus, every inconsistent set of sentences prove every formula)
	- (6.4b) if $K\cup \{ \lnot \varphi \}$ is inconsistent then $K \vdash \varphi$
	- (6.5a) if $K\vdash \forall x\varphi$ and the variable $v$ does not appear in $\varphi$ then $K \vdash \forall y \varphi[y/x]$
	- (6.5b) Given the constant $c$ that does not appear neither in the sentences of $K$ nor in $\varphi$. If $K \vdash \varphi[c / x]$ then $K \vdash \forall x \varphi$
- Given $L'$ a language that adds constants to a language $L$, and $K$ a set of sentences in $L$
	- (6.5c) for every sentence $\varphi$ in $L$, if $K \vdash \varphi$ in $L'$ then $K \vdash \varphi$ in $L$
	- (6.5d) if $K$ is consistent in $L$, then it is consistent in $L'$

