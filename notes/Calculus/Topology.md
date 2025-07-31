

- A set $A\subseteq \mathbb{R}^2$ is called **closed** if for every convergent sequence $(p_n)$ of points in $A$, we have $\displaystyle\lim_{n\to\infty} p_n \in A$.
- A point $p\in A \subseteq \mathbb{R}^2$ is called an **interior point** of $A$ if there exists a neighborhood $N(p)$ such that $N(p) \subseteq A$.
- A point $p\in A \subseteq \mathbb{R}^2$ is called a **boundary point** of a closed set $A$ if $p$ is not an interior point of $A$.
- The set of all interior points of $A$ is called the **interior** of $A$ and is denoted by $\text{int}(A)$.
- The set of all boundary points of a closed set $A$ is called the **boundary** of $A$ and is denoted by $\partial A$.
- A set $A\subseteq \mathbb{R}^2$ is called **open** if all its points are interior points.
- A set $A\subseteq \mathbb{R}^2$ is open if and only if $A^{\complement}=\mathbb{R}^2 \setminus A$ is closed.
- Let $p\in \mathbb{R}^2$ and $r>0$. Every point $q\in N_r(p)$ is an interior point of $N_r(p)$.





--- 


- A **metric space** is a pair $(X, d)$, where $X$ is a set and $d: X \times X \to \mathbb{R}$ is a distance function satisfying:
	- Non-negativity: $d(x, y) \geq 0$ $\forall x, y \in X$,
	- Identity of indiscernibles: $d(x, y) = 0$ iff $x = y$,
	- Symmetry: $d(x, y) = d(y, x)$ $\forall x, y \in X$,
	- Triangle inequality: $d(x, z) \leq d(x, y) + d(y, z)$ $\forall x, y, z \in X$.

- In a metric space $(X, d)$, a set $A$ is **open** if $\forall x \in A, \exists \varepsilon > 0:B_\varepsilon(x) \subset A$. $A$ is **closed** if $X \setminus A$ is open.

- $a$ is said to be a **limit point** (or **accumulation point**) of a set $A$ if $\forall \varepsilon > 0,\exists x \neq a \in V_\varepsilon(a) \cap A$


- isolated point definitions, $x \in S$ is a point in a topological space $X$
	- A point $x$ is an **isolated point** of $S$  
	- There exists a neighborhood of $x$ that does not contain any other points of $S$ 
	- $\{ x \}$ is an open set in the topological space $S$ (considered as a subspace of $X$). 
	- $x \in S$ is not a limit point of $S$

- A function $f: X \to Y$ is continuous at a point $x$ if $\forall$ open set $V$ containing $f(x)$, $\exists$ open set $U$ containing $x$ s.t. $f(U) \subset V$.

- A subset $K$ of a metric space $(X, d)$ is **compact** if every open cover of $K$ has a finite subcover.
	- **Heine–Borel theorem** - For any subset $A$ of Euclidean space, $A$ is compact if and only if it is closed and bounded; this is the




