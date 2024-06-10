
# Basic Theorems

- (6.9) **Compactness Theorem** - Let $K$ be an infinite set of [[Logic/Predicate Logic/Syntax#Sentence|sentences]]. If every finite subset of $K$ is [[Logic/Predicate Logic/Semantic#Satisfiable Set|satisfiable]], then $K$ is satisfiable
- (6.10) **Löwenheim–Skolem theorem** - if a [[Logic/Predicate Logic/Syntax#Theory|theory]] $K$ [[Logic/Predicate Logic/Semantic#Model of Set|has an infinite model]], then it has also countable model
	- (6.10') if a theory $K$ has an infinite model, then for every infinite cardinality $\alpha$, the theory has model with cardinality $\alpha$
- (6.11a)
- (6.11b)
- (6.12) for every theory $K$, either
	- there exists $k \in \mathbb{N}$ such that $T\vdash \psi_{n}$, where $\psi_{n}$ is a sentence that says "there at most $n$ obejct, such that every model of T has at most $n$ objects". or,
	- T has models in every infinite cardinalities
- (6.13)



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
