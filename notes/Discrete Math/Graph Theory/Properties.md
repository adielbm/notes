
In this section, $G=(V,E)$ is usually an undirected graph, unless stated otherwise.
## Connectivity

- A graph is **connected** if there is a path between every pair of vertices.
- For every connected graph $|E| \geq |V|-1$
- Let $G=(V,E)$ a connected graph, and $|V|\leq|E|$, then there is a cycle in the graph.
- (q2) Let $G$ a connected graph, and each vertex has degree 2, then $G$ is a cycle graph.
- (q4) The complement of a disconnected graph is connected 

### Connectivity in Directed Graph


- Two nodes $u$ and $v$ in a directed graph are **mutually reachable** if there is a directed path from $u$ to $v$ and a directed path from $v$ to $u$.
- A directed graph is **strongly connected** if every pair of distinct nodes is mutually reachable.
- If $u$ and $v$ are are mutually reachable, and $v$ and $w$ are mutually reachable, then $u$ and $w$ are mutually reachable.
- The **strong component** containing a node $s$ in a directed graph is the set of all nodes in which each node is mutually reachable with $s$.

## Acyclicity

- A graph is **acyclic** if it contains no cycles.
### Directed Graphs

- A directed graph is **acyclic** (or **directed acyclic graph** (**DAG**)) if it contains no directed cycles.
	- Every DAG has a node with no incoming edges (a _source_)

## Completeness

- A **complete graph** is a simple undirected graph in which every pair of distinct vertices is connected by a unique edge. the complete graph on $n$ vertices is denoted by $K_n$
	- The number of edges in a complete graph $K_n$ is $\displaystyle \frac{n(n-1)}{2}=\binom{n}{2}$ (which is the $(n-1)$th _triangular number_).
	- The number of [[Graph#Perfect matching|perfect matchings]] in complete graph $K_n$ is double-factorial $(n-1)!!$.
	- TODO: https://oeis.org/A031878 is maybe the longest path in complete graph 
## Bipartiteness

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
	- (4.7, **Hall's marriage theorem**) There exists a [[Graph#Matching|matching]] that covers every vertex in $A$ if and only if $|\Gamma(X)| \geq |X|$ for all subsets $X$ of $A$.
	- (4.8, Corollary from HMT) Then there exists a [[Graph#Perfect matching|perfect matching]] if and only if $|\Gamma(X)| \geq |X|$ for all subsets $X$ of $A$, and **also** $|A|=|B|$.
	- (4.16) **Kőnig's theorem**: The size of **minimum vertex cover** is equal to the size of the maximum matching. $\beta(G)=\nu(G)$.

## Regularity

A regular graph is a graph where each vertex has the same number of neighbors; i.e. every vertex has the same degree. regular graph with vertices of degree $k$ is called a $k$‑regular graph or regular graph of degree $k$. 

- From the [[Graph#Handshaking Lemma|handshaking Lemma]], a regular graph contains an even number of vertices with odd degree.
- (c3.q2a) Regular [[Graph#Bipartite graph|bipartite graph]] has a [[Graph#Perfect matching|perfect matching]]
- number of edges in $k$‑regular graph with $n$ vertices is $\frac{nk}{2}$
- (q5) let $G=(V,E)$ regular graph. if $|V|$ is odd, then $G$ or $\overline{G}$  is Eulerian graph

# Planar Graph


- **Euler's Formula** (5.3) - For any connected planar graph with $v$ vertices, $e$ edges and $f$ faces, we have $$v-e+f=2$$
- **Corollary** (5.4) - If $G$ is a planar simple graph, with $v$ vertices, and $e$ edges, then $$v\geq 3\Longrightarrow e\leq 3v-6$$
- **Corollary** (5.5) - If $G$ is a planar simple graph, then $G$ has a vertex of degree not greater than 5.
- (q3) in planar and [[Graph#Bipartite graph|bipartite]] and connected graph with $v\geq{3}$, then $e\leq{2v-4}$ 
-  examples
	- $K_4$ is planar. 
	- $K_{3,3}$ (Utility graph) is nonplanar
	- $K_5$ is nonplanar. (theorem 5.2)
	- the graph that derived from $K_5$ by remove some edge is planar. (q1)

## Subdivision

-  The **edge subdivision** (elementary subdivision, עידון של קשת) operation for an edge $\set{u,v}\in E$ is the deletion of $\set{u,v}$ from $G$ and the addition of two edges $\set{u,w}$ and $\set{w,v}$ along with the new vertex $w$.
- **Graph Subdivision** (עידון של גרף) - A graph which has been derived from $G$ by a sequence of edge subdivision operations is called a **subdivision of** $G$. (can also be referred to as a $G$**-subdivision**).
- The graphs $G_1=(V_1,E_1)$ and $G_2=(V_2,E_2)$ are called **homeomorphic** if they can be obtained from the same graph by a sequence of edge subdivisions.
-  Theorems
	- **Theorem** (5.7) - A graph $G$ is planar, if and only if, every subdivision of $G$ is planar.
	- **Kuratowski's theorem** (5.8) - A graph is planar, if and only if, it does not contain a [[Graph#Subgraphs|subgraph]] that is a subdivision of $K_5$ or $K_{3,3}$.


