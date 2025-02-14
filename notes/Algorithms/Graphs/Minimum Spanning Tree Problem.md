# Minimum Spanning Tree Problem

- Th problem is to find a [[Graph#Minimum Spanning Tree|minimum spanning tree]] $T$ for a connected undirected graph $G=(V,E)$ with weights on the edges. (the weights are non-negative)
## Prim's Algorithm

```Algorithm
for each v ∈ V:
  C[v] = ∞ # the cheapest cost of a connection to v
  E[v] = null # the edge that connects v to the tree

initialize an empty forest F
initialize a set Q = V # vertices not yet in F

while Q ≠ ∅:
  u = the vertex in Q with the smallest C[u]
  remove u from Q
  add u to F
  for each neighbor v of u:
    if v ∈ Q and w(u, v) < C[v]:
      C[v] = w(u, v)
      E[v] = (u, v)

return F, which specifically includes the corresponding edges in E
```


- A **cut** $(S, V-S)$ of a graph $G=(V,E)$ is a partition of $V$ into two sets $S$ and $V-S$.
	- An edge $(u,v)\in E$ **crosses** the cut $(S,V-S)$ if $u\in S$ and $v\in V-S$.
	- A cut **respects** a set of edges $A$ if no edge in $A$ crosses the cut.
	- An edge $(u,v)$ is a **light edge** crossing a cut if its weight is the minimum of all the weights of the edges crossing the cut. 
		- (More generally, an edge is a **light edge** satisfying a given property if its weight is the minimum of all the weights of the edges satisfying that property.)
- An edge $(u,v)$ is **safe** for a set of edges $A$ that is a subset of some MST if $A\cup\{(u,v)\}$ is also a subset of some MST.
- Theorem: Let $A$ be a subset of $E$ that is included in some MST for $G$, and let $(S,V-S)$ be any cut of $G$ that respects $A$. 
	- Let $e=(u,v)$ be a light edge crossing $(S,V-S)$. Then $e$ is safe for $A$. 
		- If $e$ is an unique light edge, then $e$ is in every MST of $G$.
 

