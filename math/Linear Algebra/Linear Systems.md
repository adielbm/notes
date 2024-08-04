- $A\mathbf{x}=\mathbf{b}$ is a **linear system** ($m$ equations, $n$ variables) over $\mathbb{F}$
- $A$ is $m\times n$ matrix, called the **coefficient matrix** of the system
- $\mathbf{x}$ is $n\times 1$ vector, called the **variable vector**
- $\mathbf{b}$ is $m\times 1$ vector, called the **constant vector** 
	- If $\mathbf{b}=\mathbf{0}$, then the system is **homogeneous**
- ${(A\vert\mathbf{b})}$ is the **augmented matrix** of the system
- The **solution set** of the system is the set of all $\mathbf{x}$ that satisfy the system, defined as $\text{Sol}(A,\mathbf{b})=\{\mathbf{x}\in\mathbb{F}^n\mid A\mathbf{x}=\mathbf{b}\}$
	- The solution set is either empty, a singleton, or infinite
	- The solution set is an affine subspace of $\mathbb{F}^n$
	- $\mathbf{x}_p\in\text{Sol}(A,\mathbf{b})\implies \text{Sol}(A,\mathbf{b})=\{ \mathbf{x}_p+\mathbf{x}_h \mid \mathbf{x}_h\in\text{null}(A) \}$ (or shortly $\mathbf{x}_p+\text{null}(A)$)
		- That is, we have either, $\text{Sol}(A,\mathbf{b})=\emptyset$, or $\text{Sol}(A,\mathbf{b})=\mathbf{x}_p+\text{null}(A)$
		- $\mathbf{x}_p$ is a particular solution of the system
		- $\mathbf{x}_h$ is any solution of the homogeneous system $A\mathbf{x}=\mathbf{0}$
	- The system is **consistent** if its solution set is not empty
	- The system is **inconsistent** if its solution set is empty
	- The system is **determined** if its solution set is a singleton
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

## Consistency 

- The following statements are **equivalent**: (For each $\mathbf{b}\in\mathbb{F}^m$)
	- $A\mathbf{x}=\mathbf{b}$ is **consistent**
	- (8.6.2) **Rouché–Capelli theorem** $\rho([A|\mathbf{b}])=\rho(A)$
	- $\text{REF}[A|\mathbf{b}]$ has no row $\left[\begin{array}& 0 & \cdots & 0 & b \end{array}\right]$ in which $b\neq 0$ 
	- $\mathbf{b}$ is a linear combination of the colmuns of $A$
	- $\mathbf{b}\in \text{column-space}(A)$

- Properties of a consistent system $A\mathbf{x}=\mathbf{b}$
	- if there are no free variables, there is a unique solution
	- if there is at least one free variable, there are infinitely many solutions


## Coefficient Matrix Properties

- The following statements are equivalent
	- For each $\mathbf{b}\in\mathbb{F}^m$, the system $A\mathbf{x}=\mathbf{b}$ is consistent
	- $A$ has [[Matrices#Full Row Rank|full row rank]]

## Homogeneous system
$$\large A\mathbf{x}=\mathbf{0}$$
- Homogeneous system is consistent
- if $m<n$, then it has infinitely many solutions

- The following statements are equivalent
	- $A\mathbf{x}=\mathbf{0}$ has a nontrivial solution
	- The columns of a matrix $A$ are linearly dependent
	- $A\mathbf{x}=\mathbf{0}$ has at least one free variable
- The following statements are equivalent
	- $A\mathbf{x}=\mathbf{0}$ has only the trivial solution
	- $A$ has [[Matrices#Full Column Rank|full column rank]]

# Overdetermined Case (m>n)

- Given $m>n$ 
	- There exists a vector $\mathbf{b}\in\mathbb{R}^m$ s.t. $A\mathbf{x}=\mathbf{b}$ is inconsistent
# Underdetermined Case (m<n)

- Given $m<n$
	- For each vector $\mathbf{b}$ in $\mathbb{R}^m$ the system $A\mathbf{x}=\mathbf{b}$ is either inconsistent or has infinitely many solutions
# Square System (m=n)

- The following statements are **equivalent**:
	- $A$ is [[Matrices#Invertibility|Invertible]]
	- For each $\textbf{b}$, the system $A\textbf{x}=\textbf{b}$ has **unique solution**. ($\textbf{x}=A^{−1}\textbf{b}$) 
	- There exists $\textbf{b}$, such that the system $A\textbf{x}=\textbf{b}$ has a **unique solution**
	- $A\mathbf{x}=\mathbf{0}\implies \mathbf{x}=\mathbf{0}$
- The following statements are **equivalent**:
	- $A$ is singular
	- $A\mathbf{x}=\mathbf{0}$ has **non trivial** solution
- (4.6.1)  Cramer's rule: if $A$ is inevitable, then, $\mathbf{x}=(x_{1},\dots,x_{n})$, $x_i = \frac{\det(A_i)}{\det(A)}$, $i = 1, \ldots, n$, where $A_{i}$ is the matrix formed by replacing the $i$-th column of $A$ by the column vector $\mathbf{b}$


