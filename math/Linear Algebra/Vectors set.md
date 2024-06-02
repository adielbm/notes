$$\large{K=\set{{v}_1,\dots,{v}_m}\subseteq V}, \quad \dim{V}=n$$
- $A$ is $K$'s vectors as **rows** 
- $A^{\top}$ is $K$'s vectors as **comluns** 
- $r=\text{rank}(A)$
- $B$ is some basis of $V$ 

# Linear independence

Definitions of **linearly independent**. The following statements are **equivalent**:
- $K$ is **linearly independent**
- $\lambda_1{v}_1 + \lambda_2{v}_2 + \cdots + \lambda_m{v}_m = {0}\implies{\lambda_{1},\dots,{\lambda_{m}}}=0$
- $A^{\top}\mathbf{x}=\mathbf{0}\implies \mathbf{x}=\mathbf{0}$
- $\text{rank}({A})=m\leq n$
- (8.4.4) $\{ [v_{1}]_{B},\dots,[v_{m}]_{B} \}\text{ is linearly {\bf independent}}$
- $\text{REF}(A^\top)$ has a pivot position in every column #todo

**Theorems:**
- $0\in{K}\implies K\text{ is linearly {\bf dependent}}$
- $m>n\implies K\text{ is linearly {\bf dependent}}$
- Dimension of the Span:
	- $K\text{ is linearly {\bf dependent}}\impliedby\dim\text{Sp}(K)< m$
	- $K\text{ is linearly {\bf independent}}\implies\dim\text{Sp}(K)= m$
- if $m=n$, then: 
	- $A$ or $A^{\top}$ is invertible matrix, if and only if, $K\text{ is linearly {\bf independent}}$
	- $K\text{ is linearly {\bf independent}}$, if and only if, $\det{(A)}\neq 0$, 
- (11.2.4) Eigenvectors corresponding to distinct eigenvalues are linearly independent


	
- let $L,K\subseteq V$, and $K\subseteq{\text{Sp}{(L)}}$, and $L$ is linearly dependent, then $K$ is also linearly dependent (by 7.5.1, 8.3.4)


# Span

