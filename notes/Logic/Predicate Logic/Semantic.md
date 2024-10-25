# Model

A **model** $\mathcal{M}$ for a [[Logic/Predicate Logic/Syntax#Non-logical symbols (Signature)|language]] $\mathcal{L}$ is a pair $(D, \mathcal{I})$ where:
- $D$ is a non-empty set called the **domain** of $\mathcal{M}$.
	- The elements of $D$ are called **objects** or **individuals**
	- (the notation $|\mathcal{M}|$ is sometimes used to denote the domain $D$, or its cardinality $|D|$)
- $\mathcal{I}$ is an **interpretation function** that:
	- For each constant symbol $c \in \mathcal{L}$, assigns an element $\mathcal{I}(c) \in D$.
	- For each $n$-ary function symbol $f \in \mathcal{L}$, assigns an $n$-ary function $\mathcal{I}(f): D^n \to D$.
	- For each $n$-ary predicate symbol $P \in \mathcal{L}$, assigns an $n$-ary relation $\mathcal{I}(P) \subseteq D^n$.
- For any non-logical symbol $s \in \mathcal{L}$, the object $\mathcal{I}(s)$ is called the **interpretation** of $s$ in $\mathcal{M}$.

> [!NOTE] **Terminology**
> - **domain**: domain of discourse, universe, underlying set
> - **model**: structure, interpretation, assignment
> - **interpretation function**: interpretation, assignment function

> If we don't mention other, we are in **first-order logic with equality**, which means, the equality symbol ̇$=$ is defined as the identity relation $R = \{(x, x) : x \in A\}$

## Variable Assignment

- $V(\varphi)$ is the set of variables which occur freely in $\varphi$
- A **(variable) assignment** for a model $M$ with the domain $A$ is a mapping $S:\text{dom}(S)\to A$ where $\text{dom}(S)\subseteq{VAR}$
	- A **(variable) assignment** for a formula $\varphi$ is a mapping $S:\text{dom}(S)\to A$ where $V(\varphi)\subseteq\text{dom}(S)\subseteq{VAR}$ 
		- If $\varphi$ is a sentence, then every assignment is *for a formula* $\varphi$, because $V(\varphi)=\emptyset$
	- If $S$ is an assignment for a model $M$, and $x \in \text{VAR}$, and $a\in{A}$ we denote $S\langle{x|a}\rangle$ if $S(x)=a$



# Truth Value

#### Truth Value in Assignment

Given model $M$, and an assignment $S$ for a formula $\varphi$.

- If $\varphi$ is an atomic formula $P(t_{1},\dots,t_{n})$, then $\varphi$ is **true** if $(t_{1}^S,\dots,t_{n}^S)\in{P^M}$, otherwise $\varphi$ is **false**
- If $\varphi$ is the formula $\lnot{\psi}$, then $\varphi$ is **true** if is $\psi$ is false, otherwise $\varphi$ is **false**. (similar way for the other connectives as in as in propositional logic)
- If $\varphi$ is the formula $\exists x\psi$ then $\varphi$ is **true** if and only if there exists an element $a\in A$ such that $\psi$ is true in $S\langle{x|a}\rangle$
- If $\varphi$ is the formula $\forall x\psi$ then $\varphi$ is **true** if and only if for each element $a\in A$ the formula $\psi$ is true in $S\langle{x|a}\rangle$
- The **truth value** of a formula is **truth** if it is true, and **falsity**
- Notaion: if $\varphi$ is true we can denote $S(\varphi)=\mathsf{T}$ or $S\models{\varphi}$ or $M\models_{S}\varphi$. If $\varphi$ is false we denote $S(\varphi)=\mathsf{F}$ or $S\nvDash\varphi$ or $M\nvDash_{S}\varphi$.
- Given model $M$, and two assignments $S_{1}$ and $S_{2}$ for a formula $\varphi$, such that $S_{1}(x)=S_{2}(x)$ for each $x \in V(\varphi)$, then $S_{1}(\varphi)=S_{2}(\varphi)$.

#### Truth Value in Model

Given a model $M$

- If $\varphi$ is a sentence, then all assignments in $M$ give to $\varphi$ the same value. 
	- In case a sentence $\varphi$ is true (in some assignment, and therefore in every assignment) then we say that the sentence $\varphi$ is **true in the model** $M$, and denote $M\models{\varphi}$. 
	- Otherwise, if a sentence $\varphi$ is false (in some assignment, and therefore in every assignment) then we say that the sentence $\varphi$ is **false in the model** $M$, and denote $M\nvDash{\varphi}$.
- A formula $\varphi$ is **true in** $M$ (denoted by $M\models{\varphi}$), if for every assignment $S$ we have $M\models_{S}{\varphi}$ 
	- notation other terminology: $M$ **satisfied** $\varphi$; $M$ is a model of $\varphi$; $\varphi$ holds in $M$
	- If $x$ is a variable, then $\varphi$ is true in model $M$ if and only if $\forall x\varphi$ is true in $M$
	- The formula $\varphi$ is true in $M$ if and only if its [[Logic/Predicate Logic/Syntax#Universal Closure|universal closure]] $\forall x_{1}\dots \forall x_{r}\varphi$ is true in $M$
- A model $M$ is said to be a **model of** a set of sentences $K$, (denoted by $M\models K$), if for each $\varphi \in K$ we have $M\models{\varphi}$

# Satisfiability

- A formula $\varphi$ is **satisfiable** if there exists a model $M$ and an assignment $S$ such that $M\models_{S}{\varphi}$.
- A formula $\varphi$ is **unsatisfiable** if for every model $M$ we have $M\not\models{\varphi}$.
- A set of sentences $K$ is said to be **satisfiable** if there exists a model $M$ such that $M\models K$
- A formula $\varphi$ is **falsifiable** (denoted by $\not\models\varphi$) if $\varphi$ is not logically valid 
- **Soundeness Theorem (6.2)** - If $K$ is satisfiable, then it is [[Logic/Predicate Logic/Syntax#Theory|consistent]]

# Logical Validity

- (c5.6) A formula $\varphi$ is **logically valid** (אמיתית לוגית) and denoted by $\models \varphi$, if for every model $M$ we have $M\models{\varphi}$. 

> A _logically valid_ formula can also be called a _tautology_, but we avoid this term to prevent confusion with [[#First-order Tautologies]] here or with [[Logic/Propositional Logic/Semantic#Logical Validity|tautology]] in propositional logic


> [!EXAMPLE] **Examples of logically valid formulas**:
> - $\forall x \varphi \rightarrow \varphi[t/x]$ (given  $\varphi[t/x]$ is a capture-avoiding [[Logic/Predicate Logic/Syntax#Substitution|substitution]])
> - $(\forall x \varphi \leftrightarrow \forall y \varphi[y/x])$ (given the variable $y$ is not appear in $\varphi$)
> - $(\lnot \forall x \varphi) \leftrightarrow (\exists x \lnot \varphi)$
> - $(\forall x \varphi) \leftrightarrow (\lnot \exists x \lnot \varphi)$ 
> - $(\lnot \exists x \varphi) \leftrightarrow (\forall x \lnot \varphi)$
> - $(\exists x \varphi) \leftrightarrow (\lnot \forall x \lnot \varphi)$


# Logical Equivalence

- Two formulas $φ$ and $ψ$ are **logically equivalent** (denoted by $φ\equiv ψ$) if and only if, $\varphi\leftrightarrow\psi$ is [[#Logical Validity|logically valid]]. i.e.
	- $φ\equiv ψ$ if and only if for each model $M$ and for each assignment $S$, we hold $S\models\varphi$ if and only if $S\models\psi$ 
	- (Theorem 5.8) 
		- if $\varphi\equiv \psi$ then: 
			- $\lnot\varphi\equiv \lnot\psi$
			- $\varphi@\theta\equiv\psi@\theta$ and $\theta@\varphi\equiv\theta@\psi$ (for any binary connective $@$)
			- $\forall x\varphi\equiv \forall x\psi$ and $\exists x\varphi\equiv \exists x\psi$ (for each varaible $x$)
		- If $\varphi'$ is arrived from $\varphi$ by replacing sub-formula $\psi$ in $\psi'$ where $\psi\equiv \psi'$ then $\varphi'\equiv \varphi$

# Logical Implication


- A formula $\varphi$ **logically implies** a formula $\psi$ (or $\psi$ **logically implied by** $\varphi$), and denoted by $\varphi \implies \psi$ (or more common $\varphi \models \psi$), if and only if, in every model $M$, if $M\models{\varphi}$ then $M\models{\psi}$. 
	- $\varphi$ logically implies a formula $\psi$ if and only if $\varphi\rightarrow{\psi}$ is logically valid
		- In other words, $\varphi \implies \psi$ if and only if $\models (\varphi\rightarrow{\psi})$

- (*semantic consequence*) A formula $\varphi$ **logically implied** by a set of formulas $K$ (denoted by $K\models\varphi$) if for every model $M$ such that $M\models K$ ($M$ is a [[#Truth Value in Model|model of]] $K$) we have $M\models\varphi$ ($M$ is a [[#Truth Value in Model|model of]] $\varphi$).

# First-order Tautologies

- (5.9) Let $\varphi$ be a [[Logic/Propositional Logic/Syntax#Propositions|proposition]] where all its [[Logic/Propositional Logic/Syntax#Propositions|elementary proposition]] are from $P_1,\dots ,P_n$. And Let $\alpha_1,\dots,\alpha_n$ be formulas. And let $\varphi'$ be the string that is obtained by replacing each $P_i$ in $\varphi$ by $\alpha_i$. Then:
	- $\varphi'$ is a [[Logic/Predicate Logic/Syntax#Formulas|formula]]
	- If $M$ is a [[Logic/Propositional Logic/Semantic|model]] of the propositional logic, and $S$ is an [[#Variable Assignment|assignment]] of the predicate logic, where $M(P_i)=S(\alpha_i)$ for each $i\leq n$, then $M(\varphi)=S(\varphi')$
	- If $\varphi$ is a [[Logic/Propositional Logic/Semantic#Logical Validity|tautology]] then $\varphi'$ is [[#Logical Validity|logical valid]] and $\varphi'$ is called a **first-order tautology**.
- see also [[Predicate Calculus#Properties|Predicate Calculus (6.1)]]
