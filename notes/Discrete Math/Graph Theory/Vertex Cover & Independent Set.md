## Vertex Cover 

$V'\subseteq V$ is **vertex cover** of an undirected graph $G=(V,E)$, s.t 
$$uv \in E \Rightarrow u \in V' \lor v \in V'$$
##### Minimum size of a vertex Cover
- $\beta(G)=|V'|$ is number of vertices of minimum vertex cover.

## Independent Set

- An **independent set** (קבוצה בלתי תלויה) $S \subseteq V$ is a set of vertices such that no two vertices in the set are adjacent: $\forall v,u \in S : vu \notin E$

### Maximum independent set

- A **maximum independent set** $S$ is an independent set of largest size in a given graph.
- $\alpha(G)=|S|$ is number of vertices of maximum independent set.

### Maximal independent set

- A **maximal independent set** $S$ (בלתי תלויה מקסימלית להכלה) is an independent set that is not a subset of any other independent set. 
	- In other words, there is no vertex outside the independent set that may join it because it is maximal with respect to the independent set property.
- (q6a) A maximal independent set is also a dominating set in the graph.

## Dominating set

- A **dominating set** (קבוצה שלטת) $D \subseteq V$ of a graph $G$ is a set such that any vertex of $G$ is either in $D$ or has a neighbor in $D$.
- (4.13) $S\subseteq V$ is independent set in $G=(V,E)$ if and only if $V \setminus S$ is vertex-cover of $G$.
- (4.14) $\alpha(G)+\beta(G)=|V|$ for every graph $G=(V,E)$. i.e. a set is independent if and only if its complement is a vertex cover.
- (4.15) for any graph, the size of every vertex cover is greater than or equal to size of every matching in $G$, in particular $\beta(G)\geq \nu(G)$.








