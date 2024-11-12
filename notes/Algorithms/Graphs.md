# Graph Representation

- A **sparse graph** is a graph with $O(n)$ edges. A **dense graph** is a graph with $O(n^2)$ edges.
- $G=(V,E)$ is a graph with $n$ vertices and $m$ edges.
	- An **adjacency matrix** is a $n\times n$ matrix $A$ where $A_{ij}=1$ if $(i,j)\in{E}$ and $A_{ij}=0$ otherwise.
		- If $G$ is undirected, the adjacency matrix is symmetric.
		- The adjacency matrix representation allows us to check in $O(1)$ time if a given edge is in the graph
		- The adjacency matrix representation requires $\Theta(n^2)$ space. (when the graph has many fewer edges than $n^2$, more compact representations are possible)
		- Many graph algorithms need to examine all the edges connected to a given vertex $v$. In the worst case, $v$ may have $\Theta(n)$ neighbors. However, this case is rare in practice.
	- An **adjacency list** is an array `Adj` of $n$ records, where `Adj[i]` contains all the vertices $j$ such that $(i,j)\in{E}$. 
		- The length of `Adj[v]` is the degree of vertex $v$ and is denoted by $n_v$. 
		- In an undirected graph, each edge $(i,j)$ appears twice. the node $j$ appears in `Adj[i]` and the node $i$ appears in `Adj[j]`.
		- Adjacency lists are a more compact representation of sparse graphs.
		- Adjacency lists require $O(n+m)$ space


| | Adjacency Matrix | Adjacency List |
| -- |------------------|----------------|
| Space | $\Theta(n^2)$ | $O(n+m)$ |
| Check if $(u,v)\in{E}$ | $O(1)$ | $O(n_v)$ |


# Graph Traversal


- **st-connectivity** is a decision problem determining if there is a path between two vertices $s$ and $t$ in a graph $G$.

## Breadth-First Search (BFS)


- Let $G=(V,E)$ be a graph and $s\in{V}$ be a starting node.
	- The **layers** $L_1,L_2,\ldots$ of the node $s$ in the graph $G$ constructed by BFS are defined as follows:
		- $L_1=\set{v\in{V}\mid (s,v)\in{E}}$ (the set of vertices adjacent to $s$)
		- $L_{i+1}=\set{v\in{V}\mid (u,v)\in{E}, u\in{L_i}, v\notin{L_i}}$ (the set of vertices adjacent to the vertices in $L_i$ that are not in $L_{i-1}$)
	- $L_i$ is the set of vertices at distance $i$ from $s$.
	- BFS is not only determining the nodes reachable from $s$, but also the shortest path from $s$ to them.
	- For each $j\geq 1$, layer $L_j$ produced by BFS consists of all nodes at distance exactly $j$ from $s$. 
	- There is a path from $s$ to $t$ if and only if $t$ appears in some layer.
	- BFS produces a **BFS tree** rooted at $s$ which is a tree $T=(V_T,E_T)$.
		- $\displaystyle V_T=\set{s}\cup\bigcup_{i\geq 1}L_i$ (the set of nodes reachable from $s$)
		- $E_T\subseteq E$ 
		- If $v\in{L_i}, u\in{L_{j}}$ and $(u,v)\in{E}$, then $|i-j|\leq 1$.
		- (3.4) If $(u,v)\in{E}$ and $(u,v)\notin{E_T}$ (a **non-tree edge**), then either $u$ and $v$ are in the same layer, or they are in adjacent layers.
	- BFS explores the connected component in the graph $G$ containing $s$.
		- $R$ is the set of nodes reachable from $s$, produced as the following algorithm:
			- Start with $R=\set{s}$
			- While there exists an edge $(u,v)\in{E}$ such that $u\in{R}$ and $v\notin{R}$, add $v$ to $R$.
		- (note: in this context, _connected component_ refers to the set of nodes, not the subgraph induced by them)

### Layered BFS Algorithm

```
BFS Algorithm:
Runs in O(n+m) time if the graph is represented as an adjacency list.
---
BFS(s):
	Discovered[s]=true 
	for all other v, Discovered[v]=false
	
	L[0] = {s}    // layer 0
	i = 0         // layer counter
	T = {} // BFS tree initially empty
	
	while L[i] != {} do
	    L[i+1] = {}
	    for each v in L[i] do
	      for each (v,u) in E do
	        if not Discovered[u] then
		        Discovered[u] = true
				Add u to L[i+1]
				Add (v,u) to T
		i = i+1
```

### Queue-based BFS Algorithm

```
BFS Algorithm: (Queue-based)
---
BFS(s):
    Create a queue Q
    Enqueue s onto Q
    Discovered[s] = true
    
    while Q is not empty do
        v = Dequeue from Q
        for each neighbor u of v do
            if not Discovered[u] then
                Discovered[u] = true
                Parent[u] = v // Optional: 
                Enqueue u onto Q
                Add (v, u) to T  // Optional: if building a BFS tree
```


```
Print nodes of a tree T in BFS order:
---
BFS(T, s):
    Create a queue Q
    Enqueue s onto Q
    Discovered[s] = true
    
    while Q is not empty do
        dequeue v from Q and print v
        for each child u of v do
            Enqueue u onto Q
```

## Depth-First Search (DFS)

```
Algorithm 2.2 DFS(G)
Input: G = (V, E) connected undirected graph on n vertices
---
for all v ∈ V do
	vistied(v) ← false
for all v ∈ V do
	if not visited(v) then
		DFS-Explore(G, v)
```

```
Algorithm 2.3 DFS-Explore(G, v)
---
visited(v) ← true
for all (v, u) ∈ E do
	if not visited(u) then
		DFS-Explore(G, u)
```

- An edge $(v,u)$ is a **tree edge** if $u$ is visited for the first time when $(v,u)$ is explored. (i.e. `visited(u) = false`)
- An edge $(v,u)$ is a **back edge** if $u$ is already visited when $(v,u)$ is explored. (i.e. `visited(u) = true`)
- The tree that DFS constructs is called a **DFS tree**.

### Stack-based DFS Algorithm

```
DFS Algorithm: (Stack-based)
Runnning time: O(n+m) (if the graph is represented as an adjacency list)
---
DFS(s):
	Initialize S to be a stack with one element s
	While S is not empty do
	    Pop v from S
	    If Explored[u] = false then 
		    Set Explored[u] = true
			For each edge (u,v) incident to u do
			    Push v onto S
```


___

# Finding the Set of All Connected Components

- Algorithm:
	1. Find the connected components that contain the node $s$ using BFS or DFS.
	2. Find a node $v$ (if any) in the graph that is not in any connected component found in step 1.
	3. Repeat step 1 with $v$ as the starting node.
- This algorithm runs in $O(n+m)$ time. (even though it may run BFS or DFS multiple times, it spends a constant amount of time on each edge and node)


# 3.4 Testing Bipartiteness: An Application of BFS



