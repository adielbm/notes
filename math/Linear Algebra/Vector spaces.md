# Vector Space

## Definition

A **vector space** over a [[Field|field]] $F$ is a non-empty set $V$ together with a binary operation and a binary function that satisfy the eight axioms listed below. 
- In this context, the elements of $V$ are commonly called **vectors**, and the elements of $F$ are called **scalars**.
- The binary operation, called **vector addition** or simply **addition** assigns to any two vectors $v$ and $w$ in $V$ a third vector in $V$ which is commonly written as $v + w$, and called the sum of these two vectors.
- The binary function, called **scalar multiplication**, assigns to any scalar $a$ in $F$ and any vector $v$ in $V$ another vector in $V$, which is denoted $av$

|  | Vector space axioms |  |
| ---- | ---- | ---- |
| **Vector Addition** | Associativity | $u + (v + w) = (u + v) + w$ |
|  | Commutativity | $u + v = v + u$ |
|  | Identity element |  |
|  | Inverse elements |  |
| **Scalar Multiplication** | Distributivity (vector addition) | $a(u + v) = au + av$ |
|  | Distributivity (field addition) | $(a + b)v = av + bv$ |
|  | Compatibility with field multiplication | $a(bv) = (ab)v$ |
|  | Identity element |  |

>it has to add closure property (for vector addition and scalar mul.) depending on definition of binary operation

