
# Stable Matching Problem

- Let $M=\{m_1,\ldots,m_n\},W=\{w_1,\ldots,w_n\}$ be two sets. 
	- A set $S\subseteq M\times W$ is called a **matching** if no two pairs in $S$ have the same first or second element.
		- A matching $S$ is **perfect** if each element of $M$ and each element of $W$ appears in exactly one pair in $S$.
		- A **preference list** $P_m$ for $m\in M$ is a list of elements of $W$ in the order of preference. (similarly for $w\in W$)
		- An **unstable** pair $(m,w)$ is a pair such that $m$ prefers $w$ to his current partner, and $w$ prefers $m$ to her current partner.
		- A matching $S$ is **stable** if (i) it is perfect, and (ii) there is no instability with respect to $S$.


> [!question] Stable Matching Problem
> Does there exist a stable matching for every set of preference lists?
> Given a set of preference lists, can we efficiently construct a stable matching if there is one?

> [!example] Example 1
> given $M=\{m,m'\},W=\{w,w'\}$, and the following preference lists:
> - $m$: $w,w'$
> - $m'$: $w,w'$
> - $w$: $m,m'$
> - $w'$: $m,m'$
> there is a unique stable matching: $\{(m,w),(m',w')\}$.

> [!example] Example 2
> given $M=\{m,m'\},W=\{w,w'\}$, and the following preference lists:
> - $m$: $w,w'$
> - $m'$: $w',w$
> - $w$: $m',m$
> - $w'$: $m,m'$
> there are two stable matchings: $\{(m,w),(m',w')\}$ and $\{(m,w'),(m',w)\}$.

## Gale-Shapley Algorithm

- Gale-Shapley Algorithm is guaranteed to terminate and produce a stable matching for any set of preference lists.

```
Initially all m ∈ M and w ∈ W are free
while ∃ m ∈ M who is free and hasn't proposed to every w ∈ W
	Choose such a man m
	Let w be the highest-ranked woman in m's preference list to whom m has not yet proposed
	if w is free
		(m, w) become engaged
	else some pair (m', w) already exists
		if w prefers m to m'
			(m, w) become engaged
			m' becomes free
		else
			(m', w) remain engaged
Return the set of engaged pairs
```

- (1.1) $w$ remains engaged from the point at which she receives her first proposal; and the sequence of partners to which she is engaged gets better and better for her.
- (1.2) The sequence of women to whom $m$ proposes gets worse and worse for him.
- (1.3) G-S Algorithm terminates after at most $n^2$ iterations of the while loop.
- (1.4) If $m$ is free at some point in the execution of the algorithm, then there is a woman $w$ to whom $m$ has not yet proposed.
- (1.5) The set $S$ of pairs returned at termination is a perfect matching.
- (1.6) Consider an execution of the algorithm that returns a set of paris $S$. Then $S$ is a stable matching.
- (1.7) Every execution (i.e., every choice of the order men propose) of the G-S Algorithm results in the set $S^*=\{m,\text{best}(m):m\in M\}$
	- $w$ is a **valid partner** of $m$ if $w$ there is a stable matching that contains the pair $(m,w)$.
	- $w$ is the **best valid partner** of $m$ (denoted as $\text{best}(m)$)  if $w$ is a valid partner of $m$ and no woman whom $m$ ranks higher than $w$ is a valid partner of his.
- (1.8) In the stable matching $S^*$, each woman is paired with her worst valid partner.
	- A man $m$ is a **valid partner** of a woman $w$ if there a stable matching that contains the pair $(m,w)$.
	- A man $m$ is the **worst valid partner** of a woman $w$ if $m$ is a valid partner of $w$ and, and no man whom $w$ ranks lower than $m$ is a valid partner of hers.


# Interval Scheduling

- Given a set of $n$ requests
- Each request $i$ is specified by a start time $s_i$ and a finish time $f_i$, where $s_i<f_i$.
- Two requests $i$ and $j$ are **compatible** if their intervals do not overlap, i.e., $f_i\leq s_j$ or $f_j\leq s_i$.
- A set $A$ of requests is **compatible** if every pair of requests in $A$ is compatible.
- The **interval scheduling problem** is to find a maximum-cardinality compatible set of requests.

## Weighted Interval Scheduling

- As in the interval scheduling problem, we are given a set of $n$ requests, each specified by a start time $s_i$ and a finish time $f_i$.
- In addition, each request $i$ has an associated **value** (or **weight**) $v_i>0$.
- The goal is to find a compatible subset of intervals of maximum total value.
- The case in which $\forall i, v_i=1$ is simply the interval scheduling problem.


# Bipartite Matching Problem

- Given a [[Graphs#Bipartite graph|bipartite graph]] $G=(X\cup Y,E)$, the **bipartite matching problem** is to find a [[Edge Covering & Matching#Maximum matching|maximum matching]] in the graph.
- If $|X|=|Y|=n$, then there is a [[Edge Covering & Matching#Perfect matching|perfect matching]] if and only if the maximum matching has size $n$
- (see also [[Graphs#Matching in Bipartite graph|Matching in Bipartite graph]])

# Independent Set Problem

- The **independent set problem** is to find an [[Vertex Cover & Independent Set#Maximum independent set|maximal independent set]] in a given graph.
- The _Interval Scheduling Problem_ is a special case of the independent set problem. (The requests can be represented as a graph, where each request is a vertex, and two requests are connected by an edge if they are not compatible. The interval scheduling problem is equivalent to finding a maximum independent set in this graph)
- The _Bipartite Matching Problem_ is a special case of the independent set problem. (Given a bipartite graph $G'=G=(V',E')$, #todo )
- No efficient algorithm is known for the general independent set problem, and it is conjectured that no such algorithm exists. 
- The independent set problem is NP-complete.

# Competitive Facility Location

- The geographic region is divided into $n$ zones $1,\ldots,n$.
- Each zone $i$ has a value $b_i$, which is the revenue obtained by either of the compenies if it opens a franchise there.
- Certain pairs of zones $(i,j)$ are **adjacent**, and local zoning laws prevent two adjacent zones from each containing a franchise, regardless of which company owns them.
- We model this problem as a graph $G=(V,E)$, where $V=\{1,\ldots,n\}$ (zones) and $E=\{(i,j):i,j\in V\}$ (adjacent zones).
- Our game consists of two players, $P_1$ and $P_2$, alternately selecting nodes in $G$, with $P_1$ going first.
- #todo


____

