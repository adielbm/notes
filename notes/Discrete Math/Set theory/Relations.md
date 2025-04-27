- A **binary relation** (or **relation**) $R$ from a set $A$ to a set $B$ is defined as a subset of a Cartesian Product $A\times B$
	- The set $A$ is called the **domain** of $R$
	- The set $B$ is called the **codomain** of $R$
	- The set $\{y\in{B}\mid \exists x\in{A}:(x,y)\in{R}\}$ is called the **codomain of definition** (or **image** or **range**) of $R$
	- The set $\{x\in{A}\mid \exists y\in{B}:(x,y)\in{R}\}$ is called the **domain of definition** of $R$.
	- The union $\text{domain-of-definition}(R)\cup\text{codomain-of-definition}(R)$ is called the **field** of $R$
	- An element $x\in{A}$ is said to be **related** to an element $y\in{B}$ by $R$ if $(x,y)\in{R}$, and we write $xRy$ or $R(x,y)$
	- A [[#Homogeneous Relation]] over a set $X$ is a binary relation over $X$ and itself, i.e. it is a subset of the cartesian product $X \times X$.
		- It is also simply called a (binary) relation over $X$
	- A **heterogeneous relation** is a subset of a cartesian product $A \times B$, where $A$ and $B$ are possibly distinct sets
	- When an operation or proposition concerns a relation of either form, we sometimes give a hint 'possibly heterogeneous'
#### Types

Given a binary relation $R$ from $A$ to $B$:

- injective (left-unique): $\forall x_1,x_2\in{A},\,\forall y\in{B}\,(x_1Ry\land x_2Ry\implies x_1=x_2)$
- functional (right-unique, univalent, partial function): $\forall x\in{A},\,\forall y_1,y_2\in{B}\,(xRy_1\land xRy_2\implies y_1=y_2)$
- one-to-one: injective and functional
- one-to-many: injective and not functional
- many-to-one: functional and not injective
- many-to-many: not injective nor functional
- total (left-total): $\forall x\in{A},\,\exists y\in{B}\,(xRy)$
- surjective (right-total): $\forall y\in{B},\,\exists x\in{A}\,(xRy)$
- [[Functions|function]] (mapping): functional and total
- injection: injective and function
- surjection: surjective and function
- bijection: injection and surjection

# Operations

### Composition

- Let $R$ and $S$ be relations from $A$ to $B$ and from $B$ to $C$, respectively. 
	- The **composition relation** of $R$ and $S$, denoted by $S \circ R$, is the relation from $A$ to $C$ defined as $S \circ R := \{(x, z) : \exists y \in B :(xRy \land ySz)\}$. 
	- $x(S \circ R)z \iff \exists y \in B :xRy \land ySz$
	- $S \circ R$ is also denoted by $R; S$ and $RS$
- Composition of relations is associative: $R(ST)=(RS)T$
- Let $R$ be a relation on the set $A$. 
	- The powers $R^n$, $n = 1, 2, 3, …$ , are defined recursively by $R^1 = R$ and $R^n+1 = Rn ◦ R$
	- **Relation Squared** - Let $R$ relation on $A$. then $aR^2b\iff\exists{x}\in{A}:(aRx\land xRb)$
	- $R$ is transitive if and only if $R^n ⊆ R$ for $n = 1, 2, 3, …$

### Converse

- The **converse relation** (or **inverse relation**) of a relation $R$ is the relation $\displaystyle  R^{-1}:=\{(b,a):aRb\}$ (also denote by $R^{\textsf {T}}$) 
	- If a **relation** is reflexive, irreflexive, symmetric, antisymmetric, asymmetric, transitive, connected, trichotomous, a partial order, total order, strict weak order, total preorder (weak order), or an equivalence relation, **its converse is too**.
	- Let $R$ relation from $A$ to $B$, and $S$ relation from $B$ to $C$, then $(RS)^{-1}=S^{-1}R^{-1}$
### Complement

- The **complementary relation** of a relation $R$ in $A\times{B}$ is the relation $\overline{R}:=(A\times{B})\setminus{R}=\displaystyle  {\overline {R}}=\{(x,y):{\text{ not }}xRy\}$
	- The complement of the converse relation $R^{-1}$ is the converse of the complement: $\overline{R^{-1}} = (\overline{R})^{-1}$

# Homogeneous Relation

|  | $\forall a,b,c\in X,\quad  \emptyset\neq R \subseteq X\times X$ |
| ---- | ---- |
| Reflexive | $aRa$ |
| Irreflexive | not $aRa$ |
| Symmetric | $aRb \implies bRa$ |
| Antisymmetric | $aRb \land bRa \implies a=b$ |
| Asymmetric | $aRb \implies$ not $bRa$ |
| Connected (total) | $a\neq{b} \implies aRb \lor bRa$ |
| Strongly Connected | $aRb \lor bRa$ |
| Transitive | $aRb \land bRc\implies aRc$ |
| Trichotomy | exactly one of $aRb$, $bRa$ and $a=b$ holds |


## Theorems

- (d2.10) - asymmetry implies antisymmetric
- (q29) - asymmetry implies **irreflexivity**
- (q54a) - **Irreflexivity** and **transitivity** together imply asymmetry
- $R$ is connected if and only if $R^{-1}$ is antisymmetric
- A relation is strongly connected if, and only if, it is connected and reflexive
- If a strongly connected relation is symmetric, it is the universal relation.
- A relation is trichotomous if, and only if, it is asymmetric and connected.


### Reflexivity

- (q18) - if $R$ reflexive, then $R\subseteq{R^2}$
- (q20a) - if $R\subseteq{S}$ reflexive, then $S$ also reflexive
- (q20b) - if $R$ reflexive, then ${R^2}$ also reflexive
- (q20c) - $R$ reflexive, if and only if, $R^{-1}$ also reflexive 
- (q20d) - if $R,S$ are reflexive, then $R\cap{S},R\cup{S}$ are reflexive
- (q22) - if $R$ is irreflexive, then $S\subseteq{R}$ is also irreflexive

### Symmetry

- (q23) - $R$ is symmetric if and only if $R^{-1} = R$ 
- (q24) - composite of symmetric relations is symmetric
- (q26) - if $R,S$ are symmetric, then $R\cap{S},R\cup{S}$ are symmetric
- (q27) - let $R$ relation, then $R\cap{R}^{-1}$ and $R\cup{R}^{-1}$ are symmetric

- (q30a) - if $R$ is asymmetric, then $R^{-1}$ is also asymmetric
- (q30b) - if $R$ is antisymmetric, then $R^{-1}$ is also antisymmetric
- (q31a) -  if $R$ is asymmetric, then $S\subseteq{R}$ is also asymmetric.
- (q31b) -  if $R$ is antisymmetric, then $S\subseteq{R}$ is also antisymmetric.
- (q32b) - if $R,S$ are asymmetric, then $R\cap{S}$ is asymmetric
- (q33b) - if $R,S$ are antisymmetric, then $R\cap{S}$ is antisymmetric

### Transitivity

- (theorem 2.12) $R$ is transitive if and only if $R^2\subseteq{R}$
- $R$ is transitive if and only if $R^n ⊆ R$ (for $n = 1, 2, 3, …$ )
- (q36a) - if $R,S$ are transitive, then $R\cap{S}$ is transitive

## Transitive Relations 

> in general, *strict* means *irreflexive*, *total* means *connected*, *partial* means not (necessarily) *total*.

- **partial order** (or **partial ordering**, or **order**)
	- transitive, reflexive, antisymmetric
- **total order** (or **linear order**)
	- transitive, reflexive, antisymmetric, connected
- **strict partial order**
	- transitive, irreflexive
	- transitive, asymmetric
- **strict total order**
	- transitive, connected, irreflexive
	- transitive, connected, asymmetric

### Ordered Sets

- A **partially ordered set** (or **poset**) is a set on which a partial order is defined
- A **totally ordered set** (or **linearly ordered set**, **chain**, **toset**) is a set on which a total order is defined

## Equivalence relation

- An **equivalence relation** is a binary relation $R$ (often denoted by $\sim$) on a set $A$ that is reflexive, symmetric and transitive.
- The **equivalence class** of $a\in{A}$ under equivalence relation $R$ is the set $[a]=\{x \in A : x R a\}$ (sometimes $\overline{a}$)
- The [[Bell numbers|Bell number]] $B_{n}$ counts the number of different ways to partition a set that has exactly $n$ elements, or equivalently, the number of equivalence relations on it.
- The **quotient set** of $A$ induced by $R$ is the set of all equivalence classes of A under R, and denote by $R/A:=\{ [x]:x \in A \}$
- (q43) if $E_1, E_2$ are equivalence relations on a set $A$, then $E_1\cap{E_2}$ is also equivalence relation on $A$.
- (**Fundamental Theorem of Equivalence Relations**) Every equivalence relation on a set defines a partition of this set (in which the the cells are the equivalence classes, and the partition is the quotient set), and vice versa.

## Partition

- A **partition** of $A$ is a set of non-empty pairwise disjoint sets whose union is $A$
	- The sets in the partition are called **cells** (or **blocks**)
	- If $a\in A$ then the cell containing $a$ is denoted by $[a]$
	- A partition $P_1$ is called a **refinement** (עידון) of the partition $P_2$ if every set in $P_1$ is a subset of one of the sets in $P_2$.



# Misc.

### Transitive realtions full table

|                                             |  Reflexive |  Irreflexive |  Symmetric |  Antisymmetric |  Asymmetric |  Connected |
| ------------------------------------------- | ---------- | ------------ | ---------- | -------------- | ----------- | ---------- |
|  [[#Equivalence relation]]                       | TRUE       |              | TRUE       |                |             |            |
|  Preorder (Quasiorder)                      | TRUE       |              |            |                |             |            |
|  Partial order, (סדר חלקי 80181, חלש)       | TRUE       |              |            | TRUE           |             |            |
|  Total preorder                             | TRUE       |              |            |                |             | TRUE       |
|  Total order, linear order, (מלא, ליניארי)  | TRUE       |              |            | TRUE           |             | TRUE       |
|  Prewellordering                            | TRUE       |              |            |                |             | TRUE       |
|  Well-quasi-ordering                        | TRUE       |              |            |                |             |            |
|  Well-ordering                              | TRUE       |              |            | TRUE           |             | TRUE       |
|  Lattice                                    | TRUE       |              |            | TRUE           |             |            |
|  Join-semilattice                           | TRUE       |              |            | TRUE           |             |            |
|  Meet-semilattice                           | TRUE       |              |            | TRUE           |             |            |
|  **Strict partial order,(סדר חלקי 20476, חזק)** |            | TRUE         |            |                | TRUE        |            |
|  Strict weak order                          |            | TRUE         |            |                | TRUE        |            |
|  **Strict total order, (יחס סדר מלא 20476)**                         |            | TRUE         |            |                | TRUE        | TRUE       |
