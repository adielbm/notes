# Testing Bipartiteness

- We can implement an algorithm to test whether a graph is bipartite by simply taking the implementation of BFS and adding an extra array `Color` over the nodes. 
- Whenever we get to a step in BFS where we are adding a node $v$ to a list $L[i + 1]$, we assign:
	- `Color[v] = red` if $i + 1$ is an even number,
	- `Color[v] = blue` if $i + 1$ is an odd number. 
- At the end of this procedure, we simply scan all the edges: 
	- if there is any edge for which both ends received the same color, then the graph is not bipartite. 
	- Otherwise, the graph is bipartite. 
- Thus, the total running time for the coloring algorithm is $O(m + n)$, just as it is for BFS.
