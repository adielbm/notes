
- A **binary relation** $R$ defined as a subset of a [[Cartesian Product]] $A\times B$
	- A [[#Homogeneous Relation]] over a set $X$ is a binary relation over $X$ and itself, i.e. it is a subset of the cartesian product
		- It is also simply called a (binary) relation over $X$
	- A **heterogeneous relation** is a subset of a cartesian product $A \times B$, where $A$ and $B$ are possibly distinct sets
	- When an operation or proposition concerns a relation of either form, we sometimes give a hint 'possibly heterogeneous'

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

- An **equivalence relation** is a binary relation $R$ on $A$ that is reflexive, symmetric and transitive

### Equivalence Class

- The **equivalence class** of $a\in{A}$ under equivalence relation $R$ is the set $[a]=\{x \in A : x R a\}$ ^[20476 notation: $\overline{a}$]
- The [[Bell numbers|Bell number]] $B_{n}$ counts **the number of different ways to partition a set** that has exactly $n$ elements, or equivalently, **the number of equivalence relations** on it.

### Quotient Set

- The **quotient set** of $A$ induced by $R$ is the set of all equivalence classes of A under R, and denote by $R/A:=\{ [x]:x \in A \}$

#### Theorems 

- (q43) if $E_1, E_2$ are equivalence relations on a set $A$, then $E_1\cap{E_2}$ is also equivalence relation on $A$.

### Partition of a set

 - A **partition of a set** (quotient set) is a grouping of its elements into non-empty subsets that called **cells** (equivalence classes), in such a way that every element is included in exactly one subset.
 - Every equivalence relation on a set defines a partition of this set, and every partition defines an equivalence relation. (theorem 2.16)
 - A partition $P_1$ is called a **refinement** (עידון) of the partition $P_2$ if every set in $P_1$ is a subset of one of the sets in $P_2$.
