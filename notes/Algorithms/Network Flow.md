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




