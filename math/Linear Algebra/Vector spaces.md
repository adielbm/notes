## Definition

A **vector space** over a [[Field|field]] $F$ is a non-empty set $V$ together with a binary operation and a binary function that satisfy the eight axioms listed below. 
- In this context, the elements of $V$ are commonly called **vectors**, and the elements of $F$ are called **scalars**.
- The binary operation, called **vector addition** or simply **addition** assigns to any two vectors $v$ and $w$ in $V$ a third vector in $V$ which is commonly written as $v + w$, and called the sum of these two vectors.
- The binary function, called **scalar multiplication**, assigns to any scalar $a$ in $F$ and any vector $v$ in $V$ another vector in $V$, which is denoted $av$

|                           | Vector space axioms                     |                             |
| ------------------------- | --------------------------------------- | --------------------------- |
| **Vector Addition**       | Associativity                           | $u + (v + w) = (u + v) + w$ |
|                           | Commutativity                           | $u + v = v + u$             |
|                           | Identity element                        |                             |
|                           | Inverse elements                        |                             |
| **Scalar Multiplication** | Distributivity (vector addition)        | $a(u + v) = au + av$        |
|                           | Distributivity (field addition)         | $(a + b)v = av + bv$        |
|                           | Compatibility with field multiplication | $a(bv) = (ab)v$             |
|                           | Identity element                        |                             |

