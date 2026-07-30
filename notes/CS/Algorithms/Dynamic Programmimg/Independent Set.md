
# Problems

- GIven a graph:
	- **maximal** [[Graph#Independent Set|independent set]] (i.e. no other vertex can be added to the set)
		- find a single _maximal independent set_
			- Sequential algorithm
			- Random-selection parallel algorithm (Luby's Algorithm)
			- Random-priority parallel algorithm
			- Random-permutation parallel algorithm (Blelloch's Algorithm)
		- find all _maximal independent sets_
		- count the number of _maximal independent sets_
	- **maximum** independent set: (i.e. largest possible independent set)
		- find single _maximum independent set_
		- find all _maximum independent sets_
		- count the number of _maximum independent sets_
	- Maximum Weighted Independent Set Problem
		- Find an independent set where the sum of **vertex weights** is maximized.
	- Clique problem
		- **maximum clique problem:** finding a maximum clique (a clique with the largest possible number of vertices), 
			- **Relation**: The maximum clique problem in a graph is equivalent to the maximum independent set problem in the graph's complement.
		- finding a maximum weight clique in a weighted graph, 
		- listing all maximal cliques (cliques that cannot be enlarged), and 
		- testing whether a graph contains a clique larger than a given size
	- Graph coloring
		- Does _G_ admit a proper vertex coloring with _k_ colors?

# Maximal Independent Set

- Greedy algorithm to find a maximal independent set in a graph (but not necessarily a maximum independent set).
	- In tree, the algorithm finds a maximum independent set.

```python 
def find_a_maximal_IS(graph):
    """
    Find a single maximal independent set using a greedy algorithm.

    Parameters:
    graph (dict): An adjacency list representation of the graph. 
                  Keys are vertices, values are sets of neighbors.

    Returns:
    set: A maximal independent set of the graph.
    """
    H = set(graph.keys())  # Initialize H with all vertices
    independent_set = set()  # Initialize the independent set

    while H:
        # Find vertex u that minimizes the degree in H
        # Intersection with H to count neighbors in H
        u = min(H, key=lambda x: len(graph[x] & H))
        independent_set.add(u)  # Add u to the independent set
        # Remove u and its neighbors from H
        H -= {u} | (graph[u] & H)

    return independent_set


# Example usage:
graph = {
    1: {2, 3},
    2: {1, 3, 4},
    3: {1, 2},
    4: {2}
}

result = find_a_maximal_IS(graph)
print("Maximal Independent Set:", result)

```


# Maximum Weighted Independent Set Problem

Find an independent set where the sum of **vertex weights** is maximized.