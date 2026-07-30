In this page, $G=(V,E)$ is an undirected graph, unless stated otherwise.

# Subgraphs

- $G'=(V',E')$ is a **subgraph** of $G$, if $V'\subseteq{V}$ and $E'\subseteq{E}$, and every edge in $E'$ connects two nodes in $V'$
	- $G'=(V',E')$ is a **spanning subgraph** of $G$, if $G'$ is subgraph of $G$, and $V'=V$
	- $G'=(V',E')$ is an **induced subgraph** of $G$, if $V'\subseteq{V}$ and $E'=\set{\set{u,v}\in{E}\mid u,v\in{V'}}$ (the graph $G'$ may also be called the **subgraph induced in $G$ by $V'$**).

# Degree

- The **degree** of a vertex $v$ in a graph $G$ is the number of edges incident to $v$, with loops counted twice.
	- The **degree sequence** of a graph is the list of its vertex degrees in non-increasing order.
	- The **minimum degree** of a graph is the smallest degree of its vertices.
	- The **maximum degree** of a graph is the largest degree of its vertices.
	- The **average degree** of a graph is the average of the degrees of its vertices.

# Handshaking Lemma

- (1.3) $\displaystyle 2|E|=\sum _{v\in V} \text{deg}( v)$
- (q1) An undirected graph has an even number of vertices of odd degree

# Neighbour

- An **adjacent vertex** of a vertex $v$ in a graph is a vertex that is connected to $v$ by an edge. 
- The **neighbourhood of a vertex $v$** $$\Gamma(v) = \set{u \in V \mid (v,u) \in E}$$
- The **neighbourhood of set** $A\subseteq{V}$ is the union of the neighbourhoods of the vertices of $A$. $$\Gamma(A)=\bigcup_{v\in{A}}\Gamma(v)$$

# Complement graph

- The **complement** of a simple graph $G=(V,E)$ is the simple graph $\overline{G}=(V,\overline{E})$ where $\overline{E}=\set{\set{u,v}\mid u,v\in{V}, u\neq{v}, \set{u,v}\notin{E}}$.
	- $|\overline{E}|=\frac{n(n-1)}{2}-|E|$, where $n=|V|$.
- (q4) The complement of a disconnected graph is connected 

# Components

- A **component** (or **connected component**) of a graph is a maximal connected subgraph (_maximal_ in the sense that it is not a proper subgraph of any other connected subgraph)
	- The components of a graph 	 
- Every graph with $n$ vertices and $k$ edges has at least $n-k$ components.

# Cycle & Path

- A **walk** is a finite or infinite sequence of edges which joins a sequence of vertices. 
- A **trail** (מסלול) is a walk in which all edges are distinct.
	- A **path** (מסלול פשוט) is a trail in which all vertices (and therefore also all edges) are distinct. 
	- A **circuit** (מעגל, מסלול סגור) is a non-empty trail in which the first and last vertices are equal.
	- A **cycle** (מעגל פשוט) is a non-empty trail in which _only_ the first and last vertices are equal.
		- An **even cycle** is a cycle with an even number of vertices 
		- An **odd cycle** is a cycle with an odd number of vertices
- A **cycle graph** is a graph that consists of a single cycle.

# Clique

- A **clique** (of a graph $G=(V,E)$) is a subset $C\subseteq{V}$ of vertices such that every two distinct vertices in $C$ are adjacent in $G$.

# Spanning tree

- A **spanning tree** $T$ (of an undirected graph $G=(V,E)$) is a subgraph that is a tree which includes all of the vertices of $G$.
- A non-connected graph has no spanning tree
- A tree has a unique spanning tree and it is itself.

## Minimum Spanning Tree

- A **minimum spanning tree** (**MST**) or **minimum weight spanning tree** $T$ is a spanning tree of a weighted graph such that the sum of the weights of the sum of the weights of the edges in the tree is minimized

# Shortest path tree

- A **shortest path tree** rooted at $v$ of a weighted undirected graph $G$ is a spanning tree $T$ of $G$ such that the path weight from $v$ to every other vertex in $T$ is the shortest path weight from $v$ to that vertex in $G$.

# Hamiltonian Path & Cycle

- (undirected/directed graph)
	- A **Hamiltonian path** is a path that visits each vertex $v\in V$ exactly once. 
	- A **Hamiltonian cycle** is a cycle that visits each vertex $v\in V$ exactly once, except the starting vertex.
	- A **Hamiltonian graph** is a graph that contains a Hamiltonian cycle.

