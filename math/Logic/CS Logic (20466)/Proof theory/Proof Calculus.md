A **proof calculus** (**תחשיב הוכחה** or **proof system**) consists of a language, rules of inference and axioms
## Examples from the Course Book

- [[Hilbert System#Example (c4.3)]]
- [[Hilbert System#Example (c4.3.5)]]
- [[Hilbert System#Example (c4.3.5)]]
- [[Predicate Calculus]]

# Properties 

## Completeness
#### Strong completeness

 - A proof calculus is **strongly complete** (תחשיב שלם) iff, for every set of formulas $Γ$ , any formula that semantically follows from $Γ$ is provable from $Γ$ . That is: if $Γ ⊨ φ$ , then $Γ ⊢ φ$

> In this course, when we say *תחשיב שלם* for *strong completeness*. 

> Strong completeness implies semantic completeness #todo 
#### Semantic completeness

 - A proof calculus is **semantically complete** (or **weak complete**) if in every theory $\displaystyle  \models _{\mathcal {S}}\varphi \ \to \ \vdash _{\mathcal {S}}\varphi$
### Soundness

 - A proof calculus is **(strongly) sound** iff for every set of formulas $Γ$, if $Γ ⊢ φ$ then $Γ ⊨ φ$ 
- A proof calculus is **(weakly) sound** if every provable formula is valid

## 4.4 Compactness Theorem

- **Compactness theorem** (4.8)
	- Let $K$ be a propositions set, 
		- if every finite subset of $K$ has at least one model, then there exist a model of $K$
		- if $K \implies \psi$ then there is a finite subset $\{ \varphi_{1},\dots,\varphi_{n} \}\subseteq K$ such that $\{ \varphi_{1},\dots ,\varphi_{n} \}\implies \psi$. (see t3.6)


# 4.5 summary

#todo 




