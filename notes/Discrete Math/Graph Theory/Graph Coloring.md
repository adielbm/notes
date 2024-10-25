- **vertex $k$-coloring** of the simple graph $G=(V,E)$ is a mapping $$c: V \to \left\{{1, 2, \ldots k}\right\}$$
- A **proper $k$-vertex coloring** of a simple graph $G=(V, E)$ is defined as **vertex $k$-coloring** such that no two adjacent vertices share a common color. i.e. $$\forall e = \set {u, v} \in E:  c(u)\ne c(v)$$
- The **chromatic number** $\chi(G)$ (מספר הצביעה) of a graph $G$ is the smallest positive integer $k$ such that there exists a **proper vertex $k$-coloring** of $G$.
- A graph is said to be **$k$-colorable** if $\chi(G) \leq k$.

### Examples
- $\chi(K_n)=n$
- $\chi(K_{n,m})=2$ . that is $\chi(K_{G})=2$ if and only if $G$ is bipartite graph that contain at least one edge.
- Let $C_n$ cycle with $n$ vertices. then $\chi(C_{n})=2$ if $n$ is even, and $\chi(C_{n})=3$ if $n$ is odd.

### Maximum Vertex Degree
The maximum degree, sometimes simply called the maximum degree, of a graph G is the largest vertex degree of G, denoted $\Delta$.

## Theorems 
- Question 1 - Every simple graph has a **proper vertex coloring** in $\Delta(G)+1$ colors. i.e.  $\chi(G) \leq \Delta(G)+1$
- **Brooks' theorem** (6.2) - For any connected undirected graph $\chi(G)\leq \Delta(G)$, unless $G$ is a complete graph or an odd cycle, in which case the chromatic number is $\chi(G)=\Delta(G)+1$.

### k-degenerate
A graph is **$k$-degenerate** if every subgraph has a vertex of degree at most $k$.

- Any graph $G$ is $\Delta(G)$-degenerate
- Any **$k$-degenerate** graph is **$(k+1)$-colorable** (question 2)
- If $G$ graph is **$k$-colorable**, then exist [[Vertex Cover & Independent Set#Independent Set|indepndent set]] in $G$ of size $\lceil {|V(G)|} /{k} \rceil$. ^[question 3]
- Any planar graph is 5-degenerate

# Planar Graphs Coloring

#### Four color theorem (6.3)
Any planar graph is **4-colorable**. i.e. $$\chi(G) \leq 4$$