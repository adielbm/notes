

- **Hilbert Systems** are a class of proof systems for propositional and predicate logic. Their characteristics include
	- Axioms
	- Rule of Inferences: (Typically only Modus Ponens)


- A **Hilbert system**
	- A set of propositions that will be called the **logical axioms** (אקסיומות לוגיות) of the calculus. 
		- Naturally, these should be propositions whose truth we trust, but it is equally important that they be useful. The selection of axioms is not a process of discovering everything that is certainly true, but rather a process of identifying the facts that are clearly likely to be helpful in proving additional facts.
	- A set of rules, which will be called the **inference rules** (כללי גזירה) of the calculus. 
		- If we accept as proven several propositions, called the **assumptions** (הנחות), then according to the inference rules, we are allowed to add an additional proposition to the proven claims, which will be called the **conclusion** (מסקנה)



- A **proof sequence** (סדרת הוכחה) is a finite sequence of propositions in which each proposition is either a logical axiom or derived from propositions that appeared before it in the sequence through inference rules. (Typically, we think of the proof sequence as proving the last proposition appearing in the sequence, and we say it is a proof sequence for that proposition.) 
- A proposition that has a proof sequence is called a **provable** (יכיח) proposition (in the calculus)

#### Example (c4.3)

- **Our calculus** is an example of Hilbert calculus:
	- Language: The dialect $L_{\rightarrow }$ of the proposional language 
		- convectives: $\{ \lnot,\rightarrow \}$
		- the propositions are either elementary propositions, negation propositions in the form $\lnot{\varphi}$, or propositions in the form $(\varphi\rightarrow \psi)$
	- Axioms: (Each one is general form of one of infinite propositions. Also, these axioms are tautologies (q4.6))
		- $(\varphi\rightarrow (\psi\rightarrow \varphi))$
		- $([\varphi\rightarrow (\psi\rightarrow \theta)]\rightarrow [(\varphi\rightarrow \psi)\rightarrow (\psi\rightarrow \theta)])$
		- $[(\lnot \varphi\rightarrow \lnot\psi )\rightarrow (\psi\rightarrow \varphi)]$
	- Inference rules (actually one here)
		- Modus ponens $\displaystyle\frac{\varphi,(\varphi \rightarrow \psi)}{\psi}$

	- Definitions for our calculus:
	- Let $K$ be a set of propositions, a **proof sequence from a set** $K$ (in our calculus) is a sequence of propositions $\varphi_{1},\dots,\varphi_{n}$ such that each proposition in the sequence is either: 
		- A logical axiom
		- A proposition in the set $K$
		- Derived from two previous propositions in the sequence using modus ponens
	- A **proof sequence in the calculus** is proof sequence from the empty set. (i.e. each proposition is either a logical axiom or derived from two previous propositions)
	- A **proof sequence from $K$ to** $\varphi$ is a proof sequence from $K$, such that $\varphi$ is the last proposition
	- $\varphi$ is **theorem** (משפט) of $K$ (or is **provable** (יכיח) from $K$) and denoted by $K \vdash \varphi$, if and only if it has (at least one) proof sequence from $K$ 


