>[!Warning] More Common Definitions 
> The Residual Capacity is more commonly defined as:
>
> - $c_f(u, v) = \begin{cases} c(u, v) - f(u, v) & \text{if } (u, v) \in E, \\ f(v, u) & \text{if } (v, u) \in E, \\ 0 & \text{otherwise}. \end{cases}$
>   or 
> - $c_f(e) = \begin{cases} c(e) - f(e) & \text{if \( e \) is a forward edge,} \\ f(e) &  \text{if \( e \) is a backward edge.} \end{cases}$
>  
> Also here we require that the flow network is bidirectional, which is not a common requirement.   

___

# Flow Network

- A **network** is a directed graph $G = (V, E)$ with a non-negative **capacity** function $c: E \to \mathbb{N}$
- A **flow network** is a network with a **source** vertex $s$ and a **sink** vertex $t$, and it is denoted by $(G, s, t, c)$.
- A **flow** in a flow network $(G, s, t, c)$ is a function $f: V \times V \to \mathbb{N}$ that satisfies the following properties:
	- **Capacity constraint**: $\forall e \in E, 0 \leq f(e) \leq c(e)$.
	- **Bidirectional Network**: $\forall u, v \in V, (u, v) \in E \iff (v, u) \in E$.
		- (If $e\in E$, but $-e\not\in E$, then we add the edge $-e$ with capacity $0$) 
	- **Flow conservation**: $\displaystyle\forall u \in V - \{s, t\}, f_{\text{in}}(u) = f_{\text{out}}(u)$, where:
		- $\displaystyle f_{\text{in}}(u) = \sum_{v \in V} f(v, u)$
		- $\displaystyle f_{\text{out}}(u) = \sum_{v \in V} f(u, v)$.
	- **Opposite Flow Offset**: For each edge $e$, At most one of $f(e)$ and $f(-e)$ is positive.
		- (If $0<f(e)\leq f(-e)$, then we adjust a new flow as follows: $f'(e) = 0$, $f(-e)' = f(-e) - f(e)$)
- The **value** of a flow $f$ is $\displaystyle |f| = \sum_{v \in V} f(s, v) - \sum_{v \in V} f(v, s)$ (Usually, $\displaystyle\sum_{v \in V} f(v, s) =0$)

### Residual Network

- The **residual network** (of a flow network $(G, s, t, c)$ with a flow $f$) is defined as $(G, s, t, c_f)$, where, $c_f: E \to \mathbb{N}$ is the **residual capacity** function defined as $c_f(e) = c(e) - f(e) + f(-e)$.


- An **augmenting path** is a path $(s=u_1, u_2, \ldots, u_k=t)$ in $G_f$ such that $\forall i \in [1, k-1], c_f(u_i, u_{i+1}) > 0$.
		- The **bottleneck** of an augmenting path is the minimum residual capacity of the edges in the path: $\min\{c_f(e) \mid e \in E(P)\}$.

### Cut

- A **cut** in a flow network is a set $R\subseteq V$ such that $s\in R$ and $t\not\in R$.
	- The set $\mathrm{out}(R)=\{(u,v)\in E\mid  u\in R,v\not\in R\}$ is the set of edges from $R$ to $V-R$.
	- The set $\mathrm{in}(R)=\{(u,v)\in E\mid  u\not\in R,v\in R\}$ is the set of edges from $V-R$ to $R$.
	- $c(\mathrm{out}(R)) = \displaystyle\sum_{(u,v)\in \mathrm{out}(R)}c(u,v)$ is the capacity of the cut.
- A **minimum cut** is a cut $R$ such that $c(\mathrm{out}(R))$ is minimized.
- $|f|=f(\mathrm{out}(R))-f(\mathrm{in}(R))$, for any cut $R$ and flow $f$.
- $|f|\leq c(\mathrm{out}(R))$, for any cut $R$ and flow $f$.
- If $|f|=c(\mathrm{out}(R))$, then $f$ is a maximum flow and $R$ is a minimum cut.
- (**Max-Flow Min-Cut Theorem**) For any flow $f$, the following are equivalent:
	- $f$ is a maximum flow
	- There is no augmenting path in the residual network of $f$
	- There is a cut $R$ such that $|f|=c(\mathrm{out}(R))$
- When the Ford-Fulkerson algorithm terminates, the current flow is the maximum flow.
- If $A$ and $B$ are minimum cuts, then both $A\cap B$ and $A\cup B$ are minimum cuts.
## Maximal Flow Problem

- Input: A flow network $(G, s, t, c)$.
- Output: A flow $f$ of maximum value.

### Ford-Fulkerson Algorithm

#### Augmenting Paths

```Algorithm
Augment(f,P):
	b = bottleneck(P)
	for all e in P:
	    if e is forward in P:
	      f(e) += b
	    else:
	      f(e) -= b 
```

#### Naive Implementation

```Algorithm
Ford_Fulkerson(G=(V,E), c, s, t):
	for all e ∈ E # Initialize flow on all edges to 0
	    f(e) ← 0 
	
	while there exists an augmenting path P do
		augment(f, P) # Augment the flow along the path P

	return f 
```

