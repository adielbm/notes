- **bipartite graph** $G=(A \cup B,E)$ is a graph whose vertices can be divided into two disjoint and independent sets $A$ and $B$, that is every edge connects a vertex in $A$ to one in $B$. 
- A **complete bipartite graph**, is a bipartite graph such that every pair of graph vertices in the two sets are adjacent.
- **Theorem 1.6** - A graph is bipartite, if and only if, it does not contain an **odd cycle**.
- **Subgraph of a Bipartite Graph** - Every subgraph H of a bipartite graph G is, itself, bipartite. 
^[question 5].
- **Handshaking lemma** for bipartite (1.3) - $\sum _{v\in A} \text{deg}( v)=\sum _{v\in B} \text{deg}( v)=|E|$

## Matching in Bipartite graph

- **Hall's marriage theorem (4.7)** - The bipartite graph $G=(A \cup B,E)$, Then there exists a matching that covers every vertex in $A$ if and only if $|\Gamma(X)| \geq |X|$ for all subsets $X$ of $A$.
- **Corollary (4.8) from Hall's marriage theorem** - The bipartite graph $G=(A \cup B,E)$, Then there exists a **perfect matching** if and only if $|\Gamma(X)| \geq |X|$ for all subsets $X$ of $A$, and **also** $|A|=|B|$.
- **Kőnig's theorem (4.16)** - In bipartite graphs, the size of **minimum vertex cover** is equal to the size of the maximum matching. $\beta(G)=\nu(G)$.
