# Edge Cover

- An **edge cover** $F\subseteq E$ of a graph $G=(V,E)$ is a set of edges such that every vertex of the graph is incident to at least one edge of the set. 

## Minimum Edge Covering 

- $\rho(G)=|F|$ is the size (number of edges) of minimum edge cover.
- (4.10) If $G$ has no isolated vertices, then $\rho(G)=|V|-\nu(G)$

# Matching

- A **matching** $M \subseteq E$ in an undirected graph is a set of edges without common vertices

## Maximum matching 

- A **maximum matching** $M$ is a matching of largest size in a given graph.
- $\nu(G)=|M|$ is the size (number of edges) of maximum matching.

## Perfect matching 

- A **perfect matching** is a matching in which every node is incident to exactly one edge in the matching.
- A perfect matching is also a minimum-size edge cover. 
- If there is a perfect matching, then both the matching number and the edge cover number equal $|V|/2$.

- Every cycle with even length has a perfect matching. 
- A Graph of odd vertices does not have a perfect matching. 
- Every complete graph of even vertices has a perfect matching.

## Maximal Matching

- A **maximal matching** (זיווג מקסימלי להכלה) is a matching that is not a subset of any other matching

#### Matching in Bipartite graph

- See [[Bipartite graph#Matching in Bipartite graph|Matching in Bipartite graph]]