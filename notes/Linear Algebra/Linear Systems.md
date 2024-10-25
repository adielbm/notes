- $A\mathbf{x}=\mathbf{b}$ is a **linear system** ($m$ equations, $n$ variables) over $\mathbb{F}$
- $A$ is $m\times n$ matrix, called the [[#Coefficient Matrix Characterization|coefficient matrix]] of the system
- $\mathbf{x}$ is $n\times 1$ vector, called the **variable vector**
- $\mathbf{b}$ is $m\times 1$ vector, called the **constant vector** 
	- If $\mathbf{b}=\mathbf{0}$, then the system is [[#Homogeneous System|homogeneous]]
- ${(A\vert\mathbf{b})}$ is the **augmented matrix** of the system
- The **solution set** of the system is the set of all $\mathbf{x}$ that satisfy the system, defined as $\text{Sol}(A,\mathbf{b})=\{\mathbf{x}\in\mathbb{F}^n\mid A\mathbf{x}=\mathbf{b}\}$
	- The solution set is either empty, a singleton, or infinite
	- The solution set is an affine subspace of $\mathbb{F}^n$
	- $\mathbf{x}_p\in\text{Sol}(A,\mathbf{b})\implies \text{Sol}(A,\mathbf{b})=\{ \mathbf{x}_p+\mathbf{x}_h \mid \mathbf{x}_h\in\text{null}(A) \}$ (or shortly $\mathbf{x}_p+\text{null}(A)$)
		- That is, we have either, $\text{Sol}(A,\mathbf{b})=\emptyset$, or $\text{Sol}(A,\mathbf{b})=\mathbf{x}_p+\text{null}(A)$
		- $\mathbf{x}_p$ is a particular solution of the system
		- $\mathbf{x}_h$ is any solution of the homogeneous system $A\mathbf{x}=\mathbf{0}$
	- The system is [[#Consistency|consistent]] if its solution set is not empty
	- The system is [[#Inconsistency|inconsistent]] if its solution set is empty
	- The system is [[#Determined Case|determined]] if its solution set is a singleton
	- The system has [[#Infinite Solutions Case|infinitely many solutions]] if its solution set is infinite
	- The solution set of a homogeneous system is called the [[Matrices#Null space|null-space]] of $A$ and denoted by $\text{null}(A)$
		- $\text{null}(A)$ is a subspace of $\mathbb{F}^n$
		- $\mathbf{v},\mathbf{u}\in\text{null}(A)\implies \mathbf{v}+\mathbf{u}\in\text{null}(A)$
		- $\mathbf{v}\in\text{null}(A)\implies c\mathbf{v}\in\text{null}(A)$

## Equivalence

- (d1.7.1) The following statements are equivalent:
	- The linear systems $A\mathbf{x}=\mathbf{b}$ and $C\mathbf{x}=\mathbf{d}$ are **equivalent** systems
	- $\text{Sol}(A,\mathbf{b})=\text{Sol}(C,\mathbf{d})$
	- The augmented matrices $[A|\mathbf{b}]$ and $[C|\mathbf{d}]$ are row equivalent
	- $\text{RREF}(A|\mathbf{b})=\text{RREF}(C|\mathbf{d})$

# Augmented Matrix Characterization

Given $\mathbf{b}\in\mathbb{F}^m$ and a linear system $A\mathbf{x}=\mathbf{b}$ ($m$ equations, $n$ variables) over $\mathbb{F}$

## Consistency 

- The following statements are **equivalent**: 
	- $A\mathbf{x}=\mathbf{b}$ is **consistent**
	- $\exists \mathbf{v}\in\mathbb{F}^n: A\mathbf{v}=\mathbf{b}$
	- (8.6.2; **Rouché–Capelli theorem**) $\rho([A|\mathbf{b}])=\rho(A)$
	- $\text{REF}[A|\mathbf{b}]$ does not have a row of the form $[0 \; 0 \; \cdots \; 0 \; | \; b]$ (where $b\neq 0$)
	- $\mathbf{b}$ is a linear combination of the colmuns of $A$
	- $\mathbf{b}\in \text{column-space}(A)$

### Determined Case

- The following statements are **equivalent**:
	- The system $A\mathbf{x}=\mathbf{b}$ is **determined**
	- $\text{Sol}(A,\mathbf{b})$ is a singleton
	- $A\mathbf{x}=\mathbf{b}$ is [[#Consistency|consistent]] and $A$ has [[Matrices#Full Column Rank|full column rank]]

### Infinite Solutions Case

- The following statements are **equivalent**:
	- The system $A\mathbf{x}=\mathbf{b}$ has **infinitely many solutions**
	- $\text{Sol}(A,\mathbf{b})$ is an affine subspace of $\mathbb{F}^n$
	- $A\mathbf{x}=\mathbf{b}$ is [[#Consistency|consistent]] and $A$ has not [[Matrices#Full Column Rank|full column rank]]

## Inconsistency

- The following statements are **equivalent**:
	- The system $A\mathbf{x}=\mathbf{b}$ is **inconsistent**
	- $\text{Sol}(A,\mathbf{b})=\emptyset$
	- $\text{rank}(A)<\text{rank}([A|\mathbf{b}])$
	- $\text{REF}[A|\mathbf{b}]$ has a row of the form $[0 \; 0 \; \cdots \; 0 \; | \; b]$ (where $b\neq 0$)
	- $\mathbf{b}\notin \text{column-space}(A)$

# Homogeneous System

$$\large A\mathbf{x}=\mathbf{0}$$

- Homogeneous system is always [[#Consistency|consistent]]
- if $m<n$, then it has infinitely many solutions

## Infinite Solutions Case

- The following statements are equivalent
	- $A$ has not [[Matrices#Full Column Rank|full column rank]] (i.e. $\text{rank}(A)<n$)
	- $A\mathbf{x}=\mathbf{0}$ has a nontrivial solution
	- $A\mathbf{x}=\mathbf{0}$ has infinitely many solutions
	- $A\mathbf{x}=\mathbf{0}$ has at least one free variable

## Determined Case

- The following statements are equivalent
	- $A\mathbf{x}=\mathbf{0}$ has only the trivial solution
	- $A$ has [[Matrices#Full Column Rank|full column rank]]

# Coefficient Matrix Characterization

- The following statements are equivalent
	- For each $\mathbf{b}\in\mathbb{F}^m$, the system $A\mathbf{x}=\mathbf{b}$ is consistent
	- $A$ has [[Matrices#Full Row Rank|full row rank]]

- A linear system is said to be **overdetermined** if it has more equations than unknowns ($m>n$)
	- if $m>n$ then there exists a vector $\mathbf{b}\in\mathbb{R}^m$ s.t. $A\mathbf{x}=\mathbf{b}$ is inconsistent
- A linear system is said to be **underdetermined** if it has more unknowns than equations ($m<n$)
	- if $m<n$ then for each vector $\mathbf{b}$ in $\mathbb{R}^m$ the system $A\mathbf{x}=\mathbf{b}$ is either inconsistent or has infinitely many solutions

> Overdetermined systems are _usually_ inconsistent, but not always

> Underdetermined systems are _usually_ consistent with infinitely many solutions, but not always

## Square System (m=n)

- The following statements are **equivalent**:
	- $A$ is [[Matrices#Invertibility|Invertible]]
	- For each $\textbf{b}$, the system $A\textbf{x}=\textbf{b}$ has **unique solution**. ($\textbf{x}=A^{−1}\textbf{b}$) 
	- There exists $\textbf{b}$, such that the system $A\textbf{x}=\textbf{b}$ has a **unique solution**
	- $A\mathbf{x}=\mathbf{0}\implies \mathbf{x}=\mathbf{0}$
- The following statements are **equivalent**:
	- $A$ is singular
	- $A\mathbf{x}=\mathbf{0}$ has **non trivial** solution
- (4.6.1) Cramer's rule: if $A$ is inevitable, then, $\mathbf{x}=(x_{1},\dots,x_{n})$, $x_i = \frac{\det(A_i)}{\det(A)}$, $i = 1, \ldots, n$, where $A_{i}$ is the matrix formed by replacing the $i$-th column of $A$ by the column vector $\mathbf{b}$