> An equivalent definition of a vector space can be given: the first four axioms (related to vector addition) say that a vector space is an [[Group Theory#Abelian Group (Commutative Group)|abelian group]] under addition, and the four remaining axioms (related to the scalar multiplication) say that this operation defines a ring homomorphism from the field F into the endomorphism ring of this group

## Properties

(7.2)

- $0\mathbf{u}=\mathbf{0}$
- $k\mathbf{0}=\mathbf{0}$
- $(-1)\mathbf{u}=-\mathbf{u}$
- $(-k)\mathbf{u}=k(-\mathbf{u})=-(k\mathbf{u})$
- $k\mathbf{u}=\mathbf{0}\implies k=0\lor \mathbf{u=\mathbf{0}}$
- $\mathbf{u}+\mathbf{u}=\mathbf{u}\implies \mathbf{u}=\mathbf{0}$
- $-(-\mathbf{u})=\mathbf{u}$
- $-(\mathbf{u}+\mathbf{v})=(-\mathbf{u})+(-\mathbf{v})$
- $\mathbf{u}-\mathbf{v}=\mathbf{0}\implies \mathbf{u}=\mathbf{v}$

## Examples

- $\mathbb{R}^n$ is a vector space over $\mathbb{R}$ 
- $\mathbb{C}^n$ is a vector space over $\mathbb{C}$
- $\mathbb{F}^{n}$ is a vector space over $\mathbb{F}$
- $\mathbf{M}_{m\times n}(\mathbb{F})$ (the set of all $m\times n$ matrices with entries in $\mathbb{F}$) is a vector space over $\mathbb{F}$
	- $\mathbf{M}_{m\times n}(\mathbb{F})$ is isomorphic to $\mathbb{F}^{mn}$
	- $\dim(\mathbf{M}_{m\times n}(\mathbb{F}))=mn$
- $\mathbb{P}_{n}(\mathbb{F})$ (the set of all polynomials of degree **less than** $n$ with coefficients in $\mathbb{F}$) is a vector space over $\mathbb{F}$
	- $\dim(\mathbb{P}_{n}(\mathbb{F}))=n$
	- (some define $\mathbb{P}_{n}(\mathbb{F})$ as the set of all polynomials of degree **less than or equal** to $n$, then $\dim(\mathbb{P}_{n}(\mathbb{F}))=n+1$)

## Operations

- [[#Definition|Scalar Multiplication]] ($\textit{scalar}\cdot\mathbf{vector}=\mathbf{vector}$)
- [[#Definition|Vector Addition]] ($\mathbf{vector}+\mathbf{vector}=\mathbf{vector}$)
- [[#Dot Product]] ($\mathbf{vector}\cdot\mathbf{vector}=\textit{saclar}$)
- [[#Cross Product]] ($\mathbf{vector}\times\mathbf{vector}=\mathbf{vector}$)


### Dot Product

> also **scalar product** or **Euclidean inner product**

**Definition:**
- **Coordinate definition:** $\displaystyle  {\displaystyle \mathbf {a} \cdot \mathbf {b} =\sum _{i=1}^{n}a_{i}b_{i}=a_{1}b_{1}+a_{2}b_{2}+\cdots +a_{n}b_{n}}$
- **Geometric definition:** $\displaystyle  {\displaystyle \mathbf {a} \cdot \mathbf {b} =\left\|\mathbf {a} \right\|\left\|\mathbf {b} \right\|\cos \theta }$

**Properties:** (12.1.2)
- Symmetry $\textbf{a}\cdot\textbf{b}=\textbf{b}\cdot\textbf{a}$
- Distributive $(\textbf{a}+\textbf{b})\cdot{\textbf{c}}=\textbf{a}\cdot\textbf{c}+\textbf{b}\cdot\textbf{c}$
- Homogeneity $(t\textbf{a})\cdot\textbf{b}=t(\textbf{a}\cdot\textbf{b})$
- Positivity $\textbf{a}\cdot\textbf{a}\geq 0$
	- $\textbf{a}\cdot\textbf{a}= 0 \iff \textbf{a}=\textbf{0}$
- $\textbf{0}\cdot\textbf{a}=\textbf{a}\cdot\textbf{0}=0$

### Cross Product

- $\displaystyle  \mathbf {a} \times \mathbf {b} =\|\mathbf {a} \|\|\mathbf {b} \|\sin(\theta )\,\mathbf {n}$ #not-in-course 
# Subspaces

- A subset $W$ of a vector space $V$ is called a subspace of $V$ if $W$ is itself a vector space under the addition and scalar multiplication defined on $V$
- nonempty subset $W$ of $V$ is a subspace of $V$ if and only if it is closed under addition and scalar multiplication
- 

## Aritmetic

$U$ and $W$ are subspaces of $V$.

- (q7.6.2) $U\cup W$ is subspace of $V$, if and only if, $U\subseteq W\lor W\subseteq U$ 

### Sum

$U + W := \{u+w \mid u\in U , w \in W \}$

**Properties:**
- (q7.6.3a) $U+W=W+U$
- (q7.6.3b) $U_{1}+(U_{2}+U_{3})=(U_{1}+U_{2})+U_{3}$
- (q7.6.5) $U+W=U\iff W\subseteq U$
- (q7.6.6) $\text{Sp}(U_{1}\cup\dots \cup U_{k})=U_{1}+\dots+U_{k}$ 
- (q7.6.7) $U+W=U\cup W$, if and only if, $U\subseteq W\lor W\subseteq U$ 
- (q7.6.8) let $K,S\subseteq V$ non-empty sets, then $\text{Sp}(K)+\text{Sp}(S)=\text{Sp}(K\cup S)$

#### Direct sum

Let $U+{W}=V$, then the following statements are **equivalent**:
- $U\oplus{W}=V$ 
- (7.7.1) every vector in $V$ can be expressed in exactly one way as $u+w=v$
- (7.7.2) $U \cap W=\{ 0 \}$
- (8.3.7) $\dim U+\dim W=\dim V$
## Equality

- (7.5.12) If $A$ and $B$ are row equivalent matrices, then $\text{row-space}(A)=\text{row-space}(B)$
- (8.3.4a) $U\subseteq V\implies\dim U\leq\dim V$. 
- (8.3.4b) if $U\subseteq V$ then, $U=V \iff \dim V=\dim U$. 

## Isomorphic Subspaces

Isomorphic is an *equivalence relation*

(Assumption: the spaces are on the same filed $F$)

**Definition**; The following statements are **equivalent**:
- $V$ and $W$ are **isomorphic**: $V\cong{W}$ 
- There exists **isomorphism** $T:V\to W$ 
- (9.5.7, 9.5.9) $\dim{V}=\dim{W}$

**Theorems:**
 - (9.5.8) $\dim{V}=n\implies V\cong{F^n}$
## Dimension

- (8.3.6) $\dim(U+W)=\dim{U}+\dim{W}-\dim(U \cap W)$
- (8.3.7) if $V=U+W$, then $V=U\oplus W \iff \dim V= \dim U+\dim W$ 
- (9.5.9) $V \cong W \iff \text{dim}{V}=\text{dim}{W}$ (on the same field, and finite dim.)
- (9.6.1) **Rank–nullity theorem** $\text{dim}{V}=\text{dim}{(\text{Ker}{T})}+\text{dim}{(\text{Im}{T})}$. ($T:V\to W$ is lin. trans.)
- (d8.5.4) $\rho{(A)}=\dim(\text{row-space(A)})=\dim(\text{column-space(A)})$

## Orthogonality 

- (d12.2.2) $\mathbf{v} \perp U$ if for all vectors $\mathbf{u} \in U$, $\mathbf{v} \cdot \mathbf{u} = 0$
- (12.2.3) let $\text{Sp}(K)=U$, then $\mathbf{v} \perp U\iff\mathbf{v} \perp K$

### Orthogonal Complement

- (d12.2.4) The **Orthogonal Complement** -  $U^{\perp}=\set{\mathbf{v}\in \mathbb{R}^n  \mid \mathbf{v} \cdot \mathbf{u} = 0, \forall{\mathbf{u} \in U }}$
	- (q12.2.7) ${U^{\perp}}\cap{U}=\{ \mathbf{0} \}$
- (12.3.1) $\text{row-space}(A)\perp\text{null}(A)$
	- $\text{column-space}(A)\perp\text{null}(A^t)$
- (12.3.2) The **Orthogonal Decomposition** of the Euclidean space of dimension $n$. 
	- (12.3.2a) ${U^{\perp}}\oplus{U}=\mathbb{R}^n$
	- (12.3.2a) $\dim U^{\perp}+\dim U=n$
	- (12.3.2b) $(U^\perp)^{\perp}=U$
 - ${(U+W)}^{\perp}=U^{\perp}\cap W^{\perp}$

### Orthogonal Projection

- Definition: the **orthogonal projection** of $\mathbf{a}$ onto $\mathbf{u}$ is $\frac{\mathbf{a}\cdot \mathbf{u}}{\mathbf{u}\cdot \mathbf{u}}\mathbf{u}$.
- Definition: the **orthogonal projection** of $\mathbf{a}$ onto $U\subseteq{\mathbb{R}^n}$ is the vector $$\textbf{u}=\sum^{k}_{i=1}{\frac{\mathbf{a}\cdot \mathbf{u}_{i}}{\| \textbf{u}_{i} \|^2}\textbf{u}_{i}}=\text{proj}_{U}\mathbf{a}$$
	- (where $(\mathbf{u}_{1},\dots,\mathbf{u}_{k})$ is **orthogonal** basis of $U$, and $0\neq\mathbf{a}\in{\mathbb{R}^n}$, and $\mathbf{a}=\mathbf{u}+\mathbf{v}$ where $\mathbf{u}\in{U}$ and $\mathbf{v}\in{U}^{\perp}$) (after12.3.2, 12.4.6)
	- $\mathbf{a}=\mathbf{u}+\mathbf{v}$ is the uniqe form of $\mathbf{a}$ as vector in $U$ and vector in $U^{\perp}$
	- The orthogonal projection of $\mathbf{a}$ onto $U$ is the closest vector to $\mathbf{a}$ in $U$
	- if $(\mathbf{u}_{1},\dots,\mathbf{u}_{k})$ is **orthonormal** basis of $U$, then $\textbf{u}=\sum^{k}_{i=1}{{(\mathbf{a}\cdot \mathbf{u}_{i})}\textbf{u}_{i}}=\text{proj}_{U}\mathbf{a}$
- Projection Theorem - if $\mathbf{v}$ and $\mathbf{u}$ are vectors in $\mathbb{R}^n$, and $\mathbf{u}\neq \mathbf{0}$, then $\mathbf{v}$ can be expressed in excatly one way in the form $\mathbf{v}=t\mathbf{u}+\mathbf{w}$, where $t$ is a scalar, and $\mathbf{w}\perp\mathbf{u}$.


- (12.5.1) $K=\{ \mathbf{u}_{1},\dots,\mathbf{u}_{k} \}$ is orthogonal set, and $U=\text{Sp}(K)$ and $\mathbf{v}=\mathbf{a}-\text{proj}_{U}\mathbf{a}$, then:
	1.  $\mathbf{v}\perp K$, and $\mathbf{v}\perp U$
	2. $\mathbf{v}=\mathbf{0}\iff \mathbf{a}\in U$


> [!example] Methods
> - given subspace $U$, find the orthogonal projection of $\mathbf{a}$ on $U^{\perp}$. (e2023a.85.q1b)
> 	- find basis for $U$
> 	- find basis for $U^{\perp}$
> 	- normalize this $U^{\perp}$ basis into $(\mathbf{u}_{1},\dots,\mathbf{u}_{k})$
> 	- then $\textbf{u}=\sum^{k}_{i=1}{{(\mathbf{a}\cdot \mathbf{u}_{i})}\textbf{u}_{i}}=\text{proj}_{U^{\perp}}\mathbf{a}$

