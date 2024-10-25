## Vertex Cover 

$V'\subseteq V$ is **vertex cover** of an undirected graph $G=(V,E)$, s.t 
$$uv \in E \Rightarrow u \in V' \lor v \in V'$$
##### Minimum size of a vertex Cover
- $\beta(G)=|V'|$ is number of vertices of minimum vertex cover.

## Independent Set
Independent Set (קבוצה בלתי תלויה) $S \subseteq V$ is a set of vertices in a graph, no two of which are adjacent.  
$$\forall v,u \in S : vu \notin E$$
##### Maximum independent set
- $\alpha(G)=|S|$ is number of vertices of maximum independent set.
##### Maximal independent set
maximal independent set (קבוצה בלתי תלויה מקסימלית להכלה) is an independent set that is not a subset of any other independent set. In other words, there is no vertex outside the independent set that may join it because it is maximal with respect to the independent set property. 
- A MIS is also a dominating set in the graph. (question 6a)
## Dominating set
dominating set (קבוצה שלטת) $D \subseteq V$ of graph $G$ is, such that any vertex of $G$ is either in $D$, or has a neighbor in $D$.
- **Theorem 4.13** - $S\subseteq V$ is independent set in $G=(V,E)$ if and only if $V \setminus S$ is vertex-cover of $G$.
- **Theorem 4.14** -  $\alpha(G)+\beta(G)=|V|$ for every graph $G=(V,E)$. i.e. a set is independent if and only if its complement is a vertex cover.
- **Theorem 4.15** - for any graph, the size of every vertex cover is greater than or equal to size of every matching in $G$, in particular $\beta(G)\geq \nu(G)$.