- (Theorem) At every intermediate stage of the Ford-Fulkerson algorithm, the flow values $f(e)$ are integers.
- (Theorem) The Ford-Fulkerson algorithm terminates in at most $C$ iterations, where $\displaystyle C=\sum_{v\in V}c(s,v)$.

#### Scaling Ford-Fulkerson Algorithm

- $O(E^2\log C)$

```Algorithm
Scaling_Max_Flow(G=(V,E), c, s, t):
	C ← max{c(e) : e ∈ E}  # The maximum capacity in the network
	for all e ∈ E # Initialize flow on all edges to 0
		f(e) ← 0 
	# Iterate over powers of 2
	for i=floor(log C) downto i=0, do: # O(log C) iterations 
		# Set the current width threshold  
	    Δ ← 2^i                 
	    while there exists an augmenting path P with width ≥ Δ do # O(E)
		    # Augment the flow along the path P
	        Augment(f, P, Δf(P)) # O(E)
	# Return the computed max flow
	return f 
```

#### Edmonds-Karp Algorithm

- stronger polynomial time complexity
- $O(VE^2)$
- Uses BFS to find the shortest augmenting path

```Algorithm
Edmonds_Karp(G=(V,E), c, s, t):
	while there exists an augmenting path do
		P ← BFS(G_f, s, t) # Find the shortest augment path
		Augment(f, P) # Augment the flow along the path P
	return f 
```


# Edge-disjoint paths

- **Edge-disjoint paths** are paths that do not share any edges.
- **Internally node-disjoint paths** are paths that do not share any internal nodes.
- An **integral flow** is a flow where all flow values are integers.
- An **unit capacity flow network** is a flow network where all edge capacities are 1.

> Observation: If capacities are integers, the Ford-Fulkerson algorithm computes an integral flow, ensuring the existence of a maximum integral flow.

- (**Flow Decomposition Theorem**) For a unit capacity flow network with a maximum integral flow $f$ of value $k$, the saturated edges form a union of $k$ edge-disjoint paths and some cycles. 
	- (This is based on the principle that in a directed graph where in-degree equals out-degree for all nodes, there exists a collection of cycles covering all edges.)
	- The maximum number of edge-disjoint paths from the source to the sink equals the value of the maximum flow.
- There exists an algorithm with $O(|E|^2)$ time complexity for the following problems:
	- Decomposing a directed graph into edge-disjoint cycles.
	- Decomposing an integral flow into edge-disjoint paths.
	- Finding the maximum number of edge-disjoint paths.

- A **seperating set (of edges)** of $s,t\in V$ is a set $S\subset E$ such that the removal of $S$ disconnects $s$ from $t$.
- A **seperating set** (or **vertex separator**) of $s,t\in V$ is a set $S\subset V$ such that the removal of $S$ disconnects $s$ from $t$.
- In flow networks with unit capacities, the following quantities are equal:
	- The minimum size of a seperating set of $s$ and $t$.
	- The minimum size of edges in a cut.
	- The maximum flow value.
	- The maximum number of edge-disjoint paths.
### Menger's Theorem

Menger's theorem has four main formulations:

1. **Directed Graph, Edge Version**:  
   In a directed graph, the maximum number of edge-disjoint paths from $s$ to $t$ equals the minimum size of an edge set that separates $s$ from $t$.

2. **Undirected Graph, Edge Version**:  
   In an undirected graph, the maximum number of edge-disjoint paths from $s$ to $t$ equals the minimum size of an edge set that separates $s$ from $t$.

3. **Directed Graph, Vertex Version**:  
   In a directed graph without a direct edge from $s$ to $t$, the maximum number of internally vertex-disjoint paths from $s$ to $t$ equals the minimum size of a vertex set (excluding $s$ and $t$) that separates $s$ from $t$.

4. **Undirected Graph, Vertex Version**:  
   In an undirected graph without a direct edge from $s$ to $t$, the maximum number of internally vertex-disjoint paths from $s$ to $t$ equals the minimum size of a vertex set (excluding $s$ and $t$) that separates $s$ from $t$.

### Mathematical Notation
- $\lambda_G^Q(s, t)$: Maximum number of paths from $s$ to $t$ in $G$, where no two paths share an edge or vertex in $Q \setminus \{s, t\}$.
- $\tau_G^Q(s, t)$: Minimum size of a set $C \subseteq Q$ such that removing $C$ disconnects all paths from $s$ to $t$.

### Simplified Formulation
For vertices $s, t$ in a graph $G$:
- $\lambda_G^E(s, t) = \tau_G^E(s, t)$: Involving edge-disjoint paths and edge separators.
- If there is no edge $s \to t$: $\lambda_G^V(s, t) = \tau_G^V(s, t)$: Involving internally vertex-disjoint paths and vertex separators.

### Notes
- The symbol $\lambda$ is used here instead of $\nu$ to avoid confusion with the letter $v$.
- When $G$ is the focus, $\lambda(G)$ or $\tau(G)$ may be used for brevity, assuming $Q, s, t$ are clear from context.





