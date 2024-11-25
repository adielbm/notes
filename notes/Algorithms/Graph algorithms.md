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
Print(T, s):
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

### binary tree traversal and DFS

#todo which one of the bianry tree traversal algorithms (inorder, preorder, postorder) is a DFS algorithm on a binary tree?


___

# Finding the Set of All Connected Components

- Algorithm:
	1. Find the connected components that contain the node $s$ using BFS or DFS.
	2. Find a node $v$ (if any) in the graph that is not in any connected component found in step 1.
	3. Repeat step 1 with $v$ as the starting node.
- This algorithm runs in $O(n+m)$ time. (even though it may run BFS or DFS multiple times, it spends a constant amount of time on each edge and node)


# Testing Bipartiteness

- We can implement an algorithm to test whether a graph is bipartite by simply taking the implementation of BFS and adding an extra array `Color` over the nodes. 
- Whenever we get to a step in BFS where we are adding a node $v$ to a list $L[i + 1]$, we assign:
	- `Color[v] = red` if $i + 1$ is an even number,
	- `Color[v] = blue` if $i + 1$ is an odd number. 
- At the end of this procedure, we simply scan all the edges: 
	- if there is any edge for which both ends received the same color, then the graph is not bipartite. 
	- Otherwise, the graph is bipartite. 
- Thus, the total running time for the coloring algorithm is $O(m + n)$, just as it is for BFS.



# Directed Graphs 

## Directed Graph Representation

- We can use a version of _adjacency list_ representation for directed graphs, which is, instead of each node having a single list of neighbors, each node has two lists associated with it:  
	- `AdjOut[v]` contains all the vertices $u$ such that $(v,u)\in{E}$ (outgoing edges)
	- `AdjIn[v]` contains all the vertices $u$ such that $(u,v)\in{E}$ (incoming edges)

## Directed Graph Traversal