- (Theorem 4.2, (note: these properties are not unique to our calculus))
	- If $\varphi_{1},\dots,\varphi_{n}$ is a proof sequence from $K$, then for each $i\leq n$ the proof sequence $\varphi_{1},\dots,\varphi_{i}$ is is a proof sequence from $K$. ( #todo )
	- If $\varphi_{1},\dots,\varphi_{n}$ is a proof sequence from $K$, and $\psi_{1},\dots,\psi_{n}$ is also a proof sequence from $K$, then  $\varphi_{1},\dots,\varphi_{n},\psi_{1},\dots,\psi_{n}$
	- If $K\vdash \varphi$ and $K \subseteq K'$ then $K' \vdash \varphi$
	- If $\varphi$ is a theorem of $K$, and $K \cup \{ \varphi \}\vdash \psi$ then $K \vdash \psi$. 
		- Similarly, $\varphi_{1},\dots,\varphi_{n}$ are theorems of $K$ and $K\cup \{ \varphi_{1},\dots,\varphi_{n} \}\vdash \psi$ then $K\vdash \psi$.
	- If $K \vdash \varphi$ then there exists a finite subset of $K'$ such that $K' \vdash \varphi$


>We can show that a proposition is a *theorem* (provable), using either showing its proof sequence or using t4.3 below


##### Deduction (4.3.2)

- lemma:
	- if $\varphi$ is a logical axiom or $\varphi \in K$ then $K \vdash \varphi$
	- if $K \vdash \psi$ and $K \vdash (\psi\rightarrow\varphi )$ then $K \vdash \varphi$
	- if $K \vdash \varphi$ then for each proposition $\psi$: $K\vdash(\psi \rightarrow \varphi)$
	- for each proposition $\varphi$: $K\vdash(\varphi \rightarrow \varphi )$
- (4.2) Deduction theorem: if $K\cup \{ \psi \}\vdash\varphi$ then $K\vdash(\psi\rightarrow\varphi)$
	- example: arrow transitivty

##### Consistency (4.3.3)

- A set of propositions $K$ is said to be **inconsistent** if there exists a proposition $\varphi$ such that $K ⊢ \varphi$ and $K ⊢ ¬\varphi$. Moreover, $K$ is **consistent** if for no proposition $\varphi$ we have $K ⊢ \varphi$ and $K ⊢ ¬\varphi$
	- (Lemma) Let $K$ be an infinite set of proposition. If $K$ is inconsistent, then there exists a finite inconsistent subset of $K$. 
	- q4.7 #todo 
	- Proof by Contradiction Theorem (4.3)
		- For each proposition $\varphi$: $\{ \psi,\lnot\psi \}\vdash\varphi$
		- If $K$ is inconsistent, then $K\vdash{\varphi}$ for each proposition $\varphi$
		- If $K\cup \{ \lnot \varphi \}$ is inconsistent, then $K\vdash{\varphi}$
	- examples #todo 

##### Soundness

- (4.4) **Soundness Theorem** (נאותות)
	- Let $K$ be a set of propositions and $\psi$ be a proposition. If $K\vdash \varphi$ (provable), then $K\implies\varphi$ ([[Logic/CS Logic (20466)/Propositional Logic/Semantic#Logical Implication|logically implied]]. common notation $K \models\varphi$)
		- In particular, if $\emptyset\vdash \varphi$ then, $\varphi$ is a tautology ($\models \varphi$)
		- Corollary: If a set of propositions has a model then it is consistent
##### Theory

- A a set of propositions is a **theory** iff it is consistent
	- i.e. $K$ is a **theory** iff there is no proposition $\varphi$ such that both $K\vdash{\varphi}$ and $K\vdash{\lnot{\varphi}}$ 
	- (In some books, the definitions requires the set is closed under logical implication)
- Syntactical completeness
	- A theory is a **complete theory** iff every proposition in it can be **proved** or **disproved**
	- A theory is a **complete theory** iff for every proposition $\varphi$, either $K\vdash{\varphi}$ or $K\vdash{\lnot{\varphi}}$

##### Completeness Theorem

- (4.5) A complete theory has unique model ( #todo is it iff?)
- (4.6) For each theory $K$ there exist a complete theory $\overline{K}$ such that $K\subseteq{\overline{K}}$
- (4.7) **Completeness Theorem** (*Semantic completeness*)
	- A theory has a model, or in an equivalence way, 
	- If a theory $K$ [[Logic/CS Logic (20466)/Propositional Logic/Semantic#Logical Implication|logically implies]] a proposition $\psi$ (denoted by $K \implies \psi$) then $\psi$ is *provable from* (or *theorem of*) $K$ (denoted by $K \vdash \psi$)


#### Example (c4.3.5)

- (4.3.5) Like Hilbert System (4.3) but with $L=\{ \lnot,\land,\lor,\to,\leftrightarrow \}$ and other axioms #todo


#### Example (q4.9)

q4.9 - $L=\{ \lnot,\to,\land \}$ and other axioms  #todo

#todo 