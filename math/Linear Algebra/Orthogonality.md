$$\large{K=\set{{v}_1,\dots,{v}_m}\subseteq V}, \quad \dim{V}=n$$
- $A$ is $K$'s vectors as **rows** 
- $A^{\top}$ is $K$'s vectors as **comluns** 
- $r=\text{rank}(A)$
- $B$ is some basis of $V$ 

## Orthogonal Vector

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

## Gram–Schmidt process (12.5.2) 

Convert a basis $\{ \mathbf{u}_{1},\dots,\mathbf{u}_{k} \}$ into an orthogonal basis $\{ \mathbf{v}_{1},\dots,\mathbf{v}_{k} \}$:

$$\mathbf{v}_{1}=\mathbf{u}_{1}$$
$$\mathbf{v}_{i}=\mathbf{u}_{i}-\frac{\mathbf{u}_{i}\cdot\mathbf{v}_{1}}{{\| \mathbf{v}_{1} \|^2}}\mathbf{v}_{1}-\frac{\mathbf{u}_{i}\cdot\mathbf{v}_{2}}{{\| \mathbf{v}_{2} \|^2}}\mathbf{v}_{2}-\dots-\frac{\mathbf{u}_{i}\cdot\mathbf{v}_{i-1}}{{\| \mathbf{v}_{i-1} \|^2}}\mathbf{v}_{i-1}$$

- during the computation you can multiple $\mathbf{v}_{i}$ by a scalar (note before q12.5.4)
- To convert the orthogonal basis into an orthonormal basis see (q12.4.2)
- for dependent set see q12.5.3
- expanding orthogonal set of $k<n$ vectors into orthogonal basis see q12.5.4

