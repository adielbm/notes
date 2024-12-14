# Graph

- A **graph** is a pair $G=(V,E)$ where $V$ is a set of vertices and $E$ is a set of edges.
	- $V$ is a set of elements called **nodes** (or **vertices** (s. _vertex_))
	- $E$ is a set of unordered pairs of distinct elements of $V$ called **edges** (or **links**)
	- A _graph_ is sometimes called a **simple graph** to distinguish it from a _multigraph_, and an **undirected graph** to distinguish it from a _directed graph_.
	- The vertices $u$ and $v$ of an edge $e=\set{u,v}$ are called the **endpoints** of $e$, and $e$ is said to **join** (or **connect**) $u$ and $v$, and to be **incident** to them, and $u$ and $v$ are said to be **adjacent** to each other.
	- A vertex $v$ is said to be **isolated** if it is not connected to any other vertex.
	- A graph is **simple** if it has no loops (edges connecting a vertex to itself) and no multiple edges (two or more edges connecting the same pair of vertices), otherwise it is called a **multigraph**.


- A **weighted graph** (or a **network**) is defined as a graph but with a weight function $w:E\to\mathbb{R}$ that assigns a real number to each edge.

## Subgraphs


- $G'=(V',E')$ is a **subgraph** of $G$, if $V'\subseteq{V}$ and $E'\subseteq{E}$, and every edge in $E'$ connects two nodes in $V'$
	- $G'=(V',E')$ is a **spanning subgraph** of $G$, if $G'$ is subgraph of $G$, and $V'=V$
	- $G'=(V',E')$ is an **induced subgraph** of $G$, if $V'\subseteq{V}$ and $E'=\set{\set{u,v}\in{E}\mid u,v\in{V'}}$ (the graph $G'$ may also be called the **subgraph induced in $G$ by $V'$**).

## Degree

- The **degree** of a vertex $v$ in a graph $G$ is the number of edges incident to $v$, with loops counted twice.
	- The **degree sequence** of a graph is the list of its vertex degrees in non-increasing order.
	- The **minimum degree** of a graph is the smallest degree of its vertices.
	- The **maximum degree** of a graph is the largest degree of its vertices.
	- The **average degree** of a graph is the average of the degrees of its vertices.

## Handshaking Lemma

- (1.3) $\displaystyle 2|E|=\sum _{v\in V} \text{deg}( v)$
- (q1) An undirected graph has an even number of vertices of odd degree

## Neighbour

- An **adjacent vertex** of a vertex $v$ in a graph is a vertex that is connected to $v$ by an edge. 
- The **neighbourhood of a vertex $v$** $$\Gamma(v) = \set{u \in V \mid (v,u) \in E}$$
- The **neighbourhood of set** $A\subseteq{V}$ is the union of the neighbourhoods of the vertices of $A$. $$\Gamma(A)=\bigcup_{v\in{A}}\Gamma(v)$$

## Complement graph

- The **complement** of a simple graph $G=(V,E)$ is the simple graph $\overline{G}=(V,\overline{E})$ where $\overline{E}=\set{\set{u,v}\mid u,v\in{V}, u\neq{v}, \set{u,v}\notin{E}}$.
	- $|\overline{E}|=\frac{n(n-1)}{2}-|E|$, where $n=|V|$.
- (q4) The complement of a disconnected graph is connected 

## Components

- A **component** (or **connected component**) of a graph is a maximal connected subgraph (_maximal_ in the sense that it is not a proper subgraph of any other connected subgraph)
	- The components of a graph 	 
- Every graph with $n$ vertices and $k$ edges has at least $n-k$ components.

## Cycle & Path

- A **walk** is a finite or infinite sequence of edges which joins a sequence of vertices. 
- A **trail** (מסלול) is a walk in which all edges are distinct.
	- A **path** (מסלול פשוט) is a trail in which all vertices (and therefore also all edges) are distinct. 
	- A **circuit** (מעגל, מסלול סגור) is a non-empty trail in which the first and last vertices are equal.
	- A **cycle** (מעגל פשוט) is a non-empty trail in which _only_ the first and last vertices are equal.
		- An **even cycle** is a cycle with an even number of vertices 
		- An **odd cycle** is a cycle with an odd number of vertices
- A **cycle graph** is a graph that consists of a single cycle.


## Connected Graph

- A graph is **connected** if there is a path between every pair of vertices.
- For every connected graph $|E| \geq |V|-1$
- Let $G=(V,E)$ a connected graph, and $|V|\leq|E|$, then there is a cycle in the graph.
- (q2) Let $G$ a connected graph, and each vertex has degree 2, then $G$ is a cycle graph.
- (q4) The complement of a disconnected graph is connected 

## Complete graph

