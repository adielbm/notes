# Model

- (c5.4) A **model** (or **structure**) $M = \langle A; c_1^M, \ldots; F_1^M, \ldots ;P_{1}^{M},\dots\rangle$ (or $M=(A,I)$) for a given [[Logic/Predicate Logic/Syntax#Non-logical symbols (Signature)|signature]] is defined as:
	- $A$ is a non-empty set called the **domain** ($A$ is sometimes denoted by $|M|$)
	- Interpretation Function $I$, assigns constants, functions and predicates, to the symbols of the signature, as follows:
		- For each constant symbol $c$, assigns $c^{M}\in{A}$
		- For each $n$-ary predicate symbol $P$, assigns an $n$-place relation $P^M\subseteq A^n$
		- For each $n$-ary function symbol $F$, assigns an $n$-ary function $F^{M}: A^{n}\to{A}$. 

> If we don't mention other, we are in **first-order logic with equality**, which means, the equality symbol ̇$=$ is defined as the identity relation $R = \{(x, x) : x \in A\}$

# Variable Assignment

- $V(\varphi)$ is the set of variables which occur freely in $\varphi$
- A **(variable) assignment** for a model $M$ with the domain $A$ is a mapping $S:\text{dom}(S)\to A$ where $\text{dom}(S)\subseteq{VAR}$
	- A **(variable) assignment** for a formula $\varphi$ is a mapping $S:\text{dom}(S)\to A$ where $V(\varphi)\subseteq\text{dom}(S)\subseteq{VAR}$ 
		- If $\varphi$ is a sentence, then every assignment is *for a formula* $\varphi$, because $V(\varphi)=\emptyset$
	- If $S$ is an assignment for a model $M$, and $x \in \text{VAR}$, and $a\in{A}$ we denote $S\langle{x|a}\rangle$ if $S(x)=a$

# Truth Value

## Truth Value of formula in Assignment

Given model $M$, and an assignment $S$ for a formula $\varphi$.

- If $\varphi$ is an atomic formula $P(t_{1},\dots,t_{n})$, then $\varphi$ is **true** if $(t_{1}^S,\dots,t_{n}^S)\in{P^M}$, otherwise $\varphi$ is **false**
- If $\varphi$ is the formula $\lnot{\psi}$, then $\varphi$ is **true** if is $\psi$ is false, otherwise $\varphi$ is **false**. (similar way for the other connectives as in as in propositional logic)
- If $\varphi$ is the formula $\exists x\psi$ then $\varphi$ is **true** if and only if there exists an element $a\in A$ such that $\psi$ is true in $S\langle{x|a}\rangle$
- If $\varphi$ is the formula $\forall x\psi$ then $\varphi$ is **true** if and only if for each element $a\in A$ the formula $\psi$ is true in $S\langle{x|a}\rangle$
- The **truth value** of a formula is **truth** if it is true, and **falsity**
- Notaion: if $\varphi$ is true we can denote $S(\varphi)=\mathsf{T}$ or $S\models{\varphi}$ or $M\models_{S}\varphi$. If $\varphi$ is false we denote $S(\varphi)=\mathsf{F}$ or $S\nvDash\varphi$ or $M\nvDash_{S}\varphi$.
- Given model $M$, and two assignments $S_{1}$ and $S_{2}$ for a formula $\varphi$, such that $S_{1}(x)=S_{2}(x)$ for each $x \in V(\varphi)$, then $S_{1}(\varphi)=S_{2}(\varphi)$.

## Truth Value of formula in Model

Given a model $M$

- If $\varphi$ is a sentence, then all assignments in $M$ give to $\varphi$ the same value. 
	- In case a sentence $\varphi$ is true (in some assignment, and therefore in every assignment) then we say that the sentence $\varphi$ is **true in the model** $M$, and denote $M\models{\varphi}$. 
	- Otherwise, if a sentence $\varphi$ is false (in some assignment, and therefore in every assignment) then we say that the sentence $\varphi$ is **false in the model** $M$, and denote $M\nvDash{\varphi}$.
- A formula $\varphi$ is **true in** $M$ (denoted by $M\models{\varphi}$), if for every assignment $S$ we have $M\models_{S}{\varphi}$ 
	- notation other terminology: $M$ **satisfied** $\varphi$; $M$ is a model of $\varphi$; $\varphi$ holds in $M$
	- If $x$ is a variable, then $\varphi$ is true in model $M$ if and only if $\forall x\varphi$ is true in $M$

## Logical Validity

- A formula $\varphi$ is **logically valid** if for every model $M$ we have $M\models{\varphi}$. 
	- (c5.6) אמיתית לוגית. (or **tautology** #todo)
- A formula $\varphi$ is **unsatisfiable** if for every model $M$ we have $M\not\models{\varphi}$.
- A formula $\varphi$ is **satisfiable** if there exists a model $M$ and an assignment $S$ such that $M_{S}\models{\varphi}$.

> Don't confuse with [[#First-order Tautologies]] here, or with [[Logic/Propositional Logic/Semantic#Tautology & Contradiction|tautology]] in prop. logic.

## Model of Set

- A model $M$ is said to be a **model of** a set of sentences $K$, (denoted by $M\models K$), if for each $\varphi \in K$ we have $M\models{\varphi}$

## Satisfiable Set

- A set of sentences $K$ is said to be **satisfiable** if there exists a model $M$ such that $M\models K$.
- **Soundeness Theorem (6.2)** - If $K$ is satisfiable, then it is [[Logic/Predicate Logic/Syntax#Theory|consistent]]

## Universal closure

- Given $V(\varphi)=\{ x_{1},\dots,x_{r} \}$, then $\forall x_{1}\dots \forall x_{r}\varphi$ the **universal closure** of the formula $\varphi$
	- The formula $\varphi$ is true in $M$ if and only if its universal closure $\forall x_{1}\dots \forall x_{r}\varphi$ is true in $M$


## Restricted languages

```
If the set of relation symbols, function symbols, and constant symbols of a language $L$ is a subset of the set of alphabet symbols of $L'$, then $L$ is called a **reduction** of the language $L'$, and $L'$ is called an **enrichment** of the language L. Every noun in $L$ is also a noun in $L'$, and every formula in $L$ is also a formula in $L'$. If M is a model in the extended language $L'$, then the reduction of M to the language $L$ is obtained by ignoring the relations and functions that have been named in $L'$ but are not in the language $L$ (on the other hand, if M is a model in the language L, then there are many enrichments of the model to a model in the language $L'$, because there are many functions and relations in the model to which the additional names can be assigned). It is important to note that the locality of the definition by induction (of the value of a noun in an assignment, and of the truth value of a formula in an assignment) ensures that the definition of the truth value of a formula does not depend on the interpretation that the model gives to the symbols that are not mentioned in the formula. In precise terms, this means:

- (Theorem 5.7) Let $M_{1}$ and $M_{2}$ be two models in the languages $L_{1}$ and $L_{2}$, respectively, whose domain is the same set $A$, such that every assignment in one model is also an assignment in the other model. Let $\varphi$ be a formula that is in the intersection of the two languages. If the two models interpret the relation symbols, the function symbols, and the constant symbols that appear in the formula ϕ in the same way, then for every assignment S in the domain A: $M_{1}⊨_{S}​\varphi\iff M_{2}⊨_{S}​\varphi$
	- In particular, if $L_{2}$ is a reduction of $L_{1}$ and $M_{2}$ is the reduction of $M_{1}$, then for every assignment $S$ and for every formula $\varphi$ in $L_{2}$: we have $M_{1}⊨_{S}​\varphi\iff M_{2}⊨_{S}​\varphi$
```

#todo 5.4.6
#todo 5.4.7

## Logical Equivalence

- Two formulas $φ$ and $ψ$ are **logically equivalent** (denoted by $φ\equiv ψ$) if and only if, $\varphi\leftrightarrow\psi$ is [[#Logical Validity|logically valid]]. i.e.
	- $φ\equiv ψ$ if and only if for each model $M$ and for each assignment $S$, we hold $S\models\varphi$ if and only if $S\models\psi$ 
	- (Theorem 5.8) 
		- if $\varphi\equiv \psi$ then: 
			- $\lnot\varphi\equiv \lnot\psi$
			- $\varphi@\theta\equiv\psi@\theta$ and $\theta@\varphi\equiv\theta@\psi$ (for any binary connective $@$)
			- $\forall x\varphi\equiv \forall x\psi$ and $\exists x\varphi\equiv \exists x\psi$ (for each varaible $x$)
		- If $\varphi'$ is arrived from $\varphi$ by replacing sub-formula $\psi$ in $\psi'$ where $\psi\equiv \psi'$ then $\varphi'\equiv \varphi$

## First-order Tautologies

- (5.9) Let $\varphi$ be a [[Logic/Propositional Logic/Syntax#Language|proposition]] where all its [[Logic/Propositional Logic/Syntax#Language|elementary proposition]] are from $P_1,\dots ,P_n$. And Let $\alpha_1,\dots,\alpha_n$ be formulas. And let $\varphi'$ be the string that is obtained by replacing each $P_i$ in $\varphi$ by $\alpha_i$. Then:
	- $\varphi'$ is a [[Logic/Predicate Logic/Syntax#Formulas|formula]]
	- If $M$ is a [[Logic/Propositional Logic/Semantic|model]] of the propositional logic, and $S$ is an [[#Variable Assignment|assignment]] of the predicate logic, where $M(P_i)=S(\alpha_i)$ for each $i\leq n$, then $M(\varphi)=S(\varphi')$
	- If $\varphi$ is a [[Logic/Propositional Logic/Semantic#Tautology & Contradiction|tautology]] then $\varphi'$ is [[#Logical Validity|logical valid]] and $\varphi'$ is called a **first-order tautology**.
- see also [[Predicate Calculus#Properties|Predicate Calculus (6.1)]]


## Logical Implication

- A formula $\varphi$ **logically implied** by a set of formulas $K$ (denoted by $K\models\varphi$) if for every model $M$ such that $M\models K$ ($M$ is a [[#Model of Set|model of]] $K$) we have $M\models\varphi$ ($M$ is a [[#Truth Value of formula in Model|model of]] $\varphi$).

## Minimal Language

#todo 


# Normal Forms
#### Prenex Normal Form (5.7.2)

- A formula $\varphi$ is said to be in **prenex form** if it is of the form $Q_{1}x_{1}Q_{2}x_{2} \dots Q_{n} x_{n} B$ where each $Q$ is either $∃$ or $∀$, and where $B$ contains no quantifiers. 
	- The sequence of quantifiers and variables at the beginning is called the **prefix**, and the quantifier-free formula that follows the **matrix**.
	- If $\varphi$ is in prenex form and its metrix is [[Logic/Propositional Logic/Semantic#CNF & DNF|DNF]] then it is said to be in **prenex normal form** (PNF)



# Definablity

## Set of Models

- Given a set of sentences $\Sigma$, the set $\text{Mod}(\Sigma)=\{ M \mid M \models \Sigma \}$ is called the **class of models** of $\Sigma$.
	- Example: $\text{Mod}(\{\forall x \forall y (x=y)\})$ is the class of all models in which the domain consists of exactly one element. 

## Definable Set of Models

- Given a set of models $K=\{M_1,M_2,\dots\}$, if there exists a set of sentences $\Sigma$ such that $K=\text{Mod}(\Sigma)$, then we say that $K$ is **definable** (גדירה) by $\Sigma$.



> [!EXAMPLE] Examples (the language is FOL with equality)
> 
>  - Ex. We denote $K_{\geq m}$ the set of models in $K$ with domain of size at least $m$.
> 	- $\varphi_m=\displaystyle\exists x_1 \exists x_2 \dots \exists x_m \bigwedge_{1 \leq i < j \leq m} (x_i \neq x_j)$
> 	- The set $K_{\geq m}$ is definable by the set $\Sigma \cup \{\varphi_m\}$ 
> - Ex. The set $K_{\geq 2}$ is definable by $\psi_2=\{\forall x_1 \forall x_2 \forall x_3 (x_1=x_2) \lor (x_1=x_3) \lor (x_2=x_3)\}$
> - Ex. The set $K_{\leq m}$ is definable by $\displaystyle\psi_m=\{\forall x_1 \forall x_2 \dots \forall x_m \bigvee_{1 \leq i < j \leq m+1} (x_i = x_j)\}$
> - Ex. The set $K_{n}$ (the set of models with domain of size $n$) is definable by $\Sigma=\{\psi_n,\varphi_n\}$.
> - Ex. The set $K_{\infty}$ (the set of all infinite models) is definable by $\Sigma=\{\varphi_1,\varphi_2,\dots\}$. (i.e. $K_{\infty}=\text{Mod}(\{\varphi_1,\varphi_2,\dots\})$)
> - Ex. The set $K_{\text{finite}}$ (the set of all finite models) is not definable. (#todo prove it using compactness theorem)
> 

## Definable Set of Constants, Functions, and Relations in a Model

- Given a language $L$ and a model $M=\langle D;\dots\rangle$ where $D$ is the domain of $M$.
	- An element $a\in D$ is **definable** if there exists a formula $\varphi(x)$ such that $M\models{\varphi(a)}$, and for every $b\in D$ we have $M\models{\varphi(b)}$ if and only if $a=b$.
	- A set $A\subseteq D$ is **definable** if there exists a formula $\varphi(x)$ such that $M\models{\varphi(a)}$ if and only if $a\in A$.
	- A $n$-ary predicate $P$ in the model $M$ is **definable** if there exists a formula $\varphi(x_1,\dots,x_n)$ such that $M\models{\varphi(a_1,\dots,a_n)}$ if and only if $(a_1,\dots,a_n)\in P$.


> [!NOTE]
> - Exercies: 
> 	- Given a language $L=\{F,G,N,a,p\}$ where $F$ and $G$ are binary function symbols, $N$ is a unary function symbol, $a$ and $p$ are constants symbols.
> 	- Given a model $M=\langle \mathbb{N}; +, \cdot, s(x)=x+1, 0, 1 \rangle$ where $\mathbb{N}$ is the set of natural numbers.
> 	- Is $0$ definable in $M$? Yes, by the formula $\varphi(x):=(x=0)$
> 	- Is $3$ definable in $M$? Yes, by the formula $\varphi(x):=(x=s(s(1)))$
> 	- Is the set $\{1,3\}$ definable in $M$? Yes, by the formula $\varphi(x):=((x=1)\lor(x=s(s(1))))$
> 	- Is the set of even numbers definable in $M$? Yes, by the formula $\varphi(x):=(\exists y (x=y+y))$
> 	- Is the set of odd numbers definable in $M$? Yes, by the formula $\varphi=(\exists y (x=s(y+y)))$ or by $\varphi(x):=\lnot(\exists y (x=y+y))$
> 	- Is the set of prime numbers definable in $M$? Yes, by the formula $\varphi(x):=(\forall y \forall z (x=y\cdot z)\to((y=x)\lor(z=x))\land\lnot(x=0)\land\lnot(x=1))$
> 	- Is the predicate $<$ definable in $M$? Yes, by the formula $\varphi(x,y):=(\exists z (x+z=y)\land\lnot(z=0))$
> - Exercies: Given a language $L=\{F\}$ where $F$ is a binary function symbol. And given a model $M=\langle \mathbb{N}; + \rangle$ where $\mathbb{N}$ is the set of natural numbers. 
> 	- Is $0$ definable in $M$? Yes, by the formula $\varphi(x):=F(x,x)=x$
> - Exercies: Given a language $L=\{R\}$ where $R$ is a binary relation symbol. And given a model $M=\langle \mathbb{N}; < \rangle$ where $\mathbb{N}$ is the set of natural numbers. 
> 	- Is $0$ definable in $M$? Yes, by the formula $\varphi(x):=\lnot(\exists y (R(x,y)))$
> - Exercies: Given a language $L=\set{R}$ where $R$ is a binary relation symbol. And given a model $M=\langle \mathbb{Z}; < \rangle$ where $\mathbb{Z}$ is the set of integers. 
> 	- Is $0$ definable in $M$? No.