Definitions. The following statements are **equivalent**:
- $K\text{ spans }V$, that is $\text{Sp}(K)=V$
- $\text{rank}(A)=\dim{\text{Sp(K)}}$.   ($A$ is $K$'s vectors as rows)
- $A\mathbf{x}=\mathbf{b}\text{ is consistent}$.   ($A$ is $K$'s vectors as columns)

**Theorems:**
- $\text{Sp}(K)$ is [[Vector Spaces|subspace]]
- $B\subseteq{\text{Sp}{(K)}}\implies{K\text{ spans }V}$. (where $\text{Sp}({B})=V$)
- $m<n\implies K\text{ is {\bf not} span }V$
- (7.5.4) $\text{Sp}{(K)}=\text{Sp}{(L)}\iff{K\subseteq\text{Sp}{(L)}\land{L\subseteq\text{Sp}{(K)}}}$
- (7.5.1, q7.5.16b) $K\subseteq{\text{Sp}{(L)}}\implies{\text{Sp}{(K)}\subseteq\text{Sp}{(L)}}$
- (q7.5.16a) $K \subseteq{L}\implies{\text{Sp}{(K)}\subseteq\text{Sp}{(L)}}$
- (q7.5.17a) $\text{Sp}(K)\cup\text{Sp}(L)\subseteq\text{Sp}(K\cup L)$
- (q7.5.17b) $\text{Sp}(K\cap L)\subseteq\text{Sp}(K)\cap\text{Sp}(L)$

# Basis

Definitions of **basis**. The following statements are **equivalent**:
- $K$ is a basis of $V$
- (8.2.5) every element of $V$ may be written in a unique way as a finite linear combination of elements of $K$.
- (8.3.2) **Two** out of three are fulfilled 
	1. $K\text{ is linearly {\bf independent}}$
	2. $\text{Sp}(K)=V$  (K spans V)
	3. $m=\dim V$ 
- (8.4.5) $m=\dim V$, and the transition matrix from some basis $B$ to $K$ is invertible

### Bases for the Fundamental Spaces

- A basis of $\text{row-space}({A})=\text{Sp}(K)$
	- The **non-zero** rows of $\text{REF}(A)$ (q8.5.2b)
	- The $r$ columns in $A^t$, such that in $\text{RREF}(A^t)$ are contain a pivot.
-  A basis of $\text{column-space}({A})$.
	- The **non-zero** rows of $\text{REF}(A^t)$
	- The $r$ columns in $A$, such that in $\text{RREF}(A)$ are contain a pivot.
- A basis of the $\text{null}{(A)}$ 
	- The $n-r$ vectors that span the solution space of $(\text{RREF}(A))\mathbf{x}=\mathbf{0}$. 
- A basis of the $\text{null}{(A^t)}=\text{left-null}{(A^t)}$ 
	- The $m-r$ vectors that span the solution space of $(\text{RREF}(A^t))\mathbf{x}=\mathbf{0}$. 


- #todo  Let $K$ is linearly independent, then $K\cup\set{\mathbf{e}_{i}\mid {i}\text{th column is not a pivot column in REF}(A)}$ forms a basis for $V$.

# Orthogonality  

(12.2.3) The following statements are **equivalent**:
- $\mathbf{u}$ orthogonal to $K$
- $\forall\mathbf{v}\in{K}:\mathbf{u}\cdot \mathbf{v}=\mathbf{0}$
- $\mathbf{u} \perp K$
- $\mathbf{u} \perp \text{Sp}(K)$
- $\mathbf{u}\in{(\text{Sp}(K))^\perp}$
- $\mathbf{u}\in{\text{null}(A)}$
- $A\mathbf{u}=\mathbf{0}$
## Orthogonal set

**Definition:**
- (d12.4.1a) let $K=\{ \textbf{u}_{1}, \dots,\textbf{u}_{k} \} \subseteq\mathbb{R}^n$. we say that $K$ is a **orthogonal set**, if $\textbf{0}\notin{K}$, and $\forall{j\neq i}:\textbf{u}_{i}\cdot\textbf{u}_{j}=0$

**Properties:**
$K=\{ \textbf{u}_{1}, \dots,\textbf{u}_{k} \} \subseteq\mathbb{R}^n$ is orthogonal set. then:
- (12.4.2) $K$ is independent set
- (q12.4.3a) $K$ has at most $n$ vectors
- $K$ is a basis of $\text{Sp}(K)$


### Orthogonal basis


### Orthonormal set

- (d12.4.1b) $K=\{ \textbf{u}_{1}, \dots,\textbf{u}_{k} \}$ is **orthonormal set** if, $\| \textbf{u}_{i} \|=1$ for each $i$, ($1\leq i\leq k$)
- (q12.4.2) **Normalizing** - if $K=\{ \mathbf{u}_{1}, \dots,\textbf{u}_{k} \}$ is orthogonal set, then $L=\{ \frac{\textbf{u}_{1}}{\|\textbf{u}_{1} \|},\dots,\frac{\textbf{u}_{k}}{\|\textbf{u}_{k} \|} \}$ is orthonormal set, and $\text{Sp}(K)=\text{Sp}(L)$
- **The normalized vector** $\mathbf{\hat{u}}$ of a non-zero vector $\mathbf{{u}}$ is the unit vector in the direction of $\mathbf{{u}}$. i.e. $\mathbf{\hat{u}} = \frac{\mathbf{u}}{\|\mathbf{u}\|}$
- A **Unit vector** is a vector $\textbf{v}$ such that $\| \textbf{v} \|=1$

#### Orthonormal basis

- (12.4.5) Let $B=(u_{1}, \dots ,u_{n})$ ordered basis of $\mathbb{R}^n$, then the following properties are equivalence:
	- $B$ is **orthonormal basis**
	- $\textbf{a}=\sum^{n}_{i=1}{(\mathbf{a\cdot u}_{i})\cdot{\mathbf{u}_{i}}}$
	- $\mathbf{a\cdot b}=\sum^{n}_{i=1}{(\mathbf{a\cdot u}_{i})\cdot(\mathbf{b\cdot u}_{i})}$
	- $\| \textbf{a} \|^2=\sum^n_{i=1}(\mathbf{a\cdot u}_{i})^2$
- (q12.4.10) #todo generalition of 12.4.5 for orthogonal bases

## Orthogonality of Sets

- $\forall a \in A, b \in B: a \perp b\iff A\perp B$

## **Gram–Schmidt process** (12.5.2) 

Convert a basis $\{ \mathbf{u}_{1},\dots,\mathbf{u}_{k} \}$ into an orthogonal basis $\{ \mathbf{v}_{1},\dots,\mathbf{v}_{k} \}$:

$$\mathbf{v}_{1}=\mathbf{u}_{1}$$
$$\mathbf{v}_{i}=\mathbf{u}_{i}-\frac{\mathbf{u}_{i}\cdot\mathbf{v}_{1}}{{\| \mathbf{v}_{1} \|^2}}\mathbf{v}_{1}-\frac{\mathbf{u}_{i}\cdot\mathbf{v}_{2}}{{\| \mathbf{v}_{2} \|^2}}\mathbf{v}_{2}-\dots-\frac{\mathbf{u}_{i}\cdot\mathbf{v}_{i-1}}{{\| \mathbf{v}_{i-1} \|^2}}\mathbf{v}_{i-1}$$

- during the computation you can multiple $\mathbf{v}_{i}$ by a scalar (note before q12.5.4)
- To convert the orthogonal basis into an orthonormal basis see (q12.4.2)
- for dependent set see q12.5.3
- expanding orthogonal set of $k<n$ vectors into orthogonal basis see q12.5.4

