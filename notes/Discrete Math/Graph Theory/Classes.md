# Classes of Graphs

- A graph can be defined with either **directed** or **undirected** edges.
	- Every undirected graph can be considered as a directed graph with edges in both directions.
- A graph can be defined with **weighted** edges. (_network_)
	- Every unwighted graph can be considered as a weighted graph with all weights equal to 1.
- A graph can be defined with **multiple edges**. (_multigraph_)

## Directness
### Undirected Graph

- A **graph** is a pair $G=(V,E)$ where $V$ is a set of vertices and $E$ is a set of edges.
	- $V$ is a set of elements called **nodes** (or **vertices** (s. _vertex_))
	- $E$ is a set of unordered pairs of distinct elements of $V$ called **edges** (or **links**)
	- A _graph_ is sometimes called a **simple graph** to distinguish it from a _multigraph_, and an **undirected graph** to distinguish it from a _directed graph_.
	- The vertices $u$ and $v$ of an edge $e=\set{u,v}$ are called the **endpoints** of $e$, and $e$ is said to **join** (or **connect**) $u$ and $v$, and to be **incident** to them, and $u$ and $v$ are said to be **adjacent** to each other.
	- A vertex $v$ is said to be **isolated** if it is not connected to any other vertex.
	- A graph is **simple** if it has no loops (edges connecting a vertex to itself) and no multiple edges (two or more edges connecting the same pair of vertices), otherwise it is called a **multigraph**.

### Directed Graph

- A **directed graph** (or **digraph**) is a pair $G=(V,E)$, where: 
	- $V$ is a set of nodes (as defined for an undirected graph)
	- $E$ is a set of ordered pairs of distinct elements of $V$ called **edges** (or **directed edges** or **arcs** or **arrows**): $E=\{(u,v)\mid (u,v)\in V^2, u\neq v\}$.
	- To avoid ambiguity, a _directed graph_ may be called precisely a **directed simple graph**.
	- A directed edge $(u,v)$ is said to **start** at $u$ and **end** at $v$, and $u$ is said to be the **tail** of the edge and $v$ is said to be the **head** of the edge.
	- The edge $(u,v)$ is called the **inverted edge** of $(v,u)$.
- All the definitions of _walk_, _trail_, and _path_ carry over to directed graphs (and said to be **directed**) with the additional requirement that the edges must be traversed in the correct direction.
	- If $w$ is a directed walk with vertex sequence $v_0,\ldots,v_k$, then $w$ is said to be a _walk from $v_0$ to $v_k$_. (The same for _trail_ and _path_.)

## Weighted Graph

- A **weighted graph** (or a **network**) is defined as a graph but with a weight function $w:E\to\mathbb{R}$ that assigns a real number to each edge.
- A **weighted graph** (or **network**) is a directed or undirected graph in which a number (the **weight**) assigned to each edge.
	- The **weight** of a path in a weighted graph is the sum of the weights of the edges in the path.
	- The **shortest path** between two nodes in a weighted graph is the path with the smallest weight.
	- Other terms of _weight_ are **cost**, **length**, **distance**, and **capacity**.
