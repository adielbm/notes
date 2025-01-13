3. **6.2 Ford-Fulkerson Algorithm (Definition, Correctness)**
    - 6.2.1 Flow Augmentation in a Directed Path
    - 6.2.2 Flow Augmentation in a Residual Network (Temporary Definitions)
    - 6.2.3 Example Run and the Residual Network
    - 6.2.4 Legal Flow, Residual Capacity, and the Ford-Fulkerson Algorithm
    - 6.2.5 Correctness of the Ford-Fulkerson Algorithm
    - 6.2.6 Continued: Correctness of the Ford-Fulkerson Algorithm
    - 6.2.7 Summary Questions for Lesson 6.2
4. **6.3 Efficient Implementations of the Ford-Fulkerson Algorithm**
    - 6.3.1 Algorithm Complexity
    - 6.3.2 Augmenting Paths (Wide Paths)
    - 6.3.3 Augmenting Paths (Short Paths)
    - 6.3.4 Summary Questions for Lesson 6.3
5. **6.4 Flow Paths in Graphs**
    - 6.4.1 Max-Flow Min-Cut Theorem
    - 6.4.2 Menger's Theorem
    - 6.4.3 Menger's Theorem for Unweighted Graphs
    - 6.4.4 Summary Questions for Lesson 6.4
6. **6.5 Matchings in Bipartite Graphs**
    - 6.5.1 The Maximum Matching Problem
    - 6.5.2 Hall's Marriage Theorem
    - 6.5.3 König's Theorem
    - 6.5.4 Summary Questions for Lesson 6.5
7. **6.6 Extensions and Applications of Flow Problems**
    - 6.6.1 Project Selection Problem
    - 6.6.2 Distribution Problem
    - 6.6.3 Distribution Problems with Lower Bounds
    - 6.6.4 Flight Scheduling Problem
    - 6.6.5 Summary Questions for Lesson 6.6
8. **6.7 Summary of Chapter 6**
    - Summary of Chapter 6

-----

- A **network** is a directed graph $G = (V, E)$ with a non-negative **capacity** function $c: E \to \mathbb{N}$
- A **flow network** is a network with a **source** vertex $s$ and a **sink** vertex $t$, and it is denoted by $(G, s, t, c)$.
- A **flow** in a flow network $(G, s, t, c)$ is a function $f: V \times V \to \mathbb{N}$ that satisfies the following properties:
	1. **Capacity constraint**: $\forall u, v \in V, 0 \le f(u, v) \le c(u, v)$.
	2. **Flow conservation**: $\displaystyle\forall u \in V - \{s, t\}, f_{\text{in}}(u) = f_{\text{out}}(u)$, where:
		- $\displaystyle f_{\text{in}}(u) = \sum_{v \in V} f(v, u)$
		- $\displaystyle f_{\text{out}}(u) = \sum_{v \in V} f(u, v)$.
	3. **Skew Symmetry**: $\forall u,v \in  V, f(u,v)=-f(v,u)$
	4. $(u,v),(v,u)\notin E\implies f(u,v)=f(v,u)=0$
- The **value** of a flow $f$ is $\displaystyle |f| = \sum_{v \in V} f(s, v) - \sum_{v \in V} f(v, s)$ (Usually, $\displaystyle\sum_{v \in V} f(v, s) =0$)
- Given a flow network $(G, s, t, c)$, with a flow $f$:
	- The **residual capacity** of an edge $e$ is the difference between the original capacity and the flow on that edge: $c_f(e) = c(e) - f(e)$.
	- The **residual network** (of the flow network with $f$) is denoted by $G_f=(V,E_{f})$, where: $E_{f} = \{ (u, v) \in V \times V \mid c_f(u, v) > 0 \}$. 
		- An **augmenting path** is a path $(s=u_1, u_2, \ldots, u_k=t)$ in $G_f$ such that $\forall i \in [1, k-1], c_f(u_i, u_{i+1}) > 0$.
		- The **bottleneck** of an augmenting path is the minimum residual capacity of the edges in the path: $\min\{c_f(e) \mid e \in E(P)\}$.
	- A **cut** of the flow network is a partition $(S, T)$ of $V$ such that $s \in S$ and $t \in T$.
		- The **net flow** $f(S, T)$ across the cut $(S, T)$ is defined to be $\displaystyle f(S, T) = \sum_{u \in S} \sum_{v \in T} f(u, v)-\sum_{u \in S} \sum_{v \in T} f(v, u)$.
		- The **capacity** of a cut $(S, T)$ is $\displaystyle c(S, T) = \sum_{u \in S} \sum_{v \in T} c(u, v)$.
	- A **minimum cut** of the flow network is a cut $(S, T)$ such that $c(S, T)$ is minimized.

	
	

### Max-Flow Min-Cut Theorem
[C:/Users/adiel/iCloudDrive/Books/Computer%20Science/Algorithms/Introduction%20to%20Algorithms%20-%204th.pdf](file:///C:/Users/adiel/iCloudDrive/Books/Computer%20Science/Algorithms/Introduction%20to%20Algorithms%20-%204th.pdf)

- (Lemma) Let $G=(V,E)$ be a flow network, $f$ be a flow in $G$, 
	- (A) Let $P$ be an augmenting path in $G$, the function $f':V\times V\to \mathbb{R}$ defined as: $$\displaystyle f'(u,v)=\begin{cases} c_f(P) & \text{if } (u,v)\in P \\ -c_f(P) & \text{if } (v,u)\in P \\ 0 & \text{otherwise} \end{cases}$$ is a flow in $G$ with value $|f'|=c_f(P)>0$.
	- (B) Let $G_f$ be the residual network of $G$ induced by $f$, and $f'$ be a flow in $G_f$, then $f+f'$ is a flow in $G$ with value $|f+f'|=|f|+|f'|>|f|$.
- (Lemma) Let $f$ be a flow in a flow network $(G, s, t, c)$, and $(S,T)$ be a cut of $G$, then $f(S,T)=|f|$
- (Lemma) The value of a flow in a flow network is equal to the flow into the sink
- (Lemma) The value of a a flow $f$ in a flow network $(G, s, t, c)$ is bounded from above by the capacity of a minimum cut $(S,T)$: $|f|\le c(S,T)$
- (**Max-Flow Min-Cut Theorem**) If $f$ is a flow in a flow network $(G, s, t, c)$, then the following are equivalent:
	1. $f$ is a maximum flow in the flow network
	2. The residual network $G_f$ contains no augmenting path
	3. There exists a cut $(S,T)$ such that $|f|=c(S,T)$

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




