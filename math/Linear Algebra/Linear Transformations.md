In this section:

- $V$ and $W$ are [[Vector Spaces|vector spaces]] over $\mathbb{F}$
- $\dim{V}=n$ and $\dim{W}=m$
- $\mathcal{B}=(v_{1},\dots,v_{n})$ and $\mathcal{C}=(w_{1},\dots,w_{m})$ are bases of $V$ and $W$. (resp.)

## Linearity

- Given a function $T:V\to W$. The following statements are equivalent:
	- $T$ is a **linear transformation**
	- (9.1.1) $T$ is _additive_ and _homogeneous_
		- Additivity: $T(v_{1}+v_{2})=T(v_{1})+T(v_{2})$
		- Homogeneity: $\alpha T(v)=T(\alpha{v})$
	- (9.1.3) $T(\lambda_{1}v_{1}+\lambda_{2}v_{2})=\lambda_{1}T(v_{1})+\lambda_{2}T(v_{2})$  
	- $\exists{A}\in{M_{m\times n}}(\mathbb{F}):\forall{v\in{V}},T(v)=Av$

- Theorems
	- (9.1.2a) If $T(0_{V})\neq0_{W}$, then $T$ is not linear
	- (9.7.1) let $S$ and $T$ linear transformations, then $f(v)=S(v)+T(v)$ is also linear transformation
	- 
	- $T(v)=T(u)\iff T(v-u)=0$

## Hom

