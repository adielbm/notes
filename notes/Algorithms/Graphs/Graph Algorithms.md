
- **st-connectivity** is a decision problem determining if there is a path between two vertices $s$ and $t$ in a graph $G$.








# Directed Graphs 

## Directed Graph Traversal

- Given a [[Graphs#Directed Graph|directed graph]] $G=(V,E)$:
	- $G^\text{rev}$ is the **reverse graph** of $G$, where $G^\text{rev} = (V, E^\text{rev})$ and $E^\text{rev} = \{(u, v) \mid (v, u) \in E\}$.
	- A node $v$ has a path to $s$ in $G$ if and only if $s$ has a path to $v$ in $G^\text{rev}$.
	- By running `BFS(s)` (or `DFS(s)`) on $G$, we can find the set of all nodes reachable from $s$ in $G$.
	- By running `BFS(s)` (or `DFS(s)`) on $G^\text{rev}$, we can find the set of all nodes that can reach a given node $s$ in $G$.
	- There is a simple linear-time algorithm to test if a directed graph is [[Graphs#Connectivity|strongly connected]] 
		- Run `BFS(s)` on $G$ for some node $s$.
		- Run `BFS(s)` on $G^\text{rev}$ for the node $s$
		- If all nodes are reachable from $s$ in both runs, then the graph is strongly connected.


# lecture 3 notes

- probelms:
	- how to find all shortest paths from a given node $s$ to a given node $t$ in a graph $G$?
- problem solving using reduction (_reduction_ is the process of transforming one problem into an easier eqvivalent problem)
	- given an undirected heaph G with edges with weights. we ewant an algorithme that finds the shortest path between in terms of the sum of the weights of the edges. 
		-  will runnig of BFS algo. solve the problem?
			- ans: no. counter example was shown in the lecture.
		- solution: 
			- by using the reduction method, we can build a new graph $G'$ by replacing each edge $(u,v)$ with a path of length of the minimal weight is in the original graph. 
			- then, we can run BFS on the new graph $G'$ to find the shortest path.
			- the reducion does not lose or add any shortest path. i.e. we can prove: 
				- for every $k$-length path from $a$ to $b$ in $G$, there is a $k$-length path from $a$ to $b$ in $G'$. (length=the sum of the weights of the edges)
				- for every every $k$-length path from $a$ to $b$ in $G'$ (where $a$ and $b$ are nodes in $G$), there is a $k$-length path from $a$ to $b$ in $G$.
			- the running time of the new algorithm is $O(n+m)$



- exercise:
	- given a neighberhood with two-way streets. but there is a traffic jam in the city. 
	- we want to make the roads one-way to solve the traffic jam.
		- we have to make sure that the city remains strongly connected.
			- is it always possible? no. #todo 
		- **bridge** in an undirected graph is an edge in an undirected connected graph is a bridge **if removing it disconnects the graph** 
	- we'll use in `Bridges` algo. in time O(n+m) that cheeck if G has a bridge or not. 
	- our question is: give an algorithm that make all roads one-way such that the city remains strongly connected.
	

	
		- hint: dfs has two types of edges: (in undirected graph. in directed graph, we have more types of edges)
			- tree edges - edges that are in the dfs tree
			- back edges - edges that are not in the dfs tree BUT connects a node to an ancestor in the dfs tree. 
		- algo:
			- if there is a bridge in the graph, so this road should be two-way, so we can't make the graph directed and strongly connected. 
			- otherwise, we can make the graph directed and strongly connected
		- correctness proof: 
			- every node is reachable from the root in the dfs tree. 
- varient of the problem: what if we want make roads one way as much as possible..

