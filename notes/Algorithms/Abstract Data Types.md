# Set

- Core set-theoretical operations
	- `union(S,T)` - return $S\cup T$
	- `intersection(S,T)` - return $S\cap T$
	- `difference(S,T)` - return $S-T$
	- `subset(S,T)` - return true if $S\subseteq T$
- Typical operations that may be provided by a **static set** structure $S$ are: 
	- `member(S,x)` - return true if $x\in S$
	- `is-empty(S)` - return true if $S=\emptyset$
	- `size(S)` return $|S|$
	- `build-set(x_1,x_2,...,x_n)` create a set from the elements $x_1,x_2,...,x_n$
	- and others
- A **dynamic set** typically adds the **dynamic set operations**
	- dictionary operations (insert, delete, search)
	- minimun, maximum, successor, predecessor

# Stack

- **LIFO**

| Operation                         |                                                |
| --------------------------------- | ---------------------------------------------- |
| `Push(S,x)`                       | add an element to the collection               |
| `Pop(S)`                          | remove the most recently added element         |
| (optional) `Peek(S)` (or `Top(S)` | return the most recently added element element |
| (optional) `Stack-empty(S)`       |                                                |

- implementations:
	- array
	- linked list

# Queue

- **FIFO**

| Operation        |        | desc |
| ---------------- | ------ | ---- |
| `enqueue(Q,x)`   | $O(1)$ | g    |
| `dequeue(Q)`     | $O(1)$ |      |
| `queue-empty(Q)` | $O(1)$ |      |
| `queue-full(Q)`  | $O(1)$ |      |

# Double-Ended Queue (Deque)


|                     |        | desc |
| ------------------- | ------ | ---- |
| `head-enqueue(Q,x)` | $O(1)$ | g    |
| `tail-enqueue(Q,x)` | $O(1)$ | g    |
| `head-dequeue(Q)`   | $O(1)$ |      |
| `tail-dequeue(Q)`   |        |      |

# Priority Queue

| Operation |           |
| --------- | --------- |
| `insert(Q,x)` | Add an element `x` with a priority |
| `extract-max(Q)` (or `extract-min(Q)`) | Remove and return the element with the highest (lowest) priority |
| `peek-max(Q)` (or `peek-min(Q)`) | Return the element with the highest (lowest) priority |


- implementions: 
	- binary heap (most common)
	- fibonacci heap (more advanced, better theoretical performance)
	- and others


# Graph

- A **graph** is an ADT that is meant to implement the undirected and directed [[graphs]] concepts from graph theory

### Graph Representation

- A **sparse graph** is a graph with $O(n)$ edges. A **dense graph** is a graph with $O(n^2)$ edges.
- $G=(V,E)$ is a graph with $n$ vertices and $m$ edges.
	- An **adjacency matrix** is a $n\times n$ matrix $A$ where $A_{ij}=1$ if $(i,j)\in{E}$ and $A_{ij}=0$ otherwise.
		- If $G$ is undirected, the adjacency matrix is symmetric.
		- The adjacency matrix representation allows us to check in $O(1)$ time if a given edge is in the graph
		- The adjacency matrix representation requires $\Theta(n^2)$ space. (when the graph has many fewer edges than $n^2$, more compact representations are possible)
		- Many graph algorithms need to examine all the edges connected to a given vertex $v$. In the worst case, $v$ may have $\Theta(n)$ neighbors. However, this case is rare in practice.
	- An **adjacency list** is an array `Adj` of $n$ records, where `Adj[i]` contains all the vertices $j$ such that $(i,j)\in{E}$. 
		- The length of `Adj[v]` is the degree of vertex $v$ and is denoted by $n_v$. 
		- In an undirected graph, each edge $(i,j)$ appears twice. the node $j$ appears in `Adj[i]` and the node $i$ appears in `Adj[j]`.
		- Adjacency lists are a more compact representation of sparse graphs.
		- Adjacency lists require $O(n+m)$ space


| | Adjacency Matrix | Adjacency List |
| -- |------------------|----------------|
| Space | $\Theta(n^2)$ | $O(n+m)$ |
| Check if $(u,v)\in{E}$ | $O(1)$ | $O(n_v)$ |
