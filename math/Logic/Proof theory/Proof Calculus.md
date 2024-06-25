- A **proof calculus** (**תחשיב הוכחה** or **proof system**) consists of: 
	- Language 
	- Rules of Inference
	- Set $\Lambda$ of formulas in the language (which are called **Logical Axioms**)

## Proof Sequence

- A **proof sequence** (סדרת הוכחה) of a formula in a proof calculus is a finite sequence of formulas (or *propositions* in propositional logic) in which each one is either one of the logical axioms or _derived_ from formulas that appeared before it in the sequence through the rules of inference
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
		- (tautology: [[Logic/Propositional Logic/Semantic#Logical Validity|PL]], [[Logic/Predicate Logic/Semantic#Logical Validity|FOL]]; provable: [[Propositional Calculus#Provable Proposition|PL]], [[Predicate Calculus#Provable Formula|FOL]])
### Soundness

 - A proof calculus is **(strongly) sound** iff for every set of formulas $Γ$, if $Γ ⊢ φ$ then $Γ ⊨ φ$ 
- A proof calculus is **weakly sound** if every provable formula is valid

### Compactness 

#todo 




# 4.5 summary

#todo 



# Examples

- **Hilbert Systems** are a class of proof systems for propositional and predicate logic, that can be characterised by the choice of a large number of logical axioms and a small set of rules of inference (typically only Modus Ponens (or also Universal Generalization)).
	- Examples from the Course Book of Hilbert Systems:
		- [[Propositional Calculus]]
			- [[Propositional Calculus#Example (c4.3.5)]]
			- [[Propositional Calculus#Example (c4.3.5)]]
		- [[Predicate Calculus]]
- Systems of **natural deduction** take the opposite tack, including many rules of inference but very few or no logical axioms.
- **sequent calculus** #todo 




> #todo (form Wikipedia) A characteristic feature of the many variants of Hilbert systems is that the context is not changed in any of their rules of inference, while both natural deduction and sequent calculus contain some context-changing rules.