A **complete graph** is a simple undirected graph in which every pair of distinct vertices is connected by a unique edge. the complete graph on $n$ vertices is denoted by $K_n$

- Number of **Edges** in complete graph $K_n$ is $\frac{n(n-1)}{2}=\binom{n}{2}$. ^[Triangle number]
- Number of [[Edge Covering & Matching|Perfect Matchings]] in complete graph $K_n$ is double-factorial $(n-1)!!$.
- TODO: https://oeis.org/A031878 is maybe the longest path in complete graph 


## Bipartite graph

- The following statements are equivalent for an undirected graph $G=(V,E)$:
	- $G$ is **bipartite** 
	- $V$ can be divided into two disjoint and independent sets $A$ and $B$, that is every edge connects a vertex in $A$ to one in $B$.
	- (1.6) $G$ has no odd cycles
	- $G$ is 2-colorable

- A **complete bipartite graph** is a bipartite graph such that every pair of graph vertices in the two sets are adjacent.
- (q5) Every subgraph $H$ of a bipartite graph $G$ is, itself, bipartite 
- (1.3) **Handshaking Lemma for Bipartite Graph**: $\displaystyle\sum _{v\in A} \text{deg}( v)=\sum _{v\in B} \text{deg}( v)=|E|$
### Matching in Bipartite graph

- Given a bipartite graph $G=(A \cup B,E)$,
	- (4.7) **Hall's marriage theorem**: There exists a [[Edge Covering & Matching#Matching|matching]] that covers every vertex in $A$ if and only if $|\Gamma(X)| \geq |X|$ for all subsets $X$ of $A$.
	- (4.8, Corollary from HMT) Then there exists a [[Edge Covering & Matching#Perfect matching|perfect matching]] if and only if $|\Gamma(X)| \geq |X|$ for all subsets $X$ of $A$, and **also** $|A|=|B|$.
	- (4.16) **Kőnig's theorem**: The size of **minimum vertex cover** is equal to the size of the maximum matching. $\beta(G)=\nu(G)$.

# Directed Graph

- A **directed graph** (or **digraph**) is a pair $G=(V,E)$, where: 
	- $V$ is a set of nodes (as defined for an undirected graph)
	- $E$ is a set of ordered pairs of distinct elements of $V$ called **edges** (or **directed edges** or **arcs** or **arrows**): $E=\{(u,v)\mid (u,v)\in V^2, u\neq v\}$.
	- To avoid ambiguity, a _directed graph_ may be called precisely a **directed simple graph**.
	- A directed edge $(u,v)$ is said to **start** at $u$ and **end** at $v$, and $u$ is said to be the **tail** of the edge and $v$ is said to be the **head** of the edge.
	- The edge $(u,v)$ is called the **inverted edge** of $(v,u)$.
- All the definitions of _walk_, _trail_, and _path_ carry over to directed graphs (and said to be **directed**) with the additional requirement that the edges must be traversed in the correct direction.
	- If $w$ is a directed walk with vertex sequence $v_0,\ldots,v_k$, then $w$ is said to be a _walk from $v_0$ to $v_k$_. (The same for _trail_ and _path_.)
- A **dag** is a directed acyclic graph.

### Connectivity

- Two nodes $u$ and $v$ in a directed graph are **mutually reachable** if there is a directed path from $u$ to $v$ and a directed path from $v$ to $u$.
- A directed graph is **strongly connected** if every pair of distinct nodes is mutually reachable.
- If $u$ and $v$ are are mutually reachable, and $v$ and $w$ are mutually reachable, then $u$ and $w$ are mutually reachable.
- The **strong component** containing a node $s$ in a directed graph is the set of all nodes in which each node is mutually reachable with $s$.


# Weighted Graph

- A **weighted graph** (or **network**) is a directed or undirected graph in which a number (the **weight**) assigned to each edge.
	- The **weight** of a path in a weighted graph is the sum of the weights of the edges in the path.
	- The **shortest path** between two nodes in a weighted graph is the path with the smallest weight.
	- Other terms of _weight_ are **cost**, **length**, **distance**, and **capacity**.


# Spanning tree

- A **spanning tree** $T$ (of an undirected graph $G=(V,E)$) is a subgraph that is a tree which includes all of the vertices of $G$.
- A non-connected graph has no spanning tree
- A tree has a unique spanning tree and it is itself.

## Minimum Spanning Tree

- A **minimum spanning tree** (**MST**) or **minimum weight spanning tree** $T$ is a spanning tree of a weighted graph such that the sum of the weights of the sum of the weights of the edges in the tree is minimized


# Shortest path tree

- A **shortest path tree** rooted at $v$ of a weighted undirected graph $G$ is a spanning tree $T$ of $G$ such that the path weight from $v$ to every other vertex in $T$ is the shortest path weight from $v$ to that vertex in $G$.