- Given a [[Graphs#Directed Graph|directed graph]] $G=(V,E)$:
	- $G^\text{rev}$ is the **reverse graph** of $G$, where $G^\text{rev} = (V, E^\text{rev})$ and $E^\text{rev} = \{(u, v) \mid (v, u) \in E\}$.
	- A node $v$ has a path to $s$ in $G$ if and only if $s$ has a path to $v$ in $G^\text{rev}$.
	- By running `BFS(s)` (or `DFS(s)`) on $G$, we can find the set of all nodes reachable from $s$ in $G$.
	- By running `BFS(s)` (or `DFS(s)`) on $G^\text{rev}$, we can find the set of all nodes that can reach a given node $s$ in $G$.
	- There is a simple linear-time algorithm to test if a directed graph is [[Graphs#Connectivity|strongly connected]] 
		- Run `BFS(s)` on $G$ for some node $s$.
		- Run `BFS(s)` on $G^\text{rev}$ for the node $s$
		- If all nodes are reachable from $s$ in both runs, then the graph is strongly connected.


# lecture 3 notes

- probelms:
	- how to find all shortest paths from a given node $s$ to a given node $t$ in a graph $G$?
- problem solving using reduction (_reduction_ is the process of transforming one problem into an easier eqvivalent problem)
	- given an undirected heaph G with edges with weights. we ewant an algorithme that finds the shortest path between in terms of the sum of the weights of the edges. 
		-  will runnig of BFS algo. solve the problem?
			- ans: no. counter example was shown in the lecture.
		- solution: 
			- by using the reduction method, we can build a new graph $G'$ by replacing each edge $(u,v)$ with a path of length of the minimal weight is in the original graph. 
			- then, we can run BFS on the new graph $G'$ to find the shortest path.
			- the reducion does not lose or add any shortest path. i.e. we can prove: 
				- for every $k$-length path from $a$ to $b$ in $G$, there is a $k$-length path from $a$ to $b$ in $G'$. (length=the sum of the weights of the edges)
				- for every every $k$-length path from $a$ to $b$ in $G'$ (where $a$ and $b$ are nodes in $G$), there is a $k$-length path from $a$ to $b$ in $G$.
			- the running time of the new algorithm is $O(n+m)$



- exercise:
	- given a neighberhood with two-way streets. but there is a traffic jam in the city. 
	- we want to make the roads one-way to solve the traffic jam.
		- we have to make sure that the city remains strongly connected.
			- is it always possible? no. #todo 
		- **bridge** in an undirected graph is an edge in an undirected connected graph is a bridge **if removing it disconnects the graph** 
	- we'll use in `Bridges` algo. in time O(n+m) that cheeck if G has a bridge or not. 
	- our question is: give an algorithm that make all roads one-way such that the city remains strongly connected.
	

	
		- hint: dfs has two types of edges: (in undirected graph. in directed graph, we have more types of edges)
			- tree edges - edges that are in the dfs tree
			- back edges - edges that are not in the dfs tree BUT connects a node to an ancestor in the dfs tree. 
		- algo:
			- if there is a bridge in the graph, so this road should be two-way, so we can't make the graph directed and strongly connected. 
			- otherwise, we can make the graph directed and strongly connected
		- correctness proof: 
			- every node is reachable from the root in the dfs tree. 
- varient of the problem: what if we want make roads one way as much as possible..

# Shortest Path Problem

- The **shortest path problem** is the problem of finding the shortest path between two nodes in a graph.
	- single-source: finding the shortest path from a given node $s$ to all other nodes in the graph.
	- single-destination: finding the shortest path from all nodes to a given node $t$.
	- all-pairs: finding the shortest path between all pairs of nodes in the graph.
	- single-pair: finding the shortest path between a given pair of nodes $(s,t)$.
- The shortest path problem can be defined for graphs whether undirected, directed, or mixed. 
- The shortest path problem can be defined for graphs with or without weights on the edges.

## Undirected Graphs 

- we can use the BFS algorithm to find the shortest path in an undirected unweighted graph.
- for a weighted graph, we can replace each edge with a path of length equal to the weight of the edge and then run the BFS algorithm.
	- cons: 1. the new graph may have multiple edges between two nodes. 2. it's not good for weights of real numbers. 

## Dijkstra's Algorithm

- **Dijkstra's algorithm** is an algorithm for finding the shortest path (in terms of the sum of weights) from a given start node to every other node in a directed graph with non-negative weights.
	- Although this algorithm is for a directed graph, it can be used for an undirected graph by replacing each undirected edge $(u,v)$ with two directed edges $(u,v)$ and $(v,u)$, each with the same weight.
	- Assumptions: 
		- the graph is connected 
		- non-negative weights

- the output of Dijkstra's algorithm is a tree called the **shortest path tree** rooted at the start node.

- Dijkstra's algorithm is using a [[Abstract Data Types#Priority Queue|priority queue]] which can be implemented using:
	- (unsorted) Doubly linked list - $\Theta(|V|^2)$
	- Binary heap $\Theta(|E|\cdot \log|V|)$
	- Fibonacci heap $\Theta(|E| + |V|\log|V|)$

- Dijkstra's algorithm $(G,\ell)$: 
	- Let $S$ be the set of explored nodes 
		- For each $u\in S$, we store a distance $d(u)$ (the shortest path from $s$ to $u$ that we have found so far)
	- Initially, $S=\{s\}$ and $d(s)=0$ 
	- While $S\neq V$:
		- Select a node $v\notin S$ with at least one edge from $S$ for which $d'(v)=\min_{e=(u,v):u\in S}d(u)+\ell_e$ is as small as possible.
		- Add $v$ to $S$ and set $d(v)=d'(v)$.



```
Algorithm Dijkstra(Graph, Source):

---
1. Initialize:
    - DistEst[v] ← ∞ for all vertices v in Graph
    - DistEst[Source] ← 0
    - T ← {} (empty set for the minimal path tree)
    - PriorityQueue ← {Source with priority 0}

2. While PriorityQueue is not empty:
    a) u ← ExtractMin(PriorityQueue) (Get vertex with the smallest DistEst)
       Add u to T (Include u in the minimal path tree)

    b) For each neighbor v of u (where v ∉ T):
        - If DistEst[u] + w(u→v) < DistEst[v]:
            Update DistEst[v] ← DistEst[u] + w(u→v)
            Update PriorityQueue with the new DistEst[v]

3. Return DistEst (Contains the shortest path estimates from Source to all vertices)
```



```
Input: Graph G = (V, E) with edge weights w(u, v) >= 0
       Source node s ∈ V

Output: Shortest distance from s to all other nodes (DistEst)

1. Initialize:
    SPT = {}                        # Shortest Path Tree (initially empty)
    DistEst(v) = ∞ for all v ∈ V    # Distance estimates (infinity for all nodes)
    DistEst(s) = 0                  # Distance from source to itself is 0

2. Create a priority queue PQ:
    For all v ∈ V:
        Insert v into PQ with key = DistEst(v)

3. While PQ is not empty:
    a. Extract the node v with the smallest DistEst(v) from PQ
    b. Add v to SPT
    c. For each edge (v, z) where z ∈ V \ SPT:
        i. If DistEst(v) + w(v, z) < DistEst(z):
            Update DistEst(z) = DistEst(v) + w(v, z)
            Update PQ with the new key for z

4. Return DistEst for all nodes


```


```
SPT = {s}
	create priority-queue PQ with V \ SPT
	key(v) = DistEst (v)
repeat until SPT spans V(s)
	extract-minimum v from PQ
	SPT = SPT ∪ {e}
	scan edges (v,z) with z ∈ V \ SPT
		if DistEst(v) + w(v,z) < DistEst(z)
			DistEst(z) = DistEst(v) + w(v,z)
```


# lecture 4 notes 


- exersise: given flights times between cities. 
	- it has to have to wait in every airport a certain amount of time (depended on the airport)
	- we want to calculate the time of the flight (and the path) from a given city to every other city. 