- (3.2, Ore's Theorem) A simple graph with $n$ vertices ($n\geq 3$) is **Hamiltonian** if, for every pair of non-adjacent vertices, the sum of their degrees is $n$ or greater.
- (3.3, Dirac's Theorem) A simple graph with $n\geq 3$ vertices is **Hamiltonian** if every vertex has degree $\frac{n}{2}$ or greater.
- (q3.6) A simple graph with $n\geq 3$ vertices, and $n$ is **odd**, and every vertex has degree $\frac{n}{2}-1$ at least, then it contains **Hamiltonian path**.
- (q3.7) $K_{a,b}$ [[Graph#Bipartite graph|complete bipartite]] graph is contain Hamiltonian cycle, if and only if, $a=b$ and $a,b\geq{2}$


# Eulerian path

- **Eulerian path** is a path in a finite graph that visits every edge exactly once. 
- Similarly, an **Eulerian circuit** or **Eulerian cycle** is an Eulerian path that starts and ends on the same vertex.
- A graph that contains a Eulerian cycle is called a **Eulerian graph**.
- A connected graph is eulerian if and only if it is **even** (every vertex of G has positive **even degree**).
- (q1) Let $G$ be a graph, and let $v$ and $u$ be two distinct vertices of G. There is an **Eulerian path** from $v$ to $u$ if, and only if, $G$ is connected, $v$ and $u$ have odd degree, and all other vertices of $G$ have positive even degree
- *Proposition*: in graph that has a **Eulerian cycle** that is also **Hamiltonian cycle**, is 2-regular.  
	-  *Proof:* $e_1=(v_0v_1),e_2=(v_1v_2),e_n=(v_{n-1}v_n), e_{n+1}=(v_{n}v_0)$. is Eulerian and Hamiltonian cycle, and $e_1,\ldots,{e_{n+1}}$ are all the graph edges, and each one appear once time, therefore $|E|=|V|=n+1$. now because Eulerian cycle all degere are even, and because hamiltonian cycle, there's no vertex with 0 degree, therefore, $2|E|=2|V|\le{\sum_{v\in{V}}\text{deg}_G{(v)}=2|E|}\Longrightarrow{2|V|=\sum_{v\in{V}}\text{deg}_G{(v)}}$, therefore  is 2-regular.
- *Proposition*: in graph that has a **Eulerian cycle** that is also **Hamiltonian cycle**, is cycle graph.
	  *Proof:* there is hamiltonian cycle, thus is connected, therefore, according to the previous proposition and question 1.2, it follows that is cycle graph.

# Vertex Cover 

A set $V'\subseteq V$ is called a **vertex cover** of $G$ if $\forall(u,v) \in E, u \in V' \lor v \in V'$
#### Minimum Vertex Cover

- $\beta(G)=|V'|$ is number of vertices of a minimum vertex cover.

# Independent Set

- An **independent set** (קבוצה בלתי תלויה) $S \subseteq V$ is a set of vertices such that no two vertices in the set are adjacent: $\forall v,u \in S : vu \notin E$
- A set $S\subseteq V$ is an independent set in $G=(V,E)$ if and only if $S$ is a clique of $\overline{G}=(V,\overline{E})$
## Maximal independent set

- A **maximal independent set** $S$ (להכלה) is an independent set that is not a subset of any other independent set. 
	- In other words, there is no vertex outside the independent set that may join it because it is maximal with respect to the independent set property.
- (q6a) A maximal independent set is also a dominating set in the graph.

## Maximum independent set

- A **maximum independent set** $S$ is an independent set of largest size in a given graph.
- The size of a maximum independent set is called the **independence number** of the graph, denoted $\alpha(G)=|S|$.
- Every maximum independent set is maximal, but the converse is not necessarily true. 

# Dominating set

- A **dominating set** (קבוצה שלטת) $D \subseteq V$ (of $G$) is a set such that any vertex of $G$ is either in $D$ or has a neighbor in $D$.
- (4.13) $S\subseteq V$ is independent set in $G=(V,E)$ if and only if $V \setminus S$ is vertex-cover of $G$.
- (4.14) $\alpha(G)+\beta(G)=|V|$ for every graph $G=(V,E)$. i.e. a set is independent if and only if its complement is a vertex cover.
- (4.15) for any graph, the size of every vertex cover is greater than or equal to size of every matching in $G$, in particular $\beta(G)\geq \nu(G)$.

# Edge Cover

- An **edge cover** $F\subseteq E$ of a graph $G=(V,E)$ is a set of edges such that every vertex of the graph is incident to at least one edge of the set. 

## Minimum Edge Covering 

- $\rho(G)=|F|$ is the size (number of edges) of minimum edge cover.
- (4.10) If $G$ has no isolated vertices, then $\rho(G)=|V|-\nu(G)$

# Matching

- A **matching** $M \subseteq E$ in an undirected graph is a set of edges without common vertices

## Maximum matching 

- A **maximum matching** $M$ is a matching of largest size in a given graph.
- $\nu(G)=|M|$ is the size (number of edges) of maximum matching.

## Perfect matching 

- A **perfect matching** is a matching in which every node is incident to exactly one edge in the matching.
- A perfect matching is also a minimum-size edge cover. 
- If there is a perfect matching, then both the matching number and the edge cover number equal $|V|/2$.

- Every cycle with even length has a perfect matching. 
- A Graph of odd vertices does not have a perfect matching. 
- Every complete graph of even vertices has a perfect matching.

## Maximal Matching

- A **maximal matching** (זיווג מקסימלי להכלה) is a matching that is not a subset of any other matching

#### Matching in Bipartite graph

- See [[Properties#Matching in Bipartite graph|Matching in Bipartite graph]]

# Coloring


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
- If $G$ graph is **$k$-colorable**, then exist [[#Independent Set|indepndent set]] in $G$ of size $\lceil {|V(G)|} /{k} \rceil$. ^[question 3]
- Any planar graph is 5-degenerate

## Planar Graphs Coloring

#### Four color theorem (6.3)
Any planar graph is **4-colorable**. i.e. $$\chi(G) \leq 4$$