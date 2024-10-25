The incompleteness theorems apply to formal systems that are of sufficient complexity to express the basic arithmetic of the natural numbers and which are consistent and effectively axiomatized. 

Particularly in the context of first-order logic, formal systems are also called formal theories. 

In general, a **formal system** is a deductive system that consists of a particular set of axioms along with rules of symbolic manipulation (or rules of inference) that allow for the derivation of new theorems from the axioms. 

One example of such a system is **first-order Peano arithmetic**, a system in which all variables are intended to denote natural numbers. 

In other systems, such as set theory, only some sentences of the formal system express statements about the natural numbers. 

The incompleteness theorems are about formal provability within these systems, rather than about "provability" in an informal sense.

There are several properties that a formal system may have, including **completeness**, **consistency**, and the existence of an **effective axiomatization**. 

The incompleteness theorems show that systems which contain a sufficient amount of arithmetic cannot possess all three of these properties.



____

>In the case of formal systems, Gödel’s Second Incompleteness Theorem states, roughly, that the consistency of any sufficiently strong theory cannot be proved in that theory; for example, it is not possible to prove the consistency of Zermelo-Fraenkel (ZF) set theory from the axioms of ZF. Consequently, only a relative notion of consistency can be considered; i.e., given a set $\Sigma$ of axioms of a formal system and a statement $A$ in the language of that system, one asks whether $\Sigma \cup \{ A \}$  is consistent, assuming that $\Sigma$ is consistent. For example, Gödel proved in 1936 that, assuming ZF is consistent, so is ZFC, where ZFC is ZF set theory together with the Axiom of Choice. In addition, Cohen proved in 1963 that, assuming ZF is consistent, so is ZF + ¬AC, where ZF + ¬AC is ZF set theory together with the negation of the Axiom of Choice. 


https://en.wikipedia.org/wiki/G%C3%B6del%27s_incompleteness_theorems#Formal_systems:_completeness,_consistency,_and_effective_axiomatization

- A formal system is said to be **effectively axiomatized** (also called **effectively generated**) if its set of theorems is **recursively enumerable**
	- This means that there is a computer program that, in principle, could enumerate all the theorems of the system without listing any statements that are not theorems. Examples of effectively generated theories include Peano arithmetic and Zermelo–Fraenkel set theory (ZFC).


___

https://www.godel-universe.com/godels-theorems/