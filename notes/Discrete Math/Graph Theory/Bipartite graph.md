- A **bipartite graph** $G=(A \cup B,E)$ is a graph whose vertices can be divided into two disjoint and independent sets $A$ and $B$, that is every edge connects a vertex in $A$ to one in $B$. 
- A **complete bipartite graph** is a bipartite graph such that every pair of graph vertices in the two sets are adjacent.
- (1.6) A graph is bipartite, if and only if, it does not contain an [[Basic#Cycle & Path|odd cycle]].
- (q5) Every subgraph $H$ of a bipartite graph $G$ is, itself, bipartite 
- (1.3) **Handshaking Lemma for Bipartite Graph**: $\displaystyle\sum _{v\in A} \text{deg}( v)=\sum _{v\in B} \text{deg}( v)=|E|$

## Matching in Bipartite graph

- Given a bipartite graph $G=(A \cup B,E)$,
	- (4.7) **Hall's marriage theorem**: There exists a [[Edge Covering & Matching#Matching|matching]] that covers every vertex in $A$ if and only if $|\Gamma(X)| \geq |X|$ for all subsets $X$ of $A$.
	- (4.8, Corollary from HMT) Then there exists a [[Edge Covering & Matching#Perfect matching|perfect matching]] if and only if $|\Gamma(X)| \geq |X|$ for all subsets $X$ of $A$, and **also** $|A|=|B|$.
	- (4.16) **Kőnig's theorem**: The size of **minimum vertex cover** is equal to the size of the maximum matching. $\beta(G)=\nu(G)$.