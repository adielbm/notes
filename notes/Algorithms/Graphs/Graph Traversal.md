- **Graph traversal** (or **graph search**) refers to the process of visiting all of the nodes in a graph.
- Such traversal algorithms are classified by the order in which the nodes are visited.
- _Tree traversal_ is a special case of graph traversal where the graph is a tree.

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

- Input: A graph $G=(V,E)$ and a starting node $s\in{V}$.
- Output: A BFS tree $T=(V_T,E_T)$ rooted at $s$.

```
BFS Algorithm:
Runs in O(n+m) time if the graph is represented as an adjacency list.
---
BFS(G, s):
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

- Input: A graph $G=(V,E)$ and a starting node $s\in{V}$.
- Output:
	- _Traversal Order_: It prints the nodes in the order they are visited by BFS.
	- _Distance_: For each node `v` reachable from `s`, it finds the shortest distance from `s` to `v`.
	- _Predescessor_: For each node `v` reachable from `s`, it finds the predecessor of `v` in the BFS tree.


```
BFS(G, s):
    Queue = empty queue
    foreach v in V:
        v.visited = false
        v.distance = infinity
        v.parent = null
    
    Queue.enqueue(s)
    s.visited = true
    s.distance = 0

    while Queue is not empty:
        v = Queue.dequeue()
		print(v)
        foreach neighbor u of v:
            if u.visited == false:
                u.visited = true
                u.distance = v.distance + 1
                u.parent = v
                Queue.enqueue(u)
```

## Depth-First Search (DFS)

### DFS (Undirected)

- An edge $(v,u)$ is a **tree edge** if $u$ is visited for the first time when $(v,u)$ is explored. (i.e. `visited(u) = false`)
- An edge $(v,u)$ is a **back edge** if $u$ is already visited when $(v,u)$ is explored. (i.e. `visited(u) = true`)
- The tree that DFS constructs is called a **DFS tree**.


```Algorithm
Algorithm 2.2 DFS(G)
Input: G = (V, E) connected undirected graph on n vertices
---
for all v ∈ V do
	vistied(v) ← false
for all v ∈ V do
	if not visited(v) then
		DFS-Explore(G, v)
```

```Algorithm
Algorithm 2.3 DFS-Explore(G, v)
---
visited(v) ← true
for all (v, u) ∈ E do
	if not visited(u) then
		DFS-Explore(G, u)
```

#### Stack-based DFS Algorithm

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

#### binary tree traversal and DFS

#todo which one of the bianry tree traversal algorithms (inorder, preorder, postorder) is a DFS algorithm on a binary tree?


### DFS (Directed)



- A **tree edge** is an edge $(u,v)$ such that $v$ was first discovered by exploring $(u,v)$.
- **Back edges** are those edges $(u,v)$ connecting a vertex $u$ to an ancestor $v$ in a depth-first tree. We consider self-loops, which may occur in directed graphs, as back edges.
- **Forward edges** are those nontree edges $(u,v)$ connecting a vertex $u$ to a proper descendant $v$ in a depth-first tree.
- **Cross edges** are all other edges. They can go between vertices in the same depth-first tree, as long as one vertex is not an ancestor of the other, or they can go between vertices in different depth-first trees.

```
DFS_visits_explore(G,v):

visited[v] = true
clock++
pre[v] = clock
for each edge (v,u) in E do 
	if not visited[u] then
	    DFS_visits_explore(G,u) 
clock++
post[v] = clock
```
