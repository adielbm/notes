- A **proof calculus** (**תחשיב הוכחה** or **proof system**) consists of: 
	- language 
	- rules of inference
	- logical axioms

## Examples

- **Hilbert Systems** are a class of proof systems for propositional and predicate logic. Hilbert systems can be characterised by the choice of a large number of logical axioms and a small set of rules of inference (typically only Modus Ponens (or also Universal Generalization)).
	- Examples from the Course Book of Hilbert Systems:
		- [[Propositional Calculus]]
			- [[Propositional Calculus#Example (c4.3.5)]]
			- [[Propositional Calculus#Example (c4.3.5)]]
		- [[Predicate Calculus]]

## Proof Sequence

- A **proof sequence** (סדרת הוכחה) is a finite sequence of *propositions* (in propositional logic, or *formulas* for predicate logic) in which each one is either a logical axiom (in the proof calculus we are using) or derived from propositions (or *formulas*) that appeared before it in the sequence through inference rules (in the proof calculus we are using).
	- Definitions of **proof sequence** in the course book:
		- [[Predicate Calculus#Proof Sequence]] (c6.1)
		- [[Propositional Calculus#Proof Sequence]] (c4.3.1)

# Properties 

## Completeness
### Strong completeness

 - A proof calculus is **strongly complete** (תחשיב שלם) iff, for every set of formulas $Γ$ , any formula that semantically follows from $Γ$ is provable from $Γ$ . That is: if $Γ ⊨ φ$ , then $Γ ⊢ φ$

> *Strong completeness* implies *semantic completeness*. (it's special case when the set is empty) 
### Semantic completeness

 - A proof calculus is **semantically complete** (or **weak complete**) if we have: 
	 - for every $\varphi$, if $\models\varphi$ then $\vdash \varphi$. In other words,
	 - Every tautology is provable
		- (tautology: [[Logic/Propositional Logic/Semantic#Tautology & Contradiction|PL]], [[Logic/Predicate Logic/Semantic#Logical Validity|FOL]]; provable: [[Propositional Calculus#Provable Proposition|PL]], [[Predicate Calculus#Provable Formula|FOL]])
### Soundness

 - A proof calculus is **(strongly) sound** iff for every set of formulas $Γ$, if $Γ ⊢ φ$ then $Γ ⊨ φ$ 
- A proof calculus is **weakly sound** if every provable formula is valid

### Compactness 

#todo 




# 4.5 summary

#todo 




