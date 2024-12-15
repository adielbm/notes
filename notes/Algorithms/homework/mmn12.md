mmn 12

---


# Q1

- given a directed graph $G=(V,E)$, with $w(e)>0$ for all $e\in E$. and a source vertex $s\in V$.
- given that for all $v\in V$, there is a path $P_{s,v}$ from $s$ to $v$.
- $w(P)=\sum_{e\in P}w(e)$
- if $w(P_{s,v})\leq w(P'_{s,v})$ for each path $P'_{s,v}$ then $P_{s,v}$ is a shortest path from $s$ to $v$.
- if $w_1<w_2<\ldots<w_k$ are the possible weights of paths from $s$ to $v$, then for each shortest path $P_{s,v}$, we have $w(P_{s,v})=w_1$. and the paths with the weight $w_2$ are called an **almost shortest path** (or **second shortest path**).
- if an edge $e=(u,v)\in E$ is the last edge in some shortest path $P_{s,v}$, then $e$ is called a **critical edge** (שימושית)

- **(A) Paths with only critical edges are shortest paths**
	- **Base Case ($k=1$)**:
		- A path with $k = 1$ means $P_{s,v}$ has only one edge, which is critical, and thus is a shortest path, because it is the only path from $s$ to $v$.
	- **Inductive Assumption**:
		- Assume that for any path $P_{s,v}$ of length $k-1$, if all its edges are critical, then $P_{s,v}$ is a shortest path.
	- **Inductive Step**:
		- Consider a path $P_{s,v}$ of length $k$, where all edges are critical.
		- Let $e = (u, v)$ be the last edge of $P_{s,v}$. This means $P_{s,v} = P_{s,u} \cup \{e\}$, where $P_{s,u}$ is a path from $s$ to $u$ of length $k-1$.
		- By the inductive assumption, $P_{s,u}$ is a shortest path since all its edges are critical.
		- Now consider the addition of $e$, which is also critical. By definition of criticality, adding $e$ to the shortest path $P_{s,u}$ from $s$ to $u$ results in the shortest path $P_{s,v}$ from $s$ to $v$.
		- The total weight of $P_{s,v}$ is $w(P_{s,v}) = w(P_{s,u}) + w(e)$.
		- No alternative path from $s$ to $v$ can have a lower weight because $P_{s,u}$ is already the shortest to $u$ and $e$ is critical.
		- Thus, $P_{s,v}$ is a shortest path.
- **(B) Paths containing non-critical edges are not shortest paths**
	- Let $P_{s,v}$ be a path from $s$ to $v$ of any length $k$. Suppose $P_{s,v}$ includes a non-critical edge $e = (x, y)$.  
	- By definition, an edge is non-critical if there exists another path $P'_{s,y}$ from $s$ to $y$ that does not use $e$ and $w(P'_{s,y}) < w(P_{s,y})$.  
	- Let's define a new path by $P''_{s,v} = P'_{s,y} \cup P_{y,v}$.
	- Since $w(P'_{s,y}) < w(P_{s,y})$ thus $w(P''_{s,v}) < w(P_{s,v})$.
	- Thus, $P_{s,v}$ cannot be a shortest path because.
- **(C) Prove that if $P_{s,v}$ is a second shortest path, then it has exactly one non-critical edge.**
	- $P_{s,v}$ is a second shortest path if $w(P_{s,v}) = w_2>w_1$, where $w_1$ is the weight of the shortest path. Hence, $P_{s,v}$ is not a shortest path. Therefore, $P_{s,v}$ must contain at least one non-critical edge. (by A)
	- Suppose $P_{s,v}$ contains more than one non-critical edge. Let $e_1=(x_1,y_1)$ and $e_2=(x_2,y_2)$ be two non-critical edges in $P_{s,v}=P_{s,x_1}\cup\{e_1\}\cup P_{y_1,x_2}\cup\{e_2\}\cup P_{y_2,v}$.
	- Let's $P'_{s,v}$ be a shortest path from $s$ to $v$.
	- Since $e_1$ and $e_2$ are non-critical, there exist paths $P'_{s,y_1}$ and $P'_{s,y_2}$ that are shorter than $P_{s,y_1}$ and $P_{s,y_2}$, respectively.
	- Therefore, the path $P''_{s,v}=P'_{s,y_1}\cup P_{y_1,x_2}\cup\{e_2\}\cup P_{y_2,v}\neq P_{s,v}$ and
		- $w(P'_{s,v})<w(P''_{s,v})$ (since $w(P'_{y_1,v})<w(P_{y_1,v})$)
		- $w(P''_{s,v})<w(P_{s,v})$ (since $w(P'_{s,y_1})<w(P_{s,y_1})$)
	- Therefore $w(P'_{s,v})<w(P''_{s,v})<w(P_{s,v})$, which contradicts the assumption that $P_{s,v}$ is a second shortest path.
- **(D) Prove that the prefix of $P_{s,v}=P_{s,u_1}\cup\{e\}\cup P_{u_2,v}$ from $s$ to $u_1$ is a shortest path, and the suffix from $u_2$ to $v$ is a shortest path.** 
	- By A, both the prefix and the suffix are shortest paths since they only contain critical edges.
- (E) show using the above an algorithm to find the second shortest path from $s$ to $t$ with a time complexity of $\Theta(|E|\cdot \log |V|)$. 
	- find a shortest path $P_{s,t}$ using Dijkstra's algorithm from $s$.
	- define $w_{sec}=\infty$ and $e_{sec}=\emptyset$.
	- for each edge $e=(u,v)$ such that `pred[v]!=u` (i.e., $e$ is not a critical edge) do:
		- if $w(P_{s,u})+w(e)+w(P_{v,t})<w_{sec}$ then:
		    - $w_{sec}=w(P_{s,u})+w(e)+w(P_{v,t})$
		    - $e_{sec}=e$
	- if $e_{sec}=\emptyset$ or $w_{sec}=w(P_{s,t})$ then there is no second shortest path from $s$ to $t$. otherwise, we have a second shortest path that is $P_{s,u}\cup\{e_{sec}\}\cup P_{v,t}$.


# Q2


![[Pasted image 20241209161801.png]]

![[Pasted image 20241209161809.png]]

- given undirected connected graph $G=(V,E)$ with $w(e)>0$ that are integer values and distinct.
- $T^1$ is a tree of shortest paths from $s$ to all other vertices in $G$. and $T^2$ is a minimum spanning tree of $G$ that its weight is minimal among all spanning trees of $G$.
- (A) prove that $T^1$ and $T^2$ have at least one common edge.
	- Assume for contradiction that $T^1=(V,E_1)$ and $T^2=(V,E_2)$ have no common edges.
	- That is, $E_1\cap E_2=\emptyset$.
	- Let's take some edge $e=(s,v)$ in $T^2$ that it is not in $T^1$.
	- Since $T^1$ is a tree of shortest paths, there is a path $P_{s,v}$ from $s$ to $v$ in $T^1$ such that $w(P_{s,v})\leq w((s,v))$.
	- Let's denote the graph $\overline{T^2}$ as the graph that is the same as $T^2$ but with inserting of the path $P_{s,v}=s \rightsquigarrow p \rightsquigarrow v$ and removing the edge $(s,v)$ and removing some other edge $(p,q)$.
	- Therefore, $w(P_{s,v}) < w((s,v)) + w((p,q))$. (since $w((p,q))>0$)
	- So we have a spanning tree $\overline{T^2}$ such that $w(\overline{T^2})<w(T^2)$, which contradicts the assumption that $T^2$ is a minimum spanning tree.
- (B) show a sequence of graph $G_n=(V_n,E_n)$ with $n=|V_n|$ and a source vertex $s_n\in V$ and integer positive weights $w_n(e)$ such that the graph $G_n$ has $T^1_n$ and $T^2_n$ that have exactly one common edge.
	- #todo 

# Q4

![[Pasted image 20241209161739.png]]

- Prove that for every rooted binary tree $T$ with $n\geq 2$ leaves, there exists a frequency sequence $f_1,f_2,\ldots,f_n$ s.t. one of the Huffman trees for this frequency sequence is $T$.
	- Let's use in induction on the number of leaves $n$ in the tree $T$.
	- Base Case ($n = 2$): 
		- A full binary tree with $n = 2$ leaves consists of a single root with two child nodes (the leaves). Huffman's algorithm, when provided with two frequencies $f_1$ and $f_2$, will always construct a tree where these two nodes are combined into a root. Thus, any $T$ with $n = 2$ leaves is trivially realizable by Huffman's algorithm.
	- Inductive Hypothesis: 
		- Assume that for any full binary tree $T$ with $n \geq 2$ leaves, there exists a frequency sequence $f_1, f_2, \ldots, f_{n}$ such that Huffman's algorithm produces $T$.
	- Inductive Step
		- Select two leaves $a$ and $b$ at the maximum depth. Let the parent of these leaves be $v$.
		- If we remove $a$ and $b$ from $T$ and replace their parent $v$ with a single new leaf $m$. This creates a new tree $T'$ with $n - 1$ leaves.
		- By the inductive hypothesis, there exists a frequency sequence $f'_1, f'_2, \ldots, f'_{n-1}$ for the leaves of $T'$ such that Huffman's algorithm can reconstruct $T'$.
		- Let's define frequencies of $a$ and $b$ be $f_a$ and $f_b$, respectively, such that $f_a + f_b = f_m$, where $f_m$ is the frequency of $m$ in $T'$. Assign $f_a$ and $f_b$ such that they are distinct and smaller than all other frequencies in $T'$.
		- In the first step of Huffman's algorithm, the two smallest frequencies $f_a$ and $f_b$ will be merged into $m$, producing $T'$. By the inductive hypothesis, the remaining steps of the algorithm will reconstruct $T'$, and hence $T$ is produced.
	
	
	
	
	
	