> It has to add closure property (for vector addition and scalar mul.) depending on definition of binary operation, 


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
- These are [[#Isomorphic Subspaces|isomorphic]] vector spaces: (Their dimension is $mn$)
	- $\mathbb{M}_{m\times n}(\mathbb{F})$ ($m\times n$ [[Matrices|matrices]])
	- $\mathbb{F}^{mn}$ ($mn$-tuples)
	- $\text{Hom}(V,W)$ ([[Linear Transformations#Hom|linear transformations]] from $V$ to $W$, where $\dim V=n$, $\dim W=m$)
- $\mathbb{P}_{n}(\mathbb{F})$ (the set of all polynomials of degree **less than** $n$ with coefficients in $\mathbb{F}$) is a vector space over $\mathbb{F}$
	- $\dim(\mathbb{P}_{n}(\mathbb{F}))=n$
	- (some define $\mathbb{P}_{n}(\mathbb{F})$ as the set of all polynomials of degree **less than or equal** to $n$, then $\dim(\mathbb{P}_{n}(\mathbb{F}))=n+1$)

# Vector Space

In this section:

- $V$ is a [[Vector Spaces|vector space]] over $\mathbb{F}$
- $\dim{V}=n$

## Basis

- Given $V$ is a vector space over $\mathbb{F}$, $\dim{V}=n$, and a set $\mathcal{B}=\{b_{1},\dots,b_{m}\}\subseteq V$, the following statements are equivalent:
	- $\mathcal{B}$ is a **basis** of $V$
	- $\mathcal{B}$ is linearly independent and spans $V$
	- The matrix $A$ whose rows are the vectors in $\mathcal{B}$ has a [[Matrices#Full Row-and-Column Rank|full row and column rank]]
	- $\forall{v\in V},\exists{!}\lambda_{1},\dots,\lambda_{n}\in\mathbb{F}:v=\lambda_{1}b_{1}+\dots+\lambda_{n}b_{n}$ (the vector $[v]_{\mathcal{B}}=(\lambda_{1},\dots,\lambda_{n})$ is called the **coordinate vector** of $v$ with respect to $\mathcal{B}$)

## Spanning

- Given $K=\{v_{1},\dots,v_{m}\}\subseteq V$, and a matrix $A$ whose rows are the vectors in $K$, the following statements are equivalent:
	- $K$ is a **spanning set** of $V$
	- $\text{Sp}(K)=V$
	- $\{c_{1}v_{1}+\dots+c_{m}v_{m}\mid c_{1},\dots,c_{m}\in\mathbb{F}\}=V$
	- $A$ has a [[Matrices#Full Column Rank|full column rank]]
- Given $K$ and $L$ are subsets of $V$:
	- $\text{Sp}(K)$ is a [[Vector Spaces|subspace]] of $V$
	- $\text{Sp}(L)=V\land L\subseteq{\text{Sp}{(K)}}\implies\text{Sp}(K)=V$
	- (7.5.4) $\text{Sp}{(K)}=\text{Sp}{(L)}\iff{K\subseteq\text{Sp}{(L)}\land{L\subseteq\text{Sp}{(K)}}}$
	- (7.5.1, q7.5.16b) $K\subseteq{\text{Sp}{(L)}}\implies{\text{Sp}{(K)}\subseteq\text{Sp}{(L)}}$
	- (q7.5.16a) $K \subseteq{L}\implies{\text{Sp}{(K)}\subseteq\text{Sp}{(L)}}$
	- (q7.5.17a) $\text{Sp}(K)\cup\text{Sp}(L)\subseteq\text{Sp}(K\cup L)$
	- (q7.5.17b) $\text{Sp}(K\cap L)\subseteq\text{Sp}(K)\cap\text{Sp}(L)$


## Subspaces

- Given a nonempty subset $W\subseteq V$, the following statements are equivalent:
	- $W$ is a **subspace** of $V$
	- $W$ is a vector space under the addition and scalar multiplication defined on $V$

- Given $U$ and $W$ are subspaces of $V$:
	- (q7.6.2) $U\cup W$ is subspace of $V$, if and only if, $U\subseteq W\lor W\subseteq U$ 
	- (q7.6.4) $U+W$ is also a subspace of $V$ (similar result for $U_1+ \dots + U_k$)
	- (q7.6.5) $U+W=U\iff W\subseteq U$ 
	- (q7.6.7) $U+W=U\cup W\iff U\subseteq W\lor W\subseteq U$
	- (q7.6.8) if $U=\text{Sp}(S), W=\text{Sp}(T)$ (where $S$ and $T$ are non-empty subsets of $V$), then $U+W=\text{Sp}(S)+\text{Sp}(T)=\text{Sp}(S\cup T)$
- Given $U_1,\dots,U_k$ are subspaces of $V$:
	- (q7.6.4) $U_1+\dots+U_k$ is a subspace of $V$ (the smallest subspace of $V$ containing $U_1,\dots,U_k$)
	- (q7.6.6a) $U_1\cup\dots\cup U_k\subseteq U_1+\dots+U_k$
	- (q7.6.6b) $\text{Sp}(U_1\cup\dots\cup U_k)=U_1+\dots+U_k$

## Sum

- Given $S$ and $T$ are subsets of $V$, then the **sum** of $S$ and $T$ is the set $S+T \stackrel{\text{def}}{=} \{s+t\mid s\in S,t\in T\}$
	- (q7.6.3a) $S+T=T+S$
	- (q7.6.3b) $S+(T+K)=(S+T)+K$

#### Direct sum

- The following statements are equivalent:
	- $V=U\oplus W$
	- $V$ is the **direct sum** of $U$ and $W$
	- (7.7.2) $V=U+W$ and $U\cap W=\{0\}$
	- (8.3.7) $V=U+W$ and $\dim{V}=\dim{U}+\dim{W}$
	- (7.7.1) $\forall{v\in V},\exists{!u\in U,w\in W}:v=u+w$

	
## Dimension

- Given $U$ and $W$ are subspaces of $V$:
	- (8.3.6) $\dim(U+W)=\dim{U}+\dim{W}-\dim(U \cap W)$
	- ${\displaystyle \max(\dim U,\dim W)\leq \dim(U+W)\leq \dim(U)+\dim(W) }$
	- (8.3.7) if $V=U+W$, then $V=U\oplus W \iff \dim V= \dim U+\dim W$ 
	- (8.3.4a) $U\subseteq V\implies\dim U\leq\dim V$. 
	- (8.3.4b) if $U\subseteq V$ then, $U=V \iff \dim V=\dim U$. 
- (9.5.9) Given $V$ and $W$ are vector spaces over $\mathbb{F}$, then $V \cong W \iff \text{dim}{V}=\text{dim}{W}$
- See Also: [[Matrices#Rank|Rank-Nullity Theorem]]


# Equality

- (q7.5.12) If $A$ and $B$ are row equivalent matrices, then $\text{row-space}(A)=\text{row-space}(B)$
- (8.3.4b) if $U\subseteq V$ then, $U=V \iff \dim V=\dim U$. 

# Isomorphic Spaces

- Assumption: the spaces are on the same filed $F$
- The following statements are **equivalent**:
	- $V$ and $W$ are **isomorphic**: $V\cong{W}$ 
	- There exists **isomorphism** $T:V\to W$ 
	- (9.5.7, 9.5.9) $\dim{V}=\dim{W}$
- Theorems
	 - (9.5.8) $\dim{V}=n\implies V\cong{F^n}$
	- Isomorphic is an [[Binary Relation#Equivalence relation|equivalence relation]]
- [[#Examples]]


# Orthogonality 

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

