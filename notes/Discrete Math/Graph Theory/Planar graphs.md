
- **Euler's Formula** (5.3) - For any connected planar graph with $v$ vertices, $e$ edges and $f$ faces, we have $$v-e+f=2$$
- **Corollary** (5.4) - If $G$ is a planar simple graph, with $v$ vertices, and $e$ edges, then $$v\geq 3\Longrightarrow e\leq 3v-6$$
- **Corollary** (5.5) - If $G$ is a planar simple graph, then $G$ has a vertex of degree not greater than 5.
- (question 3) - in planar and [[Bipartite graph|bipartite]] and connected graph with $v\geq{3}$, then $e\leq{2v-4}$ 

#### examples
- $K_4$ is planar. 
- $K_{3,3}$ (Utility graph) is nonplanar
- $K_5$ is nonplanar. (theorem 5.2)
- the graph that derived from $K_5$ by remove some edge is planar. (q1)

## Subdivision

-  The **Edge Subdivision** ^[elementary subdivision, עידון של קשת] operation for an edge $\set{u,v}\in E$ is the deletion of $\set{u,v}$ from $G$ and the addition of two edges $\set{u,w}$ and $\set{w,v}$ along with the new vertex $w$.
- **Graph Subdivision** ^[עידון של גרף] - A graph which has been derived from $G$ by a sequence of edge subdivision operations is called a **subdivision of** $G$. (can also be referred to as a $G$**-subdivision**).
- The graphs $G_1=(V_1,E_1)$ and $G_2=(V_2,E_2)$ are called **homeomorphic** if they can be obtained from the same graph by a sequence of edge subdivisions.

### Theorems
- **Theorem** (5.7) - A graph $G$ is planar, if and only if, every subdivision of $G$ is planar.
- **Kuratowski's theorem** (5.8) - A graph is planar, if and only if, it does not contain a [[Discrete Math/Graph Theory/Basic#Subgraphs|subgraph]] that is a subdivision of $K_5$ or $K_{3,3}$.