- $\text{Hom}(V,W)$ is the set of all linear transformations from $V$ to $W$
- (9.7.6) $\text{Hom}(V,W)$ is a vector space
	- $\text{Hom}(V,W)$ and $M_{m\times n}$ are [[Vector Spaces#Isomorphic Subspaces|isomorphic]] vector spaces
	- $\dim{\text{Hom}(V,W)}=m\times n$
	- Vector space operations: (see q9.7.2-3)
		- Addition: $(T+S)(v)=T(v)+S(v)$
			- Commutativity: $T+S=S+T$
			- Associativity: $(T_{1}+T_{2})+T_{3}=T_{1}+(T_{2}+T_{3})$
			- Identity: $T+0=T$
			- Inverse: $T+(-T)=0$
		- Scalar multiplication:
			- Distributivity (vector (transformations) addition): $\alpha(T+S)=\alpha{T}+\alpha{S}$
			- Distributivity (field addition): $(\alpha+\beta)T=\alpha{T}+\beta{T}$
			- Compatibility: $\alpha(\beta{T})=(\alpha\beta)T$
			- Identity: $1T=T$
	- Vector space properties of $\text{Hom}(V,W)$
		- $T-S=0\implies T=S$
		- $T+T=T\implies T=0$
		- $0 \cdot T=0$
		- $\alpha T=0\implies \alpha=0$ or $T=0$


## Composition

## Equality

- (9.4.1) $T,S:V\to W$, and $B=\{ v_{1},\dots,v_{n} \}$ spans $V$. then $T=S \iff \forall{v\in B}:{T(v)=S(v)}$ 


## Transformation matrix

- (d10.1.1) The **transformation matrix** of the [[Linear Transformations|linear transformation]] $T:V\to W$, relative to the bases $\mathcal{B}$ and $\mathcal{C}$, is the $m\times n$ matrix (with entries in $\mathbb{F}$) defined by $$A=[T]_{C}^{B}=\left[\begin{array}{ccc} | & & | \\ [T({v_{1}})]_{C} & \cdots & [T( {v_{n}})]_{C} \\ | & & | \end{array} \right]_{m\times n}$$
- $A$ is the transformation matrix of $T$ by the bases $\mathcal{B}$ and $\mathcal{C}$ if and only if $\forall{v\in{V}}:T(v)=Av$
- $[T]_{C}^{B}[v]_{B}=[T(v)]_{C}$

# Linear Transformation

In this section:

- $T:V\to W$ is a [[Linear Transformations|linear transformation]]
- $A$ is the [[#Transformation matrix|transformation matrix]] of $T$ by the bases $\mathcal{B}$ and $\mathcal{C}$

## Fundamental Spaces

### Image

- $\text{Im}(T) = \{\ T(v) \mid v \in V\,\}$ is [[Matrices#Column space|column-space]] of $A$

- (9.3.6) let $T:V\to W$, and $\text{Sp}\{ v_{1},\dots ,v_{n} \}=V$, then, $\text{Im}{T}=\text{Sp}{(\{ T(v_{1}),\dots,T(v_{n}) \})}$
- (9.5.6) if $T$ is injective, and $K\subseteq{V}$ linearly indep., then $T(K)\subseteq{W}$ is also linearly indep.

### Kernel 

- $\ker(T) = \{ v \in V : T(v) = 0\}$ is equal to the [[Matrices#Null space|null space]] of $A$


## Rank 

### Surjective (Onto)

The following statements are **equivalent**:

- $T:V\to W$ is **surjective** (epimorphism)
- $A$ columns spans $W$ 
- (T is right-cancellable) $RT=ST\implies R=S$ 
- (T is right-invertible) There exists $S:W\to V$ such that $TS=I$ 
- $A$ has [[Matrices#Full Row Rank|full row rank]]

Theorems: 
- if $\dim{V}<\dim{W}$ then $T$ cannot be onto 

### Injective (One-to-One)

The following statements are equivalent:

- $T:V\to W$ is **injective** (monomorphism)
- (9.5.2) $\text{ker}(T)=\set{0}$
- $\dim(\ker{T})=0$
- $T(u)=T(v)\implies u=v$
- The colmuns of $A$ are linearly independent
- (T is left-cancellable) $TR=TS\implies R=S$ 
- (T is left-invertible) There exists $S:W\to V$ such that $ST=I$ 
- $A$ has [[Matrices#Full Column Rank|full column rank]]


Theorems: ($T:V\to W$ is injective)
- if $\dim{W}<\dim{V}$ then $T$ cannot be one-to-one 
- (q9.6.3c) $v_{1},\dots ,v_{n}\in V$ are linearly independent, if and only if, $T(v_{1}),\dots ,T(v_{n})\in V$

### Isomorphism

- (9.6.2) The following statements are equivalent
	- $T$ is an **isomorphism** (invertible linear transformation) from $V$ on $W$
	- $T$ is both **injective** and **surjective**. (bijective)
	- $A$ has [[Matrices#Full Row-and-Column Rank|both a full row rank and a full column rank]]

## dimV=dimW

In this section, $\dim V=\dim W$ ($m=n$), that is $A$ is a square matrix.

Theorems
- (9.4.2) Let $B=(v_1,\dots,v_n)$ be a basis of $V$ and $(w_1,\dots,w_n)$ an arbitrary list of vectors in $W$. Then there **exists** a **unique** linear map $T:V\to W$ such that $T(v_{i})=w_{i}$

### Isomorphism

- (9.6.2) The following statements are equivalent 
	- $T$ is a linear **isomorphism** (bijective linear transformation) from $V$ on $W$
	- $T$ is **injective**
	- $T$ is **surjective**
	- $T$ is **bijective**
	- There is $T^{-1}:W\to V$ such that $T^{-1}T=I_{V}$
	- There is $T^{-1}:W\to V$ such that $TT^{-1}=I_{W}$
	- (10.5.1-2) $A=[T]^B_{C}$ is invertible, i.e. $A^{-1}=[T^{-1}]^C_{B}$ exists
	- (9.9.2) the inverse $T^{-1}:W\to V$ exists, such that $T^{-1}T=I_{V}$ and $TT^{-1}=I_{W}$

### Linear Endomorphism $T:V \to V$


>In the case where $V=W$, a linear map is called a **linear endomorphism**. Sometimes the term **linear operator** refers to this case, but the term linear operator can have different meanings for different conventions (wikipedia)

- $T^2=0\implies\mathrm{Im}T\subseteq\mathrm{Ker}T$

#### Eigenvalues 

Equivalent definitions of **eigenvalue** for the linear transformation $T: V \to V$. 
- (d11.2.1) $\lambda$ is an **eigenvalue** of $T$ 
- (d11.2.1) There exists a **non-zero** vector $\mathbf{v}$ in $V$ such that $T(\mathbf{v}) = \lambda\mathbf{v}$. 
- (In such a case, $\mathbf{v}$ is called an **eigenvector** of $T$ related to the eigenvalue $\lambda$) 
- The operator $(T - \lambda I)$ is singular. 
- $\text{rank}(T - \lambda I) < \dim(V)$ 
- $(\lambda I - T)(\mathbf{v}) = \mathbf{0}$ has nontrivial solutions, i.e., $\text{null}(\lambda I - T) \neq \{ \mathbf{0} \}$ 
- (11.4.1) The **characteristic equation** $\det(\lambda I - T) = 0$ 
- $\lambda$ is a root of the characteristic equation $\det(xI - T) = 0$


**Theorems**:
- (q11.2.4a) if $\lambda$ is an eigenvalue of $T$, then for each $\mu$, $\mu\lambda$ is an eigenvalue of $\mu T:V\to V$
- (q11.2.4b) if $\lambda$ is an eigenvalue of $T$, then , $\lambda^k$ is a eigenvalue of $T^k:V\to V$. (for each natural $k$ )
- (11.2.6) $T$ has at most $n$ distinct eigenvalues 
- if $T^n=I$ for some natural $n$, then $T$ has at most the eigenvalues $1,-1$ ( #todo  by q11.2.4)


##### Eigenvectors 

Definitions of **eigenvector**. The following statements are **equivalent**: 
- (d11.2.1) $\mathbf{v}$ is an **eigenvector** of $T$ related to $\lambda$. 
- (d11.2.1) $\mathbf{v}$ is a non-zero vector in $V$ such that $T(\mathbf{v}) = \lambda\mathbf{v}$.

##### Eigenspace 

Definitions of the **eigenspace of** $T$ **associated with its eigenvalue** $\lambda$.
- (d11.2.2) $V_{\lambda}=\{ \mathbf{v} \in V \mid T(\mathbf{v}) = \lambda \mathbf{v} \}$
- $\{ \text{eigenvectors corresponding to } \lambda \} \cup \{ \mathbf{0} \}$



#### Diagonalizability

- (d11.1.1) $T:V\to V$ is **diagonalizable**
- $V$ has a basis such that the matrix of $T$ (by that basis), is diagonal
- (11.2.3) $V$ has a basis in which all its vectors are eigenvectors of $T$


- (11.2.5) if $T$ has $n$ **distinct** eigenvalues, then $T$ is diagonalizable
#todo  https://textbooks.math.gatech.edu/ila/diagonalization.html

#### characteristic polynomial

- (d11.4.4) the characteristic polynomial of $T:V\to V$ is the characteristic polynomial of the transformation matrix by some basis
- 2


