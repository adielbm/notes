# Subgraphs

- $G'=(V',E')$ is **subgraph** ^[תת-גרף] of $G$, if $V'\subseteq{V}$ and $E'\subseteq{E}$, and every edge in $E'$ connects two nodes in $V'$
- $G'=(V',E')$ is **spanning subgraph** ^[תת-גרף פורש] of $G$, if is subgraph of $G$, and $V'=V$
- $G'=(V',E')$ is **induced subgraph** ^[תת-גרף מושרה] of $G$ by $V'\subseteq{V}$, such that $vu\in{E} \land {v,u {\in{V'} \iff vu\in{E'}}}$  

# Neighbour

- An **adjacent vertex** ^[צומת שכנה] of a vertex $v$ in a graph is a vertex that is connected to $v$ by an edge. 
- The **neighbourhood of a vertex $v$** ^[קבוצת השכנים של צומת]. $$\Gamma(v) = \set{u \in V \mid (v,u) \in E}$$
- The **neighbourhood of set** ^[קבוצת השכנים של קבוצת צמתים] $A\subseteq{V}$ is the union of the neighbourhoods of the vertices of $A$. $$\Gamma(A)=\bigcup_{v\in{A}}\Gamma(v)$$
# Complement graph

Let $G=(V,E)$ be a simple graph.
the complement of $G$ is the simple graph $\overline{G}=(V,\overline{E})$ which consists of:

- The same vertex set $V$ of $G$.
- The set $\overline E$ defined such that $\set {u, v} \in \overline E \iff \set {u, v} \notin E$ where $u$ and $v$ are distinct.
- A number of edges in complement graph is $\frac{n(n-1)}{2}-{|E|}$

#### Theorems 
- The complement of a Disconnected graph is connected ^[question 4]

# Components
Every graph with $n$ vertices and $k$ edges has at least $n-k$ components.

# Connected Graph
in connected graph  $$|E| \geq |V|-1$$
# Complete graph
A **complete graph** is a simple undirected graph in which every pair of distinct vertices is connected by a unique edge. the complete graph on $n$ vertices is denoted by $K_n$

- Number of **Edges** in complete graph $K_n$ is $\frac{n(n-1)}{2}=\binom{n}{2}$. ^[Triangle number]
- Number of [[Edge Covering & Matching|Perfect Matchings]] in complete graph $K_n$ is double-factorial $(n-1)!!$.
- TODO: https://oeis.org/A031878 is maybe the longest path in complete graph 

# Cycle & Path
- **Walk** - is a finite or infinite sequence of edges which joins a sequence of vertices. 
- **Trail** (*מסלול*) - is a walk in which all edges are **distinct**.
- **Path** (*מסלול פשוט*) - is a trail in which all vertices (and therefore also all edges) are **distinct**.
- **Circuit** (*מעגל, מסלול סגור*) - is a non-empty trail in which the first and last vertices are equal.
- **Cycle** (*מעגל פשוט*) - is a non-empty trail in which only the first and last vertices are equal.
- **Cycle graph** is a graph that consists of a single cycle.
- A cycle with an even number of vertices is called an **even cycle**; a cycle with an odd number of vertices is called an **odd cycle**.

### Theorems
- Let $G=(V,E)$ a **connected graph**, and $|V|\leq|E|$, then there is a cycle in the graph.
- Let $G$ a **connected graph**, and each vertex has degree 2, then $G$ is a cycle graph. (*question 2*).


