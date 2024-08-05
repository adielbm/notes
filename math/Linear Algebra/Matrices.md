- The set of all $m\times n$ matrices is denoted by $\mathbf{M}_{m\times n}(\mathbb{F})$ (or $M_{m\times n}$ if the field is understood, or $M_{n}$ if $m=n$), or by $\mathbb{F}^{m\times n}$ is a [[Vector Spaces#Examples|vector space]] over $\mathbb{F}$ where $\dim(\mathbf{M}_{m\times n}(\mathbb{F}))=mn$
	- Vector space [[Vector Spaces#Vector Space|operations and axioms]] of $\mathbf{M}_{m\times n}(\mathbb{F})$
		- **Addition:** $A+B=[a_{ij}+b_{ij}]=[c_{ij}]=C$ (matrix addition)
			- Commutative: $A+B=B+A$
			- Associative: $A+(B+C)=(A+B)+C$
			- Identity: $A+0=A$
			- Inverse: $A+(-A)=0$
		- **Scalar Multiplication:** $cA=[ca_{ij}]=[c_{ij}]$ (scalar multiplication of a matrix)
			- Distributive (vector (matrix) addition): $c(A+B)=cA+cB$
			- Distributive (field addition): $(c+d)A=cA+dA$
			- Compatible with field mul.: $a(bA)=(ab)A$
			- Identity: $1A=A$
	- Vector space [[Vector Spaces#Properties|properties]] of $\mathbf{M}_{m\times n}(\mathbb{F})$
		- $A-B=0\implies A=B$
		- $cA=0\implies c=0$ or $A=0$
		- $0A=0$
		- $A+0=A$
		- and more...
	- **matrix multiplication** operation between two matrices (it's analogous to the dot product of two vectors, and here it represents the composition of linear transformations)
		- $A_{m\times n}B_{n\times p}=C_{m \times p}=[c_{ij}]$, where $c_{ij}$ is the dot product of the $i$th row of $A$ and the $j$th column of $B$ 
			- (3.4.3) $[A]^{r}_{i}B=[C]^{r}_{i}$ and $A[B]^{c}_{j}=[C]^{c}_{j}$
			- (3.4.4) $[A]^{r}_{i}=0\implies [C]^{r}_{i}=0$ and $[B]^{c}_{j}=0\implies [C]^{c}_{j}=0$ 		
	- **Matrix–Vector Product:** (it's actually performing a linear transformation on a vector)
		- $(A+B)\mathbf{v}=A\mathbf{v}+B\mathbf{v}$
		- $A(\mathbf{u}+\mathbf{v})=A\mathbf{u}+A\mathbf{v}$
		- $A(c\mathbf{u})=c(A\mathbf{u})$
		- $A\mathbf{u}=A\mathbf{v}\iff A(\mathbf{u}-\mathbf{v})=0$

# Matrix

In this section:

- $V=\mathbb{F}^n$
- $W=\mathbb{F}^m$
- $A$ is a $m\times n$ matrix
- $K=\{v_{1},\dots,v_{m}\}\subseteq V$ is a set of vectors which are the rows of $A$ (equally, the columns of $A^T$)

## Row Echelon form (REF)

- (1.11.1) $\text{REF}(A)$ and $\text{RREF}(A)$ are row equivalent
- (8.5.1) The non-zero rows of $\text{REF}(A)$ are a basis of $\text{row-space(A)}$

### Reduced Row Echelon form (RREF)

- **Uniqueness:** Each matrix is row equivalent to one and only one reduced echelon matrix. 

## Elementary Row Operations

- $EA$ is the matrix obtained by applying the elementary row operation $E$ to the matrix $A$.
- An elementary row operation is represented by a left-multiplication of $A$ by an [[#Elementary matrix|elementary matrix]] $E$ (of the order $m$)


|               | Operation                           |
| ------------- | ----------------------------------- |
| Row Switching | $R_{i}\leftrightarrow R_{j}$        |
| Row Scaling   | $R_{i}\to kR_{i}$ (where $k\neq 0$) |
| Row Addition  | $R_{i}\to R_{i}+kR_{j}$             |


### Row equivalence

> _Row equivalence_ is an [[Binary Relation#Equivalence relation|equivalence relation]] on the set $M_{m\times n}(\mathbb{F})$

- The following statements are equivalent:
	- $A$ and $B$ are **row equivalent**
	- It is possible to transform $A$ into $B$ by a sequence of elementary row operations
	- (q7.5.12) $\text{row-space}(A)=\text{row-space}(B)$
	- $\text{null}(A)=\text{null}(B)$
	- There exists an invertible matrix $P$ such that $A=PB$.

**Properties:**

- If $A$ and $B$ are row equivalent matrices, then: 
	- A given set of column vectors of $A$ is linearly independent if and only if the corresponding column vectors of $B$ are linearly independent. 
	- A given set of column vectors of $A$ forms a basis for the column space of $A$ if and only if the corresponding column vectors of $B$ form a basis for the column space of $B$. 
	- $\text{rank}(A)=\text{rank}(B)$
	- (4.2.2) $\det{A}=0\iff\det{B}=0$ (for square matrices)
 
## Fundamental Spaces

### Row space

- $\text{row-space}(A)=\text{Sp}(\{ \text{row}_{1}(A),\dots,\text{row}_{m}(A) \})$

### Column space

- $\text{column-space}(A)=\text{Sp}(\{ \text{column}_{1}(A),\dots,\text{column}_{n}(A) \})$

The following statements are equivalent:

- $\mathbf{b}\in\text{column-space}(A)$
- $A\mathbf{x}=\mathbf{b}$ is [[Linear Systems#Consistency|consistent]]

### Null space

- $\text{null}(A)=\{ v \mid Av=0 \}$. (in the book it's denoted by $P(A)$ (!!!))

The following statements are equivalent:

- $v\in\text{null}(A)$
- $v$ is [[Orthogonality#Orthogonal Vector|orthogonal]] to $K$ (the rows of $A$)

### Left null space

- $\text{null}(A^t)$

### Theorems

- $\text{row-space}(A)\subseteq \mathbb{F}^n$
- $\text{column-space}(A)\subseteq \mathbb{F}^m$
- $\text{null}(A)\subseteq \mathbb{F}^n$
- $\text{null}(A^t)\subseteq \mathbb{F}^m$
- $\text{row-space}(A)=\text{column-space}(A^t)$
- $\text{column-space}(A)=\text{row-space}(A^t)$
- $\text{row-space}(A)=\text{row-space}(\text{REF}(A))$
- $\text{row-space}(A+B)\subseteq\text{row-space}(A)+\text{row-space}(B)$
- (9.8.7a) $\text{column-spcae}(BA) \subseteq \text{column-spcae}(B)$
- (9.8.7c) $\text{column-spcae}(BA)=B(\text{column-spcae}(A))$
- (9.8.7b) $\text{null}(A) \subseteq \text{null}(BA)$

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

## Rank

- (d8.5.4) $\rho{(A)}=\dim(\text{row-space(A)})=\dim(\text{column-space(A)})$
- $\rho(A)$ is the number of linearly independent **rows**
- $\rho(A)$ is the number of linearly independent **columns**
- $\rho(A)=\dim(\text{Im}(T_{A}))$
- $\rho(A)=n-\dim(\text{null}{(A)})$
- $\rho(A)$ is the number of the non-zero rows of $\text{REF}(A)$
- $\rho(A)$ is the number of pivots in $\text{RREF}(A)$

> $\text{rank}{(A)}=\rho{(A)}$

### Theorems

- (8.6.1) **Rank–nullity theorem**  $$\text{rank}(A)+\text{nullity}{(A)}=n$$
- (q8.5.4) $\rho{(A)}=\rho{(A^t)}$
- (q8.5.6) $\rho{(AB)}\leq\min{\{ \rho{(A)}, \rho{(B)} \}}$
- $\rho{(A)}\leq\min{\{ m,n \}}$
	- $m>n\implies \rho(A)\neq m$ (i.e. $A$ does **not** have [[#Full Row Rank|full row rank]])
	- $n>m\implies \rho(A)\neq n$ (i.e. $A$ does **not** have [[#Full Column Rank|full column rank]])
- see also [[#Square Matrices#Rank|rank of square matrix]] and of [[#Invertibility#Properties|invariable]]
- Row equivalent matrices have the same rank
-  $\rho(A+B)\leq \rho(A)+\rho(B)$ #todo
- (8.3.4a+8.6.1) $\text{null}(AB) \subseteq \text{null}(B)\implies \rho(B)\leq \rho(AB)$
- $0\in{K}\implies K\text{ is linearly {\bf dependent}}$

### Full Rank

> q8.5.5

- The following statements are equivalent:
	- $A$ has **full rank**
	- $\text{rank}{(A)}=\min{\{ m,n \}}$
	- $\text{rank}{(A)}=m$ or $\text{rank}{(A)}=n$
	- $A$ is not [[#Rank Deficient|rank deficient]]
	- $A$ has either [[#Full Column Rank|full column rank]] or [[#Full Row Rank|full row rank]]

#### Full Column Rank

- The following statements are equivalent:
	- $A$ has **full column rank**
	- $\text{rank}(A) = n$
	- The columns of $A$ are linearly independent
	- $T_A$ is [[Linear Transformations#Injective (One-to-One)|injective]] (one-to-one)
	- $\text{null}(A) = \{0\}$ 
	- $\text{nullity}(A)=0$
	- $\text{row-space}(A) = \mathbb{F}^n$
	- $\text{Sp(K)} = \mathbb{F}^n$ (i.e. $K$ **spans** $\mathbb{F}^n$)
	- The matrix $A^T A$ is invertible
	- For every $\mathbf{b} \in \mathbb{F}^m$, the system $A\mathbf{x} = \mathbf{b}$ has at most one solution
	- $A$ is **left-invertible** (There exists a matrix $B_{n\times m}$ such that $BA=I_{n}$)
	- $A^T$ has [[#Full Row Rank|full row rank]]
###### Theorems

- $\text{Sp}(K)$ is a [[Vector Spaces|subspace]] of $V$
- $\text{Sp}(L)=V\land L\subseteq{\text{Sp}{(K)}}\implies\text{Sp}(K)=V$
- <small> (7.5.4) </small> $\text{Sp}{(K)}=\text{Sp}{(L)}\iff{K\subseteq\text{Sp}{(L)}\land{L\subseteq\text{Sp}{(K)}}}$
- (7.5.1, q7.5.16b) $K\subseteq{\text{Sp}{(L)}}\implies{\text{Sp}{(K)}\subseteq\text{Sp}{(L)}}$
- (q7.5.16a) $K \subseteq{L}\implies{\text{Sp}{(K)}\subseteq\text{Sp}{(L)}}$
- (q7.5.17a) $\text{Sp}(K)\cup\text{Sp}(L)\subseteq\text{Sp}(K\cup L)$
- (q7.5.17b) $\text{Sp}(K\cap L)\subseteq\text{Sp}(K)\cap\text{Sp}(L)$

#### Full Row Rank

- The following statements are equivalent:
	- $A$ has **full row rank**
	- $\text{rank}(A) = m$
	- $K$ (that is, A's rows) is **linearly independent**
	- $\lambda_1 v_1 + \dots + \lambda_m v_m = 0 \implies \lambda_1 = \dots = \lambda_m = 0$
	- $T_A$ is [[Linear Transformations#Surjective (Onto)|surjective]] (onto)
	- $A^T$ has [[#Full Column Rank|full column rank]]
	- For every $\mathbf{b} \in \mathbb{F}^m$, the system $A\mathbf{x} = \mathbf{b}$ is consistent
	- Every $\mathbf{b}$ in $\mathbb{F}^m$ is a linear combination of the columns of $A$
	- $\text{column-space}(A) = \mathbb{F}^m$ (i.e. $A$'s columns span $\mathbb{F}^m$)
	- $A$ has a pivot position in every row
	- The matrix $AA^T$ is invertible
	- $A$ is **right-invertible** (There exists a matrix $B_{n\times m}$ such that $AB=I_{m}$)
	- (8.4.4) $K'$ is linearly independent (where the vectors of $K$ are the [[Vectors#Coordinates Vector|coordinates vectors]] of any set of vectors $K'$)

###### Theorems

- If $L,K\subseteq V$, and $K\subseteq{\text{Sp}{(L)}}$, and $L$ is linearly dep., then $K$ is also linearly dep. (by 7.5.1, 8.3.4)

#### Full Row-and-Column Rank

- The following statements are equivalent:
	- $A$ is [[#Invertibility|invertible]] square
	- $K$ is a **basis** of $V$
	- $K$ is a **maximal linearly independent set**
	- $K$ is a **minimal spanning set** of $V$
	- $K$ is linearly independent and spans $V$
	- $A$ has both a [[#Full Row Rank|full row rank]] and a [[#Full Column Rank|full column rank]]
	- $m=n$ and $A$ has a full row rank
	- $m=n$ and $A$ has a full column rank
	- (8.4.5) $m=n$ and the transition matrix from some basis $B$ to $K$ is invertible
	- (8.2.5) $\forall w\in \mathbb{F}^m, \exists! v\in\mathbb{F}^n: Av=w$ (in other words, every element of $\mathbb{F}^m$ can be written in a unique way as a finite linear combination of elements of $K$)
	- (8.4.5) $m=n$ and the transition matrix from some basis $B$ to $K$ is invertible

### Rank Deficient

- The following statements are equivalent:
	- $A$ is **rank deficient**
	- $\text{rank}(A) < \min{\{ m,n \}}$
	- The columns and rows of $A$ are linearly dependent
	- $T_A$ is neither [[Linear Transformations#Injective (One-to-One)|injective]] nor [[Linear Transformations#Surjective (Onto)|surjective]]
	- $\text{null}(A) \neq \{0\}$
	- $\text{nullity}(A) \neq 0$
	- $\text{row-space}(A) \neq \mathbb{F}^n$
	- $\text{column-space}(A) \neq \mathbb{F}^m$
	- $A^T A$ is not invertible
	- There exists a $\mathbf{b} \in \mathbb{F}^m$ such that the system $A\mathbf{x} = \mathbf{b}$ has more than one solution
	- $A$ is neither **left-invertible** nor **right-invertible**
	- $A^T$ has neither [[#Full Row Rank|full row rank]] nor [[#Full Column Rank|full column rank]]

#### Zero Rank

- The following statements are equivalent:
	- $A$ has **zero rank**
	- $\text{rank}(A) = 0$
	- $\text{rank}(A^T) = 0$
	- $A$ is the zero (null) matrix (of order $m \times n$)
	- $A = 0$
	- $\text{null}(A) = \mathbb{F}^n$
	- $\text{nullity}(A) = n$
	- $\text{row-space}(A) = \{0\}$
	- $\text{column-space}(A) = \{0\}$
	- $T_A: \mathbb{F}^n \to \mathbb{F}^m$ is the zero transformation

## Nullity 

- (8.6.1) $\mathrm{nullity}(A)=\dim{\mathrm{(null(A))}}=n-\rho({A})$

## Transformation matrix

Matrix Representations of Linear Transformation

- (d10.1.1) $T:V\to W$, and $B=(v_{1},\dots,v_{n})$ and $C=(w_{1},\dots,w_{n})$ are bases of $V$ and $W$. (respectively) 
$$[T]_{C}^{B}=\left[\begin{array}{ccc} | & & | \\ [T({v_{1}})]_{C} & \cdots & [T( {v_{n}})]_{C} \\ | & & | \end{array} \right]_{m\times n}$$
## Transpose

- Notation: $A^t$, $A^\top$
- (3.2.4)  $(A^t)^t=A$
- $(A+B)^t=A^t+B^t$
- (3.4.5) $(AB)^t=B^tA^t$
- $(cA)^{t}=cA^{t}$

## Equivalence

>[!warning] This term is beyond the scope of the course. 

Matrix equivalence is an equivalence relation on the space of rectangular matrices.

Two $m\times n$ matrices $A$ and $A'$ are called **equivalent** if $$A'=P^{-1}AQ$$for some $n\times n$ matrix $Q$ and $m\times m$ matrix $P$.

Equivalent matrices represent the same linear transformation $T:V\to{W}$ under two different choices of a pair of bases of $V$ and $W$, with $Q$ and $P$ being the change of basis matrices in $V$ and $W$ respectively.

- $B,C$ are **old bases** of $V,W$ (respectively)
- $B',C'$ are **new bases** of $V,W$ (respectively)
- $Q$ is change-of-basis $n\times n$ invertible matrix of $V$ from $B$ to $B'$
- $P$ is change-of-basis $m\times m$ invertible matrix of $W$ from $C$ to $C'$
- $A=[T]^{B}_{C}$ is the transformation matrix by the **old bases**
- $A'=[T]^{B'}_{C'}$ is the transformation matrix by the **new bases**

- $AB=0\iff \text{column-space}(B)\subseteq{\text{null}(A)}$

# Square Matrices

- Let $A$ be an $n \times n$ square matrix.
- $A=[T]_{B}$ where $B$ is a basis of $V$  

**theorems:**
- $A^2=0\implies\text{column-space}(A)\subseteq\text{null}(A)$
- $\text{row-space}(A)=\text{column-space}(A)\implies \text{column-space}(A)\oplus\text{null}(A)=\mathbb{R}^n$ (by 9.3.7, 12.3.1, 12.3.2a, e2023a85q1a)

## Invertibility 

- **Theorem 3.10.6**: Let $A$ be a $n$-ordered square matrix over a field $F$. The following statements are **equivalent**:
	- $A$ is an **invertible matrix**
	- $A$ can be expressed as a finite product of elementary matrices.
	- There exists a $B$ such that $BA=I$
	- There exists a $B$ such that $AB=I$
	- There exists a $B$ such that $AB=BA=I$, (in such case $A^{-1}=B$, and $B^{-1}=A$) ()
	- $A$ is row-equivalent to $I$.
	- $A$ is column-equivalent to $I$.
	- $\text{RREF}(A)=I$
	- The columns of A are linearly independent.
	- The rows of A are linearly independent.
	- The columns of A span $F^n$
	- The rows of A span $F^n$
	- The columns of A is a basis $F^n$
	- The rows of A a basis $F^n$
	- $A^t$ is an **invertible matrix** (in such case $(A^t)^{-1}=(A^{-1})^{t}$) (3.8.4b)
	- (4.4.1, q10.7.7 for l.t.) The determinant of A is non-zero: $\det{A}\neq0$
	- (4.4.1, and q11.3.1) The number $0$ **is not an eigenvalue** of $A$. 
	- (q8.5.8b) $A$ has a full rank: $\rho(A)=n$
	- (10.5.1, and 9.6.2) $\text{null}(A)=\{ 0 \}$
	- $(\text{null}(A))^{\perp}=F^n$
	- $\dim{(\text{null}(A))=0}$
	- The linear transformation mapping $\mathbf{x}$ to $A\mathbf{x}$ is **surjective**; that is, the equation $A\mathbf{x}=\mathbf{b}$ has at least one solution for each $\mathbf{b}$ in $F^n$.
	- The linear transformation mapping $\mathbf{x}$ to $A\mathbf{x}$ is **injective**; that is, the equation $A\mathbf{x}=\mathbf{b}$ has at most one solution for each $\mathbf{b}$ in $F^n$.
	- The linear transformation mapping $\mathbf{x}$ to $A\mathbf{x}$ is **bijective**; that is, the equation $A\mathbf{x}=\mathbf{b}$ has exactly one solution for each $\mathbf{b}$ in $F^n$. ($A\mathbf{x}=\mathbf{b}\implies \mathbf{x}=A^{-1}\mathbf{b}$
	- $A\mathbf{x}=\mathbf{0}\implies \mathbf{x}=\mathbf{0}$

#### Properties 

- for $A_{n}$ invertible matrix 
	- (3.8.3)
		- (left-cancellable) $AB=AC\implies B=C$ 
		- (right-cancellable) $BA=CA\implies B=C$
	- (3.8.4d) if $s\neq 0$, then $sA$ is also invertible. (in such case $(sA)^{-1}=\frac{1}{s}A^{-1}$)
	- (q8.5.7a) $\rho(BA)=\rho(B)$ for any matrix $B_{m \times n}$
	- (q8.5.7b) $\rho(AB)=\rho(B)$ for any matrix $B_{n \times m}$
- if $A$ and $B$ are invertible, (in order $n$)
	- $A$ and $B$ are row equivalent
	- (3.8.4c) $AB$ is also invertible. and $(AB)^{-1}=B^{-1}A^{-1}$

### Theorems 

- (4.5.2) $A,B$ are square matries, and $AB=I$, then:
	- $A$ and $B$ are both invetible
	- $A^{-1}=B$
	- $B^{-1}=A$
	- $AB=BA=I$
- (q3.10.2) $A,B$ are invertible, if and only if, $AB$ is invertible
- $A,B, C$ are square matries
	- if $AB-AC$ is invertible and $AB$ is singular, then $B$ is singular


> [!example] **Procedure:** determine whether a square matrix $A$ is invertible and, if so, find $A^{−1}$: 
>	- Form the augmented matrix $[A | I_{n}]$ and put it into RREF. 
>	- If the RREF has the form $[I_{n} | B]$, then $A$ is invertible and $B=A^{−1}$. 
>	- else, if the matrix in the left half of the RREF is not $I_{n}$, then $A$ is singular. 

> **WolframAlpha** `inverse [matrix]`


## Rank

- rank of **square matrix:** let $A,B$ are square matrices of order $n$, then:
	- (q8.5.8a) $\rho(A)=n \iff \det(A)\neq 0$  
	- (q10.5.3) Sylvester’s inequality $\rho(A)+\rho(B)\leq \rho(AB)+n$
	- $\rho(B)-\dim(\text{null}(A))\leq \rho(AB)$. (from Sylvester’s inequality and  Rank–nullity theorem)
	- $AB=0\implies \rho(A)+\rho(B)\leq n$
	- for invetible see [[#Invertibility#Properties]]
## Elementary matrix

- $A$ is called an **elementary matrix** if it can be obtained from an identity matrix by performing a single elementary row operation. 
- Every elementary matrix is invertible, and the inverse is also an elementary matrix. 

## Determinant 

- **Notation:** $\det A=|A|$ 

- **Cofactor Expansion**: $\det(A)=\sum^{n}_{j=1}(-1)^{i+j}a_{ij}\det(A_{{ij}})$
	- $a_{ij}$ is the entry of the $i$th row and jth column of $A$
	- $A_{ij}$ is the submatrix obtained by removing the $i$th row and the $j$th column of $A$
	- Here $j$ is variable and $i$ is some consonent, but the opposite is also possible.
	- $M_{ij}=\det(A_{{ij}})$ is $i,j$ **minor** of $A$.
	- $C_{ij}=(-1)^{i+j}M_{ij}$ is **cofactor** of entry $a_{ij}$
 
- **Theorems:**
	- (4.3.1) $\det (A)=\det(A^t)$
	- (4.2.2) if $A$ has zero row/column, then $\det{A}=0$
	- (4.3.5) if $A$ has two equal rows (or colmuns), then $\det A=0$
	- (4.5.1) Multiplicative Property: $\det (AB)=\det (A) \det (B)$
	- (by 4.5.1) $\det (AB)=\det (BA)$
	- (4.5.3) $\det(A^k)=\det{(A)^k}$
	- (4.5.4) $\det(A^{-1})=\frac{1}{\det(A)}$
	- (4.4.1) $\det{A}\neq0 \iff A\text{ is invertible}$
	- (q4.4.4) if the sum of each of $A$s rows is zero, then $\det{A}=0$
	- (4.3.8) if $A_{n}=[a_{ij}]$ is a triangular matrix, then $\det A=a_{11}a_{22} \cdots a_{nn}$
	- (10.7.3) **similar matrices** have the same determinant
	- (q11.3.1) $\det{A}=0$, if and only if, $\lambda=0$ is eigenvalue of $A$
	- Row Operations
		- (4.3.6) If a multiple of one row of $A$ is **added** to another row to produce a matrix $B$, then $\det B=\det A$
		- (4.3.2) If two rows of $A$ are **interchanged** to produce $B$, then $\det B=-\det A$
		- (4.3.3) if one row of $A$ is **multiplied** by $k$ to produce $B$, then $\det B=k \cdot \det A$ 
			- ($\det (kA)=k^n\det A$)
	- (q4.3.3b) **Homogeneity:** $\det (tA)=t^n \det A$
	- $\det A$ is equal to the product of its eigenvalues (see q11.4.7)
	- (q4.3.10) determinant of an odd dimension anti-symmetric matrix is zero
	- (4.3.4) Let A, B, and C be n x n matrices that differ only in a single row, say the rth, and assume that the rth row of C can be obtained by adding corresponding entries in the rth rows of A and B. Then $\det(C) = \det(A) + \det(B)$ The same result holds for columns.

> [!example]  Procedure: computing the detrminant
> 
> 1. convert $A$ into an upper triangular matrix $B$ via row operations of **switching rows**, and **adding multiplication of another row**. (but **NOT** scaling of row by scalar)
 > 	- Note: if during the row operations we find zero-row, then $\det A=0$
> 2. let $k$ be the number of times two rows are switched
> 3. $\det{A}=(−1)^kb_{11} · · · b_{nn}$

## Trace

- $\text{tr}({A}) = \sum_{i=1}^n a_{ii} = a_{11} + a_{22} + \dots + a_{nn}$
- $\text{tr} A$ is the sum of its eigenvalues #todo 
- (10.7.6) $\text{tr}(AB)=\text{tr}(BA)$
- (10.7.5) similar matrices have the same trace
- $\text{tr}(A+B)=\text{tr}(A)+\text{tr}(B)$ 
- $\text{tr}(cA)=c\text{tr}(A)$ #todo 
- $\text{tr}(A)=\text{tr}(A^t)$ #todo 

## Characteristic polynomial 
$$p(t)_{A}=\det \left( t I -A \right)$$
**Properties:**
- The characteristic polynomial is a monic polynomial of degree $n$
- (q11.5.4) The **coefficient of** $t^{n}$ is $1$
- (q11.4.6) The **coefficient of** $t^{n-1}$ equals $\text{tr}(-A)=-\text{tr}(A)$ 
- (q11.4.7) The **free coefficient** equals $\det(-A) =(-1)^n\det{(A)}$
- The characteristic polynomial of $A_{2}$ is $t^2-\text{tr}(A)t+\det(A)$

## Eigenvalues

Equivalent definitions of **eigenvalue**.
-  $\lambda$ is an **eigenvalue** of $A$
- (d11.3.1) There exists a **non-zero** vector $v$ such that $Av=\lambda{v}$. 
	- (in such case, $v$ is called an **eigenvector** of $A$ that related to the eigenvalue $\lambda$) 
- $(A-\lambda I)$ is singular
- $\text{rank}(A-\lambda I)<n$
- $(\lambda I-A)v=0$ has nontrivial solutions, i.e. $\text{null}(\lambda I-A)\neq \{ 0 \}$
- (11.4.1) The **characteristic equation** $\det(\lambda I-A)=0$
- $\lambda$ is a root of the characteristic equation $\det(xI-A)=0$
-  $\lambda$ is an **eigenvalue** of $T_{A}$

**Theorems**:
- Similar matrices have the same eigenvalues (11.3.3), the same **characteristic polynomial** (11.4.3), and the same algebraic multiplicities of eigenvalues ( #todo  ) 
- The sum of eigenvalues of $A$ equals to $\text{tr}A$ #todo 
- The product of eigenvalues of $A$ equals to $\text{det}A$ #todo  
- (q11.3.2a) if $\lambda$ is an eigenvalue of $A$, then for each $\mu$, $\mu\lambda$ is an eigenvalue of $\mu A$
- (q11.3.2b) if $\lambda$ is an eigenvalue of $A$, then , $\lambda^k$ is a eigenvalue of $A^k$. (for each natural $k$ )
- The eigenvalues of a triangular matrix equal the values on its diagonal.
- (q11.3.5b) The eigenvalues of diagonal matrix $\text{diag}{(\lambda_{1},\dots,\lambda_{{n}})}$, are $\lambda_{1},\dots,\lambda_{{n}}$
- (q11.3.5b, q11.3.6) The eigenvalues of diagonalizable matrix (that similar to  $\text{diag}{(\lambda_{1},\dots,\lambda_{{n}})}$) are  $\lambda_{1},\dots,\lambda_{{n}}$
- if $A^n=I$ for some natural $n$, then $A$ has at most the eigenvalues $1,-1$ ( #todo  by q11.2.4)
- (11.2.6) $A$ has at most $n$ distinct eigenvalues 
- (4.4.1+q11.3.1+left-multiple with A) if $A$ is invertible, then $\lambda$ is an **eigenvalue** of $A$, if and only if, $\lambda^{-1}$ is an **eigenvalue** of $A^{-1}$. (with the same eigenvectors)

- (11.2.4) Eigenvectors corresponding to distinct eigenvalues are linearly independent
### Eigenvectors

Definitions of **eigenvector**. The following statements are **equivalent**:
- $v$ is an **eigenvector** of $A$ that related to $\lambda$
- (d11.3.1) $v$ is non-zero vector in $\mathbb{R}^n$ such that $Av=\lambda v$
- (11.3.2) $[v]_{B}$ is an **eigenvector** of $T_{A}$ that related to $\lambda$
#### Eigenbasis 

- An eigenbasis of $A$, is a basis of $F^n$ consisting of eigenvectors of $A$.
- if $\lambda_{1},\lambda_{2},\dots ,\lambda_k$ are distinct eigenvalues of a matrix $A$ with corresponding eigenspaces, $\mathcal{E}_{1},\mathcal{E}_{2},\dots \mathcal{E}_{k},$ spanned by bases $\mathcal{B}_{1},\mathcal{B}_{2},\dots \mathcal{B}_{k},$ respectively, then the union $\mathcal{B}_{1}\cup\mathcal{B}_{2}\cup\dots\cup\mathcal{B}_{k}$ is linearly independent set of eigenvectors of $A$. thereby if the size of the union is $n$, then is also an **eigenbasis** of $A$

### Eigenspace 

Definitions of the **eigenspace of** $A$ **associated with its eigenvalue** $\lambda$.
- $\{ \mathbf{v}\mid(A-\lambda I) \mathbf{v}= \mathbf{0} \}$
- $\{ \mathbf{v}\mid A\mathbf{v}=\lambda \mathbf{v} \}$
- $\{ \text{eigenvectors corresponding to } \lambda \}\cup \{ \mathbf{0} \}$
- $\text{null}(\lambda I-A)$

### Algebraic & geometric multiplicity

-  $\lambda$ is an **eigenvalue** of $A$
	- (d11.5.2) The **algebraic multiplicity** of $\lambda$ is: 
		- the multiplicity of $\lambda$ as a root of the characteristic equation
		- the highest power of $(x−λ)$ that divides the characteristic polynomial of $A$ 
	- (q11.5.2) The **geometric multiplicity** of $\lambda$, is: 
		- the dimension of the eigenspace corresponding to $\lambda$, 
		- $\dim{(\text{null}(\lambda I-A))}=n-\text{rank}(\lambda I-A)$     
	- #todo if $A$ is diagonalizable, then the geometric and algebraic multiplicity of $\lambda$ is the number that $\lambda$ appears in the diagonalization of $A$
	- (11.5.3, q11.5.3)  $1\leq$ the **geometric multiplicity** $\leq$ the **algebraic multiplicity**

- finding the algebraic multiplicity of eigenvalue #todo 
- finding the geometric multiplicity of eigenvalue #todo 


>[!example] **Procedure**: Finding Eigenvalues and Eigenvectors
> 1. First, find the eigenvalues $\lambda$ of $A$ by solving the **characteristic equation** $\det \left( \lambda I -A \right) = 0$.
> 2. For each $\lambda$, find the basic eigenvectors $v \neq 0$ by finding the basic solutions to $\left( \lambda I - A \right) v = 0$.
> 
> To verify your work, make sure that $Av=\lambda v$ for each $\lambda$ and associated eigenvector $v$.

## Similarity

Similarity is an [[Binary Relation#Equivalence relation|equivalence relation]] on the space of square matrices.

$A$ and $B$ are square matrices

Definitions of **similarity**. The following statements are **equivalent**:
- $A$ and $B$ are similar
- (d10.7.1) There exists an invertible matrix $P$ such that $A=P^{-1}BP$ 
	- $P$ being the change of basis matrix
- (10.7.2) $A$ and $B$ represent the same linear transformation (possibly different bases)

**Theorems:**
- (q10.7.8) *zero matrix* is similar only to itself. *identify matrix* is similar only to itself. 
- #todo to show that two matrices are similar, show that are similar to the same diagonal matrix
- #todo let $A$ and $B$ are diagonalizable, and they both have the same eigenvalues, then they're similar (because similarity is transitive) 
- #todo let $A$ and $B$ are diagonalizable, and they both have the same characteristic polynomial, then they're similar (because similarity is transitive) 

**Properties:**
- If the matrices $A$ and $B$ are similar, then
	- $A=I\iff B=I$ #todo 
	- $A=0\iff B=0$ #todo 
	- $A$ is **invertible**, if and only if $B$ is also **invertible** #todo 
	- (10.7.3) $\det(A)=\det(B)$ 
	- (10.7.5) $\text{tr}(A)=\text{tr}(B)$ 
	- (11.3.3) $A$ and $B$ have the same _eigenvalues_
	- $A$ and $B$ have the same _algebraic multiplicities_ of eigenvalues #todo 
	- (11.4.3) $A$ and $B$ have the same _characteristic polynomial_
	- $\dim(\text{null}(A))=\dim(\text{null}(B))$
	- $\text{rank}(A)=\text{rank}(B)$

## Triangular matrix


**Properties:**
-  if $A_{n}=[a_{ij}]$ is a triangular matrix, then
	- $\det A=a_{11}a_{22} \cdots a_{nn}$ (4.3.8)
	- the eigenvalues of $A$ are $a_{11},a_{22},\dots,a_{nn}$ 
		- each eigenvalue occurs exactly k times on the diagonal, where k is its algebraic multiplicity
	- the characteristic polynomial of $A$ is $p_{A}=(x-a_{11})(x-a_{22})\cdots(x-a_{nn})$
	- 

## Diagonal matrix

Diagonal equivalent definitions.
- $A$ is a diagonal matrix
- $A$ is both *upper-* and *lower-triangular*
- see q11.1.1


**Properties:**
- **Addition:** $\text{diag}{(a_{1},\dots ,a_{n})}+\text{diag}{(b_{1},\dots ,b_{n})}=\text{diag}{(a_{1}+b_{1},\dots ,a_{n}+b_{n})}$
- **Multiplication** $\text{diag}{(a_{1},\dots ,a_{n})}\text{diag}{(b_{1},\dots ,b_{n})}=\text{diag}{(a_{1}b_{1},\dots ,a_{n}b_{n})}$
- Powers of a matrix  $(\text{diag}{(a_{1},\dots,a_{{n}})})^k=\text{diag}{(a_{1}^k,\dots,a_{n}^k)}$
- $\text{diag}{(a_{1},\dots ,a_{n})}\text{ is invertible}\iff a_{1},\dots,a_{n}\neq 0$. in such case $\text{diag}{(a_{1},\dots ,a_{n})^{-1}}=\text{diag}{(a_{1}^{-1},\dots ,a_{n}^{-1})}$
- A diagonal matrix is symmetric.
- $\det(\text{diag}{(a_{1},\dots ,a_{n})})=a_{1}\cdots a_{n}$
- the rank of a diagonal matrix is simply the number of nonzero entries (the eigenvalues)

## Diagonalizable

- Diagonalizable definition. The following statements are equivalent. 
	- $A$ is a **diagonalizable matrix**
	- (d11.3.4) There exists an $n \times n$ invertible matrix $P$, such that $P^{-1}AP$ is a diagonal matrix
	- (d11.3.4) $A$ is similar to a diagonal matrix
	- (11.3.7) $A$ has $n$ linearly independent eigenvectors. (they are $P$'s columns. that are $v_{1},\dots,v_{n}$, and $v_i$ is a **eigenvector** of $A$ that's related to the **eigenvalue** $\lambda_{i}$. and $P^{-1}AP=\text{diag}{(\lambda_{1},\dots,\lambda_{{n}})}$ )
	- (q11.3.7) $F^n$ has a basis that consists of eigenvectors of $A$ 
	- (11.3.5) $T_{A}:V\to V$ is diagonalizable
	- (q11.4.10) $A^t$ is diagonalizable
	- (11.5.4') 
		- (i) the characteristic polynomial factors completely into linear factors. and 
		- (ii) the geometric multiplicity of every eigenvalue is equal to the algebraic multiplicity
	- #todo The sum of the dimensions of the eigenspaces equals to $n$


- (11.3.6) if $A$ has $n$ **distinct** eigenvalues, then $A$ diagonalizable
- #todo $A^k=P{D}^{k}P^{-1}$, ($D$ is a diagonal matrix)


## Symmetric matrix

- (d3.2.6) ${A}\text{ is symmetric} \iff A=A^t$
- (q3.2.3) ${A}\text{ is symmetric} \implies {A}\text{ is square}$
- (q3.2.4) ${A}\text{ is diagonal} \implies {A}\text{ is symmetric}$
- (q3.2.4) sum of symmetric matries is symmetric matrix
- (q3.4.6) $A$ and $B$ are symmetric matries, then ${AB}\text{ is symmetric} \iff {AB=BA}$
- (q4.3.10)  ${A}\text{ is anti-symmetric} \iff A^t=-A$
	- if $A_{n}$ is anti-symmetric, and $n$ is odd, then $\det A=0$ 

## Change of Basis matrix (Transition matrix) 
also *change-of-coordinates matrix*

- (d8.4.6) Let $B=(v_{1},\dots ,v_{n})$ and $C=(u_{1},\dots ,u_{n})$ bases of $V$. if $$\begin{align}
u_{1} &= a_{11}v_{1}+\dots+a_{n1}v_{n} \\ \vdots \notag \\ u_{n} &= a_{1n}v_{1}+\dots+a_{nn}v_{n}  \\ \end{align}$$then $$P=\begin{bmatrix} a_{11}  & \dots & a_{1n} \\    \vdots &  \ddots & \vdots \\ a_{n1}  & \dots & a_{nn} \end{bmatrix}=\left[\begin{array}{ccc} | & & | \\ [{u_{1}}]_{B} & \cdots & [{u_{n}}]_{B} \\ | & & | \end{array} \right]$$ is the **transition matrix** from basis $B$ to basis $C$. 
- the **transition matrix** from basis $B$ to basis $C$ is the matrix that its columns are the coordinate vectors of the $C$ vectors by $B$.
- $\forall{v}\in{V} :P[v]_{C}=[v]_{B}, \quad [v]_{C}=P^{-1}[v]_{B}$
- (8.4.9) $P^{-1}$ is the transition matrix from $C$ to $B$
- Transition matrix is square matrix of $n$-order, where $n=\dim V$
- (by 8.4.5) Transition matrix is invertible matrix 

**Theorems:**
- (8.4.8) if $A$ is square matrix, and $[v]_{B}=P[v]_{C}$ for each $v\in{V}$, then $P$ is the transition matrix from $B$ to $C$. 
- (10.6.1) $T:V\to V$ and $B$ and $C$ are bases of $V$. if $P$ transition matrix from $B$ to $C$, then $[T]_{C}=P^{-1}[T]_{B}P$. (or symmetrically $[T]_{B}=P[T]_{C}P^{-1}$)
	- transition matrix from $B$ to $C$ is $[I]^{C}_{B}$, therefore $[T]_{C}=[I]^{B}_{C}[T]_{B}[I]^{C}_{B}$

>[!example] Finding the transition matrix from an old basis to a new basis 
>1. Form the partitioned matrix $[\text{new basis} | \text {old basis}]$ in which the basis vectors (or coordinate vectors) are in column form. 
>2. Use elementary row operations to reduce the matrix in Step 1 to **RREF**.
>3. The resulting matrix will be $[{I} | \text{transition matrix from old to new}]$ where $I$ is an identity matrix.
>4. Extract the matrix on the right side of the matrix obtained in Step 3. 

### Transition matrix from a basis B to the standard basis

- if $B=(v_{1}, v_{2},\dots,v_{n})$, then $[v_{1}|v_{2}|\dots|v_{n}]$ is the transition matrix from $B$ to the standard basis

## Orthogonality

#todo Orthogonal matrix - This is not taught in the course.
## Commuting

- (d3.6.2) $A$ and $B$ are said to commute if $AB=BA$
- (3.6.3) $(tI)A=A(tI)$
- $A$ and $B$ share the same $n$ independent eigenvectors if and only if $AB=BA$.

