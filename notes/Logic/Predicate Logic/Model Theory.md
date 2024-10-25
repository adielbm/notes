
# Basic Theorems

- (6.9) **Compactness Theorem** - Let $K$ be an infinite set of [[Logic/Predicate Logic/Syntax#Sentence|sentences]]. If every finite subset of $K$ is [[Logic/Predicate Logic/Semantic#Satisfiability|satisfiable]], then $K$ is satisfiable
- (6.10) **Löwenheim–Skolem theorem** - if a [[Logic/Predicate Logic/Syntax#Theory|theory]] $K$ [[Logic/Predicate Logic/Semantic#Truth Value in Model|has an infinite model]], then it has also countable model
	- (6.10') if a theory $K$ has an infinite model, then for every infinite cardinality $\alpha$, the theory has model with cardinality $\alpha$
- (q6.6) Given a predicate language $L$ and a set of sentences $K$ and let $L'$ be the language obtained by adding constants, functions, and predicates to $L$. let $\varphi$ be a sentence in $L$. Then #todo
- (6.11)
	- (A.) _There is no theory force a model to be the set of all natural numbers_:
		- Let $L$ a predicate language such that the set of all natural numbers is the domain of some model of $L$. Let $T$ be the set of all sentences in $L$ that are true in the model. Then $T$ has also models which are not countable. Moreover, $T$ has models in every infinite cardinality.
	- (B.) _There is no theory force a model to be the set of all real numbers_:
		- Let $L$ a predicate language such that the set of all real numbers is the domain of some model of $L$. Let $T$ be the set of all sentences in $L$ that are true in the the model. Then $T$ has also models which are countable.
- (6.12) _It is impossible to characterize in the language the finite models_: 
	For every theory $K$, one and only one of the following holds:
	- there exists $k \in \mathbb{N}$ such that $T\vdash \psi_{n}$, where $\psi_{n}$ is a sentence that says "there at most $n$ obejct, such that every model of T has at most $n$ objects". or,
	- T has models in every infinite cardinalities
- (6.13) Let $T$ be a theory that has finite models. (i.e. for all $n$ there exists a finite model of $T$ with domain of size at least $n$). Let $\Phi=\{\varphi_n \mid n\in \mathbb{N}\}$ such that $\varphi_n$ is a sentence that says "there at least $n$ obejcts in the domain". Then:
	- (A.) $T\cup \Phi$ is a theory whose models are exactly the finite models of $T$.
	- (B.) There is no theory (finite or infinite) $\Phi'$ such that the models of $T\cup \Phi'$ are exactly the finite models of $T$.
	- (C.) There is no finite set $\theta_1,\dots,\theta_k$ such that the models of $T\cup \{\theta_1,\dots,\theta_k\}$ are exactly the infinite models of $T$.

# Exapmles

Here are some important [[Logic/Predicate Logic/Syntax#Theory|theories]] in mathematics. 

## Theories of Order

In the language there is one binary relation symbol $<$. (we prefer to denote $t<s$ instead of $<(t,s)$)

### Partial Order

- $T_{\text{order}}$, has two axioms:
	- $\forall v_0 \lnot(v_0<v_0)$ (irreflexivity)
	- $\forall v_0 \forall v_1 \forall v_2 ((v_0<v_1)\land(v_1<v_2))\to(v_0<v_2)$ (transitivity)

> See also: [[Binary Relation#Transitive Relations]] (strict partial order)

> [!Exercise]
> Prove that $T_{\text{order}}\vdash \forall v_0 \forall v_1 ((v_0<v_1)\to\lnot(v_1<v_0))$ 

###  Linear Order (Total Order)

- $T_{\text{LO}}$=$T_{\text{order}}\cup\{\forall v_0 \forall v_1 (v_0=v_1)\lor(v_0<v_1)\lor(v_1<v_0)\}$ (totality)

> See also: [[Binary Relation#Transitive Relations]] (strict total order)

> [!Exercise]
> (1.) Show that for all $n$, $T_{\text{LO}}$ has a model with domain of size $n$. (every two such are isomorphic).
> (2.) There is also infinite models. Show two such models. (which are not isomorphic)

### Dense Linear Order

- $T_{\text{DLO}}$ is $T_{\text{LO}}$ with the following axioms:
	- $\forall v_0 \forall v_1 ((v_0<v_1)\to\exists v_2 ((v_0<v_2)\land(v_2<v_1)))$ (dense)
	- $\forall v_0 \exists v_1 \exists v_2 ((v_0<v_1)\land(v_2<v_0))$ (no first or last element)

> [!Exercise]
> Prove that every model of $T_{\text{DLO}}$ is infinite.

## Theories of Groups

The language has a constant $0$, a unary function symbol, $-$, amd a binary function symbol, $+$. 

### Group Theory

- $T_{\text{G}}$ has the following axioms:
	- $\forall x \forall y \forall z (((x+y)+z)=x+(y+z))$ (associativity)
	- $\forall x (x+0)=x$ (identity)
	- $\forall x ((-x+x)=0)$ (inverse)

> [!Exercise]
> Prove that $T_{\text{G}}\vdash \forall x \forall y \forall z (((x+y)=(x+z))\to(y=z))$ (cancellation law)

> See also: [[Group Theory]]

### Commutative Group Theory

- $T_{\text{CG}}=T_{\text{G}}\cup\{\forall x \forall y ((x+y)=(y+x))\}$ (commutativity)

## Theory of Fields

The language is the same as the group theory with an additional binary function symbol, $\cdot$, and a constant symbol, $1$.

The axioms of the theory $T_{\text{F}}$ are the axioms of the commutative group theory with the following additional axioms:

- $\forall x \forall y \forall z ((x\cdot(y\cdot z))=((x\cdot y)\cdot z))$ (associativity)
- $\forall x (x\cdot 1)=x$ (identity)
- $\forall x (\lnot(x=0)\to(\exists y (x\cdot y)=1))$ (inverse)
- $\forall x \forall y ((x\cdot y)=(y\cdot x))$ (commutativity)
- $\forall x \forall y \forall z ((x\cdot(y+z))=((x\cdot y)+(x\cdot z)))$ (distributivity)

> Imortant models of the theory are the rational numbers, the real numbers, and the complex numbers. But there are also finite models, such as $Z_p$ (the integers modulo $p$) for a prime number $p$.
> Exmaple for sentence that is true in the field of real numbers but not in the field of rational numbers: $\exists y (y\cdot y=1+1)$. (see more in [[Real Numbers#Completeness of R]])

> See also: [[Abstract Algebra/Field]]

> [!Exercise]
> Prove that $T_{\text{F}}\vdash \forall x (x\cdot 0=0)$. (zero property)
> 

# Definable set

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
> 		- Is $0$ definable in $M$? 
> 			- Yes, by the formula $\varphi(x):=(x=0)$
> 		- Is $3$ definable in $M$? 
> 			- Yes, by the formula $\varphi(x):=(x=s(s(1)))$
> 		- Is the set $\{1,3\}$ definable in $M$? 
> 			- Yes, by the formula $\varphi(x):=((x=1)\lor(x=s(s(1))))$
> 		- Is the set of even numbers definable in $M$? 
> 			- Yes, by the formula $\varphi(x):=(\exists y (x=y+y))$
> 		- Is the set of odd numbers definable in $M$? 
> 			- Yes, by the formula $\varphi=(\exists y (x=s(y+y)))$ or by $\varphi(x):=\lnot(\exists y (x=y+y))$
> 		- Is the set of prime numbers definable in $M$? 
> 			- Yes, by the formula $\varphi(x):=(\forall y \forall z (x=y\cdot z)\to((y=x)\lor(z=x))\land\lnot(x=0)\land\lnot(x=1))$
> 		- Is the predicate $<$ definable in $M$? 
> 			- Yes, by the formula $\varphi(x,y):=(\exists z (x+z=y)\land\lnot(z=0))$
> - Exercies: Given a language $L=\{F\}$ where $F$ is a binary function symbol. And given a model $M=\langle \mathbb{N}; + \rangle$ where $\mathbb{N}$ is the set of natural numbers. 
> 	- Is $0$ definable in $M$? 
> 		- Yes, by the formula $\varphi(x):=F(x,x)=x$
> - Exercies: Given a language $L=\{R\}$ where $R$ is a binary relation symbol. And given a model $M=\langle \mathbb{N}; < \rangle$ where $\mathbb{N}$ is the set of natural numbers. 
> 	- Is $0$ definable in $M$? 
> 		- Yes, by the formula $\varphi(x):=\lnot(\exists y (R(x,y)))$
> - Exercies: Given a language $L=\set{R}$ where $R$ is a binary relation symbol. And given a model $M=\langle \mathbb{Z}; < \rangle$ where $\mathbb{Z}$ is the set of integers. 
> 	- Is $0$ definable in $M$? No.
> - Exercies: Given model $M=\langle \mathbb{R}; N, +, \cdot, \rangle$ where $\mathbb{R}$ is the set of real numbers, and $N$ an unary relation symbol that indicates if a number is a natural number.
> 	- Define the relation $<$ in $M$ on the set of natural numbers.
> 		- By the formula $\varphi(x,y):=(N(x)\land N(y)\land\exists z (N(z)\land x+z=y)\land\lnot(x=y))$
> 	- Define the division on real numbers in $M$.
> 		- By the formula $\varphi(x,y):=(\exists z (x\cdot z=y))$



# Submodels

- A model $M'=\langle B,\dots\rangle$ is a **submodel** of a model $M=\langle A,\dots\rangle$ if $B\subseteq A$ the interpretation of the symbols in $M'$ is the same as in $M$:
	- For every constant symbol $c$ in $L$, we have $c^{M}=c^{M'}$
	- For every n-ary function symbol in $L$, and for all $a_{1},\dots,a_{n}\in B$ we have: $f^{M}(a_{1},\dots,a_{n})=f^{M'}(a_{1},\dots,a_{n})$
	- For every n-ary relation symbol in $L$, and for all $a_{1},\dots,a_{n}\in B$ we have: $(a_{1},\dots,a_{n})\in R^{M}\iff (a_{1},\dots,a_{n})\in R^{M'}$

## Universal and Existential Formulas

> The following terminology is intenal to the book and not (necessarily) standard in the literature.

- A **quantifier-­free** formula is a formula that obtained from atomic formulas by using only the binary connectives and the negation connective, but not the quantifiers.
- If $\varphi$ is a quantifier-free formula then the formula $\exists x_1 \dots \exists x_n \varphi$ is called a **prenex-existential formula**.
	- A formula that obtained from a prenex-existential formula by a sequence of Boolean operations $\land,\lor$ and adding $\exists$ quantifiers is called a **existential formula**.
- If $\varphi$ is a quantifier-free formula then the formula $\forall x_1 \dots \forall x_n \varphi$ is called a **prenex-universal formula**.
	- A formula that obtained from a prenex-universal formula by a sequence of Boolean operations $\land,\lor$ and adding $\forall$ quantifiers is called a **universal formula**

## Submodel Theorems

- (8.1) Let $M'=\langle B,\dots\rangle$ be a submodel of a model $M=\langle A,\dots\rangle$, and $a_{1},\dots,a_{n}\in B$, and $x_{1},\dots,x_{n}$ are variables. Let be [[Predicate Logic/Syntax#Substitution|substitutions]] $S$ and $S'$ in $M$ and $M'$ respectively, s.t. $S(x_i)=S'(x_i)=a_i$ for all $i\leq n$. Then:
	- If $t$ is a term in variables $x_1,\dots,x_n$, then $S(t)=S'(t)$.
	- If $\varphi$ is a quantifier-free formula in variables $x_1,\dots,x_n$, then $S\models{\varphi}\iff S'\models{\varphi}$.
	- If $\varphi$ is an universal formula in variables $x_1,\dots,x_n$, then $S\models{\varphi}\implies S'\models{\varphi}$.
	- If $\varphi$ is an existential formula in variables $x_1,\dots,x_n$, then $S\models{\varphi}\impliedby S'\models{\varphi}$.

> When we say that a formula is _in variables $x_1,\dots,x_n$_, we mean that the formula contains only the variables $x_1,\dots,x_n$ ???? #todo

- Let $A$ be a set, and $\mathbb{F}$ be a **family of functions** on $A$. For every set $B\subseteq A$, we denote $B'$ the set $B$ with its images, i.e. $B'=B\cup\{f(a_1,\dots,a_{n_f})\mid a_1,\dots,a_{n_f}\in B, f\in \mathbb{F}\}$. (where $n_f$ is the arity of $f$). For every set $B_0\subseteq A$, we define using induction increasing sequence of sets $B_{n+1}=(B_n)'$. We define $\overline{B_0}=\bigcup_{n\in \mathbb{N}} B_n$. We say that $\overline{B_0}$ is the **closure** of $B_0$ under the functions in $\mathbb{F}$.
- The closure has the following properties:
	- $B_0\subseteq \overline{B_0}$
	- $\overline{B_0}$ is closed under the functions in $\mathbb{F}$.
	- $\overline{B_0}$ is the minimal set with this property: If $B_0\subseteq C \subseteq A$ and $C$ is closed under the functions in $\mathbb{F}$, then $\overline{B_0}\subseteq C$.
	- ($\overline{B_0}$ is not "very big" in terms of cardinality) If $B_0$ and $\mathbb{F}$ are countable, then $\overline{B_0}$ is countable. (If $\mathbb{F}$ is countable but $B_0$ is not, then $\overline{B_0}$ and $B_0$ have the same cardinality)

- (8.2) 
	- (A.) Let $L$ be a language with at least one constant symbol, and let $M=\langle A,\dots\rangle$ be a model of $L$. Let $A_0$ be the set of all elements of $A$ that interpret constant symbols without variables, i.e. $A_0=\{t^{M}\mid t \text{ is a term without variables}\}$. Then $A_0$ is the domain of a submodel $M_0$ of $M$, and $M_0$ is the **minimal submodel** of $M$, that is $M_0$ is also a submodel of every submodel of $M$.
	- (B.) Let $M=\langle A,\dots\rangle$ be a model of $L$, and let $B\subseteq A$, and let $B_0$ be the set $B$ with the terms $c^{M}$, let $\overline{B}$ be the closure of $B_0$ under the functions in $L$. Then $\overline{B}$ is the domain of the minimal submodel of $M$ that contains $B$, and this submodel is the **submodel generated by $B$**.

- If $M$ is a model such that it has no proper submodels, then $M$ is called **minimal model**.