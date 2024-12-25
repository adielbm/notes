- The **shortest path problem** is the problem of finding the shortest path between two nodes in a graph


- Single-source shortest paths
	- [[#Undirected Graphs (using BFS)|using BFS]] (undirected, unweighted) 
	- [[#Dijkstra's Algorithm]] (directed, with nonnegative weights)
	- [[#Bellman–Ford algorithm]] (directed, weighted, no negative cycles)
- All-pairs shortest paths
	- [[#Floyd–Warshall algorithm]]

## Undirected Graphs (using BFS) 

- we can use the BFS algorithm to find the shortest path in an undirected unweighted graph.
- for a weighted graph, we can replace each edge with a path of length equal to the weight of the edge and then run the BFS algorithm.
	- cons: 1. the new graph may have multiple edges between two nodes. 2. it's not good for weights of real numbers. 

## Dijkstra's Algorithm

- **Dijkstra's algorithm** is an algorithm for finding the shortest path (in terms of the sum of weights) from a given start node to every other node in a directed graph with non-negative weights.
	- Although this algorithm is for a directed graph, it can be used for an undirected graph by replacing each undirected edge $(u,v)$ with two directed edges $(u,v)$ and $(v,u)$, each with the same weight.
	- Assumptions: 
		- the graph is connected 
		- non-negative weights
- The output of Dijkstra's algorithm is a tree called the **shortest path tree** rooted at the start node.
- Dijkstra's algorithm is using a [[Abstract Data Types#Priority Queue|priority queue]] which can be implemented using:
	- (unsorted) Doubly linked list - $\Theta(|V|^2)$
	- Binary heap $\Theta(|E|\cdot \log|V|)$
	- Fibonacci heap $\Theta(|E| + |V|\log|V|)$


```
# Dijkstra's Algorithm using Priority Queue
Dijkstra(G, s, w):
input: 
	G = (V, E) directed graph
	non-negative weights w
	s = source node
output: for each u ∈ V:
	d[u] = the shortest path estimate from s to u
	π[u] = the predecessor of u in the shortest path tree
----
InitPriorityQueue(Q)
d[s] = 0
Q.Insert(s, 0)

For each u ∈ G.V: 
	if u ≠ s:
		d[u] = ∞
		π[u] = null  
		Q.Insert(u, ∞)

While Q ≠ ∅:
    u ← Q.ExtractMin()   # Remove & return the node with the smallest d[u]
    S ← S ∪ {u}                      # Mark u as processed
    For each neighbor v ∈ G.Adj[u]:
        If d[u] + w(u, v) < d[v]:    # Relax the edge (u, v)
            d[v] = d[u] + w(u, v)
            π[v] = u                 # Update the predecessor (optional)
            DECREASE-KEY(Q, v, d[v]) # Update v's priority in Q
```



> [!Exercise] Flight Times and Layovers (lecture 4 exercise)
> You are given:
> 1. **A list of cities** and their unique identifiers.
>2. **Flight times** between pairs of cities, represented as a weighted directed graph:
>    - Each edge represents a flight with a time cost (in hours).
>3. **Waiting times** at each city (in hours), which must be added to the travel time whenever a flight lands there.
>
>**Goal**: Write a program to calculate:
>
>1. The **shortest total travel time** from a given starting city to every other city.
>2. The **path** taken for the shortest travel time to each city.



## Bellman–Ford algorithm

- The **Bellman–Ford algorithm** is an algorithm for finding the shortest path from a single source node to all other nodes in a directed weighted graph.
	- It is slower than Dijkstra's algorithm for the same problem, but more versatile, as it is capable of handling graphs in which some of the edge weights are negative numbers
- If there is a negative cycle reachable from $s$, then there is no shortest path from $s$ to any node, and $\text{dist}(v)=-\infty$


https://en.wikipedia.org/wiki/Topological_sorting

```
# Bellman-Ford Algorithm
Input: G = (V, E) weighted directed graph without negative cycles, source node s
Output: shortest-paths T = (V, E_T) tree rooted at s
Runnning time: O(|V|*|E|)
---
d(u) = ∞ for each u ∈ V
d(s) = 0
π(u) = null for each u ∈ V
for i = 1 to |V| - 1:
    for each edge (v, z) ∈ E:
        if d(v) + w(v, z) < d(z):
            d(z) = d(v) + w(v, z)
            π(z) = v
            
```

- Theorem: Let $G=(V,E)$ be a weighted directed graph without negative cycles, and let $s$ be a source node. Bellman-Ford algorithm correctly computes the shortest path from $s$ to all other nodes in $G$.
	- Lemma: After $\ell$ iterations of the outer loop of the Bellman-Ford algorithm, for each node $v\in{V}$, $\text{dist}(v)$ is the length of the shortest path from $s$ to $v$ that has at most $\ell$ edges.
		- Proof: By induction on $\ell$.
- Proof: By the lemma, after $|V|-1$ iterations, $\text{dist}(v)$ is the length of the shortest path from $s$ to $v$ that has at most $|V|-1$ edges. Since the shortest path has at most $|V|-1$ edges, it has at most $|V|$ vertices, and so the shortest path has no cycles. Therefore, the shortest path is a simple path, and so the Bellman-Ford algorithm computes the correct shortest path from $s$ to all other nodes in $G$.


```python
def bellman_ford(graph, vertices, start):
    """
    Calculate the shortest paths from the start node to all other nodes
    in a graph with potentially negative weights.

    :param graph: List of edges in the format (u, v, weight)
    :param start: The starting node
    :return: Tuple (distances, negative_cycle)
    """

    n = len(vertices)

    # Initialize distances to infinity, except for the start node
    d = {v: float('inf') for v in vertices}
    d[start] = 0

    # Relax edges up to (n-1) times
    for i in range(n - 1):
        for u, v, weight in graph:
            if d[u] != float('inf') and d[u] + weight < d[v]:

                if i == n - 1:
                    return d, True  # Negative cycle detected

                d[v] = d[u] + weight
    return d, False  # No negative cycle


# Example usage
graph = [
    ('s', 'a', 4),
    ('s', 'b', -5),
    ('b', 'a', 6),
    ('a', 'v', 3),
    ('b', 'v', 2)
]
# Extract number of vertices and edges
vertices = set()
for u, v, weight in graph:
    vertices.add(u)
    vertices.add(v)
start_node = 's'

distances, negative_cycle = bellman_ford(graph, vertices, start_node)
if negative_cycle:
    print("Graph contains a negative weight cycle.")
else:
    print("Shortest distances from start node:", distances)

```

# Floyd–Warshall algorithm

```
# input: G = (V, E, w) weighted directed graph
# output: dist[u][v] = the length of the shortest path from u to v
----
dist |V| × |V| # 2D array of minimum distances initialized to ∞ (infinity)

for each edge (u, v) do
    dist[u][v] ← w(u, v)  # The weight of the edge (u, v)

for each vertex v do
    dist[v][v] ← 0

for k from 1 to |V|
    for i from 1 to |V|
        for j from 1 to |V|
            if dist[i][j] > dist[i][k] + dist[k][j] 
                dist[i][j] ← dist[i][k] + dist[k][j]
            end if
```
##### Floyd-Warshall with Path Reconstruction

```
# Floyd-Warshall Algorithm (with Path Reconstruction)
# Input: G = (V, E, w) weighted directed graph
---
dist |V| × |V| # 2D array of minimum distances initialized to ∞
prev |V| × |V| # 2D array of vertex indices initialized to null

for each edge (u, v) do
	dist[u][v] ← w(u, v)
	prev[u][v] ← u

for each vertex v do
	dist[v][v] ← 0
	prev[v][v] ← v

for k from 1 to |V| do
	for i from 1 to |V|
		for j from 1 to |V|
			if dist[i][j] > dist[i][k] + dist[k][j] then
				dist[i][j] ← dist[i][k] + dist[k][j]
				prev[i][j] ← prev[k][j]


# procedure Path(u, v)
if prev[u][v] = null then
	return []
path ← [v]
while u ≠ v do
	v ← prev[u][v]
	path.prepend(v)
return path
```